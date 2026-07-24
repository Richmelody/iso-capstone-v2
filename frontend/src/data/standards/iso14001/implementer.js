export default {
  "title": "ISO 14001:2015 Implementer — Capstone Exam",
  "layout_size": 35,
  "time_limit": 45,
  "exhibits": {
    "aspects_matrix": {
      "description": "A simple significance-scoring model used in this exam. Significance Score = Severity x Likelihood. Note: ISO 14001 does not mandate this specific model — Clause 6.1.2 just requires each organisation to define its own way of deciding which environmental aspects are significant, suited to its own context. This model is for this exam only.",
      "severity_scale": "1=Very Small, 2=Small, 3=Moderate, 4=Big, 5=Very Big",
      "likelihood_scale": "1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain",
      "bands": [
        { "min": 1, "max": 6, "level": "Not Significant" },
        { "min": 7, "max": 14, "level": "Monitor" },
        { "min": 15, "max": 25, "level": "Significant" }
      ],
      "rule": "Any aspect scoring 15 or above is treated as a significant aspect, and must be addressed by an objective, an operational control, or both."
    },
    "compliance_register": {
      "description": "Part of a draft Compliance Obligations Register currently being reviewed.",
      "rows": [
        { "obligation": "Air emissions permit (local authority)", "owner": "Site Manager", "review_date": "Reviewed quarterly, last checked this month", "evidence": "Permit copy and latest monitoring report on file" },
        { "obligation": "Corporate group commitment to cut carbon emissions 20% by 2027", "owner": "Sustainability Lead", "review_date": "Reviewed annually", "evidence": "Latest carbon report on file" },
        { "obligation": "Wastewater discharge consent (water authority)", "owner": "Not assigned", "review_date": "No review date recorded", "evidence": "No evidence on file" }
      ]
    },
    "ferrow_story": {
      "description": "A continuous eight-paragraph implementation story. Each question below refers to a specific paragraph.",
      "paragraphs": [
        "Paragraph 1: Ferrow Metal Finishing Ltd has run its single-site electroplating operation for eighteen years, finishing precision automotive parts on a site close to a protected river. Its biggest customer, Hallwell Automotive, has just made ISO 14001 certification a condition of renewing their supply contract, and other clients have started asking about Ferrow's environmental credentials too. The site has also felt the effect of rising energy prices, while a new government subsidy for solar power and stricter local wastewater regulations are both on the horizon. Ferrow recently automated part of its plating line, and its Operations Director appoints Priya, an experienced production supervisor, as the organisation's Implementer.",
        "Paragraph 2: Priya starts by mapping Ferrow's activities from raw material delivery through to final part shipment. She identifies dozens of environmental aspects, but one stands out clearly above the rest: the large volumes of spent plating solution and rinse water that must be treated and disposed of as hazardous waste. Using the significance scoring model, she rates this aspect Severity 5 (Very Big) and Likelihood 4 (Likely) — a score of 20, comfortably inside the Significant band.",
        "Paragraph 3: With the significant aspect identified, Priya sets an objective: reduce the volume of hazardous liquid waste sent for disposal by 20% within twelve months, verified through the licensed waste contractor's collection records. She builds an action plan naming the Production Manager as owner, a new waste-water recycling unit as the main resource required, and a 12-month deadline.",
        "Paragraph 4: Six months in, the recycling unit is installed. Priya writes operating criteria for the new process: solution concentration must be checked before each recycling cycle, and any batch outside the safe range must be diverted to disposal rather than recycled. Before the unit goes live, she runs a hands-on training session for the two shift operators who will run it, and documents the new control in the operational procedures.",
        "Paragraph 5: At the nine-month mark, an internal audit is carried out. The auditor reviews the recycling unit's logs and finds that concentration checks were recorded for the day shift, but the night shift's logs are blank for several weeks running. When asked, the night shift operator says he 'just goes by eye,' because he was never actually shown how to use the concentration testing kit.",
        "Paragraph 6: Digging further, Priya realises the training Ferrow delivered only covered the day shift team, because the night shift operator joined the company two months after the initial rollout and was never added to the training schedule. The gap wasn't the equipment or the procedure — it was an incomplete Training Needs Analysis that never accounted for staff turnover.",
        "Paragraph 7: Priya raises this as a nonconformity and puts a corrective action in place: the night shift operator receives the concentration-testing training immediately, and Ferrow adds a new step to its onboarding checklist requiring anyone touching a significant aspect to complete relevant training before starting solo shifts, not just at the next scheduled group session.",
        "Paragraph 8: At the next management review, Priya reports the finding, the corrective action taken, and proposes a related but separate improvement: proactively auditing training records against current staff rosters every quarter, rather than waiting for gaps to surface during formal internal audits. Top management approves the extra check and logs it as a continual improvement action, distinct from the corrective action already closed out."
      ]
    }
  },
  "questions": [
    {
      "category": "Context & Scope",
      "section": "Clause 4.1 — Context",
      "type": "single_select",
      "text": "An Implementer is using a PESTLE analysis (Political, Economic, Social, Technological, Legal, Environmental) to identify issues under Clause 4.1. A new local law limiting factory noise levels would be classed under which heading?",
      "options": [
        { "text": "Legal", "correct": true },
        { "text": "Social", "correct": false },
        { "text": "Technological", "correct": false },
        { "text": "Economic", "correct": false }
      ],
      "rationale": "A new law is a Legal issue under PESTLE, even though it may have knock-on Social or Economic effects — the analysis classifies it by its source, not its downstream impact.",
      "lms_direction": "Review the Context Analysis module."
    },
    {
      "category": "Context & Scope",
      "section": "Clause 4.2 — Interested Parties",
      "type": "single_select",
      "text": "A local residents' association regularly complains about factory noise, but has no legal power to fine or shut down the site. How should this be treated under Clause 4.2?",
      "options": [
        { "text": "Treated the same as a compliance obligation, since a complaint was made", "correct": false },
        { "text": "Escalated straight to the local council instead of being tracked internally", "correct": false },
        { "text": "Recorded as an interested party whose expectations should be considered, even without legal power", "correct": true },
        { "text": "Ignored, since the association has no formal legal authority over the organisation", "correct": false }
      ],
      "rationale": "Clause 4.2 requires organisations to consider the needs and expectations of relevant interested parties, not only those with legal enforcement power. Not every interested party's expectation becomes a compliance obligation — only those the organisation must or chooses to comply with.",
      "lms_direction": "Review the Interested Parties Register module."
    },
    {
      "category": "Context & Scope",
      "section": "Clause 4.3 — Scope",
      "type": "single_select",
      "text": "An organisation has two sites: a manufacturing plant and a small sales office in a different city. The sales office has no environmental aspects worth mentioning. What is the most defensible approach to the EMS scope?",
      "options": [
        { "text": "Include both sites automatically, since a bigger scope always looks more impressive to an auditor", "correct": false },
        { "text": "Include only the sales office, since it is the newer of the two sites", "correct": false },
        { "text": "Define the scope around the manufacturing plant, with a documented reason for excluding the sales office", "correct": true },
        { "text": "Leave the scope undefined until the certification body decides which sites should be included", "correct": false }
      ],
      "rationale": "The scope should be based on where the real environmental aspects and risks sit, with a clear, written justification for any exclusion — not on how impressive it looks or which site is newest. The organisation itself defines the scope, not the certification body.",
      "lms_direction": "Review the ISMS Scope module."
    },
    {
      "category": "Context & Scope",
      "section": "Clause 4.4 — EMS",
      "type": "single_select",
      "text": "Which of these best describes what Clause 4.4 requires an organisation to do?",
      "options": [
        { "text": "Establish, implement, and continually improve the EMS as a set of interacting processes", "correct": true },
        { "text": "Write a single environmental policy document once and simply file it away", "correct": false },
        { "text": "Purchase a piece of environmental management software before doing anything else at all", "correct": false },
        { "text": "Appoint just one employee to personally handle every environmental matter alone", "correct": false }
      ],
      "rationale": "Clause 4.4 is the general requirement to build and run an EMS as a set of interacting processes — the policy, a single appointed person, or software are all narrower pieces that don't capture the full requirement.",
      "lms_direction": "Review the Environmental Management System Overview module."
    },
    {
      "category": "Leadership",
      "section": "Clause 5.1 — Leadership",
      "type": "single_select",
      "text": "Who is accountable under Clause 5.1 for the EMS actually working effectively, even though daily tasks can be delegated?",
      "options": [
        { "text": "Whichever employee is assigned as Environmental Coordinator", "correct": false },
        { "text": "The environmental consultant hired to help set up the EMS", "correct": false },
        { "text": "The external certification body once the audit is complete", "correct": false },
        { "text": "Top management", "correct": true }
      ],
      "rationale": "Clause 5.1 makes top management accountable for the EMS's effectiveness — that accountability can't be delegated away, even though specific day-to-day duties can be handed to a coordinator or consultant.",
      "lms_direction": "Review the Leadership and Accountability module."
    },
    {
      "category": "Leadership",
      "section": "Clause 5.2 — Policy",
      "type": "single_select",
      "text": "An Implementer drafts a one-line environmental policy that reads only: 'We care about the environment.' What is the main problem with this draft, before it goes to top management for approval?",
      "options": [
        { "text": "It doesn't commit to pollution prevention, compliance, or continual improvement", "correct": true },
        { "text": "It does not list the name of every single supplier the organisation currently uses", "correct": false },
        { "text": "It does not mention the organisation's total revenue figures for the past year", "correct": false },
        { "text": "It is too short a single sentence to be printed neatly on official company letterhead", "correct": false }
      ],
      "rationale": "A policy needs real, specific commitments — pollution prevention, meeting compliance obligations, continual improvement — not just a vague sentiment. Length, revenue, and supplier lists are irrelevant to what Clause 5.2 actually requires.",
      "lms_direction": "Review the Environmental Policy module."
    },
    {
      "category": "Leadership",
      "section": "Clause 5.3 — Roles",
      "type": "single_select",
      "text": "At a small organisation, everyone assumes someone else is responsible for reviewing the Compliance Obligations Register each quarter, and it hasn't been checked in months. What does Clause 5.3 require to fix this?",
      "options": [
        { "text": "The register should only be reviewed whenever an external audit happens to be scheduled", "correct": false },
        { "text": "The task should go to whichever staff member happens to have the most free time that quarter", "correct": false },
        { "text": "Roles and responsibilities relevant to the EMS must be clearly assigned and communicated", "correct": true },
        { "text": "Top management must personally take over reviewing the register every quarter instead", "correct": false }
      ],
      "rationale": "Clause 5.3 requires that roles and responsibilities relevant to the EMS are assigned and communicated so nothing falls through the cracks — the fix isn't to centralise everything with top management, hand it to whoever's free, or wait for an audit, but to make ownership explicit.",
      "lms_direction": "Review the Roles and Responsibilities Matrix module."
    },
    {
      "category": "Leadership",
      "section": "Clause 5.3 — Roles",
      "type": "true_false",
      "text": "True or False: under Clause 5.1, top management must ensure that the resources needed for the EMS to function are actually made available.",
      "options": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ],
      "rationale": "Clause 5.1 explicitly requires top management to ensure the resources needed for the EMS are available — accountability isn't just about oversight, it includes making sure the EMS is actually resourced to work.",
      "lms_direction": "Review the Leadership and Accountability module."
    },
    {
      "category": "Aspects & Impacts Scoring",
      "section": "Calculation",
      "type": "single_select",
      "exhibit_ref": "aspects_matrix",
      "text": "Using the significance model (Score = Severity x Likelihood; 1-6 Not Significant, 7-14 Monitor, 15-25 Significant), an aspect has a Severity of 5 (Very Big) and a Likelihood of 3 (Possible). What is the score, and is it significant?",
      "options": [
        { "text": "Score 15, and it is Significant", "correct": true },
        { "text": "Score 15, and it only reaches the Monitor level, since it is close to the edge of that band", "correct": false },
        { "text": "Score 20, and it is Significant, found by multiplying 5 by 4 instead", "correct": false },
        { "text": "Score 8, and it is only at the Monitor level, found by adding the numbers together", "correct": false }
      ],
      "rationale": "5 x 3 = 15, which is exactly the threshold for Significant. The addition-based option and the wrong-number option both show common calculation slips, and 15 falls inside the Significant band, not Monitor.",
      "lms_direction": "Review the Aspects and Impacts Significance Scoring module."
    },
    {
      "category": "Aspects & Impacts Scoring",
      "section": "Calculation",
      "type": "single_select",
      "exhibit_ref": "aspects_matrix",
      "text": "An aspect has a Severity of 2 (Small) and a Likelihood of 4 (Likely). What is the score, and which band does it fall in?",
      "options": [
        { "text": "Score 8, and it falls in the Significant band, since Likely should push it higher on its own", "correct": false },
        { "text": "Score 8, and it falls in the Not Significant band, since it is close to the lower edge", "correct": false },
        { "text": "Score 8, and it falls in the Monitor band", "correct": true },
        { "text": "Score 6, and it falls in the Not Significant band, found by adding the numbers together", "correct": false }
      ],
      "rationale": "2 x 4 = 8, which sits inside the Monitor band (7-14). A 'Likely' rating on its own doesn't push a low-severity aspect into Significant — both numbers matter in the calculation.",
      "lms_direction": "Review the Aspects and Impacts Significance Scoring module."
    },
    {
      "category": "Aspects & Impacts Scoring",
      "section": "Standard Accuracy",
      "type": "single_select",
      "text": "Which of these best describes how ISO 14001 requires an organisation to decide which aspects are significant?",
      "options": [
        { "text": "It must adopt whatever significance model its certification body prefers to use", "correct": false },
        { "text": "It sets its own criteria and scoring method, suited to its own context, as Clause 6.1.2 requires", "correct": true },
        { "text": "It must use the exact significance model published inside the standard itself", "correct": false },
        { "text": "It must treat every single identified aspect as significant, with no scoring needed at all", "correct": false }
      ],
      "rationale": "ISO 14001 contains no fixed significance model — Clause 6.1.2 requires the organisation to set its own criteria. It also doesn't require every aspect to be treated as significant; the whole point of scoring is to separate the significant ones from the rest.",
      "lms_direction": "Review the Aspects and Impacts Significance Scoring module."
    },
    {
      "category": "Aspects & Impacts Scoring",
      "section": "Life Cycle Perspective",
      "type": "single_select",
      "text": "A company only assesses the environmental aspects of its own factory floor, and does not look at its raw material suppliers or what happens to its product after sale. What is missing from this assessment?",
      "options": [
        { "text": "A side-by-side comparison against a competitor's own published aspects register", "correct": false },
        { "text": "A life cycle perspective, covering aspects from raw material acquisition through to end-of-life", "correct": true },
        { "text": "Nothing at all — Clause 6.1.2 only ever requires looking at on-site activities", "correct": false },
        { "text": "A detailed financial cost-benefit analysis carried out for each aspect identified", "correct": false }
      ],
      "rationale": "Clause 6.1.2 requires a life cycle perspective — looking beyond the factory floor to raw material sourcing and what happens after the product is sold, not just on-site activities.",
      "lms_direction": "Review the Life Cycle Perspective module."
    },
    {
      "category": "Aspects & Impacts Scoring",
      "section": "Definitions",
      "type": "single_select",
      "text": "A company's use of a diesel generator is the 'aspect.' What would be the corresponding 'impact'?",
      "options": [
        { "text": "The purchase cost of running the generator each month", "correct": false },
        { "text": "Air emissions released as a result of running the generator", "correct": true },
        { "text": "The maintenance schedule for servicing the generator", "correct": false },
        { "text": "The name of the supplier who sold the generator to the company", "correct": false }
      ],
      "rationale": "The aspect is the point of interaction with the environment (using the generator); the impact is the resulting change to the environment (air emissions). Cost, maintenance, and supplier details aren't environmental impacts.",
      "lms_direction": "Review the Aspects and Impacts Definitions module."
    },
    {
      "category": "Compliance Obligations Register",
      "section": "Critique",
      "type": "single_select",
      "exhibit_ref": "compliance_register",
      "text": "Looking at the compliance register (Row 1: Air emissions permit, owned, reviewed, evidence on file. Row 2: Corporate carbon commitment, owned, reviewed, evidence on file. Row 3: Wastewater discharge consent, no owner, no review date, no evidence) — which row would an auditor most likely flag?",
      "options": [
        { "text": "Row 3, since it has no assigned owner, no review date, and no evidence on file", "correct": true },
        { "text": "Row 1, since air emissions permits should never be reviewed quarterly", "correct": false },
        { "text": "The register needs a fourth column for cost estimates before it can be considered complete", "correct": false },
        { "text": "Row 2, since corporate commitments are not real compliance obligations", "correct": false }
      ],
      "rationale": "Row 3 is missing an owner, a review date, and evidence — all three basics a working register needs. Row 2 is legitimate: voluntary corporate commitments genuinely count as 'other requirements' under Clause 6.1.3, not just legal obligations.",
      "lms_direction": "Review the Compliance Obligations Register module."
    },
    {
      "category": "Compliance Obligations Register",
      "section": "Fundamentals",
      "type": "single_select",
      "text": "Which of these would correctly count as a compliance obligation under Clause 6.1.3?",
      "options": [
        { "text": "A competitor's published sustainability report", "correct": false },
        { "text": "An internal memo suggesting the office recycle more paper", "correct": false },
        { "text": "A general industry news article about environmental best practice", "correct": false },
        { "text": "A legally required discharge permit issued by the local water authority", "correct": true }
      ],
      "rationale": "A legally required permit is a clear compliance obligation. A news article, an informal internal suggestion, and a competitor's report are not obligations the organisation must or has chosen to comply with.",
      "lms_direction": "Review the Compliance Obligations Register module."
    },
    {
      "category": "Compliance Obligations Register",
      "section": "Maintenance",
      "type": "single_select",
      "text": "A new environmental regulation is passed that affects one of the organisation's processes. What should happen to the Compliance Obligations Register?",
      "options": [
        { "text": "The register should be completely rebuilt from scratch", "correct": false },
        { "text": "The new regulation should be handled informally, without updating the register", "correct": false },
        { "text": "Nothing, until the next scheduled certification audit takes place", "correct": false },
        { "text": "It should be updated to include the new regulation, with an owner and review date assigned", "correct": true }
      ],
      "rationale": "The register needs to reflect the organisation's current legal reality, so a new applicable regulation should be added with an owner and review date as soon as it's identified — not left until an audit, and not requiring a full rebuild.",
      "lms_direction": "Review the Compliance Obligations Register module."
    },
    {
      "category": "Compliance Obligations Register",
      "section": "Evaluation",
      "type": "true_false",
      "text": "True or False: an organisation can choose to simply ignore a compliance obligation if meeting it would be expensive.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "Compliance obligations must be met once they apply — cost alone is not a valid reason to ignore a legal or chosen obligation. Cost can inform planning and timelines, but not whether the obligation is met at all.",
      "lms_direction": "Review the Compliance Obligations Register module."
    },
    {
      "category": "Objectives, Risks & Opportunities",
      "section": "Clause 6.2 — Objectives",
      "type": "single_select",
      "text": "Which of these is the best-written environmental objective?",
      "options": [
        { "text": "\"Try to be more environmentally friendly across the whole organisation this coming year.\"", "correct": false },
        { "text": "\"Reduce water use at the site by 15% by the end of next year, measured through monthly meter readings.\"", "correct": true },
        { "text": "\"Make sure all staff feel good about the company's overall environmental efforts.\"", "correct": false },
        { "text": "\"Reduce the overall size of the maintenance team by 10% next year.\"", "correct": false }
      ],
      "rationale": "A strong objective is specific, has a deadline, and states how it will be measured — this is the only option with all three. The others are too vague to measure or aren't environmental objectives at all.",
      "lms_direction": "Review the Environmental Objectives module."
    },
    {
      "category": "Objectives, Risks & Opportunities",
      "section": "Clause 6.1.1 — Risks and Opportunities",
      "type": "single_select",
      "text": "Which of these is best described as a business-level 'risk' under Clause 6.1.1, rather than an environmental aspect under Clause 6.1.2?",
      "options": [
        { "text": "Diesel exhaust fumes released directly from the organisation's own fleet of delivery vehicles", "correct": false },
        { "text": "Wastewater discharged directly from the organisation's own on-site manufacturing process", "correct": false },
        { "text": "Packaging waste generated directly by the organisation's own product line during manufacturing", "correct": false },
        { "text": "The reputational damage the organisation could suffer if a competitor is exposed for pollution", "correct": true }
      ],
      "rationale": "Clause 6.1.1 risks and opportunities are broader business-level concerns tied to the EMS, like reputational or market risk — the other three are direct environmental aspects arising from the organisation's own activities, which belong under Clause 6.1.2.",
      "lms_direction": "Review the Risks and Opportunities Register module."
    },
    {
      "category": "Objectives, Risks & Opportunities",
      "section": "Planning Actions",
      "type": "single_select",
      "text": "An objective is set to reduce water use by 15%. What must the accompanying action plan include, at minimum?",
      "options": [
        { "text": "A comparison against whatever a competitor company happens to have achieved", "correct": false },
        { "text": "The name of a single department expected to reduce its water use, with nothing else specified", "correct": false },
        { "text": "What will be done, the resources needed, who is responsible, and the timeframe", "correct": true },
        { "text": "Just a general, undated statement that water use will be reduced at some point", "correct": false }
      ],
      "rationale": "Clause 6.2.2 requires the action plan to cover what, resources, responsibility, timeframe, and evaluation method — a vague statement, a single department name, or a competitor comparison don't meet that requirement.",
      "lms_direction": "Review the Environmental Objectives module."
    },
    {
      "category": "Objectives, Risks & Opportunities",
      "section": "Opportunities",
      "type": "single_select",
      "text": "A company realises that reducing its packaging waste could also cut its material costs and appeal to environmentally conscious customers. How should this be treated?",
      "options": [
        { "text": "As an opportunity worth acting on, since it benefits both the environment and the business", "correct": true },
        { "text": "As irrelevant to the EMS, since this is really just a marketing department matter", "correct": false },
        { "text": "As an emergency situation requiring an immediate written response plan", "correct": false },
        { "text": "As a compliance obligation, since genuine cost savings are always legally required", "correct": false }
      ],
      "rationale": "This is a genuine opportunity under Clause 6.1.1 — a change that benefits both environmental performance and the business. It isn't a legal obligation, an emergency, or purely a marketing issue; it belongs in the EMS's planning.",
      "lms_direction": "Review the Risks and Opportunities Register module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.2 — Competence",
      "type": "single_select",
      "text": "An Implementer builds a Training Needs Analysis and finds that forklift drivers handling chemical drums have never received spill-response training. What should happen next?",
      "options": [
        { "text": "Arrange the appropriate training and keep a record that it was completed", "correct": true },
        { "text": "Transfer responsibility for spill response entirely to office-based staff instead", "correct": false },
        { "text": "Wait until a spill actually happens before deciding whether training is needed", "correct": false },
        { "text": "Assume the drivers already know what to do from general experience", "correct": false }
      ],
      "rationale": "Clause 7.2 requires ensuring people have the competence needed for their role and keeping evidence of it — waiting for an incident, assuming prior knowledge, or shifting the task to unrelated staff all fail to close the actual gap.",
      "lms_direction": "Review the Competence and Training Needs Analysis module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.3 — Awareness",
      "type": "single_select",
      "text": "Which of these best satisfies Clause 7.3's requirement for awareness, beyond just training staff on their specific tasks?",
      "options": [
        { "text": "Staff have each individually read through the entire compliance obligations register in full", "correct": false },
        { "text": "Staff know the personal contact details of every individual member of top management", "correct": false },
        { "text": "Staff can recite the exact written wording of ISO 14001 Clause 7.3 word for word", "correct": false },
        { "text": "Staff understand the policy, their own contribution to the EMS, and the consequences of not following it", "correct": true }
      ],
      "rationale": "Awareness under 7.3 means understanding the policy, one's own role in the EMS, and what happens if requirements aren't followed — not memorising clause text, reading every register personally, or knowing management's contact details.",
      "lms_direction": "Review the Awareness module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.4 — Communication",
      "type": "single_select",
      "text": "An Implementer writes a Communication Plan that only says: 'We will tell staff about new environmental procedures by email.' It doesn't say when this will happen. What is the practical risk of leaving timing out?",
      "options": [
        { "text": "Staff might find out about the new procedures too late to actually follow them in time", "correct": true },
        { "text": "The email might end up using the wrong font size for the company's branding guidelines", "correct": false },
        { "text": "The IT department's email storage might unexpectedly run out of space", "correct": false },
        { "text": "The website's colour scheme might not match the email's own colour scheme", "correct": false }
      ],
      "rationale": "Clause 7.4 requires deciding when communication happens, not just what and how — without a timeframe, staff could learn about a change after it's already needed, which defeats the point of communicating it at all.",
      "lms_direction": "Review the Communication Plan module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.5 — Documented Information",
      "type": "single_select",
      "text": "Two different versions of the same environmental procedure are found being used in different parts of the organisation, one of them outdated. What does this indicate a gap in?",
      "options": [
        { "text": "Document control — versioning and distribution of documented information", "correct": true },
        { "text": "The organisation's single overarching environmental policy statement", "correct": false },
        { "text": "The written scope statement defining the wider EMS boundaries", "correct": false },
        { "text": "The organisation's emergency preparedness and response planning", "correct": false }
      ],
      "rationale": "Outdated versions circulating alongside current ones is a classic document control failure under Clause 7.5 — controlling versions and where documents are distributed. It isn't related to emergency planning, the policy itself, or the scope statement.",
      "lms_direction": "Review the Document Control module."
    },
    {
      "category": "Support Tools",
      "section": "Clause 7.5 — Documented Information",
      "type": "true_false",
      "text": "True or False: every single procedure in an organisation must be written down as a formal document under Clause 7.5.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "Clause 7.5 requires documenting information the organisation determines is necessary for the EMS's effectiveness — not literally every procedure regardless of risk or complexity.",
      "lms_direction": "Review the Document Control module."
    },
    {
      "category": "Operational Control & Emergency Preparedness",
      "section": "Clause 8.1 — Operational Control",
      "type": "single_select",
      "text": "A significant aspect has been identified around chemical storage. What should the Implementer define to bring this aspect under control?",
      "options": [
        { "text": "Operating criteria that specify exactly how the chemicals must be stored to stay within safe limits", "correct": true },
        { "text": "A general instruction simply telling staff to be careful around the stored chemicals", "correct": false },
        { "text": "A short note in the compliance register with no further operational detail added", "correct": false },
        { "text": "A rule stating only the most senior manager on site may ever touch the chemicals", "correct": false }
      ],
      "rationale": "Clause 8.1 requires establishing operating criteria for significant aspects — specific, actionable conditions, not a vague instruction, an unrealistic single-person rule, or a register entry with nothing operational attached.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Operational Control & Emergency Preparedness",
      "section": "Clause 8.1 — Change Management",
      "type": "single_select",
      "text": "An organisation plans to switch to a new chemical supplier for its manufacturing process. What does Clause 8.1 require before the change goes ahead?",
      "options": [
        { "text": "Nothing extra, since supplier changes are purely a procurement decision", "correct": false },
        { "text": "Simply informing the certification body after the change has already happened", "correct": false },
        { "text": "Reviewing the consequences of the planned change and controlling any adverse effects", "correct": true },
        { "text": "Waiting for the next scheduled internal audit before considering the change", "correct": false }
      ],
      "rationale": "Clause 8.1 requires controlling planned changes and reviewing the consequences of unintended ones — a new chemical supplier could introduce new environmental aspects that need assessing before the switch, not after.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Operational Control & Emergency Preparedness",
      "section": "Clause 8.2 — Emergency Preparedness",
      "type": "single_select",
      "text": "Which of these emergency scenarios should be identified directly from the organisation's own Aspects and Impacts Register?",
      "options": [
        { "text": "A change in currency exchange rates affecting import costs", "correct": false },
        { "text": "A competitor company announcing a new product launch", "correct": false },
        { "text": "A delay in a shipment of unrelated office supplies", "correct": false },
        { "text": "A chemical spill from a storage tank identified as a significant aspect", "correct": true }
      ],
      "rationale": "Clause 8.2 draws its emergency scenarios from the organisation's own significant aspects — a chemical spill risk tied to an identified aspect is exactly that. The other options are real business concerns but not environmental emergencies rooted in the aspects register.",
      "lms_direction": "Review the Emergency Preparedness and Response module."
    },
    {
      "category": "Operational Control & Emergency Preparedness",
      "section": "Clause 8.2 — Testing",
      "type": "single_select",
      "text": "An organisation has a written spill-response procedure but has never once tested it. What is missing under Clause 8.2?",
      "options": [
        { "text": "Periodically testing the procedure, such as through a drill or simulation", "correct": true },
        { "text": "Translation of the procedure into every language spoken by any visitor to the site", "correct": false },
        { "text": "Nothing — having a written procedure alone is sufficient under Clause 8.2", "correct": false },
        { "text": "Approval of the procedure by the local fire department before it can be used", "correct": false }
      ],
      "rationale": "Clause 8.2 expects procedures to be periodically tested where practicable, not just written and filed away. External approval and universal translation aren't requirements of the clause itself.",
      "lms_direction": "Review the Emergency Preparedness and Response module."
    },
    {
      "category": "Operational Control & Emergency Preparedness",
      "section": "Clause 8.2 — Review After Incident",
      "type": "single_select",
      "text": "After a real chemical spill occurs and the response procedure is used, what should happen next under Clause 8.2?",
      "options": [
        { "text": "Replace the entire EMS from scratch, since a real emergency took place", "correct": false },
        { "text": "Review and revise the procedure based on what actually happened during the response", "correct": true },
        { "text": "Wait for the next scheduled certification audit before reviewing what happened", "correct": false },
        { "text": "File the incident away with no further action, since the spill was successfully contained", "correct": false }
      ],
      "rationale": "Clause 8.2 expects procedures to be reviewed and revised after real incidents or tests, based on what actually occurred — successful containment doesn't mean no lessons need capturing, and this doesn't call for rebuilding the whole EMS or waiting for an audit.",
      "lms_direction": "Review the Emergency Preparedness and Response module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.1 — Monitoring",
      "type": "single_select",
      "text": "Which of these should primarily drive what an organisation chooses to monitor and measure under Clause 9.1?",
      "options": [
        { "text": "Its significant aspects, compliance obligations, and environmental objectives", "correct": true },
        { "text": "Whatever a competitor organisation happens to measure in its own reports", "correct": false },
        { "text": "Whatever is cheapest and easiest to measure, regardless of relevance", "correct": false },
        { "text": "Whatever a single employee personally finds most interesting to track", "correct": false }
      ],
      "rationale": "Clause 9.1 monitoring should be driven by what actually matters to the EMS — significant aspects, obligations, and objectives — not cost, competitor mimicry, or individual preference.",
      "lms_direction": "Review the Monitoring and Measurement module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.1.2 — Compliance Evaluation",
      "type": "single_select",
      "text": "How often should an organisation evaluate whether it is meeting its compliance obligations, under Clause 9.1.2?",
      "options": [
        { "text": "A check carried out whenever a customer happens to specifically request proof of compliance", "correct": false },
        { "text": "A check carried out during the scheduled external certification audit itself, once a year", "correct": false },
        { "text": "On a planned frequency the organisation itself determines, with records kept as evidence", "correct": true },
        { "text": "A single check carried out right at the very start of first setting up the whole EMS", "correct": false }
      ],
      "rationale": "Clause 9.1.2 requires a planned evaluation frequency, decided by the organisation, with evidence kept — not a one-off check, a reactive check only when asked, or reliance on the external audit as the sole checkpoint.",
      "lms_direction": "Review the Compliance Evaluation module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.2 — Internal Audit",
      "type": "single_select",
      "text": "An Implementer is building the internal audit programme. Which of these is the most defensible way to decide how often each area gets audited?",
      "options": [
        { "text": "Base audit frequency on the importance of the process and its past performance", "correct": true },
        { "text": "Audit every single area exactly once a year, regardless of risk or history", "correct": false },
        { "text": "Let each department decide for itself whether it wants to be audited", "correct": false },
        { "text": "Audit just the areas that have had no problems before, and skip the rest entirely", "correct": false }
      ],
      "rationale": "Clause 9.2 expects the audit programme to reflect the importance of processes and results of previous audits — a flat annual schedule, auditing only trouble-free areas, or letting departments opt out all miss that risk-based logic.",
      "lms_direction": "Review the Internal Audit Programme module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.3 — Management Review",
      "type": "single_select",
      "text": "Ahead of a management review meeting, the Implementer only prepares a summary of this year's compliance evaluation results, with nothing else. What is the risk of walking in with only this?",
      "options": [
        { "text": "The meeting itself might simply end up running a few minutes over its scheduled time", "correct": false },
        { "text": "The compliance results might need reprinting in colour rather than plain black and white", "correct": false },
        { "text": "Top management might ask a few unrelated questions about next year's marketing budget", "correct": false },
        { "text": "Top management won't see other key inputs needed to make a well-informed decision", "correct": true }
      ],
      "rationale": "Clause 9.3 expects several inputs together — status of past actions, changes in context, compliance status, audit results, and more — so management can make an informed decision. One input alone gives an incomplete picture, regardless of how good that one input is.",
      "lms_direction": "Review the Management Review module."
    },
    {
      "category": "Performance Evaluation",
      "section": "Clause 9.3 — Management Review Outputs",
      "type": "single_select",
      "text": "A management review meeting takes place, but produces no decisions, no resourcing changes, and no follow-up actions. What is the problem here?",
      "options": [
        { "text": "The review should have been delegated entirely to a single junior staff member", "correct": false },
        { "text": "Nothing — holding the meeting on schedule is all that Clause 9.3 requires", "correct": false },
        { "text": "The review should have been cancelled instead of being held at all", "correct": false },
        { "text": "The review has not met Clause 9.3's requirement to produce real outputs and decisions", "correct": true }
      ],
      "rationale": "Clause 9.3 expects management review to produce genuine outputs — decisions on improvement, resource needs, and any necessary changes — not just a meeting that happens on schedule with nothing coming out of it.",
      "lms_direction": "Review the Management Review module."
    },
    {
      "category": "Improvement",
      "section": "Clause 10.2 — Corrective Action",
      "type": "single_select",
      "text": "A wastewater discharge exceeds its permitted limit one time. What is the correct sequence of steps under Clause 10.2?",
      "options": [
        { "text": "Wait for the next scheduled management review before taking any action at all", "correct": false },
        { "text": "Shut down the entire manufacturing process permanently, with no further investigation", "correct": false },
        { "text": "Record the exceedance in a log, with no further action required", "correct": false },
        { "text": "React to control the discharge, investigate the root cause, act on it, and check the fix worked", "correct": true }
      ],
      "rationale": "Clause 10.2 describes exactly this cycle — react, find the root cause, act on it, and review whether the fix actually worked. Permanent shutdown overreacts; waiting for a review or just logging it both underreact.",
      "lms_direction": "Review the Nonconformity and Corrective Action module."
    },
    {
      "category": "Improvement",
      "section": "Clause 10.2 — Classification",
      "type": "single_select",
      "text": "An audit finds that a single monitoring reading was missed one month, though the rest of the year's readings were all taken on schedule. How should this most likely be classed?",
      "options": [
        { "text": "Not a nonconformity at all, since only one month out of twelve was affected", "correct": false },
        { "text": "A minor nonconformity, since it is an isolated gap rather than a wider, repeated problem", "correct": true },
        { "text": "A major nonconformity, since a missed reading means the whole monitoring process has failed", "correct": false },
        { "text": "Grounds for immediately suspending the organisation's certification", "correct": false }
      ],
      "rationale": "One missed reading, with the rest of the year on schedule, is a textbook minor nonconformity — it's a real gap, but it doesn't show a wider, repeated failure, and it doesn't call for suspension.",
      "lms_direction": "Review the Nonconformity Classification module."
    },
    {
      "category": "Improvement",
      "section": "Clause 10.1 — Continual Improvement",
      "type": "single_select",
      "text": "An Implementer proposes switching to a more efficient piece of equipment that would cut energy use, even though no nonconformity or problem triggered the idea. Where does this belong?",
      "options": [
        { "text": "In the emergency preparedness plan, since it involves new equipment", "correct": false },
        { "text": "Nowhere — improvements not triggered by a problem don't need to be tracked at all", "correct": false },
        { "text": "In the nonconformity register, since all improvements must be triggered by a nonconformity", "correct": false },
        { "text": "In a continual improvement log, tracking proactive improvements separate from corrective actions", "correct": true }
      ],
      "rationale": "Clause 10.1 covers continual improvement more broadly than just fixing nonconformities — proactive ideas like this belong in a dedicated improvement log, not the nonconformity register or the emergency plan.",
      "lms_direction": "Review the Continual Improvement module."
    },
    {
      "category": "Improvement",
      "section": "Clause 10.2 — Root Cause",
      "type": "true_false",
      "text": "True or False: fixing the immediate symptom of a nonconformity is enough to satisfy Clause 10.2, without looking for its root cause.",
      "options": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ],
      "rationale": "Clause 10.2 requires investigating and addressing the actual root cause, not just the visible symptom — otherwise the same nonconformity is likely to happen again.",
      "lms_direction": "Review the Nonconformity and Corrective Action module."
    },
    {
      "category": "Case Study — Ferrow Metal Finishing (Full Story)",
      "section": "Paragraph 1 — Clause 4.1",
      "type": "interactive_tool",
      "tool_type": "pestle_canvas",
      "text": "Review Paragraph 1. Drag the following external and internal issues into the correct PESTLE categories (Political, Economic, Social, Technological, Legal, Environmental).",
      "tool_data": {
        "items": [
          { "id": "i1", "text": "Stricter local wastewater regulations on the horizon" },
          { "id": "i2", "text": "Rising energy prices affecting the site" },
          { "id": "i3", "text": "Other clients asking about Ferrow's environmental credentials" },
          { "id": "i4", "text": "Recently automated part of the plating line" },
          { "id": "i5", "text": "New government subsidy for solar power" },
          { "id": "i6", "text": "Site is close to a protected river" }
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
      "rationale": "Each item traces to a specific line in Paragraph 1: the wastewater regulations are Legal, energy prices are Economic, client environmental expectations are Social, the automated plating line is Technological, the government solar subsidy is Political, and proximity to the protected river is Environmental — classified by source, the same logic tested in Q1.",
      "lms_direction": "Review the Context Analysis module."
    },
    {
      "category": "Case Study — Ferrow Metal Finishing (Full Story)",
      "section": "Paragraph 2 — Clause 6.1.2",
      "type": "interactive_tool",
      "tool_type": "policy_editor",
      "text": "Review Paragraph 2. Click to highlight the activity that Priya identifies as Ferrow's most significant environmental aspect.",
      "tool_data": {
        "sentences": [
          { "id": "s1", "text": "Sourcing raw metal stock from regional suppliers each month." },
          { "id": "s2", "text": "Running two shifts of precision electroplating using chemical plating solutions." },
          { "id": "s3", "text": "Managing the disposal of large volumes of spent plating solution and rinse water as hazardous waste." },
          { "id": "s4", "text": "Shipping finished automotive parts to Hallwell Automotive's assembly plants." }
        ]
      },
      "expected_payload": ["s3"],
      "rationale": "Paragraph 2 is explicit: among the dozens of aspects Priya maps, the hazardous liquid waste from spent plating solution and rinse water is the one that scores well above the significance threshold — sourcing, plating itself, and shipping are all real activities, but none is the aspect the story identifies as significant.",
      "lms_direction": "Review the Aspects and Impacts Significance Scoring module."
    },
    {
      "category": "Case Study — Ferrow Metal Finishing (Full Story)",
      "section": "Paragraph 2 — Clause 6.1.2",
      "type": "interactive_tool",
      "tool_type": "risk_calculator",
      "text": "Review Paragraph 2. Using the sliders below, set the Severity and Likelihood Priya assigns to the hazardous waste aspect, and confirm the resulting Significance Score.",
      "tool_data": {
        "severity_scale": [1, 5],
        "likelihood_scale": [1, 5]
      },
      "expected_payload": { "severity": 5, "likelihood": 4 },
      "rationale": "Paragraph 2 states this directly: Priya rates the aspect Severity 5 (Very Big) and Likelihood 4 (Likely), giving a score of 20 — comfortably inside the Significant band (15-25).",
      "lms_direction": "Review the Aspects and Impacts Significance Scoring module."
    },
    {
      "category": "Case Study — Ferrow Metal Finishing (Full Story)",
      "section": "Paragraph 4 — Clause 8.1",
      "type": "interactive_tool",
      "tool_type": "communication_matrix",
      "text": "Review Paragraph 4. Before the recycling unit goes live, Priya needs to make sure both shift operators know the new concentration-check procedure. Select the correct options for 'What', 'When', 'With Whom', and 'How'.",
      "tool_data": {
        "rows": ["New Operating Criteria"],
        "columns": [
          { "id": "what", "label": "What to communicate", "options": ["New concentration-check procedure", "Company's annual financial results", "Unrelated marketing campaign"] },
          { "id": "when", "label": "When to communicate", "options": ["Before the unit goes live", "Sometime next year", "Only if an operator asks about it"] },
          { "id": "whom", "label": "With whom", "options": ["Both shift operators", "Head office marketing team", "External auditors only"] },
          { "id": "how", "label": "How to communicate", "options": ["Hands-on training session", "A single company-wide email", "No communication needed"] }
        ]
      },
      "expected_payload": {
        "New Operating Criteria": { "what": "New concentration-check procedure", "when": "Before the unit goes live", "whom": "Both shift operators", "how": "Hands-on training session" }
      },
      "rationale": "Paragraph 4 is specific: Priya runs a hands-on training session for both shift operators before the unit goes live, covering the new concentration-check procedure — this is what actually happens in the story, not a generic email or a company-wide announcement.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Case Study — Ferrow Metal Finishing (Full Story)",
      "section": "Paragraph 4 — Clause 8.1",
      "type": "interactive_tool",
      "tool_type": "flowchart_arranger",
      "text": "Review Paragraph 4. Drag the steps below into the correct operational sequence for the new recycling unit.",
      "tool_data": {
        "steps": [
          { "id": "s3", "text": "Divert to disposal if out of range" },
          { "id": "s1", "text": "Run the plating cycle" },
          { "id": "s4", "text": "Process through recycling unit" },
          { "id": "s2", "text": "Test the solution concentration" }
        ]
      },
      "expected_payload": ["s1", "s2", "s3", "s4"],
      "rationale": "Paragraph 4 describes the operating criteria in this order: a plating cycle produces used solution, concentration is checked before each recycling cycle, and anything outside the safe range is diverted to disposal rather than recycled — checking always comes before the recycle-or-dispose decision, not after.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Case Study — Ferrow Metal Finishing (Full Story)",
      "section": "Paragraph 5 — Clause 9.2",
      "type": "interactive_tool",
      "tool_type": "ncr_generator",
      "text": "Review Paragraph 5. You are the internal auditor. Complete this Nonconformity Report (NCR) based on the finding from the night shift.",
      "tool_data": {
        "findings": "Night shift concentration logs are blank for several weeks.",
        "classifications": ["Major", "Minor", "Opportunity for Improvement"],
        "clauses": ["Clause 6.1.2 - Aspects", "Clause 8.1 - Operational Control", "Clause 9.1 - Monitoring", "Clause 9.2 - Internal Audit"]
      },
      "expected_payload": { "classification": "Minor", "clause": "Clause 8.1 - Operational Control" },
      "rationale": "The documented operating criterion — checking concentration before each cycle — was established under Clause 8.1, and it's that specific control not being followed on night shift, so the finding is raised against 8.1, not against the organisation's general monitoring process (9.1) or the audit activity that discovered it (9.2). It's classed Minor at this stage: one shift, one gap, not yet shown to be a wider pattern.",
      "lms_direction": "Review the Operational Planning and Control module."
    },
    {
      "category": "Case Study — Ferrow Metal Finishing (Full Story)",
      "section": "Paragraph 6 — Root Cause",
      "type": "interactive_tool",
      "tool_type": "root_cause_tree",
      "text": "Review Paragraph 6. Complete the 5 Whys analysis to trace the missing logs down to their systemic root cause.",
      "tool_data": {
        "levels": [
          { "id": "why1", "question": "Why were the logs blank?", "options": ["Operator didn't test it", "Pen was broken", "Forms were lost"] },
          { "id": "why2", "question": "Why didn't the operator test it?", "options": ["Went by eye instead", "Too busy", "Didn't care"] },
          { "id": "why3", "question": "Why did he go by eye?", "options": ["Never trained on the test kit", "Prefers his own method", "Kit was missing"] },
          { "id": "why4", "question": "Why wasn't he trained?", "options": ["Joined after initial rollout", "Skipped the class", "Trainer was sick"] },
          { "id": "why5", "question": "Why did joining late cause a gap?", "options": ["Training Needs Analysis didn't account for staff turnover", "HR forgot to email him", "Manager was lazy"] }
        ]
      },
      "expected_payload": {
        "why1": "Operator didn't test it",
        "why2": "Went by eye instead",
        "why3": "Never trained on the test kit",
        "why4": "Joined after initial rollout",
        "why5": "Training Needs Analysis didn't account for staff turnover"
      },
      "rationale": "Paragraph 6 traces the gap step by step to its root: the operator didn't test because he went by eye, because he was never trained, because he joined after the rollout, because the Training Needs Analysis never accounted for staff turnover — the equipment and procedure were never the problem.",
      "lms_direction": "Review the Competence and Training Needs Analysis module."
    },
    {
      "category": "Case Study — Ferrow Metal Finishing (Full Story)",
      "section": "Paragraph 8 — Clause 9.3/10.1",
      "type": "single_select",
      "text": "Referring to Paragraph 8: why is the quarterly training-vs-roster check logged as a continual improvement action, separate from the corrective action already closed?",
      "options": [
        { "text": "Continual improvement actions are simply corrective actions that get repeated every quarter", "correct": false },
        { "text": "It is a proactive step to catch future gaps early, not a fix for the nonconformity that already happened", "correct": true },
        { "text": "It should have been logged as a second nonconformity instead, since a gap was found", "correct": false },
        { "text": "It doesn't really matter which log it goes in, since both logs serve exactly the same purpose", "correct": false }
      ],
      "rationale": "Clause 10.1 (continual improvement) and Clause 10.2 (corrective action) are genuinely separate: the corrective action fixed what already went wrong, while this new quarterly check is a proactive measure to catch future gaps before they become nonconformities — it isn't a repeat of the same fix, and no new nonconformity has occurred.",
      "lms_direction": "Review the Continual Improvement module."
    }
  ]
}
