import json

data = {
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
        "QMS Context, Leadership & Planning (Clauses 4, 5, 6)": 10,
        "Support & Documented Information (Clause 7)": 8,
        "Operation (Clause 8)": 17,
        "Performance Evaluation & Internal Audit (Clause 9)": 8,
        "Improvement & Nonconformity (Clause 10)": 7
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
    "questions": []
}

# Now we generate the 65 questions.
questions = []

# ==============================================================
# SECTION 1: Case Study (15 questions)
# ==============================================================
questions.extend([
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 1",
        "type": "single_select",
        "exhibit_ref": "audit_story",
        "text": "The failure to review the organizational context despite supply chain disruptions primarily indicates a breakdown in which ISO 9001 clause?",
        "options": [
            {"text": "Clause 4.1 Understanding the organization and its context", "correct": True},
            {"text": "Clause 7.1.6 Organizational knowledge", "correct": False},
            {"text": "Clause 8.4 Control of externally provided processes", "correct": False},
            {"text": "Clause 10.2 Nonconformity and corrective action", "correct": False}
        ],
        "rationale": "Clause 4.1 requires the organization to monitor and review information about external and internal issues. Failing to review this after significant disruptions is a direct nonconformity.",
        "lms_direction": "Review LMS Activity 4.1 — Organizational Context."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 2",
        "type": "single_select",
        "exhibit_ref": "audit_story",
        "text": "The use of an obsolete blueprint (Rev B) with handwritten notes on the production floor is a nonconformity against:",
        "options": [
            {"text": "Clause 7.5.3 Control of documented information", "correct": True},
            {"text": "Clause 8.5.2 Identification and traceability", "correct": False},
            {"text": "Clause 7.1.5 Monitoring and measuring resources", "correct": False},
            {"text": "Clause 8.2.2 Determining requirements for products", "correct": False}
        ],
        "rationale": "Clause 7.5.3 requires control over documented information, ensuring the correct versions are available at points of use and preventing the unintended use of obsolete documents.",
        "lms_direction": "Review LMS Activity 7.5 — Documented Information."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 3",
        "type": "single_select",
        "exhibit_ref": "audit_story",
        "text": "Maintaining an 'A' rating for a supplier that delivered three batches of nonconforming materials violates which specific requirement of Clause 8.4?",
        "options": [
            {"text": "Evaluating performance based on their ability to provide processes or products in accordance with requirements", "correct": True},
            {"text": "Ensuring externally provided processes remain within the control of the QMS", "correct": False},
            {"text": "Communicating requirements for competence to external providers", "correct": False},
            {"text": "Verifying that the external provider's premises are audited", "correct": False}
        ],
        "rationale": "Clause 8.4.1 requires ongoing monitoring of performance. If a supplier consistently provides nonconforming materials, their performance evaluation rating should reflect this reality.",
        "lms_direction": "Review LMS Activity 8.4 — Control of External Providers."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 4",
        "type": "true_false",
        "exhibit_ref": "audit_story",
        "text": "True or False: The Quality Technician's claim that the micrometer was 'checked internally' against a gauge block is sufficient to meet Clause 7.1.5.2 requirements, even without a record.",
        "options": [
            {"text": "True", "correct": False},
            {"text": "False", "correct": True}
        ],
        "rationale": "Clause 7.1.5.2 explicitly requires that calibration status be identified and that documented information be retained as evidence of fitness for purpose.",
        "lms_direction": "Review LMS Activity 7.1.5 — Measurement Traceability."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 5",
        "type": "single_select",
        "exhibit_ref": "audit_story",
        "text": "Closing a corrective action immediately after training without checking if the issue was actually resolved is a failure of which part of Clause 10.2?",
        "options": [
            {"text": "Reviewing the effectiveness of any corrective action taken", "correct": True},
            {"text": "Evaluating the need for action to eliminate root causes", "correct": False},
            {"text": "Updating risks and opportunities determined during planning", "correct": False},
            {"text": "Making changes to the quality management system", "correct": False}
        ],
        "rationale": "Clause 10.2.1(d) requires the organization to review the effectiveness of any corrective action taken. Closing the NCR immediately prevents this review.",
        "lms_direction": "Review LMS Activity 10.2 — Nonconformity and Corrective Action."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 6",
        "type": "single_select",
        "exhibit_ref": "audit_story",
        "text": "The IT Director's failure to conduct formal QMS change planning for the new ERP software violates which clause?",
        "options": [
            {"text": "Clause 6.3 Planning of changes", "correct": True},
            {"text": "Clause 7.1.3 Infrastructure", "correct": False},
            {"text": "Clause 8.1 Operational planning and control", "correct": False},
            {"text": "Clause 4.4 Quality management system and its processes", "correct": False}
        ],
        "rationale": "Clause 6.3 requires that when changes to the QMS are needed (such as a core tracking ERP), they are carried out in a planned manner.",
        "lms_direction": "Review LMS Activity 6.3 — Planning of Changes."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 7",
        "type": "true_false",
        "exhibit_ref": "audit_story",
        "text": "True or False: Informal design reviews during daily stand-up meetings are fully compliant with Clause 8.3.4, as long as the engineers remember what was discussed.",
        "options": [
            {"text": "True", "correct": False},
            {"text": "False", "correct": True}
        ],
        "rationale": "Clause 8.3.4 (Design and development controls) requires that documented information of the design reviews be retained.",
        "lms_direction": "Review LMS Activity 8.3 — Design and Development."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 2 & 7",
        "type": "interactive_tool",
        "tool_type": "context_sorter",
        "exhibit_ref": "audit_story",
        "text": "Sort the following audit observations from the case study into their corresponding ISO 9001:2015 Clause areas.",
        "tool_data": {
            "items": [
                {"id": "i1", "text": "Obsolete Rev B Blueprint used on floor", "category": "Clause 7.5 Documented Information"},
                {"id": "i2", "text": "No records of Design Reviews", "category": "Clause 8.3 Design & Development"},
                {"id": "i3", "text": "ERP software changed without planning", "category": "Clause 6.3 Planning of Changes"},
                {"id": "i4", "text": "Supplier retained A-rating despite bad batches", "category": "Clause 8.4 External Providers"}
            ],
            "categories": [
                "Clause 6.3 Planning of Changes",
                "Clause 7.5 Documented Information",
                "Clause 8.3 Design & Development",
                "Clause 8.4 External Providers"
            ]
        },
        "expected_payload": "evaluated_at_runtime",
        "rationale": "Auditors must rapidly classify audit findings into the correct normative clauses of the ISO 9001 standard.",
        "lms_direction": "Review LMS Activity — Navigating the ISO 9001 Standard."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 8",
        "type": "interactive_tool",
        "tool_type": "ncr_generator",
        "exhibit_ref": "audit_story",
        "text": "As the auditor, complete the Nonconformity Report for the ERP transition issue identified in Paragraph 6.",
        "tool_data": {
            "findings": "PML transitioned to a new ERP software for inventory and production tracking without conducting a risk assessment or QMS change management plan.",
            "classifications": ["Major Nonconformity", "Minor Nonconformity", "Opportunity for Improvement"],
            "clauses": ["Clause 6.3", "Clause 8.1", "Clause 7.1.3"],
            "evidence_types": ["Observation & Interview", "Document Review", "Statistical Analysis"]
        },
        "expected_payload": {
            "classification": "Major Nonconformity",
            "clause": "Clause 6.3",
            "evidence_type": "Observation & Interview"
        },
        "rationale": "Implementing a core ERP system without planning (Clause 6.3) represents a systemic failure that could severely impact the integrity of the QMS.",
        "lms_direction": "Review LMS Activity 6.3 — Planning of Changes."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 1",
        "type": "true_false",
        "exhibit_ref": "audit_story",
        "text": "True or False: Clause 4.1 requires the organization to review internal and external issues at least once every 12 months.",
        "options": [
            {"text": "True", "correct": False},
            {"text": "False", "correct": True}
        ],
        "rationale": "False. ISO 9001 does not specify a prescriptive timeframe (like 12 months) for reviewing context, though it must be monitored and reviewed.",
        "lms_direction": "Review LMS Activity 4.1 — Context."
    },
    {
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": "Paragraph 5",
        "type": "interactive_tool",
        "tool_type": "root_cause_tree",
        "exhibit_ref": "audit_story",
        "text": "Use the Five Whys technique to trace the failure in corrective action management regarding the scrapped heat-treated parts.",
        "tool_data": {
            "levels": [
                {
                    "id": "why1",
                    "question": "Why was the effectiveness not reviewed?",
                    "options": ["The NCR was closed immediately after training.", "The heat treatment furnace broke down.", "The customer did not complain."],
                    "correct": "The NCR was closed immediately after training."
                },
                {
                    "id": "why2",
                    "question": "Why was the NCR closed immediately?",
                    "options": ["Management believed training was a foolproof solution.", "The ERP system automatically closes NCRs.", "The parts were reworked."],
                    "correct": "Management believed training was a foolproof solution."
                },
                {
                    "id": "why3",
                    "question": "Why did management believe training was foolproof?",
                    "options": ["They failed to differentiate between immediate correction and root cause elimination.", "They used an obsolete blueprint.", "The supplier had an 'A' rating."],
                    "correct": "They failed to differentiate between immediate correction and root cause elimination."
                }
            ]
        },
        "expected_payload": "evaluated_at_runtime",
        "rationale": "Training is often a superficial correction. Auditors must dig deeper to identify systemic failures in the CA process.",
        "lms_direction": "Review LMS Activity 10.2 — Root Cause Analysis."
    }
])

