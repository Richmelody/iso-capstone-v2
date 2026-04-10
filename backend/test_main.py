import pytest
from fastapi.testclient import TestClient
import sqlite3
import os
import main  # the main.py module

# Override the database path strictly for testing so we don't nuke the actual vault
TEST_DB_PATH = "data/test_db.sqlite"
main.DB_PATH = TEST_DB_PATH

client = TestClient(main.app)

@pytest.fixture(autouse=True)
def setup_teardown():
    # Make sure we start absolutely clean
    if os.path.exists(TEST_DB_PATH):
        os.remove(TEST_DB_PATH)
    # Initialize the tables using the native function
    main.init_db()
    
    # Inject a special test code
    with sqlite3.connect(TEST_DB_PATH) as conn:
        conn.execute("INSERT OR REPLACE INTO access_codes (code, exam_id) VALUES ('TEST-CODE-99', '14001')")
    
    yield
    
    # Cleanup after test finishes
    if os.path.exists(TEST_DB_PATH):
        try:
            os.remove(TEST_DB_PATH)
        except PermissionError:
            pass # Windows locking handling, if applicable

def test_verify_code_success():
    payload = {
        "code": "TEST-CODE-99",
        "studentEmail": "tester@astute.com",
        "studentName": "Test User"
    }
    response = client.post("/verify-code", json=payload)
    assert response.status_code == 200
    assert response.json()["status"] == "success"
    assert response.json()["exam_id"] == "14001"

    # Verify the database securely locked the assignment
    with sqlite3.connect(TEST_DB_PATH) as conn:
        cur = conn.cursor()
        cur.execute("SELECT assigned_email, assigned_name FROM access_codes WHERE code='TEST-CODE-99'")
        row = cur.fetchone()
        assert row[0] == "tester@astute.com"
        assert row[1] == "Test User"

def test_verify_code_lockout():
    # Setup initial lock
    client.post("/verify-code", json={"code": "TEST-CODE-99", "studentEmail": "tester@astute.com", "studentName": "Test User"})
    
    # Attempt unauthorized intrusion with wrong email
    payload = {
        "code": "TEST-CODE-99",
        "studentEmail": "hacker@astute.com",
        "studentName": "Test User"
    }
    response = client.post("/verify-code", json=payload)
    assert response.status_code == 400
    assert "locked to another candidate's email" in response.json()["detail"]

def test_complete_exam_idempotency():
    # First assign the code legitimately
    client.post("/verify-code", json={"code": "TEST-CODE-99", "studentEmail": "tester@astute.com", "studentName": "Test User"})
    
    # Commit the exam
    complete_payload = {
        "code": "TEST-CODE-99",
        "studentEmail": "tester@astute.com",
        "score": 15,
        "totalScore": 20
    }
    response1 = client.post("/complete-exam", json=complete_payload)
    assert response1.status_code == 200
    assert "code burned and results saved" in response1.json()["message"]
    
    # Try to spam the endpoint to duplicate scores
    response2 = client.post("/complete-exam", json=complete_payload)
    assert response2.status_code == 200
    assert "Exam results already processed" in response2.json()["message"]
    
    # Verify the database only holds exactly ONE ledger entry despite 2 runs
    with sqlite3.connect(TEST_DB_PATH) as conn:
        cur = conn.cursor()

        
        # NOTE: exam_results uses exam_id, student_email. Need to query accurately:
        cur.execute("SELECT COUNT(*) FROM exam_results WHERE student_email='tester@astute.com'")
        count = cur.fetchone()[0]
        assert count == 1

def test_sync_progress_success():
    client.post("/verify-code", json={"code": "TEST-CODE-99", "studentEmail": "tester@astute.com", "studentName": "Test User"})
    
    sync_payload = {
        "code": "TEST-CODE-99",
        "studentEmail": "tester@astute.com",
        "userAnswers": {"1": "A"},
        "timeLeft": 2000,
        "currentIdx": 2
    }
    response = client.post("/sync-progress", json=sync_payload)
    assert response.status_code == 200
    assert response.json()["status"] == "synced"

def test_log_cheating_invalid_image():
    payload = {
        "studentEmail": "cheater@astute.com",
        "studentName": "Bad Actor",
        "violationType": "Multiple Persons",
        "details": "Two people on screen",
        "timestamp": "2024-01-01T00:00:00Z",
        "snapshot": "this-is-not-valid-base64-!@#"
    }
    response = client.post("/log-cheating", json=payload)
    # The endpoint should raise a 400 bad request for invalid base64 encoding instead of completely crashing the server
    assert response.status_code == 400
    assert "Image decoding failed" in response.json()["detail"]

