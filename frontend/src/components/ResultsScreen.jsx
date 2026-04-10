import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { examLibrary } from '../data/exams';

export default function ResultsScreen({ score, failedCats, studentName, studentEmail }) {
  const { examId } = useParams();
  const examData = examLibrary[examId] || examLibrary["14001"];
  const remediationData = examData.remediationData || {};

  const totalQuestions = examData.questions ? examData.questions.length : 20;
  const percent = Math.round((score / totalQuestions) * 100) || 0;
  const isPassed = percent >= 80;

  return (
    <div className="page-container">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-10 text-center max-w-2xl mx-auto">
            {/* Header & Global Status */}
            <div className="mb-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Assessment Session Closed</h2>
                <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-bold tracking-widest text-sm border">
                    [ {percent}% ] {examData.title}
                </div>
            </div>
            
            {/* The "Audit Roadmap" */}
            <div className="text-left bg-gray-50 p-6 rounded-2xl border mb-8">
                <h4 className="font-black text-brand-dark text-[10px] uppercase tracking-widest border-b pb-2 mb-4 border-brand-primary">Certification Audit Roadmap</h4>
                <div className="space-y-4 pl-2 border-l-2 border-gray-200">
                    <div className="relative">
                        <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow-sm"></div>
                        <p className="text-xs font-bold text-gray-800 uppercase">Step 1: Technical Submission</p>
                        <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Status: Complete</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-brand-primary border-2 border-white shadow-sm animate-pulse"></div>
                        <p className="text-xs font-bold text-gray-800 uppercase">Step 2: Performance & Integrity Validation</p>
                        <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest animate-pulse">Status: In Progress</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-gray-300 border-2 border-white shadow-sm"></div>
                        <p className="text-xs font-bold text-gray-500 uppercase">Step 3: Final Certification Decision</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Status: Pending</p>
                    </div>
                </div>
            </div>

            {/* Dynamic Section: The Review Module */}
            <div className="text-left mb-8">
              {isPassed ? (
                <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
                    <h4 className="font-black text-green-800 text-[10px] uppercase tracking-widest border-b border-green-200 pb-2 mb-4">Board Review Note</h4>
                    <p className="text-sm font-bold text-green-900 mb-4">To maintain the integrity of our assessment protocols, specific category breakdowns are currently being reviewed by the certification board. A comprehensive Performance Summary will be attached to your final Verification Report.</p>
                    <div className="bg-white p-4 rounded-xl border border-green-100">
                      <p className="text-xs font-bold text-gray-800 uppercase">Next Steps:</p>
                      <p className="text-sm text-gray-600">Automated issuance of the Digital Certificate of Competency. Inclusion in the Verified Professionals Registry.</p>
                    </div>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                    <h4 className="font-black text-red-800 text-[10px] uppercase tracking-widest border-b border-red-200 pb-2 mb-4">Targeted Remediation Directive</h4>
                    <p className="text-sm font-bold text-red-900 mb-6">Preliminary analysis indicates specific areas where your technical logic does not yet meet the ISO criteria. Please refer to the Technical Directives below to align your competency with the standard's requirements before your next authorized attempt.</p>
                    
                    <div className="space-y-4 mb-6">
                      {failedCats.size === 0 ? (
                        <p className="text-red-600 font-black uppercase text-sm">Competence Absolute. No systemic gaps identified.</p>
                      ) : (
                        Array.from(failedCats).map(cat => (
                          <div key={cat} className="p-4 bg-white border border-l-4 border-l-red-500 rounded-xl">
                              <h5 className="font-black text-gray-900 text-xs uppercase tracking-tighter mb-2">Technical Directive: {cat}</h5>
                              <p className="text-sm text-gray-700 leading-relaxed font-bold">
                                {remediationData[cat] || "A competency gap was recorded in this area. Review the target standard criteria."}
                              </p>
                              <p className="text-[10px] text-gray-400 mt-2 italic uppercase tracking-widest">Target Concept: "ISO {examId} {cat} Mastery"</p>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-red-100">
                      <p className="text-xs font-bold text-gray-800 uppercase">Next Steps:</p>
                      <p className="text-sm text-gray-600">The candidate is invited to undergo a targeted review of the identified standards before re-submitting for validation.</p>
                    </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {isPassed ? (
                    <a href="https://learn.astutebusinessconsult.com" className="px-8 py-4 bg-brand-dark text-white rounded-xl font-black shadow-xl uppercase text-xs flex items-center justify-center hover:bg-black transition">Return to Dashboard</a>
                ) : (
                    <a href="https://learn.astutebusinessconsult.com" className="px-8 py-4 border-2 border-brand-dark rounded-xl font-black text-brand-dark uppercase text-xs hover:bg-gray-50 flex items-center justify-center transition">Acknowledge & Exit</a>
                )}
            </div>
        </div>
    </div>
  );
}
