export default {
  "title": "ISO/IEC 27001:2022 Foundations",
  "layout_size": 20,
  "time_limit": 20,
  "questions": [
    // =========================================================
    // PART 0: FOUNDATIONAL TERMINOLOGY (Remember)
    // Basic vocabulary and origin-of-terms, ahead of any clause content.
    // =========================================================
    {
      "category": "Foundational Terminology",
      "section": "Basic Vocabulary",
      "type": "single_select",
      "text": "What does 'MSS' stand for?",
      "options": [
        { "text": "Management System Standard(s)", "correct": true },
        { "text": "Minimum Security Specification", "correct": false },
        { "text": "Multiple Site Structure", "correct": false },
        { "text": "Management Security System", "correct": false }
      ],
      "rationale": "MSS refers to Management System Standards — the broader family of standards (ISO 9001, ISO 14001, ISO/IEC 27001, etc.) that share a common structure. 'Minimum Security Specification' and 'Management Security System' are plausible-sounding but do not exist as recognised ISO terms.",
      "lms_direction": "Review 'Introduction to Management System Standards (MSS)' in Part 1."
    },
    {
      "category": "Foundational Terminology",
      "section": "Basic Vocabulary",
      "type": "single_select",
      "text": "The name 'ISO' comes from which language, and what does it mean?",
      "options": [
        { "text": "Latin, meaning 'law'", "correct": false },
        { "text": "Greek, meaning 'equal'", "correct": true },
        { "text": "French, meaning 'standard'", "correct": false },
        { "text": "It is simply an English acronym with no other meaning", "correct": false }
      ],
      "rationale": "ISO is not an acronym for 'International Organization for Standardization' — that would abbreviate differently in every language (e.g. 'IOS' in English, 'OIN' in French). ISO deliberately chose a short, language-neutral name derived from the Greek word 'isos', meaning 'equal', so the same three letters work worldwide.",
      "lms_direction": "Review 'The International Organisation for Standardisation (ISO)' section."
    },
    {
      "category": "Foundational Terminology",
      "section": "Basic Vocabulary",
      "type": "single_select",
      "text": "What does 'ISMS' stand for?",
      "options": [
        { "text": "Information Security Management System", "correct": true },
        { "text": "Internal Systems Monitoring Standard", "correct": false },
        { "text": "International Security Management Specification", "correct": false },
        { "text": "Information Systems Management Standard", "correct": false }
      ],
      "rationale": "ISMS = Information Security Management System — the overall system of policies, processes, and controls that ISO/IEC 27001 requires an organisation to build.",
      "lms_direction": "Review the ISMS definition in Part 1."
    },
    {
      "category": "Foundational Terminology",
      "section": "Basic Vocabulary",
      "type": "single_select",
      "text": "What does 'PDCA' stand for?",
      "options": [
        { "text": "Plan-Do-Check-Act", "correct": true },
        { "text": "Prepare-Deploy-Control-Assess", "correct": false },
        { "text": "Plan-Develop-Confirm-Adjust", "correct": false },
        { "text": "Process-Design-Create-Audit", "correct": false }
      ],
      "rationale": "PDCA (Plan-Do-Check-Act) is the continual-improvement cycle underlying ISO/IEC 27001's structure.",
      "lms_direction": "Review the PDCA Cycle module."
    },
    {
      "category": "Foundational Terminology",
      "section": "About ISO",
      "type": "single_select",
      "text": "In which city is ISO headquartered?",
      "options": [
        { "text": "Geneva, Switzerland", "correct": true },
        { "text": "Brussels, Belgium", "correct": false },
        { "text": "London, United Kingdom", "correct": false },
        { "text": "New York, United States", "correct": false }
      ],
      "rationale": "ISO is headquartered in Geneva, Switzerland. London is a common wrong answer since BSI (which developed the standard that became ISO/IEC 27001) is based there — but BSI is the UK's national standards body, not ISO itself.",
      "lms_direction": "Review 'The International Organisation for Standardisation (ISO)' section."
    },
    {
      "category": "Foundational Terminology",
      "section": "About ISO",
      "type": "single_select",
      "text": "In what year was ISO founded?",
      "options": [
        { "text": "1947", "correct": true },
        { "text": "1995", "correct": false },
        { "text": "1926", "correct": false },
        { "text": "2005", "correct": false }
      ],
      "rationale": "ISO was founded in 1947. 1995 and 2005 are common mix-ups with milestones in ISO/IEC 27001's own history (BS 7799-1 and ISO/IEC 27001:2005), not ISO's founding date.",
      "lms_direction": "Review 'The International Organisation for Standardisation (ISO)' section."
    },
    {
      "category": "Foundational Terminology",
      "section": "Basic Vocabulary",
      "type": "single_select",
      "text": "In the simplest terms, what is Annex A?",
      "options": [
        { "text": "A catalogue of security controls an organisation can choose from", "correct": true },
        { "text": "A list of laws every organisation must follow", "correct": false },
        { "text": "The certificate issued after a successful audit", "correct": false },
        { "text": "A record of every past security incident", "correct": false }
      ],
      "rationale": "Annex A is a reference catalogue of 93 security controls, organised into four themes. Organisations select which ones apply to them — it is not a list of laws, and it is not the certificate itself.",
      "lms_direction": "Review 'Why Learn This Now?' in the Annex A module."
    },
    {
      "category": "Foundational Terminology",
      "section": "Basic Vocabulary",
      "type": "single_select",
      "text": "In ISO/IEC 27001, what is a 'control'?",
      "options": [
        { "text": "A measure put in place to reduce or manage a risk", "correct": true },
        { "text": "A government inspector who visits the company", "correct": false },
        { "text": "A type of computer virus", "correct": false },
        { "text": "A legal contract with a supplier", "correct": false }
      ],
      "rationale": "A control is any measure — a policy, a process, or a technical tool — used to reduce or manage a security risk. There are 93 such controls listed in Annex A.",
      "lms_direction": "Review 'The Rulebook vs. The Instruction Manual' section."
    },
    {
      "category": "Foundational Terminology",
      "section": "Basic Vocabulary",
      "type": "true_false",
      "text": "True or False: ISO/IEC 27001 only applies to IT and technology companies.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "ISO/IEC 27001 is designed to apply to organisations of any size, sector, or industry — not just technology companies. Any organisation that handles information can adopt it.",
      "lms_direction": "Review 'Introduction to ISO/IEC 27001:2022' in Part 2."
    },
    {
      "category": "Foundational Terminology",
      "section": "Basic Vocabulary",
      "type": "single_select",
      "text": "What is a 'certification body' in the context of ISO/IEC 27001?",
      "options": [
        { "text": "An independent organisation that audits and certifies a company against the standard", "correct": true },
        { "text": "The internal IT department of the company", "correct": false },
        { "text": "A government department responsible for national law", "correct": false },
        { "text": "A supplier that provides security software", "correct": false }
      ],
      "rationale": "A certification body is an independent, accredited third party that audits an organisation's ISMS and issues (or withholds) certification. It is separate from the organisation itself and from government.",
      "lms_direction": "Review the Course Summary and pathway overview."
    },

    // =========================================================
    // PART 1: CLAUSE-BY-CLAUSE RECALL (Remember)
    // Pure clause-number-to-title matching, one item per clause 4-10,
    // before any question about what each clause actually requires.
    // =========================================================
    {
      "category": "Clause Recall",
      "section": "Clause Numbers",
      "type": "single_select",
      "text": "Which clause of ISO/IEC 27001 requires the organization to determine the 'Context of the Organization'?",
      "options": [
        { "text": "Clause 4", "correct": true },
        { "text": "Clause 5", "correct": false },
        { "text": "Clause 8", "correct": false },
        { "text": "Clause 10", "correct": false }
      ],
      "rationale": "Clause 4, Context of the Organization, is the first of the seven main requirements clauses.",
      "lms_direction": "Review the Clause 4–10 summary table in Part 3."
    },
    {
      "category": "Clause Recall",
      "section": "Clause Numbers",
      "type": "single_select",
      "text": "Which clause of ISO/IEC 27001 is titled 'Leadership'?",
      "options": [
        { "text": "Clause 4", "correct": false },
        { "text": "Clause 5", "correct": true },
        { "text": "Clause 6", "correct": false },
        { "text": "Clause 7", "correct": false }
      ],
      "rationale": "Clause 5 is Leadership — top management commitment, policy, and roles.",
      "lms_direction": "Review the Clause 4–10 summary table in Part 3."
    },
    {
      "category": "Clause Recall",
      "section": "Clause Numbers",
      "type": "single_select",
      "text": "Which clause of ISO/IEC 27001 is titled 'Planning'?",
      "options": [
        { "text": "Clause 5", "correct": false },
        { "text": "Clause 6", "correct": true },
        { "text": "Clause 7", "correct": false },
        { "text": "Clause 9", "correct": false }
      ],
      "rationale": "Clause 6 is Planning — this is where risk assessment, risk treatment, and information security objectives are covered.",
      "lms_direction": "Review the Clause 4–10 summary table in Part 3."
    },
    {
      "category": "Clause Recall",
      "section": "Clause Numbers",
      "type": "single_select",
      "text": "Which clause of ISO/IEC 27001 is titled 'Support'?",
      "options": [
        { "text": "Clause 6", "correct": false },
        { "text": "Clause 7", "correct": true },
        { "text": "Clause 8", "correct": false },
        { "text": "Clause 9", "correct": false }
      ],
      "rationale": "Clause 7 is Support — resources, competence, awareness, communication, and documented information.",
      "lms_direction": "Review the Clause 4–10 summary table in Part 3."
    },
    {
      "category": "Clause Recall",
      "section": "Clause Numbers",
      "type": "single_select",
      "text": "Which clause of ISO/IEC 27001 is titled 'Operation'?",
      "options": [
        { "text": "Clause 6", "correct": false },
        { "text": "Clause 7", "correct": false },
        { "text": "Clause 8", "correct": true },
        { "text": "Clause 10", "correct": false }
      ],
      "rationale": "Clause 8 is Operation — putting the risk treatment plan into practice day-to-day.",
      "lms_direction": "Review the Clause 4–10 summary table in Part 3."
    },
    {
      "category": "Clause Recall",
      "section": "Clause Numbers",
      "type": "single_select",
      "text": "Under ISO/IEC 27001, which clause covers 'Performance Evaluation' including internal audits?",
      "options": [
        { "text": "Clause 7", "correct": false },
        { "text": "Clause 8", "correct": false },
        { "text": "Clause 9", "correct": true },
        { "text": "Clause 10", "correct": false }
      ],
      "rationale": "Clause 9 is Performance Evaluation — monitoring, internal audit, and management review.",
      "lms_direction": "Review the Clause 4–10 summary table in Part 3."
    },
    {
      "category": "Clause Recall",
      "section": "Clause Numbers",
      "type": "single_select",
      "text": "Under ISO/IEC 27001, Clause 10 covers which overarching concept?",
      "options": [
        { "text": "Operation", "correct": false },
        { "text": "Improvement", "correct": true },
        { "text": "Support", "correct": false },
        { "text": "Leadership", "correct": false }
      ],
      "rationale": "Clause 10 is Improvement — nonconformity, corrective action, and continual improvement.",
      "lms_direction": "Review the Clause 4–10 summary table in Part 3."
    },

    // =========================================================
    // PART 2: ARCHITECTURE / CORE CONCEPTS (Remember)
    // =========================================================
    {
      "category": "Architecture",
      "section": "Core Concepts",
      "type": "single_select",
      "text": "The ISO/IEC 27001 standard provides requirements for which type of management system?",
      "options": [
        { "text": "Quality Management System", "correct": false },
        { "text": "Environmental Management System", "correct": false },
        { "text": "Information Security Management System (ISMS)", "correct": true },
        { "text": "Food Safety Management System", "correct": false }
      ],
      "rationale": "Direct recall of the purpose of the ISO/IEC 27001 standard.",
      "lms_direction": "Review the Introduction to the ISO/IEC 27001 standard."
    },
    {
      "category": "Architecture",
      "section": "Core Concepts",
      "type": "single_select",
      "text": "In ISO/IEC 27001, what are the three foundational pillars of the 'CIA Triad'?",
      "options": [
        { "text": "Confidentiality, Integrity, and Availability", "correct": true },
        { "text": "Control, Identification, and Access", "correct": false },
        { "text": "Compliance, Inspection, and Authorization", "correct": false },
        { "text": "Communication, Improvement, and Analysis", "correct": false }
      ],
      "rationale": "Tests the core goal of information security.",
      "lms_direction": "Refer to the module on the 'CIA Triad'."
    },
    {
      "category": "Architecture",
      "section": "Structure",
      "type": "single_select",
      "text": "What does the acronym 'SoA' stand for in the context of ISO/IEC 27001?",
      "options": [
        { "text": "Standard of Application", "correct": false },
        { "text": "Statement of Applicability", "correct": true },
        { "text": "Security Operations Audit", "correct": false },
        { "text": "System Oversight Assessment", "correct": false }
      ],
      "rationale": "Direct recall of the name of one of the most important documents in an ISMS implementation.",
      "lms_direction": "Review the Statement of Applicability (SoA) lesson."
    },
    {
      "category": "Architecture",
      "section": "Structure",
      "type": "true_false",
      "text": "True or False: Annex A in ISO/IEC 27001 contains the mandatory management requirements for the ISMS.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "Annex A contains security controls; management requirements are in Clauses 4-10.",
      "lms_direction": "Review the structure of ISO/IEC 27001 (Clauses vs. Annex A)."
    },
    {
      "category": "Architecture",
      "section": "Definitions",
      "type": "single_select",
      "text": "In ISO/IEC 27001, what is an 'Information Asset'?",
      "options": [
        { "text": "The money a company has in its bank account.", "correct": false },
        { "text": "Anything that has value to the organization and needs to be protected.", "correct": true },
        { "text": "Only physical servers and computers.", "correct": false },
        { "text": "The company's annual tax return.", "correct": false }
      ],
      "rationale": "Tests foundational knowledge of what the ISMS aims to protect.",
      "lms_direction": "Review the Asset Management definition."
    },
    {
      "category": "Architecture",
      "section": "Core Concepts",
      "type": "true_false",
      "text": "True or False: The ISO/IEC 27001 ISMS scope defines the boundaries and applicability of the management system.",
      "options": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ],
      "rationale": "Tests the basic concept of defining system boundaries.",
      "lms_direction": "Consult the Scope and Context lesson."
    },

    // =========================================================
    // PART 3: CLAUSE REQUIREMENTS RECALL (Understanding)
    // What each clause actually requires an organisation to do.
    // =========================================================
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "single_select",
      "text": "ISO/IEC 27001 Clause 6 requires organizations to perform a 'Risk Assessment'. What is the purpose of this process?",
      "options": [
        { "text": "To identify, analyze, and evaluate information security risks.", "correct": true },
        { "text": "To decide which employees to hire.", "correct": false },
        { "text": "To choose the best office furniture.", "correct": false },
        { "text": "To write the annual marketing plan.", "correct": false }
      ],
      "rationale": "Connects Risk Assessment to its security purpose.",
      "lms_direction": "Study the Risk Assessment and Treatment module."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "single_select",
      "text": "Which ISO/IEC 27001 clause requires the organization to provide the necessary resources, competence, and awareness training?",
      "options": [
        { "text": "Clause 5 (Leadership)", "correct": false },
        { "text": "Clause 7 (Support)", "correct": true },
        { "text": "Clause 8 (Operation)", "correct": false },
        { "text": "Clause 10 (Improvement)", "correct": false }
      ],
      "rationale": "Training and resources are under the Support clause.",
      "lms_direction": "Refer to the Support and Resources module."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "multi_select",
      "text": "Which TWO of the following are required to be established and maintained under the ISO/IEC 27001 standard? (Select TWO)",
      "options": [
        { "text": "Information Security Policy", "correct": true },
        { "text": "Information Security Objectives", "correct": true },
        { "text": "Daily office cleaning roster", "correct": false },
        { "text": "Employee vacation calendar", "correct": false }
      ],
      "rationale": "Policy and Objectives are mandatory ISMS documents.",
      "lms_direction": "Review mandatory documentation requirements."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "single_select",
      "text": "When an organization operates its security controls daily to mitigate risks, this activity falls under which clause?",
      "options": [
        { "text": "Clause 6 (Planning)", "correct": false },
        { "text": "Clause 7 (Support)", "correct": false },
        { "text": "Clause 8 (Operation)", "correct": true },
        { "text": "Clause 9 (Evaluation)", "correct": false }
      ],
      "rationale": "Clause 8 is the operational execution phase.",
      "lms_direction": "Refer to the Operational Planning and Control module."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "single_select",
      "text": "ISO/IEC 27001 requires the organization to have a documented process for nonconformity and corrective action. This is found in:",
      "options": [
        { "text": "Clause 4", "correct": false },
        { "text": "Clause 7", "correct": false },
        { "text": "Clause 9", "correct": false },
        { "text": "Clause 10", "correct": true }
      ],
      "rationale": "Corrective action is found in the Improvement clause.",
      "lms_direction": "Study the Nonconformity and Corrective Action module."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "single_select",
      "text": "Which clause of ISO/IEC 27001 requires the organization to monitor, measure, analyze, and evaluate the ISMS performance?",
      "options": [
        { "text": "Clause 6", "correct": false },
        { "text": "Clause 7", "correct": false },
        { "text": "Clause 9", "correct": true },
        { "text": "Clause 10", "correct": false }
      ],
      "rationale": "Monitoring is the core of Clause 9.",
      "lms_direction": "Refer to the Monitoring and Measurement module."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "true_false",
      "text": "True or False: An 'Internal Audit' is mandatory under ISO/IEC 27001 Clause 9 to verify the ISMS effectiveness.",
      "options": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ],
      "rationale": "Internal audit is a core requirement of Clause 9.",
      "lms_direction": "Study the Internal Audit requirements."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "single_select",
      "text": "Which clause of ISO/IEC 27001 governs the control of 'Documented Information' (records and policies)?",
      "options": [
        { "text": "Clause 4", "correct": false },
        { "text": "Clause 7", "correct": true },
        { "text": "Clause 8", "correct": false },
        { "text": "Clause 9", "correct": false }
      ],
      "rationale": "Control of documents is a Support activity in Clause 7.",
      "lms_direction": "Refer to the Documented Information module."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "single_select",
      "text": "Which clause requires the organization to determine interested parties (stakeholders) relevant to the ISMS?",
      "options": [
        { "text": "Clause 4", "correct": true },
        { "text": "Clause 5", "correct": false },
        { "text": "Clause 6", "correct": false },
        { "text": "Clause 7", "correct": false }
      ],
      "rationale": "Interested parties are defined in Clause 4 (Context).",
      "lms_direction": "Review the Interested Parties section."
    },
    {
      "category": "Clause Knowledge",
      "section": "Mapping",
      "type": "single_select",
      "text": "What is the primary role of 'Management Review' under ISO/IEC 27001?",
      "options": [
        { "text": "To check whether individual employees followed the dress code.", "correct": false },
        { "text": "To ensure the ISMS remains suitable, adequate, and effective.", "correct": true },
        { "text": "To approve the annual office holiday party budget.", "correct": false },
        { "text": "To update the marketing website.", "correct": false }
      ],
      "rationale": "Management Review is a strategic performance tool, distinct from day-to-day HR or operational matters.",
      "lms_direction": "Review the Management Review inputs and outputs."
    },

    // =========================================================
    // PART 4: SCENARIO APPLICATION (Application)
    // =========================================================
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "A staff member leaves a laptop unattended in a coffee shop, and it is stolen. Which ISO/IEC 27001 Annex A control area does this relate to?",
      "options": [
        { "text": "Physical and environmental security", "correct": true },
        { "text": "Supplier relationship security", "correct": false },
        { "text": "Information classification", "correct": false },
        { "text": "Logical access control", "correct": false }
      ],
      "rationale": "Securing portable equipment is part of physical/environmental security.",
      "lms_direction": "Review Annex A control categories."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "An organization restricts access to their server room using biometric fingerprints. This is an implementation of which type of Annex A control?",
      "options": [
        { "text": "Cryptography", "correct": false },
        { "text": "Logical access control", "correct": false },
        { "text": "Physical access control", "correct": true },
        { "text": "Human resource security", "correct": false }
      ],
      "rationale": "Securing a physical location is physical access control.",
      "lms_direction": "Study Annex A Physical Security controls."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "An IT manager enforces a rule that all passwords must be changed every 90 days. This relates to which Annex A control area?",
      "options": [
        { "text": "Access control", "correct": true },
        { "text": "Asset management", "correct": false },
        { "text": "Business continuity", "correct": false },
        { "text": "Legal compliance", "correct": false }
      ],
      "rationale": "Password policies are a foundational part of Access Control.",
      "lms_direction": "Refer to the Access Control lesson."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "A new employee joins the company. The HR team ensures they sign a confidentiality agreement. This is an example of which Annex A control category?",
      "options": [
        { "text": "Physical security", "correct": false },
        { "text": "Human resource security", "correct": true },
        { "text": "Supplier relationships", "correct": false },
        { "text": "Cryptography", "correct": false }
      ],
      "rationale": "Managing staff security responsibilities is HR security.",
      "lms_direction": "Review Annex A Human Resource security controls."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "Which of the following is an example of a security 'Incident' under Annex A?",
      "options": [
        { "text": "The office coffee machine stops working.", "correct": false },
        { "text": "A virus is detected on the company network.", "correct": true },
        { "text": "The office is scheduled for repainting.", "correct": false },
        { "text": "Management approves next year's budget.", "correct": false }
      ],
      "rationale": "Security incidents involve threats to information systems, not routine operational events.",
      "lms_direction": "Refer to the Incident Management module."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "You are backing up customer data to a secure off-site server daily. This activity supports which of the following Annex A objectives?",
      "options": [
        { "text": "Information backup (Availability)", "correct": true },
        { "text": "Cryptography", "correct": false },
        { "text": "Physical security", "correct": false },
        { "text": "Employee training", "correct": false }
      ],
      "rationale": "Backups ensure data availability.",
      "lms_direction": "Review the Backup management control."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "true_false",
      "text": "True or False: ISO/IEC 27001 requires the organization to provide information security awareness training to all employees.",
      "options": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ],
      "rationale": "Awareness is a mandatory support activity (Clause 7 and Annex A).",
      "lms_direction": "Refer to the Awareness training lesson."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "multi_select",
      "text": "Which TWO of the following are examples of organizational controls in Annex A? (Select TWO)",
      "options": [
        { "text": "Information classification", "correct": true },
        { "text": "Supplier information security", "correct": true },
        { "text": "The air conditioning system", "correct": false },
        { "text": "The cafeteria menu", "correct": false }
      ],
      "rationale": "Classification and supplier management are organizational controls.",
      "lms_direction": "Study the Annex A categorization structure."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "An organization categorizes documents as 'Public', 'Internal', or 'Confidential'. This is an example of:",
      "options": [
        { "text": "Information classification", "correct": true },
        { "text": "Physical security", "correct": false },
        { "text": "Cryptography", "correct": false },
        { "text": "Incident management", "correct": false }
      ],
      "rationale": "Classification allows for appropriate handling of information.",
      "lms_direction": "Refer to the Information Classification module."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "A manager notices that software on company laptops is outdated and vulnerable to hackers. They update all software immediately. This is an example of:",
      "options": [
        { "text": "Vulnerability management", "correct": true },
        { "text": "Physical security", "correct": false },
        { "text": "Human resource security", "correct": false },
        { "text": "Supplier relationship security", "correct": false }
      ],
      "rationale": "Patching software is a vulnerability management task.",
      "lms_direction": "Review Technical vulnerability management."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "A clean desk policy is implemented to ensure sensitive documents are not left out when an employee leaves their station. This is a control for:",
      "options": [
        { "text": "Physical and information security", "correct": true },
        { "text": "Cryptography", "correct": false },
        { "text": "Supplier relationship", "correct": false },
        { "text": "Incident management", "correct": false }
      ],
      "rationale": "Clean desk policies prevent unauthorized information exposure.",
      "lms_direction": "Study the Physical and Information security controls."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "true_false",
      "text": "True or False: Encryption is a logical technique used to protect data confidentiality, falling under Annex A technological controls.",
      "options": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ],
      "rationale": "Cryptography is a core technological control in Annex A.",
      "lms_direction": "Refer to the Cryptography lesson."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "You are working remotely and use a secure VPN to connect to the office. This control is designed to protect:",
      "options": [
        { "text": "Data in transit (Confidentiality)", "correct": true },
        { "text": "Physical office building access", "correct": false },
        { "text": "Employee vacation time", "correct": false },
        { "text": "Network hardware warranty terms", "correct": false }
      ],
      "rationale": "VPNs ensure data is secure while being transmitted over networks.",
      "lms_direction": "Study Network security controls."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "An organization checks a cloud service provider's security audit report before signing a contract. This is required under:",
      "options": [
        { "text": "Supplier relationship security", "correct": true },
        { "text": "Physical security", "correct": false },
        { "text": "Human resource security", "correct": false },
        { "text": "Cryptography", "correct": false }
      ],
      "rationale": "Assessing suppliers (including cloud providers) is a supplier relationship control.",
      "lms_direction": "Refer to the Supplier relationships module."
    },
    {
      "category": "Scenario Application",
      "section": "Annex A & Scenarios",
      "type": "single_select",
      "text": "An employee loses their company-issued smartphone. The IT department remotely wipes all company data from it. This control addresses:",
      "options": [
        { "text": "Mobile device security", "correct": true },
        { "text": "Physical office security", "correct": false },
        { "text": "Incident reporting", "correct": false },
        { "text": "Supplier management", "correct": false }
      ],
      "rationale": "Securing mobile devices is a specific Annex A control area.",
      "lms_direction": "Review Mobile device and teleworking security."
    }
  ],
  "remediationData": {
    "Foundational Terminology": "Revisit the course Introduction, 'The International Organisation for Standardisation (ISO)', and 'A Brief History of ISO/IEC 27001' sections. Focus on basic acronyms and where key terms come from.",
    "Clause Recall": "Review the Clause 4–10 summary table in Part 3 of the manual. Focus on memorising which clause number matches which title before worrying about what each clause requires.",
    "Architecture": "Revisit the course module on 'ISO/IEC 27001 Structure and Core Concepts'. Focus on understanding the ISMS, the CIA Triad, and the difference between Clauses and Annex A.",
    "Clause Knowledge": "Review the clause mapping reference chart. Remember to connect management activities to the corresponding standard clause (e.g., Clause 6 for Risk, Clause 7 for Support).",
    "Scenario Application": "Practice applying Annex A controls to real-world scenarios. Focus on identifying the correct control category for common security issues (e.g., Physical, Technical, Organizational)."
  }
};
