"""
test_layout_features.py
=======================
Backend unit tests for the new randomization & layout persistence features.
Covers:
  - Epic 1.1  : saved_layout column exists in the schema
  - Epic 1.2a : /verify-code returns savedState.layout when one is stored
  - Epic 1.2b : /verify-code returns NO layout when none has been saved yet
  - Epic 1.2c : /sync-progress accepts and persists the layout payload
  - Epic 5.3  : /sync-progress accepts OLD payloads WITHOUT a layout field (backward compat)
  - Epic 5.4  : init_db() is idempotent - safe to call multiple times without crashing
"""

import pytest
import sqlite3
import os
import json
import main  # the main.py module

# ─── Test DB override ────────────────────────────────────────────────────────
TEST_DB_PATH = "data/test_layout_db.sqlite"
main.DB_PATH = TEST_DB_PATH

from fastapi.testclient import TestClient
client = TestClient(main.app)

# ─── Fixture: clean slate before every test ──────────────────────────────────
@pytest.fixture(autouse=True)
def setup_teardown():
    main.DB_PATH = TEST_DB_PATH
    if os.path.exists(TEST_DB_PATH):
        os.remove(TEST_DB_PATH)
    main.init_db()

    # Seed one fresh test code
    with sqlite3.connect(TEST_DB_PATH) as conn:
        conn.execute(
            "INSERT OR REPLACE INTO access_codes (code, exam_id) VALUES ('LAYOUT-TEST-01', '45001')"
        )

    yield

    if os.path.exists(TEST_DB_PATH):
        try:
            os.remove(TEST_DB_PATH)
        except PermissionError:
            pass


# ═══════════════════════════════════════════════════════════════════════════════
# EPIC 1.1 — DATABASE SCHEMA: saved_layout column
# ═══════════════════════════════════════════════════════════════════════════════

class TestDatabaseSchema:
    """Verify the schema has the required saved_layout column."""

    def test_saved_layout_column_exists(self):
        """
        CRITICAL: The access_codes table MUST have a saved_layout column.
        If this fails, the entire layout persistence system cannot function.
        """
        with sqlite3.connect(TEST_DB_PATH) as conn:
            cur = conn.cursor()
            cur.execute("PRAGMA table_info(access_codes)")
            columns = [row[1] for row in cur.fetchall()]
        assert "saved_layout" in columns, (
            "saved_layout column is MISSING from access_codes. "
            "Run the migration in init_db() to add it."
        )

    def test_init_db_is_idempotent(self):
        """
        EPIC 5.4 FAILSAFE: Calling init_db() twice must NOT raise an exception.
        The ALTER TABLE statements must be wrapped in try/except.
        """
        try:
            main.init_db()   # First call (already ran in fixture)
            main.init_db()   # Second call — should be completely silent
        except sqlite3.OperationalError as e:
            pytest.fail(
                f"init_db() crashed on second call with: {e}. "
                "Wrap ALTER TABLE in try/except sqlite3.OperationalError."
            )

    def test_saved_layout_defaults_to_null(self):
        """
        A newly seeded access code should have NULL as its saved_layout,
        not an empty string or any other value.
        """
        with sqlite3.connect(TEST_DB_PATH) as conn:
            cur = conn.cursor()
            cur.execute("SELECT saved_layout FROM access_codes WHERE code = 'LAYOUT-TEST-01'")
            row = cur.fetchone()
        assert row is not None
        assert row[0] is None, f"Expected NULL, got: {row[0]}"


# ═══════════════════════════════════════════════════════════════════════════════
# EPIC 1.2a — /verify-code: returns layout when one is stored
# ═══════════════════════════════════════════════════════════════════════════════

