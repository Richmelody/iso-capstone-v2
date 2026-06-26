import sqlite3
import random
import string
import os
import argparse
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
DB_PATH = os.path.join(DATA_DIR, "proctor_logs.db")

EXAM_CATALOG = {
    "1": {"id": "14001-fnd", "title": "ISO 14001:2015 Foundations"},
    "2": {"id": "9001-fnd", "title": "ISO 9001:2015 Foundations"},
    "3": {"id": "45001-fnd", "title": "ISO 45001:2018 Foundations"},
    "4": {"id": "fssc22000-fnd", "title": "FSSC 22000 Foundations"},
}

def generate_code(exam_id: str, length=8):
    """Generate a secure, unique alphanumeric string"""
    chars = string.ascii_uppercase + string.digits
    random_str = ''.join(random.choice(chars) for _ in range(length))
    # Format: ASTUTE-[EXAM_ID]-[RANDOM] (uppercase it for looks)
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
                assigned_email TEXT,
                assigned_name TEXT,
                saved_score INTEGER DEFAULT 0,
                saved_time_left INTEGER DEFAULT 3600,
                saved_question_idx INTEGER DEFAULT 0,
                saved_failed_cats TEXT DEFAULT '[]',
                saved_answers TEXT DEFAULT '{}'
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

def main():
    if len(sys.argv) > 1:
        parser = argparse.ArgumentParser(description="Generate Secure Access Codes for ISO Exams")
        parser.add_argument("--exam", required=True, help="Exam ID (e.g. 14001-fnd, fssc22000-fnd)")
        parser.add_argument("--count", type=int, default=1, help="Number of codes to generate")
        args = parser.parse_args()
        generate_batch(args.exam, args.count)
        return

    print("\n=== ASTUTE Vault: Code Generator ===")
    print("Select an Exam Module:")
    for key, exam in EXAM_CATALOG.items():
        print(f"{key}. {exam['title']} ({exam['id']})")
    
    choice = input("\nEnter the number corresponding to the exam: ").strip()
    
    if choice not in EXAM_CATALOG:
        print("Error: Invalid choice.")
        sys.exit(1)
        
    exam_id = EXAM_CATALOG[choice]["id"]
    
    count_str = input("How many codes do you want to generate? (default 1): ").strip()
    count = int(count_str) if count_str.isdigit() else 1
    
    print("\n")
    generate_batch(exam_id, count)

if __name__ == "__main__":
    main()
