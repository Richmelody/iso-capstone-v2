from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import base64
import os
import uuid
import json
import httpx

app = FastAPI()

# Configure CORS
origins = [
    "https://assessments.chigozieikuru.cloud",
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CheatingLog(BaseModel):
    studentEmail: str
    studentName: str
    violationType: str
    details: str
    timestamp: str
    snapshot: str  # Base64 image string

# Ensure directories exist
DATA_DIR = "/app/data"
SNAPSHOTS_DIR = os.path.join(DATA_DIR, "snapshots")
DB_PATH = os.path.join(DATA_DIR, "proctor_logs.db")

def init_db():
    os.makedirs(SNAPSHOTS_DIR, exist_ok=True)
    with sqlite3.connect(DB_PATH, timeout=15) as conn:
        conn.execute("PRAGMA journal_mode=WAL;")
        conn.execute("""
            CREATE TABLE IF NOT EXISTS cheating_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                student_email TEXT,
                student_name TEXT,
                violation_type TEXT,
                details TEXT,
                timestamp TEXT,
                snapshot_path TEXT
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS access_codes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                code TEXT UNIQUE,
                exam_id TEXT,
                is_used BOOLEAN DEFAULT 0,
                assigned_email TEXT,
                assigned_name TEXT,
                saved_score INTEGER DEFAULT 0,
                saved_time_left INTEGER DEFAULT 3600,
                saved_question_idx INTEGER DEFAULT 0,
                saved_failed_cats TEXT DEFAULT '[]',
                saved_answers TEXT DEFAULT '{}'
            )
        """)
        try:
            conn.execute("ALTER TABLE access_codes ADD COLUMN assigned_name TEXT")
        except sqlite3.OperationalError:
            pass # Column likely already exists
            
        try:
            conn.execute("ALTER TABLE access_codes ADD COLUMN saved_answers TEXT DEFAULT '{}'")
        except sqlite3.OperationalError:
            pass # Column already exists
            
        conn.execute("""
            CREATE TABLE IF NOT EXISTS exam_results (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                student_name TEXT,
                student_email TEXT,
                exam_id TEXT,
                final_score INTEGER,
                timestamp TEXT DEFAULT CURRENT_TIMESTAMP
            )
        """)

        # Insert test codes
        conn.execute("INSERT OR IGNORE INTO access_codes (code, exam_id) VALUES ('DEMO-14001', '14001')")
        conn.execute("INSERT OR IGNORE INTO access_codes (code, exam_id) VALUES ('DEMO-9001', '9001')")
        conn.commit()

# Initialize DB on startup. 
# Inside a docker container, this runs when main.py is imported by uvicorn.
try:
    init_db()
except Exception as e:
    print(f"Error initializing database: {e}")

@app.post("/log-cheating")
def log_cheating(log: CheatingLog):
    # Ensure dir exists in case the volume was mounted empty after startup
    os.makedirs(SNAPSHOTS_DIR, exist_ok=True)

    # Decode base64 image and save
    try:
        image_data_str = log.snapshot
        if "," in image_data_str:
            # Handle data URLs (e.g., "data:image/png;base64,...")
            image_data_str = image_data_str.split(",")[1]
            
        image_data = base64.b64decode(image_data_str)
        filename = f"{uuid.uuid4().hex}.png"
        filepath = os.path.join(SNAPSHOTS_DIR, filename)
        
        with open(filepath, "wb") as f:
            f.write(image_data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Image decoding failed: {str(e)}")

    # Log to database. Use synchronous def so fastapi runs it in threadpool
    try:
        with sqlite3.connect(DB_PATH, timeout=15) as conn:
            conn.execute("PRAGMA journal_mode=WAL;")
            conn.execute("""
                INSERT INTO cheating_logs (student_email, student_name, violation_type, details, timestamp, snapshot_path)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (log.studentEmail, log.studentName, log.violationType, log.details, log.timestamp, filepath))
            conn.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database logging failed: {str(e)}")

    return {"status": "success", "message": "Log recorded successfully"}

class VerifyRequest(BaseModel):
    code: str
    studentEmail: str
    studentName: str

@app.post("/verify-code")
def verify_code(req: VerifyRequest):
    try:
        with sqlite3.connect(DB_PATH, timeout=15) as conn:
            cur = conn.cursor()
            cur.execute("""
                SELECT id, exam_id, is_used, assigned_email, assigned_name, 
                       saved_score, saved_time_left, saved_question_idx, saved_failed_cats, saved_answers
                FROM access_codes WHERE code = ?
            """, (req.code,))
            row = cur.fetchone()
            if not row:
                raise HTTPException(status_code=400, detail="SECURITY ALERT: Invalid Access Code")
            code_id, exam_id, is_used, assigned_email, assigned_name, saved_score, saved_time, saved_idx, saved_cats, saved_answers = row
            
            if is_used:
                raise HTTPException(status_code=400, detail="EXPIRED: This access code has already been burned.")
                
            if assigned_email and assigned_email.lower() != req.studentEmail.lower():
                raise HTTPException(status_code=400, detail="ACCESS DENIED: Code is locked to another candidate's email.")
                
            if assigned_name and assigned_name.strip().lower() != req.studentName.strip().lower():
                raise HTTPException(status_code=400, detail="ACCESS DENIED: Code is locked to another candidate's name.")
                
            # Lock to email AND name
            conn.execute("UPDATE access_codes SET assigned_email = ?, assigned_name = ? WHERE id = ?", (req.studentEmail, req.studentName, code_id))
            conn.commit()
            
            response = {"status": "success", "exam_id": exam_id}
            
            # If they have a saved state, inject it into the verified response
            if saved_idx and int(saved_idx) > 0 or (saved_answers and saved_answers != '{}'):
                response["savedState"] = {
                    "score": int(saved_score),
                    "timeLeft": int(saved_time),
                    "currentIdx": int(saved_idx),
                    "failedCats": json.loads(saved_cats),
                    "userAnswers": json.loads(saved_answers) if saved_answers else {}
                }
                
            return response
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

class CompleteRequest(BaseModel):
    code: str
    studentEmail: str
    score: int
    percent: str = "N/A"
    passed: bool = False

class SyncRequest(BaseModel):
    code: str
    studentEmail: str
    userAnswers: dict
    timeLeft: int
    currentIdx: int

@app.post("/sync-progress")
def sync_progress(req: SyncRequest):
    try:
        with sqlite3.connect(DB_PATH, timeout=15) as conn:
            cur = conn.cursor()
            cur.execute("SELECT id FROM access_codes WHERE code = ? COLLATE NOCASE AND assigned_email = ? COLLATE NOCASE AND is_used = 0", (req.code, req.studentEmail))
            if not cur.fetchone():
                raise HTTPException(status_code=400, detail="Invalid sync constraints")
                
            conn.execute("""
                UPDATE access_codes 
                SET saved_answers = ?, saved_time_left = ?, saved_question_idx = ? 
                WHERE code = ?
            """, (json.dumps(req.userAnswers), req.timeLeft, req.currentIdx, req.code))
            conn.commit()
            return {"status": "synced"}
    except Exception as e:
         raise HTTPException(status_code=500, detail=str(e))

@app.post("/complete-exam")
def complete_exam(req: CompleteRequest):
    try:
        with sqlite3.connect(DB_PATH, timeout=15) as conn:
            cur = conn.cursor()
            cur.execute("SELECT id, exam_id, is_used, assigned_name FROM access_codes WHERE code = ? COLLATE NOCASE AND assigned_email = ? COLLATE NOCASE", (req.code, req.studentEmail))
            row = cur.fetchone()
            if not row:
                raise HTTPException(status_code=400, detail="Invalid code or unauthorized user")
            
            code_id, exam_id, is_used, assigned_name = row
            
            if is_used:
                # Idempotency block: Prevent duplicate ledger recording if submitted multiple times
                return {"status": "success", "message": "Exam results already processed"}
                
            conn.execute("UPDATE access_codes SET is_used = 1 WHERE code = ?", (req.code,))
            
            if assigned_name:
                conn.execute("""
                    INSERT INTO exam_results (student_name, student_email, exam_id, final_score)
                    VALUES (?, ?, ?, ?)
                """, (assigned_name, req.studentEmail, exam_id, req.score))
                
            conn.commit()

            # Transmit Webhook Securely from the Backend
            try:
                # Use a fire-and-forget timeout so we don't block the frontend response
                with httpx.Client(timeout=2.0) as client:
                    client.post("https://hook.eu1.make.com/6qavu69ct5v9vuw4mcdxuc0iopyikare", json={
                        "source": f"ISO_Capstone_{exam_id}",
                        "name": assigned_name or "Unknown",
                        "email": req.studentEmail,
                        "score": req.score,
                        "percent": req.percent,
                        "passed": req.passed
                    })
            except Exception as e:
                # Deliberately ignore webhook misfires to let the database save succeed
                pass

            return {"status": "success", "message": "Exam completed, code burned and results saved"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

