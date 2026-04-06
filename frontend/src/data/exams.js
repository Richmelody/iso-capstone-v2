export const examLibrary = {
  "14001": {
    title: "ISO 14001:2015 Internal Auditor",
    questions: [
      { category: "Definitions", section: "1. Fundamentals", text: "In ISO 14001, an 'Environmental Aspect' is best defined as:", options: [{ text: "The cause (interaction with the environment)", correct: true }, { text: "The effect (change to the environment)", correct: false }, { text: "The legal limit for pollution", correct: false }, { text: "The emergency response plan", correct: false }], rationale: "An Aspect is the 'Cause' (e.g., Emissions), while Impact is the 'Effect'. Legal limits are Compliance Obligations." },
      { category: "Structure", section: "1. Fundamentals", text: "ISO 14001 follows which structure to ensure compatibility with ISO 9001 and ISO 45001?", options: [{ text: "Annex SL (High Level Structure)", correct: true }, { text: "The Kyoto Protocol Structure", correct: false }, { text: "PDCA-Advanced Framework", correct: false }, { text: "The Global Reporting Initiative (GRI)", correct: false }], rationale: "Annex SL provides the harmonized 10-clause structure for all ISO Management Systems." },
      { category: "Scope", section: "1. Fundamentals", text: "Can an organization exclude a specific department from the Scope of the EMS to avoid auditing it?", options: [{ text: "No, the scope must be credible and include all significant aspects", correct: true }, { text: "Yes, if the General Manager approves it", correct: false }, { text: "Yes, if the department is low risk", correct: false }, { text: "No, unless they pay a higher certification fee", correct: false }], rationale: "The scope must be credible and cannot exclude activities that affect environmental performance to mislead stakeholders." },
      { category: "Leadership", section: "1. Fundamentals", text: "Who is ultimately accountable for the effectiveness of the EMS?", options: [{ text: "Top Management", correct: true }, { text: "The Environmental Health & Safety Manager", correct: false }, { text: "The External Auditor", correct: false }, { text: "The Quality Department", correct: false }], rationale: "Clause 5.1 places ultimate accountability on Top Management. They cannot delegate accountability, only responsibility." },
      { category: "Aspects", section: "2. Planning Phase", text: "Scenario: You see a new machine installed last week. The 'Aspects Register' does not list it. Is this an NC?", options: [{ text: "Yes, Clause 6.1.2 (Failure to identify new aspects)", correct: true }, { text: "No, they have a 3-month grace period", correct: false }, { text: "It is an Opportunity for Improvement (OFI)", correct: false }, { text: "No, unless the machine leaks", correct: false }], rationale: "New activities/equipment create new risks. The register must be updated immediately before operation." },
      { category: "Legal", section: "2. Planning Phase", text: "Which document must the auditor check to verify Clause 6.1.3 (Compliance Obligations)?", options: [{ text: "The Legal Register (List of Laws)", correct: true }, { text: "The Health & Safety Policy", correct: false }, { text: "The ISO 14001 Standard itself", correct: false }, { text: "The Google Search History", correct: false }], rationale: "Auditors must verify the organization has identified its specific legal requirements via a Legal Register." },
      { category: "Lifecycle", section: "2. Planning Phase", text: "ISO 14001 requires organizations to consider which perspective when determining aspects?", options: [{ text: "Lifecycle Perspective", correct: true }, { text: "Cradle-to-Cradle Certification", correct: false }, { text: "Gate-to-Gate (Factory only)", correct: false }, { text: "Carbon Footprint Analysis", correct: false }], rationale: "They must consider upstream (suppliers) and downstream (disposal/use) impacts, though a full LCA is not required." },
      { category: "Risks", section: "2. Planning Phase", text: "Scenario: The company identified a flood risk but has no plan to address it. This is a failure of:", options: [{ text: "Clause 6.1.1 (Risks & Opportunities)", correct: true }, { text: "Clause 7.2 (Competence)", correct: false }, { text: "Clause 9.1 (Monitoring)", correct: false }, { text: "Clause 10.2 (Non-Conformity)", correct: false }], rationale: "Identified risks must be addressed via the planning process. Identifying a risk and ignoring it is a non-conformance." },
      { category: "Control", section: "3. Operational Control", text: "Scenario: Hazardous waste bins are unlabeled and overflowing. The procedure requires labeling. This is a breach of:", options: [{ text: "Clause 8.1 (Operational Planning & Control)", correct: true }, { text: "Clause 4.2 (Interested Parties)", correct: false }, { text: "Clause 5.3 (Roles and Responsibilities)", correct: false }, { text: "Clause 6.1.1 (General Risks)", correct: false }], rationale: "Failure to implement established criteria (procedures/labels) is a direct Clause 8.1 NC." },
      { category: "Competence", section: "3. Operational Control", text: "You ask an operator about the environmental impact of their job. They say 'I don't know'. Breach of:", options: [{ text: "Clause 7.3 (Awareness)", correct: true }, { text: "Clause 5.2 (Policy)", correct: false }, { text: "Clause 9.1.2 (Evaluation of Compliance)", correct: false }, { text: "Clause 10.1 (General Improvement)", correct: false }], rationale: "Staff must be aware of the implications of not conforming with the EMS requirements (Clause 7.3)." },
      { category: "Emergency", section: "3. Operational Control", text: "Scenario: A chemical spill occurs. The spill kit is empty. This is a failure of:", options: [{ text: "Clause 8.2 (Emergency Preparedness)", correct: true }, { text: "Clause 10.2 (Corrective Action)", correct: false }, { text: "Clause 8.1 (Operational Control)", correct: false }, { text: "Clause 4.4 (EMS System)", correct: false }], rationale: "Clause 8.2 requires the capability to respond. An empty kit means the response mechanism failed." },
      { category: "Contractors", section: "3. Operational Control", text: "A contractor dumps paint down a drain. The company says 'Not our employee, not our problem.' Are they correct?", options: [{ text: "No, Clause 8.1 requires control of outsourced processes", correct: true }, { text: "Yes, contractors are excluded from the EMS", correct: false }, { text: "Yes, this is a legal issue, not an EMS issue", correct: false }, { text: "No, but it is only a Minor NC", correct: false }], rationale: "The organization retains responsibility for environmental impacts of outsourced work (Contractors)." },
      { category: "Design", section: "3. Operational Control", text: "When designing a new product, the organization must consider environmental requirements. This relates to:", options: [{ text: "Clause 8.1 (Design & Development controls)", correct: true }, { text: "Clause 9.3 (Management Review)", correct: false }, { text: "Clause 5.1 (Leadership)", correct: false }, { text: "Clause 10.1 (Improvement)", correct: false }], rationale: "Operational control extends to the design phase to minimize lifecycle impacts (e.g., material selection)." },
      { category: "Monitoring", section: "4. Performance Eval", text: "Scenario: The pH meter used to check wastewater has not been calibrated in 2 years. Clause breached?", options: [{ text: "Clause 9.1.1 (Monitoring & Measurement)", correct: true }, { text: "Clause 7.1.3 (Infrastructure)", correct: false }, { text: "Clause 8.1 (Operational Control)", correct: false }, { text: "Clause 10.2 (Non-Conformity)", correct: false }], rationale: "Equipment used to measure environmental performance must be calibrated and verified to ensure valid data." },
      { category: "Evaluation", section: "4. Performance Eval", text: "The organization checks its compliance with the law every year. Is this enough?", options: [{ text: "Yes, if the frequency is defined and effective (Clause 9.1.2)", correct: true }, { text: "No, it must be monthly", correct: false }, { text: "No, it must be weekly", correct: false }, { text: "Yes, but only if the auditor approves", correct: false }], rationale: "Clause 9.1.2 requires evaluation at planned intervals. 'Annual' is acceptable if the risk is low and justified." },
      { category: "Internal Audit", section: "4. Performance Eval", text: "Scenario: The Environmental Manager audits his own department. Is this allowed?", options: [{ text: "No, auditors must ensure objectivity and impartiality (Clause 9.2)", correct: true }, { text: "Yes, he knows the system best", correct: false }, { text: "Yes, if the company is small", correct: false }, { text: "No, unless he is a Lead Auditor", correct: false }], rationale: "Auditors cannot audit their own work. Impartiality is a core principle of Clause 9.2." },
      { category: "Review", section: "4. Performance Eval", text: "Management Review (9.3) must include discussion of:", options: [{ text: "Trends in nonconformities and corrective actions", correct: true }, { text: "A list of employee birthdays", correct: false }, { text: "The stock market performance", correct: false }, { text: "Detailed maintenance logs for every machine", correct: false }], rationale: "Management Review is a strategic look at system performance data, including NC trends, not operational minutiae." },
      { category: "Evidence", section: "5. Audit Skills", text: "Which of the following is valid 'Audit Evidence'?", options: [{ text: "A signed training record and operator interview", correct: true }, { text: "A rumor heard in the canteen", correct: false }, { text: "The auditor's personal opinion", correct: false }, { text: "A feeling that something is wrong", correct: false }], rationale: "Evidence must be verifiable. Hearsay, opinions, and feelings are not valid audit evidence." },
      { category: "NC Writing", section: "5. Audit Skills", text: "A Non-Conformity statement must contain:", options: [{ text: "The Criteria (Requirement), The Evidence, and The Finding", correct: true }, { text: "The name of the person to blame", correct: false }, { text: "The solution to the problem", correct: false }, { text: "The cost of the mistake", correct: false }], rationale: "NCs focus on the system failure (Criteria vs Evidence). Blame is irrelevant; solutions are the auditee's job." },
      { category: "Improvement", section: "5. Audit Skills", text: "Fixing a leak is a 'Correction'. Finding out *why* it leaked is:", options: [{ text: "Root Cause Analysis (Clause 10.2)", correct: true }, { text: "Preventive Maintenance", correct: false }, { text: "Continual Improvement", correct: false }, { text: "Risk Assessment", correct: false }], rationale: "You must eliminate the root cause to prevent recurrence. This is the definition of Corrective Action." }
    ],
    remediationData: {
      "Definitions": "Review ISO 14001 Clause 3 terms. Master the distinction between Aspect (Cause) and Impact (Effect).",
      "Structure": "Study Annex SL. This 10-clause structure is the backbone of all integrated management systems.",
      "Scope": "Review Clause 4.3. The scope cannot exclude activities to 'hide' risks. It must be credible.",
      "Leadership": "Re-read Clause 5.1. Top Management cannot delegate accountability, only responsibility.",
      "Aspects": "Focus on Clause 6.1.2. The Aspects Register must be a 'live' document updated with change.",
      "Legal": "Focus on Clause 6.1.3. You cannot audit compliance without checking the Legal Register first.",
      "Lifecycle": "Review Clause 6.1.2. Understand how to control impacts upstream (suppliers) and downstream (disposal).",
      "Risks": "Review Clause 6.1.1. Risks identified in planning must have actions assigned to them.",
      "Control": "Focus on Clause 8.1. Procedures are the 'Criteria'. If they are not followed, it is an NC.",
      "Competence": "Focus on Clause 7.2/7.3. Employees don't need to recite policy, but must know their impacts.",
      "Emergency": "Review Clause 8.2. Preparedness means having equipment (spill kits) ready and tested.",
      "Contractors": "Review Clause 8.1 (Outsourced Processes). The site is responsible for contractor behavior.",
      "Design": "Study Lifecycle controls in Design. Pollution prevention starts at the drawing board.",
      "Monitoring": "Focus on Clause 9.1.1. Uncalibrated equipment renders all data invalid. Check tags.",
      "Evaluation": "Review Clause 9.1.2. Evaluation of Compliance is a check against Law, not just Procedure.",
      "Internal Audit": "Study Clause 9.2. Impartiality is key. You cannot mark your own homework.",
      "Review": "Review Clause 9.3 inputs. Management must review systemic data, not just operational noise.",
      "Evidence": "Audit Principles: Evidence must be verifiable (Records, Observation, or Statement of Fact).",
      "NC Writing": "Practice the 'PLOR' or 'CEC' method. Never blame a person; blame the process gap.",
      "Improvement": "Focus on Clause 10.2. Distinguish between 'Fixing it' (Correction) and 'Stopping it forever' (RCA)."
    }
  },
  "9001": {
    title: "ISO 9001:2015 Quality Management Systems",
    questions: [
      // SECTION 1: FUNDAMENTALS & CONTEXT (Clauses 1 - 4)
      { 
        category: "QMS Fundamentals", 
        section: "1. Core Concepts", 
        text: "What is the expected output of a successfully implemented ISO 9001 Quality Management System?", 
        options: [
          { text: "Zero organizational defects and infinite profitability", correct: false }, 
          { text: "Consistent provision of products/services that meet customer and applicable statutory requirements, and enhanced customer satisfaction", correct: true }, 
          { text: "A comprehensive set of documented procedures for every organizational task", correct: false }, 
          { text: "The elimination of all organizational risks", correct: false }
        ], 
        rationale: "ISO 9001 Clause 1 explicitly states the intended outcomes are meeting customer/regulatory requirements and enhancing customer satisfaction." 
      },
      { 
        category: "Context & Interested Parties", 
        section: "1. Core Concepts", 
        text: "According to the ISO 9001:2015/Amd.1:2024 amendment, what new consideration must an organization explicitly include when determining its context (Clause 4.1)?", 
        options: [
          { text: "The organization must calculate its exact carbon footprint", correct: false }, 
          { text: "The organization must determine whether climate change is a relevant issue", correct: true }, 
          { text: "The organization must transition to 100% renewable energy", correct: false }, 
          { text: "The organization must appoint a Climate Action Officer", correct: false }
        ], 
        rationale: "Amendment 1 (2024) mandates that organizations must determine if climate change is a relevant internal/external issue that affects the QMS." 
      },
      { 
        category: "Context & Interested Parties", 
        section: "1. Core Concepts", 
        text: "How must an organization handle the scope of its Quality Management System according to Clause 4.3?", 
        options: [
          { text: "It must be maintained as documented information stating the types of products and services covered.", correct: true }, 
          { text: "It must be verbally communicated to all stakeholders annually.", correct: false }, 
          { text: "It can exclude any department that management deems too complex to audit.", correct: false }, 
          { text: "It only applies to the manufacturing floor, excluding administrative processes.", correct: false }
        ], 
        rationale: "Clause 4.3 requires the scope to be available and maintained as documented information, stating the products and services covered." 
      },
      { 
        category: "QMS Fundamentals", 
        section: "1. Core Concepts", 
        text: "Under Clause 4.4, when establishing the QMS processes, an organization is explicitly required to determine:", 
        options: [
          { text: "The exact cost of each process.", correct: false }, 
          { text: "The inputs required and the outputs expected from these processes.", correct: true }, 
          { text: "The specific software vendors to be used.", correct: false }, 
          { text: "The daily work schedules of process operators.", correct: false }
        ], 
        rationale: "Clause 4.4.1(a) dictates that the organization shall determine the inputs required and the outputs expected from its processes." 
      },

      // SECTION 2: PDCA CYCLE MAPPING
      { 
        category: "PDCA Cycle", 
        section: "2. PDCA Architecture", 
        text: "According to the ISO 9001 Introduction, what is the primary purpose of the 'Plan' phase in the PDCA cycle?", 
        options: [
          { text: "To implement what was planned.", correct: false }, 
          { text: "To take actions to improve performance, as necessary.", correct: false }, 
          { text: "To establish objectives, resources, and identify/address risks and opportunities.", correct: true }, 
          { text: "To monitor and measure processes against policies.", correct: false }
        ], 
        rationale: "The 'Plan' phase is defined in 0.3.2 as establishing objectives, resources, and identifying/addressing risks and opportunities." 
      },
      { 
        category: "PDCA Cycle", 
        section: "2. PDCA Architecture", 
        text: "Under the Plan-Do-Check-Act (PDCA) cycle, Clause 8 (Operation) falls under which phase?", 
        options: [
          { text: "Plan", correct: false }, 
          { text: "Do", correct: true }, 
          { text: "Check", correct: false }, 
          { text: "Act", correct: false }
        ], 
        rationale: "Clause 8 (Operation) is the execution phase, representing the 'Do' in the PDCA cycle." 
      },
      { 
        category: "PDCA Cycle", 
        section: "2. PDCA Architecture", 
        text: "Performance Evaluation (Clause 9) represents which stage of the PDCA cycle?", 
        options: [
          { text: "Plan", correct: false }, 
          { text: "Do", correct: false }, 
          { text: "Check", correct: true }, 
          { text: "Act", correct: false }
        ], 
        rationale: "Clause 9 requires monitoring, measurement, analysis, and evaluation, making it the 'Check' phase." 
      },
      { 
        category: "PDCA Cycle", 
        section: "2. PDCA Architecture", 
        text: "Improvement (Clause 10) falls under which phase of the PDCA cycle?", 
        options: [
          { text: "Plan", correct: false }, 
          { text: "Do", correct: false }, 
          { text: "Check", correct: false }, 
          { text: "Act", correct: true }
        ], 
        rationale: "Clause 10 is the 'Act' phase, where the organization takes action to improve performance." 
      },

      // SECTION 3: LEADERSHIP & PLANNING (Clauses 5 - 6)
      { 
        category: "Leadership", 
        section: "3. Leadership & Planning", 
        text: "Which specific clause mandates that Top Management must take accountability for the effectiveness of the QMS?", 
        options: [
          { text: "Clause 4.1", correct: false }, 
          { text: "Clause 5.1", correct: true }, 
          { text: "Clause 7.1", correct: false }, 
          { text: "Clause 9.3", correct: false }
        ], 
        rationale: "Clause 5.1.1(a) places ultimate accountability on Top Management." 
      },
      { 
        category: "Customer Focus", 
        section: "3. Leadership & Planning", 
        text: "Under Clause 5.1.2 (Customer Focus), Top Management must ensure that:", 
        options: [
          { text: "Customer complaints are reduced to zero.", correct: false }, 
          { text: "Risks and opportunities affecting product conformity and customer satisfaction are determined and addressed.", correct: true }, 
          { text: "Every customer receives a personal phone call quarterly.", correct: false }, 
          { text: "Marketing budgets are increased annually.", correct: false }
        ], 
        rationale: "Clause 5.1.2(b) explicitly requires determining and addressing risks/opportunities that affect conformity and customer satisfaction." 
      },
      { 
        category: "Leadership", 
        section: "3. Leadership & Planning", 
        text: "What does Clause 5.2.2 require regarding the Quality Policy?", 
        options: [
          { text: "It must be memorized word-for-word by all employees.", correct: false }, 
          { text: "It must be available as documented information, communicated, understood, and applied.", correct: true }, 
          { text: "It must be signed by the external auditor.", correct: false }, 
          { text: "It must be rewritten every 6 months.", correct: false }
        ], 
        rationale: "Clause 5.2.2 dictates the policy must be maintained as documented information and communicated throughout the organization." 
      },
      { 
        category: "Planning & Risks", 
        section: "3. Leadership & Planning", 
        text: "When planning for the QMS (Clause 6.1), what sources of data MUST be considered to determine the risks and opportunities?", 
        options: [
          { text: "Financial reports and marketing projections", correct: false }, 
          { text: "The issues referred to in 4.1 (Context) and requirements referred to in 4.2 (Interested Parties)", correct: true }, 
          { text: "Competitor analyses and employee satisfaction surveys", correct: false }, 
          { text: "Only the previous year's internal audit findings", correct: false }
        ], 
        rationale: "Clause 6.1.1 directly references 4.1 and 4.2 as the mandatory inputs for determining risks and opportunities." 
      },
      { 
        category: "Planning & Risks", 
        section: "3. Leadership & Planning", 
        text: "Under Clause 6.2.1, Quality Objectives must NOT be:", 
        options: [
          { text: "Consistent with the quality policy", correct: false }, 
          { text: "Measurable", correct: false }, 
          { text: "Kept secret from the workforce to prevent stress", correct: true }, 
          { text: "Monitored and updated as appropriate", correct: false }
        ], 
        rationale: "Clause 6.2.1(f) strictly requires that quality objectives be communicated." 
      },
      { 
        category: "Planning & Risks", 
        section: "3. Leadership & Planning", 
        text: "When an organization determines a need for a change to the QMS, Clause 6.3 requires them to consider:", 
        options: [
          { text: "The availability of resources and allocation of responsibilities.", correct: true }, 
          { text: "Only the financial cost of the change.", correct: false }, 
          { text: "The opinions of competitors.", correct: false }, 
          { text: "The stock market implications.", correct: false }
        ], 
        rationale: "Clause 6.3 requires considering the purpose, integrity of the QMS, availability of resources, and allocation of responsibilities." 
      },

      // SECTION 4: SUPPORT (Clause 7)
      { 
        category: "Resource Management", 
        section: "4. Support", 
        text: "If measurement traceability is required (Clause 7.1.5.2), measuring equipment must be:", 
        options: [
          { text: "Replaced annually regardless of condition.", correct: false }, 
          { text: "Calibrated/verified at specified intervals against traceable national/international standards.", correct: true }, 
          { text: "Used only by the Quality Manager.", correct: false }, 
          { text: "Purchased from an ISO 9001 certified supplier.", correct: false }
        ], 
        rationale: "Clause 7.1.5.2(a) requires calibration or verification at specified intervals against traceable standards." 
      },
      { 
        category: "Resource Management", 
        section: "4. Support", 
        text: "How does ISO 9001 define 'Organizational Knowledge' (Clause 7.1.6)?", 
        options: [
          { text: "Knowledge specific to the organization, generally gained by experience, used to achieve objectives.", correct: true }, 
          { text: "The collective university degrees held by management.", correct: false }, 
          { text: "The organization's financial forecasting models.", correct: false }, 
          { text: "The IT department's server passwords.", correct: false }
        ], 
        rationale: "Clause 7.1.6 Note 1 defines it as specific knowledge generally gained by experience and shared to achieve objectives." 
      },
      { 
        category: "Support & Awareness", 
        section: "4. Support", 
        text: "Under Clause 7.2 (Competence), the organization must retain documented information as evidence of what?", 
        options: [
          { text: "Employee attendance records.", correct: false }, 
          { text: "Competence (based on education, training, or experience).", correct: true }, 
          { text: "Disciplinary actions.", correct: false }, 
          { text: "Payroll and compensation scales.", correct: false }
        ], 
        rationale: "Clause 7.2(d) mandates retaining appropriate documented information as evidence of competence." 
      },
      { 
        category: "Support & Awareness", 
        section: "4. Support", 
        text: "When determining internal and external communications (Clause 7.4), the organization must determine all of the following EXCEPT:", 
        options: [
          { text: "On what it will communicate", correct: false }, 
          { text: "When to communicate", correct: false }, 
          { text: "Who communicates", correct: false }, 
          { text: "The grammatical style guide for all emails", correct: true }
        ], 
        rationale: "Clause 7.4 requires determining what, when, with whom, how, and who communicates, but does not dictate grammatical style guides." 
      },
      { 
        category: "Documented Information", 
        section: "4. Support", 
        text: "According to Clause 7.5.3 (Control of documented information), documents must be adequately protected from:", 
        options: [
          { text: "Being read by junior employees.", correct: false }, 
          { text: "Loss of confidentiality, improper use, or loss of integrity.", correct: true }, 
          { text: "External auditors during a site visit.", correct: false }, 
          { text: "Being printed on standard paper.", correct: false }
        ], 
        rationale: "Clause 7.5.3.1(b) explicitly requires protection against loss of confidentiality, improper use, or loss of integrity." 
      },

      // SECTION 5: OPERATION (Clause 8)
      { 
        category: "Operational Control", 
        section: "5. Operation", 
        text: "According to Clause 8.2.3, when must an organization conduct a review of the requirements for products and services?", 
        options: [
          { text: "After the product has been shipped.", correct: false }, 
          { text: "During the final inspection phase.", correct: false }, 
          { text: "Before committing to supply products and services to a customer.", correct: true }, 
          { text: "Only when a customer formally complains.", correct: false }
        ], 
        rationale: "Clause 8.2.3.1 mandates the review must occur *before* committing to supply the product/service to the customer." 
      },
      { 
        category: "Design & Development", 
        section: "5. Operation", 
        text: "When determining the stages and controls for Design and Development (Clause 8.3.2), an organization must consider:", 
        options: [
          { text: "The required verification and validation activities.", correct: true }, 
          { text: "The marketing budget for the final product.", correct: false }, 
          { text: "The color of the final packaging.", correct: false }, 
          { text: "The personal preferences of the CEO.", correct: false }
        ], 
        rationale: "Clause 8.3.2(c) explicitly requires considering required design and development verification and validation activities." 
      },
      { 
        category: "Design & Development", 
        section: "5. Operation", 
        text: "Under Clause 8.3.6 (Design and development changes), documented information must be retained regarding:", 
        options: [
          { text: "The brainstorming sessions that did not result in a product.", correct: false }, 
          { text: "The changes, results of reviews, authorization, and actions taken to prevent adverse impacts.", correct: true }, 
          { text: "The competitors' similar design changes.", correct: false }, 
          { text: "Only changes that increase the cost of production.", correct: false }
        ], 
        rationale: "Clause 8.3.6 requires retention of documented information on the changes, review results, authorizations, and mitigation actions." 
      },
      { 
        category: "External Providers", 
        section: "5. Operation", 
        text: "Does ISO 9001 (Clause 8.4) require organizations to evaluate and monitor external providers (suppliers)?", 
        options: [
          { text: "No, if they are ISO certified, they are exempt.", correct: false }, 
          { text: "Yes, the organization must determine criteria for evaluation, selection, and performance monitoring.", correct: true }, 
          { text: "Only if the provider is located in a different country.", correct: false }, 
          { text: "No, outsourcing transfers all responsibility to the provider.", correct: false }
        ], 
        rationale: "Clause 8.4.1 mandates applying criteria for the evaluation, selection, monitoring, and re-evaluation of external providers." 
      },
      { 
        category: "External Providers", 
        section: "5. Operation", 
        text: "According to Annex A.8, outsourcing a process to an external provider always has the essential characteristic of:", 
        options: [
          { text: "A financial liability.", correct: false }, 
          { text: "A service.", correct: true }, 
          { text: "A nonconformity.", correct: false }, 
          { text: "A design change.", correct: false }
        ], 
        rationale: "Annex A.8 states outsourcing always has the essential characteristic of a service, with activities performed at the interface between provider and organization." 
      },
      { 
        category: "Operational Control", 
        section: "5. Operation", 
        text: "Under Clause 8.5.3 (Property belonging to customers or external providers), what must happen if a customer's property is lost or damaged?", 
        options: [
          { text: "The organization must secretly replace it.", correct: false }, 
          { text: "The organization must report it to the customer/provider and retain documented information.", correct: true }, 
          { text: "The organization owes the customer a full refund.", correct: false }, 
          { text: "The quality manager must be fired.", correct: false }
        ], 
        rationale: "Clause 8.5.3 mandates reporting the loss/damage to the customer and retaining documented information on what occurred." 
      },
      { 
        category: "Operational Control", 
        section: "5. Operation", 
        text: "Clause 8.5.4 (Preservation) requires outputs to be preserved to ensure conformity. This preservation can include:", 
        options: [
          { text: "Identification, handling, contamination control, packaging, storage, and transportation.", correct: true }, 
          { text: "Only physical security against theft.", correct: false }, 
          { text: "Only the digital backup of software.", correct: false }, 
          { text: "Pricing and marketing strategies.", correct: false }
        ], 
        rationale: "Clause 8.5.4 Note clarifies that preservation can include identification, handling, contamination control, packaging, storage, transmission, or transportation." 
      },
      { 
        category: "Operational Control", 
        section: "5. Operation", 
        text: "When releasing products and services to the customer (Clause 8.6), the retained documented information must include evidence of conformity with acceptance criteria and:", 
        options: [
          { text: "A printed receipt.", correct: false }, 
          { text: "Traceability to the person(s) authorizing the release.", correct: true }, 
          { text: "The customer's signature.", correct: false }, 
          { text: "The serial number of the delivery vehicle.", correct: false }
        ], 
        rationale: "Clause 8.6(b) explicitly requires traceability to the person(s) authorizing the release." 
      },

      // SECTION 6: EVALUATION & IMPROVEMENT (Clauses 9 - 10)
      { 
        category: "Performance Evaluation", 
        section: "6. Evaluation", 
        text: "Which clause requires the organization to conduct Internal Audits at planned intervals?", 
        options: [
          { text: "Clause 8.2", correct: false }, 
          { text: "Clause 9.1", correct: false }, 
          { text: "Clause 9.2", correct: true }, 
          { text: "Clause 10.2", correct: false }
        ], 
        rationale: "Clause 9.2 provides the specific requirements for conducting and managing internal audits." 
      },
      { 
        category: "Performance Evaluation", 
        section: "6. Evaluation", 
        text: "When selecting internal assessors (Clause 9.2.2), the organization must ensure:", 
        options: [
          { text: "Assessors only audit their own departments to utilize their expertise.", correct: false }, 
          { text: "Objectivity and the impartiality of the audit process.", correct: true }, 
          { text: "Assessors are external contractors.", correct: false }, 
          { text: "Assessors have at least 10 years of experience.", correct: false }
        ], 
        rationale: "Clause 9.2.2(c) states the organization must select assessors and conduct audits to ensure objectivity and impartiality." 
      },
      { 
        category: "Continuous Improvement", 
        section: "6. Evaluation", 
        text: "According to Clause 10.3 (Continual Improvement), what inputs must the organization consider to determine if there are opportunities for continual improvement?", 
        options: [
          { text: "Results of analysis and evaluation, and the outputs from management review.", correct: true }, 
          { text: "Only customer complaints.", correct: false }, 
          { text: "Employee suggestions dropped in a suggestion box.", correct: false }, 
          { text: "Financial reports and quarterly profits.", correct: false }
        ], 
        rationale: "Clause 10.3 mandates considering the results of analysis and evaluation (9.1.3) and the outputs from management review (9.3.3)." 
      },

      // SECTION 7: LIVE SCENARIOS (From the Workbook)
      { 
        category: "Leadership", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (CarePlus): The Clinic Director is off-site and tells the front desk to 'just figure out a manual workaround' for the recurring software glitch, ignoring a systemic failure to focus on a funding pitch. Which leadership clause is directly violated?", 
        options: [
          { text: "Clause 5.1 (Top management delegating ultimate accountability to the front desk)", correct: true }, 
          { text: "Clause 7.1.3 (Infrastructure maintenance)", correct: false }, 
          { text: "Clause 8.2 (Requirements for products and services)", correct: false }, 
          { text: "Clause 9.1.2 (Customer satisfaction)", correct: false }
        ], 
        rationale: "While infrastructure failed, the root violation is Top Management bypassing their ultimate accountability (5.1) to ensure the QMS achieves its intended results." 
      },
      { 
        category: "Planning & Risks", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (CarePlus): The clinic had a software crash four months prior, but 'once the immediate fire was put out, the software issue fell off the executive priority list.' What did they fail to do regarding Clause 6.1?", 
        options: [
          { text: "They failed to purchase a new software license.", correct: false }, 
          { text: "They failed to formally determine the risks to patient scheduling and plan actions to address those risks.", correct: true }, 
          { text: "They failed to train the receptionist.", correct: false }, 
          { text: "They failed to write an SOP for manual booking.", correct: false }
        ], 
        rationale: "Clause 6.1 requires planning actions to address risks to prevent undesired effects. Ignoring a known recurring glitch is a failure of risk planning." 
      },
      { 
        category: "Context & Interested Parties", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (CarePlus): Who is the primary 'Interested Party' (Clause 4.2) directly compromised by the double-booking system failure?", 
        options: [
          { text: "The Software Developer", correct: false }, 
          { text: "The Investors", correct: false }, 
          { text: "The Patients holding conflicting confirmations", correct: true }, 
          { text: "The Front Desk Staff", correct: false }
        ], 
        rationale: "Patients are the primary interested party whose requirements (timely care) are failing to be met." 
      },
      { 
        category: "Operational Control", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (BrightWave): Shift Supervisor Marcus orders operators to skip the documented 15-minute thermal calibration to hit a production deadline. This breach directly violates:", 
        options: [
          { text: "Clause 8.1 / 8.5.1 (Failure to implement control of production and execute planned arrangements)", correct: true }, 
          { text: "Clause 7.2 (Lack of operator competence)", correct: false }, 
          { text: "Clause 4.1 (Understanding the organization)", correct: false }, 
          { text: "Clause 9.3 (Management Review)", correct: false }
        ], 
        rationale: "Clause 8.5.1 requires production to be carried out under controlled conditions, which Marcus intentionally bypassed." 
      },
      { 
        category: "Support & Awareness", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (BrightWave): When confronted about the defective boards, an operator states, 'No one ever explained why that 15-minute wait was so important.' This reveals a failure in:", 
        options: [
          { text: "Clause 7.1.6 (Organizational knowledge)", correct: false }, 
          { text: "Clause 7.3 (Awareness - employees not aware of the implications of not conforming to QMS requirements)", correct: true }, 
          { text: "Clause 7.4 (Communication)", correct: false }, 
          { text: "Clause 8.2 (Customer communication)", correct: false }
        ], 
        rationale: "Clause 7.3(d) explicitly requires persons to be aware of the implications of not conforming with QMS requirements." 
      },
      { 
        category: "Nonconforming Outputs", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (BrightWave): An entire pallet of defective circuit boards (Batch #BW-0815-07) is sitting on the floor. According to Clause 8.7, what must BrightWave do immediately?", 
        options: [
          { text: "Ship them and wait to see if the customer complains", correct: false }, 
          { text: "Identify and control the outputs to prevent their unintended use or delivery", correct: true }, 
          { text: "Fire the operators responsible", correct: false }, 
          { text: "Rewrite the Quality Policy", correct: false }
        ], 
        rationale: "Clause 8.7 mandates that nonconforming outputs must be identified and controlled to prevent unintended delivery." 
      },
      { 
        category: "Performance Evaluation", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (Performance Crisis): Internal assessor Elena finds that production speed and defect rate logs are completely blank for a 72-hour window. This is a failure to comply with:", 
        options: [
          { text: "Clause 9.1.1 (Failure to retain appropriate documented information as evidence of results)", correct: true }, 
          { text: "Clause 7.5.3 (Control of documented information)", correct: false }, 
          { text: "Clause 8.2.1 (Customer communication)", correct: false }, 
          { text: "Clause 10.3 (Continual improvement)", correct: false }
        ], 
        rationale: "Clause 9.1.1 dictates that the organization must retain documented information as evidence of monitoring and measurement results." 
      },
      { 
        category: "Management Review", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (Performance Crisis): Quality Manager David decides to intentionally hide the missing data gap from the Board of Directors to secure funding. If he excludes this from his presentation, he violates:", 
        options: [
          { text: "Clause 9.2 (Internal Assessment)", correct: false }, 
          { text: "Clause 6.2 (Quality Objectives)", correct: false }, 
          { text: "Clause 9.3 (Management Review inputs must include information on the performance of the QMS, including nonconformities)", correct: true }, 
          { text: "Clause 7.1.2 (People)", correct: false }
        ], 
        rationale: "Clause 9.3.2 explicitly requires Management Review inputs to include data on nonconformities and monitoring/measurement results. Hiding them violates this clause." 
      },
      { 
        category: "Continuous Improvement", 
        section: "7. Live Scenarios", 
        text: "SCENARIO (Performance Crisis): Instead of hiding the data, what are the first mandatory steps David must take upon discovering this nonconformity, according to Clause 10.2?", 
        options: [
          { text: "React to the nonconformity, take action to control/correct it, and evaluate the need to eliminate the root cause", correct: true }, 
          { text: "Update the ISO 9001 certificate", correct: false }, 
          { text: "Conduct a full supplier evaluation", correct: false }, 
          { text: "Discipline the line supervisors immediately", correct: false }
        ], 
        rationale: "Clause 10.2 dictates the immediate response to a nonconformity: react, correct it, deal with consequences, and perform root cause analysis." 
      }
    ],
    remediationData: {
      "QMS Fundamentals": "Review ISO 9001 Clause 1 and 4.4. The core objective is meeting customer/statutory requirements, enhancing satisfaction, and determining process inputs/outputs.",
      "Context & Interested Parties": "Review Clauses 4.1, 4.2, and 4.3. Note the 2024 Amendment requiring organizations to explicitly consider Climate Change. Understand that the QMS scope must be documented.",
      "Planning & Risks": "Study Clause 6.1, 6.2, and 6.3. Risk planning utilizes data from Context (4.1) and Interested Parties (4.2). Objectives must be measurable and communicated.",
      "PDCA Cycle": "Master the Plan (Cl. 6), Do (Cl. 7, 8), Check (Cl. 9), Act (Cl. 10) framework. It is the architectural spine of the standard.",
      "Leadership": "Review Clause 5.1 and 5.2. Top Management can delegate tasks, but NEVER ultimate accountability. The Quality Policy must be communicated and understood.",
      "Customer Focus": "Study Clause 5.1.2. Top Management must proactively determine and address risks and opportunities that affect customer satisfaction.",
      "Resource Management": "Review Clause 7.1. Measurement equipment must be calibrated against traceable standards. Organizational knowledge must be maintained and shared.",
      "Support & Awareness": "Focus on Clause 7.2, 7.3, and 7.4. Competence requires documented evidence. Employees must be aware of the implications of failing to conform to the QMS.",
      "Documented Information": "Review Clause 7.5.3. Documented information must be strictly controlled to prevent loss of confidentiality, improper use, or loss of integrity.",
      "Operational Control": "Focus on Clause 8.1, 8.2, 8.5, and 8.6. You must review requirements *before* committing to supply. Outputs must be preserved, traceable, and controlled during release.",
      "Design & Development": "Study Clause 8.3. Design planning requires verification/validation. Changes to designs must be reviewed, authorized, and documented.",
      "External Providers": "Review Clause 8.4. Outsourcing is considered a service. You must apply strict criteria for the evaluation, selection, and continuous monitoring of external providers.",
      "Nonconforming Outputs": "Study Clause 8.7. The immediate priority when a defect is found is containment—preventing unintended delivery or use.",
      "Performance Evaluation": "Focus on Clause 9.1 and 9.2. Retained evidence is mandatory for monitoring results. Assessors must be selected to ensure total impartiality.",
      "Management Review": "Review Clause 9.3 inputs. Management Review relies on total transparency. Hiding nonconformities or missing data prevents systemic improvement.",
      "Continuous Improvement": "Focus on Clause 10.2 and 10.3. A nonconformity requires an immediate reaction (Correction) followed by Root Cause Analysis to prevent recurrence (Corrective Action)."
    }
  }
};