class TestVerifyCodeWithLayout:
    """Tests for /verify-code endpoint returning layout in savedState."""

    SAMPLE_LAYOUT = [
        {"qIdx": 5,  "optMap": [2, 0, 3, 1]},
        {"qIdx": 12, "optMap": [1, 3, 0, 2]},
        {"qIdx": 0,  "optMap": [0, 1, 2, 3]},
    ]

    def _seed_layout(self, layout):
        """Helper: directly write a saved_layout into the DB to simulate a prior sync."""
        with sqlite3.connect(TEST_DB_PATH) as conn:
            conn.execute(
                "UPDATE access_codes SET saved_layout = ? WHERE code = 'LAYOUT-TEST-01'",
                (json.dumps(layout),)
            )

    def test_verify_returns_no_layout_for_fresh_code(self):
        """
        A brand-new code with no prior session must NOT include a layout
        in its response — the frontend will generate a fresh one.
        """
        resp = client.post("/verify-code", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "fresh@astute.com",
            "studentName": "Fresh User"
        })
        assert resp.status_code == 200
        body = resp.json()
        assert body["status"] == "success"
        # No savedState at all, OR savedState without a layout key
        if "savedState" in body:
            assert "layout" not in body["savedState"], (
                "A fresh code must not return a layout in savedState."
            )

    def test_verify_returns_saved_layout_on_resume(self):
        """
        EPIC 1.2a: After /sync-progress saves a layout, calling /verify-code
        again must include that EXACT layout inside savedState.
        """
        # Simulate a previous session that persisted a layout
        self._seed_layout(self.SAMPLE_LAYOUT)

        # Also seed some progress so savedState is triggered
        with sqlite3.connect(TEST_DB_PATH) as conn:
            conn.execute(
                "UPDATE access_codes SET saved_question_idx = 5, saved_answers = ? "
                "WHERE code = 'LAYOUT-TEST-01'",
                (json.dumps({"0": 0, "1": 2}),)
            )

        resp = client.post("/verify-code", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "returning@astute.com",
            "studentName": "Returning User"
        })
        assert resp.status_code == 200
        body = resp.json()
        assert "savedState" in body, "savedState must be present when session progress exists."
        assert "layout" in body["savedState"], (
            "savedState.layout MUST be included when a saved_layout exists in the DB."
        )
        assert body["savedState"]["layout"] == self.SAMPLE_LAYOUT, (
            "The returned layout does not match the stored layout. "
            "Check the /verify-code SELECT query."
        )

    def test_verify_returns_correct_layout_for_correct_candidate(self):
        """
        The layout should only be returned to the SAME candidate it was locked to.
        A different email on the same code should be rejected (existing lockout logic).
        """
        self._seed_layout(self.SAMPLE_LAYOUT)
        # First, lock the code to Alice
        client.post("/verify-code", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "alice@astute.com",
            "studentName": "Alice"
        })

        # Bob tries to use the same code — must be blocked
        resp = client.post("/verify-code", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "bob@astute.com",
            "studentName": "Bob"
        })
        assert resp.status_code == 400
        assert "locked to another candidate" in resp.json()["detail"].lower()


# ═══════════════════════════════════════════════════════════════════════════════
# EPIC 1.2b — /sync-progress: saves layout to DB
# ═══════════════════════════════════════════════════════════════════════════════