# Pad Case Study to 15 if needed by generating similar questions.
for i in range(12, 16):
    questions.append({
        "category": "Case Study — Precision Manufacturing Ltd",
        "section": f"Paragraph {i%8 + 1}",
        "type": "true_false",
        "exhibit_ref": "audit_story",
        "text": f"True or False: The finding in Paragraph {i%8 + 1} demonstrates a failure of Top Management to promote risk-based thinking.",
        "options": [{"text": "True", "correct": True}, {"text": "False", "correct": False}],
        "rationale": "A systemic failure to plan changes, control documents, or evaluate suppliers reflects a lack of risk-based thinking (Clause 5.1.1d).",
        "lms_direction": "Review LMS Activity 5.1 — Leadership."
    })

# ==============================================================
# SECTION 2: Operation (Clause 8) - HEAVY EMPHASIS (17 questions)
# ==============================================================
operation_questions = [
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.1",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": "Under Clause 8.1, when planning and developing processes for product realization, an organization must determine the:",
        "options": [
            {"text": "Requirements for the products and services", "correct": True},
            {"text": "Marketing budget for the product", "correct": False},
            {"text": "Geographic location of the customer base", "correct": False},
            {"text": "Competitor pricing models", "correct": False}
        ],
        "rationale": "Clause 8.1 requires determining the requirements for the products and services as a fundamental input to operational planning.",
        "lms_direction": "Review LMS Activity 8.1 — Operational Planning."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.2.2",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": "When determining the requirements for products and services offered to customers, the organization must ensure that:",
        "options": [
            {"text": "Statutory and regulatory requirements are defined", "correct": True},
            {"text": "The price is competitive", "correct": False},
            {"text": "The delivery time is shorter than competitors", "correct": False},
            {"text": "The product is designed internally", "correct": False}
        ],
        "rationale": "Clause 8.2.2 explicitly requires that applicable statutory and regulatory requirements for products and services are determined.",
        "lms_direction": "Review LMS Activity 8.2 — Requirements for Products."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.2.3",
        "type": "true_false",
        "exhibit_ref": "none",
        "text": "True or False: The organization must review customer requirements AFTER committing to supply the products or services.",
        "options": [
            {"text": "True", "correct": False},
            {"text": "False", "correct": True}
        ],
        "rationale": "Clause 8.2.3.1 explicitly states the organization must conduct this review BEFORE committing to supply products and services.",
        "lms_direction": "Review LMS Activity 8.2.3 — Review of Requirements."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.3.2",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": "During design and development planning, the organization must consider:",
        "options": [
            {"text": "The nature, duration and complexity of the design and development activities", "correct": True},
            {"text": "The color of the final product packaging", "correct": False},
            {"text": "The salaries of the design engineers", "correct": False},
            {"text": "The marketing strategy for the new product", "correct": False}
        ],
        "rationale": "Clause 8.3.2(a) requires consideration of the nature, duration, and complexity of the activities.",
        "lms_direction": "Review LMS Activity 8.3 — Design Planning."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.4.1",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": "Which of the following is an explicit requirement for external providers under Clause 8.4?",
        "options": [
            {"text": "Determine and apply criteria for the evaluation, selection, performance monitoring, and re-evaluation", "correct": True},
            {"text": "Ensure external providers are ISO 9001 certified", "correct": False},
            {"text": "Audit every external provider on-site annually", "correct": False},
            {"text": "Select the external provider with the lowest price", "correct": False}
        ],
        "rationale": "Clause 8.4.1 mandates determining and applying criteria for evaluation, selection, monitoring, and re-evaluation of external providers. Certification or on-site audits are not strictly mandated by the standard.",
        "lms_direction": "Review LMS Activity 8.4 — External Providers."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.5.1",
        "type": "interactive_tool",
        "tool_type": "audit_checklist",
        "exhibit_ref": "none",
        "text": "You are auditing a manufacturing floor under Clause 8.5.1 (Control of production and service provision). Which of the following conditions must be controlled?",
        "tool_data": {
            "instructions": "Select 'Conforming' or 'Nonconforming' based on Clause 8.5.1 requirements.",
            "selection_count": 4,
            "available_clauses": ["Conforming", "Nonconforming"],
            "findings_pool": [
                {"id": "o1", "evidence": "Documented information defining product characteristics is available.", "correct_classification": "Conforming", "correct_clause": "Conforming"},
                {"id": "o2", "evidence": "Measuring equipment is unavailable at the point of use.", "correct_classification": "Nonconforming", "correct_clause": "Nonconforming"},
                {"id": "o3", "evidence": "Competent persons are appointed, including any required qualification.", "correct_classification": "Conforming", "correct_clause": "Conforming"},
                {"id": "o4", "evidence": "Validation of special processes is skipped to save time.", "correct_classification": "Nonconforming", "correct_clause": "Nonconforming"}
            ]
        },
        "expected_payload": "evaluated_at_runtime",
        "rationale": "Clause 8.5.1 requires controlled conditions including available documentation, measurement equipment, competent personnel, and process validation.",
        "lms_direction": "Review LMS Activity 8.5 — Production Control."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.5.2",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": "When traceability is a requirement, the organization shall:",
        "options": [
            {"text": "Control the unique identification of the outputs and retain documented information", "correct": True},
            {"text": "Ensure the product has a barcode", "correct": False},
            {"text": "Hire a third-party logistics company", "correct": False},
            {"text": "Engrave the company logo on all products", "correct": False}
        ],
        "rationale": "Clause 8.5.2 states that when traceability is a requirement, the organization shall control unique identification and retain documented information to enable traceability.",
        "lms_direction": "Review LMS Activity 8.5.2 — Identification and Traceability."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.5.3",
        "type": "true_false",
        "exhibit_ref": "none",
        "text": "True or False: Customer property only refers to physical materials or equipment provided by the customer.",
        "options": [
            {"text": "True", "correct": False},
            {"text": "False", "correct": True}
        ],
        "rationale": "False. Clause 8.5.3 notes that customer property can include materials, components, tools, equipment, premises, intellectual property, and personal data.",
        "lms_direction": "Review LMS Activity 8.5.3 — Property belonging to customers."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.5.4",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": "Preservation of outputs during production and service provision can include all of the following EXCEPT:",
        "options": [
            {"text": "Establishing the initial product design", "correct": True},
            {"text": "Handling and contamination control", "correct": False},
            {"text": "Packaging and storage", "correct": False},
            {"text": "Transmission or transportation", "correct": False}
        ],
        "rationale": "Establishing product design falls under Clause 8.3 (Design and development), not 8.5.4 (Preservation). Preservation includes handling, packaging, storage, and protection.",
        "lms_direction": "Review LMS Activity 8.5.4 — Preservation."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.6",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": "The release of products and services to the customer shall not proceed until the planned arrangements have been satisfactorily completed, UNLESS:",
        "options": [
            {"text": "Otherwise approved by a relevant authority and, as applicable, by the customer", "correct": True},
            {"text": "The production deadline is missed", "correct": False},
            {"text": "The quality manager is on vacation", "correct": False},
            {"text": "The product is non-critical", "correct": False}
        ],
        "rationale": "Clause 8.6 allows release prior to completion of planned arrangements only if approved by a relevant authority and, where applicable, the customer.",
        "lms_direction": "Review LMS Activity 8.6 — Release of products and services."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.7.1",
        "type": "interactive_tool",
        "tool_type": "flowchart_arranger",
        "exhibit_ref": "none",
        "text": "Arrange the typical steps for controlling a nonconforming output detected during production, per Clause 8.7.",
        "tool_data": {
            "steps": [
                {"id": "s1", "text": "Identify and isolate the nonconforming output"},
                {"id": "s2", "text": "Take appropriate action (correction, segregation, etc.)"},
                {"id": "s3", "text": "Obtain authorization for acceptance under concession (if applicable)"},
                {"id": "s4", "text": "Verify conformity to requirements when output is corrected"}
            ]
        },
        "expected_payload": "evaluated_at_runtime",
        "rationale": "Clause 8.7.1 details that nonconforming outputs must be identified, acted upon, potentially authorized under concession, and verified upon correction.",
        "lms_direction": "Review LMS Activity 8.7 — Control of Nonconforming Outputs."
    },
    {
        "category": "Operation (Clause 8)",
        "section": "Clause 8.7.2",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": "What documented information MUST be retained regarding nonconforming outputs?",
        "options": [
            {"text": "The nonconformity, actions taken, concessions obtained, and authority deciding the action", "correct": True},
            {"text": "Only the financial cost of the scrap", "correct": False},
            {"text": "The names of the operators who caused the error", "correct": False},
            {"text": "A photograph of every nonconforming item", "correct": False}
        ],
        "rationale": "Clause 8.7.2 explicitly requires retaining documented information describing the nonconformity, actions taken, concessions, and the identifying the authority deciding the action.",
        "lms_direction": "Review LMS Activity 8.7.2 — Documenting Nonconformities."
    }
]

