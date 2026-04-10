import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, Navigate, useLocation } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import Instructions from './components/Instructions';
import QuizEngine from './components/QuizEngine';
import ResultsScreen from './components/ResultsScreen';
import ProctorCamera from './components/ProctorCamera';
import PreFlightCheck from './components/PreFlightCheck';
import { examLibrary } from './data/exams';

function ExamLayout({
  studentName,
  studentEmail,
  accessCode,
  isProctoringActive,
  selectedCameraId,
  setIsProctoringActive,
  setSelectedCameraId,
  isVaultBurned,
  setIsVaultBurned,
  recoveredState
}) {
  const { examId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const examData = examLibrary[examId] || examLibrary["14001"];

  const [finalScore, setFinalScore] = useState(0);
  const [failedCats, setFailedCats] = useState(new Set());

  // Prevent accessing exam routes without logging in
  if (!studentName || !studentEmail || !accessCode) {
    return <Navigate to="/" replace />;
  }

  // BROWSER NAVIGATION TRAP: If they are burned, absolutely block backward routing
  if (isVaultBurned && !location.pathname.includes('/assessment') && !location.pathname.includes('/results')) {
    return <Navigate to="/" replace />;
  }

  const handleStartPreFlight = () => {
    navigate(`/exam/${examId}/preflight`);
  };

  const handleStartExam = async (cameraId) => {
    setSelectedCameraId(cameraId);
    setIsProctoringActive(true);
    navigate(`/exam/${examId}/assessment`);

    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen().catch((e) => console.log("Fullscreen blocked"));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const executeVaultSync = async (userAnswers, timeLeft, currentIdx) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await fetch(`${apiUrl}/sync-progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: accessCode,
          studentEmail: studentEmail,
          userAnswers: userAnswers,
          timeLeft: timeLeft,
          currentIdx: currentIdx
        })
      });
    } catch (e) {
      console.error("Failed to sync progress.", e);
    }
  };

  const executeVaultBurn = async (scoreOrAnswers) => {
    setIsVaultBurned(true); // Engages the global router trap
    // onBurnNetwork can be called with either a score (number) or userAnswers (object)
    const score = typeof scoreOrAnswers === 'number' ? scoreOrAnswers : 0;
    const totalScore = examData?.questions?.length || 20;
    const percent = totalScore > 0 ? ((score / totalScore) * 100).toFixed(1) + "%" : "0.0%";
    const passed = totalScore > 0 && (score / totalScore) >= 0.7;
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await fetch(`${apiUrl}/complete-exam`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: accessCode, studentEmail, score, totalScore, percent, passed })
      });
    } catch (e) {
      console.error("Failed to commit completion to vault.", e);
    }
  };

  const finishExam = async (score, cats) => {
    setFinalScore(score);
    setFailedCats(cats);
    setIsProctoringActive(false);

    const totalScore = examData?.questions?.length || 20;
    const percent = totalScore > 0 ? ((score / totalScore) * 100).toFixed(1) + "%" : "0.0%";
    const passed = totalScore > 0 && (score / totalScore) >= 0.7;

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await fetch(`${apiUrl}/complete-exam`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: accessCode, studentEmail, score, totalScore, percent, passed })
      });
    } catch (e) {
      console.error("Failed to commit completion to vault.", e);
    }

    // Unmount the QuizEngine naturally by navigating
    navigate(`/exam/${examId}/results`);

    // Cleanly exit fullscreen AFTER the component drops its security event listeners
    if (document.fullscreenElement) {
      setTimeout(() => {
        document.exitFullscreen().catch(() => { });
      }, 150);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <Routes>
        <Route path="instructions" element={<Instructions onStartExam={handleStartPreFlight} onLogout={handleLogout} />} />
        <Route path="preflight" element={<PreFlightCheck onReady={handleStartExam} onCancel={() => navigate(`/exam/${examId}/instructions`)} />} />
        <Route path="assessment" element={<QuizEngine onFinish={finishExam} onBurnNetwork={executeVaultBurn} onSyncNetwork={executeVaultSync} examData={examData} isVaultBurned={isVaultBurned} recoveredState={recoveredState} />} />
        <Route path="results" element={<ResultsScreen score={finalScore} failedCats={failedCats} studentName={studentName} studentEmail={studentEmail} />} />
        <Route path="*" element={<Navigate to="instructions" replace />} />
      </Routes>

      {isProctoringActive && selectedCameraId !== 'developer-bypass' && (
        <ProctorCamera
          studentName={studentName}
          studentEmail={studentEmail}
          isProctoringActive={isProctoringActive}
          cameraId={selectedCameraId}
        />
      )}
      {import.meta.env.DEV && selectedCameraId === 'developer-bypass' && isProctoringActive && (
        <div className="fixed bottom-4 right-4 bg-purple-900 text-white p-4 rounded-xl shadow-2xl z-50 text-xs font-black uppercase tracking-widest border-2 border-purple-400">
          <i className="fa-solid fa-code text-purple-300 mr-2"></i> Dev Mode: Proctor Bypassed
        </div>
      )}
    </>
  );
}

function App() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const [isProctoringActive, setIsProctoringActive] = useState(false);
  const [selectedCameraId, setSelectedCameraId] = useState(null);

  // Security trap state natively managed at the root layer
  const [isVaultBurned, setIsVaultBurned] = useState(false);

  // Resilient State Protocol
  const [recoveredState, setRecoveredState] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (name, email, code, examId, savedState) => {
    setStudentName(name);
    setStudentEmail(email);
    setAccessCode(code);
    setRecoveredState(savedState || null);
    navigate(`/exam/${examId}/instructions`);
  };

  // Determine current exam title for header
  let headerTitle = "Assessment Portal";
  const match = location.pathname.match(/\/exam\/([^\/]+)/);
  if (match && examLibrary[match[1]]) {
    headerTitle = examLibrary[match[1]].title;
  }

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50">
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-10 mix-blend-multiply select-none">
        <img src="/logo.png" alt="Watermark" className="w-[90vw] md:w-[60vw] max-w-4xl object-contain grayscale" />
      </div>

      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center relative z-10 w-full">
          <div className="w-[80px] md:w-[200px] flex justify-start flex-shrink-0">
            <img src="/logo.png" alt="Astute Logo" className="h-6 md:h-9 max-w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
            <div className="h-8 w-8 bg-brand-primary rounded items-center justify-center text-white font-bold hidden"><i className="fa-solid fa-leaf"></i></div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 min-w-0">
            <h1 className="text-[13px] md:text-lg font-bold text-brand-dark leading-none uppercase tracking-tighter truncate w-full">Capstone Project</h1>
            <span className="text-[8px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest mt-0.5 truncate w-full">{headerTitle}</span>
          </div>

          <div id="timer-portal-target" className="w-[120px] md:w-[220px] flex justify-end flex-shrink-0"></div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-4xl relative">
        <Routes>
          <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />
          <Route path="/exam/:examId/*" element={
            <ExamLayout
              studentName={studentName}
              studentEmail={studentEmail}
              accessCode={accessCode}
              isProctoringActive={isProctoringActive}
              selectedCameraId={selectedCameraId}
              setIsProctoringActive={setIsProctoringActive}
              setSelectedCameraId={setSelectedCameraId}
              isVaultBurned={isVaultBurned}
              setIsVaultBurned={setIsVaultBurned}
              recoveredState={recoveredState}
            />
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;