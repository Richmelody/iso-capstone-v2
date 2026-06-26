# ISO Capstone Scaling Plan: "The Lego System"

This document outlines the architectural roadmap to scale the current exam system from two standards to **24 distinct modules** (6 standards × 4 training categories).

---

## Phase 1: Modularity (The "Lego" Structure)

Currently, all exams live in one large file (`exams.js`). We will break this into a standard-specific directory structure.

### Proposed Directory Structure:
```
frontend/src/data/
├── standards/
│   ├── iso9001/
│   │   ├── foundation.json
│   │   ├── internal-audit.json
│   │   ├── implementer.json
│   │   └── lead-auditor.json
│   ├── iso14001/
│   │   └── ... (same structure)
│   └── iso27001/
│       └── ...
└── index.js  <-- Aggregates all standards dynamically
```

### Why this works:
- **Easy Maintenance**: Updating ISO 9001 questions won't risk breaking ISO 14001.
- **Collaborative**: Multiple people can work on different standards simultaneously.

---

## Phase 2: Database-Driven Content

To make the system truly "robust," we will move from hardcoded files to a **Dynamic Database**.

### Database Schema Expansion (`backend/main.py`):
We will add two new tables to the SQLite database:
1.  **`exams_meta`**: Stores exam-specific config (Title, Timer Duration, Passing Score, Difficulty Level).
2.  **`exam_questions`**: Stores the actual question bank, linked to an Exam ID.

### The Flow:
1.  **On Login**: User enters code for `9001-LEAD`.
2.  **Verification**: Backend confirms the code and fetches the specific question set for that module from the DB.
3.  **Dynamic Frontend**: The `QuizEngine` receives the data via API rather than a local file.

---

## Phase 3: Global Config & Thresholds

Each category (Foundation vs. Lead Auditor) requires different strictness. We will implement **Config Overrides**:

| Category | Timer | Passing Score | Proctoring Strictness |
| :--- | :--- | :--- | :--- |
| **Foundation** | 45 Mins | 60% | Moderate |
| **Internal Audit** | 60 Mins | 70% | High |
| **Implementer** | 90 Mins | 70% | High |
| **Lead Auditor** | 120 Mins | 80% | Maximum (Strict Face Detection) |

---

## Phase 4: Implementation Roadmap (Next Steps)

1.  [ ] **Create Folder Hierarchy**: Set up `src/data/standards/`.
2.  [ ] **Schema Update**: Update `backend/main.py` to include the `exams_meta` and `questions` tables.
3.  [ ] **Migration Script**: Create a script to move your `exams.js` content into the database automatically.
4.  [ ] **Dynamic API**: Create `@app.get("/exam-content/{exam_id}")` to serve the data.

---

> [!TIP]
> **Why start database early?**
> Moving to a database now prevents "technical debt." Once you have 100+ questions across multiple standards, manual editing in JavaScript files becomes prone to syntax errors. A database allows for future "Admin Dashboards" where you can upload questions via Excel.

Would you like me to begin **Phase 1** by setting up the folder structure and splitting the current exams?
