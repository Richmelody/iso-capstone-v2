export default {
  "title": "ISO/IEC 27001:2022 Implementer — Capstone Exam",
  "layout_size": 35,
  "time_limit": 45,
  "exhibits": {
    "risk_matrix": {
      "description": "A simple risk matrix used in this exam. Risk Score = Likelihood x Impact. Note: ISO/IEC 27001 does not tell organisations which risk matrix to use — Clause 6.1.2 just says every organisation must build its own way of scoring risk that fits its situation. This matrix is for this exam only.",
      "likelihood_scale": "1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain",
      "impact_scale": "1=Very Small, 2=Small, 3=Moderate, 4=Big, 5=Very Big",
      "bands": [
        { "min": 1, "max": 4, "level": "Low" },
        { "min": 5, "max": 9, "level": "Medium" },
        { "min": 10, "max": 15, "level": "High" },
        { "min": 16, "max": 25, "level": "Critical" }
      ],
      "acceptance_criteria": "A risk scoring 4 or below can be accepted with no further action. Any risk scoring above 4 needs a written treatment decision (Clause 6.1.3)."
    },
    "soa_excerpt": {
      "description": "Part of a draft Statement of Applicability (SoA) currently being reviewed.",
      "rows": [
        { "control": "A.5.19 Information security in supplier relationships", "included": "Included", "justification": "All key suppliers are checked for security before a contract is signed.", "status": "Implemented" },
        { "control": "A.6.7 Remote working", "included": "Excluded", "justification": "Company policy does not allow remote working.", "status": "N/A" },
        { "control": "A.8.24 Use of cryptography", "included": "Excluded", "justification": "", "status": "Not implemented" }
      ]
    },
    "case_study_aegis": {
      "description": "Aegis Manufacturing Ltd makes precision parts for machines. It has 220 staff across two sites. It recently started taking orders through a website that stores customer details and payment information. A new EU customer says Aegis must be ISO/IEC 27001 certified before they will sign a contract. Aegis appoints an Implementer to lead the project."
    },
    "case_study_bright_horizons": {
      "description": "Bright Horizons Care Group runs three residential care homes for elderly residents. It keeps paper and digital medical records, and staff use personal mobile phones to log care notes during shifts. A local news story about a data breach at another care provider has prompted the board to pursue ISO/IEC 27001 certification to reassure families and regulators."
    },
    "case_study_solstice": {
      "description": "Solstice Cloud Services provides project management software to small businesses, hosted entirely on a third-party cloud platform. It has 40 staff, all working remotely. A potential enterprise customer wants proof that Solstice manages supplier and cloud risk properly before signing a large contract."
    }
  },
  "questions": [
    {
      "category": "Risk Matrix Application",
      "section": "Calculation",
      "type": "single_select",
      "exhibit_ref": "risk_matrix",
      "text": "Using the risk matrix (Score = Likelihood x Impact; 1-4 Low, 5-9 Medium, 10-15 High, 16-25 Critical), a risk has a Likelihood of 4 (Likely) and an Impact of 4 (Big). What is the score, and what band does it fall in?",
      "options": [
        { "text": "Score 20, and it is Critical, found by multiplying 5 by 4 instead", "correct": false },
        { "text": "Score 16, and it is Critical", "correct": true },
        { "text": "Score 16, and it is High, because it is close to the edge of that band", "correct": false },
        { "text": "Score 8, and it is Medium, found by adding the two numbers together", "correct": false }
      ],
      "rationale": "4 x 4 = 16, which sits in the Critical band (16-25). One wrong option shows a common mistake — adding the numbers instead of multiplying them. Another uses the wrong Likelihood number entirely.",
      "lms_direction": "Review the Risk Scoring and Matrix Application module."
    },
    {
      "category": "Risk Matrix Application",
      "section": "Calculation",
      "type": "single_select",
      "exhibit_ref": "risk_matrix",
      "text": "Using the same risk matrix, a risk has a Likelihood of 2 (Unlikely) and an Impact of 5 (Very Big). What is the score, and what band does it fall in?",
      "options": [
        { "text": "Score 10, and it is Critical, because a Very Big impact should push it to the top band", "correct": false },
        { "text": "Score 10, and it is Medium, because it is close to the edge of that band", "correct": false },
        { "text": "Score 7, and it is Medium, found by adding the two numbers together", "correct": false },
        { "text": "Score 10, and it is High", "correct": true }
      ],
      "rationale": "2 x 5 = 10, which sits in the High band (10-15). A Very Big impact does not automatically push a risk into the Critical band on its own — the Likelihood number still matters too.",
      "lms_direction": "Review the Risk Scoring and Matrix Application module."
    },
    {
      "category": "Risk Matrix Application",
      "section": "Risk Criteria",
      "type": "single_select",
      "exhibit_ref": "risk_matrix",
      "text": "The organisation's rule is: only risks scoring 4 or below can be accepted with no further action. A new risk is assessed and scores 6. What should happen next?",
      "options": [
        { "text": "It must be sent straight to the outside certification body before any internal decision", "correct": false },
        { "text": "It can be accepted right away, since 6 is well below the High band, which starts at 10", "correct": false },
        { "text": "It must be treated, because it is higher than the accepted score of 4", "correct": true },
        { "text": "It can be left alone, since it was not marked as Critical on the matrix", "correct": false }
      ],
      "rationale": "It's the organisation's own acceptance rule (4 or below) that decides whether treatment is needed — not the band name. A score of 6 breaks that rule, so it needs a treatment decision under Clause 6.1.3, whichever band it happens to sit in.",
      "lms_direction": "Review the Risk Acceptance Criteria module."
    },
    {
      "category": "Risk Matrix Application",
      "section": "Standard Accuracy",
      "type": "single_select",
      "text": "Which of these best describes how ISO/IEC 27001 says an organisation should build its risk matrix and scoring bands?",
      "options": [
        { "text": "It must copy the exact risk matrix shown in the related standard ISO/IEC 27005, with no changes", "correct": false },
        { "text": "It builds its own risk criteria and matrix, suited to its own situation, as Clause 6.1.2 requires", "correct": true },
        { "text": "It must use the exact 5x5 matrix that is printed inside Annex A of the standard", "correct": false },
        { "text": "It must use whichever risk matrix its outside certification body prefers to use", "correct": false }
      ],
      "rationale": "Annex A has no risk matrix in it at all — it's a list of controls. Clause 6.1.2 says the organisation must set its own risk criteria. ISO/IEC 27005 offers helpful guidance an organisation can borrow from, but nothing forces it to copy that matrix exactly.",
      "lms_direction": "Review the Risk Assessment Methodology module."
    },
    {
      "category": "Risk Matrix Application",
      "section": "Risk Treatment",
      "type": "single_select",
      "exhibit_ref": "risk_matrix",
      "text": "A risk scores 20 on the matrix — Critical. The Implementer suggests just writing it down and moving on, without choosing a way to treat it. Is that allowed under Clause 6.1.3?",
      "options": [
        { "text": "No — a Critical risk this high should simply be handed off to an insurer", "correct": false },
        { "text": "Yes — writing it down on the risk register alone is enough on its own", "correct": false },
        { "text": "No — a treatment option must be chosen, and the SoA updated if controls change", "correct": true },
        { "text": "Yes — as long as someone looks at it again at the next planned review", "correct": false }
      ],
      "rationale": "Clause 6.1.3 requires the organisation to choose how it will treat the risk, and update the SoA if that changes which controls apply — simply writing it down isn't enough. The insurer-only option goes too far in the other direction: handing a risk to an insurer (risk transfer) is only one of several valid choices, not the only one.",
      "lms_direction": "Review the Risk Treatment Process module."
    },
    {
      "category": "SoA Critique & Construction",
      "section": "Critique",
      "type": "single_select",
      "exhibit_ref": "soa_excerpt",
      "text": "Looking at the SoA excerpt (Row 1: A.5.19, Included, with a reason given. Row 2: A.6.7, Excluded, with a reason given. Row 3: A.8.24, Excluded, with no reason given) — which row would an auditor most likely flag as a problem?",
      "options": [
        { "text": "None of the rows — all three are fine exactly as they are", "correct": false },
        { "text": "Row 1 (A.5.19), because its written reason is too long and detailed", "correct": false },
        { "text": "Row 3 (A.8.24), because it is excluded but has no reason written down at all", "correct": true },
        { "text": "Row 2 (A.6.7), because remote working is not a valid reason to exclude this control", "correct": false }
      ],
      "rationale": "Row 3 has no reason recorded — every excluded control needs one. Row 2 is actually fine: genuinely not allowing remote working is a perfectly good reason to exclude that control.",
      "lms_direction": "Review the Statement of Applicability Construction module."
    },
    {
      "category": "SoA Critique & Construction",
      "section": "Maintenance",
      "type": "single_select",
      "exhibit_ref": "soa_excerpt",
      "text": "Later, the organisation decides to let two staff members work remotely (this changes Row 2: A.6.7, currently Excluded). What should happen to the SoA?",
      "options": [
        { "text": "Delete Row 2 completely, since the old exclusion no longer applies", "correct": false },
        { "text": "Leave it as it is, since only two people out of 220 are affected", "correct": false },
        { "text": "Update the SoA to include A.6.7, look at the new risk, and choose the right controls", "correct": true },
        { "text": "Wait until the next planned certification audit before changing anything", "correct": false }
      ],
      "rationale": "The SoA needs to reflect what's actually true right now. As soon as the situation changes, the entry should be updated — marked as Included, with a fresh look at the risk and the right controls chosen — not deleted or left as it was until the next audit.",
      "lms_direction": "Review the Statement of Applicability Maintenance module."
    },
    {
      "category": "SoA Critique & Construction",
      "section": "Justification Quality",
      "type": "single_select",
      "text": "An Implementer wants to exclude A.8.9 (Configuration Management) from the SoA. Which reason below would an auditor see as strong and convincing?",
      "options": [
        { "text": "\"Our organisation is quite small, so this level of control simply isn't needed here.\"", "correct": false },
        { "text": "\"A cloud provider manages all our systems, and our contract makes this their job.\"", "correct": true },
        { "text": "\"This was excluded from the SoA last year, and no one has reviewed it since.\"", "correct": false },
        { "text": "\"This control simply doesn't apply to us, so there is nothing more to say.\"", "correct": false }
      ],
      "rationale": "A strong reason is specific and backed by evidence — this one points exactly to where the responsibility sits and how that's proven in a contract. Vague claims, small company size, and old reasons no one has checked lately are all things an auditor is trained to question.",
      "lms_direction": "Review the Statement of Applicability Justification Quality module."
    },
    {
      "category": "SoA Critique & Construction",
      "section": "Fundamentals",
      "type": "true_false",
      "text": "True or False: an organisation can leave a control out of its SoA just because it would be expensive to put in place.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "A control can only be excluded for risk-based reasons, not cost alone. Cost can reasonably affect which treatment option is chosen for a risk, but it isn't by itself a valid reason to skip a control the risk assessment says is needed.",
      "lms_direction": "Review the Statement of Applicability Justification Quality module."
    },
    {
      "category": "SoA Critique & Construction",
      "section": "Fundamentals",
      "type": "single_select",
      "text": "Which of these is NOT something a properly completed SoA entry needs to record?",
      "options": [
        { "text": "The control's reference number and name", "correct": false },
        { "text": "How much it would cost to buy or set up the control", "correct": true },
        { "text": "The reason for including or excluding it, and how far along it is", "correct": false },
        { "text": "Whether the control is included or excluded", "correct": false }
      ],
      "rationale": "An SoA entry needs the control itself, whether it's included or excluded, the reason why, and its current status — not a cost figure. Cost might matter elsewhere in planning, but it isn't a required part of the SoA.",
      "lms_direction": "Review the Statement of Applicability Construction module."
    },
    {
      "category": "Case Study — Aegis Manufacturing",
      "section": "Clause 4 — Context",
      "type": "single_select",
      "exhibit_ref": "case_study_aegis",
      "text": "CASE STUDY: Aegis Manufacturing Ltd has 220 staff, two sites, a website that stores customer details and payment information, and a new EU customer who says Aegis must be certified first. Which of these would correctly count as an external issue under Clause 4.1 for Aegis?",
      "options": [
        { "text": "The company's own decision to start selling more types of products", "correct": false },
        { "text": "How skilled the in-house IT helpdesk team currently is", "correct": false },
        { "text": "The physical layout of Aegis's second factory site", "correct": false },
        { "text": "The new EU customer's requirement that Aegis be certified before signing", "correct": true }
      ],
      "rationale": "An external issue comes from outside the organisation — a customer's demand fits that description well. The other three are all things happening inside Aegis itself (staffing, strategy, buildings).",
      "lms_direction": "Review the Context of the Organisation module."
    },
    {
      "category": "Case Study — Aegis Manufacturing",
      "section": "Clause 4 — Interested Parties",
      "type": "single_select",
      "text": "Still thinking about Aegis: which interested party's needs are most directly pushing the company to get certified?",
      "options": [
        { "text": "A local trade group that Aegis happens to be a member of", "correct": false },
        { "text": "A software company that Aegis has never worked with before", "correct": false },
        { "text": "The new EU customer, who made certification a condition of the contract", "correct": true },
        { "text": "Aegis's own internal finance department team", "correct": false }
      ],
      "rationale": "The case study says the EU customer made certification a condition of the deal — that's the interested party actually driving this project.",
      "lms_direction": "Review the Interested Parties module."
    },
    {
      "category": "Case Study — Aegis Manufacturing",
      "section": "Clause 6.1.2 — Risk Identification",
      "type": "single_select",
      "text": "During the risk assessment, the Implementer finds that Aegis's website stores payment details without encrypting them. Which information security property is most at risk here?",
      "options": [
        { "text": "Traceability", "correct": false },
        { "text": "Convenience", "correct": false },
        { "text": "Availability", "correct": false },
        { "text": "Confidentiality", "correct": true }
      ],
      "rationale": "Data that isn't encrypted is mainly a confidentiality problem — anyone who gets to it can read it straight away. Convenience isn't a security property at all, and traceability isn't the main concern in this specific situation.",
      "lms_direction": "Review the CIA Triad and Risk Identification module."
    },
    {
      "category": "Case Study — Aegis Manufacturing",
      "section": "Clause 6.1.3 — Treatment Selection",
      "type": "single_select",
      "text": "To deal with the unencrypted payment data at Aegis, which Annex A control should the Implementer choose first?",
      "options": [
        { "text": "A.8.24 Use of cryptography", "correct": true },
        { "text": "A.6.3 Information security awareness, education and training", "correct": false },
        { "text": "A.5.30 ICT readiness for business continuity", "correct": false },
        { "text": "A.7.4 Physical security monitoring", "correct": false }
      ],
      "rationale": "A.8.24 (Use of Cryptography) is the control that directly deals with encrypting stored data. The other three are all real, useful controls, but none of them fixes an unencrypted-data problem directly.",
      "lms_direction": "Review the Technological Controls module."
    },
    {
      "category": "Case Study — Aegis Manufacturing",
      "section": "SoA Construction",
      "type": "single_select",
      "text": "The Implementer decides to include the chosen control in Aegis's SoA. At minimum, what does that SoA entry need to record?",
      "options": [
        { "text": "Just a general summary of how Aegis does risk assessments company-wide", "correct": false },
        { "text": "Just the control's reference number and name", "correct": false },
        { "text": "The control, whether it's included, the reason why, and how far along it is", "correct": true },
        { "text": "The name of every single employee who will get encryption training", "correct": false }
      ],
      "rationale": "Every SoA entry needs the same four things, no matter which control it is: the control itself, its inclusion status, the reason, and how far along it is.",
      "lms_direction": "Review the Statement of Applicability Construction module."
    },
    {
      "category": "Case Study — Aegis Manufacturing",
      "section": "Clause 6.2 — Objectives",
      "type": "single_select",
      "text": "Which of these would be the best-written information security objective for Aegis?",
      "options": [
        { "text": "\"Encrypt all customer payment data on the website by the end of Q3, checked by the IT team.\"", "correct": true },
        { "text": "\"Try to make our customers happier with our service overall.\"", "correct": false },
        { "text": "\"Try to improve security across the company as much as we reasonably can this year.\"", "correct": false },
        { "text": "\"Cut the size of the IT department by 10% over the next financial year.\"", "correct": false }
      ],
      "rationale": "A good objective is specific, has a deadline, and says how it will be checked — this one has all three. The others are either too vague to measure or aren't about information security at all.",
      "lms_direction": "Review the Information Security Objectives module."
    },
    {
      "category": "Case Study — Aegis Manufacturing",
      "section": "Clause 8 — Operation",
      "type": "single_select",
      "text": "Six months later, Aegis's IT team actually switches on encryption for the website, as planned earlier. Which clause covers this step of actually doing the work?",
      "options": [
        { "text": "Clause 10 (Improvement)", "correct": false },
        { "text": "Clause 6 (Planning)", "correct": false },
        { "text": "Clause 8 (Operation)", "correct": true },
        { "text": "Clause 5 (Leadership)", "correct": false }
      ],
      "rationale": "Actually carrying out a planned control is Clause 8 (Operation) — putting the plan into action day-to-day, as opposed to the earlier planning stage (Clause 6) where the control was first chosen.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Case Study — Aegis Manufacturing",
      "section": "Clause 9/10 — Nonconformity",
      "type": "single_select",
      "text": "During Aegis's first internal audit, the auditor finds that although encryption was switched on, nobody actually tested whether it was working correctly before the website went live. What should happen next?",
      "options": [
        { "text": "Nothing — encryption is technically switched on, so it's fine", "correct": false },
        { "text": "Raise a nonconformity, and ask Aegis to fix the root cause with a corrective action", "correct": true },
        { "text": "Immediately stop Aegis's certification application, with no further review", "correct": false },
        { "text": "Push the audit back to next year and don't record anything about it", "correct": false }
      ],
      "rationale": "A control that was never tested is a real gap, even if it's technically switched on — it should be raised as a nonconformity, which then triggers a corrective action to fix the missing testing step. Ignoring it or jumping straight to suspension both go too far in opposite directions.",
      "lms_direction": "Review the Internal Audit and Corrective Action module."
    },
    {
      "category": "Control Selection",
      "section": "Judgment",
      "type": "single_select",
      "text": "An audit finds that access rights across the organisation have never once been reviewed since they were first granted, even for staff who changed roles. Which Annex A control deals most directly with this gap?",
      "options": [
        { "text": "A.5.18 Access rights — covers granting, checking, and removing access", "correct": true },
        { "text": "A.5.11 Return of assets when an employee leaves the company", "correct": false },
        { "text": "A.8.2 Privileged access rights for admin and elevated accounts only", "correct": false },
        { "text": "A.6.5 Responsibilities after termination or change of employment", "correct": false }
      ],
      "rationale": "A.5.18 explicitly covers granting, reviewing, and removing access rights — including periodic review, which is the exact gap described here. A.6.5 is about ongoing duties after someone leaves (like confidentiality), not periodic review of access. A.8.2 only covers admin-level access, and A.5.11 is about returning physical or digital items, not access rights at all.",
      "lms_direction": "Review the Access Control module."
    },
    {
      "category": "Control Selection",
      "section": "Judgment",
      "type": "single_select",
      "text": "A company wants to make sure software on its production servers can't be changed without going through a formal approval step first. Which control fits best?",
      "options": [
        { "text": "A.8.32 Change management", "correct": true },
        { "text": "A.8.9 Configuration management", "correct": false },
        { "text": "A.8.31 Separation of development, test and production environments", "correct": false },
        { "text": "A.5.37 Documented operating procedures", "correct": false }
      ],
      "rationale": "A.8.32 (Change Management) is specifically about the formal approval process for changes. The other three are all real, related controls — but they're about keeping systems configured securely, keeping environments separate, and documenting procedures, not the approval step itself.",
      "lms_direction": "Review the Technological Controls module."
    },
    {
      "category": "Control Selection",
      "section": "Attributes",
      "type": "single_select",
      "text": "A company wants a control that spots when a large, unusual amount of data is being copied off its network. What TYPE of control is this, and which control fits best?",
      "options": [
        { "text": "A preventive control; A.8.23 Web filtering", "correct": false },
        { "text": "A corrective control; A.5.29 Information security during disruption", "correct": false },
        { "text": "A preventive control; A.8.20 Networks security", "correct": false },
        { "text": "A detective control; A.8.16 Monitoring activities", "correct": true }
      ],
      "rationale": "Spotting unusual activity as it happens is a detective control, and A.8.16 (Monitoring Activities) is the control that covers this directly. The other options describe either the wrong type of control or a control that doesn't fit this situation.",
      "lms_direction": "Review the Control Type Attribute module."
    },
    {
      "category": "Control Selection",
      "section": "Theme Mapping",
      "type": "single_select",
      "text": "Which of these control-to-theme pairings is WRONG?",
      "options": [
        { "text": "A.6.3 Information security awareness, education and training — People", "correct": false },
        { "text": "A.5.7 Threat intelligence — Organisational", "correct": false },
        { "text": "A.8.11 Data masking — People", "correct": true },
        { "text": "A.7.4 Physical security monitoring — Physical", "correct": false }
      ],
      "rationale": "A.8.11 (Data Masking) is a Technological control, not a People control — the '8' at the start of its number is the giveaway. The other three pairings are all correct.",
      "lms_direction": "Review the Four Control Themes module."
    },
    {
      "category": "Control Selection",
      "section": "Judgment",
      "type": "single_select",
      "text": "A risk assessment shows staff often reuse the same password across several internal systems. Beyond any technical fix, which control deals with the human behaviour causing this?",
      "options": [
        { "text": "A.8.24 Use of cryptography for stored and sent data", "correct": false },
        { "text": "A.8.5 Secure authentication methods and login steps", "correct": false },
        { "text": "A.6.3 Information security awareness, education and training", "correct": true },
        { "text": "A.5.15 Access control policy and rules", "correct": false }
      ],
      "rationale": "The question is specifically asking about the behaviour causing the risk, not the technical fix — that's A.6.3 (Awareness, Education and Training). The other three are all real, relevant controls, but they're technical or policy controls, not ones aimed at changing behaviour.",
      "lms_direction": "Review the People Controls module."
    },
    {
      "category": "Nonconformity Classification",
      "section": "Classification",
      "type": "single_select",
      "text": "During an audit, the assessor finds one laptop that wasn't encrypted, even though policy requires it — but the other 49 laptops checked were all fine. How should this most likely be classed?",
      "options": [
        { "text": "Not a nonconformity at all, since only one device out of fifty was affected", "correct": false },
        { "text": "A critical risk that means certification must be stopped right away", "correct": false },
        { "text": "A minor nonconformity — a one-off case that doesn't point to a wider, repeated problem", "correct": true },
        { "text": "A major nonconformity — a break from written policy should be treated as major", "correct": false }
      ],
      "rationale": "One isolated slip, with almost everything else fine, is a textbook minor nonconformity — it's still a real finding (so treating it as 'not a nonconformity at all' understates it), but it doesn't show a wider, repeated problem (which would make it major) or call for stopping certification.",
      "lms_direction": "Review the Nonconformity Classification module."
    },
    {
      "category": "Nonconformity Classification",
      "section": "Classification",
      "type": "single_select",
      "text": "An auditor finds that an organisation has never run a single internal audit in the eighteen months since setting up its ISMS, even though Clause 9.2 requires it. How should this be classed?",
      "options": [
        { "text": "A minor nonconformity — internal audits aren't really needed if things seem to be going well", "correct": false },
        { "text": "Not applicable — audits done by outside auditors are the ones that count", "correct": false },
        { "text": "Just an observation, to be looked at again next year", "correct": false },
        { "text": "A major nonconformity — a required process is completely missing", "correct": true }
      ],
      "rationale": "This isn't a small slip inside a process — it's the total absence of a required process for eighteen months. That's a classic major nonconformity, since it means the ISMS can't really show it's working as it should.",
      "lms_direction": "Review the Internal Audit Requirements module."
    },
    {
      "category": "Nonconformity Classification",
      "section": "Classification",
      "type": "single_select",
      "text": "Which of these would normally be recorded as an 'observation' or 'opportunity for improvement' rather than a nonconformity?",
      "options": [
        { "text": "The SoA is kept up to date but could be laid out more clearly for readability", "correct": true },
        { "text": "The risk register hasn't been updated in over two years", "correct": false },
        { "text": "The organisation has no written information security policy at all", "correct": false },
        { "text": "There's no treatment plan for any of the organisation's high-scoring risks", "correct": false }
      ],
      "rationale": "A small styling suggestion — where the actual requirement is genuinely being met, just not presented perfectly — is exactly what an observation is for. The other three all describe genuine gaps, which count as nonconformities, not just suggestions.",
      "lms_direction": "Review the Audit Findings and Observations module."
    },
    {
      "category": "Nonconformity Classification",
      "section": "Pattern Recognition",
      "type": "single_select",
      "text": "Three separate minor nonconformities are all raised against the same requirement (control of documents) during one audit. What does this pattern most likely mean?",
      "options": [
        { "text": "The audit itself must have been done wrong, so it needs repeating", "correct": false },
        { "text": "It may need to become major, since it could point to a wider, repeated problem", "correct": true },
        { "text": "They should be downgraded to observations, since none looked serious alone", "correct": false },
        { "text": "Nothing much — minor findings do not usually add up to anything more serious", "correct": false }
      ],
      "rationale": "Several minor findings clustered around the same requirement is a well-known sign that the classification should be reconsidered as major — the pattern itself points to a deeper problem, even if each single case looked minor on its own.",
      "lms_direction": "Review the Nonconformity Classification module."
    },
    {
      "category": "Nonconformity Classification",
      "section": "Corrective Action",
      "type": "single_select",
      "text": "Once a nonconformity has been raised, what is the Implementer's correct next step under Clause 10.1?",
      "options": [
        { "text": "Just note it down in a log somewhere, with no further action needed at all", "correct": false },
        { "text": "Respond to it, work out if action is needed to fix the root cause, then check it worked", "correct": true },
        { "text": "Wait for the next planned management review before doing anything about it", "correct": false },
        { "text": "Shut down the process or product connected to the nonconformity right away", "correct": false }
      ],
      "rationale": "Clause 10.1 describes exactly this cycle: respond, work out the root cause, act to fix it, and check whether the fix actually worked. Shutting things down straight away overreacts; waiting for a review or just logging it both underreact.",
      "lms_direction": "Review the Nonconformity and Corrective Action module."
    },
    {
      "category": "Risk Matrix Application",
      "section": "Calculation",
      "type": "single_select",
      "exhibit_ref": "risk_matrix",
      "text": "A risk has a Likelihood of 3 (Possible) and an Impact of 3 (Moderate). What is the score, and which band does it fall in?",
      "options": [
        { "text": "Score 12, and it is High, found using the wrong Impact number", "correct": false },
        { "text": "Score 9, and it is Medium", "correct": true },
        { "text": "Score 6, and it is Medium, found by adding the two numbers together", "correct": false },
        { "text": "Score 9, and it is High, since it is close to the edge of that band", "correct": false }
      ],
      "rationale": "3 x 3 = 9, which sits at the top of the Medium band (5-9). The addition-based option and the wrong-number option both show common calculation slips rather than a real reading of the band boundaries.",
      "lms_direction": "Review the Risk Scoring and Matrix Application module."
    },
    {
      "category": "Risk Matrix Application",
      "section": "Risk Criteria",
      "type": "single_select",
      "exhibit_ref": "risk_matrix",
      "text": "A risk is assessed and scores exactly 4. The acceptance rule says risks scoring 4 or below can be accepted with no further action. Can this risk be accepted without a written treatment decision?",
      "options": [
        { "text": "Yes, but only once the external certification body has approved the decision", "correct": false },
        { "text": "No, because Clause 6.1.2 requires every single risk to be treated, whatever it scores", "correct": false },
        { "text": "No, because only scores strictly below 4 actually count under the rule", "correct": false },
        { "text": "Yes, because a score of 4 is included within the '4 or below' rule", "correct": true }
      ],
      "rationale": "The rule says '4 or below,' which plainly includes 4 itself — this is a boundary-reading check, not a trick question. Clause 6.1.2 requires risks to be assessed and criteria applied, not that every risk must be treated regardless of its score.",
      "lms_direction": "Review the Risk Acceptance Criteria module."
    },
    {
      "category": "SoA Critique & Construction",
      "section": "Justification Quality",
      "type": "single_select",
      "text": "An SoA entry reads: Control A.8.12 Data leakage prevention — Included — Justification: 'Recommended by our IT consultant.' — Status: Implemented. What is the main weakness in this entry?",
      "options": [
        { "text": "A control cannot be marked as Implemented until the next scheduled audit takes place", "correct": false },
        { "text": "Data Leakage Prevention is not something smaller organisations would normally include", "correct": false },
        { "text": "The justification doesn't explain the actual risk-based reason for including the control", "correct": true },
        { "text": "The control reference number does not exist anywhere in Annex A", "correct": false }
      ],
      "rationale": "Naming who recommended a control isn't the same as explaining the risk it addresses — the justification should say what customer or business data it protects and why. A.8.12 is a real control, and implementation status isn't tied to audit timing.",
      "lms_direction": "Review the Statement of Applicability Justification Quality module."
    },
    {
      "category": "SoA Critique & Construction",
      "section": "Maintenance",
      "type": "true_false",
      "text": "True or False: once a control is marked 'Included' on the SoA, it must stay marked as included forever, even if the risk it was addressing is later fully removed.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "The SoA should always reflect the organisation's current, real situation. If a risk genuinely no longer exists, the entry should be reviewed and updated to match reality, not frozen in its original state.",
      "lms_direction": "Review the Statement of Applicability Maintenance module."
    },
    {
      "category": "Case Study — Bright Horizons Care Group",
      "section": "Clause 5 — Leadership",
      "type": "single_select",
      "exhibit_ref": "case_study_bright_horizons",
      "text": "CASE STUDY: Bright Horizons Care Group runs three care homes, keeps medical records, and staff use personal phones to log care notes. A data breach at another provider has pushed the board toward certification. Who is accountable under Clause 5 for making sure the ISMS actually works?",
      "options": [
        { "text": "Whichever staff member happens to be on shift when something goes wrong", "correct": false },
        { "text": "The outside IT contractor Bright Horizons occasionally pays for helpdesk work", "correct": false },
        { "text": "The external certification body, once the audit has taken place", "correct": false },
        { "text": "Top management, even though day-to-day tasks can be handed to other staff", "correct": true }
      ],
      "rationale": "Clause 5 makes top management accountable for the ISMS's overall effectiveness — that accountability can't be handed off, even though specific tasks can be delegated to staff or contractors.",
      "lms_direction": "Review the Leadership and Top Management Accountability module."
    },
    {
      "category": "Case Study — Bright Horizons Care Group",
      "section": "Clause 6.1.2 — Risk Identification",
      "type": "single_select",
      "text": "Still thinking about Bright Horizons: care staff record confidential notes on personal mobile phones during shifts. Which risk does this most directly create?",
      "options": [
        { "text": "Personal mobile phone contracts might end up costing more than expected", "correct": false },
        { "text": "Confidential resident information may end up stored outside the organisation's control", "correct": true },
        { "text": "Staff phones might run out of battery partway through a working shift", "correct": false },
        { "text": "Staff might become distracted from resident care by using their phones", "correct": false }
      ],
      "rationale": "Storing confidential data on personal devices the organisation doesn't manage is a genuine information security risk. The other options describe real but unrelated operational concerns, not information security risks.",
      "lms_direction": "Review the Risk Identification module."
    },
    {
      "category": "Case Study — Bright Horizons Care Group",
      "section": "Clause 6.1.3 — Treatment Selection",
      "type": "single_select",
      "text": "To reduce the risk from personal phone use at Bright Horizons, which Annex A control area should the Implementer look at first?",
      "options": [
        { "text": "A.5.7 Threat intelligence", "correct": false },
        { "text": "A.8.1 User endpoint devices", "correct": true },
        { "text": "A.6.6 Confidentiality or non-disclosure agreements", "correct": false },
        { "text": "A.7.4 Physical security monitoring", "correct": false }
      ],
      "rationale": "A.8.1 (User Endpoint Devices) directly covers how information is protected on devices used to access or store organisational data, including personal devices. The other controls are real but address different problems.",
      "lms_direction": "Review the Technological Controls module."
    },
    {
      "category": "Case Study — Bright Horizons Care Group",
      "section": "Clause 7 — Support",
      "type": "single_select",
      "text": "Which clause requires Bright Horizons to make sure care staff genuinely understand why personal phones shouldn't be used for care notes, not just that a rule exists?",
      "options": [
        { "text": "Clause 7", "correct": true },
        { "text": "Clause 6", "correct": false },
        { "text": "Clause 9", "correct": false },
        { "text": "Clause 8", "correct": false }
      ],
      "rationale": "Clause 7 (Support) covers awareness and competence — genuinely understanding a rule, not just being told it exists. Clause 6 is planning, 8 is doing the work, and 9 is checking performance afterward.",
      "lms_direction": "Review the Support and Awareness module."
    },
    {
      "category": "Case Study — Bright Horizons Care Group",
      "section": "Clause 8 — Operation",
      "type": "single_select",
      "text": "Bright Horizons buys secure, work-only tablets for care staff and stops the use of personal phones for care notes. Which clause covers actually rolling this change out across the three homes?",
      "options": [
        { "text": "Clause 8", "correct": true },
        { "text": "Clause 10", "correct": false },
        { "text": "Clause 6", "correct": false },
        { "text": "Clause 5", "correct": false }
      ],
      "rationale": "Clause 8 (Operation) is where a planned change actually gets carried out day-to-day — rolling out the tablets across all three sites is squarely an operational activity.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Case Study — Bright Horizons Care Group",
      "section": "Nonconformity Application",
      "type": "single_select",
      "text": "Six months after the tablets are introduced, an internal audit finds that one of the three homes has quietly let two staff go back to personal phones because the tablets kept running out of battery. How should this be classed?",
      "options": [
        { "text": "A minor nonconformity, limited to one site so far, but the battery issue needs a corrective action", "correct": true },
        { "text": "A major nonconformity, since a deviation like this means the ISMS has broken down completely", "correct": false },
        { "text": "An observation only, since staff clearly had a practical reason for going back to phones", "correct": false },
        { "text": "Not a nonconformity, since only one of the three homes is affected", "correct": false }
      ],
      "rationale": "One site slipping back, with an identifiable root cause (battery life), is a real finding that needs fixing — but it isn't yet evidence of a total system breakdown, so major is an overreaction and 'not a nonconformity' understates it.",
      "lms_direction": "Review the Nonconformity Classification module."
    },
    {
      "category": "Case Study — Bright Horizons Care Group",
      "section": "Clause 9 — Performance Evaluation",
      "type": "single_select",
      "text": "What should Bright Horizons do to check whether the new tablet policy is genuinely working well across all three homes, rather than just assuming it is?",
      "options": [
        { "text": "Wait for the external certification audit to check whether it's working", "correct": false },
        { "text": "Rely on family members' complaints as the main way to learn about problems", "correct": false },
        { "text": "Get the board to approve the policy once, then treat it as permanently resolved", "correct": false },
        { "text": "Carry out ongoing monitoring and scheduled internal audits across all three sites", "correct": true }
      ],
      "rationale": "Clause 9 requires ongoing, planned monitoring and internal audit — not a one-off approval, complaints as an informal early-warning system, or waiting for an external audit that only happens periodically.",
      "lms_direction": "Review the Monitoring and Internal Audit module."
    },
    {
      "category": "Case Study — Solstice Cloud Services",
      "section": "Clause 4 — Scope",
      "type": "single_select",
      "exhibit_ref": "case_study_solstice",
      "text": "CASE STUDY: Solstice Cloud Services runs its entire product on a third-party cloud platform, with 40 fully remote staff. Since the whole product runs on someone else's cloud, what matters most when the Implementer defines the ISMS scope under Clause 4.3?",
      "options": [
        { "text": "Clearly stating which parts of the cloud setup are Solstice's own responsibility", "correct": true },
        { "text": "Copying the scope statement word-for-word from a competitor's certificate", "correct": false },
        { "text": "Making the scope statement as broad as possible to impress the auditor", "correct": false },
        { "text": "Leaving the scope undefined until after certification has already been granted", "correct": false }
      ],
      "rationale": "In a shared cloud setup, a clear scope has to draw the line between what Solstice controls and what the cloud provider controls — a vague or copied scope leaves real gaps in accountability.",
      "lms_direction": "Review the ISMS Scope module."
    },
    {
      "category": "Case Study — Solstice Cloud Services",
      "section": "Clause 6.1.3 — Treatment Selection",
      "type": "single_select",
      "text": "Solstice wants a control that makes sure its cloud provider keeps up adequate security practices of its own. Which Annex A control area is most relevant?",
      "options": [
        { "text": "A.8.24 Use of cryptography for stored data", "correct": false },
        { "text": "A.5.23 Information security for use of cloud services", "correct": true },
        { "text": "A.7.1 Physical security perimeters around buildings", "correct": false },
        { "text": "A.6.1 Screening of new job candidates", "correct": false }
      ],
      "rationale": "A.5.23 specifically covers how an organisation manages the security of the cloud services it uses. The others are real controls but address different areas entirely.",
      "lms_direction": "Review the Organisational Controls module."
    },
    {
      "category": "Case Study — Solstice Cloud Services",
      "section": "Clause 6.1.3 — Supplier Risk",
      "type": "single_select",
      "text": "Before signing on a new sub-processor that will handle customer data, which control should Solstice apply?",
      "options": [
        { "text": "A.8.9 Configuration management of servers and network devices", "correct": false },
        { "text": "A.6.4 Disciplinary process for staff rule-breaking", "correct": false },
        { "text": "A.5.12 Classification of information by sensitivity level", "correct": false },
        { "text": "A.5.20 Addressing information security within supplier agreements", "correct": true }
      ],
      "rationale": "A.5.20 covers building security requirements directly into supplier agreements — exactly what's needed before bringing on a new sub-processor. The others are real controls, but none addresses supplier agreements specifically.",
      "lms_direction": "Review the Supplier Relationships module."
    },
    {
      "category": "Case Study — Solstice Cloud Services",
      "section": "SoA Justification Quality",
      "type": "single_select",
      "text": "Solstice includes A.5.23 in its SoA. The Implementer writes the justification as: 'Our cloud provider is a big, well-known company.' Is this a strong justification?",
      "options": [
        { "text": "No — it doesn't explain what security requirements were actually checked with the provider", "correct": true },
        { "text": "Yes — SoA justifications generally only need to name the supplier involved", "correct": false },
        { "text": "No — because Solstice should not depend on any outside cloud provider at all", "correct": false },
        { "text": "Yes — a well-known provider's size is generally proof enough of its security", "correct": false }
      ],
      "rationale": "A strong justification points to specific, checkable evidence — a contract clause, an audit report, a certification the provider holds — not just brand recognition. Solstice isn't wrong to use a cloud provider; the justification is just too vague.",
      "lms_direction": "Review the Statement of Applicability Justification Quality module."
    },
    {
      "category": "Case Study — Solstice Cloud Services",
      "section": "Clause 9 — Performance Evaluation",
      "type": "single_select",
      "text": "All 40 of Solstice's staff work remotely, with no physical office. Which of these would most directly help satisfy Clause 9's monitoring requirements?",
      "options": [
        { "text": "Assuming remote staff pose no meaningful risk since there is no office to secure", "correct": false },
        { "text": "Skipping internal audits altogether, since there's no single site to visit", "correct": false },
        { "text": "Relying only on staff to self-report any problems they happen to notice", "correct": false },
        { "text": "Setting up regular, scheduled reviews of security logs and remote access records", "correct": true }
      ],
      "rationale": "Clause 9 requires planned, ongoing monitoring — a fully remote setup still generates logs and records that can and should be reviewed regularly. A lack of a physical office doesn't remove the need for monitoring or internal audit.",
      "lms_direction": "Review the Monitoring and Internal Audit module."
    },
    {
      "category": "Case Study — Solstice Cloud Services",
      "section": "Nonconformity Application",
      "type": "single_select",
      "text": "During Solstice's first internal audit, the SoA lists 15 sub-processors as 'Included' with security agreements in place, but only 9 of those agreements can actually be produced when asked. How should this most likely be classed?",
      "options": [
        { "text": "Not a nonconformity at all, since the missing agreements were probably just misplaced somewhere", "correct": false },
        { "text": "A minor nonconformity only, since a good number of agreements were still found", "correct": false },
        { "text": "Just an observation, since paperwork issues aren't really considered part of an ISMS audit", "correct": false },
        { "text": "A major nonconformity, since it affects a large share of the agreements listed", "correct": true }
      ],
      "rationale": "Six of fifteen agreements missing is a substantial gap between what the SoA claims and what can actually be shown — that undermines confidence in the whole supplier control area, which is a major finding, not a minor one or a mere paperwork observation.",
      "lms_direction": "Review the Nonconformity Classification module."
    },
    {
      "category": "Control Selection",
      "section": "Judgment",
      "type": "single_select",
      "text": "A company finds that visitors are able to walk unescorted through server rooms during building tours. Which Annex A control deals most directly with this?",
      "options": [
        { "text": "A.7.10 Storage media", "correct": false },
        { "text": "A.7.2 Physical entry", "correct": true },
        { "text": "A.6.1 Screening", "correct": false },
        { "text": "A.7.4 Physical security monitoring", "correct": false }
      ],
      "rationale": "A.7.2 (Physical Entry) covers controlling who is allowed into secure areas in the first place — the failure here. A.7.4 is about detecting problems after the fact, and the other two address different concerns entirely.",
      "lms_direction": "Review the Physical Controls module."
    },
    {
      "category": "Control Selection",
      "section": "Judgment",
      "type": "single_select",
      "text": "A company wants to make sure sensitive test data used by developers doesn't contain any real customer information. Which control fits best?",
      "options": [
        { "text": "A.8.11 Data masking", "correct": true },
        { "text": "A.8.31 Separation of development, test and production environments", "correct": false },
        { "text": "A.5.34 Privacy and protection of personal identifiable information (PII)", "correct": false },
        { "text": "A.8.9 Configuration management", "correct": false }
      ],
      "rationale": "A.8.11 (Data Masking) is specifically about hiding or replacing real data with safe substitutes for use in testing. A.8.31 controls where testing happens, not what data is used, and the other two are real but broader controls.",
      "lms_direction": "Review the Technological Controls module."
    },
    {
      "category": "Nonconformity Classification",
      "section": "Classification",
      "type": "single_select",
      "text": "An audit finds the risk register is generally well maintained, but three risks rated Critical six months ago have no recorded treatment decision at all. How should this be classed?",
      "options": [
        { "text": "An observation only, since accepting a Critical risk is ultimately the business's own choice to make", "correct": false },
        { "text": "A major nonconformity, since unresolved risks like this suggest the treatment process isn't working", "correct": true },
        { "text": "A minor nonconformity only, since most of the rest of the risk register is otherwise fine", "correct": false },
        { "text": "Not a nonconformity, since the three risks were correctly identified in the first place", "correct": false }
      ],
      "rationale": "Identifying a risk is only half the job — leaving Critical risks with no treatment decision for six months points to a real breakdown in the treatment process required by Clause 6.1.3, not a minor slip or an accepted risk (which requires a deliberate, recorded decision, not silence).",
      "lms_direction": "Review the Risk Treatment Process module."
    }
  ]
};
