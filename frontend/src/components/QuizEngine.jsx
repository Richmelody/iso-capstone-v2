import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function QuizEngine({ onFinish, examData }) {
  const questionBank = examData?.questions || [];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [score, setScore] = useState(0);
  const [failedCats, setFailedCats] = useState(new Set());
  const [lockoutMessage, setLockoutMessage] = useState(null);
  const hasTrippedRef = React.useRef(false);

  // 1. Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!hasTrippedRef.current) {
             hasTrippedRef.current = true;
             onFinish(score, failedCats);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onFinish, score, failedCats]);

  // 2. Prevent Refreshing the Page
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // 3. STRICT PROCTORING ENFORCEMENT (Auto-Submit)
  useEffect(() => {
    const enforceSecurity = () => {
      if (hasTrippedRef.current) return;
      
      // If they switch tabs OR escape fullscreen, auto-submit and fail them.
      if (document.hidden || !document.fullscreenElement) {
        hasTrippedRef.current = true;
        setLockoutMessage("SECURITY VIOLATION DETECTED. AUTO-SUBMITTING EXAM...");

        // Give them 2 seconds to see the error, then force the submission
        setTimeout(() => {
          onFinish(score, failedCats);
        }, 2000);
      }
    };

    document.addEventListener('visibilitychange', enforceSecurity);
    document.addEventListener('fullscreenchange', enforceSecurity);

    return () => {
      document.removeEventListener('visibilitychange', enforceSecurity);
      document.removeEventListener('fullscreenchange', enforceSecurity);
    };
  }, [onFinish, score, failedCats]);


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

  // If a violation occurs, show this terrifying red screen right before auto-submitting
  if (lockoutMessage) {
    return (
      <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-red-600 text-white p-8 text-center animate-pulse">
        <i className="fa-solid fa-triangle-exclamation text-8xl mb-6 text-black/50"></i>
        <h1 className="text-4xl font-black uppercase tracking-widest mb-4">Exam Terminated</h1>
        <p className="text-xl font-bold">{lockoutMessage}</p>
      </div>
    );
  }

  const timerTarget = document.getElementById('timer-portal-target');
  const timerContent = (
    <div className="flex items-center bg-gray-50 border px-4 py-2 rounded-md mb-4 md:mb-0">
      <span className="font-mono text-xl font-bold text-brand-dark">{formatTime(timeLeft)}</span>
    </div>
  );

  return (
    <div className="page-container">
      {timerTarget ? createPortal(timerContent, timerTarget) : timerContent}

      <div id="exam-hud" className="mb-6 flex justify-between items-end">
        <div>
          <span className="bg-brand-gold text-white text-[10px] font-black px-2 py-1 rounded uppercase mb-1 inline-block" id="section-label">{q.section}</span>
          <h2 className="text-2xl font-black text-gray-900 tracking-tighter uppercase" id="section-title">Fundamentals</h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-gray-400 uppercase mb-1">Task <span id="q-current">{currentIdx + 1}</span> of {questionBank.length}</div>
          <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div id="progress-bar" className="h-full bg-brand-primary transition-all duration-500" style={{ width: `${((currentIdx + 1) / questionBank.length) * 100}%` }}></div>
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