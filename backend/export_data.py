import sqlite3
import csv
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "data", "proctor_logs.db")
OUTPUT_DIR = os.path.join(BASE_DIR, "data", "exports")

def export_table_to_csv(table_name):
    try:
        with sqlite3.connect(DB_PATH) as conn:
            cur = conn.cursor()
            cur.execute(f"SELECT * FROM {table_name}")
            rows = cur.fetchall()
            
            if not rows:
                print(f"No records found in table: {table_name}")
                return
                
            # Get column names
            column_names = [description[0] for description in cur.description]
            
            output_file = os.path.join(OUTPUT_DIR, f"{table_name}.csv")
            with open(output_file, "w", newline="", encoding="utf-8") as f:
                writer = csv.writer(f)
                writer.writerow(column_names)
                writer.writerows(rows)
                
            print(f"Successfully exported {len(rows)} records from {table_name} to {output_file}")
    except sqlite3.OperationalError as e:
        print(f"Error reading table {table_name}: {e}")
    except Exception as e:
        print(f"Unexpected error exporting {table_name}: {e}")

if __name__ == "__main__":
    if not os.path.exists(DB_PATH):
        print(f"Database not found at {DB_PATH}")
        exit(1)
        
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print("Starting data export...")
    
    # Export all relevant tables
    tables_to_export = ["exam_results", "cheating_logs", "access_codes"]
    
    for table in tables_to_export:
        export_table_to_csv(table)
        
    print(f"Export complete! Check the '{OUTPUT_DIR}' directory for your CSV files.")
