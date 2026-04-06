import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { examLibrary } from '../data/exams';

export default function ResultsScreen({ score, failedCats, studentName, studentEmail }) {
  const { examId } = useParams();
  const examData = examLibrary[examId] || examLibrary["14001"];
  const remediationData = examData.remediationData || {};

  const totalQuestions = examData.questions ? examData.questions.length : 20;
  const percent = Math.round((score / totalQuestions) * 100) || 0;
  const strokeDashoffset = 471 - (percent / 100) * 471;
  const isPassed = percent >= 80;

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
            <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Assessment Closed</h2>
            <p className="text-gray-600 mb-8 font-bold border-b pb-6">
              {isPassed 
                ? `Assessment Validation Passed. You have demonstrated technical competency in ${examData.title} principles.`
                : "Competency Gaps Identified. Your logic requires refinement in the areas identified below before certification authorization."
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
                          <p className="text-sm text-gray-700 leading-relaxed font-bold">
                            {remediationData[cat] || "A competency gap was recorded in this area. Review the target standard criteria."}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-2 italic uppercase tracking-widest">Target Concept: "ISO {examId} {cat} Mastery"</p>
                      </div>
                    ))
                  )}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.location.reload()} className="px-8 py-4 border-2 rounded-xl font-black text-gray-500 uppercase text-xs hover:bg-gray-100 transition">Restart Assessment</button>
                <a href="https://learn.astutebusinessconsult.com" className="px-8 py-4 bg-brand-dark text-white rounded-xl font-black shadow-xl uppercase text-xs flex items-center justify-center hover:bg-black transition">Academy Dashboard</a>
            </div>
        </div>
    </div>
  );
}
