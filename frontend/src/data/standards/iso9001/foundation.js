export default {
  "title": "ISO 9001:2015 Foundations",
  "layout_size": 35,
  "time_limit": 45,
  "pool_size": 60,
  "exhibits": {
    "audit_story": {
      "description": "Continuous 8-paragraph scenario.",
      "paragraphs": [
        "Paragraph 1: Context, external audit timeframe, recent site changes, regulatory shift...",
        "Paragraph 2: Initial documentation review (HIRA / Aspect Register / Quality Plan)...",
        "Paragraph 3: Fieldwork interview with operator/technician revealing procedural gap...",
        "Paragraph 4: Cross-referencing two independent records revealing discrepancy...",
        "Paragraph 5: Synthesis of finding (uncontrolled change + untrained personnel)...",
        "Paragraph 6: Five-Whys root cause trace through organizational handoffs...",
        "Paragraph 7: Auditee proposed immediate containment vs systemic investigation...",
        "Paragraph 8: Audit reporting, severity classification, and Management Review prep."
      ]
    },
    "finding_severity_matrix": {
      "description": "Severity model: Score = Potential Harm x Likelihood of Recurrence.",
      "harm_scale": "1=Negligible, 2=Minor, 3=Moderate, 4=Serious, 5=Severe/Catastrophic",
      "recurrence_scale": "1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain",
      "bands": [
        { "min": 1, "max": 6, "level": "Opportunity for Improvement" },
        { "min": 7, "max": 14, "level": "Minor Nonconformity" },
        { "min": 15, "max": 25, "level": "Major Nonconformity" }
      ]
    }
  },
  "questions": [
    // --- STANDARD MULTIPLE CHOICE QUESTION EXAMPLE ---
    {
      "category": "Category Name from Blueprint",
      "section": "Paragraph X or Clause Y",
      "type": "single_select",
      "exhibit_ref": "audit_story",
      "text": "Question stem text?",
      "options": [
        { "text": "Option A text", "correct": false },
        { "text": "Option B text (Correct)", "correct": true },
        { "text": "Option C text", "correct": false },
        { "text": "Option D text", "correct": false }
      ],
      "rationale": "Detailed explanation of audit logic.",
      "lms_direction": "Review LMS Activity X.Y — Clause Z."
    },
    // --- TRUE/FALSE QUESTION EXAMPLE ---
    {
      "category": "Category Name from Blueprint",
      "section": "Paragraph X or Clause Y",
      "type": "true_false",
      "exhibit_ref": "audit_story",
      "text": "True or False statement text...",
      "options": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ],
      "rationale": "Detailed explanation.",
      "lms_direction": "Review LMS Activity X.Y."
    },
    // --- INTERACTIVE TOOL: CONTEXT SORTER EXAMPLE ---
    {
      "category": "Case Study — [TITLE] (8 of 35, hardcoded)",
      "section": "Paragraph 1",
      "type": "interactive_tool",
      "tool_type": "context_sorter",
      "exhibit_ref": "audit_story",
      "text": "Sort the following context factors into their respective categories under Clause X.",
      "tool_data": {
        "items": [
          { "id": "i1", "text": "Factor 1" },
          { "id": "i2", "text": "Factor 2" },
          { "id": "i3", "text": "Factor 3" },
          { "id": "i4", "text": "Factor 4" }
        ],
        "categories": ["Cat 1", "Cat 2", "Cat 3", "Cat 4"]
      },
      "expected_payload": {
        "Cat 1": ["i1"],
        "Cat 2": ["i2"],
        "Cat 3": ["i3"],
        "Cat 4": ["i4"]
      },
      "rationale": "Audit explanation...",
      "lms_direction": "Review LMS Activity X.Y."
    },
    // --- INTERACTIVE TOOL: FLOWCHART ARRANGER EXAMPLE ---
    {
      "category": "Case Study — [TITLE] (8 of 35, hardcoded)",
      "section": "Paragraph 4",
      "type": "interactive_tool",
      "tool_type": "flowchart_arranger",
      "exhibit_ref": "audit_story",
      "text": "Arrange the audit steps in chronological order as performed by the auditor.",
      "tool_data": {
        "steps": [
          { "id": "s2", "text": "Step 2 description" },
          { "id": "s1", "text": "Step 1 description" },
          { "id": "s3", "text": "Step 3 description" }
        ]
      },
      "expected_payload": ["s1", "s2", "s3"],
      "rationale": "Step-by-step audit trail sequence explanation.",
      "lms_direction": "Review LMS Activity X.Y."
    },
    // --- INTERACTIVE TOOL: NCR GENERATOR EXAMPLE ---
    {
      "category": "Case Study — [TITLE] (8 of 35, hardcoded)",
      "section": "Paragraph 5",
      "type": "interactive_tool",
      "tool_type": "ncr_generator",
      "exhibit_ref": "audit_story",
      "text": "Complete the Nonconformity Report for the observed finding.",
      "tool_data": {
        "findings": "Factual audit evidence description.",
        "classifications": ["Major", "Minor", "Opportunity for Improvement"],
        "clauses": ["Clause 6.1", "Clause 8.1.3", "Clause 9.2"]
      },
      "expected_payload": {
        "classification": "Minor",
        "clause": "Clause 8.1.3"
      },
      "rationale": "Audit classification and clause selection justification.",
      "lms_direction": "Review LMS Activity X.Y."
    },
    // --- INTERACTIVE TOOL: ROOT CAUSE TREE EXAMPLE ---
    {
      "category": "Case Study — [TITLE] (8 of 35, hardcoded)",
      "section": "Paragraph 6",
      "type": "interactive_tool",
      "tool_type": "root_cause_tree",
      "exhibit_ref": "audit_story",
      "text": "Trace the observed audit failure to its systemic root cause using Five Whys.",
      "tool_data": {
        "levels": [
          {
            "id": "why1",
            "question": "Why did the immediate operational failure occur?",
            "options": ["Correct direct cause", "Distractor 1", "Distractor 2"]
          },
          {
            "id": "why2",
            "question": "Why did the procedural trigger fail?",
            "options": ["Correct procedural cause", "Distractor 1", "Distractor 2"]
          },
          {
            "id": "why3",
            "question": "Why was the systemic handoff missing?",
            "options": ["Correct root cause", "Distractor 1", "Distractor 2"]
          }
        ]
      },
      "expected_payload": {
        "why1": "Correct direct cause",
        "why2": "Correct procedural cause",
        "why3": "Correct root cause"
      },
      "rationale": "RCA analysis explanation.",
      "lms_direction": "Review LMS Activity X.Y."
    }
  ],
  "remediationData": {
    "Category Name from Blueprint": "Feedback/remediation text for failed attempts in this category."
  }
};
