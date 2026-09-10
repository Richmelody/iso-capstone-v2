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
    main.DB_PATH = TEST_DB_PATH
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
    assert "code used and results saved" in response1.json()["message"]
    
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
        "accessCode": "TEST-CODE-99",
        "violationType": "Multiple Persons",
        "details": "Two people on screen",
        "timestamp": "2024-01-01T00:00:00Z",
        "snapshot": "this-is-not-valid-base64-!@#"
    }
    response = client.post("/log-cheating", json=payload)
    # The endpoint should raise a 400 bad request for invalid base64 encoding instead of completely crashing the server
    assert response.status_code == 400
    assert "Image decoding failed" in response.json()["detail"]

def test_snapshot_authentication_and_traversal():
    # 1. Test Unauthenticated Access
    response = client.get("/snapshots/fake-image.png")
    assert response.status_code == 401
    
    # 2. Test Invalid Token
    response = client.get("/snapshots/fake-image.png?token=wrong-token-123")
    assert response.status_code == 401
    
    # 3. Test Path Traversal Hack Attempt
    os.environ["SNAPSHOT_SECRET"] = "test-secret"
    response = client.get("/snapshots/../main.py?token=test-secret")
    # FastAPI's native path normalizer strips ../ and turns it into /main.py which intrinsically 404s before hitting our logic.
    assert response.status_code in [400, 404]

def test_timestamp_spoofing_prevention():
    # We send a completely fake, decades-old timestamp to try and spoof the audit log
    payload = {
        "studentEmail": "spoof@astute.com",
        "studentName": "Spoofer",
        "accessCode": "TEST-CODE-99",
        "violationType": "Face Missing",
        "details": "Checking timestamp security",
        "timestamp": "1999-01-01T00:00:00Z", 
        "snapshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" # Valid tiny base64 PNG
    }
    response = client.post("/log-cheating", json=payload)
    assert response.status_code == 200
    
    # Check DB to ensure the stored timestamp is the server's current time, NOT 1999!
    with sqlite3.connect(TEST_DB_PATH) as conn:
        cur = conn.cursor()
        cur.execute("SELECT timestamp FROM cheating_logs WHERE student_email='spoof@astute.com'")
        row = cur.fetchone()
        assert row is not None
        
        # It should contain the current year/datetime since it is UTC server generated
        import datetime
        current_year = str(datetime.datetime.now(datetime.UTC).year)
        saved_timestamp = row[0]
        assert current_year in saved_timestamp

from unittest.mock import patch

def test_database_locked_retry_on_complete_exam():
    # Setup initial code
    client.post("/verify-code", json={"code": "TEST-CODE-99", "studentEmail": "tester@astute.com", "studentName": "Test User"})
    
    call_count = 0
    original_connect = sqlite3.connect

    def mock_connect(*args, **kwargs):
        nonlocal call_count
        call_count += 1
        if call_count <= 2:
            raise sqlite3.OperationalError("database is locked")
        return original_connect(*args, **kwargs)

    with patch('sqlite3.connect', side_effect=mock_connect):
        payload = {
            "code": "TEST-CODE-99",
            "studentEmail": "tester@astute.com",
            "score": 15,
            "totalScore": 20,
            "percent": "75.0%",
            "passed": True,
            "cheating_events": []
        }
        response = client.post("/complete-exam", json=payload)
        
        # Without retry logic, this returns 500. With retry logic, it should catch the error, retry, and return 200.
        assert response.status_code == 200, f"Expected 200 OK, got {response.status_code}"
        assert call_count >= 3

def test_database_locked_retry_on_sync_progress():
    client.post("/verify-code", json={"code": "TEST-CODE-99", "studentEmail": "tester@astute.com", "studentName": "Test User"})
    
    call_count = 0
    original_connect = sqlite3.connect

    def mock_connect(*args, **kwargs):
        nonlocal call_count
        call_count += 1
        if call_count <= 2:
            raise sqlite3.OperationalError("database is locked")
        return original_connect(*args, **kwargs)

    with patch('sqlite3.connect', side_effect=mock_connect):
        payload = {
            "code": "TEST-CODE-99",
            "studentEmail": "tester@astute.com",
            "userAnswers": {"0": 1},
            "timeLeft": 1000,
            "currentIdx": 1,
            "layout": []
        }
        response = client.post("/sync-progress", json=payload)
        
        assert response.status_code == 200, f"Expected 200 OK, got {response.status_code}"
        assert call_count >= 3



@patch('smtplib.SMTP')
def test_complete_exam_sends_email(mock_smtp):
    client.post("/verify-code", json={"code": "TEST-CODE-99", "studentEmail": "tester@astute.com", "studentName": "Test User"})
    
    # Commit the exam
    complete_payload = {
        "code": "TEST-CODE-99",
        "studentEmail": "tester@astute.com",
        "score": 38,
        "totalScore": 40,
        "percent": "95.0%",
        "passed": True,
        "cheating_events": []
    }
    
    # We also mock BackgroundTasks to execute synchronously for testing, or we just let it run.
    # Actually, FastAPI TestClient executes BackgroundTasks synchronously by default!
    response = client.post("/complete-exam", json=complete_payload)
    assert response.status_code == 200
    
    # Assert SMTP was called
    assert mock_smtp.called
    instance = mock_smtp.return_value.__enter__.return_value
    assert instance.sendmail.called
    
    # Check the email content
    args, kwargs = instance.sendmail.call_args
    assert "tester@astute.com" in args[1]
    
    import email
    msg = email.message_from_string(args[2])
    payload = msg.get_payload(decode=True).decode("utf-8")
    assert "PASSED" in payload
    assert "95.0%" in payload
