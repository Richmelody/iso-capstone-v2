import sqlite3
import random
import string
import os

DB_PATH = "/app/data/proctor_logs.db"
# Fallback for running locally outside docker
if not os.path.exists(DB_PATH):
    DB_PATH = "data/proctor_logs.db"

def generate_code(exam_id: str, length=8):
    """Generate a secure, unique alphanumeric string"""
    chars = string.ascii_uppercase + string.digits
    random_str = ''.join(random.choice(chars) for _ in range(length))
    # Format: ASTUTE-[EXAM_ID]-[RANDOM]
    return f"ASTUTE-{exam_id.upper()}-{random_str}"

def generate_batch(exam_id: str, count: int):
    print(f"Generating {count} access codes for exam '{exam_id}'...")
    codes = []
    
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        # Ensure table exists in case the app hasn't started yet
        conn.execute("""
            CREATE TABLE IF NOT EXISTS access_codes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                code TEXT UNIQUE,
                exam_id TEXT,
                is_used BOOLEAN DEFAULT 0,
                assigned_email TEXT
            )
        """)
        
        for _ in range(count):
            while True:
                new_code = generate_code(exam_id)
                # Ensure uniqueness
                cur = conn.cursor()
                cur.execute("SELECT 1 FROM access_codes WHERE code = ?", (new_code,))
                if not cur.fetchone():
                    break
            
            conn.execute("INSERT INTO access_codes (code, exam_id) VALUES (?, ?)", (new_code, exam_id))
            codes.append(new_code)
            
        conn.commit()

    print("\n--- GENERATED SECURE ACCESS CODES ---")
    for c in codes:
        print(c)
    print("-------------------------------------\n")
    print("Provide these codes to candidates securely. They are single-use per email.")

if __name__ == "__main__":
    import sys
    
    # If no command line arguments are provided, run interactively
    if len(sys.argv) == 1:
        print("\n=== ASTUTE Vault: Code Generator ===")
        exam_id = input("1. Enter the Exam ID (e.g. 14001, 9001): ").strip()
        if not exam_id:
            print("Error: Exam ID is required.")
            sys.exit(1)
            
        count_str = input("2. How many codes do you want to generate? (default 1): ").strip()
        count = int(count_str) if count_str.isdigit() else 1
        
        print("\n")
        generate_batch(exam_id, count)
        
    else:
        # Support for traditional flags if they want to automate it later
        import argparse
        parser = argparse.ArgumentParser(description="Generate Secure Access Codes for ISO Exams")
        parser.add_argument("--exam", required=True, help="Exam ID (e.g. 14001, 9001)")
        parser.add_argument("--count", type=int, default=1, help="Number of codes to generate")
        
        args = parser.parse_args()
        generate_batch(args.exam, args.count)
