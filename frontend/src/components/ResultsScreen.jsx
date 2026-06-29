import React from 'react';
import { useParams } from 'react-router-dom';
import { examLibrary } from '../data';

export default function ResultsScreen({ score, failedCats, studentName, studentEmail, assignedLayout, userAnswers }) {
  const { examId } = useParams();
  const examData = examLibrary[examId] || examLibrary["14001-fnd"];
  const remediationData = examData.remediationData || {};

  const totalQuestions = 20;
  const percent = Math.round((score / totalQuestions) * 100) || 0;
  const isPassed = percent >= 80;

  const hasReviewData = Array.isArray(assignedLayout) && assignedLayout.length > 0 && userAnswers;

  return (
    <div className="min-h-screen bg-[#f3f4f6] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Classic Glassmorphism Container */}
      <div className="w-full max-w-3xl bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem] border border-white/80 overflow-hidden">
        
        {/* Header */}
        <div className={`p-8 sm:p-12 text-center border-b ${isPassed ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'}`}>
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-sm ${isPassed ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
            <i className={`text-3xl fa-solid ${isPassed ? 'fa-check' : 'fa-xmark'}`}></i>
          </div>
          <h2 className={`text-4xl font-bold mb-2 tracking-wide uppercase ${isPassed ? 'text-emerald-800' : 'text-rose-800'}`}>
            {isPassed ? 'PASSED' : 'FAILED'}
          </h2>
          <p className="text-slate-600 text-lg mb-6 font-medium">{examData.title}</p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-700">
            <div className="bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-xl shadow-sm border border-white/80 font-bold text-xl text-slate-800">
              {percent}%
            </div>
            <div className="bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-xl shadow-sm border border-white/80 font-medium text-lg text-slate-700">
              {score} out of {totalQuestions} correct
            </div>
          </div>
        </div>
        
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Roadmap */}
          <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/60">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
              <i className="fa-solid fa-route text-slate-400"></i> Certification Roadmap
            </h4>
            <div className="space-y-4 pl-3 border-l border-slate-300 ml-1">
              <div className="relative">
                <div className="absolute -left-[17px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-white shadow-sm"></div>
                <p className="text-sm font-medium text-slate-800">Technical Submission</p>
                <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider mt-0.5">Complete</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[17px] top-1.5 w-3 h-3 rounded-full bg-blue-400 ring-4 ring-white shadow-sm animate-pulse"></div>
                <p className="text-sm font-medium text-slate-800">Integrity Validation</p>
                <p className="text-[10px] text-blue-600 font-semibold uppercase tracking-wider mt-0.5">In Progress</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[17px] top-1.5 w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white shadow-sm"></div>
                <p className="text-sm font-medium text-slate-400">Final Decision</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Pending</p>
              </div>
            </div>
          </div>

          {/* Feedback Module */}
          <div>
            {isPassed ? (
              <div className="bg-emerald-50/50 backdrop-blur-md border border-emerald-100 p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-emerald-800 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-check-double"></i> Board Review
                </h4>
                <p className="text-sm text-emerald-900 mb-5 leading-relaxed">
                  Your assessment is currently under review by the certification board. A full Performance Summary will be included in your final Verification Report.
                </p>
                <div className="bg-white/60 p-4 rounded-xl border border-emerald-50/50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Next Steps</p>
                  <p className="text-sm text-slate-700">Your Digital Certificate is being generated. You will be added to the Verified Professionals Registry.</p>
                </div>
              </div>
            ) : (
              <div className="bg-rose-50/50 backdrop-blur-md border border-rose-100 p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-rose-800 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-triangle-exclamation"></i> Study Directives
                </h4>
                <p className="text-sm text-rose-900 mb-5 leading-relaxed">
                  We identified a few areas for improvement. Please review the specific concepts below to prepare for your next attempt.
                </p>
                
                <div className="space-y-3 mb-5">
                  {failedCats.size === 0 ? (
                    <p className="text-rose-600 font-medium text-sm bg-white/50 p-4 rounded-xl text-center">Excellent work. No knowledge gaps identified.</p>
                  ) : (
                    Array.from(failedCats).map(cat => (
                      <div key={cat} className="p-4 bg-white/60 backdrop-blur-sm border border-rose-100 border-l-2 border-l-rose-400 rounded-xl">
                        <h5 className="font-semibold text-slate-800 text-sm mb-1">{cat}</h5>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {remediationData[cat] || "A competency gap was recorded in this area. Review the target standard criteria."}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-wider">
                          Target: {examData.title} - {cat}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                <div className="bg-white/60 p-4 rounded-xl border border-rose-50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Next Steps</p>
                  <p className="text-sm text-slate-700">Please review the recommended study materials before your next attempt.</p>
                </div>
              </div>
            )}
          </div>

          {/* Performance Review */}
          {hasReviewData && (
            <div className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 overflow-hidden shadow-sm">
              <div className="px-6 sm:px-8 py-5 border-b border-white/40 bg-white/30 flex items-center gap-3">
                <i className="fa-solid fa-list-check text-slate-400"></i>
                <h4 className="font-semibold text-slate-700 text-sm tracking-wide">
                  Performance Review
                </h4>
              </div>

              <div className="space-y-4 p-4 sm:p-6">
                {assignedLayout.map((layoutItem, displayIdx) => {
                  const q = layoutItem.question || examData.questions?.[layoutItem.qIdx];
                  if (!q) return null;

                  const chosenOriginalIdx = userAnswers?.[displayIdx];
                  const hasAnswered = chosenOriginalIdx !== undefined;
                  
                  if (!hasAnswered) return null;

                  const correctOriginalIdx = q.options?.findIndex(o => o.correct);
                  const isCorrect = hasAnswered && chosenOriginalIdx === correctOriginalIdx;
                  const chosenText = hasAnswered ? q.options?.[chosenOriginalIdx]?.text : 'Not answered';
                  
                  const lmsDirection = q.lms_direction || remediationData[q.category] || `Review the ${q.category} section of the standard.`;

                  return (
                    <div key={displayIdx} className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/80 p-5 shadow-[0_2px_10px_0_rgba(0,0,0,0.02)] relative overflow-hidden">
                      <div className={`absolute left-0 top-0 bottom-0 w-1 ${isCorrect ? 'bg-emerald-400' : 'bg-rose-400'}`}></div>

                      <div className="flex flex-col sm:flex-row gap-4 pl-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-3 mb-2">
                            <p className="text-sm font-medium text-slate-800 leading-relaxed">{q.text}</p>
                            <span className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                              isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                            }`}>
                              {isCorrect ? 'Correct' : 'Incorrect'}
                            </span>
                          </div>

                          <div className="mt-4 flex flex-col gap-3">
                            <div className={`p-3 rounded-lg text-xs font-medium ${
                              isCorrect ? 'bg-emerald-50/50 text-emerald-800' : 'bg-rose-50/50 text-rose-800'
                            }`}>
                              <span className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">{isCorrect ? 'Your Correct Answer' : 'Your Answer'}</span>
                              {chosenText}
                            </div>
                            
                            {isCorrect && q.rationale && (
                              <div className="bg-blue-50/50 rounded-lg p-3 text-xs text-blue-900">
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-blue-800/60 mb-1 flex items-center gap-1.5">
                                  <i className="fa-solid fa-lightbulb"></i> Concept Reinforcement
                                </span>
                                <p className="leading-relaxed">{q.rationale}</p>
                              </div>
                            )}

                            {!isCorrect && (
                              <div className="bg-amber-50/50 rounded-lg p-3 text-xs text-amber-900 border border-amber-100/50">
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-amber-800/60 mb-1 flex items-center gap-1.5">
                                  <i className="fa-solid fa-compass"></i> Study Area
                                </span>
                                <p className="leading-relaxed mb-2">
                                  <span className="font-semibold">Review: </span> 
                                  {remediationData[q.category] || "Identify standard criteria gaps."}
                                </p>
                                <p className="leading-relaxed font-semibold flex items-center gap-1.5">
                                  <i className="fa-solid fa-book-open text-amber-700"></i> {lmsDirection}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center pt-4">
            <a 
              href="https://learn.astutebusinessconsult.com" 
              className="px-8 py-3.5 bg-slate-800 text-white rounded-xl font-medium tracking-wide text-sm shadow-md hover:bg-slate-700 transition-colors"
            >
              {isPassed ? 'Return to Dashboard' : 'Acknowledge & Exit'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
