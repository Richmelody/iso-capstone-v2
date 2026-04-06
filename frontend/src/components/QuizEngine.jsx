import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function QuizEngine({ onFinish, onBurnNetwork, onSyncNetwork, examData, isVaultBurned, recoveredState }) {
  const questionBank = examData?.questions || [];

  // Core Non-Linear State
  const [currentIdx, setCurrentIdx] = useState(recoveredState ? recoveredState.currentIdx : 0);
  const [userAnswers, setUserAnswers] = useState(recoveredState && recoveredState.userAnswers ? recoveredState.userAnswers : {});
  
  // UI Display States
  const [showReviewDrawer, setShowReviewDrawer] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [lockoutMessage, setLockoutMessage] = useState(null);
  
  const hasTrippedRef = React.useRef(false);
  const isSubmittingRef = React.useRef(false); // Add ref to track legitimate submissions

  // 0. Permanent Sticky Penalty Check (Catches Forward Navigation Tricks)
  useEffect(() => {
    // DO NOT invoke penalty check if we are in the middle of a legitimate submission
    if (isVaultBurned && !lockoutMessage && !isSubmittingRef.current) {
      hasTrippedRef.current = true;
      setLockoutMessage("Proctoring Alert: Unauthorized navigation outside the assessment environment.");
    }
  }, [isVaultBurned, lockoutMessage]);

  // Absolute Timer state
  const [timeLeft, setTimeLeft] = useState(recoveredState ? recoveredState.timeLeft : 20 * 60);
  const MathRef = React.useRef(Date.now() + (recoveredState ? recoveredState.timeLeft : 20 * 60) * 1000);

  const calculateFinals = (answers) => {
    let finalScore = 0;
    const cats = new Set();
    questionBank.forEach((q, idx) => {
      const selected = answers[idx];
      if (selected !== undefined && q.options[selected] && q.options[selected].correct) {
        finalScore++;
      } else {
        cats.add(q.category);
      }
    });
    return { finalScore, failedCats: cats };
  };

  // 1. Timer Logic (Absolute Date.now() to foil pause-exploits)
  useEffect(() => {
    const timer = setInterval(() => {
      const remainingSeconds = Math.max(0, Math.floor((MathRef.current - Date.now()) / 1000));
      setTimeLeft(remainingSeconds);

      if (remainingSeconds <= 0 && !hasTrippedRef.current) {
         clearInterval(timer);
         hasTrippedRef.current = true;
         isSubmittingRef.current = true; // Mark as legitimate submission
         const { finalScore, failedCats } = calculateFinals(userAnswers);
         onFinish(finalScore, failedCats);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [onFinish, userAnswers]);

  // 2. Prevent Refreshing the Page
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // 3. STRICT PROCTORING ENFORCEMENT (Auto-Submit / Red Screen)
  useEffect(() => {
    const enforceSecurity = () => {
      if (hasTrippedRef.current) return;
      
      if (document.hidden || !document.fullscreenElement) {
        hasTrippedRef.current = true;
        let reason = document.hidden ? "Focus lost on the assessment window" : "Fullscreen environment exited";
        setLockoutMessage(`Proctoring Alert: ${reason}`);
        
        // Immediately burn their payload
        if (onBurnNetwork) {
            onBurnNetwork(userAnswers); // Optionally log what they had
        }
      }
    };

    document.addEventListener('visibilitychange', enforceSecurity);
    document.addEventListener('fullscreenchange', enforceSecurity);

    return () => {
      document.removeEventListener('visibilitychange', enforceSecurity);
      document.removeEventListener('fullscreenchange', enforceSecurity);
    };
  }, [onBurnNetwork, userAnswers]);

  const q = questionBank[currentIdx];
  const currentlySelected = userAnswers[currentIdx];

  const handleSelectOption = (optIdx) => {
    const nextAnswers = { ...userAnswers, [currentIdx]: optIdx };
    setUserAnswers(nextAnswers);
  };

  const handleCommitAnswer = () => {
    // Save to Vault
    if (onSyncNetwork) {
      onSyncNetwork(userAnswers, timeLeft, currentIdx);
    }
    // Jump to next or open review drawer if on last question
    if (currentIdx < questionBank.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowReviewDrawer(true);
    }
  };

  const handleSkip = () => {
    if (currentIdx < questionBank.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleFinalSubmit = () => {
     isSubmittingRef.current = true; // Mark as legitimate submission
     setShowSubmitModal(false);
     hasTrippedRef.current = true;
     const { finalScore, failedCats } = calculateFinals(userAnswers);
     onFinish(finalScore, failedCats);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const forceSubmission = () => {
    const { finalScore, failedCats } = calculateFinals(userAnswers);
    onFinish(finalScore, failedCats);
  };

  // RED PENALTY SCREEN
  if (lockoutMessage) {
    return (
      <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-red-600 text-white p-8 text-center">
        <i className="fa-solid fa-triangle-exclamation text-8xl mb-6 text-black/50"></i>
        <h1 className="text-4xl font-black uppercase tracking-widest mb-4">Assessment Session Suspended</h1>
        <p className="text-xl font-bold mb-8 bg-red-800/50 p-4 rounded-xl border border-red-400">{lockoutMessage}</p>
        <p className="text-sm font-medium mb-10 max-w-lg text-red-100">The proctoring system has detected a compliance rule violation. As per the integrity guidelines, your session has been paused and your current progress has been locked.</p>
        <button onClick={forceSubmission} className="bg-white text-red-700 px-10 py-5 rounded-xl font-black shadow-2xl uppercase tracking-widest hover:bg-gray-100 transition-colors border-4 border-red-700/20 active:scale-95">
           Acknowledge & Submit Progress <i className="fa-solid fa-arrow-right ml-2 text-red-500"></i>
        </button>
      </div>
    );
  }

  const timerTarget = document.getElementById('timer-portal-target');
  const timerContent = (
    <div className="flex items-center gap-2 mb-4 md:mb-0">
      <button 
        onClick={() => setShowSubmitModal(true)}
        className="bg-brand-dark hover:bg-slate-800 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 md:px-4 py-2 rounded-lg shadow-sm border border-slate-700 transition whitespace-nowrap"
      >
        Submit
      </button>
      <div className="flex items-center bg-gray-50 border px-2 md:px-4 py-2 rounded-md">
        <span className={`font-mono text-base md:text-xl font-bold ${timeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-brand-dark'}`}>
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="page-container relative">
      {timerTarget ? createPortal(timerContent, timerTarget) : timerContent}

      {/* Main Container HUD */}
      <div id="exam-hud" className="mb-4 flex flex-col sm:flex-row justify-between sm:items-end gap-2">
        <div>
          <span className="bg-brand-gold text-white text-[10px] font-black px-2 py-1 rounded uppercase mb-1 inline-block">{q.section}</span>
          <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter uppercase">Fundamentals</h2>
        </div>
        <div className="flex flex-col sm:flex-col items-center sm:items-end gap-1 mt-2 sm:mt-0">
           <button 
              onClick={() => setShowReviewDrawer(true)} 
              className="group relative flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-widest bg-white hover:bg-emerald-50 text-emerald-800 px-4 py-2 rounded-xl shadow-sm hover:shadow-md border-[1.5px] border-emerald-300 hover:border-emerald-500 transition-all active:scale-95 overflow-hidden w-full sm:w-auto"
           >
              <div className="flex items-center">
                <i className="fa-solid fa-bars-staggered text-emerald-500 text-sm mr-2 group-hover:scale-110 transition-transform"></i> 
                <span>Open Review Panel</span>
              </div>
              
              <div className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200 shadow-inner flex items-center gap-1">
                <i className="fa-solid fa-check-double text-[8px]"></i> {answeredCount}/{questionBank.length}
              </div>
              
              <i className="fa-solid fa-chevron-right text-gray-400 group-hover:text-emerald-500 transition-colors ml-1 hidden sm:block"></i>
           </button>
           <span className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-widest animate-pulse">
             <i className="fa-solid fa-hand-pointer mr-1"></i> Click to show unanswered questions
           </span>
        </div>
      </div>

      {/* Main Question Card */}
      <div id="question-card" className="bg-white rounded-2xl shadow-xl border flex flex-col min-h-[420px] md:min-h-[550px] relative z-10 transition-all duration-300">
        <div className="bg-slate-50 p-8 border-b">
          <div className="bg-brand-dark text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded inline-block mb-4 shadow-sm">
            Assessment Task #{currentIdx + 1}
          </div>
          <p className="text-gray-800 text-xl leading-relaxed font-bold italic">{q.text}</p>
        </div>
        
        <div className="p-8 flex-grow">
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const isSelected = currentlySelected === i;
              
              let cardClass = "p-5 rounded-xl border-2 flex items-center cursor-pointer transition-all duration-200 hover:shadow-md ";
              if (isSelected) {
                cardClass += "bg-brand-primary/5 border-brand-primary";
              } else {
                cardClass += "bg-white border-gray-100 hover:border-brand-primary/40";
              }

              return (
                <div 
                  key={i} 
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  className={cardClass} 
                  onClick={() => handleSelectOption(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectOption(i);
                    }
                  }}
                >
                  <div className={`w-5 h-5 rounded-full flex-shrink-0 mr-4 flex items-center justify-center transition-colors shadow-inner ${isSelected ? 'bg-brand-primary border-4 border-brand-gold' : 'bg-gray-100 border border-gray-300'}`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span className={`text-sm ${isSelected ? 'font-black text-brand-dark' : 'font-semibold text-gray-600'}`}>{opt.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Bar — Smart Dynamic Button */}
        <div className="bg-gray-50 border-t flex justify-between items-center rounded-b-2xl">
           <div className="flex w-full divide-x divide-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentIdx === 0}
                className="flex-1 py-4 md:py-5 flex items-center justify-center text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <i className="fa-solid fa-arrow-left mr-1 md:mr-2"></i>
                <span className="hidden sm:inline">Previous</span><span className="sm:hidden">Prev</span>
              </button>

              {/* SMART NEXT BUTTON: skip if nothing selected, commit if selection made */}
              <button
                onClick={currentlySelected !== undefined ? handleCommitAnswer : handleSkip}
                className={`flex-[1.5] py-4 md:py-5 flex items-center justify-center text-[9px] md:text-[10px] font-black uppercase tracking-widest transition ${
                  currentlySelected !== undefined
                    ? 'bg-brand-primary text-white hover:bg-emerald-600 shadow-inner'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {currentlySelected !== undefined ? (
                  <><span className="hidden sm:inline">Commit & Continue</span><span className="sm:hidden">Commit</span> <i className="fa-solid fa-floppy-disk ml-1 md:ml-2"></i></>
                ) : (
                  <><span className="hidden sm:inline">Skip Question</span><span className="sm:hidden">Skip</span> <i className="fa-solid fa-forward ml-1 md:ml-2"></i></>
                )}
              </button>
           </div>
        </div>
      </div>

      {/* Slide-out Review Drawer */}
      {showReviewDrawer && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowReviewDrawer(false)}>
          <div className="w-full sm:max-w-sm bg-white h-full shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="bg-brand-dark p-6 flex justify-between items-center text-white border-b-4 border-brand-gold">
               <div>
                  <h3 className="font-black text-lg uppercase tracking-widest">Audit Progress</h3>
                  <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest mt-1">{answeredCount} of {questionBank.length} Completed</p>
               </div>
               <button onClick={() => setShowReviewDrawer(false)} className="bg-slate-800 hover:bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center transition">
                 <i className="fa-solid fa-xmark"></i>
               </button>
            </div>
            <div className="p-6 overflow-y-auto flex-grow bg-slate-50">
               <div className="grid grid-cols-5 gap-3">
                 {questionBank.map((_, idx) => {
                   const isAnswered = userAnswers[idx] !== undefined;
                   const isActive = currentIdx === idx;
                   
                   let btnStyle = "h-12 w-12 rounded-xl flex items-center justify-center text-xs font-black transition-all transform hover:scale-105 border-2 shadow-sm ";
                   
                   if (isActive) {
                     btnStyle += "bg-brand-dark border-brand-dark text-brand-gold ring-4 ring-brand-gold/30";
                   } else if (isAnswered) {
                     btnStyle += "bg-emerald-500 border-emerald-600 text-white shadow-emerald-500/20";
                   } else {
                     btnStyle += "bg-white border-dashed border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600";
                   }

                   return (
                     <button
                       key={idx}
                       onClick={() => {
                         setCurrentIdx(idx);
                         setShowReviewDrawer(false);
                       }}
                       className={btnStyle}
                     >
                       {idx + 1}
                     </button>
                   );
                 })}
               </div>
            </div>
            <div className="p-6 bg-white border-t border-gray-100 flex flex-col space-y-3">
               <div className="flex items-center text-[10px] font-black uppercase text-gray-500 tracking-widest mb-2"><div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div> Answered</div>
               <div className="flex items-center text-[10px] font-black uppercase text-gray-500 tracking-widest mb-2"><div className="w-3 h-3 rounded-full border-2 border-dashed border-gray-300 mr-2"></div> Unanswered</div>
               <div className="flex items-center text-[10px] font-black uppercase text-gray-500 tracking-widest mb-4"><div className="w-3 h-3 rounded-full bg-brand-dark mr-2"></div> Current Task</div>
               <button 
                  onClick={() => { setShowReviewDrawer(false); setShowSubmitModal(true); }}
                  className="w-full bg-brand-dark text-brand-gold py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-slate-800 transition"
               >
                 Review & Submit 
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white max-w-md w-full rounded-3xl shadow-2xl overflow-hidden transform animate-in zoom-in-95 duration-200">
             <div className="p-8 text-center bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
                <i className="fa-solid fa-file-contract text-5xl mb-4 text-brand-dark drop-shadow-sm"></i>
                <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-2">Finalize Assessment</h3>
                <p className="text-gray-500 text-xs font-bold leading-relaxed px-4">
                  You are about to irreversibly submit your answers for final grading.
                </p>
             </div>
             <div className="p-8 pb-4">
                {answeredCount < questionBank.length ? (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start mb-6">
                     <i className="fa-solid fa-circle-exclamation text-red-500 text-xl mr-4 mt-0.5 animate-pulse"></i>
                     <div>
                       <h4 className="text-red-800 font-extrabold text-sm uppercase tracking-widest mb-1">Incomplete Answers</h4>
                       <p className="text-red-600/80 text-[11px] font-bold leading-snug">
                         You have precisely <span className="text-red-700 bg-red-200/50 px-1.5 py-0.5 rounded">{questionBank.length - answeredCount}</span> unanswered questions remaining. Skipping questions will result in a zero for that item.
                       </p>
                     </div>
                  </div>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start mb-6">
                     <i className="fa-solid fa-shield-check text-emerald-500 text-xl mr-4 mt-0.5"></i>
                     <div>
                       <h4 className="text-emerald-800 font-extrabold text-sm uppercase tracking-widest mb-1">Fully Validated</h4>
                       <p className="text-emerald-600/80 text-[11px] font-bold leading-snug">
                         All questions have been successfully answered. You are cleared for final submission.
                       </p>
                     </div>
                  </div>
                )}
             </div>
             <div className="p-6 bg-white border-t border-gray-100 flex space-x-3">
               <button 
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 py-3 text-xs font-black text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl uppercase tracking-widest transition"
               >
                 Cancel
               </button>
               <button 
                  onClick={handleFinalSubmit}
                  className="flex-[1.5] py-3 text-xs font-black text-white bg-brand-primary hover:bg-emerald-600 hover:shadow-lg rounded-xl uppercase tracking-widest transition shadow flex items-center justify-center"
               >
                 Finalize & Submit <i className="fa-solid fa-clipboard-check text-brand-gold ml-2"></i>
               </button>
             </div>
          </div>
        </div>
      )}

    </div>
  );
}