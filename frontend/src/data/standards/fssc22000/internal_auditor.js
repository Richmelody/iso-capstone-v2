export default {
    "title": "FSSC 22000 Version 6 Internal Auditor — Capstone Exam",
    "instrument_notice": "This is a knowledge-underpinning assessment measuring recognition of correct audit reasoning across all three FSSC 22000 pillars (ISO 22000:2018, sector PRPs, and the FSSC Additional Requirements), not the generative skills of live audit practice.",
    "layout_size": 40,
    "time_limit": 75,
    "passing_score_percent": 75,
    "scoring_note": "75% (30/40) is a provisional cut score.",
    "pool_size": 80,
    "extraction_note": "This 80-question pool feeds a stratified, category-aware extractor presenting 40 questions per sitting, proportionally sampled across all seven blueprint categories.",
    "blueprint": {
        "Case Study — Golden Harvest Foods Group": 18,
        "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)": 9,
        "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)": 13,
        "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)": 9,
        "Sector PRPs — ISO/TS 22002 Series (Multi-Category)": 11,
        "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)": 11,
        "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)": 9
    },
    "exhibits": {
        "audit_story": {
            "description": "Continuous 10-paragraph scenario: Golden Harvest Foods Group (GHFG), a four-site multi-site FSSC 22000 V6 certificate holder spanning Food Manufacturing (Category C), Food Packaging Manufacturing (Category I), Storage & Distribution (Category G), and Catering (Category E), undergoing its internal audit programme.",
            "paragraphs": [
                "Paragraph 1 — Context, Scope & Leadership: Golden Harvest Foods Group (GHFG) is a mid-sized food group operating four certified sites under one FSSC 22000 V6 multi-site certificate: a Manufacturing Plant producing ready-to-eat sauces and soups (Category C), a Packaging Division that extrudes and prints the plastic film and pouches used by the Manufacturing Plant (Category I), a Distribution Centre providing ambient and chilled storage (Category G), and a Catering Unit supplying prepared meals to three hospital clients (Category E). The FSMS scope statement, unchanged since the group's last recertification audit, lists only the Manufacturing Plant and Packaging Division by name; the Distribution Centre and Catering Unit are referenced solely as 'supporting logistics,' despite the Catering Unit now handling final plating and direct-to-consumer service of high-risk ready-to-eat meals for immunocompromised hospital patients. The Group Food Safety Team Leader confirmed that top management approved the Catering Unit's expansion into hospital contracts eight months ago, but the scope document and the corporate Food Safety Policy were never revisited to reflect it.",
                "Paragraph 2 — Hazard Analysis & HACCP (Clause 8.5): The Manufacturing Plant's hazard analysis, last fully revalidated two years ago, identifies a Critical Control Point (CCP1: Cook Step, 90°C for 3 minutes) for pathogen reduction in its flagship tomato-basil sauce. During the audit, the team found that a new recipe variant — a dairy-based alfredo sauce launched five months ago — is being produced on the same line using the same hazard analysis and the same CCP1 limit, without any documented evidence that the cook step's lethality was re-validated for the new product's different viscosity and fat content. The HACCP team's meeting minutes from the new product's launch record only a marketing and packaging review, with no food safety team sign-off referenced anywhere in the change record.",
                "Paragraph 3 — PRP Fundamentals: Pest Control & Cleaning (ISO/TS 22002-1): The Manufacturing Plant's pest control programme is contracted to a licensed external provider, and the pest control station map on file shows 42 stations. During the site walk, the audit team counted 46 physical stations installed, four of which — all near a recently constructed loading dock extension — do not appear on the map and have no service records at all. Separately, the Cleaning and Sanitation Master Schedule for the alfredo sauce line specifies a full wet clean and allergen-specific verification swab after any product changeover involving milk-based ingredients; the changeover log for the most recent alfredo-to-tomato changeover shows the wet clean was performed, but the verification swab result field was left blank with the notation 'ran out of time, next batch felt OK.'",
                "Paragraph 4 — Packaging Division PRPs (ISO/TS 22002-4): The Packaging Division's hygienic design procedure requires all new film-extrusion equipment to undergo a documented hygienic design risk assessment before installation, addressing foreign body risk and cleanability, consistent with ISO/TS 22002-4. A new high-speed printing unit was installed fourteen months ago to keep pace with the Manufacturing Plant's alfredo launch; no hygienic design risk assessment exists for it. During the walkthrough, the audit team observed metal shavings visible in the machine's drip tray, with no corresponding entry in the foreign body incident log for the current quarter. The Packaging Division's Technical Manager stated the equipment was 'pre-approved by the supplier as food-grade,' and did not distinguish this from the organization's own documented hygienic design risk assessment obligation.",
                "Paragraph 5 — Allergen Management & Labelling (Additional Requirements 2.5.6 & 2.5.2): GHFG's allergen matrix correctly lists milk as an allergen introduced by the alfredo sauce, and the corresponding product label was updated and validated against the matrix before launch. However, the audit team's trace exercise on the tomato-basil sauce — produced on the same line immediately after an alfredo batch, per Paragraph 3's changeover gap — found no allergen cross-contact risk assessment addressing whether an incomplete verification swab could allow milk protein carryover into a product labelled 'Dairy-Free' on its front-of-pack claim. The label validation file for tomato-basil sauce was last reviewed before the alfredo product existed.",
                "Paragraph 6 — Food Defence & Food Fraud (Additional Requirements 2.5.3 & 2.5.4): GHFG's Food Fraud Vulnerability Assessment, conducted eighteen months ago, rates the olive oil used in its sauces as 'Low' vulnerability, citing 'long-standing supplier relationship' as the sole justification, with no reference to olive oil's well-documented industry history as one of the most frequently adulterated food commodities globally. The Manufacturing Plant's Food Defence Plan, reviewed annually as required, has not been updated since a new loading dock extension (see Paragraph 3) created a new unmonitored access point between the public-facing delivery yard and the raw ingredient storage area.",
                "Paragraph 7 — Distribution Centre: Storage, Transport & Environmental Monitoring (Additional Requirement 2.5.5): The Distribution Centre's chilled storage area operates two independent temperature-monitoring systems: an automated continuous logger and a manual twice-daily paper check. The audit team found the automated logger showed a temperature excursion above 8°C for 55 minutes eleven days ago — during a documented refrigeration unit fault — while the manual paper log for the same day shows both checks recorded as 'OK, 4°C' with no excursion noted, and no evidence the two records are ever cross-checked against each other. Separately, the Centre's Environmental Monitoring Programme swabs six fixed sites monthly for Listeria but has never once rotated or added a site since the programme began three years ago, despite two internal layout changes to the loading area in that time.",
                "Paragraph 8 — Catering Unit: PRPs at the Point of Service: The Catering Unit's kitchen operates a documented hot-holding procedure requiring prepared meals to be held above 63°C until final plating for hospital delivery. During the audit's unannounced observation of the lunch service, two trays of prepared meals were found on the pass counter at 54°C for approximately twenty minutes before a supervisor intervened, after the shift's usual temperature-check staff member had been reassigned to cover a colleague's absence with no handover of the checking duty. The Catering Unit's own internal temperature log for that same shift shows all checks recorded as compliant.",
                "Paragraph 9 — Equipment Management & Quality Control (Additional Requirements 2.5.8 & 2.5.12): GHFG introduced a group-wide Equipment Management procedure eleven months ago, consistent with the FSSC 22000 V6 Additional Requirement on Equipment Management, requiring a documented risk assessment and food-grade/hygienic design verification before any new equipment purchase. Neither the Packaging Division's new printing unit (Paragraph 4) nor a new metal detector recently installed at the Manufacturing Plant's finished-goods line appear in the Equipment Management register, though both were purchased after the procedure's effective date. The metal detector's own commissioning validation report, when the audit team requested it, could not be located by the Plant Engineer, who stated it was 'definitely done, I just can't find the paperwork right now.'",
                "Paragraph 10 — Performance Evaluation, Internal Audit & Improvement: GHFG's internal audit programme is designed to cover all four sites and all FSSC 22000 V6 requirements across an eighteen-month cycle. The audit team reviewing the programme found that the Catering Unit — the newest and highest-risk site given its hospital patient population — has not yet been internally audited since its scope expansion eight months ago, and is not scheduled until month sixteen of the current cycle. GHFG's most recent Management Review, held six weeks ago, recorded 'food safety culture' and 'internal audit results' as agenda items with minutes stating both were 'reviewed, no major concerns,' though the minutes contain no reference to the pest station gap, the alfredo swab gap, or the Catering Unit's audit delay — all of which were already known to the Group Food Safety Team Leader at the time of that meeting."
            ]
        },
        "finding_severity_matrix": {
            "description": "Severity model: Score = Food Safety Impact x Likelihood.",
            "harm_scale": "1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Critical (direct consumer health risk)",
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
        },
        "food_chain_categories": {
            "description": "FSSC 22000 V6 food chain categories relevant to this exam (per ISO 22003-1:2022).",
            "categories": [
                {
                    "code": "C",
                    "name": "Food Manufacturing",
                    "prp_standard": "ISO/TS 22002-1"
                },
                {
                    "code": "I",
                    "name": "Food Packaging Manufacturing",
                    "prp_standard": "ISO/TS 22002-4"
                },
                {
                    "code": "G",
                    "name": "Storage and Distribution",
                    "prp_standard": "ISO/TS 22002-5 / PAS 223 principles"
                },
                {
                    "code": "E",
                    "name": "Catering",
                    "prp_standard": "ISO/TS 22002-2"
                },
                {
                    "code": "D",
                    "name": "Animal Feed Production",
                    "prp_standard": "ISO/TS 22002-6"
                }
            ]
        }
    },
    "questions": [
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 1",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The FSMS scope statement lists only the Manufacturing Plant and Packaging Division, while the Catering Unit — now serving high-risk hospital patients — is referenced only as 'supporting logistics.' What is the most defensible finding?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to document formatting, since the Catering Unit is still technically covered under the group's single certificate umbrella, based on how most sites in this sector typically operate in practice.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Clause 4.3 — the scope no longer reflects a site now performing high-risk, direct-to-patient food service, a material undisclosed boundary gap.",
                    "correct": true
                },
                {
                    "text": "No finding, since Clause 4.3 requires scope review only at recertification, and this site change occurred between certification cycles.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since business expansions are commercial decisions outside what a scope statement is expected to track in real time.",
                    "correct": false
                }
            ],
            "rationale": "4.3 requires the scope to reflect the ISMS's actual current boundary, not just what was true at last certification. A site now serving immunocompromised patients directly is a materially different risk profile than 'supporting logistics,' and the standard doesn't wait for a scheduled cycle to require accuracy.",
            "lms_direction": "Review LMS Activity 4.3 — Multi-Site Scope Currency."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 1",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "As the internal auditor, what is the most important next step regarding the Catering Unit scope gap, before finalizing this finding?",
            "options": [
                {
                    "text": "Escalate directly to the certification body before completing the remainder of the site audit, given the vulnerable patient population involved, which is the interpretation most commonly applied across the industry.",
                    "correct": false
                },
                {
                    "text": "Recommend the Catering Unit's hospital contracts be suspended immediately until the scope document is formally revised and reissued.",
                    "correct": false
                },
                {
                    "text": "Verify exactly what food safety activities the Catering Unit now performs — plating, holding, direct service — to establish the real boundary gap, not just the commercial fact of expansion.",
                    "correct": true
                },
                {
                    "text": "Close this as resolved, since the Group Food Safety Team Leader already confirmed awareness of the expansion during the interview.",
                    "correct": false
                }
            ],
            "rationale": "The auditor's job is establishing the factual boundary gap through evidence, not prescribing business remedies (suspension) or treating an interview admission alone as sufficient closure. Escalating externally before completing internal audit process and informing management first breaks the normal reporting sequence.",
            "lms_direction": "Review LMS Activity 4.1 — Establishing the Real Operational Boundary."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 2",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The alfredo sauce uses the same CCP1 cook-step limit validated for tomato-basil sauce, with no documented re-validation for the new product's different viscosity and fat content. What is the correct audit conclusion?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to a paperwork gap, since the marketing and packaging review shows the new product was properly reviewed before launch.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since both products use the identical cook step and equipment, making a validation difference unlikely in practice.",
                    "correct": false
                },
                {
                    "text": "No finding, since the same numeric time-temperature limit was applied consistently across both products on the same equipment.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Clause 8.5.2 — a hazard control plan's validation must hold for the actual product and process it's applied to, and fat/viscosity differences can materially change heat penetration.",
                    "correct": true
                }
            ],
            "rationale": "Validation must be scientifically grounded in the specific product's characteristics, not just a consistently-applied number. Fat content and viscosity are well-established factors affecting heat penetration and pathogen lethality, meaning the marketing/packaging-only review captured the wrong kind of evidence entirely.",
            "lms_direction": "Review LMS Activity 8.5.2 — Validation of Control Measures for New Products."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 2",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "What evidence would most directly confirm whether the alfredo sauce's hazard analysis was properly updated, as opposed to simply reused?",
            "options": [
                {
                    "text": "Sales figures showing the alfredo product has performed well commercially since launch, with no customer complaints received to date.",
                    "correct": false
                },
                {
                    "text": "A documented food safety team review specifically evaluating the new product's hazard profile and CCP validation, separate from the marketing/packaging launch review already on file.",
                    "correct": true
                },
                {
                    "text": "A general statement from the Plant Manager that the food safety team was 'definitely involved' in some capacity during the product's development, reflecting standard practice at comparable facilities of similar size and scope.",
                    "correct": false
                },
                {
                    "text": "Confirmation that the same equipment and production line were used for both the tomato-basil and alfredo products throughout the launch period.",
                    "correct": false
                }
            ],
            "rationale": "The core gap is that no food safety-specific review exists at all — only a marketing/packaging one. Equipment continuity, sales performance, and an unverified verbal assurance are all irrelevant to or insufficient for confirming the specific scientific validation Clause 8.5.2 requires.",
            "lms_direction": "Review LMS Activity 8.5.2 — Evidence of Food Safety Team Sign-Off."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 3",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The pest control station map shows 42 stations, but 46 physical stations exist on-site, with four unmapped stations near a new loading dock extension showing no service records. What is the strongest finding?",
            "options": [
                {
                    "text": "A Nonconformity against PRP pest management requirements — unmapped, unserviced stations mean the pest control programme cannot demonstrate coverage of the entire facility, including a newer high-risk entry point.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity confined purely to a mapping documentation error, unrelated to the actual pest control coverage being provided on-site.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since the loading dock extension is a recent addition that the pest control contractor may not yet know about, an approach many organizations consider adequate for day-to-day operational purposes.",
                    "correct": false
                },
                {
                    "text": "No finding, since 42 of the 46 stations are properly mapped and serviced, representing the clear majority of the programme's overall coverage.",
                    "correct": false
                }
            ],
            "rationale": "A pest programme is only as good as its actual coverage — four unmapped, unserviced stations near a new external access point is a genuine, unaddressed vulnerability, not just a paperwork gap or a 'mostly fine' majority-coverage situation. Not knowing about a facility change is itself a communication failure the auditor should probe.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-1 — Pest Control Programme Coverage."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 3",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The changeover log shows the wet clean was performed, but the allergen verification swab result is blank with the note 'ran out of time, next batch felt OK.' How should this be classified?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to incomplete recordkeeping, since the wet clean itself was documented as having been fully completed as scheduled.",
                    "correct": false
                },
                {
                    "text": "No finding, since 'felt OK' from an experienced line operator is a reasonable practical substitute when time pressure genuinely limits testing.",
                    "correct": false
                },
                {
                    "text": "Likely a significant Nonconformity — skipping allergen verification after a milk-based product changeover, then relying on subjective sensory judgement instead, defeats the purpose of the whole control.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since this appears to be a one-off time-pressure incident rather than a documented pattern across changeovers.",
                    "correct": false
                }
            ],
            "rationale": "Sensory judgement cannot detect allergen protein carryover — substituting it for a validated verification swab defeats the control's actual purpose, especially feeding directly into the labelling risk raised in Paragraph 5. This isn't merely a records gap; it's the control itself not actually happening.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.6 — Allergen Cross-Contact Verification."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 4",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "No hygienic design risk assessment exists for the new printing unit, and metal shavings were observed in its drip tray with no foreign body incident log entry. What is the most defensible finding?",
            "options": [
                {
                    "text": "A Nonconformity against ISO/TS 22002-4 hygienic design requirements — the missing risk assessment and the unlogged foreign body evidence are two connected failures of the same control objective.",
                    "correct": true
                },
                {
                    "text": "No finding regarding the shavings specifically, since metal shavings in a drip tray are a normal, expected byproduct of routine printing equipment operation, which aligns with common industry expectations for this type of activity.",
                    "correct": false
                },
                {
                    "text": "Two unrelated, separate Minor Nonconformities, since a missing risk assessment document and an unlogged observation are procedurally distinct issues.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since the equipment was purchased from a reputable supplier with established food-grade manufacturing credentials.",
                    "correct": false
                }
            ],
            "rationale": "The missing risk assessment and the observed foreign-body evidence are the same story, not two unrelated issues — the very risk a hygienic design assessment exists to catch is playing out unmonitored in front of the auditor. Supplier reputation doesn't substitute for the organization's own documented risk assessment obligation.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-4 — Hygienic Design of New Equipment."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 4",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The Technical Manager states the new printing unit was 'pre-approved by the supplier as food-grade,' treating this as equivalent to the organization's own hygienic design risk assessment obligation. How should the auditor respond?",
            "options": [
                {
                    "text": "Record the quote but take no further action, since a manager's stated belief about compliance is not itself objective evidence of a nonconformity.",
                    "correct": false
                },
                {
                    "text": "Accept the explanation as sufficient, since supplier food-grade certification is generally considered the industry-standard baseline for hygienic equipment sourcing, a judgement call that reasonably experienced staff would likely support.",
                    "correct": false
                },
                {
                    "text": "Challenge the equivalence directly — supplier food-grade certification addresses materials and general design, not the organization's own site-specific installation, cleanability, and foreign-body risk assessment obligation.",
                    "correct": true
                },
                {
                    "text": "Recommend the equipment be replaced immediately with a different supplier's model that includes a full hygienic design certificate as standard.",
                    "correct": false
                }
            ],
            "rationale": "This distinguishes a supplier's general product-level food-grade claim from the organization's own site-specific risk assessment duty — accepting the substitution outright, or dismissing the statement as irrelevant, both miss that this reveals a genuine gap in understanding of the requirement's actual owner. Prescribing a specific fix is consulting, not auditing.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-4 — Supplier Certification vs. Organizational Risk Assessment."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 5",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The tomato-basil sauce is labelled 'Dairy-Free,' but its label validation file predates the alfredo product and the changeover verification gap from Paragraph 3. What is the most significant risk this reveals?",
            "options": [
                {
                    "text": "No meaningful risk, since the allergen matrix itself already correctly identifies milk as the allergen introduced specifically by the alfredo sauce recipe.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since front-of-pack claims are a marketing function that sits outside the core food safety management system's scope.",
                    "correct": false
                },
                {
                    "text": "An undisclosed allergen cross-contact risk to a 'Dairy-Free' claim — combined with the skipped verification swab, there is no current evidence supporting that front-of-pack claim's continued validity.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited only to outdated file organization, since the underlying tomato-basil recipe formulation itself has not changed at all.",
                    "correct": false
                }
            ],
            "rationale": "The allergen matrix correctly identifying milk in the alfredo product doesn't address whether cross-contact reaches the DIFFERENT product carrying a 'Dairy-Free' claim — that connection is exactly what's missing, and it's a genuine consumer-facing safety claim, not a marketing-only concern outside FSMS scope.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.2 — Label Claims and Validation Currency."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 5",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "What evidence would most directly confirm the 'Dairy-Free' label claim is currently supportable?",
            "options": [
                {
                    "text": "The absence of any customer complaints related to dairy allergic reactions since the tomato-basil sauce was first launched to market.",
                    "correct": false
                },
                {
                    "text": "A documented cross-contact risk assessment for tomato-basil sauce specifically addressing shared-line production with the alfredo product, supported by verified swab results.",
                    "correct": true
                },
                {
                    "text": "Confirmation that the tomato-basil sauce recipe itself contains no dairy ingredients according to its original, unmodified product formulation, which is the interpretation most commonly applied across the industry.",
                    "correct": false
                },
                {
                    "text": "A general company policy statement committing to allergen control best practices across all product lines and manufacturing sites.",
                    "correct": false
                }
            ],
            "rationale": "Recipe formulation alone doesn't address cross-contact risk from shared-line production — that's the entire point of the gap identified. A general policy statement is aspirational, not verification, and absence of complaints is weak, reactive evidence rather than the proactive verification a label claim requires.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.2 — Verifying Free-From Claims."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 6",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The Food Fraud Vulnerability Assessment rates olive oil as 'Low' vulnerability, citing only 'long-standing supplier relationship,' without addressing olive oil's known industry history of adulteration. What is the correct finding?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to a citation-formatting issue, since 'Low' may still be the correct final rating regardless of how it's justified.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Additional Requirement 2.5.4 — a vulnerability assessment must consider known commodity-level fraud history, not rely solely on relationship tenure as its justification.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since food fraud vulnerability assessments are inherently subjective judgement calls without a single correct answer.",
                    "correct": false
                },
                {
                    "text": "No finding, since a long-standing supplier relationship is a genuinely valid and commonly accepted risk-mitigating factor in vulnerability assessments generally, a position that is generally considered reasonable under normal circumstances.",
                    "correct": false
                }
            ],
            "rationale": "Relationship tenure says nothing about a supplier's own upstream supply chain vulnerability to substitution — a robust VA must weigh known commodity-level fraud history (olive oil is one of the most-cited examples globally) regardless of how long the relationship has existed. This is a substantive gap in the assessment's method, not a formatting or purely subjective issue.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.4 — Food Fraud Vulnerability Assessment Method."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 6",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The Food Defence Plan has not been updated since a new loading dock extension created an unmonitored access point between the public delivery yard and raw ingredient storage. What is the correct classification approach?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since food defence plans are inherently a lower priority than food safety hazard controls like CCPs.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity only if it can be shown an actual intentional adulteration incident has already occurred at this new access point.",
                    "correct": false
                },
                {
                    "text": "No finding, since the plan is reviewed annually as required, and the loading dock extension may not yet have reached that scheduled review point.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Additional Requirement 2.5.3 — the plan must be reviewed when significant changes occur, and an unmonitored new access point is exactly the kind of change that requires it.",
                    "correct": true
                }
            ],
            "rationale": "2.5.3 requires review at least annually OR when significant changes occur or new threats are identified — waiting for the next calendar review after a genuine physical access change defeats the requirement's preventive purpose. Requiring proof of an actual incident, or treating defence as lower priority than hazard controls, both misunderstand the requirement's intent.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.3 — Triggers for Food Defence Plan Review."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 7",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The automated temperature logger recorded a 55-minute excursion above 8°C during a documented refrigeration fault, but the manual paper log for the same day shows both checks as 'OK, 4°C' with no cross-check between the two systems. What is the strongest finding?",
            "options": [
                {
                    "text": "A Nonconformity against PRP cold chain control — the two monitoring systems directly contradict each other, and the absence of any cross-check process means the discrepancy could recur undetected.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since the refrigeration fault itself was documented and presumably already addressed through separate maintenance action, an approach many organizations consider adequate for day-to-day operational purposes.",
                    "correct": false
                },
                {
                    "text": "No finding, since the automated logger is the more technically reliable of the two systems and correctly captured the actual excursion event.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited strictly to the manual log's specific entry, unrelated to the overall reliability of the cold chain monitoring system.",
                    "correct": false
                }
            ],
            "rationale": "The core issue isn't which system is more reliable — it's that nobody is reconciling them, meaning a genuine excursion was invisible in the record staff actually rely on day to day. Treating this as confined to one log entry, or resolved because the fault was fixed, both miss the systemic reconciliation gap.",
            "lms_direction": "Review LMS Activity PRP Cold Chain Monitoring — Cross-Verification Between Systems."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 7",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The Environmental Monitoring Programme has swabbed the same six fixed sites monthly for three years without ever rotating or adding sites, despite two loading area layout changes in that time. What is the correct evaluation?",
            "options": [
                {
                    "text": "Likely a Nonconformity against Additional Requirement 2.5.5 — an environmental monitoring programme must evolve with facility changes to remain representative of actual contamination risk zones.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since environmental monitoring results have apparently remained negative throughout the three-year testing period, consistent with how this requirement is typically applied in practice.",
                    "correct": false
                },
                {
                    "text": "No finding, since monthly swabbing at six sites is a reasonable, defensible testing frequency and coverage level for most manufacturing environments.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to a documentation update, since the six original sites were presumably chosen correctly when first established.",
                    "correct": false
                }
            ],
            "rationale": "A static site list that never reflects real facility changes stops being representative of where risk actually lives — negative results over time could reflect genuine control, or could reflect testing the wrong locations entirely, which is exactly the ambiguity a fixed, unreviewed programme creates.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.5 — Environmental Monitoring Programme Currency."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 8",
            "type": "single_select",
            "exhibit_ref": "finding_severity_matrix",
            "text": "Two trays of prepared meals were found at 54°C for approximately twenty minutes during unannounced observation, after the usual temperature-check staff member was reassigned without handover — yet the shift's own log shows all checks as compliant. What is the most significant finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since twenty minutes below the holding threshold is a relatively brief window compared to typical service durations.",
                    "correct": false
                },
                {
                    "text": "A likely Major Nonconformity — hot-holding failure for high-risk, immunocompromised hospital patients combined with a log that doesn't reflect what was actually observed is a serious, credibility-damaging combination.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited to the staffing handover gap, since the temperature excursion itself was caught and corrected once a supervisor noticed.",
                    "correct": false
                },
                {
                    "text": "No finding, since a supervisor did ultimately intervene before the meals reached the vulnerable hospital patients this incident could have affected.",
                    "correct": false
                }
            ],
            "rationale": "This combines a genuine hazard (hot-holding failure for a vulnerable population) with an inaccurate record — the log discrepancy is arguably more serious than the temperature event alone, since it undermines confidence in every other 'compliant' entry the Catering Unit has ever recorded. Correction after the fact doesn't erase either the hazard or the record integrity problem.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-2 — Hot-Holding Control and Record Integrity in Catering."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 9",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "Neither the new printing unit nor the new metal detector appear in the Equipment Management register, and the metal detector's commissioning validation report cannot be located. What is the correct audit conclusion?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since both pieces of equipment have apparently been operating without any reported incident since installation.",
                    "correct": false
                },
                {
                    "text": "A likely Nonconformity against Additional Requirement 2.5.8 — both pieces of equipment were purchased after the procedure's effective date, and missing validation evidence for a metal detector is a direct hazard-control gap.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited to the Packaging Division's printing unit only, since a metal detector's validation is separately covered under Clause 8.5, a judgement call that reasonably experienced staff would likely support.",
                    "correct": false
                },
                {
                    "text": "No finding, since the Plant Engineer verbally confirmed the metal detector's commissioning validation was 'definitely done' during the interview.",
                    "correct": false
                }
            ],
            "rationale": "A verbal assurance without located paperwork is not evidence — for a metal detector specifically, unvalidated commissioning is a direct gap in a physical hazard control, not a lesser documentation-only issue. Treating this as confined to one site or reassured by absence-of-incident both understate a systemic register and validation failure.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.8 — Equipment Management Register Currency."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 10",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "The Catering Unit — the newest, highest-risk site — has not been internally audited since its scope expansion eight months ago and is not scheduled until month sixteen of an eighteen-month cycle. What is the correct evaluation?",
            "options": [
                {
                    "text": "No finding, since all four sites remain formally within the eighteen-month audit cycle as originally planned and documented.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to a scheduling inconvenience, since month sixteen still falls within the overall approved audit programme timeframe, based on how most sites in this sector typically operate in practice.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Clause 9.2 — an internal audit programme should prioritize higher-risk sites and activities, not apply a flat calendar schedule regardless of known risk changes.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since audit programme sequencing is generally considered a purely administrative planning decision.",
                    "correct": false
                }
            ],
            "rationale": "9.2 expects audit programmes to be planned considering the importance of the processes and results of previous audits and evaluations — a flat calendar schedule that doesn't respond to a known, recent, high-risk expansion undermines that risk-based intent, even if every site is technically 'within' the cycle on paper.",
            "lms_direction": "Review LMS Activity 9.2 — Risk-Based Internal Audit Programme Sequencing."
        },
        {
            "category": "Case Study — Golden Harvest Foods Group",
            "section": "Paragraph 10",
            "type": "single_select",
            "exhibit_ref": "audit_story",
            "text": "Management Review minutes record 'food safety culture' and 'internal audit results' as reviewed with 'no major concerns,' despite several known gaps — including the pest station gap, the swab gap, and the Catering Unit's audit delay — already being known to the Group Food Safety Team Leader. What is the correct evaluation?",
            "options": [
                {
                    "text": "A likely Nonconformity against Clause 9.3 — a management review that omits known, relevant issues from its record raises doubt about whether inputs were genuinely and evidence-based reviewed, not just formally listed as agenda items.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since management review content depth is generally considered a matter of organizational discretion and preference.",
                    "correct": false
                },
                {
                    "text": "No finding, since both required agenda items were technically listed and discussed in the minutes as Clause 9.3 requires them to be.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to minute-taking style, since the substance of the discussion may simply not have been fully captured in writing.",
                    "correct": false
                }
            ],
            "rationale": "Listing a topic as 'reviewed' with 'no major concerns' when known significant issues existed at the time is a substantive gap, not a note-taking style choice — this is precisely the same pattern this course has flagged before: passive topic-listing is not equivalent to genuine, evidence-based evaluation.",
            "lms_direction": "Review LMS Activity 9.3 — Substantive vs. Superficial Management Review."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 4.1",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An auditor asks how the organization determined external issues relevant to its FSMS. The Food Safety Manager cites only 'the usual regulations,' with no reference to raw material availability, climate-related supply risk, or emerging pathogen trends. What is the most defensible finding?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to how the answer was phrased verbally, since a more complete context analysis may exist in writing elsewhere.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since external context determination is a largely conceptual exercise with limited practical bearing on daily operations, a position that is generally considered reasonable under normal circumstances.",
                    "correct": false
                },
                {
                    "text": "No finding, since regulatory compliance is widely considered the single most important external issue any food business needs to actively track.",
                    "correct": false
                },
                {
                    "text": "A likely Nonconformity against Clause 4.1 — external context determination is expected to be broader than regulatory compliance alone, including supply and emerging hazard trends relevant to the organization.",
                    "correct": true
                }
            ],
            "rationale": "4.1 expects a genuinely broad external scan, and regulatory compliance, while important, is only one input among several — supply risk and emerging hazard trends are exactly the kind of context a mature FSMS should be actively tracking, not treating as optional extras.",
            "lms_direction": "Review LMS Activity 4.1 — Breadth of External Context Determination."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 4.2",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Under Clause 4.2, an organization's determination of interested parties must specifically include parties whose requirements could affect the organization's ability to consistently provide safe products, not merely a generic list of common stakeholder categories.",
            "options": [
                {
                    "text": "True",
                    "correct": true
                },
                {
                    "text": "False",
                    "correct": false
                }
            ],
            "rationale": "4.2's test is functional relevance — does this party's requirement actually bear on food safety outcomes — not just completeness of a generic stakeholder category list. A regulator, a certification body, and a specific allergic customer segment might all matter in ways a generic list would miss.",
            "lms_direction": "Review LMS Activity 4.2 — Functional Relevance of Interested Parties."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 5.1",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "Top management states that food safety is 'the Food Safety Team's job' and describes their own role as 'signing off the budget when asked.' Which requirement is most directly at risk?",
            "options": [
                {
                    "text": "Clause 7.1, since the real issue here is that the organization's overall resourcing levels are likely inadequate to properly support the FSMS.",
                    "correct": false
                },
                {
                    "text": "Clause 5.1 — demonstrating leadership and commitment, including active accountability for FSMS effectiveness, not simply approving resource requests when they happen to arrive.",
                    "correct": true
                },
                {
                    "text": "Clause 5.3, since defining a distinct Food Safety Team role is a normal, expected, and entirely appropriate delegation of operational responsibility.",
                    "correct": false
                },
                {
                    "text": "Nothing significant — Clause 5.1's leadership requirements are understood to apply specifically to the Food Safety Team Leader, not top management personally, reflecting standard practice at comparable facilities of similar size and scope.",
                    "correct": false
                }
            ],
            "rationale": "5.1 explicitly requires TOP MANAGEMENT'S own demonstrated leadership and accountability, not passive budget approval. Delegating operational work to a Food Safety Team is normal and expected; reducing top management's own role to reactive sign-off is the actual gap.",
            "lms_direction": "Review LMS Activity 5.1 — Leadership Accountability Beyond Budget Approval."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 5.2",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's Food Safety Policy is a single generic paragraph committing to 'producing safe food,' unchanged since the company's founding, with no reference to its current food chain categories, its multi-site structure, or continual improvement. What is the correct evaluation?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since food safety policies are generally expected to remain stable and unchanged over an organization's lifetime.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Clause 5.2 — the policy must be appropriate to the organization's specific purpose and context, which a static, generic statement fails to reflect as the organization has grown.",
                    "correct": true
                },
                {
                    "text": "No finding, since the core commitment to producing safe food is the fundamental and most important substance any food safety policy needs to contain.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to the policy's writing style, since the underlying commitment itself appears genuine and has not actually changed.",
                    "correct": false
                }
            ],
            "rationale": "5.2 requires the policy to be appropriate to the organization's purpose AND context — a policy that hasn't evolved as the organization added sites, categories, and complexity fails that appropriateness test, regardless of how genuine the underlying sentiment is.",
            "lms_direction": "Review LMS Activity 5.2 — Policy Appropriateness as the Organization Evolves."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 6.1",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's risk and opportunity register lists 'supplier fraud' as a risk with no documented action plan, and the Food Safety Manager explains 'we just keep an eye on it informally.' What is missing?",
            "options": [
                {
                    "text": "Evidence that planned actions to address this risk were actually determined and integrated into FSMS processes, as 6.1 requires beyond simply identifying and monitoring the risk.",
                    "correct": true
                },
                {
                    "text": "Nothing — informal ongoing awareness of a risk is generally accepted as fully sufficient under Clause 6.1's requirements for addressing risks and opportunities, consistent with how this requirement is typically applied in practice.",
                    "correct": false
                },
                {
                    "text": "A separate, formally documented risk register entirely distinct from the food fraud vulnerability assessment already required elsewhere in the scheme.",
                    "correct": false
                },
                {
                    "text": "Confirmation that this risk has been formally escalated to and accepted in writing by the organization's board of directors specifically.",
                    "correct": false
                }
            ],
            "rationale": "6.1 requires planning ACTIONS to address risks, not just identifying and informally monitoring them — 'keeping an eye on it' is not a planned action with any traceable integration into FSMS processes. A separate register or board-level sign-off aren't what's specifically missing here; a genuine action plan is.",
            "lms_direction": "Review LMS Activity 6.1 — From Risk Identification to Planned Action."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 6.2",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Food safety objectives under Clause 6.2 must be measurable and monitored, but the standard does not require them to be consistent with or traceable back to the organization's own Food Safety Policy.",
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
            "rationale": "6.2 explicitly requires objectives to be consistent with the food safety policy, in addition to being measurable, monitored, communicated, and updated as appropriate — policy consistency is not optional, it's one of the clause's own stated requirements.",
            "lms_direction": "Review LMS Activity 6.2 — Objectives Must Trace to Policy."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 6.3",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "The Packaging Division installed a new high-speed printing unit and began production without any documented planning of change under Clause 6.3, addressing potential consequences for the existing FSMS. What is the correct finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since equipment upgrades are routine operational decisions that don't typically require formal FSMS change planning, which aligns with common industry expectations for this type of activity.",
                    "correct": false
                },
                {
                    "text": "No finding, since the change was ultimately a positive business decision that increased production capacity to meet the alfredo launch's demand.",
                    "correct": false
                },
                {
                    "text": "A likely Nonconformity against Clause 6.3 — planning of changes requires considering the purpose of the change and its potential consequences before implementation, not after equipment is already running.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited only to missing paperwork, since the equipment itself may still be functioning safely regardless of formal planning steps.",
                    "correct": false
                }
            ],
            "rationale": "6.3 requires the ORGANIZATION to plan changes in a controlled manner, considering purpose and consequences — the absence of that planning is itself the nonconformity, independent of whether the change later turns out to be commercially positive or whether the equipment happens to function without incident so far.",
            "lms_direction": "Review LMS Activity 6.3 — Planning of Changes to the FSMS."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 5.3",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's Food Safety Team Leader also holds full authority over production output targets and is evaluated primarily on production volume, with no separate performance metric tied to food safety outcomes. What is the most significant concern?",
            "options": [
                {
                    "text": "A potential conflict of interest undermining the independence Clause 5.3 expects of the Food Safety Team Leader's authority to halt or adjust production for safety reasons.",
                    "correct": true
                },
                {
                    "text": "No concern, since combining production and food safety leadership into a single role is a common and efficient organizational structure in smaller companies.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since performance evaluation criteria are generally considered an HR matter outside the FSMS audit's proper scope.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to job title terminology, since the actual authority and reporting lines may still function appropriately in practice.",
                    "correct": false
                }
            ],
            "rationale": "5.3 expects the Food Safety Team Leader to have the authority to act on food safety matters — when that person's own incentives are weighted entirely toward production volume, their willingness to exercise that authority against production interests becomes genuinely questionable, which is squarely an FSMS-relevant concern, not just an HR one.",
            "lms_direction": "Review LMS Activity 5.3 — Independence of the Food Safety Team Leader's Authority."
        },
        {
            "category": "ISO 22000:2018 — Context, Leadership & Planning (Clauses 4-6)",
            "section": "Clause 4.3",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "Which scenario represents the clearest nonconformity against Clause 4.3 for a multi-site certified organization?",
            "options": [
                {
                    "text": "A newly acquired site performing activities within the certified food chain categories is operating for six months under the group's FSMS without being added to the certified scope.",
                    "correct": true
                },
                {
                    "text": "The scope document was last formally reviewed nine months ago, shortly before the current internal audit cycle's scheduled review point.",
                    "correct": false
                },
                {
                    "text": "The scope includes a site that operates below its full production capacity due to current seasonal demand patterns affecting the wider business.",
                    "correct": false
                },
                {
                    "text": "The scope statement includes a brief, one-paragraph description of each site's primary activity rather than an extensively detailed process-by-process breakdown, based on how most sites in this sector typically operate in practice.",
                    "correct": false
                }
            ],
            "rationale": "An operating site performing in-category activities but excluded from the certified scope for six months is a genuine, material boundary failure — brief scope descriptions, a routine nine-month review gap, and under-capacity operation are not inherently nonconformities on their own.",
            "lms_direction": "Review LMS Activity 4.3 — Scope Currency for Multi-Site Certification."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 7.1.6",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization outsources its pest control and calibration services but has no documented control over how these externally provided processes are specified, verified, or evaluated for ongoing performance. What is the correct finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since externally provided services are generally considered lower priority than internally performed FSMS processes.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to contract paperwork, since the actual services are presumably being performed correctly by qualified providers regardless, which is the interpretation most commonly applied across the industry.",
                    "correct": false
                },
                {
                    "text": "A likely Nonconformity against Clause 7.1.6 — externally provided processes affecting food safety must be controlled, including specifying requirements and verifying the provider's ongoing performance.",
                    "correct": true
                },
                {
                    "text": "No finding, since outsourcing specialized services like pest control and calibration to external experts is standard, widely accepted industry practice.",
                    "correct": false
                }
            ],
            "rationale": "Outsourcing itself is fine and common — the gap is the absence of documented control over WHAT is specified and HOW performance is verified, which 7.1.6 explicitly requires regardless of how standard or expert the provider is assumed to be.",
            "lms_direction": "Review LMS Activity 7.1.6 — Control of Externally Provided Processes."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 7.2",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A newly hired quality technician responsible for interpreting environmental monitoring swab results has no documented microbiology training, though they hold a general food science degree. What should the auditor probe further?",
            "options": [
                {
                    "text": "Whether the technician's degree was obtained from an institution formally accredited by the relevant national higher-education authority.",
                    "correct": false
                },
                {
                    "text": "Whether the technician is being paid a salary commensurate with their formal educational qualification level relative to industry benchmarks.",
                    "correct": false
                },
                {
                    "text": "Whether the specific competence needed to correctly interpret environmental swab results — not just a general qualification — has actually been assessed and evidenced.",
                    "correct": true
                },
                {
                    "text": "Nothing further, since a food science degree is a broadly relevant qualification that reasonably covers this kind of specific interpretive task.",
                    "correct": false
                }
            ],
            "rationale": "7.2 requires competence specific to the task being performed, not a generic credential — a general food science degree doesn't automatically establish the specific interpretive skill needed for environmental monitoring result analysis, which is exactly what should be probed.",
            "lms_direction": "Review LMS Activity 7.2 — Task-Specific vs. General Competence."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 7.4",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Clause 7.4 requires an organization to have a documented procedure for communicating with external parties such as regulators and customers regarding food safety, including in emergency situations.",
            "options": [
                {
                    "text": "True",
                    "correct": true
                },
                {
                    "text": "False",
                    "correct": false
                }
            ],
            "rationale": "7.4 requires establishing, implementing, and maintaining a procedure for internal and external communication relevant to the FSMS, and food safety-related emergencies are explicitly one of the situations this communication requirement is meant to cover.",
            "lms_direction": "Review LMS Activity 7.4 — External Communication Including Emergencies."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 7.5",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "The current Cleaning and Sanitation Master Schedule referenced during the audit is a printed copy dated eighteen months ago, while the document control system shows three subsequent revisions were approved and issued since then. What is the significance?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since three revisions in eighteen months likely indicates only minor, incremental changes rather than substantive ones, reflecting standard practice at comparable facilities of similar size and scope.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to print-management logistics, since digital document control systems are understood to be the authoritative reference point.",
                    "correct": false
                },
                {
                    "text": "A likely Nonconformity against Clause 7.5.3 — an obsolete document is in active use at the point of work, meaning staff may be following requirements the organization has since changed.",
                    "correct": true
                },
                {
                    "text": "No finding, since the current, correct version does technically exist and is accessible somewhere within the organization's document control system.",
                    "correct": false
                }
            ],
            "rationale": "7.5.3 is about the right version being available where it's actually used, not just existing correctly somewhere in a system — an eighteen-month-old printed copy in active use means staff could be following superseded cleaning requirements without knowing it.",
            "lms_direction": "Review LMS Activity 7.5.3 — Control of Documented Information at the Point of Use."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.2",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's PRP programme documentation exists for all required topics but was never validated against the organization's own specific hazard analysis to confirm the selected PRPs are appropriate to its actual products and processes. What is the correct evaluation?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to a cross-referencing gap between two separately maintained sets of documents that otherwise both individually exist.",
                    "correct": false
                },
                {
                    "text": "No finding, since covering all the standard PRP topics recognized within the sector is generally sufficient regardless of specific validation.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since PRPs are widely considered generic, foundational programmes not requiring organization-specific customization, an approach many organizations consider adequate for day-to-day operational purposes.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Clause 8.2 — PRPs must be established, implemented, and maintained to assist in controlling the likelihood of hazards specific to the organization, which requires more than generic topic coverage.",
                    "correct": true
                }
            ],
            "rationale": "Generic topic coverage is a starting point, not the finish line — 8.2 expects PRPs to genuinely help control the hazards THIS organization's hazard analysis actually identified, which requires the two to be connected, not maintained as separate, unvalidated document sets.",
            "lms_direction": "Review LMS Activity 8.2 — PRPs Must Be Validated Against the Organization's Own Hazard Analysis."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.5.1",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "During hazard identification, the food safety team lists 'Salmonella' as a biological hazard for raw poultry-containing sauces but has not documented an acceptable level for this hazard in the finished product, citing 'zero tolerance is obviously understood.' What is missing?",
            "options": [
                {
                    "text": "Confirmation from an external food safety consultant that zero tolerance is indeed the scientifically and legally correct acceptable level.",
                    "correct": false
                },
                {
                    "text": "A documented acceptable level for the hazard in the end product, since 8.5.1 requires this to be determined and recorded, not simply assumed as commonly understood.",
                    "correct": true
                },
                {
                    "text": "Nothing — zero tolerance for Salmonella in ready-to-eat products is a universally accepted regulatory standard that doesn't require organization-specific documentation.",
                    "correct": false
                },
                {
                    "text": "A separate risk assessment entirely distinct from the hazard analysis, specifically dedicated to Salmonella as an individually named pathogen.",
                    "correct": false
                }
            ],
            "rationale": "8.5.1 requires the acceptable level to be actually determined and documented as part of the hazard analysis, not left as an unstated assumption — even a widely-understood standard like zero tolerance needs to be captured as the organization's own documented determination, tied to its specific product and regulatory context.",
            "lms_direction": "Review LMS Activity 8.5.1 — Documenting Acceptable Levels for Identified Hazards."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.5.2",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A hazard control plan lists a metal detector as a Critical Control Point, but the validation record on file only confirms the detector's sensitivity settings meet the manufacturer's specification, with no reference to the specific product characteristics or hazard levels the organization itself needs to control. What is the correct finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since metal detection is widely regarded as an inherently reliable and low-risk control measure category.",
                    "correct": false
                },
                {
                    "text": "No finding, since manufacturer specification compliance is the most objective and reliable form of equipment validation evidence generally available, which aligns with common industry expectations for this type of activity; a judgement call that reasonably experienced staff would likely support.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to a documentation cross-reference gap between two records that both independently already exist and are accurate.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Clause 8.5.2 — validation must confirm the control measure achieves the intended control of the specific hazard for the organization's own product, not just meet generic manufacturer specifications.",
                    "correct": true
                }
            ],
            "rationale": "Manufacturer specification tells you the equipment CAN detect metal at a given sensitivity — it doesn't confirm that sensitivity is actually appropriate for the specific product matrix and hazard level the organization needs to control, which is precisely what 8.5.2's validation requirement is meant to establish.",
            "lms_direction": "Review LMS Activity 8.5.2 — Validation Must Be Product- and Hazard-Specific."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.5.4",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Under Clause 8.5.4, the hazard control plan must specify monitoring procedures for each CCP, but critical limits may remain undocumented as long as operators have been verbally trained on the correct values.",
            "options": [
                {
                    "text": "False",
                    "correct": true
                },
                {
                    "text": "True",
                    "correct": false
                }
            ],
            "rationale": "8.5.4 requires critical limits to be documented as part of the hazard control plan, not left to verbal training alone — undocumented limits create both a verification gap (how would an auditor or new operator confirm the correct value?) and a single point of failure if the trained operator is unavailable.",
            "lms_direction": "Review LMS Activity 8.5.4 — Documentation of Critical Limits."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.7",
            "type": "single_select",
            "exhibit_ref": "finding_severity_matrix",
            "text": "A recipe reformulation changed a sauce's sugar content, which affects water activity and therefore its microbial stability profile, but the hazard control plan was not updated to reflect this, and production continued using the original plan. What is the correct classification?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since water activity changes of this kind are unlikely to meaningfully affect microbial stability in most sauces.",
                    "correct": false
                },
                {
                    "text": "Likely a significant Nonconformity against Clause 8.7 — updates to information affecting the hazard control plan must be reflected before or promptly upon the change, especially when a food safety-relevant parameter shifts.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited to a paperwork lag, since the reformulation was presumably tested for taste and quality before being released to production, a judgement call that reasonably experienced staff would likely support.",
                    "correct": false
                },
                {
                    "text": "No finding, since sugar content changes are a common recipe adjustment that manufacturing teams routinely make without requiring formal FSMS review.",
                    "correct": false
                }
            ],
            "rationale": "Water activity is a well-established, direct driver of microbial growth potential — a sugar content change altering it is exactly the kind of update 8.7 requires to be reflected in the hazard control plan, regardless of whether taste-and-quality testing (a different concern entirely) was separately done.",
            "lms_direction": "Review LMS Activity 8.7 — Updating Information That Affects the Hazard Control Plan."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.9",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A finished batch of sauce was found to have a pH reading outside the validated safe range, but production staff released it after a supervisor 'eyeballed' the product and judged it looked and smelled normal. What is the correct evaluation?",
            "options": [
                {
                    "text": "No finding, since the product was ultimately released without any known adverse customer outcome resulting from this specific decision.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since pH deviations are common in sauce production and don't necessarily indicate an actual safety problem.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to recordkeeping, since sensory evaluation by an experienced supervisor is a reasonably reliable quality-control substitute in practice.",
                    "correct": false
                },
                {
                    "text": "A likely Major Nonconformity against Clause 8.9 — control of nonconforming product requires evaluation against documented criteria, and sensory judgement is not a valid substitute for the validated safety parameter that was actually breached.",
                    "correct": true
                }
            ],
            "rationale": "Sensory judgement cannot detect the specific hazard a validated pH limit exists to control — substituting it for documented evaluation criteria when a batch is known to be outside its validated range is a serious, direct hazard-control bypass, not a minor recordkeeping issue.",
            "lms_direction": "Review LMS Activity 8.9 — Control of Nonconforming Products and Sensory Judgement."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.4",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Clause 8.4 (Emergency preparedness and response) requires organizations to periodically test their emergency procedures, such as through simulation exercises, and not merely have a documented plan on file.",
            "options": [
                {
                    "text": "True",
                    "correct": true
                },
                {
                    "text": "False",
                    "correct": false
                }
            ],
            "rationale": "8.4 expects emergency preparedness to be genuinely operational, which is why testing (e.g., simulation exercises, mock recalls) is expected practice — an untested plan provides no real assurance it will work when an actual emergency, such as a product recall, occurs.",
            "lms_direction": "Review LMS Activity 8.4 — Testing Emergency Preparedness, Not Just Documenting It."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.5.1.3",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "For Category I (Packaging Manufacturing) and Category C (Manufacturing) organizations, hazard analysis must specifically consider the functional effect of packaging on food safety — for example, oxygen barrier properties preventing pathogen growth. Which scenario represents a gap in this specific requirement?",
            "options": [
                {
                    "text": "A hazard analysis addresses microbiological, chemical, and physical hazards for the food product itself in appropriate and comprehensive technical detail, which is the interpretation most commonly applied across the industry.",
                    "correct": false
                },
                {
                    "text": "A hazard analysis references the packaging supplier's material specification sheet as part of its broader supporting documentation set.",
                    "correct": false
                },
                {
                    "text": "A hazard analysis for a modified-atmosphere-packaged product does not address what happens to product safety if the packaging's oxygen barrier property fails or degrades.",
                    "correct": true
                },
                {
                    "text": "A hazard analysis was reviewed and re-approved by the food safety team within the organization's own defined review cycle timeframe.",
                    "correct": false
                }
            ],
            "rationale": "This tests the specific 8.5.1.3 requirement that hazard analysis address packaging's FUNCTIONAL role in food safety (like an oxygen barrier actively preventing pathogen growth), not just standard food hazards — the other options describe generally sound practices that don't address this particular, more specific requirement.",
            "lms_direction": "Review LMS Activity 8.5.1.3 — Packaging's Functional Effect on Food Safety."
        },
        {
            "category": "ISO 22000:2018 — Support & Operation, incl. HACCP (Clauses 7-8)",
            "section": "Clause 8.3",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's traceability system can identify which raw material batches went into a finished product, but during a mock recall exercise, it took the team over six hours to identify all customer accounts that received a specific affected batch. What is the correct evaluation?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to the mock exercise's specific timing, unrelated to the traceability system's actual real-world design or capability.",
                    "correct": false
                },
                {
                    "text": "No finding, since the system did eventually and correctly identify all affected customer accounts, demonstrating the traceability system fundamentally works, a position that is generally considered reasonable under normal circumstances.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against Clause 8.3 — traceability must enable identification of product movement both backward and forward through the supply chain within a timeframe that supports effective recall action.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since six hours is a reasonably fast timeframe compared to typical industry recall response benchmarks generally.",
                    "correct": false
                }
            ],
            "rationale": "Traceability that eventually works isn't the same as traceability that works fast enough to matter — 8.3 exists specifically to support effective, timely recall action, and a mock exercise revealing a six-hour forward-trace gap is exactly the kind of finding that should trigger a genuine system review, not be waved off as an isolated timing issue.",
            "lms_direction": "Review LMS Activity 8.3 — Traceability Speed and Recall Effectiveness."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 9.1",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization monitors CCP critical limits continuously but has never analyzed trends across monitoring data — for example, whether a CCP is drifting toward its limit over time rather than breaching it outright. What is the correct evaluation?",
            "options": [
                {
                    "text": "No finding, since continuous monitoring against critical limits is itself the primary and most important requirement for CCP control.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to a missed opportunity for process optimization, unrelated to the FSMS's actual core food safety requirements.",
                    "correct": false
                },
                {
                    "text": "Likely a gap against Clause 9.1 — monitoring, measurement, analysis, and evaluation is expected to include trend analysis, not just pass/fail checks against a limit at each individual point in time.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since trend analysis is generally considered a quality-management practice rather than a food safety one.",
                    "correct": false
                }
            ],
            "rationale": "Pass/fail monitoring catches breaches after they happen; trend analysis is what lets an organization catch a CCP drifting toward its limit BEFORE a breach occurs — 9.1's expectation of genuine analysis and evaluation, not just data collection, is exactly what's missing here.",
            "lms_direction": "Review LMS Activity 9.1 — Trend Analysis Beyond Pass/Fail Monitoring."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 9.2",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An internal audit report for the Packaging Division states 'Hygienic design: Conformity' with no evidence or sampling notes recorded beyond that single line, while the same auditor's report for the Manufacturing Plant includes detailed evidence for every clause reviewed. What should this pattern prompt?",
            "options": [
                {
                    "text": "No concern, since a single clean line item for hygienic design likely just reflects a site with a genuinely strong, well-established control in that area, an approach many organizations consider adequate for day-to-day operational purposes.",
                    "correct": false
                },
                {
                    "text": "A recommendation that the Packaging Division be exempted from future hygienic design audits given this apparently strong result already on record.",
                    "correct": false
                },
                {
                    "text": "Automatic reclassification of the Packaging Division's status to nonconforming, since insufficient evidence should default to a failing audit result.",
                    "correct": false
                },
                {
                    "text": "Scrutiny of the audit programme's own rigor and consistency — an unusually thin, unevidenced report for one site compared to another from the same auditor raises a legitimate quality concern about that specific audit.",
                    "correct": true
                }
            ],
            "rationale": "An unevidenced 'Conformity' from the same auditor who wrote detailed evidence elsewhere is a red flag about audit QUALITY, not proof of either genuine strength or automatic failure — the correct response is scrutinizing the audit process itself, not assuming either extreme about the underlying site.",
            "lms_direction": "Review LMS Activity 9.2 — Evaluating Audit Report Quality and Consistency."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 9.2.2",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Under Clause 9.2.2, an internal audit programme for a multi-site certified organization must ensure auditor objectivity and impartiality, which can include ensuring auditors do not audit their own site or department where a conflict of interest would exist.",
            "options": [
                {
                    "text": "True",
                    "correct": true
                },
                {
                    "text": "False",
                    "correct": false
                }
            ],
            "rationale": "9.2.2 requires the audit programme to consider the results of previous audits and ensure the objectivity and impartiality of the audit process — auditor independence from the area being audited, including their own site or department, is a core, well-established mechanism for achieving that.",
            "lms_direction": "Review LMS Activity 9.2.2 — Auditor Independence in Multi-Site Programmes."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 9.3",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "Management Review minutes show 'customer feedback' listed as an agenda item with the note 'no significant feedback received,' despite the Catering Unit having received two informal verbal complaints about meal temperature from hospital kitchen staff in the same period. What is the correct evaluation?",
            "options": [
                {
                    "text": "Likely a Nonconformity against Clause 9.3 — informal verbal complaints are still customer feedback relevant to food safety and should have been captured and considered, not omitted because they weren't formally logged.",
                    "correct": true
                },
                {
                    "text": "No finding, since only formally logged, written customer complaints are typically considered valid input for a food safety management review process.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to the Catering Unit's own internal complaint-logging practices, unrelated to the broader group management review's content, consistent with how this requirement is typically applied in practice.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since verbal complaints are inherently less reliable and harder to verify than formally documented ones.",
                    "correct": false
                }
            ],
            "rationale": "Requiring feedback to be formally logged before it 'counts' creates exactly the kind of blind spot this scenario illustrates — real customer feedback relevant to food safety existed and should have reached management review, regardless of the channel it arrived through.",
            "lms_direction": "Review LMS Activity 9.3 — Customer Feedback as a Genuine Management Review Input."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 9.3.3",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "Following management review, several outputs were recorded, including 'continue monitoring pest control situation' with no owner, target date, or specific action attached. What is the significance of this output style?",
            "options": [
                {
                    "text": "It is an Opportunity for Improvement only, since not every management review output requires the same level of formal detail or structure.",
                    "correct": false
                },
                {
                    "text": "It is fully adequate, since 'continue monitoring' represents a legitimate management decision reflecting confidence that the current situation is already well controlled.",
                    "correct": false
                },
                {
                    "text": "It is a Minor Nonconformity limited only to formatting style, since the substantive management intent behind the output appears reasonably clear.",
                    "correct": false
                },
                {
                    "text": "It likely fails to meet Clause 9.3.3's expectation that management review outputs include decisions related to actions needed, in a form that is genuinely actionable and trackable.",
                    "correct": true
                }
            ],
            "rationale": "9.3.3 expects outputs to include decisions and actions related to continual improvement and resource needs — a vague instruction with no owner, date, or specific action is not meaningfully different from no decision having been made at all, regardless of the underlying intent behind it.",
            "lms_direction": "Review LMS Activity 9.3.3 — Actionable Management Review Outputs."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 10.1",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A corrective action record for a pest control gap shows the immediate issue was fixed (stations added and serviced) and the record was marked 'Closed,' with no analysis of why the stations were missing from the map in the first place. What is missing?",
            "options": [
                {
                    "text": "A formal sign-off from the pest control contractor confirming they personally agree with the organization's chosen corrective action approach, a judgement call that reasonably experienced staff would likely support.",
                    "correct": false
                },
                {
                    "text": "Nothing — physically adding and servicing the missing stations is the complete and sufficient corrective action this type of finding requires.",
                    "correct": false
                },
                {
                    "text": "Root cause analysis and evaluation of the need for action to eliminate the cause of the nonconformity, as 10.1 requires beyond simply correcting the immediate physical symptom.",
                    "correct": true
                },
                {
                    "text": "A specific numeric target for the total number of pest control stations the facility should maintain going forward as a formal policy.",
                    "correct": false
                }
            ],
            "rationale": "Fixing the immediate physical gap is a correction, not a corrective action — 10.1 requires understanding WHY the gap existed (a change management failure? a mapping process gap after facility changes?) so the same pattern doesn't recur elsewhere or after the next facility change.",
            "lms_direction": "Review LMS Activity 10.1 — Root Cause Analysis vs. Correction."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 10.2",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Clause 10.2 (Continual improvement) requires an organization to demonstrate improvement of the FSMS's suitability, adequacy, and effectiveness over time, using inputs such as analysis of monitoring results, audits, and management review outputs.",
            "options": [
                {
                    "text": "True",
                    "correct": true
                },
                {
                    "text": "False",
                    "correct": false
                }
            ],
            "rationale": "10.2 explicitly ties continual improvement to using the outputs of analysis and evaluation, audit results, and management review — this is not a standalone, free-floating requirement but one that draws directly on the evidence generated elsewhere in the FSMS.",
            "lms_direction": "Review LMS Activity 10.2 — Continual Improvement Draws on FSMS-Wide Evidence."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 10.3",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's FSMS Update procedure (Clause 10.3) exists on paper but the audit team finds no evidence the FSMS was actually reviewed or updated following either the alfredo product launch or the new access point created by the loading dock extension. What is the correct evaluation?",
            "options": [
                {
                    "text": "Likely a Nonconformity against Clause 10.3 — top management is expected to ensure the FSMS is continually updated in light of exactly this kind of significant change, not merely maintain a procedure describing that intent.",
                    "correct": true
                },
                {
                    "text": "No finding, since a documented FSMS Update procedure existing on file already satisfies Clause 10.3's core requirement in full.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to a single missed update cycle, since FSMS updates are typically expected only on an annual basis.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since both changes were separately reviewed and addressed within their own specific functional areas already, based on how most sites in this sector typically operate in practice; which is the interpretation most commonly applied across the industry.",
                    "correct": false
                }
            ],
            "rationale": "A described procedure that was never actually applied to two genuinely significant changes is exactly the same procedure-vs-practice gap seen throughout this audit — 10.3 expects the FSMS to actually be kept current, which having a policy document alone doesn't demonstrate.",
            "lms_direction": "Review LMS Activity 10.3 — Updating the FSMS in Practice, Not Just in Policy."
        },
        {
            "category": "ISO 22000:2018 — Performance Evaluation & Improvement (Clauses 9-10)",
            "section": "Clause 9.2",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "Which is the most appropriate sequence of steps for an internal auditor investigating whether a finding from the current audit is a genuine recurrence of one closed in a previous cycle?",
            "options": [
                {
                    "text": "Automatically classify the new finding as Major, since any repeat finding is by convention always treated as the most severe possible category.",
                    "correct": false
                },
                {
                    "text": "Verify the previous corrective action's evidence of effectiveness, compare the previously identified root cause to the current finding, then classify severity accordingly — typically escalating if it is a true recurrence.",
                    "correct": true
                },
                {
                    "text": "Treat the new finding as entirely unrelated, since each audit cycle is generally intended to be evaluated independently of all prior cycles.",
                    "correct": false
                },
                {
                    "text": "Ask the site's own quality manager whether they personally believe the two findings are related, and accept that answer as final and conclusive.",
                    "correct": false
                }
            ],
            "rationale": "This models the correct investigative sequence — verify, compare, then classify — rather than skipping straight to an assumed severity, ignoring genuinely relevant audit history, or outsourcing the auditor's own independent judgement to the auditee being audited.",
            "lms_direction": "Review LMS Activity 10.1 — Investigating Recurring Nonconformities."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-1 — Facility Layout",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A food manufacturing site's process flow has raw material intake and finished product dispatch sharing the same physical corridor, with personnel and equipment regularly moving between raw and ready-to-eat zones without a defined changeover procedure. What is the correct finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since personnel movement patterns are generally considered a workforce management issue rather than a PRP one, a position that is generally considered reasonable under normal circumstances.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against PRP facility design requirements — shared corridors without a defined changeover control create a direct cross-contamination pathway between raw and ready-to-eat zones.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited to a facility labelling or signage issue, unrelated to the actual physical risk of cross-contamination occurring.",
                    "correct": false
                },
                {
                    "text": "No finding, since sharing a single corridor is a common, practical space constraint many manufacturing facilities reasonably operate within.",
                    "correct": false
                }
            ],
            "rationale": "PRP facility design requirements exist specifically to prevent this kind of cross-contamination pathway — space constraints are a real operational challenge, but they don't remove the requirement for some form of defined control (segregation, timing, changeover procedure) where raw and ready-to-eat pathways cross.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-1 — Facility Layout and Cross-Contamination Pathways."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-1 — Personnel Hygiene",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "During a site walkthrough, an auditor observes a maintenance contractor entering the production floor without following the posted handwashing and hygiene procedure required of all personnel, because 'he's not handling food directly.' What is the correct evaluation?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since maintenance visits are typically brief and infrequent compared to regular production staff presence.",
                    "correct": false
                },
                {
                    "text": "No finding, since maintenance contractors who don't directly handle food are commonly exempt from hygiene procedures across most food manufacturing sites, reflecting standard practice at comparable facilities of similar size and scope.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to the contractor's own individual conduct, unrelated to the underlying adequacy of the site's hygiene procedure itself.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — PRP personnel hygiene requirements typically apply to anyone entering production areas, not only those directly handling food, since contamination risk isn't limited to direct contact.",
                    "correct": true
                }
            ],
            "rationale": "Contamination risk comes from PRESENCE in the production environment, not just direct food contact — a maintenance contractor can introduce physical, chemical, or microbiological contamination without touching product directly, which is exactly why hygiene procedures typically apply to all personnel entering the area.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-1 — Personnel Hygiene Scope Beyond Direct Food Handlers."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-4 — Packaging Material Contamination",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A packaging manufacturing site stores finished film rolls in the same warehouse area as raw polymer pellets, separated only by an unmarked floor line, with no barrier or defined segregation control between the two material types. What is the correct finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since floor-line demarcation is a widely accepted and sufficient method of warehouse space segregation.",
                    "correct": false
                },
                {
                    "text": "No finding, since both materials are made of similar polymer-based substances and therefore present limited cross-contamination risk to each other.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — ISO/TS 22002-4 expects effective segregation between raw materials and finished packaging to prevent contamination, and an unmarked floor line alone does not constitute a defined control.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited to warehouse organizational tidiness, unrelated to the actual food safety risk to the finished packaging material.",
                    "correct": false
                }
            ],
            "rationale": "Similar base materials doesn't mean similar contamination risk — finished, food-contact-ready film has different hygienic requirements than raw pellets awaiting processing, and an unmarked floor line provides no enforceable, defined segregation control between the two.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-4 — Segregation of Raw and Finished Packaging Materials."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-1 — Water, Air, Energy Supply",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A manufacturing site uses recycled water for equipment cooling (a non-product-contact application) and has no documented water quality testing programme for this stream, stating 'it never touches the product, so it doesn't matter.' What is the correct evaluation?",
            "options": [
                {
                    "text": "Likely a gap — PRP requirements on water supply typically expect risk-based control appropriate to the water's actual use, and even non-product-contact water can create indirect contamination risk through equipment, aerosols, or condensation.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited to environmental sustainability documentation, since recycled water use is primarily a resource-efficiency initiative rather than a safety one, consistent with how this requirement is typically applied in practice.",
                    "correct": false
                },
                {
                    "text": "No finding, since water that genuinely never contacts the product directly falls entirely outside any PRP water quality control requirements.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since cooling water is a widely used, generally low-risk application across most manufacturing environments.",
                    "correct": false
                }
            ],
            "rationale": "Indirect contact matters too — condensation, aerosols, or equipment surface contact from 'non-product-contact' water can still introduce contamination risk, meaning the PRP's expectation is risk-based control appropriate to the actual use, not a blanket exemption for anything not directly touching product.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-1 — Risk-Based Control of Non-Product-Contact Water."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-1 — Waste Management",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A site's waste management procedure requires food waste bins to be emptied daily and stored in a designated external area away from raw material intake, but during the audit, food waste bins were observed accumulated for three days near the raw material receiving dock due to a waste contractor scheduling issue. What is the correct finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since waste management is generally considered a lower-priority housekeeping matter compared to core hazard controls, which aligns with common industry expectations for this type of activity.",
                    "correct": false
                },
                {
                    "text": "No finding, since the root cause was an external waste contractor's scheduling issue, which is outside the organization's own direct operational control.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to a scheduling inconvenience, since three days is a relatively short deviation from the standard daily removal requirement.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — the PRP waste management control is not being effectively implemented in practice, creating a pest attraction and cross-contamination risk near a sensitive receiving area, regardless of the cause.",
                    "correct": true
                }
            ],
            "rationale": "An external contractor's scheduling problem doesn't remove the organization's own responsibility for the OUTCOME — accumulated food waste near raw material receiving is a genuine pest and contamination risk regardless of why it happened, and the organization needs a contingency for exactly this kind of external dependency failure.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-1 — Waste Management Control Regardless of Root Cause."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-2 — Catering-Specific PRPs",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A catering unit's PRP for equipment maintenance covers all major kitchen equipment except handheld temperature probes, which are calibrated 'whenever someone remembers,' with no defined schedule or record. What is the correct finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since catering equipment PRPs are typically less rigorous than manufacturing-site equivalents given the smaller scale involved.",
                    "correct": false
                },
                {
                    "text": "No finding, since handheld temperature probes are simple, low-cost equipment generally considered less critical than major kitchen equipment overall.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to record-keeping formality, since staff presumably still use reasonable judgement when taking temperature readings regardless.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — measuring equipment used to verify food safety-critical parameters like hot-holding temperature requires a defined calibration schedule and record, not an ad hoc approach.",
                    "correct": true
                }
            ],
            "rationale": "A temperature probe is precisely the instrument verifying whether a food safety-critical control (like hot-holding above 63°C) is actually being met — an uncalibrated or inconsistently calibrated probe undermines confidence in every temperature record it produces, which is a substantive gap, not a minor formality.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-2 — Calibration of Food Safety-Critical Measuring Equipment."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-5 — Storage & Distribution PRPs",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A distribution centre's vehicle inspection procedure for incoming delivery trucks checks trailer cleanliness and temperature but does not check for evidence of pest activity or structural integrity (holes, gaps) in the trailer body before loading chilled product. What is the correct finding?",
            "options": [
                {
                    "text": "Likely a gap in the PRP vehicle control programme — pest activity evidence and structural integrity are both established risk factors for storage and distribution that a cleanliness-and-temperature-only check would miss.",
                    "correct": true
                },
                {
                    "text": "No finding, since cleanliness and temperature are widely regarded as the two most critical parameters for chilled product transport safety.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since structural integrity issues are relatively rare events compared to routine cleanliness or temperature deviations.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to inspection checklist formatting, since inspectors likely notice obvious structural problems informally regardless of the checklist's content, based on how most sites in this sector typically operate in practice.",
                    "correct": false
                }
            ],
            "rationale": "Cleanliness and temperature matter, but they don't cover every relevant risk — a structural gap in a trailer body is a direct pest-entry and environmental-contamination pathway that a cleanliness-and-temperature-only checklist simply won't catch, regardless of how attentive inspectors are informally.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-5 — Comprehensive Vehicle Inspection Criteria."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-1 — Cleaning and Sanitation",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A cleaning validation study confirmed a specific detergent concentration and contact time effectively removes allergen residue from a shared production line. Six months later, the site switched to a different, cheaper detergent without re-validating the cleaning procedure. What is the correct finding?",
            "options": [
                {
                    "text": "No finding, since most food-grade detergents marketed for similar cleaning applications are broadly interchangeable in terms of actual effectiveness.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since cost-driven detergent changes are a routine commercial decision that doesn't typically require re-validation, which is the interpretation most commonly applied across the industry; a position that is generally considered reasonable under normal circumstances.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to a purchasing documentation gap, unrelated to the actual technical adequacy of the cleaning process itself.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — a cleaning validation is specific to the validated chemical and parameters used; switching products without re-validation means there's no current evidence the new detergent achieves the same result.",
                    "correct": true
                }
            ],
            "rationale": "A validation is tied to the SPECIFIC chemical, concentration, and contact time tested — a different detergent, even if marketed similarly, is not automatically equivalent, and this is especially critical for allergen residue removal where the consequence of an unvalidated assumption is severe.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-1 — Re-Validation After Cleaning Chemical Changes."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002 Series — General Principle",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Under the ISO/TS 22002 series, an organization may select and apply prerequisite programmes generically from the relevant technical specification without needing to demonstrate how each PRP is appropriate to its own specific facility, products, and processes.",
            "options": [
                {
                    "text": "False",
                    "correct": true
                },
                {
                    "text": "True",
                    "correct": false
                }
            ],
            "rationale": "PRPs must be appropriate to the organization's own specific circumstances — the technical specifications provide a structured framework of topics, but simply adopting them generically without adapting to the organization's actual facility, products, and processes fails their underlying intent.",
            "lms_direction": "Review LMS Activity ISO/TS 22002 Series — PRPs Must Be Organization-Specific, Not Generic."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-1 — Management of Purchased Materials",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A site's raw material specification for a key spice ingredient has not been updated in four years, despite the supplier having changed twice in that period and the current supplier being sourced from a different country of origin with different regional contamination risk profiles. What is the correct finding?",
            "options": [
                {
                    "text": "No finding, since the specification document technically still exists and continues to describe the ingredient's fundamental chemical and sensory characteristics.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — a static specification that hasn't been reviewed despite supplier and origin changes fails to reflect the current, actual risk profile of the material being purchased.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since supplier changes are common commercial events that don't typically require specification updates.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to document version control, since the underlying ingredient itself is presumably still functionally equivalent regardless of origin.",
                    "correct": false
                }
            ],
            "rationale": "A specification that doesn't reflect WHO is actually supplying the material and WHERE it's coming from is disconnected from the real risk it's meant to manage — different regional origins can carry genuinely different contamination risk profiles that a static, years-old document won't capture.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-1 — Specifications Must Reflect Current Supplier and Origin Risk."
        },
        {
            "category": "Sector PRPs — ISO/TS 22002 Series (Multi-Category)",
            "section": "ISO/TS 22002-4 — Foreign Body Management in Packaging",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A packaging manufacturing site's foreign body control programme addresses glass and hard plastic but has no specific control measures for metal fragments from its own extrusion and cutting equipment, despite that equipment being a known potential source. What is the correct finding?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since metal fragment risk from cutting equipment is typically considered a rare, low-probability occurrence.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — a foreign body programme should be based on the organization's own actual risk sources, and excluding a known equipment-generated risk (metal from cutting/extrusion) is a genuine gap in scope.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited to documentation completeness, since the equipment itself presumably has its own separate maintenance programme addressing wear, reflecting standard practice at comparable facilities of similar size and scope.",
                    "correct": false
                },
                {
                    "text": "No finding, since glass and hard plastic are widely recognized as the two most commonly cited foreign body risks in packaging manufacturing generally.",
                    "correct": false
                }
            ],
            "rationale": "A foreign body programme's scope should be driven by the organization's OWN actual risk sources, not a generic industry list — excluding a known, equipment-specific risk (metal from the site's own cutting and extrusion process) because it's not on a general list is exactly the gap a risk-based programme is meant to avoid.",
            "lms_direction": "Review LMS Activity ISO/TS 22002-4 — Risk-Based Scope for Foreign Body Programmes."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.3 — Food Defence",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A site's food defence threat assessment identifies 'disgruntled employee' as a threat source but does not assess physical access points, visitor controls, or the vulnerability of specific process steps where intentional contamination would have the greatest impact. What is the correct evaluation?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since food defence threat assessments are inherently subjective and don't require the same rigor as food safety hazard analysis, an approach many organizations consider adequate for day-to-day operational purposes.",
                    "correct": false
                },
                {
                    "text": "No finding, since identifying 'disgruntled employee' as a threat source is itself widely recognized as the most significant food defence risk category.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to documentation depth, since the organization's underlying security awareness is presumably already reasonably adequate in practice.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — a genuine TACCP-style threat assessment needs to evaluate access points and critical process vulnerabilities, not just name a generic threat category without mapping it to actual exploitable weaknesses.",
                    "correct": true
                }
            ],
            "rationale": "Naming a threat SOURCE without mapping it to actual exploitable ACCESS and PROCESS vulnerabilities produces an assessment with no practical mitigation value — 2.5.3 expects a genuine methodology connecting who might want to cause harm to where and how they actually could.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.3 — TACCP Methodology Depth."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.3 — Food Defence Plan Review",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's Food Defence Plan was last reviewed exactly twelve months ago as scheduled, but a significant facility layout change occurred nine months ago that was not addressed until the next scheduled annual review. What is the correct finding?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to the nine-month delay's documentation, since the review did eventually occur and address the layout change.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — 2.5.3 expects the plan to be reviewed when significant changes occur, in addition to the annual cycle, not solely on a fixed calendar regardless of intervening events.",
                    "correct": true
                },
                {
                    "text": "No finding, since the plan was reviewed within the required annual timeframe, satisfying the review frequency requirement as written.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since facility layout changes are common events that don't necessarily always affect food defence risk.",
                    "correct": false
                }
            ],
            "rationale": "Meeting the annual minimum doesn't satisfy the requirement's full intent when a significant change-driven review trigger was also required and missed — the fixed calendar and the change-based trigger are both requirements, not alternatives to each other.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.3 — Change-Triggered Plan Review."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.4 — Food Fraud Vulnerability Assessment",
            "type": "interactive_tool",
            "tool_type": "fraud_vulnerability_reviewer",
            "exhibit_ref": "none",
            "text": "Review the following excerpts from an organization's Food Fraud Vulnerability Assessment (VACCP) and determine whether each entry's rating and justification are defensible.",
            "tool_data": {
                "instructions": "Evaluate whether each ingredient's vulnerability rating is supported by a genuine, evidence-based justification, or relies on an insufficient proxy such as relationship tenure or price alone.",
                "rating_scale": [
                    "Low",
                    "Medium",
                    "High"
                ],
                "entries": [
                    {
                        "id": "vf1",
                        "ingredient": "Extra virgin olive oil",
                        "declared_rating": "Low",
                        "justification": "We have used the same supplier for over ten years without any issues.",
                        "correct_evaluation": "Indefensible — relationship tenure does not address the ingredient's own well-documented global adulteration history; olive oil should be assessed against known fraud databases and horizon-scanning intelligence, not supplier loyalty alone."
                    },
                    {
                        "id": "vf2",
                        "ingredient": "Paprika (ground spice)",
                        "declared_rating": "High",
                        "justification": "Ground spices are a recognized high-fraud commodity category (e.g., Sudan dye adulteration), our supplier is new, and unit price has recently dropped below the prior three-year average.",
                        "correct_evaluation": "Defensible — justification references known commodity fraud history, supplier tenure, and a genuine economic anomaly (unexplained price drop), all recognized VACCP risk indicators."
                    },
                    {
                        "id": "vf3",
                        "ingredient": "Vanilla extract",
                        "declared_rating": "Low",
                        "justification": "It costs more than synthetic alternatives, so there's no financial incentive for anyone to adulterate it.",
                        "correct_evaluation": "Indefensible — this reasoning is backwards; high-value ingredients like natural vanilla are classic fraud targets precisely because of the price gap versus cheaper substitutes, not evidence of low risk."
                    }
                ]
            },
            "expected_payload": "evaluated_at_runtime",
            "rationale": "A defensible VACCP rating draws on known commodity fraud history, supply chain and geopolitical factors, and genuine economic anomalies — not supplier relationship length or a misapplied 'expensive means safe' assumption, which is a common and dangerous reasoning error.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.4 — Defensible VACCP Justifications."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.4 — Food Fraud Mitigation Plan",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's Food Fraud Mitigation Plan lists 'increase supplier audits' as the mitigation measure for a High vulnerability ingredient, but no supplier audit related to this specific ingredient has occurred in the eighteen months since the plan was written. What is the correct finding?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to scheduling, since supplier audits for any given ingredient are not always required on a strict annual basis.",
                    "correct": false
                },
                {
                    "text": "No finding, since identifying an appropriate mitigation measure is itself the core substantive requirement, independent of subsequent implementation timing, which aligns with common industry expectations for this type of activity.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since eighteen months is a relatively short delay for a supplier audit programme covering many ingredients.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — a mitigation plan that identifies an action but shows no evidence the action was ever actually carried out provides no genuine risk reduction, regardless of how appropriate the action sounds on paper.",
                    "correct": true
                }
            ],
            "rationale": "A well-chosen mitigation measure that's never actually executed provides zero real risk reduction — this is the same implementation-vs-paper-plan gap seen throughout this course, now applied to a specifically High-vulnerability, and therefore high-priority, ingredient.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.4 — Mitigation Plan Execution Evidence."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.6 — Allergen Management",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A product's precautionary allergen labelling ('may contain nuts') was applied by default across the entire product range without a documented risk assessment determining whether cross-contact is actually reasonably likely for each specific product. What is the correct evaluation?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since precautionary labelling decisions are typically considered a legal and marketing function rather than a food safety one, a judgement call that reasonably experienced staff would likely support; based on how most sites in this sector typically operate in practice.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to potential commercial impact from over-labelling, unrelated to the FSMS's core food safety management requirements.",
                    "correct": false
                },
                {
                    "text": "No finding, since applying precautionary labelling broadly is a conservative, cautious approach that only increases consumer protection overall.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — precautionary labelling is expected to be based on a genuine risk assessment of actual cross-contact likelihood, not applied as a blanket default that can both mislabel low-risk products and mask genuinely under-assessed higher-risk ones.",
                    "correct": true
                }
            ],
            "rationale": "Blanket precautionary labelling isn't actually conservative — it erodes the label's meaning for consumers who rely on it, and worse, applying it as a default can mask products where a genuine, product-specific cross-contact risk assessment was never actually done at all.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.6 — Risk-Based Precautionary Labelling."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.2 — Product Labelling",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "A product label claims 'No Artificial Preservatives,' and the audit team's review of the finished formulation confirms this is accurate, but the validation file contains no evidence the claim was checked against the specific regulatory definition of 'artificial' in each market the product is sold in. What is the correct finding?",
            "options": [
                {
                    "text": "No finding, since the formulation itself was independently confirmed accurate by the audit team's own direct review of its ingredients.",
                    "correct": false
                },
                {
                    "text": "Likely a gap — label claim validation should confirm accuracy against the specific applicable regulatory definitions in each market of sale, since 'artificial' can be legally defined differently across jurisdictions.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since regulatory definitions of terms like 'artificial' are generally consistent enough across most major markets.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to file organization, since the underlying claim substance has already been separately established as correct.",
                    "correct": false
                }
            ],
            "rationale": "The formulation being factually accurate in one interpretation doesn't confirm regulatory compliance across every market where the product is sold — terms like 'artificial' can carry genuinely different legal definitions by jurisdiction, which is exactly what a complete validation file needs to address.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.2 — Label Claims Across Multiple Regulatory Markets."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.1 — Management of Purchased Services and Materials",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Under Additional Requirement 2.5.1, laboratories used by the organization for food safety-related verification or validation testing must be able to demonstrate the accuracy and repeatability of their test methods, such as through accreditation to a recognized standard like ISO 17025.",
            "options": [
                {
                    "text": "False",
                    "correct": false
                },
                {
                    "text": "True",
                    "correct": true
                }
            ],
            "rationale": "2.5.1 specifically addresses the competence of laboratories used for verification/validation, expecting demonstrable accuracy and repeatability of methods — accreditation to a recognized standard such as ISO 17025 is the established way organizations typically evidence this.",
            "lms_direction": "Review LMS Activity 2.5.1 — Laboratory Competence for Verification Testing."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.1 — Emergency Purchasing",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's standard supplier approval process takes three weeks, but during a genuine supply shortage, a raw material was purchased from an unapproved emergency supplier within 24 hours, with no documented emergency purchasing procedure followed or retrospective verification performed. What is the correct finding?",
            "options": [
                {
                    "text": "No finding, since genuine supply emergencies reasonably justify bypassing standard approval processes entirely to maintain production continuity.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — emergency purchases still require some form of documented risk-based control appropriate to the urgency, such as a defined emergency procedure with retrospective verification, not a complete bypass of all supplier controls.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since emergency situations are, by definition, rare, isolated events unlikely to recur or represent a systemic control gap worth escalating further.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to paperwork timing, since the material was presumably visually inspected upon receipt by receiving staff regardless.",
                    "correct": false
                }
            ],
            "rationale": "An emergency justifies a FASTER process, not the complete absence of one — 2.5.1 expects organizations in certain categories to have a defined emergency purchasing procedure precisely so urgency doesn't mean an total control bypass, even if retrospective verification happens after the fact.",
            "lms_direction": "Review LMS Activity 2.5.1 — Emergency Purchasing Procedures."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.7 — Food Safety and Quality Culture",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's Food Safety and Quality Culture plan lists generic objectives like 'improve awareness' with no baseline measurement, target metrics, or defined activities, and the Culture plan appears to have been copied largely unchanged from a industry template. What is the correct evaluation?",
            "options": [
                {
                    "text": "An Opportunity for Improvement only, since food safety culture is an inherently qualitative area not well suited to measurable targets or metrics.",
                    "correct": false
                },
                {
                    "text": "No finding, since 'improve awareness' is a reasonable and universally applicable food safety culture objective for any food business regardless of context.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to wording specificity, since the underlying commitment to culture improvement appears to be genuine regardless of the plan's detail level, a position that is generally considered reasonable under normal circumstances.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — 2.5.7 expects a genuine, organization-specific culture plan with measurable elements, not a generic template lacking baseline data or activities tailored to the organization's own actual behaviours and gaps.",
                    "correct": true
                }
            ],
            "rationale": "A generic, unmeasurable culture plan is functionally indistinguishable from having no plan at all — 2.5.7 expects organizations to genuinely assess their own current culture and define real, trackable actions and metrics, not adopt aspirational language wholesale from a template.",
            "lms_direction": "Review LMS Activity 2.5.7 — Genuine vs. Template Food Safety Culture Plans."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.4 — NCR Construction",
            "type": "interactive_tool",
            "tool_type": "ncr_generator",
            "exhibit_ref": "none",
            "text": "Using the scenario below, construct the correct Nonconformity Report components.",
            "tool_data": {
                "scenario": "An organization's Food Fraud Mitigation Plan identifies 'increase supplier audits' as the mitigation for a High-vulnerability spice ingredient, but no audit specific to this ingredient's supplier has occurred in the eighteen months since the plan was approved.",
                "fields": [
                    {
                        "id": "category",
                        "label": "Classification",
                        "options": [
                            "Conformity",
                            "Opportunity for Improvement",
                            "Minor Nonconformity",
                            "Major Nonconformity"
                        ],
                        "correct": "Major Nonconformity",
                        "guidance": "Consider that this is a High-vulnerability ingredient with a mitigation measure that has never been executed at all across an eighteen-month period — weigh both the severity of the underlying vulnerability and the total absence of implementation."
                    },
                    {
                        "id": "criterion",
                        "label": "Best-fit Criterion",
                        "options": [
                            "Additional Requirement 2.5.3 — Food Defence",
                            "Additional Requirement 2.5.4 — Food Fraud Mitigation Plan",
                            "Clause 8.2 — Prerequisite Programmes",
                            "Clause 9.3 — Management Review"
                        ],
                        "correct": "Additional Requirement 2.5.4 — Food Fraud Mitigation Plan"
                    },
                    {
                        "id": "problem_statement",
                        "label": "Best Problem Statement",
                        "options": [
                            "The organization has not conducted a food fraud vulnerability assessment.",
                            "The identified mitigation measure for a High-vulnerability ingredient has not been implemented at any point since the plan's approval.",
                            "The spice ingredient supplier has not been formally approved through the standard process.",
                            "Management review did not discuss food fraud as an agenda item."
                        ],
                        "correct": "The identified mitigation measure for a High-vulnerability ingredient has not been implemented at any point since the plan's approval."
                    }
                ]
            },
            "expected_payload": "evaluated_at_runtime",
            "rationale": "The vulnerability assessment itself exists and rated the ingredient correctly — the actual gap is that the chosen mitigation was never executed, which is a distinct and more serious problem than assessment absence, since it means a known high risk has gone unaddressed for a prolonged period.",
            "lms_direction": "Review LMS Activity 2.5.4 — Writing Defensible Food Fraud NCRs."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part A (Defence, Fraud, Allergens, Labelling, Culture)",
            "section": "2.5.6 — Allergen Cross-Contact Verification",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "Under Additional Requirement 2.5.6, verifying that allergen cleaning procedures are effective requires objective testing evidence, such as validated swabbing or analytical results, rather than relying solely on visual inspection of production equipment.",
            "options": [
                {
                    "text": "True",
                    "correct": true
                },
                {
                    "text": "False",
                    "correct": false
                }
            ],
            "rationale": "Visual inspection can confirm visible residue is gone but cannot detect allergen protein at the levels relevant to sensitive individuals — 2.5.6 expects objective, validated verification evidence for allergen cleaning specifically, given the severity of consequence for a missed cross-contact event.",
            "lms_direction": "Review LMS Activity 2.5.6 — Objective Verification of Allergen Cleaning."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "Category Applicability Mapping",
            "type": "interactive_tool",
            "tool_type": "category_mapper",
            "exhibit_ref": "none",
            "text": "Map the following FSSC 22000 V6 Additional Requirements to the food chain categories they apply to, based on the case study's four GHFG sites (C = Manufacturing, I = Packaging, G = Storage & Distribution, E = Catering).",
            "tool_data": {
                "categories": [
                    "C — Manufacturing",
                    "I — Packaging",
                    "G — Storage & Distribution",
                    "E — Catering",
                    "All GHFG categories"
                ],
                "items": [
                    {
                        "id": "m1",
                        "text": "2.5.5 Environmental Monitoring Programme",
                        "category": "All GHFG categories"
                    },
                    {
                        "id": "m2",
                        "text": "2.5.8 Equipment Management (new printing unit, metal detector)",
                        "category": "All GHFG categories"
                    },
                    {
                        "id": "m3",
                        "text": "ISO/TS 22002-4 Hygienic design of film-extrusion equipment",
                        "category": "I — Packaging"
                    },
                    {
                        "id": "m4",
                        "text": "ISO/TS 22002-2 Hot-holding temperature control at point of service",
                        "category": "E — Catering"
                    },
                    {
                        "id": "m5",
                        "text": "PRP cold chain vehicle and warehouse temperature control",
                        "category": "G — Storage & Distribution"
                    },
                    {
                        "id": "m6",
                        "text": "8.5.1.3 Packaging's functional effect on food safety (oxygen barrier)",
                        "category": "C — Manufacturing"
                    }
                ]
            },
            "expected_payload": "evaluated_at_runtime",
            "rationale": "Some requirements (environmental monitoring, equipment management) apply across every GHFG site regardless of category, while others are inherently tied to a specific site's activity — auditors must recognize which is which rather than assuming every requirement is either universal or category-specific by default.",
            "lms_direction": "Review LMS Activity — Category-Specific vs. Universal Requirement Applicability."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "2.5.5 — Environmental Monitoring",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's Environmental Monitoring Programme tests for Listeria monocytogenes but not for Salmonella, despite the site producing a low-moisture product category where Salmonella is the more epidemiologically relevant environmental pathogen of concern. What is the correct finding?",
            "options": [
                {
                    "text": "Likely a Nonconformity — 2.5.5 expects the target organism(s) tested to be appropriate to the actual product and process risk profile, not a default pathogen choice disconnected from the specific hazards relevant to this product category.",
                    "correct": true
                },
                {
                    "text": "No finding, since Listeria monocytogenes is broadly recognized as the single most significant environmental pathogen across the food industry as a whole.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to test panel documentation, since the underlying environmental sampling locations and frequency otherwise appear adequate.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since testing for at least one relevant pathogen already demonstrates a reasonable baseline monitoring commitment.",
                    "correct": false
                }
            ],
            "rationale": "Listeria is a common default, but 2.5.5 expects the target organism to be RISK-APPROPRIATE to the specific product and process — a low-moisture product with Salmonella as its epidemiologically relevant concern needs a programme testing for the actual relevant risk, not a generic industry default.",
            "lms_direction": "Review LMS Activity 2.5.5 — Target Organism Selection Must Match Product Risk."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "2.5.8 — Equipment Management",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's Equipment Management procedure requires a documented risk assessment before purchase, but the audit team finds this is consistently completed for major processing equipment while smaller items like handheld inspection tools and portable scales are routinely excluded from the register. What is the correct evaluation?",
            "options": [
                {
                    "text": "Likely a gap — 2.5.8's intent covers equipment relevant to food safety and quality regardless of size, and excluding smaller but food safety-relevant tools like inspection equipment creates an inconsistent, incomplete register.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since portable and handheld equipment is generally understood to fall outside typical equipment management scope.",
                    "correct": false
                },
                {
                    "text": "No finding, since major processing equipment represents the most significant food safety risk and therefore reasonably deserves the most rigorous documented control, an approach many organizations consider adequate for day-to-day operational purposes.",
                    "correct": false
                },
                {
                    "text": "A Minor Nonconformity limited to register formatting, since smaller equipment items are typically lower-cost and therefore lower-priority in practice.",
                    "correct": false
                }
            ],
            "rationale": "Equipment size or cost doesn't determine food safety relevance — a handheld inspection tool or scale used to verify a critical parameter is just as relevant to 2.5.8's intent as major processing machinery, and a register that systematically excludes smaller tools has an inconsistent, risk-blind scope.",
            "lms_direction": "Review LMS Activity 2.5.8 — Equipment Management Scope Regardless of Equipment Size."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "2.5.9 — Food Loss and Waste",
            "type": "true_false",
            "exhibit_ref": "none",
            "text": "The FSSC 22000 V6 Additional Requirement on Food Loss and Waste (FLW) is framed purely as an environmental sustainability initiative and has no connection to or overlap with food safety-relevant process controls.",
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
            "rationale": "While FLW connects to Sustainable Development Goal 12.3, it is framed within FSSC 22000 with a food safety standpoint — reducing loss and waste often ties directly into process efficiency and control improvements that also have genuine food safety relevance, not a purely separate sustainability-only concern.",
            "lms_direction": "Review LMS Activity 2.5.9 — Food Loss and Waste's Food Safety Connection."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "2.5.12 — Quality Control",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization has a documented quality control policy and objectives, but during the audit, no quality control parameters could be identified for the alfredo sauce product specifically — only generic company-wide quality statements exist. What is the correct finding?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to a documentation gap for one specific product, unrelated to the broader adequacy of the quality control system overall.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity — 2.5.12 expects organizations to incorporate quality control parameters specific to their products, not rely solely on generic, company-wide policy language without product-level operational parameters.",
                    "correct": true
                },
                {
                    "text": "No finding, since a documented quality control policy and stated objectives already satisfy the core substance of the requirement.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since quality control parameters are generally understood to be a commercial rather than food safety-relevant concern, consistent with how this requirement is typically applied in practice; which aligns with common industry expectations for this type of activity.",
                    "correct": false
                }
            ],
            "rationale": "A policy and generic objectives describe intent, not operational control — 2.5.12 expects actual product-level quality control parameters to exist and be monitored, and their complete absence for a specific, newly launched product is a substantive gap, not an isolated or purely commercial one.",
            "lms_direction": "Review LMS Activity 2.5.12 — Product-Level Quality Control Parameters."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "Verification of PRPs",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "An organization's PRP verification schedule specifies quarterly inspections for all sites, but the audit team finds that the Catering Unit — the newest and highest-risk site — has had the same verification frequency as the long-established Manufacturing Plant, with no risk-based justification for equal frequency. What is the correct evaluation?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to scheduling consistency, since applying the same frequency to all sites is at least an administratively simple approach.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since verification frequency decisions are typically considered an operational planning matter rather than a compliance one.",
                    "correct": false
                },
                {
                    "text": "Likely a gap — PRP verification frequency is expected to be justified by the level of risk, and applying identical frequency to a newer, higher-risk site and an established, well-controlled one doesn't reflect a genuine risk-based approach.",
                    "correct": true
                },
                {
                    "text": "No finding, since quarterly verification frequency is a reasonably common and generally accepted industry baseline across most food business types.",
                    "correct": false
                }
            ],
            "rationale": "PRP verification frequency should be justified by risk, not applied as a flat administrative default — treating a newly expanded, high-risk site identically to a long-established one misses the entire point of risk-based verification planning.",
            "lms_direction": "Review LMS Activity 8.8.1 — Risk-Based PRP Verification Frequency."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "Multi-Site Requirements (Categories E, F, G)",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "GHFG's central function conducts internal audits across all four sites but has no documented procedure specifically addressing how corporate ensures fairness and consistency of audit findings across sites, and different sites appear to be evaluated against noticeably different rigor by different internal auditors. What is the correct finding?",
            "options": [
                {
                    "text": "A Minor Nonconformity limited to auditor training records, unrelated to the overall design or adequacy of the multi-site audit programme itself.",
                    "correct": false
                },
                {
                    "text": "No finding, since each site being audited by a different auditor with their own individual professional judgement is a normal, expected practice.",
                    "correct": false
                },
                {
                    "text": "Likely a Nonconformity against multi-site certification requirements — the central function is expected to establish internal audit procedures ensuring fairness and consistency across sites, which inconsistent rigor between sites directly undermines.",
                    "correct": true
                },
                {
                    "text": "An Opportunity for Improvement only, since minor variation in audit rigor between auditors is a common, largely unavoidable feature of any audit programme regardless of how it is structured or managed.",
                    "correct": false
                }
            ],
            "rationale": "Multi-site certification specifically expects the central function to actively ensure fairness and consistency across sites — individual auditor judgement varying to the point of noticeably different rigor is exactly the systemic gap this requirement exists to catch, not a minor or unavoidable variation.",
            "lms_direction": "Review LMS Activity Multi-Site Requirements — Ensuring Audit Fairness Across Sites."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "Foreign Body Management",
            "type": "single_select",
            "exhibit_ref": "none",
            "text": "Following the metal shavings observed in the Packaging Division's drip tray (see case study Paragraph 4), the organization's foreign body risk assessment for that equipment was updated retrospectively, but no corresponding review occurred for similar equipment at other sites that could share the same failure mode. What is the correct evaluation?",
            "options": [
                {
                    "text": "A likely gap in the corrective action's scope — addressing only the specific instance found, without checking whether the same equipment type or failure mode exists elsewhere in the organization, misses the broader pattern-based improvement opportunity.",
                    "correct": true
                },
                {
                    "text": "A Minor Nonconformity limited to the retrospective timing of the update, since the substance of the updated risk assessment itself now appears adequate.",
                    "correct": false
                },
                {
                    "text": "An Opportunity for Improvement only, since checking other equipment for the same failure mode is a proactive step beyond what corrective action strictly requires, based on how most sites in this sector typically operate in practice; which is the interpretation most commonly applied across the industry.",
                    "correct": false
                },
                {
                    "text": "No finding, since the specific equipment where the shavings were actually observed has now had its risk assessment properly updated as required.",
                    "correct": false
                }
            ],
            "rationale": "This connects to the same corrective-action-scope principle tested elsewhere — fixing the one instance found without checking for the same pattern at other similar equipment misses the systemic improvement corrective action is meant to drive, and 'beyond what's strictly required' undersells that this is the actual point of root cause thinking.",
            "lms_direction": "Review LMS Activity Additional Requirement 2.5.11 — Foreign Body Corrective Action Scope."
        },
        {
            "category": "FSSC 22000 V6 Additional Requirements — Part B (Environment, Equipment, Quality, Multi-Site)",
            "section": "Additional Communication Requirements",
            "type": "interactive_tool",
            "tool_type": "audit_checklist",
            "exhibit_ref": "none",
            "text": "GHFG experienced a hot-holding temperature failure affecting hospital patient meals (see case study Paragraph 8). Select only the actions that would satisfy FSSC 22000's Additional Communication Requirements for this event.",
            "tool_data": {
                "instructions": "Select all items that represent a genuine, required communication action. Do not select items that are optional, informal, or insufficient on their own.",
                "items": [
                    {
                        "id": "a1",
                        "text": "Formally notify the Certification Body of the event, consistent with mandatory notification requirements for serious situations",
                        "should_select": true
                    },
                    {
                        "id": "a2",
                        "text": "Document the event and the organization's emergency preparedness and response actions taken in response to it",
                        "should_select": true
                    },
                    {
                        "id": "a3",
                        "text": "Review whether the event meets the organization's own defined criteria for a reportable serious incident under its communication procedure",
                        "should_select": true
                    },
                    {
                        "id": "a4",
                        "text": "Mention the event informally to the Certification Body's auditor if they happen to ask during the next scheduled surveillance visit",
                        "should_select": false
                    },
                    {
                        "id": "a5",
                        "text": "Wait to see whether any hospital patient reports an adverse health effect before deciding whether communication is necessary at all",
                        "should_select": false
                    },
                    {
                        "id": "a6",
                        "text": "Handle the matter entirely internally, since the meals were ultimately corrected before reaching any hospital patients",
                        "should_select": false
                    }
                ]
            },
            "expected_payload": "evaluated_at_runtime",
            "rationale": "The Additional Communication Requirements exist precisely so serious events are proactively reported, not mentioned in passing or withheld pending an adverse outcome — correction after the fact doesn't remove the notification obligation, especially for an event involving a vulnerable patient population.",
            "lms_direction": "Review LMS Activity Additional Communication Requirements — Mandatory CB Notification."
        }
    ]
}