# Exam Content Status Tracker

Master reference for which (standard, level) exams have real, client-ready question content
vs. which are still placeholder scaffolding. **Check this before generating any access code**
in `backend/generate_codes.py` — the code generator itself does not block incomplete exams,
so this list is the only current safeguard.

Last verified: 2026-09-10, by auditing every `frontend/src/data/standards/<standard>/<level>.js`
file's actual `questions` array (not just its declared `pool_size`).

## Status legend

- ✅ **Complete** — real, reviewed question content, question count matches (or reasonably fills) the declared pool.
- 🟠 **Partial** — real content, but far short of the declared blueprint/pool size.
- 🔴 **Stub** — placeholder scaffolding only (literal text like `"Question stem text?"`, `"Category Name from Blueprint"`). **Do not issue codes for these.**

## Status by standard × level

| Standard | Foundation | Implementer | Internal Auditor | Lead Auditor |
|---|---|---|---|---|
| ISO 9001:2015 | 🔴 Stub (6 qs, declares 60) | 🔴 Stub (6 qs, declares 60) | ✅ Complete (65/65) | 🔴 Stub (6 qs, declares 60) |
| ISO 14001:2015 | ✅ Complete (35 qs) | ✅ Complete (48 qs) | ✅ Complete (65/65) | 🔴 Stub (6 qs, declares 60) |
| ISO 45001:2018 | ✅ Complete (35 qs) | 🔴 Stub (6 qs, declares 60) | ✅ Complete (65/65) | 🔴 Stub (6 qs, declares 60) |
| ISO/IEC 27001 | ✅ Complete (48 qs) | ✅ Complete (46 qs) | ✅ Complete (65/65) | 🟠 Partial (21 qs, declares 80) |
| FSSC 22000 | ✅ Complete (35 qs) | ✅ Complete (68 qs) | ✅ Complete (80/80) | 🔴 Stub (6 qs, declares 60) |

## Currently safe to issue codes for (9 of 20)

ISO 9001 IA · ISO 14001 Foundation/Implementer/IA · ISO 45001 Foundation/IA ·
ISO 27001 Foundation/Implementer/IA · FSSC 22000 Foundation/Implementer/IA

## Not safe to issue codes for yet (11 of 20)

- ISO 9001 Foundation, Implementer, Lead Auditor — stub
- ISO 14001 Lead Auditor — stub
- ISO 45001 Implementer, Lead Auditor — stub
- ISO 27001 Lead Auditor — partial (21/80 questions; would run out of blueprint-category coverage)
- FSSC 22000 Lead Auditor — stub

## Notes

- "Complete" here means the file has real, structurally valid question content (verified pool/blueprint math,
  answer-key integrity, and no orphaned interactive-tool references). It is not a guarantee every question has
  been proofread for subject-matter accuracy — treat as content-complete, not necessarily error-free.
- ISO 45001 Internal Auditor and ISO 14001 Internal Auditor were corrected on 2026-09-10: a category-name typo,
  a scenario/company-name mismatch against the shown case study, and a "Lead Auditor" role mislabel inside the
  Internal Auditor exam were all fixed.
- There is no code-level gate preventing `generate_codes.py` from issuing a working access code for any of the
  🔴/🟠 rows above — the backend's `verify_code()` returns whatever `exam_id` is on the code with no completeness
  check, and the frontend renders whatever `examLibrary[examId]` contains. Until that gate is added, this table
  is the operational safeguard: check it before generating a code.
- Update this table whenever a stub/partial file is finished, or when generating codes for a new standard/level
  combination for the first time.
