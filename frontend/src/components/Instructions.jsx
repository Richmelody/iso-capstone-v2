import React, { useState } from 'react';

export default function Instructions({ onStartExam }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = async () => {
    setIsLoading(true);
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen().catch((e) => console.log("Fullscreen blocked"));
      }
      onStartExam();
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container bg-white rounded-2xl shadow-xl overflow-hidden border">
      <div className="iso-header-bg p-12 text-white text-center">
          <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">Engagement Protocols</h2>
          <p className="text-emerald-100 italic">Operational briefing for Final EMS Validation.</p>
      </div>
      
      <div className="p-8 md:p-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-10">
              <h4 className="font-black text-red-800 uppercase text-xs mb-2 tracking-widest"><i className="fa-solid fa-triangle-exclamation mr-2"></i> Critical: Audit Integrity</h4>
              <p className="text-sm text-red-900 leading-relaxed font-bold">
                  DO NOT attempt to refresh this page, navigate backward, or access developer tools. The simulation is tracked via AI facial recognition, tab-switching monitors, and fullscreen locking. Any deviation from the active screen will terminate the session and invalidate your results.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="border p-6 rounded-2xl bg-gray-50">
                  <h4 className="font-black text-brand-dark uppercase text-[10px] tracking-widest mb-3 border-b pb-2">1. Assessment Objective</h4>
                  <p className="text-xs leading-relaxed text-gray-600">This capstone validates your ability to check an Environmental Management System for conformity and effectiveness. You must demonstrate a transition from <strong>Clause Knowledge</strong> to <strong>Internal Audit Practice</strong>.</p>
              </div>
              <div className="border p-6 rounded-2xl bg-gray-50">
                  <h4 className="font-black text-brand-dark uppercase text-[10px] tracking-widest mb-3 border-b pb-2">2. Evaluation Framework</h4>
                  <ul className="text-[11px] space-y-2 font-bold text-gray-700">
                      <li className="flex items-center"><i className="fa-solid fa-check-double text-brand-primary mr-2"></i> Aspect &amp; Impact Analysis</li>
                      <li className="flex items-center"><i className="fa-solid fa-check-double text-brand-primary mr-2"></i> Operational Control Verification</li>
                      <li className="flex items-center"><i className="fa-solid fa-check-double text-brand-primary mr-2"></i> Non-Conformity (NC) Reporting</li>
                  </ul>
              </div>
          </div>

          <div className="space-y-4 mb-10 text-gray-700 font-black uppercase text-xs tracking-wider">
              <div className="flex items-center p-3 border rounded-xl"><i className="fa-solid fa-list-check text-brand-primary mr-4 text-lg"></i> 20 Strategic Audit Tasks</div>
              <div className="flex items-center p-3 border rounded-xl"><i className="fa-solid fa-bullseye text-brand-primary mr-4 text-lg"></i> 80% Performance Threshold</div>
              <div className="flex items-center p-3 border rounded-xl"><i className="fa-solid fa-camera text-brand-primary mr-4 text-lg"></i> AI Webcam &amp; Browser Monitoring Required</div>
          </div>

          <button 
            onClick={handleStart} 
            disabled={isLoading}
            className="w-full bg-brand-dark text-white font-black text-xl py-5 rounded-2xl shadow-xl hover:bg-emerald-900 transition flex items-center justify-center"
          >
              {isLoading ? (
                <>Initializing AI &amp; Webcam... <i className="fa-solid fa-spinner fa-spin ml-2"></i></>
              ) : (
                <><span>Initialize Proctor &amp; Start Exam</span> <i className="fa-solid fa-bolt ml-2 text-brand-gold"></i></>
              )}
          </button>
      </div>
    </div>
  );
}
