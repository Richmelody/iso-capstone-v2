import React, { useEffect } from 'react';

const remediationData = {
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
};

export default function ResultsScreen({ score, failedCats, studentName, studentEmail }) {
  const totalQuestions = 20;
  const percent = Math.round((score / totalQuestions) * 100);
  const strokeDashoffset = 471 - (percent / 100) * 471;
  const isPassed = percent >= 80;

  useEffect(() => {
    const data = { source: "ISO14001_Capstone", name: studentName, email: studentEmail, score: score, percent: percent + "%" };
    fetch("https://hook.eu1.make.com/6qavu69ct5v9vuw4mcdxuc0iopyikare", { 
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(data) 
    }).catch(console.error);
  }, [studentName, studentEmail, score, percent]);

  return (
    <div className="page-container">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-10 text-center">
            <div className="flex justify-center relative mb-6">
                <svg className="w-40 h-40 transform -rotate-90">
                    <circle className="text-gray-100" strokeWidth="10" stroke="currentColor" fill="transparent" r="75" cx="80" cy="80"></circle>
                    <circle 
                      className="text-brand-primary" 
                      strokeWidth="10" 
                      strokeDasharray="471" 
                      strokeDashoffset={strokeDashoffset} 
                      strokeLinecap="round" 
                      stroke="currentColor" 
                      fill="transparent" 
                      r="75" cx="80" cy="80"
                      style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                    ></circle>
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-gray-900">{percent}%</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Audit Closed</h2>
            <p className="text-gray-600 mb-8 font-bold border-b pb-6">
              {isPassed 
                ? "Audit Validation Passed. You have demonstrated technical competency in ISO 14001:2015 auditing principles."
                : "Competency Gaps Identified. Your audit logic requires refinement in the areas identified below before Internal Auditor authorization."
              }
            </p>
            
            <div className="text-left bg-gray-50 p-6 rounded-2xl border mb-8">
                <h4 className="font-black text-brand-dark text-[10px] uppercase tracking-widest border-b pb-2 mb-4 border-brand-primary">Technical Directives for Improvement</h4>
                <div className="space-y-4">
                  {failedCats.size === 0 ? (
                    <p className="text-brand-primary font-black uppercase text-sm">Competence Absolute. No systemic gaps identified.</p>
                  ) : (
                    Array.from(failedCats).map(cat => (
                      <div key={cat} className="p-4 bg-white border border-l-4 border-l-brand-primary rounded-xl">
                          <h5 className="font-black text-brand-dark text-xs uppercase tracking-tighter mb-2">Technical Directive: {cat}</h5>
                          <p className="text-sm text-gray-700 leading-relaxed font-bold">{remediationData[cat]}</p>
                          <p className="text-[10px] text-gray-400 mt-2 italic uppercase tracking-widest">Target Concept: "ISO 14001 {cat} Mastery"</p>
                      </div>
                    ))
                  )}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.location.reload()} className="px-8 py-4 border-2 rounded-xl font-black text-gray-500 uppercase text-xs hover:bg-gray-100 transition">Restart Audit</button>
                <a href="https://learn.astutebusinessconsult.com" className="px-8 py-4 bg-brand-dark text-white rounded-xl font-black shadow-xl uppercase text-xs flex items-center justify-center hover:bg-black transition">Academy Dashboard</a>
            </div>
        </div>
    </div>
  );
}
