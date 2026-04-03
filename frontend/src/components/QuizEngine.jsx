import React, { useState, useEffect } from 'react';

export default function QuizEngine({ onFinish }) {
  const questionBank = [
    { category: "Definitions", section: "1. Fundamentals", text: "In ISO 14001, an 'Environmental Aspect' is best defined as:", options: [{text: "The cause (interaction with the environment)", correct: true}, {text: "The effect (change to the environment)", correct: false}, {text: "The legal limit for pollution", correct: false}, {text: "The emergency response plan", correct: false}], rationale: "An Aspect is the 'Cause' (e.g., Emissions), while Impact is the 'Effect'. Legal limits are Compliance Obligations." },
    { category: "Structure", section: "1. Fundamentals", text: "ISO 14001 follows which structure to ensure compatibility with ISO 9001 and ISO 45001?", options: [{text: "Annex SL (High Level Structure)", correct: true}, {text: "The Kyoto Protocol Structure", correct: false}, {text: "PDCA-Advanced Framework", correct: false}, {text: "The Global Reporting Initiative (GRI)", correct: false}], rationale: "Annex SL provides the harmonized 10-clause structure for all ISO Management Systems." },
    { category: "Scope", section: "1. Fundamentals", text: "Can an organization exclude a specific department from the Scope of the EMS to avoid auditing it?", options: [{text: "No, the scope must be credible and include all significant aspects", correct: true}, {text: "Yes, if the General Manager approves it", correct: false}, {text: "Yes, if the department is low risk", correct: false}, {text: "No, unless they pay a higher certification fee", correct: false}], rationale: "The scope must be credible and cannot exclude activities that affect environmental performance to mislead stakeholders." },
    { category: "Leadership", section: "1. Fundamentals", text: "Who is ultimately accountable for the effectiveness of the EMS?", options: [{text: "Top Management", correct: true}, {text: "The Environmental Health & Safety Manager", correct: false}, {text: "The External Auditor", correct: false}, {text: "The Quality Department", correct: false}], rationale: "Clause 5.1 places ultimate accountability on Top Management. They cannot delegate accountability, only responsibility." },
    { category: "Aspects", section: "2. Planning Phase", text: "Scenario: You see a new machine installed last week. The 'Aspects Register' does not list it. Is this an NC?", options: [{text: "Yes, Clause 6.1.2 (Failure to identify new aspects)", correct: true}, {text: "No, they have a 3-month grace period", correct: false}, {text: "It is an Opportunity for Improvement (OFI)", correct: false}, {text: "No, unless the machine leaks", correct: false}], rationale: "New activities/equipment create new risks. The register must be updated immediately before operation." },
    { category: "Legal", section: "2. Planning Phase", text: "Which document must the auditor check to verify Clause 6.1.3 (Compliance Obligations)?", options: [{text: "The Legal Register (List of Laws)", correct: true}, {text: "The Health & Safety Policy", correct: false}, {text: "The ISO 14001 Standard itself", correct: false}, {text: "The Google Search History", correct: false}], rationale: "Auditors must verify the organization has identified its specific legal requirements via a Legal Register." },
    { category: "Lifecycle", section: "2. Planning Phase", text: "ISO 14001 requires organizations to consider which perspective when determining aspects?", options: [{text: "Lifecycle Perspective", correct: true}, {text: "Cradle-to-Cradle Certification", correct: false}, {text: "Gate-to-Gate (Factory only)", correct: false}, {text: "Carbon Footprint Analysis", correct: false}], rationale: "They must consider upstream (suppliers) and downstream (disposal/use) impacts, though a full LCA is not required." },
    { category: "Risks", section: "2. Planning Phase", text: "Scenario: The company identified a flood risk but has no plan to address it. This is a failure of:", options: [{text: "Clause 6.1.1 (Risks & Opportunities)", correct: true}, {text: "Clause 7.2 (Competence)", correct: false}, {text: "Clause 9.1 (Monitoring)", correct: false}, {text: "Clause 10.2 (Non-Conformity)", correct: false}], rationale: "Identified risks must be addressed via the planning process. Identifying a risk and ignoring it is a non-conformance." },
    { category: "Control", section: "3. Operational Control", text: "Scenario: Hazardous waste bins are unlabeled and overflowing. The procedure requires labeling. This is a breach of:", options: [{text: "Clause 8.1 (Operational Planning & Control)", correct: true}, {text: "Clause 4.2 (Interested Parties)", correct: false}, {text: "Clause 5.3 (Roles and Responsibilities)", correct: false}, {text: "Clause 6.1.1 (General Risks)", correct: false}], rationale: "Failure to implement established criteria (procedures/labels) is a direct Clause 8.1 NC." },
    { category: "Competence", section: "3. Operational Control", text: "You ask an operator about the environmental impact of their job. They say 'I don't know'. Breach of:", options: [{text: "Clause 7.3 (Awareness)", correct: true}, {text: "Clause 5.2 (Policy)", correct: false}, {text: "Clause 9.1.2 (Evaluation of Compliance)", correct: false}, {text: "Clause 10.1 (General Improvement)", correct: false}], rationale: "Staff must be aware of the implications of not conforming with the EMS requirements (Clause 7.3)." },
    { category: "Emergency", section: "3. Operational Control", text: "Scenario: A chemical spill occurs. The spill kit is empty. This is a failure of:", options: [{text: "Clause 8.2 (Emergency Preparedness)", correct: true}, {text: "Clause 10.2 (Corrective Action)", correct: false}, {text: "Clause 8.1 (Operational Control)", correct: false}, {text: "Clause 4.4 (EMS System)", correct: false}], rationale: "Clause 8.2 requires the capability to respond. An empty kit means the response mechanism failed." },
    { category: "Contractors", section: "3. Operational Control", text: "A contractor dumps paint down a drain. The company says 'Not our employee, not our problem.' Are they correct?", options: [{text: "No, Clause 8.1 requires control of outsourced processes", correct: true}, {text: "Yes, contractors are excluded from the EMS", correct: false}, {text: "Yes, this is a legal issue, not an EMS issue", correct: false}, {text: "No, but it is only a Minor NC", correct: false}], rationale: "The organization retains responsibility for environmental impacts of outsourced work (Contractors)." },
    { category: "Design", section: "3. Operational Control", text: "When designing a new product, the organization must consider environmental requirements. This relates to:", options: [{text: "Clause 8.1 (Design & Development controls)", correct: true}, {text: "Clause 9.3 (Management Review)", correct: false}, {text: "Clause 5.1 (Leadership)", correct: false}, {text: "Clause 10.1 (Improvement)", correct: false}], rationale: "Operational control extends to the design phase to minimize lifecycle impacts (e.g., material selection)." },
    { category: "Monitoring", section: "4. Performance Eval", text: "Scenario: The pH meter used to check wastewater has not been calibrated in 2 years. Clause breached?", options: [{text: "Clause 9.1.1 (Monitoring & Measurement)", correct: true}, {text: "Clause 7.1.3 (Infrastructure)", correct: false}, {text: "Clause 8.1 (Operational Control)", correct: false}, {text: "Clause 10.2 (Non-Conformity)", correct: false}], rationale: "Equipment used to measure environmental performance must be calibrated and verified to ensure valid data." },
    { category: "Evaluation", section: "4. Performance Eval", text: "The organization checks its compliance with the law every year. Is this enough?", options: [{text: "Yes, if the frequency is defined and effective (Clause 9.1.2)", correct: true}, {text: "No, it must be monthly", correct: false}, {text: "No, it must be weekly", correct: false}, {text: "Yes, but only if the auditor approves", correct: false}], rationale: "Clause 9.1.2 requires evaluation at planned intervals. 'Annual' is acceptable if the risk is low and justified." },
    { category: "Internal Audit", section: "4. Performance Eval", text: "Scenario: The Environmental Manager audits his own department. Is this allowed?", options: [{text: "No, auditors must ensure objectivity and impartiality (Clause 9.2)", correct: true}, {text: "Yes, he knows the system best", correct: false}, {text: "Yes, if the company is small", correct: false}, {text: "No, unless he is a Lead Auditor", correct: false}], rationale: "Auditors cannot audit their own work. Impartiality is a core principle of Clause 9.2." },
    { category: "Review", section: "4. Performance Eval", text: "Management Review (9.3) must include discussion of:", options: [{text: "Trends in nonconformities and corrective actions", correct: true}, {text: "A list of employee birthdays", correct: false}, {text: "The stock market performance", correct: false}, {text: "Detailed maintenance logs for every machine", correct: false}], rationale: "Management Review is a strategic look at system performance data, including NC trends, not operational minutiae." },
    { category: "Evidence", section: "5. Audit Skills", text: "Which of the following is valid 'Audit Evidence'?", options: [{text: "A signed training record and operator interview", correct: true}, {text: "A rumor heard in the canteen", correct: false}, {text: "The auditor's personal opinion", correct: false}, {text: "A feeling that something is wrong", correct: false}], rationale: "Evidence must be verifiable. Hearsay, opinions, and feelings are not valid audit evidence." },
    { category: "NC Writing", section: "5. Audit Skills", text: "A Non-Conformity statement must contain:", options: [{text: "The Criteria (Requirement), The Evidence, and The Finding", correct: true}, {text: "The name of the person to blame", correct: false}, {text: "The solution to the problem", correct: false}, {text: "The cost of the mistake", correct: false}], rationale: "NCs focus on the system failure (Criteria vs Evidence). Blame is irrelevant; solutions are the auditee's job." },
    { category: "Improvement", section: "5. Audit Skills", text: "Fixing a leak is a 'Correction'. Finding out *why* it leaked is:", options: [{text: "Root Cause Analysis (Clause 10.2)", correct: true}, {text: "Preventive Maintenance", correct: false}, {text: "Continual Improvement", correct: false}, {text: "Risk Assessment", correct: false}], rationale: "You must eliminate the root cause to prevent recurrence. This is the definition of Corrective Action." }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [score, setScore] = useState(0);
  const [failedCats, setFailedCats] = useState(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinish(score, failedCats);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onFinish, score, failedCats]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const q = questionBank[currentIdx];

  const handleSubmit = () => {
    if (selectedOpt === null) return;
    const isCorrect = q.options[selectedOpt].correct;
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setFailedCats(prev => {
        const next = new Set(prev);
        next.add(q.category);
        return next;
      });
    }
    setHasSubmitted(true);
  };

  const handleNext = () => {
    if (currentIdx === questionBank.length - 1) {
      onFinish(score, failedCats);
    } else {
      setCurrentIdx(currentIdx + 1);
      setSelectedOpt(null);
      setHasSubmitted(false);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="page-container">
      <div className="absolute top-[-80px] right-0 hidden md:flex items-center bg-gray-50 border px-4 py-2 rounded-md">
         <span className="font-mono text-xl font-bold text-brand-dark">{formatTime(timeLeft)}</span>
      </div>
      <div className="flex md:hidden items-center bg-gray-50 border px-4 py-2 rounded-md mb-4 w-[100px]">
         <span className="font-mono text-xl font-bold text-brand-dark">{formatTime(timeLeft)}</span>
      </div>

      <div id="exam-hud" className="mb-6 flex justify-between items-end">
          <div>
              <span className="bg-brand-gold text-white text-[10px] font-black px-2 py-1 rounded uppercase mb-1 inline-block" id="section-label">{q.section}</span>
              <h2 className="text-2xl font-black text-gray-900 tracking-tighter uppercase" id="section-title">Fundamentals</h2>
          </div>
          <div className="text-right">
              <div className="text-xs font-bold text-gray-400 uppercase mb-1">Task <span id="q-current">{currentIdx + 1}</span> of 20</div>
              <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div id="progress-bar" className="h-full bg-brand-primary transition-all duration-500" style={{width: `${((currentIdx + 1) / questionBank.length) * 100}%`}}></div>
              </div>
          </div>
      </div>

      <div id="question-card" className="bg-white rounded-2xl shadow-xl border flex flex-col min-h-[550px]">
          <div className="bg-slate-50 p-8 border-b">
              <p className="text-gray-800 text-xl leading-relaxed font-bold italic">{q.text}</p>
          </div>
          <div className="p-8 flex-grow">
              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  let cardClass = "option-card";
                  if (hasSubmitted) {
                    cardClass += " disabled";
                    if (opt.correct) cardClass += " correct";
                    else if (i === selectedOpt) cardClass += " incorrect";
                  } else {
                    if (i === selectedOpt) cardClass += " selected";
                  }

                  return (
                    <div key={i} className={cardClass} onClick={() => !hasSubmitted && setSelectedOpt(i)}>
                      <div className="option-circle"></div>
                      <span>{opt.text}</span>
                    </div>
                  );
                })}
              </div>
              
              {hasSubmitted && (
                <div className="mt-8 bg-emerald-50 border-l-8 border-brand-primary rounded-r-xl p-6 rationale-panel">
                    <div className="flex items-start">
                        <i className="fa-solid fa-clipboard-check text-brand-primary text-2xl mt-1 mr-4"></i>
                        <div>
                            <h4 className="text-xs font-black text-brand-dark uppercase tracking-widest mb-1">Internal Auditor's Rationale</h4>
                            <p className="text-brand-dark text-md leading-relaxed font-medium">{q.rationale}</p>
                        </div>
                    </div>
                </div>
              )}
          </div>
          <div className="bg-gray-50 p-6 border-t flex justify-end items-center space-x-4">
              {!hasSubmitted ? (
                <button 
                  onClick={handleSubmit} 
                  disabled={selectedOpt === null}
                  className="bg-brand-dark text-white px-10 py-4 rounded-xl font-bold shadow-lg disabled:opacity-30 uppercase tracking-widest text-xs"
                >
                  Submit Finding
                </button>
              ) : (
                <button 
                  onClick={handleNext} 
                  className="bg-brand-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg flex items-center uppercase tracking-widest text-xs"
                >
                  {currentIdx === questionBank.length - 1 ? "Finalize Audit Report" : "Commit & Proceed"} <i className="fa-solid fa-chevron-right ml-3"></i>
                </button>
              )}
          </div>
      </div>
    </div>
  );
}
