from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import base64
import os
import uuid

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
