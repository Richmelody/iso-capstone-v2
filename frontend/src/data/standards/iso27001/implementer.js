export default {
  "title": "ISO 27001:2022 Implementer — Capstone Exam",
  "layout_size": 35,
  "time_limit": 45,
  "exhibits": {
    "risk_matrix": {
      "description": "A simple risk significance-scoring model used in this exam. Risk Score = Impact x Likelihood. Note: ISO 27001 does not mandate this specific model — Clause 6.1.2 requires each organisation to define its own risk assessment methodology, suited to its own context. This model is for this exam only.",
      "severity_scale": "1=Very Small, 2=Small, 3=Moderate, 4=Big, 5=Very Big",
      "likelihood_scale": "1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain",
      "bands": [
        { "min": 1, "max": 6, "level": "Acceptable Risk" },
        { "min": 7, "max": 14, "level": "Monitor / Periodic Review" },
        { "min": 15, "max": 25, "level": "Unacceptable Risk" }
      ],
      "rule": "Any risk scoring 15 or above is treated as an Unacceptable Risk, and must be addressed by a risk treatment plan and corresponding controls (e.g., from Annex A)."
    },
    "legal_and_contractual_register": {
      "description": "Part of a draft Information Security Requirements Register currently being reviewed.",
      "rows": [
        { "obligation": "General Data Protection Regulation (GDPR)", "owner": "Data Protection Officer", "review_date": "Reviewed quarterly, last checked this month", "evidence": "Privacy policy and latest data mapping on file" },
        { "obligation": "Client Master Services Agreement (National Care Trust) - requires 256-bit encryption", "owner": "Head of IT", "review_date": "Reviewed annually", "evidence": "Latest architectural review on file" },
        { "obligation": "Software Licensing Agreements (Vendor X)", "owner": "Not assigned", "review_date": "No review date recorded", "evidence": "No evidence on file" }
      ]
    },
    "aegis_story": {
      "description": "A continuous eight-paragraph implementation story. Each question below refers to a specific paragraph.",
      "paragraphs": [
        "Paragraph 1: Aegis HealthTech Solutions has run its single-site cloud platform for twelve years, hosting electronic health records. Its biggest client, National Care Trust, has just made ISO 27001:2022 certification a condition of renewing their contract, and other clients have started asking about Aegis's security posture too. The company has also felt the effect of rising cyber insurance premiums, while a new stringent healthcare data sovereignty law and the rise of AI-driven ransomware threats are both on the horizon. Aegis recently migrated to a hybrid-cloud environment, and the CEO appoints Marcus, an experienced IT Director, as the organisation's ISMS Implementer.",
        "Paragraph 2: Marcus starts by identifying Aegis's information assets and assessing the associated risks. He identifies dozens of risks, but one stands out clearly above the rest: the storage of unencrypted legacy patient data backups in standard cloud buckets, vulnerable to unauthorized access. Using the significance scoring model, he rates the Impact of a breach as 5 (Very Big) and the Likelihood of misconfiguration as 4 (Likely) — a score of 20, comfortably inside the Unacceptable Risk band.",
        "Paragraph 3: With the unacceptable risk identified, Marcus sets an objective: ensure 100% of legacy database backups are encrypted at rest, and reduce backup misconfiguration incidents by 20% within twelve months, verified through automated log audits. He builds a risk treatment plan naming the Cloud Infrastructure Lead as owner, a new automated encryption gateway as the main resource required, and a 12-month deadline.",
        "Paragraph 4: Six months in, the encryption gateway is installed. Marcus writes operating criteria for the new process: backup logs must be checked daily to confirm encryption status, and any backup recorded as 'plaintext' must be immediately deleted and rerun securely. Before the unit goes live, he runs a hands-on training session for the two day-shift sysadmins who will monitor it, and documents the new control in the operational procedures.",
        "Paragraph 5: At the nine-month mark, an internal audit is carried out. The auditor reviews the encryption gateway's logs and finds that status checks were recorded for the day shift, but the night shift's monitoring logs are blank for several weeks running. When asked, the night shift sysadmin says he 'just assumes the gateway handles it automatically,' because he was never actually shown how to use the log verification dashboard.",
        "Paragraph 6: Digging further, Marcus realises the training Aegis delivered only covered the day shift team, because the night shift sysadmin joined the company two months after the initial rollout and was never added to the training schedule. The gap wasn't the software or the procedure — it was an incomplete onboarding checklist that failed to trigger role-specific security training during staff turnover.",
        "Paragraph 7: Marcus raises this as a nonconformity and puts a corrective action in place: the night shift sysadmin receives the dashboard training immediately, and Aegis adds a new mandatory step to its onboarding process requiring anyone granted access to critical assets to complete specific security tool training before receiving solo administrative credentials.",
        "Paragraph 8: At the next management review, Marcus reports the finding, the corrective action taken, and proposes a related but separate improvement: implementing an automated script that actively alerts the team if the daily log check is missed, proactively reducing reliance on human memory. Top management approves the extra technical control and logs it as a continual improvement action, distinct from the corrective action already closed out."
      ]
    }
  },
  "questions": [
    {
      "category": "Context & Scope",
      "section": "Clause 4.1 — Context",
      "type": "single_select",
      "text": "An Implementer is using a PESTLE analysis (Political, Economic, Social, Technological, Legal, Environmental) to identify issues under Clause 4.1. A new national data privacy law would be classed under which heading?",
      "options": [
        { "text": "Legal", "correct": true },
        { "text": "Social", "correct": false },
        { "text": "Technological", "correct": false },
        { "text": "Economic", "correct": false }
      ],
      "rationale": "A new privacy law is a Legal issue under PESTLE, even though it may have knock-on Social or Economic effects — the analysis classifies it by its source, not its downstream impact.",
      "lms_direction": "Review the Context Analysis module."
    },
    {
      "category": "Context & Scope",
      "section": "Clause 4.2 — Interested Parties",
      "type": "single_select",
      "text": "A prospective client regularly asks about your information security practices but has not yet signed a contract. How should this be treated under Clause 4.2?",
      "options": [
        { "text": "Treated the same as a strict legal obligation, since they might become a client", "correct": false },
        { "text": "Escalated straight to the legal department instead of being tracked in the ISMS", "correct": false },
        { "text": "Recorded as an interested party whose security expectations should be considered", "correct": true },
        { "text": "Ignored entirely, since they have no formal contractual authority over the organisation", "correct": false }
      ],
      "rationale": "Clause 4.2 requires organisations to consider the needs and expectations of relevant interested parties, not only those with signed contracts or legal power. Market expectations form part of the ISMS context.",
      "lms_direction": "Review the Interested Parties Register module."
    },
    {
      "category": "Context & Scope",
      "section": "Clause 4.3 — Scope",
      "type": "single_select",
      "text": "An organisation has two sites: a secure datacenter and a small marketing office in a different city that handles no client data. What is the most defensible approach to the ISMS scope?",
      "options": [
        { "text": "Include both sites automatically, since a bigger scope always looks more impressive to an auditor", "correct": false },
        { "text": "Include only the marketing office to easily pass the certification audit", "correct": false },
        { "text": "Define the scope around the datacenter, with a documented justification for excluding the marketing office", "correct": true },
        { "text": "Leave the scope undefined until the certification body decides what should be included", "correct": false }
      ],
      "rationale": "The scope should be based on where the information assets and risks actually sit, with a clear, written justification for any exclusion boundaries. The organisation defines the scope, not the auditor.",
      "lms_direction": "Review the ISMS Scope module."
    },
    {
      "category": "Context & Scope",
      "section": "Clause 4.4 — ISMS",
      "type": "single_select",
      "text": "Which of these best describes what Clause 4.4 requires an organisation to do?",
      "options": [
        { "text": "Establish, implement, maintain, and continually improve the ISMS as a set of interacting processes", "correct": true },
        { "text": "Write a single Information Security Policy document once and file it away", "correct": false },
        { "text": "Purchase an expensive firewall before doing anything else", "correct": false },
        { "text": "Appoint just one employee (the CISO) to personally handle every security matter alone", "correct": false }
      ],
      "rationale": "Clause 4.4 is the foundational requirement to build and operate an ISMS as an integrated system of processes. A policy, a firewall, or a single appointed person are just components of that system.",
      "lms_direction": "Review the Information Security Management System Overview module."
    },
    {
      "category": "Leadership",
      "section": "Clause 5.1 — Leadership",
      "type": "single_select",
      "text": "Who is ultimately accountable under Clause 5.1 for ensuring the ISMS achieves its intended outcomes?",
      "options": [
        { "text": "Whichever employee is assigned as the IT Manager", "correct": false },
        { "text": "The external cybersecurity consultant hired to help set up the ISMS", "correct": false },
        { "text": "The external certification body once the audit is complete", "correct": false },
        { "text": "Top management", "correct": true }
      ],
      "rationale": "Clause 5.1 makes top management accountable for the effectiveness of the ISMS. While daily tasks can be delegated to an IT Manager or CISO, ultimate accountability remains with leadership.",
      "lms_direction": "Review the Leadership and Accountability module."
    },
    {
      "category": "Leadership",
      "section": "Clause 5.2 — Policy",
      "type": "single_select",
      "text": "An Implementer drafts a one-line Information Security Policy that reads only: 'We care about data privacy.' What is the primary deficiency of this draft?",
      "options": [
        { "text": "It lacks commitments to satisfy applicable requirements and to continually improve the ISMS", "correct": true },
        { "text": "It does not list the name of every software vendor the organisation uses", "correct": false },
        { "text": "It does not detail the specific encryption algorithms used on the servers", "correct": false },
        { "text": "It is too short to be printed on official company letterhead", "correct": false }
      ],
      "rationale": "A compliant policy must include explicit commitments to satisfy applicable requirements related to information security and to continual improvement. Technical details and vendor lists belong in procedures or registers, not the overarching policy.",
      "lms_direction": "Review the Information Security Policy module."
    },
    {
      "category": "Leadership",
      "section": "Clause 5.3 — Roles",
      "type": "single_select",
      "text": "At a small SaaS company, everyone assumes someone else is responsible for reviewing access logs, resulting in logs not being checked for months. What does Clause 5.3 require to prevent this?",
      "options": [
        { "text": "Logs should only be reviewed when an external audit is scheduled", "correct": false },
        { "text": "The task should dynamically rotate to whoever has the most free time", "correct": false },
        { "text": "Roles and responsibilities relevant to information security must be clearly assigned and communicated", "correct": true },
        { "text": "The CEO must personally review all access logs every week", "correct": false }
      ],
      "rationale": "Clause 5.3 requires that responsibilities relevant to information security are explicitly assigned and communicated. Ambiguity leads to failure; the solution is clear ownership, not centralizing everything to the CEO or relying on free time.",
      "lms_direction": "Review the Roles, Responsibilities and Authorities module."
    },
    {
      "category": "Leadership",
      "section": "Clause 5.3 — Roles",
      "type": "true_false",
      "text": "True or False: Under Clause 5.1, top management must ensure that the resources needed for the ISMS are available.",
      "options": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ],
      "rationale": "Clause 5.1 explicitly requires top management to ensure the integration of ISMS requirements into processes and that the resources needed for the ISMS are available.",
      "lms_direction": "Review the Leadership and Accountability module."
    },
    {
      "category": "Risk Assessment & Treatment",
      "section": "Calculation",
      "type": "single_select",
      "exhibit_ref": "risk_matrix",
      "text": "Using the significance model (Score = Impact x Likelihood; 1-6 Acceptable, 7-14 Monitor, 15-25 Unacceptable), a risk has an Impact of 5 (Very Big) and a Likelihood of 3 (Possible). What is the score, and its classification?",
      "options": [
        { "text": "Score 15, and it is an Unacceptable Risk", "correct": true },
        { "text": "Score 15, and it is a Monitor level risk, since it is close to the edge", "correct": false },
        { "text": "Score 20, and it is an Unacceptable Risk, found by multiplying 5 by 4 instead", "correct": false },
        { "text": "Score 8, and it is a Monitor level risk, found by adding the numbers together", "correct": false }
      ],
      "rationale": "5 x 3 = 15, which meets the threshold for Unacceptable Risk (15-25). Addition is not the formula provided, and 15 does not fall into the Monitor band.",
      "lms_direction": "Review the Information Security Risk Assessment module."
    },
    {
      "category": "Risk Assessment & Treatment",
      "section": "Calculation",
      "type": "single_select",
      "exhibit_ref": "risk_matrix",
      "text": "A risk has an Impact of 2 (Small) and a Likelihood of 4 (Likely). What is the score, and which band does it fall into?",
      "options": [
        { "text": "Score 8, and it falls in the Unacceptable Risk band, because 'Likely' automatically triggers treatment", "correct": false },
        { "text": "Score 8, and it falls in the Acceptable Risk band, since 2 is a low impact", "correct": false },
        { "text": "Score 8, and it falls in the Monitor / Periodic Review band", "correct": true },
        { "text": "Score 6, and it falls in the Acceptable Risk band, found by adding the numbers", "correct": false }
      ],
      "rationale": "2 x 4 = 8, which sits inside the Monitor band (7-14). A high likelihood does not automatically make a risk 'Unacceptable' if the impact is exceptionally low; both variables matter.",
      "lms_direction": "Review the Information Security Risk Assessment module."
    },
    {
      "category": "Risk Assessment & Treatment",
      "section": "Standard Accuracy",
      "type": "single_select",
      "text": "Which of these best describes how ISO 27001 requires an organisation to conduct risk assessments?",
      "options": [
        { "text": "It must adopt whatever risk methodology its external auditor prefers", "correct": false },
        { "text": "It establishes its own consistent, valid risk criteria and methodology, suited to its context", "correct": true },
        { "text": "It must use the exact 5x5 matrix published in the ISO 27001 standard", "correct": false },
        { "text": "It must treat every single identified vulnerability with maximum severity", "correct": false }
      ],
      "rationale": "ISO 27001 (Clause 6.1.2) requires the organisation to define its own risk assessment methodology and criteria that produce consistent, valid, and comparable results. There is no prescribed 5x5 matrix in the standard itself.",
      "lms_direction": "Review the Information Security Risk Assessment module."
    },
    {
      "category": "Risk Assessment & Treatment",
      "section": "Risk Ownership",
      "type": "single_select",
      "text": "During risk identification, a vulnerability is found. According to Clause 6.1.2, what must be associated with this identified information security risk?",
      "options": [
        { "text": "A public press release", "correct": false },
        { "text": "A designated risk owner", "correct": true },
        { "text": "An immediate disciplinary hearing", "correct": false },
        { "text": "A detailed financial cost-benefit analysis before any further step", "correct": false }
      ],
      "rationale": "Clause 6.1.2 explicitly requires the organisation to identify the risk owners for the identified information security risks.",
      "lms_direction": "Review the Risk Identification and Ownership module."
    },
    {
      "category": "Risk Assessment & Treatment",
      "section": "Statement of Applicability",
      "type": "single_select",
      "text": "After determining necessary controls during risk treatment, what mandatory document must the organisation produce under Clause 6.1.3?",
      "options": [
        { "text": "A generic marketing brochure about security", "correct": false },
        { "text": "A Statement of Applicability (SoA) listing which Annex A controls are included or excluded", "correct": true },
        { "text": "A source code review log", "correct": false },
        { "text": "A list of all employee home addresses for physical security tracking", "correct": false }
      ],
      "rationale": "Clause 6.1.3 requires the production of a Statement of Applicability that contains the necessary controls, justification for their inclusion, whether they are implemented, and justification for excluding any Annex A controls.",
      "lms_direction": "Review the Risk Treatment and Statement of Applicability module."
    },
    {
      "category": "Information Security Requirements",
      "section": "Critique",
      "type": "single_select",
      "exhibit_ref": "legal_and_contractual_register",
      "text": "Looking at the legal and contractual register (Row 1: GDPR, owned, reviewed, evidence on file. Row 2: Client MSA, owned, reviewed, evidence on file. Row 3: Software Licensing, no owner, no review date, no evidence) — which row represents a nonconformity?",
      "options": [
        { "text": "Row 3, since it lacks an assigned owner, review date, and evidence of compliance tracking", "correct": true },
        { "text": "Row 1, since GDPR should never be reviewed quarterly", "correct": false },
        { "text": "Row 2, since client contracts are not part of an ISMS", "correct": false },
        { "text": "None, a register does not require owners", "correct": false }
      ],
      "rationale": "Row 3 is unmanaged. Identifying a requirement without assigning ownership or tracking compliance fails the intent of managing information security requirements. Client contracts (Row 2) are absolutely part of ISMS requirements.",
      "lms_direction": "Review the Legal and Contractual Requirements module."
    },
    {
      "category": "Information Security Requirements",
      "section": "Fundamentals",
      "type": "single_select",
      "text": "Which of these would correctly count as an information security requirement relevant to the ISMS (Clause 4.2c)?",
      "options": [
        { "text": "A competitor's internal firewall configuration manual", "correct": false },
        { "text": "An internal memo suggesting staff use longer passwords if they want to", "correct": false },
        { "text": "A general IT magazine article about best practices", "correct": false },
        { "text": "A binding Non-Disclosure Agreement (NDA) signed with a major partner", "correct": true }
      ],
      "rationale": "A signed NDA is a binding legal/contractual requirement related to information security. Magazine articles and informal suggestions are not formal requirements the ISMS must comply with.",
      "lms_direction": "Review the Interested Parties and Requirements module."
    },
    {
      "category": "Information Security Requirements",
      "section": "Maintenance",
      "type": "single_select",
      "text": "A new cybersecurity regulation is passed that affects how the organisation must encrypt user data. How should the ISMS respond?",
      "options": [
        { "text": "The entire ISMS must be rebuilt from scratch", "correct": false },
        { "text": "The regulation should be handled informally outside the ISMS", "correct": false },
        { "text": "Wait until the certification body issues a nonconformity before acting", "correct": false },
        { "text": "Identify it as a new requirement, assess its impact, and update policies and controls accordingly", "correct": true }
      ],
      "rationale": "The ISMS must adapt to changes in context and legal requirements. The new regulation must be tracked, assessed, and implemented through standard ISMS processes.",
      "lms_direction": "Review the Context and Legal Requirements module."
    },
    {
      "category": "Information Security Requirements",
      "section": "Evaluation",
      "type": "true_false",
      "text": "True or False: An organisation can legitimately decide to ignore a statutory data protection law if implementing the required controls would be too expensive.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "Statutory and regulatory requirements cannot be bypassed via internal risk acceptance. While cost influences *how* a control is implemented, ignoring a binding legal obligation entirely is a failure to meet ISMS requirements.",
      "lms_direction": "Review the Legal and Statutory Requirements module."
    },
    {
      "category": "Objectives & Planning",
      "section": "Clause 6.2 — Objectives",
      "type": "single_select",
      "text": "Which of these is the best-written information security objective?",
      "options": [
        { "text": "\"Try to make our servers more secure this year.\"", "correct": false },
        { "text": "\"Achieve 100% endpoint encryption across all company laptops by Q3, tracked via MDM reports.\"", "correct": true },
        { "text": "\"Ensure everyone feels confident about cybersecurity.\"", "correct": false },
        { "text": "\"Buy a new antivirus software.\"", "correct": false }
      ],
      "rationale": "Clause 6.2 requires objectives to be measurable, monitored, and updated. The endpoint encryption objective is specific, has a deadline, and states how it will be measured. 'Buy a software' is an action, not an objective.",
      "lms_direction": "Review the Information Security Objectives module."
    },
    {
      "category": "Objectives & Planning",
      "section": "Clause 6.1.1 — Risks and Opportunities",
      "type": "single_select",
      "text": "Which of the following represents an 'opportunity' for the ISMS under Clause 6.1.1?",
      "options": [
        { "text": "A critical zero-day vulnerability in the web application", "correct": false },
        { "text": "A server rack losing power", "correct": false },
        { "text": "Automating access reviews to reduce administrative errors and improve audit readiness", "correct": true },
        { "text": "An employee clicking on a phishing link", "correct": false }
      ],
      "rationale": "Clause 6.1.1 addresses both risks and opportunities. Automating access reviews is an opportunity that enhances the ISMS effectiveness and reduces human error. The others are threats/incidents.",
      "lms_direction": "Review the Risks and Opportunities module."
    },
    {
      "category": "Objectives & Planning",
      "section": "Planning Actions",
      "type": "single_select",
      "text": "An objective is set to \"Reduce phishing click rates to below 2%.\" What must the accompanying plan to achieve this include?",
      "options": [
        { "text": "A comparison against a competitor's click rate", "correct": false },
        { "text": "Just assigning it to the HR department without further detail", "correct": false },
        { "text": "What will be done, resources required, who is responsible, when it will be completed, and how results are evaluated", "correct": true },
        { "text": "A general statement that staff will be told not to click bad links", "correct": false }
      ],
      "rationale": "Clause 6.2 requires that when planning how to achieve objectives, the organisation must determine what will be done, what resources are required, who will be responsible, when it will be completed, and how the results will be evaluated.",
      "lms_direction": "Review the Information Security Objectives module."
    },
    {
      "category": "Objectives & Planning",
      "section": "Integration",
      "type": "single_select",
      "text": "How should information security objectives relate to the broader organisation?",
      "options": [
        { "text": "They must be kept entirely secret from all employees", "correct": false },
        { "text": "They should be consistent with the information security policy", "correct": true },
        { "text": "They must focus exclusively on physical security guard patrols", "correct": false },
        { "text": "They are only relevant to the IT support desk", "correct": false }
      ],
      "rationale": "Clause 6.2 explicitly mandates that information security objectives must be consistent with the information security policy.",
      "lms_direction": "Review the Information Security Objectives module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.2 — Competence",
      "type": "single_select",
      "text": "An internal audit reveals that developers configuring the cloud environment lack training on secure cloud architecture. Under Clause 7.2, what is the appropriate action?",
      "options": [
        { "text": "Take actions to acquire the necessary competence (e.g., training) and retain documented information as evidence", "correct": true },
        { "text": "Fire the developers immediately", "correct": false },
        { "text": "Wait until a data breach occurs to justify the training budget", "correct": false },
        { "text": "Assume they will learn it eventually through trial and error", "correct": false }
      ],
      "rationale": "Clause 7.2 requires the organisation to ensure persons are competent, take actions to acquire competence where applicable, and retain appropriate documented information as evidence of competence.",
      "lms_direction": "Review the Competence module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.3 — Awareness",
      "type": "single_select",
      "text": "Which of these best demonstrates that employees meet the Awareness requirements of Clause 7.3?",
      "options": [
        { "text": "Employees have signed an NDA upon hiring and never looked at it again", "correct": false },
        { "text": "Employees can recite the ISO 27001 standard word-for-word", "correct": false },
        { "text": "Employees understand the security policy, their contribution to ISMS effectiveness, and the implications of not conforming", "correct": true },
        { "text": "Employees know the exact IP address of the main firewall", "correct": false }
      ],
      "rationale": "Awareness under Clause 7.3 means persons doing work are aware of the policy, their contribution to the effectiveness of the ISMS, and the implications of not conforming with ISMS requirements.",
      "lms_direction": "Review the Awareness module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.4 — Communication",
      "type": "single_select",
      "text": "A communication plan states: 'Notify users of security updates.' It fails to mention who sends the message or when. What is missing according to Clause 7.4?",
      "options": [
        { "text": "When to communicate and who shall communicate", "correct": true },
        { "text": "The exact font and color scheme of the notification email", "correct": false },
        { "text": "The approval signature of the external auditor", "correct": false },
        { "text": "The budget allocated for the email software", "correct": false }
      ],
      "rationale": "Clause 7.4 requires the organisation to determine what, when, with whom, who shall communicate, and the processes by which communication shall be effected.",
      "lms_direction": "Review the Communication module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.5 — Documented Information",
      "type": "single_select",
      "text": "During an audit, three different departments are found to be using three different versions of the Incident Response Procedure. What ISMS process has failed?",
      "options": [
        { "text": "Control of documented information (version control and distribution)", "correct": true },
        { "text": "Physical security perimeters", "correct": false },
        { "text": "Cryptographic controls", "correct": false },
        { "text": "Network segregation", "correct": false }
      ],
      "rationale": "Having conflicting, outdated versions of a procedure in circulation is a failure of Documented Information control (Clause 7.5), specifically regarding distribution, access, and version control.",
      "lms_direction": "Review the Documented Information module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.5 — Documented Information",
      "type": "true_false",
      "text": "True or False: ISO 27001 requires every single daily operational email sent by the IT department to be formally version-controlled and approved by the CISO.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "Clause 7.5 applies to documented information required by the standard and determined by the organisation as necessary for ISMS effectiveness. It does not mandate formal version control for every routine communication.",
      "lms_direction": "Review the Documented Information module."
    },
    {
      "category": "Operational Control",
      "section": "Clause 8.1 — Operational Planning and Control",
      "type": "single_select",
      "text": "To implement the actions determined in risk treatment, an organisation must establish what under Clause 8.1?",
      "options": [
        { "text": "Criteria for the processes, and implement control of the processes in accordance with the criteria", "correct": true },
        { "text": "A list of suggestions that staff can choose to follow if they have time", "correct": false },
        { "text": "A completely new corporate entity to handle security", "correct": false },
        { "text": "Verbal guidelines passed down only through word of mouth", "correct": false }
      ],
      "rationale": "Clause 8.1 states the organisation shall plan, implement and control processes by establishing criteria for the processes and implementing control in accordance with the criteria.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Operational Control",
      "section": "Clause 8.1 — Change Management",
      "type": "single_select",
      "text": "An organisation plans to migrate its core database to a new cloud provider. Under Clause 8.1, what must they do regarding this change?",
      "options": [
        { "text": "Execute the migration immediately and see what breaks", "correct": false },
        { "text": "Control planned changes and review the consequences of unintended changes, taking action to mitigate adverse effects", "correct": true },
        { "text": "Inform the certification body before moving any data", "correct": false },
        { "text": "Skip security reviews because cloud providers are inherently secure", "correct": false }
      ],
      "rationale": "Clause 8.1 mandates that the organisation shall control planned changes and review the consequences of unintended changes, taking action to mitigate any adverse effects.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Operational Control",
      "section": "Clause 8.2 — Risk Assessment",
      "type": "single_select",
      "text": "When must an organisation perform information security risk assessments according to Clause 8.2?",
      "options": [
        { "text": "Only once during the initial ISMS setup", "correct": false },
        { "text": "At planned intervals or when significant changes are proposed or occur", "correct": true },
        { "text": "Only when the external auditor is on site", "correct": false },
        { "text": "Whenever a junior employee feels like it", "correct": false }
      ],
      "rationale": "Clause 8.2 specifies that the organisation shall perform risk assessments at planned intervals or when significant changes are proposed or occur, taking into account the criteria established.",
      "lms_direction": "Review the Information Security Risk Assessment module."
    },
    {
      "category": "Operational Control",
      "section": "Clause 8.3 — Risk Treatment",
      "type": "single_select",
      "text": "An organisation executes its risk treatment plan but decides to leave some high risks untreated without management approval. Does this satisfy Clause 8.3?",
      "options": [
        { "text": "Yes, treating risks is optional", "correct": false },
        { "text": "Yes, if the IT department agrees it is too hard to fix", "correct": false },
        { "text": "No, the organisation must implement the risk treatment plan and retain documented information of the results", "correct": true },
        { "text": "No, because the standard requires zero residual risk", "correct": false }
      ],
      "rationale": "Clause 8.3 requires the organisation to implement the risk treatment plan. Residual risks must be approved by risk owners. Zero residual risk is impossible, but failing to execute the agreed plan is a nonconformity.",
      "lms_direction": "Review the Information Security Risk Treatment module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.1 — Monitoring",
      "type": "single_select",
      "text": "Under Clause 9.1, when determining what needs to be monitored and measured, what else must the organisation determine?",
      "options": [
        { "text": "The methods for monitoring, measurement, analysis, and evaluation to ensure valid results", "correct": true },
        { "text": "The exact cost of the monitoring software", "correct": false },
        { "text": "Which competitor to spy on", "correct": false },
        { "text": "How to bypass the monitoring if it impacts server performance", "correct": false }
      ],
      "rationale": "Clause 9.1 requires determining what needs to be monitored/measured, the methods for monitoring/measurement/analysis/evaluation to ensure valid results, when monitoring shall be performed, and when results shall be analyzed.",
      "lms_direction": "Review the Monitoring, Measurement, Analysis and Evaluation module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.2 — Internal Audit",
      "type": "single_select",
      "text": "An Implementer is building the internal audit programme. According to Clause 9.2, what must the audit programme take into consideration?",
      "options": [
        { "text": "Only the availability of the external auditor", "correct": false },
        { "text": "The importance of the processes concerned and the results of previous audits", "correct": true },
        { "text": "A flat schedule where every department gets audited on exactly the same day every year", "correct": false },
        { "text": "Ensuring auditors always audit their own work to save time", "correct": false }
      ],
      "rationale": "Clause 9.2 requires the audit programme to take into consideration the importance of the processes concerned and the results of previous audits. Auditors must also be objective (cannot audit their own work).",
      "lms_direction": "Review the Internal Audit module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.2 — Objectivity",
      "type": "true_false",
      "text": "True or False: Under Clause 9.2, the IT Manager can internally audit the firewall configurations they personally implemented yesterday, provided they promise to be honest.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "Clause 9.2 mandates selecting auditors and conducting audits that ensure objectivity and the impartiality of the audit process. You cannot objectively audit your own work.",
      "lms_direction": "Review the Internal Audit module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.3 — Management Review",
      "type": "single_select",
      "text": "Ahead of a management review, the Implementer prepares an agenda. Which of the following is a mandatory input for management review under Clause 9.3?",
      "options": [
        { "text": "The company's annual holiday party budget", "correct": false },
        { "text": "Feedback from interested parties, including changes in needs and expectations", "correct": true },
        { "text": "The personal email logs of the engineering team", "correct": false },
        { "text": "A list of office supplies needed for the next quarter", "correct": false }
      ],
      "rationale": "Clause 9.3 lists specific mandatory inputs, including changes in external/internal issues, feedback from interested parties, risk assessment results, and nonconformities. Budgets and office supplies are not ISMS management review inputs.",
      "lms_direction": "Review the Management Review module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.3 — Management Review Outputs",
      "type": "single_select",
      "text": "What must the outputs of the management review include?",
      "options": [
        { "text": "Decisions related to continual improvement opportunities and any needs for changes to the ISMS", "correct": true },
        { "text": "Just a signed attendance sheet", "correct": false },
        { "text": "A decision to terminate employees who failed phishing tests", "correct": false },
        { "text": "A formal press release", "correct": false }
      ],
      "rationale": "Clause 9.3 states the outputs of the management review shall include decisions related to continual improvement opportunities and any needs for changes to the ISMS.",
      "lms_direction": "Review the Management Review module."
    },
    {
      "category": "Improvement",
      "section": "Clause 10.1 — Continual Improvement",
      "type": "single_select",
      "text": "An ISMS manager notices that while access reviews meet current requirements, automating them would make the system more robust and efficient. They implement the automation. This is an example of:",
      "options": [
        { "text": "Corrective action (Clause 10.2)", "correct": false },
        { "text": "Continual improvement (Clause 10.1)", "correct": true },
        { "text": "Internal auditing (Clause 9.2)", "correct": false },
        { "text": "Nonconformity (Clause 10.2)", "correct": false }
      ],
      "rationale": "Continual improvement (Clause 10.1) is about enhancing the suitability, adequacy, and effectiveness of the ISMS proactively, even when a nonconformity hasn't occurred.",
      "lms_direction": "Review the Continual Improvement module."
    },
    {
      "category": "Improvement",
      "section": "Clause 10.2 — Corrective Action",
      "type": "single_select",
      "text": "A security breach occurs due to an unpatched server. What is the correct sequence of steps under Clause 10.2?",
      "options": [
        { "text": "React to control the breach, evaluate the need to eliminate the root cause (unpatched systems), implement action, and review effectiveness", "correct": true },
        { "text": "Log the breach, fire the server admin, and close the ticket", "correct": false },
        { "text": "Wait for the next management review to decide if patching is necessary", "correct": false },
        { "text": "Hide the breach from management to avoid panic", "correct": false }
      ],
      "rationale": "Clause 10.2 dictates reacting to the nonconformity, evaluating the root cause to ensure it does not recur, implementing action, and reviewing effectiveness.",
      "lms_direction": "Review the Nonconformity and Corrective Action module."
    },
    {
      "category": "Improvement",
      "section": "Clause 10.2 — Classification",
      "type": "single_select",
      "text": "During an audit, it is discovered that one employee out of 500 missed their annual security awareness training by two days. How should this most likely be classed?",
      "options": [
        { "text": "A major nonconformity, because training is critical", "correct": false },
        { "text": "Grounds for certification withdrawal", "correct": false },
        { "text": "Not a nonconformity, because it was only two days", "correct": false },
        { "text": "A minor nonconformity, as it is an isolated lapse and not a systemic breakdown of the training program", "correct": true }
      ],
      "rationale": "A single isolated lapse in a process that is otherwise functioning effectively is a minor nonconformity. It is a real deviation from requirements, but not a total system failure.",
      "lms_direction": "Review the Nonconformity Classification module."
    },
    {
      "category": "Case Study — Aegis HealthTech Solutions (Full Story)",
      "section": "Paragraph 1 — Clause 4.1",
      "type": "interactive_tool",
      "tool_type": "pestle_canvas",
      "text": "Review Paragraph 1. Drag the following external and internal issues into the correct PESTLE categories (Political, Economic, Social, Technological, Legal, Environmental).",
      "tool_data": {
        "items": [
          { "id": "i1", "text": "Stringent healthcare data sovereignty law on the horizon" },
          { "id": "i2", "text": "Rising cyber insurance premiums" },
          { "id": "i3", "text": "Clients asking about Aegis's security posture" },
          { "id": "i4", "text": "Migration to a hybrid-cloud environment" },
          { "id": "i5", "text": "Rise of AI-driven ransomware threats" },
          { "id": "i6", "text": "Vulnerability of physical infrastructure to severe weather events" }
        ],
        "categories": ["Political", "Economic", "Social", "Technological", "Legal", "Environmental"]
      },
      "expected_payload": {
        "Political": ["i5"],
        "Economic": ["i2"],
        "Social": ["i3"],
        "Technological": ["i4"],
        "Legal": ["i1"],
        "Environmental": ["i6"]
      },
      "rationale": "Each item traces to Paragraph 1 context: data sovereignty law (Legal), insurance premiums (Economic), client expectations (Social), cloud migration (Technological). AI threats represent Political/Technological shifts, classified here to balance the canvas. Severe weather is an Environmental context for the physical site.",
      "lms_direction": "Review the Context Analysis module."
    },
    {
      "category": "Case Study — Aegis HealthTech Solutions (Full Story)",
      "section": "Paragraph 2 — Clause 6.1.2",
      "type": "interactive_tool",
      "tool_type": "policy_editor",
      "text": "Review Paragraph 2. Click to highlight the specific vulnerability that Marcus identifies as creating the unacceptable risk.",
      "tool_data": {
        "sentences": [
          { "id": "s1", "text": "Developing new features for the electronic health records software." },
          { "id": "s2", "text": "Authenticating users via a third-party SSO provider." },
          { "id": "s3", "text": "The storage of unencrypted legacy patient data backups in standard cloud buckets." },
          { "id": "s4", "text": "Providing customer support through a web portal." }
        ]
      },
      "expected_payload": ["s3"],
      "rationale": "Paragraph 2 explicitly states that among dozens of risks, the storage of unencrypted legacy patient data backups in standard cloud buckets is the one scoring an Unacceptable Risk.",
      "lms_direction": "Review the Information Security Risk Assessment module."
    },
    {
      "category": "Case Study — Aegis HealthTech Solutions (Full Story)",
      "section": "Paragraph 2 — Clause 6.1.2",
      "type": "interactive_tool",
      "tool_type": "risk_calculator",
      "text": "Review Paragraph 2. Using the sliders below, set the Impact (Severity) and Likelihood Marcus assigns to the unencrypted backups risk, and confirm the resulting Score.",
      "tool_data": {
        "severity_scale": [1, 5],
        "likelihood_scale": [1, 5]
      },
      "expected_payload": { "severity": 5, "likelihood": 4 },
      "rationale": "Paragraph 2 states: Marcus rates the Impact of a breach as 5 (Very Big) and the Likelihood of misconfiguration as 4 (Likely) — a score of 20.",
      "lms_direction": "Review the Information Security Risk Assessment module."
    },
    {
      "category": "Case Study — Aegis HealthTech Solutions (Full Story)",
      "section": "Paragraph 4 — Clause 8.1",
      "type": "interactive_tool",
      "tool_type": "communication_matrix",
      "text": "Review Paragraph 4. Before the encryption gateway goes live, Marcus needs to ensure the sysadmins know the new monitoring procedure. Select the correct options for 'What', 'When', 'With Whom', and 'How'.",
      "tool_data": {
        "rows": ["New Operating Criteria"],
        "columns": [
          { "id": "what", "label": "What to communicate", "options": ["New log verification procedure", "Company holiday schedule", "New office dress code"] },
          { "id": "when", "label": "When to communicate", "options": ["Before the gateway goes live", "After the annual audit", "Only if there is a breach"] },
          { "id": "whom", "label": "With whom", "options": ["Both day-shift sysadmins", "All sales staff", "The CEO only"] },
          { "id": "how", "label": "How to communicate", "options": ["Hands-on training session", "A poster in the breakroom", "Word of mouth"] }
        ]
      },
      "expected_payload": {
        "New Operating Criteria": { "what": "New log verification procedure", "when": "Before the gateway goes live", "whom": "Both day-shift sysadmins", "how": "Hands-on training session" }
      },
      "rationale": "Paragraph 4 describes Marcus running a hands-on training session for the two day-shift sysadmins before the unit goes live, covering how to check the backup logs.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Case Study — Aegis HealthTech Solutions (Full Story)",
      "section": "Paragraph 4 — Clause 8.1",
      "type": "interactive_tool",
      "tool_type": "flowchart_arranger",
      "text": "Review Paragraph 4. Drag the steps below into the correct operational sequence for the new backup process.",
      "tool_data": {
        "steps": [
          { "id": "s3", "text": "Delete plaintext backup and rerun securely" },
          { "id": "s1", "text": "Database backup process runs" },
          { "id": "s4", "text": "Backup securely stored" },
          { "id": "s2", "text": "Check backup log for encryption status" }
        ]
      },
      "expected_payload": ["s1", "s2", "s3", "s4"],
      "rationale": "The process logic in Paragraph 4 dictates that after a backup runs, the log is checked. If it is unencrypted (plaintext), it is deleted and rerun securely. (The acceptable path leads to secure storage).",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Case Study — Aegis HealthTech Solutions (Full Story)",
      "section": "Paragraph 5 — Clause 9.2",
      "type": "interactive_tool",
      "tool_type": "ncr_generator",
      "text": "Review Paragraph 5. You are the internal auditor. Complete this Nonconformity Report (NCR) based on the finding from the night shift.",
      "tool_data": {
        "findings": "Night shift monitoring logs for the encryption gateway are blank for several weeks.",
        "classifications": ["Major", "Minor", "Opportunity for Improvement"],
        "clauses": ["Clause 6.1.2 - Risk Assessment", "Clause 8.1 - Operational Control", "Clause 9.1 - Monitoring", "Clause 9.3 - Management Review"]
      },
      "expected_payload": { "classification": "Minor", "clause": "Clause 8.1 - Operational Control" },
      "rationale": "The documented operating criterion established in 8.1 (checking the logs daily) is not being followed on the night shift. It is a Minor finding because it is isolated to one shift/operator missing a specific procedural control, not a complete failure of the ISMS.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Case Study — Aegis HealthTech Solutions (Full Story)",
      "section": "Paragraph 6 — Root Cause",
      "type": "interactive_tool",
      "tool_type": "root_cause_tree",
      "text": "Review Paragraph 6. Complete the 5 Whys analysis to trace the missing logs down to their systemic root cause.",
      "tool_data": {
        "levels": [
          { "id": "why1", "question": "Why were the logs blank?", "options": ["Sysadmin didn't check the dashboard", "System crashed", "Logs deleted by hackers"] },
          { "id": "why2", "question": "Why didn't the sysadmin check it?", "options": ["Assumed the gateway handled it automatically", "Too busy playing games", "Forgot his password"] },
          { "id": "why3", "question": "Why did he assume that?", "options": ["Was never trained on the verification dashboard", "Read the wrong manual", "Ignored the instructions"] },
          { "id": "why4", "question": "Why wasn't he trained?", "options": ["Joined after the initial training session", "Slept through the meeting", "Trainer quit"] },
          { "id": "why5", "question": "Why did joining late cause a gap?", "options": ["Onboarding checklist didn't trigger role-specific security training during staff turnover", "HR lost his email", "IT manager disliked him"] }
        ]
      },
      "expected_payload": {
        "why1": "Sysadmin didn't check the dashboard",
        "why2": "Assumed the gateway handled it automatically",
        "why3": "Was never trained on the verification dashboard",
        "why4": "Joined after the initial training session",
        "why5": "Onboarding checklist didn't trigger role-specific security training during staff turnover"
      },
      "rationale": "Paragraph 6 clearly traces the failure from the blank logs to the assumption, the lack of training, the late joining date, and finally the systemic gap: the onboarding checklist didn't trigger role-specific security tool training during staff turnover.",
      "lms_direction": "Review the Competence and Corrective Action module."
    },
    {
      "category": "Case Study — Aegis HealthTech Solutions (Full Story)",
      "section": "Paragraph 8 — Clause 10.1",
      "type": "single_select",
      "text": "Referring to Paragraph 8: why is the automated log-alert script logged as a continual improvement action, separate from the corrective action already closed?",
      "options": [
        { "text": "Continual improvement actions are just corrective actions involving software", "correct": false },
        { "text": "It is a proactive technical enhancement to the ISMS, not the required fix for the procedural nonconformity that occurred", "correct": true },
        { "text": "It should have been logged as a preventative action, which is mandatory in ISO 27001:2022", "correct": false },
        { "text": "Management reviews can only produce continual improvements, not corrective actions", "correct": false }
      ],
      "rationale": "The corrective action (fixing the onboarding process and training the admin) closed the root cause of the nonconformity. The automated script is a proactive enhancement (Clause 10.1) that improves system robustness beyond just fixing the gap.",
      "lms_direction": "Review the Continual Improvement module."
    }
  ]
};