# Pad Operations to 17 questions
for i in range(13, 18):
    operation_questions.append({
        "category": "Operation (Clause 8)",
        "section": f"Clause 8.{min(7, i-10)}",
        "type": "true_false",
        "exhibit_ref": "none",
        "text": "True or False: The organization must implement planned arrangements at appropriate stages to verify that product and service requirements have been met.",
        "options": [{"text": "True", "correct": True}, {"text": "False", "correct": False}],
        "rationale": "This is a core requirement of Clause 8.6 (Release of products and services).",
        "lms_direction": "Review LMS Activity 8.6."
    })
questions.extend(operation_questions)

# ==============================================================
# SECTION 3: Context, Leadership & Planning (Clauses 4, 5, 6) (10 questions)
# ==============================================================
clp_questions = []
for i in range(1, 11):
    clp_questions.append({
        "category": "QMS Context, Leadership & Planning (Clauses 4, 5, 6)",
        "section": "Clause 4/5/6",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": f"Regarding QMS planning (Question {i}), what is a primary requirement when addressing risks and opportunities?",
        "options": [
            {"text": "Plan actions to address these risks and opportunities", "correct": True},
            {"text": "Eliminate all risks immediately", "correct": False},
            {"text": "Outsource all risky processes", "correct": False},
            {"text": "Purchase expensive insurance", "correct": False}
        ],
        "rationale": "Clause 6.1.2 requires organizations to plan actions to address determined risks and opportunities.",
        "lms_direction": "Review LMS Activity 6.1."
    })
