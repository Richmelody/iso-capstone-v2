export default {
    "title": "ISO/IEC 27001:2022 Lead Auditor — Capstone Exam",
    "instrument_notice": "This is a knowledge-underpinning assessment confirming readiness to transition to Phase 2 live training with an accredited partner. It measures interpretive recognition and applied judgement built across Modules 1–5 of Phase 1 — it does not certify live audit competence, which Phase 2 assesses directly.",
    "layout_size": 35,
    "time_limit": 45,
    "passing_score_percent": 75,
    "scoring_note": "75% (26/35) is a provisional cut score, not yet validated against pilot candidate data.",
    "pool_size": 80,
    "extraction_note": "This 80-question pool feeds a stratified, category-aware extractor presenting 35 questions per sitting. 'Case Study — Veyra Logistics' is hardcoded to contribute exactly 8 of the 35, with the remaining 27 drawn proportionally across the other categories based on their share of the 80-question pool.",
    "blueprint": {
        "Case Study — Veyra Logistics (8 of 35, hardcoded)": 15,
        "Role Distinction & Independence": 8,
        "Certification Rules & Boundaries": 12,
        "Auditing Methodology": 10,
        "Auditing ISO 27001 Clauses (4–10)": 20,
        "Findings & Calculation": 15
    },
    "exhibits": {
        "veyra_case_study": {
            "description": "A continuous 8-paragraph audit narrative. Each Case Study question below refers to a specific paragraph.",
            "paragraphs": [
                "Paragraph 1: Veyra Logistics Technologies Ltd. is a Lagos-based logistics-tech company, roughly 150 staff, providing SaaS supply-chain tracking and warehouse management software to retail and manufacturing clients across West Africa, hosted on a multi-region cloud setup. Veyra's largest client — a multinational retail group worth roughly 40% of Veyra's revenue — made ISO/IEC 27001 certification a contractual condition of renewing their multi-year platform contract. This is Veyra's first certification attempt.",
                "Paragraph 2: Meridian Assurance Ltd., an accredited Certification Body, assigns Amara Chukwu as Lead Auditor. Amara forms a three-person team: herself, Tobi Adenuga (technical auditor, cloud/infrastructure specialist), and Grace Obi (generalist auditor, HR and documentation review). Before the engagement begins, the team calculates the required audit duration using Veyra's effective headcount and its multi-region cloud hosting, which counts as a multi-site complexity factor under ISO/IEC 27006-1:2024.",
                "Paragraph 3: During Stage 1, Amara's team reviews Veyra's high-level documentation — the ISMS scope statement, the information security policy, the risk assessment methodology, and the Statement of Applicability. The documentation is professionally formatted and appears complete. The Stage 1 readiness report identifies no blocking gaps, and Stage 2 fieldwork is scheduled.",
                "Paragraph 4: Ahead of Stage 2, Veyra's IT lead requests the audit be compressed from the calculated four days to two, citing internal pressure to finalise the client contract renewal quickly. Amara explains that the calculated duration is a compliance obligation under ISO/IEC 27006-1:2024, not a negotiable service term, and that Veyra's scheduling conflict must be resolved by adjusting the audit date, not shortening the audit itself.",
                "Paragraph 5: During Stage 2 fieldwork, Tobi conducts a technical review of Veyra's access logs. He discovers a successful unauthorized access attempt on the admin panel, dated three months earlier, with no corresponding entry in Veyra's incident log for that date.",
                "Paragraph 6: Separately, Grace reviews Veyra's access control policy documentation. She finds it complete, clearly written, and aligned with good practice. Based on this review alone, Grace initially proposes classifying the area as compliant, noting no issues in the documentation.",
                "Paragraph 7: When Amara reconciles the two findings, Grace argues the access event is an isolated, already-resolved historical incident that warrants at most a Minor nonconformity. Tobi argues that the complete absence of any incident record for a successful unauthorized access indicates the monitoring function itself failed to detect a real security event — a Major nonconformity under Clause 9.1.",
                "Paragraph 8: Amara determines the finding is a Major nonconformity under Clause 9.1, since the missing incident record is direct evidence the monitoring function did not evaluate ISMS effectiveness as required. She drafts the nonconformity using the Requirement, Evidence of Failure, and Objective Statement structure, and requires Veyra to demonstrate that its monitoring and alerting capability — not just the single vulnerability Tobi found — has been genuinely strengthened before the finding can be closed."
            ]
        },
        "finding_severity_matrix": {
            "description": "Severity-scoring model used in this exam. Score = Impact × Likelihood. ISO/IEC 27001 does not mandate this specific model — it is a reference tool for this assessment only.",
            "impact_scale": "1=Negligible, 2=Minor, 3=Moderate, 4=Significant, 5=Critical",
            "likelihood_scale": "1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain",
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
            "category": "Case Study — Veyra Logistics (8 of 35, hardcoded)",
            "section": "Paragraph 4",
            "type": "single_select",
            "exhibit_ref": "veyra_case_study",
            "text": "Veyra's IT lead asks Amara to compress the audit from four days to two. What is the correct basis for Amara's response?",
            "options": [
                {
                    "text": "She may agree if Veyra commits to extra staff availability during the shorter window.",
                    "correct": false
                },
                {
                    "text": "The calculated duration is a compliance obligation under ISO/IEC 27006-1:2024, not a negotiable service term.",
                    "correct": true
                },
                {
                    "text": "She may shorten it since Veyra is a first-time, lower-risk certification candidate.",
                    "correct": false
                },
                {
                    "text": "The decision belongs to Tobi as the technical specialist on the team.",
                    "correct": false
                }
            ],
            "rationale": "Audit duration under ISO/IEC 27006-1:2024 reflects a compliance calculation the Certification Body cannot waive, regardless of the client's business pressure or the auditor's own judgement about risk level.",
            "lms_direction": "Review Module 5.1 — Audit Duration Calculation."
        },
        {
            "category": "Case Study — Veyra Logistics (8 of 35, hardcoded)",
            "section": "Paragraph 6",
            "type": "interactive_tool",
            "tool_type": "ncr_generator",
            "exhibit_ref": "veyra_case_study",
            "text": "Complete the Nonconformity Report for the finding described in Paragraphs 5–8: a successful unauthorized access attempt with no corresponding incident record.",
            "tool_data": {
                "findings": "A successful unauthorized access attempt on Veyra's admin panel occurred three months prior to the audit, with no corresponding entry in Veyra's incident log for that date.",
                "classifications": [
                    "Major",
                    "Minor",
                    "Opportunity for Improvement"
                ],
                "clauses": [
                    "Clause 9.1 - Monitoring, Measurement, Analysis and Evaluation",
                    "Clause 7.5 - Control of Documented Information",
                    "Clause 6.1.3 - Risk Treatment"
                ]
            },
            "expected_payload": {
                "classification": "Major",
                "clause": "Clause 9.1 - Monitoring, Measurement, Analysis and Evaluation"
            },
            "rationale": "The absence of any incident record for a real, successful security event is direct evidence the monitoring function failed to detect and evaluate ISMS effectiveness, which is precisely what Clause 9.1 requires — a systemic failure, not a documentation gap.",
            "lms_direction": "Review Module 4.6 — Clause 9, and Module 5.2 — The R+E+O Formula."
        },
        {
            "category": "Case Study — Veyra Logistics (8 of 35, hardcoded)",
            "section": "Paragraphs 5–7",
            "type": "interactive_tool",
            "tool_type": "context_sorter",
            "exhibit_ref": "veyra_case_study",
            "text": "Sort each piece of evidence into the correct category based on who produced it and what it actually demonstrates.",
            "tool_data": {
                "items": [
                    {
                        "id": "i1",
                        "text": "A successful unauthorized access attempt with no incident log entry"
                    },
                    {
                        "id": "i2",
                        "text": "A well-written, complete access control policy document"
                    },
                    {
                        "id": "i3",
                        "text": "The absence of any technical alert for the access event"
                    },
                    {
                        "id": "i4",
                        "text": "Confirmation the policy aligns with good documentation practice"
                    }
                ],
                "categories": [
                    "Tobi's Technical Evidence (Stage 2 Operational)",
                    "Grace's Documentation Evidence (Stage 1-Type Review)"
                ]
            },
            "expected_payload": {
                "Tobi's Technical Evidence (Stage 2 Operational)": [
                    "i1",
                    "i3"
                ],
                "Grace's Documentation Evidence (Stage 1-Type Review)": [
                    "i2",
                    "i4"
                ]
            },
            "rationale": "Tobi's evidence is operational and technical — what actually happened and whether it was detected. Grace's evidence is documentary — what the policy says should happen. Both are genuine, valid evidence; they simply answer different questions.",
            "lms_direction": "Review Module 1.5 — Stage 1 and Stage 2, and Module 4.6 — Clause 9."
        },
        {
            "category": "Case Study — Veyra Logistics (8 of 35, hardcoded)",
            "section": "Paragraphs 1–8",
            "type": "interactive_tool",
            "tool_type": "flowchart_arranger",
            "exhibit_ref": "veyra_case_study",
            "text": "Arrange these events from the Veyra engagement in the correct chronological order.",
            "tool_data": {
                "steps": [
                    {
                        "id": "s3",
                        "text": "Stage 1 documentation review finds no blocking gaps"
                    },
                    {
                        "id": "s1",
                        "text": "Veyra's client makes certification a contractual condition"
                    },
                    {
                        "id": "s5",
                        "text": "Tobi discovers the unlogged unauthorized access attempt"
                    },
                    {
                        "id": "s2",
                        "text": "Meridian Assurance assigns Amara's three-person audit team"
                    },
                    {
                        "id": "s6",
                        "text": "Amara classifies the finding as a Major nonconformity"
                    }
                ]
            },
            "expected_payload": [
                "s1",
                "s2",
                "s3",
                "s5",
                "s6"
            ],
            "rationale": "The engagement follows: certification trigger, team assignment, Stage 1 clearance, Stage 2 technical discovery, then final classification — reflecting the real Stage 1/Stage 2 sequence this course is built around.",
            "lms_direction": "Review Module 1.3 — the Veyra Briefing Packet, and Module 1.5 — Stage 1 and Stage 2."
        },
        {
            "category": "Case Study — Veyra Logistics (8 of 35, hardcoded)",
            "section": "Paragraph 8",
            "type": "interactive_tool",
            "tool_type": "root_cause_tree",
            "exhibit_ref": "veyra_case_study",
            "text": "Complete the Five Whys tracing Veyra's missing incident record to its root cause.",
            "tool_data": {
                "levels": [
                    {
                        "id": "why1",
                        "question": "Why was there no incident record for the unauthorized access attempt?",
                        "options": [
                            "The monitoring system did not detect or alert on the event",
                            "The IT team forgot to log it manually",
                            "The event was deliberately not reported"
                        ]
                    },
                    {
                        "id": "why2",
                        "question": "Why did the monitoring system not detect the event?",
                        "options": [
                            "Monitoring and alerting had not been configured to cover this specific access path",
                            "Staff were not trained on the incident log tool",
                            "The event was too minor to register"
                        ]
                    },
                    {
                        "id": "why3",
                        "question": "Why was monitoring not configured to cover this access path?",
                        "options": [
                            "Clause 9.1 monitoring scope was never reviewed against the actual admin panel risk",
                            "Veyra had not purchased sufficient logging software",
                            "The access path was added after the ISMS was designed and never revisited"
                        ]
                    }
                ]
            },
            "expected_payload": {
                "why1": "The monitoring system did not detect or alert on the event",
                "why2": "Monitoring and alerting had not been configured to cover this specific access path",
                "why3": "Clause 9.1 monitoring scope was never reviewed against the actual admin panel risk"
            },
            "rationale": "The root cause is systemic — Clause 9.1's monitoring scope itself was never properly evaluated against real risk, not a one-off technical gap. This is why patching only the single vulnerability would not satisfy Clause 10.2's requirement to address the root cause.",
            "lms_direction": "Review Module 4.7 — Clause 10, Improvement."
        },
        {
            "category": "Role Distinction & Independence",
            "section": "Module 1.1",
            "type": "single_select",
            "text": "What is the primary distinction between a Lead Auditor and an Internal Auditor?",
            "options": [
                {
                    "text": "A Lead Auditor is simply more experienced at the same first-party role.",
                    "correct": false
                },
                {
                    "text": "A Lead Auditor conducts third-party audits on behalf of a Certification Body, with a certification recommendation carrying external legal consequence.",
                    "correct": true
                },
                {
                    "text": "A Lead Auditor works only on Annex A controls, while an Internal Auditor covers Clauses 4–10.",
                    "correct": false
                },
                {
                    "text": "There is no meaningful distinction; the titles are used interchangeably in practice.",
                    "correct": false
                }
            ],
            "rationale": "An Internal Auditor evaluates their own organisation's ISMS first-party; a Lead Auditor evaluates a client's ISMS third-party, on behalf of an accredited Certification Body, with a recommendation that carries real external consequence.",
            "lms_direction": "Review Module 1.1 — Role Distinction."
        },
        {
            "category": "Role Distinction & Independence",
            "section": "Module 1.4",
            "type": "true_false",
            "text": "True or False: A threat to independence affecting only one member of the audit team, not the Lead Auditor personally, is that team member's responsibility alone to disclose.",
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
            "rationale": "The Lead Auditor is accountable for recognising and disclosing independence threats across the entire team, not just their own conduct — proactively checking for threats in team members is part of the Lead Auditor's role.",
            "lms_direction": "Review Module 1.4 — Independence Threats Overview."
        },
        {
            "category": "Certification Rules & Boundaries",
            "section": "Module 2.1",
            "type": "single_select",
            "text": "Which body currently holds the global accreditation authority previously held by IAF?",
            "options": [
                {
                    "text": "ISO itself, directly",
                    "correct": false
                },
                {
                    "text": "Global Accreditation Cooperation Incorporated (GAC)",
                    "correct": true
                },
                {
                    "text": "CQI & IRCA",
                    "correct": false
                },
                {
                    "text": "PECB",
                    "correct": false
                }
            ],
            "rationale": "IAF ceased operating on 1 January 2026, merging with ILAC to form Global Accreditation Cooperation Incorporated (GAC), which now holds this authority.",
            "lms_direction": "Review Module 2.1 — GAC & the Accreditation Ecosystem."
        },
        {
            "category": "Certification Rules & Boundaries",
            "section": "Module 2.2",
            "type": "true_false",
            "text": "True or False: ISO 19011 is a binding certification requirement equivalent in authority to ISO/IEC 17021-1.",
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
            "rationale": "ISO 19011 is advisory guidance; ISO/IEC 17021-1 is the binding certification rulebook. Confusing the two is one of the most common role-boundary errors a Lead Auditor can make.",
            "lms_direction": "Review Module 2.2 — ISO/IEC 17021-1 Deep Dive."
        },
        {
            "category": "Certification Rules & Boundaries",
            "section": "Module 2.4",
            "type": "single_select",
            "text": "A technical auditor on the team, after finding a gap, tells the client exactly which specific tool and configuration to install. What has occurred?",
            "options": [
                {
                    "text": "Acceptable value-add, since the auditor is simply being helpful",
                    "correct": false
                },
                {
                    "text": "Prohibited consultancy, since a specific instruction crosses the line evidencing a gap does not",
                    "correct": true
                },
                {
                    "text": "Acceptable, provided the Lead Auditor is not the one who said it",
                    "correct": false
                },
                {
                    "text": "A finding that should be logged as a nonconformity against the client",
                    "correct": false
                }
            ],
            "rationale": "Naming a specific tool and configuration is a specific instruction, which constitutes prohibited consultancy under the anti-consulting rule — regardless of which team member said it, since the Lead Auditor is accountable for the whole team's compliance.",
            "lms_direction": "Review Module 2.4 — The Anti-Consulting Rule & Team Boundaries."
        },
        {
            "category": "Certification Rules & Boundaries",
            "section": "Module 2.3",
            "type": "single_select",
            "text": "Under ISO/IEC 27006-1:2024, what is the correct basis for calculating audit duration?",
            "options": [
                {
                    "text": "The organisation's total employee headcount",
                    "correct": false
                },
                {
                    "text": "The effective headcount genuinely operating within the certified ISMS scope, plus complexity factors like multi-site scope and outsourcing",
                    "correct": true
                },
                {
                    "text": "A flat rate applied equally regardless of organisational size",
                    "correct": false
                },
                {
                    "text": "Whatever duration the client and Lead Auditor mutually agree upon",
                    "correct": false
                }
            ],
            "rationale": "Effective headcount within scope, not total organisational size, is the correct baseline — multi-site and outsourcing factors then each independently add required duration on top.",
            "lms_direction": "Review Module 5.1 — Audit Duration Calculation."
        },
        {
            "category": "Auditing Methodology",
            "section": "Module 3.1",
            "type": "single_select",
            "text": "What does ISO/IEC 27007 add on top of ISO 19011's generic guidance?",
            "options": [
                {
                    "text": "It replaces 19011 entirely for ISMS audits",
                    "correct": false
                },
                {
                    "text": "ISMS-specific evidence expectations for auditing Clauses 4 through 10",
                    "correct": true
                },
                {
                    "text": "Binding certification body requirements",
                    "correct": false
                },
                {
                    "text": "Technical procedures for testing individual Annex A controls",
                    "correct": false
                }
            ],
            "rationale": "27007 sharpens 19011's seven generic principles specifically for ISMS auditing — it does not replace 19011, and it is guidance-level, not the technical control-testing layer (which is TS 27008).",
            "lms_direction": "Review Module 3.1 — ISO 19011 & ISO/IEC 27007."
        },
        {
            "category": "Auditing Methodology",
            "section": "Module 3.2",
            "type": "true_false",
            "text": "True or False: A complete, well-organised training record is sufficient evidence that a technical control is currently functioning correctly.",
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
            "rationale": "A training record proves attendance and documentation, not current technical function — TS 27008 requires genuine technical verification, such as a configuration or log review, not paperwork alone.",
            "lms_direction": "Review Module 3.2 — ISO/IEC TS 27008."
        },
        {
            "category": "Auditing ISO 27001 Clauses (4–10)",
            "section": "Module 4.1",
            "type": "single_select",
            "text": "An organisation's context analysis document is professionally formatted and reviewed annually 'as a matter of policy.' What should an auditor investigate further?",
            "options": [
                {
                    "text": "Nothing — annual review satisfies Clause 4.1",
                    "correct": false
                },
                {
                    "text": "Whether the document reflects genuine, specific, current analysis rather than being re-dated without substantive re-examination",
                    "correct": true
                },
                {
                    "text": "Whether the formatting meets a professional standard",
                    "correct": false
                },
                {
                    "text": "Whether the document was approved by top management",
                    "correct": false
                }
            ],
            "rationale": "A vague 'we review it annually' answer with no nameable recent change is consistent with a document re-dated on schedule without genuine re-examination — the 'Boilerplate Context' trap.",
            "lms_direction": "Review Module 4.1 — Clause 4, Context of the Organisation."
        },
        {
            "category": "Auditing ISO 27001 Clauses (4–10)",
            "section": "Module 4.2",
            "type": "true_false",
            "text": "True or False: A signed information security policy is, on its own, sufficient evidence of leadership commitment under Clause 5.1.",
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
            "rationale": "A signature proves approval of a document, not that resources were made available or leadership genuinely engaged afterward — Clause 5.1 requires demonstrated, ongoing commitment beyond the signature itself.",
            "lms_direction": "Review Module 4.2 — Clause 5, Leadership."
        },
        {
            "category": "Auditing ISO 27001 Clauses (4–10)",
            "section": "Module 4.3",
            "type": "single_select",
            "text": "An organisation's Statement of Applicability excludes A.5.23 (Cloud Services) with the justification 'not applicable — we don't use cloud services,' despite being fully cloud-hosted. What is the correct finding?",
            "options": [
                {
                    "text": "Acceptable, since exclusions are always at the organisation's discretion",
                    "correct": false
                },
                {
                    "text": "A critical deficit — the justification directly contradicts a known operational fact",
                    "correct": true
                },
                {
                    "text": "A minor documentation inconsistency requiring no further action",
                    "correct": false
                },
                {
                    "text": "Acceptable if the SoA is otherwise well-formatted",
                    "correct": false
                }
            ],
            "rationale": "The stated justification contradicts an established fact about the organisation's own infrastructure — this is a factually incorrect exclusion, not a borderline judgement call, and must be raised as a nonconformity against Clause 6.1.3.",
            "lms_direction": "Review Module 4.3 — Clause 6, Planning."
        },
        {
            "category": "Auditing ISO 27001 Clauses (4–10)",
            "section": "Module 4.4",
            "type": "single_select",
            "text": "A staff member's training record is complete and current. Asked why a specific access review step matters, they say 'it's just a step in the checklist.' What does this indicate?",
            "options": [
                {
                    "text": "Clause 7.2 and 7.3 are both fully satisfied",
                    "correct": false
                },
                {
                    "text": "A genuine awareness gap under Clause 7.3, despite the training record being complete",
                    "correct": true
                },
                {
                    "text": "The training programme itself is non-compliant and must be redesigned",
                    "correct": false
                },
                {
                    "text": "No further verification is needed since the record is complete",
                    "correct": false
                }
            ],
            "rationale": "The answer shows rote compliance without understanding the consequence of skipping the step — Clause 7.3 requires awareness of purpose and consequence, which a completed training record alone does not establish.",
            "lms_direction": "Review Module 4.4 — Clause 7, Support."
        },
        {
            "category": "Auditing ISO 27001 Clauses (4–10)",
            "section": "Module 4.5",
            "type": "true_false",
            "text": "True or False: Reviewing a single, recent, clean instance of an operational control is sufficient to establish Clause 8 compliance.",
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
            "rationale": "A single instance proves the control can work once; Clause 8 requires consistent operation over time, which requires sampling across several months, not just the most recent example.",
            "lms_direction": "Review Module 4.5 — Clause 8, Operation."
        },
        {
            "category": "Auditing ISO 27001 Clauses (4–10)",
            "section": "Module 4.7",
            "type": "single_select",
            "text": "Following a Major finding on a monitoring gap, an organisation proposes patching only the specific vulnerability discovered. Does this satisfy Clause 10.2?",
            "options": [
                {
                    "text": "Yes, since the specific instance found is now resolved",
                    "correct": false
                },
                {
                    "text": "No, because it addresses the symptom, not the systemic monitoring failure that allowed it to go undetected",
                    "correct": true
                },
                {
                    "text": "Yes, provided the patch is documented and dated",
                    "correct": false
                },
                {
                    "text": "No, because Clause 10.2 requires certification suspension for any Major finding",
                    "correct": false
                }
            ],
            "rationale": "Clause 10.2 requires eliminating the cause, not just resolving the specific instance — patching one vulnerability does nothing to address why the monitoring function failed to detect it in the first place.",
            "lms_direction": "Review Module 4.7 — Clause 10, Improvement."
        },
        {
            "category": "Findings & Calculation",
            "section": "Module 5.2",
            "type": "single_select",
            "text": "Which of the following is a complete, defensible nonconformity statement under the R+E+O formula?",
            "options": [
                {
                    "text": "\"Veyra's security monitoring is not adequate and needs improvement.\"",
                    "correct": false
                },
                {
                    "text": "\"Requirement: Clause 9.1 requires monitoring that evaluates ISMS effectiveness. Evidence: a successful unauthorized access occurred on [date] with no corresponding incident log entry. Objective Statement: the monitoring function did not detect or record a real security event within its scope.\"",
                    "correct": true
                },
                {
                    "text": "\"The audit team believes Veyra's monitoring is inadequate based on professional judgement.\"",
                    "correct": false
                },
                {
                    "text": "\"Veyra failed the audit due to poor security practices.\"",
                    "correct": false
                }
            ],
            "rationale": "Only the second option contains all three required components explicitly: a named Requirement, a specific checkable Evidence of Failure, and an Objective Statement describing the gap rather than delivering a verdict.",
            "lms_direction": "Review Module 5.2 — The R+E+O Formula."
        },
        {
            "category": "Findings & Calculation",
            "section": "Module 5.2",
            "type": "true_false",
            "text": "True or False: Stating a finding with strong, confident language makes it more defensible against a client challenge.",
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
            "rationale": "Confidence in a conclusion is not evidence for it — a defensible finding relies on the strength of its Requirement, Evidence, and Objective Statement components, not the tone in which it's written.",
            "lms_direction": "Review Module 5.2 — The R+E+O Formula."
        }
    ]
}