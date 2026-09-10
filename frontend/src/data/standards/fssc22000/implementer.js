export default {
  "title": "FSSC 22000 Implementer",
  "layout_size": 35,
  "time_limit": 45,
  "pool_size": 68,
  "exhibits": {
    "audit_story": {
      "description": "Continuous 8-paragraph scenario. Nice Food Ltd, Abuja, Nigeria \u2014 14 months post-certification Stage 2 surveillance audit.",
      "paragraphs": [
        "Paragraph 1: It is the second week of March, fourteen months after Nice Food Ltd's initial FSSC 22000 Version 6 certification. A two-day Stage 2 surveillance audit begins at 8:00 AM. The external auditor's opening meeting agenda flags three site changes since the last visit: the RTD Mango beverage line has moved from pilot to full production, a new mango puree supplier was onboarded under commercial pressure, and NAFDAC has issued tighter Maximum Residue Limit rules for fruit-based exports. The auditor notes that the certification scope statement has not been amended to reflect any of these changes, and opens the audit trail with the site's own risk and context documentation.",
        "Paragraph 2: Reviewing the Management Review minutes from the most recent quarter, the auditor finds a well-formatted record: production yields are up, customer complaints are down 10%, and the CEO is quoted congratulating the team. Two standing agenda items are missing entirely from the minutes \u2014 there is no discussion of whether Quality Assurance has adequate staffing, and no mention of the new NAFDAC MRL requirement or the puree supplier change. Turning to the Vulnerability Assessment register, the auditor finds the mango puree supplier still carries the Likelihood x Impact score assigned at onboarding, six months ago, with no re-assessment despite a change in delivery pattern noted in the receiving logs.",
        "Paragraph 3: On the production floor, the auditor interviews a maintenance technician performing sifter and bearing checks on the flour line. Asked who else on the team is qualified to sign off on a hygienic equipment modification, the technician says, 'Just John, but he's on leave this week \u2014 we're holding off anything that needs his sign-off until he's back.' Asked whether an equipment change form was raised for a recent bearing replacement on the sifter, the technician says he was not aware such a form existed. The auditor notes the finding and moves to the blending area, where the tarpaulin barrier flagged during the initial certification audit as an interim control is still in place, now visibly patched with tape in two places.",
        "Paragraph 4: Back in the QA office, the auditor cross-references two records: the metal detector reject log for Line 2, and the Preventive Maintenance schedule for the same line's overhead sifter. The reject log shows three rejections in a single week \u2014 Monday, Tuesday, and Thursday \u2014 each closed with an identical note: 'Quarantined box. Ran test wands. Detector working fine. Resumed production.' The PM schedule shows the sifter's bearing lubrication task was due five weeks earlier and is marked incomplete, with no escalation record and no linked corrective action to the reject log.",
        "Paragraph 5: The auditor synthesizes the two threads: a piece of equipment generating repeated metal contamination signals, maintained by a program with no escalation path for missed tasks, on a line where the one person authorized to approve equipment changes is unavailable and no change-control form exists for recent work. Individually, each item could be a minor administrative gap. Together, they describe a single systemic condition \u2014 equipment changes and maintenance failures are not reliably reaching anyone with the authority or awareness to intervene before they repeat.",
        "Paragraph 6: Sitting down with the QA Manager, Amina, the auditor walks the metal detector finding back through five whys. Why did metal reach the detector? A bearing was grinding against its housing. Why was the bearing in that condition? It had not been lubricated on schedule. Why was the lubrication task not completed? It was skipped during a busy week and never flagged. Why was a skipped task not flagged? The maintenance software has no mechanism to escalate an overdue task to anyone above the technician who missed it. Why does the software have no escalation mechanism? No one at management level ever reviewed the preventive maintenance program's design against a repeat-failure scenario \u2014 the same blind spot the auditor already found missing from the Management Review minutes.",
        "Paragraph 7: When the auditor presents the finding, the Plant Manager, Mr. Chidi, proposes closing it by servicing the sifter bearing immediately and logging the three reject events as resolved. He argues the detector caught the metal every time, so 'the system worked exactly as it should.' Amina disagrees, pointing out that three trips in one week from the same cause is a pattern, not three isolated events, and that fixing the bearing without fixing the escalation gap leaves the same failure mode live on every other piece of equipment running the same maintenance software.",
        "Paragraph 8: The auditor drafts the finding for the closing meeting, scoring it against the site's own severity matrix before assigning a classification and mapping it to the relevant clauses for the written report. The finding, along with the unassessed supplier vulnerability score and the missing Management Review inputs, will be presented for root cause ownership before the audit closes, with a defined timeline for corrective action evidence ahead of the next surveillance visit."
      ]
    },
    "finding_severity_matrix": {
      "description": "Severity model: Score = Potential Harm x Likelihood of Recurrence.",
      "harm_scale": "1=Negligible, 2=Minor, 3=Moderate, 4=Serious, 5=Severe/Catastrophic",
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
      "category": "Context & Leadership (Clauses 4-5)",
      "section": "Clause 4.3",
      "type": "single_select",
      "text": "Mr. Chidi argues that if outbound 3PL transport is excluded from the FSMS scope, inbound raw material receiving should also be excluded, because 'trucks are trucks.' What is the correct test for whether an exclusion under Clause 4.3 is defensible?",
      "options": [
        {
          "text": "Whether the same type of vehicle is used for both activities",
          "correct": false
        },
        {
          "text": "Whether the organization physically controls the food safety hazard point",
          "correct": true
        },
        {
          "text": "Whether the activity happens before or after the loading dock door",
          "correct": false
        },
        {
          "text": "Whether Procurement or Logistics owns the relationship with the carrier",
          "correct": false
        }
      ],
      "rationale": "The test for a Clause 4.3 exclusion is not what vehicle is used, but who controls the food safety hazard point. Outbound transport ends at the dock after sealed product leaves; inbound receiving happens on-site, where operators physically inspect seals, temperature, and the Certificate of Analysis before offloading \u2014 that hazard point is inside the organization's control and cannot be excluded.",
      "lms_direction": "Review LMS Activity 1.1 - Clause 4.3, Determining the Scope of the FSMS."
    },
    {
      "category": "Context & Leadership (Clauses 4-5)",
      "section": "Clause 4.1, Amd 1:2024",
      "type": "true_false",
      "text": "True or False: Under the 2024 Amendment to ISO 22000, an organization is only required to consider climate change as a relevant issue if it operates in a region with documented climate volatility.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "The 2024 Amendment adds a flat requirement to Clause 4.1: the organization shall determine whether climate change is a relevant issue. This determination is mandatory for every certified site regardless of region \u2014 the organization must actively assess it, not simply skip the assessment because it assumes climate isn't relevant.",
      "lms_direction": "Review LMS Activity 1.1 - Clause 4.1, Climate Change Amendment."
    },
    {
      "category": "Context & Leadership (Clauses 4-5)",
      "section": "Clause 5.1",
      "type": "single_select",
      "text": "Mr. Chidi signed the Food Safety Policy on the wall, but overrides Amina's line-halt decision the moment a shipment deadline is at stake. Which requirement of Clause 5.1 does this violate most directly?",
      "options": [
        {
          "text": "Ensuring the food safety policy is printed and displayed",
          "correct": false
        },
        {
          "text": "Communicating the importance of conforming to FSMS requirements and backing that up when it collides with a business decision",
          "correct": true
        },
        {
          "text": "Promoting continual improvement of the FSMS",
          "correct": false
        },
        {
          "text": "Ensuring the FSMS is evaluated annually",
          "correct": false
        }
      ],
      "rationale": "'Commitment' under 5.1 isn't a signature on a poster \u2014 it's resourcing the FSMS properly and backing it up when a real decision, like a shipment deadline, collides with a safety limit. Overriding the line-halt decision is the exact failure this clause exists to prevent.",
      "lms_direction": "Review LMS Activity 1.2 - Clause 5.1, Leadership and Commitment."
    },
    {
      "category": "Context & Leadership (Clauses 4-5)",
      "section": "Clause 5.3",
      "type": "single_select",
      "text": "An external auditor interviews the Food Safety Team Leader and asks whether her line-halt authority can be overridden by the Plant Manager. She hesitates. What is the audit consequence?",
      "options": [
        {
          "text": "None, as long as the org chart lists her as Team Leader",
          "correct": false
        },
        {
          "text": "A Major Nonconformity, because 5.3 requires the authority to be explicit, documented, and understood \u2014 not negotiable in the moment",
          "correct": true
        },
        {
          "text": "An Opportunity for Improvement, to be reviewed at the next audit",
          "correct": false
        },
        {
          "text": "No finding, since the hesitation reflects normal workplace deference to management",
          "correct": false
        }
      ],
      "rationale": "A title on an org chart is not an authority. Clause 5.3 requires the Food Safety Team Leader's authority \u2014 including line-halt power in a defensible implementation \u2014 to be explicit, documented, and understood by everyone it constrains. Hesitation under direct questioning is exactly the signal auditors are trained to probe for, and it converts an assumed authority into a Major finding.",
      "lms_direction": "Review LMS Activity 1.2 - Clause 5.3, Roles, Responsibilities and Authorities."
    },
    {
      "category": "Context & Leadership (Clauses 4-5)",
      "section": "Clause 5.2",
      "type": "true_false",
      "text": "True or False: A Food Safety Policy stating 'Nice Food Ltd is committed to producing safe, high-quality food products that satisfy our customers and comply with regulations' would satisfy Clause 5.2 as long as it is signed and displayed.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "A generic policy fails external audit scrutiny immediately because it doesn't commit anyone to anything specific. Clause 5.2 requires a policy specific and auditable enough to bind a real decision \u2014 for example, a rule that no product change proceeds without a formal Management of Change review \u2014 not a mission statement.",
      "lms_direction": "Review LMS Activity 1.2 - Clause 5.2, The Food Safety Policy."
    },
    {
      "category": "Objectives, Resources & Competence (Clauses 6-7)",
      "section": "Clause 6.2",
      "type": "single_select",
      "text": "Which of the following is a defensible food safety objective under Clause 6.2?",
      "options": [
        {
          "text": "Reduce customer complaints",
          "correct": false
        },
        {
          "text": "Improve overall food safety awareness across the site",
          "correct": false
        },
        {
          "text": "Reduce allergen-related complaints by 50% within 6 months, tracked monthly by the QA Manager",
          "correct": true
        },
        {
          "text": "Maintain a strong food safety culture",
          "correct": false
        }
      ],
      "rationale": "'Reduce complaints' is not a real 6.2 objective \u2014 it fails the requirements to be measurable, monitored/verified, and communicated, all at once. A real objective names a number, an owner, a deadline, and a verification method, and it exists specifically to mitigate a risk already identified under 6.1.",
      "lms_direction": "Review LMS Activity 1.3 - Clause 6.2, Food Safety Objectives."
    },
    {
      "category": "Objectives, Resources & Competence (Clauses 6-7)",
      "section": "Clause 7.1.5",
      "type": "single_select",
      "text": "John writes an unofficial CIP procedure in his notebook for the new 2,000L tanks that technically works better than the outdated wall SOP. Before it can be trusted, Clause 7.1.5 requires what?",
      "options": [
        {
          "text": "Nothing further, since it is technically more accurate than the official SOP",
          "correct": false
        },
        {
          "text": "A specific review confirming it is suitable for the organization's actual processes and products before implementation",
          "correct": true
        },
        {
          "text": "Approval only from the equipment supplier",
          "correct": false
        },
        {
          "text": "A generic sign-off from any available manager",
          "correct": false
        }
      ],
      "rationale": "A downloaded template or informal procedure isn't automatically trustworthy just because it looks technically sound. Clause 7.1.5 demands it be specifically reviewed for suitability against the organization's actual processes and products, and implemented in an organization-specific manner, before it's absorbed into the FSMS.",
      "lms_direction": "Review LMS Activity 1.3 - Clause 7.1.5, Externally Developed Elements."
    },
    {
      "category": "Objectives, Resources & Competence (Clauses 6-7)",
      "section": "FSSC 2.5.13",
      "type": "single_select",
      "text": "Nice Food Ltd swaps its 500L tanks for 2,000L tanks, requiring a higher-concentration CIP cycle. What does FSSC 2.5.13 require before the change goes live?",
      "options": [
        {
          "text": "A new equipment manual filed with Maintenance",
          "correct": false
        },
        {
          "text": "Evaluation of the change's impact on the FSMS, including any new food safety hazards, with the hazard analysis updated accordingly",
          "correct": true
        },
        {
          "text": "A press release to customers about the equipment upgrade",
          "correct": false
        },
        {
          "text": "Approval from the equipment's original fabricator only",
          "correct": false
        }
      ],
      "rationale": "A change to product or manufacturing processes triggers FSSC 2.5.13 the moment it changes something like CIP chemistry. The clause requires evaluating the impact on the FSMS, including any new food safety hazards introduced, and updating the hazard analysis accordingly \u2014 before the change is released to the floor, not after.",
      "lms_direction": "Review LMS Activity 1.3 - FSSC 2.5.13, Product Design and Development."
    },
    {
      "category": "Objectives, Resources & Competence (Clauses 6-7)",
      "section": "Clause 7.1.2",
      "type": "true_false",
      "text": "True or False: Clause 7.1.2 is satisfied as long as at least one person on staff is competent to perform a given FSMS-critical task.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "Clause 7.1.2 asks a different question than competence alone: not 'is this person competent,' but 'if this person is out sick, on leave, or quits, does the control still exist?' A single qualified person for a food-safety-critical task is an unrecorded single point of failure, not a satisfied requirement.",
      "lms_direction": "Review LMS Activity 1.4 - Clause 7.1.2, People."
    },
    {
      "category": "Objectives, Resources & Competence (Clauses 6-7)",
      "section": "Clause 7.2",
      "type": "single_select",
      "text": "An auditor writes a Major Nonconformity against Clause 7.2 for a Maintenance Lead with 10 years of incident-free tenure and no training records. Why?",
      "options": [
        {
          "text": "Tenure is legally irrelevant to food safety",
          "correct": false
        },
        {
          "text": "'No incidents' is an absence of evidence, not documented proof of competence based on education, training, or a demonstrated experience assessment",
          "correct": true
        },
        {
          "text": "Only university-certified staff can be considered competent",
          "correct": false
        },
        {
          "text": "The employee should have been terminated after 5 years",
          "correct": false
        }
      ],
      "rationale": "Clause 7.2 requires competence to be ensured on the basis of appropriate education, training, or experience, with appropriate documented information retained as evidence. Tenure alone is not evidence \u2014 it's an absence of evidence, and the clause demands a documented record, not an inference from years of service.",
      "lms_direction": "Review LMS Activity 1.4 - Clause 7.2, Competence."
    },
    {
      "category": "Infrastructure & Equipment PRPs (TS 4-8)",
      "section": "TS Clause 5",
      "type": "single_select",
      "text": "A worker crosses from the loading bay (Zone 1) directly into the wet-processing area (Zone 3) without a boot change or handwash, using only a tarpaulin as a barrier. What does TS Clause 5 actually require at this transition?",
      "options": [
        {
          "text": "A sign reminding workers to be careful",
          "correct": false
        },
        {
          "text": "A specific, physically enforced transition control matched to the zone risk \u2014 such as a boot change, monitored handwash, or physical barrier",
          "correct": true
        },
        {
          "text": "Nothing, since both zones are inside the same building",
          "correct": false
        },
        {
          "text": "Verbal instruction from a supervisor at shift start",
          "correct": false
        }
      ],
      "rationale": "The rule that makes zoning real: every time a person or material crosses from a lower zone into a higher one, something has to physically change. A tarpaulin with no boot change or handwash means the zone boundary doesn't functionally exist, regardless of what the floor plan says.",
      "lms_direction": "Review LMS Activity 2.1 - TS Clause 5, Layout of Premises and Workspace."
    },
    {
      "category": "Infrastructure & Equipment PRPs (TS 4-8)",
      "section": "TS Clause 8.2",
      "type": "single_select",
      "text": "During commissioning, a sampling port stub on a new tank extends well past the recommended diameter rule with no cap or drainage. What hygienic design defect does this represent?",
      "options": [
        {
          "text": "An acceptable design variance since the port is rarely used",
          "correct": false
        },
        {
          "text": "An uncapped dead leg \u2014 a zone flow cannot reach and CIP cannot reliably clean",
          "correct": true
        },
        {
          "text": "A cosmetic issue only, since the tank still holds pressure",
          "correct": false
        },
        {
          "text": "A defect only if the port is made of a non-stainless material",
          "correct": false
        }
      ],
      "rationale": "TS 8.2 requires piping and fittings to be cleanable, drainable, and free of dead ends \u2014 the accepted rule of thumb is no stub or port longer than roughly 1x-2x its diameter where flow doesn't reach. An uncapped, over-length port is a textbook dead leg and a physical inspection failure, not a paperwork one.",
      "lms_direction": "Review LMS Activity 2.2 - TS Clause 8.2, Hygienic Design."
    },
    {
      "category": "Infrastructure & Equipment PRPs (TS 4-8)",
      "section": "TS Clause 8.2",
      "type": "true_false",
      "text": "True or False: A tank that passes a pressure test and holds its rated volume can be assumed to satisfy TS Clause 8.2's hygienic design requirements.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "A tank can pass a pressure test, hold the right volume, and still fail TS 8.2 completely \u2014 hygienic design is a physical inspection clause, not a paperwork one. Only a hands-on checklist (self-draining, smooth welds, no dead legs, inspection access, compatible materials) verifies it.",
      "lms_direction": "Review LMS Activity 2.2 - TS Clause 8.2, Hygienic Design."
    },
    {
      "category": "Infrastructure & Equipment PRPs (TS 4-8)",
      "section": "TS Clause 8.6",
      "type": "single_select",
      "text": "TS Clause 8.6 states that temporary fixes must not put product safety at risk. Which scenario would violate this?",
      "options": [
        {
          "text": "Scheduling a permanent bearing replacement for the next planned maintenance window while monitoring closely",
          "correct": false
        },
        {
          "text": "Running a known dead-leg defect on a product-contact surface 'carefully' while the permanent fix is scheduled weeks out",
          "correct": true
        },
        {
          "text": "Documenting a preventive maintenance interval based on wear risk",
          "correct": false
        },
        {
          "text": "Cross-training a second technician to reduce single points of failure",
          "correct": false
        }
      ],
      "rationale": "A crevice or dead leg in a product-contact surface cannot be fixed with a procedure, a schedule, or a stronger CIP cycle \u2014 it needs to be physically reworked and re-inspected. Running the equipment 'carefully' around a known hygienic-design defect isn't a control, it's a bet, which is exactly what 8.6's prohibition on unsafe temporary fixes is written to stop.",
      "lms_direction": "Review LMS Activity 2.2 - TS Clause 8.6, Preventive and Corrective Maintenance."
    },
    {
      "category": "Infrastructure & Equipment PRPs (TS 4-8)",
      "section": "TS Clause 6",
      "type": "single_select",
      "text": "Nice Food Ltd's new tanks introduce a high-volume CIP rinse water demand that the original bakery-only utility design was never sized or specified for. What does TS Clause 6 require?",
      "options": [
        {
          "text": "Nothing, as long as the water is municipally supplied",
          "correct": false
        },
        {
          "text": "A defined, monitored quality and capacity specification for any utility touching product or a product-contact surface",
          "correct": true
        },
        {
          "text": "A one-time capacity check performed only at initial facility construction",
          "correct": false
        },
        {
          "text": "Approval from the municipal water utility only",
          "correct": false
        }
      ],
      "rationale": "TS Clause 6 requires that utilities be designed to minimize contamination risk and that their quality be monitored. A utility adequate for the old process can be silently under-specified for a new one in capacity or quality \u2014 'we're already on municipal supply' is an assumption, not a validated specification.",
      "lms_direction": "Review LMS Activity 2.1 - TS Clause 6, Utilities."
    },
    {
      "category": "Hygiene & Contamination Control (TS 10-13, FSSC 2.5.11)",
      "section": "TS Clause 10.2",
      "type": "single_select",
      "text": "A worker moves from raw mango intake directly to the bottling line during a rush, without a glove change, reasoning 'it's the same juice, just further down the line.' Which control category under TS 10.2 does this violate?",
      "options": [
        {
          "text": "Air pressure differentials",
          "correct": false
        },
        {
          "text": "Traffic patterns and equipment segregation between people, materials, and tools",
          "correct": true
        },
        {
          "text": "Structural segregation between buildings",
          "correct": false
        },
        {
          "text": "Access controls limited to visitors only",
          "correct": false
        }
      ],
      "rationale": "Raw mango carries a microbial load the pasteurization step is designed to remove; touching bottling surfaces afterward reintroduces exactly what that step just eliminated. TS 10.2 requires traffic pattern and equipment segregation between people, materials, and tools \u2014 a worker crossing zones without a control is exactly the failure mode this clause exists to prevent.",
      "lms_direction": "Review LMS Activity 2.3 - TS Clause 10.2, Microbiological Cross-Contamination."
    },
    {
      "category": "Hygiene & Contamination Control (TS 10-13, FSSC 2.5.11)",
      "section": "FSSC 2.5.11",
      "type": "single_select",
      "text": "A tank weld is ground and repolished as part of a rework, generating metal filings inside the shell. What does FSSC 2.5.11 require before product touches that surface again?",
      "options": [
        {
          "text": "A visual inspection only",
          "correct": false
        },
        {
          "text": "Detection or filtering equipment (e.g., an inline metal detector) sized to the risk, positioned downstream of the risk source, with a tested reject procedure",
          "correct": true
        },
        {
          "text": "A written apology memo to the QA team",
          "correct": false
        },
        {
          "text": "Nothing further, since the CIP cycle will rinse away any debris",
          "correct": false
        }
      ],
      "rationale": "Reweld-and-CIP addresses the surface, but FSSC 2.5.11 is the equipment-based backstop that catches any stray metal filing surviving both the rework and the cleaning. Detection equipment only functions as a control if it's sized to the actual risk and backed by a tested reject/hold response.",
      "lms_direction": "Review LMS Activity 2.3 - FSSC 2.5.11, Hazard Control and Cross-Contamination."
    },
    {
      "category": "Hygiene & Contamination Control (TS 10-13, FSSC 2.5.11)",
      "section": "TS Clause 11, FSSC 2.5.11",
      "type": "true_false",
      "text": "True or False: A completed CIP cycle is sufficient evidence that a tank is clean and ready for production after a maintenance rework, without a separate verification step.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "A completed CIP cycle is a task. A passed verification check is evidence. If the equipment left the standard cleaning-and-run cycle for any reason \u2014 maintenance, a fault, an extended stop \u2014 it must re-enter production through verification (such as an ATP swab and micro swab), not through the normal schedule.",
      "lms_direction": "Review LMS Activity 2.3 - TS Clause 11, Cleaning, Sanitizing and Verification."
    },
    {
      "category": "Hygiene & Contamination Control (TS 10-13, FSSC 2.5.11)",
      "section": "TS Clause 12",
      "type": "single_select",
      "text": "A new mango pulp waste stream begins attracting fruit flies at the loading bay. The next scheduled quarterly pest contractor visit is five weeks away. What is the correct action under TS Clause 12?",
      "options": [
        {
          "text": "Wait for the scheduled quarterly visit, since the program is already documented",
          "correct": false
        },
        {
          "text": "Call the pest contractor for an unscheduled inspection now, and fix the immediate contributing cause the same day",
          "correct": true
        },
        {
          "text": "Move the waste bins to a different location without further action",
          "correct": false
        },
        {
          "text": "Log the sighting for discussion at the next Management Review",
          "correct": false
        }
      ],
      "rationale": "A pest control programme must respond to changes in the plant, not just run on a fixed calendar. A new food-source waste stream plus an active sighting is exactly the kind of change that should trigger an out-of-cycle review \u2014 treating the calendar as the control is the same mistake as trusting a completed task without verification.",
      "lms_direction": "Review LMS Activity 2.3 - TS Clause 12, Pest Control."
    },
    {
      "category": "Hygiene & Contamination Control (TS 10-13, FSSC 2.5.11)",
      "section": "TS Clause 13",
      "type": "single_select",
      "text": "Mr. Chidi proposes an SOP telling cross-trained operators to 'brush off all flour' before moving from the bakery to the wet beverage zone, instead of buying separate zone-specific smocks. Does this satisfy TS Clause 13?",
      "options": [
        {
          "text": "Yes, because it addresses the visible flour residue",
          "correct": false
        },
        {
          "text": "No, because a behavioral instruction cannot substitute for a required physical control, and brushing does not remove microscopic allergen proteins",
          "correct": true
        },
        {
          "text": "Yes, as long as it is written down and signed by the Plant Manager",
          "correct": false
        },
        {
          "text": "No, but only because it was not approved by Procurement",
          "correct": false
        }
      ],
      "rationale": "TS 13 requires protective clothing that is fit for purpose and proportional to the hazard posed. Brushing off flour does not eliminate microscopic allergen proteins, and using a bakery smock in a wet beverage zone violates cross-contamination controls regardless of what the SOP says \u2014 a behavioral request cannot replace a required physical control.",
      "lms_direction": "Review LMS Activity 2.4 - TS Clause 13, Personnel Hygiene and Facilities."
    },
    {
      "category": "Suppliers, Calibration & Verification PRPs (TS 9, ISO 7.1.6/8.7, FSSC 2.5.1/2.5.12)",
      "section": "FSSC 2.5.1",
      "type": "single_select",
      "text": "Mr. Chidi invokes an 'Emergency Procurement' override under FSSC 2.5.1 to accept a warm truck of concentrate from an unapproved broker, reasoning that pasteurization will kill any bacteria. Is this a valid use of the emergency provision?",
      "options": [
        {
          "text": "Yes, because pasteurization addresses any biological risk",
          "correct": false
        },
        {
          "text": "No, because FSSC 2.5.1 still requires the product to conform to specified requirements, and heat-resistant toxins or spores are not addressed by pasteurization alone",
          "correct": true
        },
        {
          "text": "Yes, as long as the override is documented after the fact",
          "correct": false
        },
        {
          "text": "No, because emergency procurement is never permitted under FSSC 22000",
          "correct": false
        }
      ],
      "rationale": "FSSC 2.5.1 allows emergency procurement, but explicitly requires the organization to still ensure the product conforms to specified requirements. A warm truck from an unvetted broker fails those requirements immediately, and pasteurization does not address heat-resistant toxins or spores that may already be present.",
      "lms_direction": "Review LMS Activity 2.5 - FSSC 2.5.1, Evaluation of External Providers."
    },
    {
      "category": "Suppliers, Calibration & Verification PRPs (TS 9, ISO 7.1.6/8.7, FSSC 2.5.1/2.5.12)",
      "section": "TS Clause 9",
      "type": "single_select",
      "text": "A receiving clerk signs for an unrefrigerated delivery without taking a temperature reading or checking for a Certificate of Analysis, because 'production can't stall.' What does TS Clause 9 require instead?",
      "options": [
        {
          "text": "Acceptance is fine as long as the supplier is on the Approved Supplier List",
          "correct": false
        },
        {
          "text": "Materials must be inspected, tested, or covered by a CoA to verify conformity prior to acceptance, with the clerk empowered to reject on failure",
          "correct": true
        },
        {
          "text": "The delivery can be accepted and flagged for review at month-end",
          "correct": false
        },
        {
          "text": "Temperature checks are only required for frozen goods",
          "correct": false
        }
      ],
      "rationale": "An Approved Supplier List living in an office system is worthless the moment a truck is physically at the dock. TS Clause 9 requires materials to be inspected, tested, or covered by a CoA prior to acceptance, and the receiving clerk needs standing authority to reject on the spot \u2014 not a phone call for a judgment call.",
      "lms_direction": "Review LMS Activity 2.5 - TS Clause 9, Management of Purchased Materials."
    },
    {
      "category": "Suppliers, Calibration & Verification PRPs (TS 9, ISO 7.1.6/8.7, FSSC 2.5.1/2.5.12)",
      "section": "Clause 8.7",
      "type": "single_select",
      "text": "A calibration certificate shows the pasteurizer's thermometer had been reading 3\u00b0C off for six months. What does Clause 8.7 require before simply replacing the device?",
      "options": [
        {
          "text": "Nothing \u2014 the device is now replaced, so the issue is closed",
          "correct": false
        },
        {
          "text": "A documented look-back assessment evaluating the validity of the measurement results taken during that period",
          "correct": true
        },
        {
          "text": "A formal apology to the calibration laboratory",
          "correct": false
        },
        {
          "text": "Discarding all product records from that period without further analysis",
          "correct": false
        }
      ],
      "rationale": "Simply replacing the device ignores the potential danger to product already shipped. Clause 8.7 explicitly requires evaluating the validity of previous measuring results when equipment is found unfit \u2014 the direction of the drift (reading high vs. low) determines whether the product was under- or over-processed, and that logic must be documented.",
      "lms_direction": "Review LMS Activity 2.6 - Clause 8.7, Control of Monitoring and Measuring."
    },
    {
      "category": "Suppliers, Calibration & Verification PRPs (TS 9, ISO 7.1.6/8.7, FSSC 2.5.1/2.5.12)",
      "section": "Clause 8.7",
      "type": "true_false",
      "text": "True or False: If a thermometer is found to have been reading 3\u00b0C LOWER than the actual temperature, this means the product may have been under-processed during that period.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "If the thermometer displayed a reading lower than the true temperature, the actual process temperature was higher than what the operator saw \u2014 meaning the product was over-processed relative to the display, not under-processed. Had the drift been in the opposite direction (reading higher than actual), that would indicate under-processing and a food safety risk requiring an urgent recall evaluation.",
      "lms_direction": "Review LMS Activity 2.6 - Clause 8.7, Look-Back Impact Assessment."
    },
    {
      "category": "Suppliers, Calibration & Verification PRPs (TS 9, ISO 7.1.6/8.7, FSSC 2.5.1/2.5.12)",
      "section": "FSSC 2.5.12",
      "type": "single_select",
      "text": "The QA Manager states that routine PRP inspections happen 'during the annual internal audit.' What does FSSC 2.5.12 actually require?",
      "options": [
        {
          "text": "Annual inspection is sufficient as long as it is thorough",
          "correct": false
        },
        {
          "text": "Routine, risk-based site inspections (e.g., monthly, with higher-risk zones inspected more frequently) separate from the annual internal audit",
          "correct": true
        },
        {
          "text": "PRP checks only after a customer complaint is received",
          "correct": false
        },
        {
          "text": "A single site-wide inspection frequency regardless of zone risk",
          "correct": false
        }
      ],
      "rationale": "An annual internal audit is not enough to catch daily wear and tear. FSSC 2.5.12 requires routine, documented site inspections with frequency and content based on risk \u2014 open-product zones need far more frequent inspection than low-risk dry storage areas.",
      "lms_direction": "Review LMS Activity 2.6 - FSSC 2.5.12, PRP Verification."
    },
    {
      "category": "HACCP Foundations (Clause 8.5.1-8.5.2)",
      "section": "Clause 8.5.1.2",
      "type": "single_select",
      "text": "Mr. Chidi suggests QA should write the HACCP plan alone in an office to save time. What does Clause 8.5.1.2 require instead?",
      "options": [
        {
          "text": "A single dedicated food safety specialist is sufficient",
          "correct": false
        },
        {
          "text": "A multidisciplinary food safety team with documented evidence of the knowledge and experience each member brings",
          "correct": true
        },
        {
          "text": "Sign-off from the Plant Manager only, after the fact",
          "correct": false
        },
        {
          "text": "An external consultant hired to write the plan independently",
          "correct": false
        }
      ],
      "rationale": "Clause 8.5.1.2 requires the food safety team to be multidisciplinary, with documented evidence of knowledge and experience \u2014 Production and Maintenance need to be on the team precisely because they would know not to alter equipment like pipework without triggering a new hazard analysis, something QA working alone would miss.",
      "lms_direction": "Review LMS Activity 3.1 - Clause 8.5.1.2, Food Safety Team."
    },
    {
      "category": "HACCP Foundations (Clause 8.5.1-8.5.2)",
      "section": "Clause 8.5.1.5",
      "type": "single_select",
      "text": "An auditor finds an unauthorized blue PVC bypass pipe from the blender to a holding vat, installed by the Production Manager to save CIP time. It does not appear on the flow diagram. What is the audit significance?",
      "options": [
        {
          "text": "None, since the pipe is functioning correctly and made of appropriate material",
          "correct": false
        },
        {
          "text": "A finding regardless of pipe material, because an unmapped process step means no hazard analysis was ever performed on it",
          "correct": true
        },
        {
          "text": "Only a documentation formality to be corrected before the next audit",
          "correct": false
        },
        {
          "text": "A finding only if the pipe leaks",
          "correct": false
        }
      ],
      "rationale": "A flow diagram must be verified on-site specifically to catch hidden elements like rework loops, bypasses, delays, and shift variations. An unmapped bypass pipe means that section of the process was never subjected to hazard analysis at all, invalidating that part of the HACCP plan regardless of how well the pipe itself performs.",
      "lms_direction": "Review LMS Activity 3.1 - Clause 8.5.1.5, Flow Diagrams."
    },
    {
      "category": "HACCP Foundations (Clause 8.5.1-8.5.2)",
      "section": "Clause 8.5.2.3",
      "type": "single_select",
      "text": "A QA Manager argues that because the pasteurizer is 'state-of-the-art,' the likelihood of E. coli surviving should be scored as Low, meaning no CCP is needed. What is wrong with this reasoning under Clause 8.5.2.3?",
      "options": [
        {
          "text": "Nothing \u2014 modern equipment justifies a lower likelihood score",
          "correct": false
        },
        {
          "text": "Likelihood must be scored prior to the application of control measures, so factoring in the pasteurizer's effect guarantees the hazard never registers as significant",
          "correct": true
        },
        {
          "text": "Severity, not likelihood, is the only factor that matters",
          "correct": false
        },
        {
          "text": "CCPs are only required for chemical hazards, not biological ones",
          "correct": false
        }
      ],
      "rationale": "Clause 8.5.2.3 requires hazards to be assessed prior to the application of control measures. Scoring likelihood with the pasteurizer's effect already factored in is circular reasoning that guarantees the hazard is never flagged as significant and never becomes a CCP \u2014 a defensible finding for auditors to catch.",
      "lms_direction": "Review LMS Activity 3.2 - Clause 8.5.2.3, Hazard Assessment."
    },
    {
      "category": "HACCP Foundations (Clause 8.5.1-8.5.2)",
      "section": "Clause 8.5.2.3",
      "type": "single_select",
      "text": "Using a 3x3 Likelihood x Severity risk matrix (1-3 each), a hazard scores Severity 2 x Likelihood 1 = 2. Under a significance threshold of 4, how should this hazard be categorized?",
      "options": [
        {
          "text": "Significant, and therefore requires a CCP",
          "correct": false
        },
        {
          "text": "Not Significant, and therefore managed through PRPs rather than the hazard control plan",
          "correct": true
        },
        {
          "text": "Significant only if the auditor personally disagrees with the score",
          "correct": false
        },
        {
          "text": "Undetermined until a corrective action is opened",
          "correct": false
        }
      ],
      "rationale": "With a significance threshold of 4, a score of 2 falls below the line and is managed through the site's prerequisite programmes rather than being escalated into the CCP/OPRP selection process \u2014 the matrix exists specifically to separate hazards that need a formal control point from those adequately handled by good practice.",
      "lms_direction": "Review LMS Activity 3.2 - Clause 8.5.2.3, Risk Assessment Matrix."
    },
    {
      "category": "HACCP Control Plan & Nonconformities (Clause 8.5.3-8.9)",
      "section": "Clause 8.5.2.4",
      "type": "single_select",
      "text": "Which set of three questions correctly forms the CCP vs. OPRP decision logic?",
      "options": [
        {
          "text": "Is it expensive? Is it new equipment? Does Maintenance approve?",
          "correct": false
        },
        {
          "text": "Does the step have a measurable critical limit? Is monitoring fast enough to isolate affected product? Is the step specifically designed to eliminate or reduce the hazard?",
          "correct": true
        },
        {
          "text": "Is the hazard biological? Is the hazard chemical? Is the hazard physical?",
          "correct": false
        },
        {
          "text": "Has the step ever failed before? Is it monitored daily? Is it documented?",
          "correct": false
        }
      ],
      "rationale": "The decision tree tests whether a step has a measurable critical limit, whether monitoring is fast enough to isolate affected product before it ships, and whether the step is specifically designed to eliminate or reduce the hazard. All three 'yes' answers point to a CCP; any 'no' typically points toward an OPRP instead.",
      "lms_direction": "Review LMS Activity 3.3 - Clause 8.5.2.4, CCP and OPRP Selection."
    },
    {
      "category": "HACCP Control Plan & Nonconformities (Clause 8.5.3-8.9)",
      "section": "Clause 8.5.3",
      "type": "true_false",
      "text": "True or False: Checking a pasteurizer's thermometer every 30 minutes and receiving clean weekly swab results is sufficient evidence to validate that a 70\u00b0C/10s pasteurization step is an effective CCP.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "This confuses Verification (thermometer checks, end-product testing \u2014 confirming the process is running as designed) with Validation (scientific proof that the specific parameter actually achieves the required log reduction). Validation must rely on evidence such as scientific literature, regulatory guidelines, or in-plant challenge studies, and must happen before implementation, not be inferred from routine monitoring afterward.",
      "lms_direction": "Review LMS Activity 3.3 - Clause 8.5.3, Validation of Control Measures."
    },
    {
      "category": "HACCP Control Plan & Nonconformities (Clause 8.5.3-8.9)",
      "section": "Clause 8.5.4.2",
      "type": "single_select",
      "text": "A pasteurization step is scientifically validated at a minimum of 72\u00b0C/15s, but the operational critical limit is set at 75\u00b0C/15s. Why is a buffer added above the validated minimum?",
      "options": [
        {
          "text": "To make the process look more rigorous to auditors",
          "correct": false
        },
        {
          "text": "To account for calibration tolerance and normal flow-profile variation, so the true process never dips below the scientifically validated minimum",
          "correct": true
        },
        {
          "text": "Because higher temperatures always improve product taste",
          "correct": false
        },
        {
          "text": "There is no reason \u2014 the validated minimum and operational limit should always be identical",
          "correct": false
        }
      ],
      "rationale": "The operational critical limit is deliberately set above the validated scientific minimum to create a margin that absorbs calibration tolerance (e.g., \u00b11\u00b0C) and normal process variation, ensuring the actual, real-world process never falls below the proven-effective minimum even when normal measurement and flow fluctuations occur.",
      "lms_direction": "Review LMS Activity 3.4 - Clause 8.5.4.2, Critical Limits."
    },
    {
      "category": "HACCP Control Plan & Nonconformities (Clause 8.5.3-8.9)",
      "section": "Clause 8.3",
      "type": "single_select",
      "text": "A CCP deviation is discovered on a pasteurizer. The affected product must be isolated. What determines whether this means isolating a few minutes of product or an entire shift?",
      "options": [
        {
          "text": "The severity of the deviation alone",
          "correct": false
        },
        {
          "text": "The resolution of the lot-coding system established beforehand \u2014 fill-window coding isolates minutes, shift-level coding isolates hours",
          "correct": true
        },
        {
          "text": "Whichever option is cheaper for the company",
          "correct": false
        },
        {
          "text": "A decision made randomly by the on-duty supervisor",
          "correct": false
        }
      ],
      "rationale": "What gets isolated depends entirely on the lot-coding resolution set beforehand, per Clause 8.3's traceability requirement. Fine-grained, fill-window-level coding isolates only minutes of affected product; coarser shift-level coding forces quarantining the entire shift \u2014 precision decided in advance directly controls the scope and cost of every future isolation event.",
      "lms_direction": "Review LMS Activity 3.4 - Clause 8.3, Traceability System."
    },
    {
      "category": "HACCP Control Plan & Nonconformities (Clause 8.5.3-8.9)",
      "section": "Clause 8.9.3",
      "type": "single_select",
      "text": "A metal detector on Line 2 rejects product three times in one week, each closed with an identical note: 'Quarantined box, ran test wands, detector working fine, resumed production.' What is missing under Clause 8.9.3?",
      "options": [
        {
          "text": "Nothing \u2014 each event was correctly quarantined and tested",
          "correct": false
        },
        {
          "text": "A Corrective Action addressing the recurring root cause, since three events from the same cause in one week is a pattern, not three isolated incidents",
          "correct": true
        },
        {
          "text": "A press release to customers about the rejections",
          "correct": false
        },
        {
          "text": "Replacement of the metal detector with a newer model",
          "correct": false
        }
      ],
      "rationale": "Quarantining and test-wanding each box is a Correction \u2014 it fixes each instance. Clause 8.9.3 requires evaluating the need for action to eliminate the cause of a nonconformity to prevent recurrence. Three trips in one week from the same underlying cause is a recurring pattern that must trigger a root-cause-driven Corrective Action, not just repeated corrections.",
      "lms_direction": "Review LMS Activity 3.5 - Clause 8.9.3, Corrective Actions."
    },
    {
      "category": "GFSI Shield: Culture, Fraud & Defense (FSSC 2.5.3/2.5.4/2.5.8)",
      "section": "FSSC 2.5.8",
      "type": "single_select",
      "text": "Which set of elements must a documented Food Safety and Quality Culture plan address under FSSC 2.5.8?",
      "options": [
        {
          "text": "Marketing, sales targets, and brand reputation",
          "correct": false
        },
        {
          "text": "Communication, training, employee feedback and engagement, and performance measurement, with named accountability",
          "correct": true
        },
        {
          "text": "Only a single annual all-staff meeting",
          "correct": false
        },
        {
          "text": "A poster campaign in the break room",
          "correct": false
        }
      ],
      "rationale": "FSSC 2.5.8 requires senior management to establish documented food safety and quality culture objectives covering communication, training, employee feedback/engagement, and performance measurement, supported by a documented plan with targets, timelines, and named accountability at each level \u2014 reviewed within Management Review.",
      "lms_direction": "Review LMS Activity 4.1 - FSSC 2.5.8, Food Safety and Quality Culture."
    },
    {
      "category": "GFSI Shield: Culture, Fraud & Defense (FSSC 2.5.3/2.5.4/2.5.8)",
      "section": "FSSC 2.5.3 & 2.5.4",
      "type": "single_select",
      "text": "What is the core distinction between VACCP (Food Fraud) and TACCP (Food Defense) mindsets?",
      "options": [
        {
          "text": "VACCP addresses accidental contamination; TACCP addresses financial fraud",
          "correct": false
        },
        {
          "text": "VACCP requires thinking like a criminal seeking financial gain; TACCP requires thinking like a saboteur seeking to cause harm",
          "correct": true
        },
        {
          "text": "VACCP and TACCP are interchangeable terms for the same assessment",
          "correct": false
        },
        {
          "text": "TACCP applies only to imported ingredients",
          "correct": false
        }
      ],
      "rationale": "HACCP asks 'what could go wrong by accident,' VACCP asks 'where could we be cheated for financial gain' (thinking like a criminal), and TACCP asks 'where could we be deliberately attacked' (thinking like a saboteur with intent to harm). Each requires a genuinely different investigative mindset, not just a different checklist.",
      "lms_direction": "Review LMS Activity 4.2 - FSSC 2.5.3 & 2.5.4, VACCP and TACCP."
    },
    {
      "category": "GFSI Shield: Culture, Fraud & Defense (FSSC 2.5.3/2.5.4/2.5.8)",
      "section": "FSSC 2.5.3",
      "type": "single_select",
      "text": "A blending tank manway scores 27 on a Threat x Vulnerability x Impact matrix, against a mitigation threshold of 9. What does this require?",
      "options": [
        {
          "text": "No action, since 27 is within a normal operating range",
          "correct": false
        },
        {
          "text": "Documented mitigation \u2014 for example, a tamper-evident lid, a logged two-person rule, and vetted, named personnel with access",
          "correct": true
        },
        {
          "text": "Immediate closure of the production line pending a full facility redesign",
          "correct": false
        },
        {
          "text": "Reassignment of the score to a lower-risk category without further review",
          "correct": false
        }
      ],
      "rationale": "A score of 27 against a threshold of 9 is well above the trigger for mandatory mitigation under FSSC 2.5.3. The correct response layers physical (tamper-evident lid), procedural (logged two-person rule), and personnel (vetted, named staff) controls around the identified actionable process step \u2014 proportionate mitigation, not either inaction or line shutdown.",
      "lms_direction": "Review LMS Activity 4.2 - FSSC 2.5.3, Threat Assessment and Mitigation."
    },
    {
      "category": "GFSI Shield: Culture, Fraud & Defense (FSSC 2.5.3/2.5.4/2.5.8)",
      "section": "FSSC 2.5.8",
      "type": "true_false",
      "text": "True or False: If three separate nonconformities in three separate departments were each individually closed with a documented corrective action, they cannot also represent a single, still-open food safety culture problem.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "Individual corrective actions can fix each instance while leaving the common root cause \u2014 such as deadline pressure consistently overriding controls \u2014 completely unaddressed. Closing three symptoms does not close the systemic culture problem; that requires a standing, top-management-level decision reviewed on a cycle, per FSSC 2.5.8.",
      "lms_direction": "Review LMS Activity 4.1 - FSSC 2.5.8, Repeat-Pattern Diagnostic."
    },
    {
      "category": "GFSI Shield: Allergens, Labels & Communication (FSSC 2.5.6/2.5.7/2.5.17)",
      "section": "FSSC 2.5.6, TS 10.3",
      "type": "single_select",
      "text": "Why is pasteurization not a valid control measure for an allergen cross-contact risk?",
      "options": [
        {
          "text": "Pasteurization is too expensive to apply to allergen control",
          "correct": false
        },
        {
          "text": "Heat destroys pathogens but does not destroy allergenic proteins \u2014 the 'No-Kill Reality' requires physical controls like isolation, sequencing, and validated removal instead",
          "correct": true
        },
        {
          "text": "Pasteurization actually increases allergen concentration",
          "correct": false
        },
        {
          "text": "Allergens are not a food safety hazard under FSSC 22000",
          "correct": false
        }
      ],
      "rationale": "The 'No-Kill Reality' is central to allergen management: heat processing addresses microbiological hazards but does nothing to denature or remove allergenic proteins. Control has to come from physical mechanisms \u2014 isolation, clean-to-dirty sequencing, and validated CIP removal \u2014 not from a downstream kill step.",
      "lms_direction": "Review LMS Activity 4.3 - FSSC 2.5.6, Allergen Management."
    },
    {
      "category": "GFSI Shield: Allergens, Labels & Communication (FSSC 2.5.6/2.5.7/2.5.17)",
      "section": "FSSC 2.5.7",
      "type": "true_false",
      "text": "True or False: Zero positive environmental monitoring swabs over 12 consecutive months is unambiguous evidence of a well-controlled facility.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "This is the 'Too Clean' trap. A program with zero positives for a full year is more likely evidence of a flawed sampling plan \u2014 wrong sites, wrong timing, insufficient sensitivity \u2014 than of genuinely superior control. It should trigger a 'Hunt Harder' review of the sampling design itself, per the mandatory review triggers in the Environmental Monitoring Program.",
      "lms_direction": "Review LMS Activity 4.3 - FSSC 2.5.7, Environmental Monitoring Program."
    },
    {
      "category": "GFSI Shield: Allergens, Labels & Communication (FSSC 2.5.6/2.5.7/2.5.17)",
      "section": "FSSC 2.5.17",
      "type": "single_select",
      "text": "Within what timeframe must the Certification Body be notified of a serious event such as a public food safety recall or a regulatory shutdown, per FSSC 2.5.17?",
      "options": [
        {
          "text": "30 days",
          "correct": false
        },
        {
          "text": "3 working days (72 hours)",
          "correct": true
        },
        {
          "text": "Immediately upon the next scheduled surveillance audit",
          "correct": false
        },
        {
          "text": "There is no defined timeframe",
          "correct": false
        }
      ],
      "rationale": "FSSC 2.5.17 requires the Certification Body to be informed within 3 working days (72 hours) of serious events, including public food safety events, regulatory actions or shutdowns, legal proceedings, malpractice, fraud, and natural or man-made disasters. This clock is one of the most operationally critical deadlines in the whole scheme.",
      "lms_direction": "Review LMS Activity 4.5 - FSSC 2.5.17, Communication Requirements."
    },
    {
      "category": "GFSI Shield: Allergens, Labels & Communication (FSSC 2.5.6/2.5.7/2.5.17)",
      "section": "FSSC 2.5.17",
      "type": "single_select",
      "text": "A metal detector rejects 5 bottles during routine production and the batch is contained internally with no product shipped. Does this require Certification Body notification under the 72-hour trigger matrix?",
      "options": [
        {
          "text": "Yes, any metal detector rejection must be reported",
          "correct": false
        },
        {
          "text": "No \u2014 a fully contained internal hold with no product shipped and no consumer exposure typically does not meet the notification threshold",
          "correct": true
        },
        {
          "text": "Yes, but only if the customer requests it",
          "correct": false
        },
        {
          "text": "No, because metal detector events are never reportable regardless of scale",
          "correct": false
        }
      ],
      "rationale": "The 72-Hour CB Notification Trigger Matrix distinguishes routine, internally contained events (like a small in-process rejection with no product shipped) from serious events reaching regulators, the public, or the market. A contained internal hold is a normal part of a functioning control system and does not, by itself, cross the notification threshold \u2014 but it should still generate its own internal record.",
      "lms_direction": "Review LMS Activity 4.5 - FSSC 2.5.17, 72-Hour Notification Trigger Matrix."
    },
    {
      "category": "GFSI Shield: Allergens, Labels & Communication (FSSC 2.5.6/2.5.7/2.5.17)",
      "section": "FSSC 2.5.7",
      "type": "single_select",
      "text": "An Environmental Monitoring Program returns its first-ever positive result on Zone 2 (near food-contact surface) for a Listeria species, while production continues normally. What is the correct immediate response?",
      "options": [
        {
          "text": "Ignore it, since Zone 2 is not direct food contact and production is unaffected",
          "correct": false
        },
        {
          "text": "Contain immediately \u2014 halt and quarantine product since the last clean swab, since Zone 2 is an early warning that organisms can migrate inward toward Zone 1",
          "correct": true
        },
        {
          "text": "Shut down the entire facility permanently pending a full investigation",
          "correct": false
        },
        {
          "text": "Wait for the next scheduled swab cycle to confirm before acting",
          "correct": false
        }
      ],
      "rationale": "Zone 2 is near food-contact, not noise \u2014 organisms detected there represent a real early-warning signal because they can migrate inward toward Zone 1 (direct food contact). The correct response is neither to ignore it nor to overreact with a full shutdown: contain product since the last clean swab, perform vector swabbing and re-sanitization, and escalate only if follow-up Zone 1 verification swabs also come back positive.",
      "lms_direction": "Review LMS Activity 4.3 - FSSC 2.5.7, Zone Classification and OOS Containment."
    },
    {
      "category": "Change Management & Crisis Response (Clause 6.3/8.4, FSSC 2.5.15)",
      "section": "FSSC 2.5.15",
      "type": "single_select",
      "text": "A new tank arrives with an internal weld defect that should have been caught before it ever left the fabricator, and a dead-leg sampling port that should have been caught on-site before first use. Which two checks does FSSC 2.5.15 require to catch these, respectively?",
      "options": [
        {
          "text": "A Factory Acceptance Test (FAT) at the fabricator, and a Site Acceptance Test (SAT) after installation and before use",
          "correct": true
        },
        {
          "text": "Two Site Acceptance Tests performed on the same day",
          "correct": false
        },
        {
          "text": "A single inspection performed only after the equipment has been running for 90 days",
          "correct": false
        },
        {
          "text": "A verbal confirmation from the fabricator's sales representative",
          "correct": false
        }
      ],
      "rationale": "FSSC 2.5.15 requires risk-based change management with commissioning evidence. A Factory Acceptance Test (FAT), performed at the fabricator before shipment, would have caught the internal weld defect. A Site Acceptance Test (SAT), performed on-site after installation but before first use, would have caught the dead-leg sampling port. Skipping either leaves that defect class uncaught until it surfaces on the floor.",
      "lms_direction": "Review LMS Activity 5.1 - FSSC 2.5.15, Equipment Management."
    },
    {
      "category": "Change Management & Crisis Response (Clause 6.3/8.4, FSSC 2.5.15)",
      "section": "Clause 6.3",
      "type": "single_select",
      "text": "Which of the following is NOT one of the five recurring Management of Change (MOC) trigger categories established across Nice Food Ltd's incidents?",
      "options": [
        {
          "text": "Equipment changes (e.g., the 2,000L tank purchase)",
          "correct": false
        },
        {
          "text": "Process changes (e.g., the CIP concentration change)",
          "correct": false
        },
        {
          "text": "Marketing changes (e.g., a new product tagline)",
          "correct": true
        },
        {
          "text": "Supplier changes (e.g., the fast-tracked puree supplier)",
          "correct": false
        }
      ],
      "rationale": "The five recurring MOC trigger categories are Equipment, Process, Facility, Personnel, and Supplier changes \u2014 each traced to a real incident across the course (the tank purchase, the CIP concentration change, the wet-zone barrier, John's sole-competency gap, and the fast-tracked supplier). Marketing changes are not a food-safety MOC trigger category under Clause 6.3.",
      "lms_direction": "Review LMS Activity 5.1 - Clause 6.3, MOC Trigger Categories."
    },
    {
      "category": "Change Management & Crisis Response (Clause 6.3/8.4, FSSC 2.5.15)",
      "section": "Clause 8.9.5",
      "type": "single_select",
      "text": "What is the deciding question in the Withdrawal vs. Recall decision tree?",
      "options": [
        {
          "text": "How much product is affected in total volume?",
          "correct": false
        },
        {
          "text": "Is there a plausible route for this product to cause harm to a consumer who has already purchased it?",
          "correct": true
        },
        {
          "text": "Has the media already reported on the issue?",
          "correct": false
        },
        {
          "text": "Did the nonconformity originate internally or externally?",
          "correct": false
        }
      ],
      "rationale": "The deciding question for choosing recall over withdrawal is whether there is a plausible route for the product to cause harm to a consumer who has already purchased it. If yes, it is a recall regardless of how the issue was discovered or how much product is involved \u2014 even 2 cases on a truck meet the same threshold as 200.",
      "lms_direction": "Review LMS Activity 5.2 - Clause 8.9.5, Withdrawal and Recall."
    },
    {
      "category": "Change Management & Crisis Response (Clause 6.3/8.4, FSSC 2.5.15)",
      "section": "Clause 8.9.5",
      "type": "single_select",
      "text": "During a live recall, two of three affected production batches trace cleanly to specific customers, but the third batch overlaps with a known mislabeling incident with an ambiguous code-date boundary. What is the correct scope decision for the third batch?",
      "options": [
        {
          "text": "Exclude the third batch entirely, since its boundary cannot be precisely determined",
          "correct": false
        },
        {
          "text": "Widen the recall scope for that batch to cover the full uncertain window on either side of the ambiguous boundary",
          "correct": true
        },
        {
          "text": "Recall only the exact bottles known to be affected, guessing at the boundary",
          "correct": false
        },
        {
          "text": "Delay the recall decision on that batch until the code-date issue is separately resolved",
          "correct": false
        }
      ],
      "rationale": "When a traceability boundary cannot be trusted down to the individual bottle \u2014 as with an overlapping mislabeling incident \u2014 the correct response is to widen the recall scope to the full ambiguous window rather than guess at a narrower boundary or exclude the batch. Precision changes scope; it never changes whether a response is required.",
      "lms_direction": "Review LMS Activity 5.2 - Clause 8.9.5, Recall Scope Under Traceability Ambiguity."
    },
    {
      "category": "Change Management & Crisis Response (Clause 6.3/8.4, FSSC 2.5.15)",
      "section": "Clause 8.4",
      "type": "single_select",
      "text": "The tarpaulin barrier flagged as inadequate months earlier finally fails during an active mango puree transfer, with airborne allergen dust from a nearby bakery mixer. What is the correct first action, before any paperwork?",
      "options": [
        {
          "text": "Immediately notify the Certification Body",
          "correct": false
        },
        {
          "text": "Stop the transfer and physically seal the open tank \u2014 containment before documentation",
          "correct": true
        },
        {
          "text": "Wait for the Plant Manager's authorization before touching any equipment",
          "correct": false
        },
        {
          "text": "Begin drafting the root cause analysis report first",
          "correct": false
        }
      ],
      "rationale": "Clause 8.4 requires emergency preparedness procedures that can be executed in real time. At the moment of a physical barrier failure with an open, exposed product, immediate physical containment \u2014 stopping the transfer and sealing the tank \u2014 takes priority over any documentation, notification, or authorization step; those follow once the immediate hazard is physically controlled.",
      "lms_direction": "Review LMS Activity 5.3 - Clause 8.4, Emergency Preparedness and Response."
    },
    {
      "category": "System Verification & Improvement (Clause 8.8-9.3, 10.1)",
      "section": "Clause 8.5.3, 8.8",
      "type": "single_select",
      "text": "A pasteurizer's thermal probe breaks and is replaced with an identical model in the exact same location. What is required under Clauses 8.5.3 and 8.8?",
      "options": [
        {
          "text": "Full re-validation of the pasteurization process from scratch",
          "correct": false
        },
        {
          "text": "Verification only \u2014 calibrating the new probe against a master thermometer before restart, since the underlying process physics haven't changed",
          "correct": true
        },
        {
          "text": "No action is needed since the replacement is identical",
          "correct": false
        },
        {
          "text": "A new hazard analysis for the entire production line",
          "correct": false
        }
      ],
      "rationale": "Because the process science and physical dynamics are unchanged \u2014 an identical probe model in the identical location \u2014 this is a Verification event (calibrate the new probe against a master thermometer) rather than a Validation event. Full re-validation would only be triggered by a genuine process change, such as an altered pipe diameter or flow rate.",
      "lms_direction": "Review LMS Activity 6.1 - Clause 8.5.3 & 8.8, Validation vs. Verification."
    },
    {
      "category": "System Verification & Improvement (Clause 8.8-9.3, 10.1)",
      "section": "Clause 9.2.2",
      "type": "single_select",
      "text": "Who is the correct choice to audit the Quality Assurance department's own laboratory and document control processes, per the auditor independence requirement in Clause 9.2.2?",
      "options": [
        {
          "text": "The QA Manager who owns those processes",
          "correct": false
        },
        {
          "text": "A QA Technician who reports to the QA Manager",
          "correct": false
        },
        {
          "text": "A cross-trained HR Manager or an external consultant, who has no ownership stake in the audited process",
          "correct": true
        },
        {
          "text": "Whoever is available on the audit's scheduled date",
          "correct": false
        }
      ],
      "rationale": "Clause 9.2.2 requires auditors to be selected to ensure objectivity and impartiality \u2014 auditors cannot audit their own work. Since the QA Manager and QA Technicians own the laboratory and document control processes, only someone outside that ownership chain, such as a cross-trained HR Manager or an external consultant, is eligible to audit it.",
      "lms_direction": "Review LMS Activity 6.2 - Clause 9.2.2, Auditor Independence."
    },
    {
      "category": "System Verification & Improvement (Clause 8.8-9.3, 10.1)",
      "section": "Clause 9.3.2",
      "type": "single_select",
      "text": "Management Review minutes discuss production yields, customer complaints, and audit scores, but omit any discussion of QA staffing adequacy or upcoming regulatory changes. Which two Clause 9.3.2 inputs are missing?",
      "options": [
        {
          "text": "Status of previous actions, and internal audit results",
          "correct": false
        },
        {
          "text": "Adequacy of resources, and changes in external and internal issues",
          "correct": true
        },
        {
          "text": "Customer complaints, and production yield trends",
          "correct": false
        },
        {
          "text": "Continual improvement opportunities, and FSMS updates",
          "correct": false
        }
      ],
      "rationale": "Clause 9.3.2 requires Management Review to address the adequacy of resources and changes in external and internal issues, among other inputs. A record showing only performance metrics and a congratulatory tone, with no discussion of staffing or upcoming regulatory changes, is a retrospective performance review \u2014 not a forward-looking strategic Management Review.",
      "lms_direction": "Review LMS Activity 6.3 - Clause 9.3.2, Management Review Inputs."
    },
    {
      "category": "System Verification & Improvement (Clause 8.8-9.3, 10.1)",
      "section": "Clause 8.9.2 & 8.9.3",
      "type": "true_false",
      "text": "True or False: Quarantining a rejected box and re-testing the metal detector with test wands, without investigating why metal reached the product in the first place, satisfies Clause 8.9.3's Corrective Action requirement.",
      "options": [
        {
          "text": "True",
          "correct": false
        },
        {
          "text": "False",
          "correct": true
        }
      ],
      "rationale": "Quarantining the box and confirming the detector works is a Correction under 8.9.2 \u2014 it addresses this specific instance. Clause 8.9.3 requires evaluating the need for action to eliminate the underlying cause to prevent recurrence, which requires actually investigating why metal reached the product, not just confirming the detector caught it.",
      "lms_direction": "Review LMS Activity 6.4 - Clause 8.9.2 vs 8.9.3, Correction vs Corrective Action."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 1",
      "type": "interactive_tool",
      "tool_type": "context_sorter",
      "exhibit_ref": "audit_story",
      "text": "Sort the following audit-opening factors from Paragraph 1 into the correct category of the site's Clause 4.1 context analysis.",
      "tool_data": {
        "items": [
          {
            "id": "i1",
            "text": "Full-scale production launch of the RTD Mango line"
          },
          {
            "id": "i2",
            "text": "New mango puree supplier onboarded"
          },
          {
            "id": "i3",
            "text": "NAFDAC issued tighter Maximum Residue Limit export rules"
          },
          {
            "id": "i4",
            "text": "European retail partner requires GFSI-benchmarked certification"
          }
        ],
        "categories": [
          "Internal Issue (Clause 4.1)",
          "External Issue (Clause 4.1)"
        ]
      },
      "expected_payload": {
        "Internal Issue (Clause 4.1)": [
          "i1",
          "i2"
        ],
        "External Issue (Clause 4.1)": [
          "i3",
          "i4"
        ]
      },
      "rationale": "Clause 4.1 requires organizations to separately determine internal issues (within the organization's control \u2014 capability changes, sourcing decisions) and external issues (outside the organization's control \u2014 regulatory rules, customer requirements). Production launches and supplier onboarding decisions are internal; regulatory rule changes and customer certification mandates originate outside the organization.",
      "lms_direction": "Review LMS Activity 1.1 - Clause 4.1, Internal and External Issues."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 2",
      "type": "interactive_tool",
      "tool_type": "flowchart_arranger",
      "exhibit_ref": "audit_story",
      "text": "Arrange the auditor's document review sequence from Paragraph 2 in the order it was performed.",
      "tool_data": {
        "steps": [
          {
            "id": "s3",
            "text": "Turn to the Vulnerability Assessment register for the mango puree supplier"
          },
          {
            "id": "s1",
            "text": "Review the Management Review minutes for the most recent quarter"
          },
          {
            "id": "s4",
            "text": "Identify that the supplier's risk score has not been re-assessed since onboarding"
          },
          {
            "id": "s2",
            "text": "Identify that staffing adequacy and external issue changes are absent from the minutes"
          }
        ]
      },
      "expected_payload": [
        "s1",
        "s2",
        "s3",
        "s4"
      ],
      "rationale": "The auditor first reads the Management Review minutes and notes the two missing standing agenda items (resource adequacy, external/internal issue changes), then moves to the Vulnerability Assessment register and finds the supplier score has gone stale since onboarding \u2014 establishing a pattern of documentation that looks complete on the surface but has real gaps underneath.",
      "lms_direction": "Review LMS Activity 6.3 - Clause 9.3.2, Management Review Inputs."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 3",
      "type": "interactive_tool",
      "tool_type": "ncr_generator",
      "exhibit_ref": "audit_story",
      "text": "Complete the Nonconformity Report for the finding observed during the floor interview in Paragraph 3.",
      "tool_data": {
        "findings": "A maintenance technician confirms that John is the sole person authorized to sign off on hygienic equipment modifications, that no change form exists for a recent bearing replacement, and that work requiring John's approval is simply being delayed until he returns from leave.",
        "classifications": [
          "Major",
          "Minor",
          "Opportunity for Improvement"
        ],
        "clauses": [
          "ISO 22000 Clause 7.1.2 (People)",
          "ISO 22000 Clause 6.3 (Planning of Changes)",
          "ISO 22000 Clause 9.2 (Internal Audit)"
        ]
      },
      "expected_payload": {
        "classification": "Major",
        "clause": "ISO 22000 Clause 7.1.2 (People)"
      },
      "rationale": "Clause 7.1.2 requires enough competent people that a single absence doesn't remove a control from the floor \u2014 exactly the gap the technician describes. Combined with the absence of any change-control form for the bearing replacement (a Clause 6.3 gap already live at the moment of the audit, not a hypothetical), this is scored Major: it reflects a standing organizational condition, not an isolated slip.",
      "lms_direction": "Review LMS Activity 1.4 - Clause 7.1.2, People Sufficiency Register."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 4",
      "type": "interactive_tool",
      "tool_type": "root_cause_tree",
      "exhibit_ref": "audit_story",
      "text": "Trace the metal detector reject pattern cross-referenced in Paragraph 4 to its systemic cause using the Five Whys structure.",
      "tool_data": {
        "levels": [
          {
            "id": "why1",
            "question": "Why did the immediate operational failure occur?",
            "options": [
              "A bearing was grinding against its housing, shedding metal filings into the product stream",
              "The detector's sensitivity was miscalibrated",
              "A supplier delivered contaminated flour"
            ]
          },
          {
            "id": "why2",
            "question": "Why did the procedural trigger fail?",
            "options": [
              "The bearing's scheduled lubrication task was overdue and had been skipped",
              "The technician was untrained on the lubrication procedure",
              "No preventive maintenance schedule existed for this equipment"
            ]
          },
          {
            "id": "why3",
            "question": "Why was the systemic handoff missing?",
            "options": [
              "The maintenance software has no mechanism to escalate an overdue task to management",
              "Management chose not to review maintenance records that week",
              "The technician forgot to report the missed task"
            ]
          }
        ]
      },
      "expected_payload": {
        "why1": "A bearing was grinding against its housing, shedding metal filings into the product stream",
        "why2": "The bearing's scheduled lubrication task was overdue and had been skipped",
        "why3": "The maintenance software has no mechanism to escalate an overdue task to management"
      },
      "rationale": "Root cause analysis must reach past the symptom (metal detected) and the procedural failure (a missed task) to the systemic gap \u2014 no escalation mechanism exists at all. That systemic gap is what a Corrective Action has to fix; re-lubricating the one bearing only addresses the symptom and leaves the same failure mode live on every other piece of equipment running the same software.",
      "lms_direction": "Review LMS Activity 6.4 - 5-Why Root Cause Analysis."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 5",
      "type": "interactive_tool",
      "tool_type": "context_sorter",
      "exhibit_ref": "audit_story",
      "text": "Sort the elements of the auditor's synthesis in Paragraph 5 into Symptom, Contributing Factor, or Systemic Root Cause.",
      "tool_data": {
        "items": [
          {
            "id": "i1",
            "text": "Repeated metal detector rejections on Line 2"
          },
          {
            "id": "i2",
            "text": "No escalation path exists for overdue preventive maintenance tasks"
          },
          {
            "id": "i3",
            "text": "John is unavailable and no deputy is authorized to sign off changes"
          },
          {
            "id": "i4",
            "text": "No change-control form was raised for the bearing work"
          }
        ],
        "categories": [
          "Symptom",
          "Contributing Factor",
          "Systemic Root Cause"
        ]
      },
      "expected_payload": {
        "Symptom": [
          "i1"
        ],
        "Contributing Factor": [
          "i3",
          "i4"
        ],
        "Systemic Root Cause": [
          "i2"
        ]
      },
      "rationale": "The repeated rejections are the visible symptom. The unavailable sole-approver and the missing change form are contributing factors that allowed an uncontrolled change onto the floor. The absence of any escalation mechanism for overdue maintenance is the true systemic root cause \u2014 the condition that, left unaddressed, will keep producing new symptoms on other equipment.",
      "lms_direction": "Review LMS Activity 6.4 - Root Cause vs Symptom."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 6",
      "type": "interactive_tool",
      "tool_type": "flowchart_arranger",
      "exhibit_ref": "audit_story",
      "text": "Arrange Amina's Five-Whys sequence from Paragraph 6 in the correct order.",
      "tool_data": {
        "steps": [
          {
            "id": "s3",
            "text": "Why was the lubrication task not completed? It was skipped during a busy week and never flagged."
          },
          {
            "id": "s1",
            "text": "Why did metal reach the detector? A bearing was grinding against its housing."
          },
          {
            "id": "s5",
            "text": "Why does the software have no escalation mechanism? No one at management level reviewed the PM program's design against a repeat-failure scenario."
          },
          {
            "id": "s2",
            "text": "Why was the bearing in that condition? It had not been lubricated on schedule."
          },
          {
            "id": "s4",
            "text": "Why was a skipped task not flagged? The maintenance software has no escalation mechanism."
          }
        ]
      },
      "expected_payload": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5"
      ],
      "rationale": "Each 'why' peels back one layer, from the immediate physical cause (grinding bearing) through the procedural failure (skipped lubrication, unflagged) to the systemic governance gap (no escalation mechanism, never reviewed by management) \u2014 the same blind spot already found missing from the Management Review minutes in Paragraph 2.",
      "lms_direction": "Review LMS Activity 6.4 - 5-Why Root Cause Analysis."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 7",
      "type": "interactive_tool",
      "tool_type": "ncr_generator",
      "exhibit_ref": "audit_story",
      "text": "Complete the Nonconformity Report for Mr. Chidi's proposed closure of the metal detector finding in Paragraph 7.",
      "tool_data": {
        "findings": "The Plant Manager proposes closing the metal detector finding by servicing the bearing and logging the three reject events as resolved, arguing the detector caught the metal every time and therefore 'the system worked.'",
        "classifications": [
          "Major",
          "Minor",
          "Opportunity for Improvement"
        ],
        "clauses": [
          "ISO 22000 Clause 8.9.3 (Corrective Actions)",
          "ISO 22000 Clause 8.9.2 (Corrections)",
          "ISO 22000 Clause 9.3.3 (Management Review Outputs)"
        ]
      },
      "expected_payload": {
        "classification": "Major",
        "clause": "ISO 22000 Clause 8.9.3 (Corrective Actions)"
      },
      "rationale": "Servicing the bearing is a Correction (Clause 8.9.2) \u2014 it fixes this instance. Clause 8.9.3 requires evaluating the need for action to eliminate the cause of a nonconformity to prevent recurrence. Three trips in one week from the same cause is a recurring pattern; closing it as a correction alone, without a root-cause-driven Corrective Action addressing the escalation gap, leaves the same failure mode live on every other piece of equipment running the same maintenance software \u2014 the finding stays Major until a true CAPA is opened.",
      "lms_direction": "Review LMS Activity 6.4 - Correction vs Corrective Action."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 8",
      "type": "interactive_tool",
      "tool_type": "root_cause_tree",
      "exhibit_ref": "audit_story",
      "text": "Using the site's Finding Severity Matrix, trace why the auditor classified the metal detector escalation gap as a Major Nonconformity in Paragraph 8.",
      "tool_data": {
        "levels": [
          {
            "id": "why1",
            "question": "Why does this exceed an Opportunity for Improvement?",
            "options": [
              "It already caused three real contamination events in one week, not a hypothetical or future risk",
              "The auditor personally dislikes the Plant Manager",
              "The written report needs at least one finding to look thorough"
            ]
          },
          {
            "id": "why2",
            "question": "Why does this exceed a simple Minor Nonconformity?",
            "options": [
              "The root cause is systemic (no escalation mechanism at all) and will keep recurring across other equipment, not an isolated lapse",
              "Minor findings are reserved only for paperwork errors",
              "The technician being interviewed seemed uncooperative"
            ]
          },
          {
            "id": "why3",
            "question": "Why is Major the correct final classification under the site's severity matrix?",
            "options": [
              "Harm scores Serious (contamination reaching product) and Recurrence scores Likely (a proven weekly pattern with no fix in place), landing in the 15-25 Major band",
              "All equipment-related findings are automatically classified as Major",
              "The Certification Body requires at least one Major finding per audit"
            ]
          }
        ]
      },
      "expected_payload": {
        "why1": "It already caused three real contamination events in one week, not a hypothetical or future risk",
        "why2": "The root cause is systemic (no escalation mechanism at all) and will keep recurring across other equipment, not an isolated lapse",
        "why3": "Harm scores Serious (contamination reaching product) and Recurrence scores Likely (a proven weekly pattern with no fix in place), landing in the 15-25 Major band"
      },
      "rationale": "The Finding Severity Matrix scores Potential Harm x Likelihood of Recurrence. A demonstrated, repeating contamination pattern with no systemic fix in place scores Serious harm and Likely recurrence, placing the finding in the 15-25 Major Nonconformity band \u2014 a defensible, evidence-based classification rather than a subjective judgment call.",
      "lms_direction": "Review LMS Activity 6.4 - Finding Severity Matrix."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 1",
      "type": "interactive_tool",
      "tool_type": "flowchart_arranger",
      "exhibit_ref": "audit_story",
      "text": "Arrange the auditor's opening-meeting review sequence from Paragraph 1 in the order it was performed.",
      "tool_data": {
        "steps": [
          {
            "id": "s1",
            "text": "Flag the three site changes since the last visit (RTD line launch, new supplier, new NAFDAC rule)"
          },
          {
            "id": "s2",
            "text": "Note that the certification scope statement has not been amended to reflect any of them"
          },
          {
            "id": "s3",
            "text": "Open the audit trail with the site's own risk and context documentation"
          },
          {
            "id": "s4",
            "text": "Proceed toward reviewing the Management Review minutes"
          }
        ]
      },
      "expected_payload": [
        "s1",
        "s2",
        "s3",
        "s4"
      ],
      "rationale": "The auditor works from broad to specific: flag the known changes, check whether the site's own scope documentation reflects them, then open the audit trail at the source documents that should have captured those changes' risk implications before drilling into individual records.",
      "lms_direction": "Review LMS Activity 1.1 - Clause 4.1 & 4.3, Context and Scope."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 2",
      "type": "interactive_tool",
      "tool_type": "context_sorter",
      "exhibit_ref": "audit_story",
      "text": "Sort the Paragraph 2 findings by which document the auditor found them in.",
      "tool_data": {
        "items": [
          {
            "id": "i1",
            "text": "Missing discussion of QA staffing adequacy"
          },
          {
            "id": "i2",
            "text": "Missing discussion of the new NAFDAC MRL requirement"
          },
          {
            "id": "i3",
            "text": "Supplier vulnerability score not re-assessed since onboarding"
          }
        ],
        "categories": [
          "Management Review Minutes",
          "Vulnerability Assessment Register"
        ]
      },
      "expected_payload": {
        "Management Review Minutes": [
          "i1",
          "i2"
        ],
        "Vulnerability Assessment Register": [
          "i3"
        ]
      },
      "rationale": "The two missing standing agenda items \u2014 resource adequacy and external issue changes \u2014 are gaps in the Management Review minutes under Clause 9.3.2. The stale score is a separate gap in the Vulnerability Assessment register under FSSC 2.5.4. Two different documents, two different clause failures, found in the same review pass.",
      "lms_direction": "Review LMS Activity 6.3 - Clause 9.3.2, Management Review Inputs."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 3",
      "type": "interactive_tool",
      "tool_type": "context_sorter",
      "exhibit_ref": "audit_story",
      "text": "Sort the Paragraph 3 floor-interview observations into the correct finding category.",
      "tool_data": {
        "items": [
          {
            "id": "i1",
            "text": "John is the only person authorized to sign off hygienic equipment modifications"
          },
          {
            "id": "i2",
            "text": "No change form exists for the recent bearing replacement"
          },
          {
            "id": "i3",
            "text": "The tarpaulin barrier is still in place, now visibly patched with tape"
          }
        ],
        "categories": [
          "People/Competency Gap (Clause 7.1.2)",
          "Change Control Gap (Clause 6.3)",
          "Facility/PRP Gap (TS Clause 5)"
        ]
      },
      "expected_payload": {
        "People/Competency Gap (Clause 7.1.2)": [
          "i1"
        ],
        "Change Control Gap (Clause 6.3)": [
          "i2"
        ],
        "Facility/PRP Gap (TS Clause 5)": [
          "i3"
        ]
      },
      "rationale": "A single floor walk can surface three distinct clause failures at once: a single point of failure in competency (7.1.2), an uncontrolled equipment change with no MOC record (6.3), and a physical PRP barrier that was flagged as an interim fix but never permanently resolved (TS Clause 5). Auditors are trained to separate these rather than lump them into one vague 'floor issues' note.",
      "lms_direction": "Review LMS Activity 2.1 - TS Clause 5, Layout of Premises and Workspace."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 4",
      "type": "interactive_tool",
      "tool_type": "ncr_generator",
      "exhibit_ref": "audit_story",
      "text": "Complete a second, distinct Nonconformity Report for the Preventive Maintenance schedule gap cross-referenced in Paragraph 4, separate from the floor-interview finding.",
      "tool_data": {
        "findings": "The Preventive Maintenance schedule shows the sifter's bearing lubrication task was overdue by five weeks, marked incomplete, with no escalation record and no link to the metal detector reject log covering the same equipment.",
        "classifications": [
          "Major",
          "Minor",
          "Opportunity for Improvement"
        ],
        "clauses": [
          "FSSC 2.5.12 (PRP Verification)",
          "ISO 22000 Clause 8.9.3 (Corrective Actions)",
          "ISO 22000 Clause 7.1.5 (Externally Developed Elements)"
        ]
      },
      "expected_payload": {
        "classification": "Major",
        "clause": "ISO 22000 Clause 8.9.3 (Corrective Actions)"
      },
      "rationale": "This is a distinct finding from the People gap in Paragraph 3: an overdue maintenance task with no escalation path, disconnected from a live reject log showing the exact equipment it should have flagged. The core failure is that the site has no mechanism to convert a recurring signal into a Corrective Action under 8.9.3 \u2014 the gap is systemic, not a single missed task, which is why it scores Major rather than Minor.",
      "lms_direction": "Review LMS Activity 6.4 - Clause 8.9.3, Corrective Actions."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 5",
      "type": "interactive_tool",
      "tool_type": "flowchart_arranger",
      "exhibit_ref": "audit_story",
      "text": "Arrange the auditor's synthesis logic from Paragraph 5 in the correct order.",
      "tool_data": {
        "steps": [
          {
            "id": "s1",
            "text": "Note the equipment is generating repeated contamination signals"
          },
          {
            "id": "s2",
            "text": "Note the maintenance program has no escalation path for missed tasks"
          },
          {
            "id": "s3",
            "text": "Note the sole authorized change-approver is unavailable, with no deputy"
          },
          {
            "id": "s4",
            "text": "Conclude the three items describe one systemic condition, not three isolated administrative gaps"
          }
        ]
      },
      "expected_payload": [
        "s1",
        "s2",
        "s3",
        "s4"
      ],
      "rationale": "Synthesis works by laying each individually-minor thread side by side before drawing the connecting conclusion. Doing it in reverse \u2014 concluding first, then justifying \u2014 is exactly the shortcut that leads to under-scoped findings; the evidence has to be assembled before the systemic claim is made.",
      "lms_direction": "Review LMS Activity 6.4 - Root Cause vs Symptom."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 6",
      "type": "interactive_tool",
      "tool_type": "root_cause_tree",
      "exhibit_ref": "audit_story",
      "text": "Using Amina's Five-Whys session from Paragraph 6, select the correct answer at each stage of the drill.",
      "tool_data": {
        "levels": [
          {
            "id": "why1",
            "question": "What immediate physical cause did the worn bearing introduce?",
            "options": [
              "Metal filings entering the product stream",
              "Excessive noise on the production line",
              "A reduction in motor speed only"
            ]
          },
          {
            "id": "why2",
            "question": "What administrative process failed to catch the overdue lubrication task?",
            "options": [
              "The Preventive Maintenance schedule tracking, since it had no escalation trigger for a missed task",
              "The daily production output report",
              "The annual internal audit checklist"
            ]
          },
          {
            "id": "why3",
            "question": "What governance-level gap explains why an escalation trigger was never built in the first place?",
            "options": [
              "Management Review never evaluated the PM program's design against a repeat-failure scenario",
              "The technician personally disliked using the maintenance software",
              "IT never finished installing the maintenance software"
            ]
          }
        ]
      },
      "expected_payload": {
        "why1": "Metal filings entering the product stream",
        "why2": "The Preventive Maintenance schedule tracking, since it had no escalation trigger for a missed task",
        "why3": "Management Review never evaluated the PM program's design against a repeat-failure scenario"
      },
      "rationale": "This mirrors Amina's own five-whys chain: a physical symptom, traced through a procedural gap (no escalation trigger), to the true governance-level root cause \u2014 the same blind spot the auditor already found missing from the Management Review minutes in Paragraph 2. Recognizing that connection across paragraphs is the actual skill being tested.",
      "lms_direction": "Review LMS Activity 6.4 - 5-Why Root Cause Analysis."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 7",
      "type": "interactive_tool",
      "tool_type": "context_sorter",
      "exhibit_ref": "audit_story",
      "text": "Sort the elements of Mr. Chidi's proposal and Amina's rebuttal from Paragraph 7 into Correction or Corrective Action.",
      "tool_data": {
        "items": [
          {
            "id": "i1",
            "text": "Servicing the sifter bearing immediately"
          },
          {
            "id": "i2",
            "text": "Logging the three reject events as resolved"
          },
          {
            "id": "i3",
            "text": "Fixing the escalation gap in the maintenance software"
          }
        ],
        "categories": [
          "Correction (fixes this instance)",
          "Corrective Action (fixes the cause)"
        ]
      },
      "expected_payload": {
        "Correction (fixes this instance)": [
          "i1",
          "i2"
        ],
        "Corrective Action (fixes the cause)": [
          "i3"
        ]
      },
      "rationale": "Mr. Chidi's proposal covers only Corrections under 8.9.2 \u2014 actions that resolve this specific instance. Amina's objection points at the missing Corrective Action under 8.9.3: fixing the software's escalation gap addresses the cause, which is what prevents the same failure mode from recurring on every other piece of equipment running the same system.",
      "lms_direction": "Review LMS Activity 6.4 - Clause 8.9.2 vs 8.9.3, Correction vs Corrective Action."
    },
    {
      "category": "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)",
      "section": "Paragraph 8",
      "type": "interactive_tool",
      "tool_type": "context_sorter",
      "exhibit_ref": "audit_story",
      "text": "Using the site's Finding Severity Matrix, sort the three closing items from Paragraph 8 into their correct severity band.",
      "tool_data": {
        "items": [
          {
            "id": "i1",
            "text": "Metal detector escalation gap (Harm: Serious=4, Recurrence: Likely=4, Score=16)"
          },
          {
            "id": "i2",
            "text": "Unassessed supplier vulnerability score (Harm: Moderate=3, Recurrence: Possible=3, Score=9)"
          },
          {
            "id": "i3",
            "text": "Missing Management Review inputs (Harm: Negligible=1, Recurrence: Possible=3, Score=3)"
          }
        ],
        "categories": [
          "Major Nonconformity (15-25)",
          "Minor Nonconformity (7-14)",
          "Opportunity for Improvement (1-6)"
        ]
      },
      "expected_payload": {
        "Major Nonconformity (15-25)": [
          "i1"
        ],
        "Minor Nonconformity (7-14)": [
          "i2"
        ],
        "Opportunity for Improvement (1-6)": [
          "i3"
        ]
      },
      "rationale": "The Finding Severity Matrix is a simple multiplication of the Harm and Recurrence scales. 4x4=16 lands in the 15-25 Major band. 3x3=9 lands in the 7-14 Minor band. 1x3=3 lands in the 1-6 Opportunity for Improvement band. Three findings from the same closing meeting can legitimately land in three different bands \u2014 severity is scored per finding, not by association with the others.",
      "lms_direction": "Review LMS Activity 6.4 - Finding Severity Matrix."
    }
  ],
  "remediationData": {
    "Context & Leadership (Clauses 4-5)": "Review Module 1.1 and 1.2. Focus on the difference between a scope exclusion that survives audit scrutiny (tested against 'who controls the hazard point') and one that doesn't, and on what makes leadership commitment and policy language defensible rather than aspirational: specific mechanisms, named authority, and behavior that holds under real pressure.",
    "Objectives, Resources & Competence (Clauses 6-7)": "Review Module 1.3 and 1.4. Practice writing objectives that name a number, an owner, a deadline, and a verification method. Re-read the distinction between Competence (7.2, documented proof someone can do the job) and People sufficiency (7.1.2, whether there are enough of them) \u2014 these are two separate clauses testing two separate questions.",
    "Infrastructure & Equipment PRPs (TS 4-8)": "Review Module 2.1 and 2.2. Revisit the 5-Point Hygienic Equipment Design Checklist and practice identifying dead legs, unfinished welds, and missing transition controls in a floor-plan or equipment scenario, not just from a written spec sheet.",
    "Hygiene & Contamination Control (TS 10-13, FSSC 2.5.11)": "Review Module 2.3 and 2.4. Focus on the difference between a completed cleaning task and verified evidence of cleanliness, and on why post-maintenance or post-rework equipment always requires a harder verification step than routine cycles.",
    "Suppliers, Calibration & Verification PRPs (TS 9, ISO 7.1.6/8.7, FSSC 2.5.1/2.5.12)": "Review Module 2.5 and 2.6. Re-work the look-back impact assessment logic for a calibration drift in both directions (reading high vs. low), and revisit why emergency procurement provisions never waive the underlying conformity requirement.",
    "HACCP Foundations (Clause 8.5.1-8.5.2)": "Review Module 3.1 and 3.2. Practice the flow-diagram verification walk (hunting rework loops, bypasses, delays, and shift variations) and re-do the Likelihood x Severity scoring exercise, making sure likelihood is always scored before control measures are applied.",
    "HACCP Control Plan & Nonconformities (Clause 8.5.3-8.9)": "Review Module 3.3, 3.4, and 3.5. Re-study the CCP/OPRP decision tree, the Validation-before-implementation vs. Verification-during-operation distinction, and the Correction vs. Corrective Action split \u2014 a recurring theme across the whole assessment.",
    "GFSI Shield: Culture, Fraud & Defense (FSSC 2.5.3/2.5.4/2.5.8)": "Review Module 4.1 and 4.2. Practice distinguishing the VACCP mindset (thinking like a criminal for profit) from the TACCP mindset (thinking like a saboteur intending harm), and revisit why individually-closed corrective actions can still leave a shared culture-level root cause open.",
    "GFSI Shield: Allergens, Labels & Communication (FSSC 2.5.6/2.5.7/2.5.17)": "Review Module 4.3, 4.4, and 4.5. Re-read the 'No-Kill Reality' for allergens, the Environmental Monitoring zone classifications and the 'Too Clean' trap, and memorize the 72-hour Certification Body notification window and what does and doesn't cross that threshold.",
    "Change Management & Crisis Response (Clause 6.3/8.4, FSSC 2.5.15)": "Review Module 5.1, 5.2, and 5.3. Re-study the five MOC trigger categories, the FAT vs. SAT distinction, the Withdrawal vs. Recall decision question, and practice the 'contain first, document second' sequencing for a live physical failure.",
    "System Verification & Improvement (Clause 8.8-9.3, 10.1)": "Review Module 6.1 through 6.4. Revisit when a like-for-like equipment replacement only requires verification versus full re-validation, why a perfect audit score can itself be a red flag, and the two Management Review inputs most commonly missing in practice: resource adequacy and external/internal issue changes.",
    "Case Study - The Nice Food Ltd Surveillance Audit (8 of 35, hardcoded)": "Re-read the full audit_story exhibit paragraph by paragraph, then rebuild the Five-Why chain for the metal detector finding from memory: symptom (bearing wear) to procedural failure (skipped task) to systemic root cause (no escalation mechanism). This case study integrates Modules 1, 4, 5, and 6 \u2014 if you missed a case study question, revisit the module the linked clause belongs to, not just this exhibit."
  }
};