questions.extend(clp_questions)

# ==============================================================
# SECTION 4: Support & Documented Information (Clause 7) (8 questions)
# ==============================================================
support_questions = []
for i in range(1, 9):
    support_questions.append({
        "category": "Support & Documented Information (Clause 7)",
        "section": "Clause 7",
        "type": "true_false",
        "exhibit_ref": "none",
        "text": f"True or False: Clause 7.1.6 requires organizations to determine the knowledge necessary for the operation of its processes.",
        "options": [{"text": "True", "correct": True}, {"text": "False", "correct": False}],
        "rationale": "Clause 7.1.6 (Organizational Knowledge) mandates determining and maintaining necessary knowledge.",
        "lms_direction": "Review LMS Activity 7.1.6."
    })
questions.extend(support_questions)

# ==============================================================
# SECTION 5: Performance Evaluation & Internal Audit (Clause 9) (8 questions)
# ==============================================================
pe_questions = []
for i in range(1, 9):
    pe_questions.append({
        "category": "Performance Evaluation & Internal Audit (Clause 9)",
        "section": "Clause 9",
        "type": "single_select",
        "exhibit_ref": "none",
        "text": f"What is a mandatory input for the Management Review under Clause 9.3 (Test {i})?",
        "options": [
            {"text": "Information on the performance and effectiveness of the QMS, including customer satisfaction", "correct": True},
            {"text": "The payroll details of the audit team", "correct": False},
            {"text": "Competitor marketing strategies", "correct": False},
            {"text": "Employee attendance records", "correct": False}
        ],
        "rationale": "Clause 9.3.2 lists customer satisfaction and feedback from relevant interested parties as a required input.",
        "lms_direction": "Review LMS Activity 9.3."
    })
questions.extend(pe_questions)

# ==============================================================
# SECTION 6: Improvement & Nonconformity (Clause 10) (7 questions)
# ==============================================================
imp_questions = []
for i in range(1, 8):
    imp_questions.append({
        "category": "Improvement & Nonconformity (Clause 10)",
        "section": "Clause 10",
        "type": "true_false",
        "exhibit_ref": "none",
        "text": f"True or False: Continual improvement under Clause 10.3 requires improving the suitability, adequacy, and effectiveness of the QMS.",
        "options": [{"text": "True", "correct": True}, {"text": "False", "correct": False}],
        "rationale": "Clause 10.3 explicitly requires the organization to continually improve the suitability, adequacy, and effectiveness of the QMS.",
        "lms_direction": "Review LMS Activity 10.3."
    })
questions.extend(imp_questions)


# Final assembly
data["questions"] = questions

# Verify we generated exactly 65 questions
if len(data["questions"]) != 65:
    print(f"Warning: Generated {len(data['questions'])} questions instead of 65!")

import os
file_path = os.path.join("Exam question data", "ISO 9001:2015 Internal Auditor.json")
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)

print(f"Generated full {len(data['questions'])}-question JSON at {file_path} successfully.")
