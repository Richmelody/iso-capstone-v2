import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

export default function ProctorCamera({ studentName, studentEmail, isProctoringActive }) {
  const videoRef = useRef(null);
  const [warningMsg, setWarningMsg] = useState(null);
  const activeIntervalRef = useRef(null);
  const streamRef = useRef(null);

  // --- DRAG STATE ---
  // Default positioning it roughly in the bottom right corner
  const [position, setPosition] = useState({
    x: window.innerWidth - 220,
    y: window.innerHeight - 180
  });
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

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
            logViolation("NO_FACE", "Candidate left the camera view.");
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

    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('cut', handleCut);

    // Handle window resize to keep the video in bounds if they shrink the screen
    const handleResize = () => {
      setPosition(prev => ({
        x: Math.min(prev.x, window.innerWidth - 220),
        y: Math.min(prev.y, window.innerHeight - 180)
      }));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      unmounted = true;
      if (activeIntervalRef.current) clearInterval(activeIntervalRef.current);
      if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('cut', handleCut);
      window.removeEventListener('resize', handleResize);
    };
  }, [isProctoringActive, studentName, studentEmail]);

  // --- DRAG HANDLERS ---
  const onPointerDown = (e) => {
    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;

    // Calculate new position, keeping it within window bounds
    let newX = e.clientX - dragOffset.current.x;
    let newY = e.clientY - dragOffset.current.y;

    newX = Math.max(0, Math.min(newX, window.innerWidth - 200)); // 200 is approx width
    newY = Math.max(0, Math.min(newY, window.innerHeight - 150)); // 150 is approx height

    setPosition({ x: newX, y: newY });
  };

  const onPointerUp = (e) => {
    isDragging.current = false;
    e.target.releasePointerCapture(e.pointerId);
  };

  if (!isProctoringActive) return null;

  return (
    <>
      {warningMsg && (
        <div id="proctor-warning" className="fixed top-0 left-0 w-full bg-red-600 text-white text-center font-bold py-2 shadow-lg z-[9999]">
          <i className="fa-solid fa-triangle-exclamation mr-2"></i> {warningMsg}
        </div>
      )}

      <div
        id="webcam-container"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ left: `${position.x}px`, top: `${position.y}px`, touchAction: 'none' }}
        className="fixed border-4 border-brand-dark rounded-lg shadow-2xl overflow-hidden z-50 bg-black w-48 h-36 cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-brand-gold transition-shadow"
      >
        <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover transform scale-x-[-1] pointer-events-none"></video>

        <div className="absolute top-1 left-1 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded cursor-pointer pointer-events-none">
          <i className="fa-solid fa-arrows-up-down-left-right"></i> Drag
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-red-600/90 text-white text-[10px] font-black text-center uppercase tracking-widest py-1 animate-pulse pointer-events-none">
          Live Proctoring
        </div>
      </div>
    </>
  );
}