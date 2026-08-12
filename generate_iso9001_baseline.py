import json
import os

iso9001_data = {
    "title": "ISO 9001:2015 Internal Auditor — Capstone Exam",
    "instrument_notice": "This is a knowledge-underpinning assessment measuring recognition of correct audit reasoning, not the generative skills of live audit practice.",
    "layout_size": 35,
    "time_limit": 60,
    "passing_score_percent": 75,
    "scoring_note": "75% (26/35) is a provisional cut score.",
    "pool_size": 65,
    "extraction_note": "This 65-question pool feeds a stratified, category-aware extractor presenting 35 questions per sitting.",
    "blueprint": {
        "Case Study — Precision Manufacturing Ltd": 15,
        "QMS Context, Leadership & Planning": 10,
        "Support & Documented Information": 8,
        "Operation (Clause 8)": 12,
        "Performance Evaluation & Internal Audit": 10,
        "Improvement & Nonconformity": 10
    },
    "exhibits": {
        "audit_story": {
            "description": "Continuous 8-paragraph scenario.",
            "paragraphs": [
                "Paragraph 1: Precision Manufacturing Ltd (PML) produces specialized components for the aerospace industry. During the annual internal QMS audit, the auditor reviews the organizational context and notes that while internal and external issues were determined two years ago, there is no evidence of a recent review despite significant supply chain disruptions.",
                "Paragraph 2: Moving to the production floor, the auditor observes a CNC operator using a printed blueprint. The blueprint is marked 'Rev B', but the central document management system shows 'Rev C' as the current approved version. The operator states they prefer Rev B because it includes personal handwritten notes on feed rates.",
                "Paragraph 3: The auditor interviews the Procurement Manager regarding the evaluation of external providers. The manager explains that critical suppliers are evaluated annually. However, one key supplier, who recently delivered three batches of nonconforming raw materials, still retains an 'A' rating in the system with no documented corrective actions requested.",
                "Paragraph 4: In the calibration lab, the auditor checks the measuring equipment. A primary micrometer used for final product release has a calibration sticker that expired two months ago. The Quality Technician claims the equipment is rarely used and was 'checked internally' against a gauge block, but no records of this verification exist.",
                "Paragraph 5: Reviewing the nonconformity log, the auditor finds an issue from six months ago where a batch of parts was scrapped due to incorrect heat treatment. The corrective action states 'Operators retrained'. The auditor asks for evidence that the effectiveness of this action was reviewed, but the Production Manager admits it was closed immediately after the training session.",
                "Paragraph 6: The auditor investigates the management of change. PML recently transitioned to a new ERP software for inventory and production tracking. The auditor asks for the risk assessment and change management plan for this transition. The IT Director says, 'It was just a software upgrade, so we didn't do formal QMS change planning.'",
                "Paragraph 7: During the audit of the design and development process, the auditor notes that while design inputs and outputs are well documented, there are no records of design reviews for a recently launched product line. The Lead Engineer mentions that reviews happen informally during daily stand-up meetings.",
                "Paragraph 8: The auditor compiles these findings into the audit report. The closing meeting is scheduled with Top Management to discuss the systemic issues identified, particularly regarding document control, supplier management, and corrective action verification."
            ]
        },
        "finding_severity_matrix": {
            "description": "Severity model: Score = Impact x Likelihood.",
            "harm_scale": "1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Critical",
            "recurrence_scale": "1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain",
            "bands": [
                {
                    "min": 1,
                    "max": 6,
                    "level": "Opportunity for Improvement"
                },
                {
                    "min": 7,
                    "max": 14,
                    "level": "Minor Nonconformity"
                },
                {
                    "min": 15,
                    "max": 25,
                    "level": "Major Nonconformity"
                }
            ]
        }
    },
    "questions": [
        {
            "category": "Case Study — Precision Manufacturing Ltd",
            "section": "Paragraph 1",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The failure to review the organizational context despite supply chain disruptions primarily indicates a breakdown in which ISO 9001 clause?",
            "options": [
                {
                    "text": "Clause 4.1 Understanding the organization and its context",
                    "correct": True
                },
                {
                    "text": "Clause 7.1.6 Organizational knowledge",
                    "correct": False
                },
                {
                    "text": "Clause 8.4 Control of externally provided processes",
                    "correct": False
                },
                {
                    "text": "Clause 10.2 Nonconformity and corrective action",
                    "correct": False
                }
            ],
            "rationale": "Clause 4.1 requires the organization to monitor and review information about external and internal issues. Failing to review this after significant disruptions is a direct nonconformity against this requirement.",
            "lms_direction": "Review LMS Activity 4.1 — Organizational Context."
        },
        {
            "category": "Case Study — Precision Manufacturing Ltd",
            "section": "Paragraph 2",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The use of an obsolete blueprint (Rev B) with handwritten notes on the production floor is a nonconformity against:",
            "options": [
                {
                    "text": "Clause 7.5.3 Control of documented information",
                    "correct": True
                },
                {
                    "text": "Clause 8.5.2 Identification and traceability",
                    "correct": False
                },
                {
                    "text": "Clause 7.1.5 Monitoring and measuring resources",
                    "correct": False
                },
                {
                    "text": "Clause 8.2.2 Determining the requirements for products and services",
                    "correct": False
                }
            ],
            "rationale": "Clause 7.5.3 requires control over documented information, ensuring the correct versions are available at points of use and preventing the unintended use of obsolete documented information.",
            "lms_direction": "Review LMS Activity 7.5 — Documented Information."
        },
        {
            "category": "Performance Evaluation & Internal Audit",
            "section": "Clause 9.2",
            "type": "interactive_tool",
            "tool_type": "audit_checklist",
            "exhibit_ref": "none",
            "text": "Review the following audit findings from various departments. Classify the severity of each and map it to the most appropriate ISO 9001 clause.",
            "tool_data": {
                "instructions": "Select 5 random findings from the pool below for the candidate to evaluate.",
                "selection_count": 5,
                "available_clauses": [
                    "Clause 4.1 Context",
                    "Clause 5.1 Leadership",
                    "Clause 6.1 Risks & Opportunities",
                    "Clause 7.1.5 Monitoring/Measuring Resources",
                    "Clause 7.5 Documented Information",
                    "Clause 8.2 Requirements for Products",
                    "Clause 8.4 External Providers",
                    "Clause 8.7 Nonconforming Outputs",
                    "Clause 9.3 Management Review",
                    "Clause 10.2 Corrective Action"
                ],
                "findings_pool": [
                    {
                        "id": "f1",
                        "evidence": "Top management has delegated all QMS responsibilities to the Quality Manager and does not attend management reviews.",
                        "correct_classification": "Major Nonconformity",
                        "correct_clause": "Clause 5.1 Leadership"
                    },
                    {
                        "id": "f2",
                        "evidence": "A customer complaint regarding late delivery was resolved by sending a replacement, but no root cause analysis was performed to prevent recurrence.",
                        "correct_classification": "Minor Nonconformity",
                        "correct_clause": "Clause 10.2 Corrective Action"
                    }
                ]
            },
            "expected_payload": "evaluated_at_runtime",
            "rationale": "Internal auditors must be able to classify findings accurately and trace them back to the specific normative requirements of ISO 9001.",
            "lms_direction": "Review LMS Activity 9.2 — Audit Findings Classification."
        },
        {
            "category": "Improvement & Nonconformity",
            "section": "Clause 10.2",
            "type": "interactive_tool",
            "tool_type": "ncr_generator",
            "exhibit_ref": "audit_story",
            "text": "Complete the Nonconformity Report for the issue found with the calibration of the micrometer in Paragraph 4.",
            "tool_data": {
                "findings": "A primary micrometer used for final product release had an expired calibration sticker (expired two months ago), with no documented evidence of internal verification.",
                "classifications": [
                    "Major Nonconformity",
                    "Minor Nonconformity",
                    "Opportunity for Improvement"
                ],
                "clauses": [
                    "Clause 7.1.5",
                    "Clause 8.1",
                    "Clause 9.1.1"
                ],
                "evidence_types": [
                    "Observation & Interview",
                    "Document Review",
                    "Statistical Analysis"
                ]
            },
            "expected_payload": {
                "classification": "Major Nonconformity",
                "clause": "Clause 7.1.5",
                "evidence_type": "Observation & Interview"
            },
            "rationale": "Using uncalibrated measuring equipment for final release is a critical failure that directly impacts product conformity (Clause 7.1.5).",
            "lms_direction": "Review LMS Activity 10.2 — Writing Effective NCRs."
        }
    ]
}

file_path = os.path.join("Exam question data", "ISO 9001:2015 Internal Auditor.json")
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(iso9001_data, f, indent=4)

print(f"Generated {file_path} successfully.")
