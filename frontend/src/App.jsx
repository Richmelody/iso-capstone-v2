import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, Navigate, useLocation } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import Instructions from './components/Instructions';
import QuizEngine from './components/QuizEngine';
import ResultsScreen from './components/ResultsScreen';
import ProctorCamera from './components/ProctorCamera';
import PreFlightCheck from './components/PreFlightCheck';
import { examLibrary } from './data';

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
  const rawExamData = examLibrary[examId];

  const examData = React.useMemo(() => {
    if (!rawExamData) return null;
    const questions = (rawExamData.questions || []).map(q => {
      // Normalize options to object format: { text: string, correct: boolean }
      if (q.options && q.options.length > 0 && typeof q.options[0] === 'string') {
        return {
          ...q,
          options: q.options.map((optStr, idx) => ({
            text: optStr,
            correct: idx === q.answer
          }))
        };
      }
      return q;
    });
    return {
      ...rawExamData,
      questions
    };
  }, [rawExamData]);

  const [finalScore, setFinalScore] = useState(0);
  const [failedCats, setFailedCats] = useState(new Set());
  // Epic 2.1: Store completed exam layout + answers to feed ResultsScreen
  const [completedLayout, setCompletedLayout] = useState(null);
  const [completedAnswers, setCompletedAnswers] = useState({});

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

  // Epic 1.4 / 2.1: Accept optional layout so the first sync locks it to the DB.
  const executeVaultSync = async (userAnswers, timeLeft, currentIdx, layout) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const body = {
        code: accessCode,
        studentEmail: studentEmail,
        userAnswers: userAnswers,
        timeLeft: timeLeft,
        currentIdx: currentIdx,
      };
      // Epic 5.3: Only include layout when provided — backward-compat with old payloads
      if (layout) body.layout = layout;
      await fetch(`${apiUrl}/sync-progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (e) {
      console.error("Failed to sync progress.", e);
    }
  };

  const executeVaultBurn = async (scoreOrAnswers) => {
    setIsVaultBurned(true); // Engages the global router trap
    // onBurnNetwork can be called with either a score (number) or userAnswers (object)
    const score = typeof scoreOrAnswers === 'number' ? scoreOrAnswers : 0;
    const totalScore = 20;
    const percent = totalScore > 0 ? ((score / totalScore) * 100).toFixed(1) + "%" : "0.0%";
    const passed = false; // Always fail: vault burn = proctoring violation
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await fetch(`${apiUrl}/complete-exam`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: accessCode, studentEmail, score, totalScore, percent, passed, cheating_events: [] })
      });
    } catch (e) {
      console.error("Failed to commit completion to vault.", e);
    }
  };

  // Epic 2.1: Receive assignedLayout + userAnswers from QuizEngine on completion.
  const finishExam = async (score, cats, assignedLayout, userAnswers) => {
    setFinalScore(score);
    setFailedCats(cats);
    if (assignedLayout) setCompletedLayout(assignedLayout);
    if (userAnswers)    setCompletedAnswers(userAnswers);
    setIsProctoringActive(false);

    const totalScore = (assignedLayout && assignedLayout.length > 0) ? assignedLayout.length : 20;
    const percent = totalScore > 0 ? ((score / totalScore) * 100).toFixed(1) + "%" : "0.0%";
    const passThreshold = (examData && examData.passing_score_percent) ? (examData.passing_score_percent / 100) : 0.7;
    const passed = totalScore > 0 && (score / totalScore) >= passThreshold;

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await fetch(`${apiUrl}/complete-exam`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_email: studentEmail,
          exam_id: examId,
          score: score,
          total_questions: totalScore,
          passed: passed,
          category_breakdown: catScores
        })
      });
    } catch (e) {
      console.error("Failed to post score via API/Webhook", e);
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

  if (!examData) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Exam Not Found</h1>
        <p className="text-gray-700 max-w-md mb-6">
          SECURITY ALERT: The exam you are trying to access does not exist or your access code is mapped to an invalid exam ID.
        </p>
        <button onClick={handleLogout} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Return to Login
        </button>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="instructions" element={<Instructions examData={examData} onStartExam={handleStartPreFlight} onLogout={handleLogout} />} />
        <Route path="preflight" element={<PreFlightCheck onReady={handleStartExam} onCancel={() => navigate(`/exam/${examId}/instructions`)} />} />
        <Route path="assessment" element={<QuizEngine onFinish={finishExam} onBurnNetwork={executeVaultBurn} onSyncNetwork={executeVaultSync} examData={examData} isVaultBurned={isVaultBurned} recoveredState={recoveredState} accessCode={accessCode} />} />
        {/* Epic 2.1: Pass assignedLayout + userAnswers so ResultsScreen can render per-question review */}
        <Route path="results" element={<ResultsScreen score={finalScore} failedCats={failedCats} studentName={studentName} studentEmail={studentEmail} assignedLayout={completedLayout} userAnswers={completedAnswers} />} />
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

  const inAssessment = location.pathname.includes('/assessment');


  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50">
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-10 mix-blend-multiply select-none">
        <img src="/logo.png" alt="Watermark" className="w-[90vw] md:w-[60vw] max-w-4xl object-contain grayscale" />
      </div>

      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center relative z-10 w-full">
          {!inAssessment ? (
            <div className="w-full flex flex-col items-center justify-center mt-1">
              <img src="/logo.png" alt="Astute Logo" className="h-7 md:h-9 max-w-full object-contain mb-1" />
              <span className="text-[9px] md:text-[11px] text-slate-400 font-bold uppercase tracking-widest">{headerTitle}</span>
            </div>
          ) : (
            <>
              <div className="w-[100px] md:w-[200px] flex justify-start flex-shrink-0">
                <img src="/logo.png" alt="Astute Logo" className="h-6 md:h-8 max-w-full object-contain" />
              </div>
              <div className="flex-1 hidden md:flex flex-col items-center justify-center text-center px-2 min-w-0">
                <h1 className="text-lg font-bold text-slate-800 leading-none uppercase tracking-tighter truncate w-full">Capstone Project</h1>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-0.5 truncate w-full">{headerTitle}</span>
              </div>
              <div id="timer-portal-target" className="w-[100px] md:w-[220px] flex justify-end flex-shrink-0"></div>
            </>
          )}
        </div>
      </header>

      <main className={`flex-grow container mx-auto px-3 md:px-6 py-4 md:py-8 transition-all duration-300 relative ${inAssessment ? 'max-w-7xl xl:max-w-[1440px]' : 'max-w-4xl'}`}>
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