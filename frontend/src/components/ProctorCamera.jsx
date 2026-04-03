import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

export default function ProctorCamera({ studentName, studentEmail, isProctoringActive }) {
  const videoRef = useRef(null);
  const [warningMsg, setWarningMsg] = useState(null);
  const activeIntervalRef = useRef(null);
  const streamRef = useRef(null);

  const endpoint = import.meta.env.VITE_VPS_PROCTOR_ENDPOINT || "http://localhost:8000/log-cheating";

  const logViolation = async (type, detail) => {
    setWarningMsg("SECURITY ANOMALY DETECTED. THIS EVENT HAS BEEN LOGGED.");
    setTimeout(() => setWarningMsg(null), 3000);

    let base64Image = "";
    if (videoRef.current && videoRef.current.readyState === 4) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
      base64Image = canvas.toDataURL('image/jpeg', 0.5); 
    }

    const payload = {
        studentEmail: studentEmail,
        studentName: studentName,
        violationType: type,
        details: detail,
        timestamp: new Date().toISOString(),
        snapshot: base64Image
    };

    fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).catch(e => console.error("Proctor logging failed:", e));
  };

  useEffect(() => {
    let unmounted = false;
    let model = null;

    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (unmounted) {
           stream.getTracks().forEach(t => t.stop());
           return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        model = await blazeface.load();
        startDetectionLoop();
      } catch (err) {
        alert("CRITICAL ERROR: Webcam access is required to proceed with this validated assessment.");
        console.error("Camera error:", err);
      }
    };

    const startDetectionLoop = () => {
      activeIntervalRef.current = setInterval(async () => {
        if (!isProctoringActive || unmounted || !model || !videoRef.current) return;
        if (videoRef.current.readyState === 4) {
          const faces = await model.estimateFaces(videoRef.current, false);
          if (faces.length === 0) {
            logViolation("NO_FACE", "Auditor left the camera view.");
          } else if (faces.length > 1) {
            logViolation("MULTIPLE_FACES", "Additional persons detected in camera view.");
          }
        }
      }, 2000);
    };

    if (isProctoringActive) {
      setupCamera();
    }

    const handleCopy = (e) => { e.preventDefault(); logViolation("COPY_ATTEMPT", "Attempted to copy exam content."); };
    const handlePaste = (e) => { e.preventDefault(); logViolation("PASTE_ATTEMPT", "Attempted to paste content into exam."); };
    const handleCut = (e) => { e.preventDefault(); };
    
    const handleVisibilityChange = () => {
      if (document.hidden && isProctoringActive) {
        logViolation("TAB_SWITCH", "Auditor navigated away from the exam tab.");
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isProctoringActive) {
        logViolation("FULLSCREEN_EXIT", "Auditor exited fullscreen mode.");
      }
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('cut', handleCut);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      unmounted = true;
      if (activeIntervalRef.current) {
        clearInterval(activeIntervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isProctoringActive, studentName, studentEmail]);

  if (!isProctoringActive) return null;

  return (
    <>
      {warningMsg && (
        <div id="proctor-warning" className="fixed top-0 left-0 w-full bg-red-600 text-white text-center font-bold py-2 shadow-lg z-[9999]">
            <i className="fa-solid fa-triangle-exclamation mr-2"></i> {warningMsg}
        </div>
      )}
      
      <div id="webcam-container" className="fixed bottom-4 right-4 border-4 border-brand-dark rounded-lg shadow-2xl overflow-hidden z-50 bg-black w-48 h-36">
          <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover transform scale-x-[-1]"></video>
          <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white text-[10px] font-black text-center uppercase tracking-widest py-1 animate-pulse">
            Live Proctoring
          </div>
      </div>
    </>
  );
}