class TestSyncProgressWithLayout:
    """Tests for /sync-progress saving the layout payload to the database."""

    SAMPLE_LAYOUT = [
        {"qIdx": 10, "optMap": [3, 1, 0, 2]},
        {"qIdx": 22, "optMap": [0, 2, 1, 3]},
    ]

    def _start_session(self):
        client.post("/verify-code", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "syncer@astute.com",
            "studentName": "Sync User"
        })

    def test_sync_saves_layout_to_database(self):
        """
        EPIC 1.2b: When /sync-progress is called with a layout field,
        that layout MUST be persisted to the saved_layout column in SQLite.
        """
        self._start_session()
        resp = client.post("/sync-progress", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "syncer@astute.com",
            "userAnswers": {"0": 2},
            "timeLeft": 3000,
            "currentIdx": 1,
            "layout": self.SAMPLE_LAYOUT
        })
        assert resp.status_code == 200
        assert resp.json()["status"] == "synced"

        # Verify it actually landed in the database
        with sqlite3.connect(TEST_DB_PATH) as conn:
            cur = conn.cursor()
            cur.execute("SELECT saved_layout FROM access_codes WHERE code = 'LAYOUT-TEST-01'")
            row = cur.fetchone()

        assert row is not None
        stored = json.loads(row[0])
        assert stored == self.SAMPLE_LAYOUT, (
            "The layout stored in the DB does not match what was sent. "
            "Check the UPDATE statement in /sync-progress."
        )

    def test_sync_without_layout_does_not_erase_existing_layout(self):
        """
        EPIC 5.3 FAILSAFE: If an old/cached frontend sends a sync payload WITHOUT
        a layout field, the existing saved_layout in the DB must NOT be overwritten
        with NULL. This prevents corrupting an active exam session.
        """
        # First, persist a layout via a full sync
        self._start_session()
        client.post("/sync-progress", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "syncer@astute.com",
            "userAnswers": {},
            "timeLeft": 3600,
            "currentIdx": 0,
            "layout": self.SAMPLE_LAYOUT
        })

        # Now send a legacy sync WITHOUT the layout field
        resp = client.post("/sync-progress", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "syncer@astute.com",
            "userAnswers": {"0": 1, "1": 0},
            "timeLeft": 3200,
            "currentIdx": 2
            # NOTE: No 'layout' key here — simulates old frontend
        })
        assert resp.status_code == 200

        # The layout in the DB must STILL be the original one
        with sqlite3.connect(TEST_DB_PATH) as conn:
            cur = conn.cursor()
            cur.execute("SELECT saved_layout FROM access_codes WHERE code = 'LAYOUT-TEST-01'")
            row = cur.fetchone()

        stored = json.loads(row[0])
        assert stored == self.SAMPLE_LAYOUT, (
            "A sync WITHOUT a layout field should NEVER erase an existing saved_layout. "
            "The UPDATE must use: saved_layout = COALESCE(?, saved_layout)."
        )

    def test_sync_without_layout_still_updates_answers_and_timer(self):
        """
        Even when no layout is provided, the core progress fields
        (saved_answers, saved_time_left, saved_question_idx) must still update.
        """
        self._start_session()
        client.post("/sync-progress", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "syncer@astute.com",
            "userAnswers": {"0": 3},
            "timeLeft": 2500,
            "currentIdx": 1
        })

        with sqlite3.connect(TEST_DB_PATH) as conn:
            cur = conn.cursor()
            cur.execute(
                "SELECT saved_answers, saved_time_left, saved_question_idx "
                "FROM access_codes WHERE code = 'LAYOUT-TEST-01'"
            )
            row = cur.fetchone()

        assert json.loads(row[0]) == {"0": 3}
        assert row[1] == 2500
        assert row[2] == 1


# ═══════════════════════════════════════════════════════════════════════════════
# EPIC 5.3 — Backward Compatibility: SyncRequest schema is optional layout
# ═══════════════════════════════════════════════════════════════════════════════

class TestBackwardCompatibility:
    """
    Verify the API does not break older frontend builds that don't send layout.
    """

    def test_sync_request_without_layout_returns_200(self):
        """
        EPIC 5.3: A sync payload missing the 'layout' field must NEVER
        return a 422 Unprocessable Entity error. It should return 200.
        """
        client.post("/verify-code", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "legacy@astute.com",
            "studentName": "Legacy User"
        })
        resp = client.post("/sync-progress", json={
            "code": "LAYOUT-TEST-01",
            "studentEmail": "legacy@astute.com",
            "userAnswers": {},
            "timeLeft": 3600,
            "currentIdx": 0
            # layout is intentionally absent
        })
        assert resp.status_code == 200, (
            f"Expected 200 but got {resp.status_code}. "
            "The 'layout' field in SyncRequest must be Optional (default None)."
        )
