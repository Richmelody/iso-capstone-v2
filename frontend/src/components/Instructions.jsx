import React, { useState } from 'react';

export default function Instructions({ onStartExam, onLogout }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);

  const handleAgreeAndStart = () => {
    setIsLoading(true);
    onStartExam();
  };

  return (
    <div className="page-container bg-white rounded-2xl shadow-xl overflow-hidden border relative">
      {onLogout && (
        <button 
          onClick={onLogout} 
          className="absolute top-4 left-4 md:top-6 md:left-6 text-emerald-100 hover:text-white transition font-bold text-[10px] uppercase tracking-widest z-10 flex items-center"
        >
          <i className="fa-solid fa-angle-left mr-2 text-sm"></i> Return to login page
        </button>
      )}
      <div className="iso-header-bg pt-16 pb-12 px-12 text-white text-center">
        <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">Engagement Protocols</h2>
        <p className="text-emerald-100 italic">Operational briefing for Final EMS Validation.</p>
      </div>

      <div className="p-8 md:p-12">

        {/* OBJECTIVE CONTEXT & RULES */}
        <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-8 rounded-r-xl">
          <h4 className="font-black text-slate-800 uppercase text-sm mb-3 tracking-widest flex items-center">
            <i className="fa-solid fa-scale-balanced text-xl mr-3"></i>
            Assessment Integrity Protocols
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed font-medium mb-4">
            To maintain the standard of this certification, this environment is governed by automated compliance protocols. Please note the following system constraints before initiating the assessment:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start">
              <i className="fa-solid fa-window-restore text-slate-500 mt-1 mr-3"></i>
              <p className="text-xs text-slate-700 font-medium"><strong>Tab Navigation:</strong> The system requires continuous focus. Navigating away from the active tab or minimizing the browser will immediately terminate the session and submit your current score.</p>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-compress text-slate-500 mt-1 mr-3"></i>
              <p className="text-xs text-slate-700 font-medium"><strong>Display Mode:</strong> The assessment operates exclusively in full-screen mode. Exiting full-screen will trigger an automatic submission.</p>
            </li>
          </ul>
        </div>

        {/* SYSTEM PREREQUISITES */}
        <div className="mb-10">
          <h4 className="font-black text-brand-dark uppercase text-[10px] tracking-widest mb-4 border-b-2 border-brand-primary pb-2 inline-block">
            System & Environment Prerequisites
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 p-5 rounded-xl bg-white shadow-sm flex items-start">
              <i className="fa-solid fa-laptop text-brand-primary text-xl mt-1 mr-4 w-6 text-center"></i>
              <div>
                <h5 className="font-black text-gray-800 text-xs uppercase mb-1">Supported Devices</h5>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">A laptop or desktop computer is required. Mobile operating systems may background the browser, resulting in session termination.</p>
              </div>
            </div>
            <div className="border border-gray-200 p-5 rounded-xl bg-white shadow-sm flex items-start">
              <i className="fa-solid fa-plug text-brand-primary text-xl mt-1 mr-4 w-6 text-center"></i>
              <div>
                <h5 className="font-black text-gray-800 text-xs uppercase mb-1">Power Continuity</h5>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">Ensure your device is connected to a reliable power source to prevent unexpected system shutdowns during the validation.</p>
              </div>
            </div>
            <div className="border border-gray-200 p-5 rounded-xl bg-white shadow-sm flex items-start">
              <i className="fa-solid fa-lightbulb text-brand-primary text-xl mt-1 mr-4 w-6 text-center"></i>
              <div>
                <h5 className="font-black text-gray-800 text-xs uppercase mb-1">Environment</h5>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">Ensure adequate lighting and remain centered in the camera frame to allow the system to continuously verify your presence.</p>
              </div>
            </div>
            <div className="border border-gray-200 p-5 rounded-xl bg-white shadow-sm flex items-start">
              <i className="fa-solid fa-wifi text-brand-primary text-xl mt-1 mr-4 w-6 text-center"></i>
              <div>
                <h5 className="font-black text-gray-800 text-xs uppercase mb-1">Network Stability</h5>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">A continuous, high-speed internet connection is required to synchronize your assessment data with the server.</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowConsentModal(true)}
          className="w-full bg-brand-dark text-white font-black text-lg md:text-xl py-5 px-4 rounded-2xl shadow-xl hover:bg-emerald-900 transition flex items-center justify-center text-center"
        >
          Review System Permissions <i className="fa-solid fa-shield-halved ml-3 flex-shrink-0 text-brand-gold"></i>
        </button>
      </div>

      {/* CONSENT MODAL OVERLAY */}
      {showConsentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="bg-brand-dark p-6 text-white text-center">
              <i className="fa-solid fa-video text-4xl mb-3 text-brand-gold"></i>
              <h3 className="text-xl font-black uppercase tracking-widest">Required Permissions</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-700 font-bold mb-4 leading-relaxed text-sm">
                To proceed to the hardware verification stage, you must grant the browser permissions for the following automated checks:
              </p>
              <ul className="space-y-4 text-xs font-black text-gray-800 mb-8 border-l-4 border-brand-primary pl-4 bg-gray-50 p-4 rounded-r-lg">
                <li className="flex items-center"><i className="fa-solid fa-camera text-brand-primary mr-3 text-lg w-5"></i> Live Webcam Access (Presence Verification)</li>
                <li className="flex items-center"><i className="fa-solid fa-expand text-brand-primary mr-3 text-lg w-5"></i> Fullscreen Mode (Focus Verification)</li>
                <li className="flex items-center"><i className="fa-solid fa-laptop-file text-brand-primary mr-3 text-lg w-5"></i> Tab Monitoring (Integrity Verification)</li>
              </ul>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setShowConsentModal(false)}
                  className="flex-1 py-4 px-4 bg-gray-100 text-gray-600 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-gray-200 transition"
                >
                  Decline
                </button>
                <button
                  onClick={handleAgreeAndStart}
                  disabled={isLoading}
                  className="flex-1 py-4 px-4 bg-brand-primary text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition shadow-lg flex justify-center items-center"
                >
                  {isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : "Acknowledge & Continue"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}