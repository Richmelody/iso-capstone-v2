import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import Instructions from './components/Instructions';
import QuizEngine from './components/QuizEngine';
import ResultsScreen from './components/ResultsScreen';
import ProctorCamera from './components/ProctorCamera';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [isProctoringActive, setIsProctoringActive] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [failedCats, setFailedCats] = useState(new Set());

  // Block right click completely on App level
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleLogin = (name, email) => {
    setStudentName(name);
    setStudentEmail(email);
    setCurrentPage('instructions');
  };

  const startExam = async () => {
    setIsProctoringActive(true);
    setCurrentPage('assessment');
  };

  const finishExam = (score, cats) => {
    setFinalScore(score);
    setFailedCats(cats);
    setIsProctoringActive(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setCurrentPage('results');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <div className="h-9 w-9 bg-brand-primary rounded flex items-center justify-center text-white font-bold"><i className="fa-solid fa-leaf"></i></div>
                <div className="hidden md:block">
                    <h1 className="text-lg font-bold text-brand-dark leading-none uppercase tracking-tighter">Capstone Project</h1>
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">ISO 14001:2015 Internal Auditor</span>
                </div>
            </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl relative">
        {currentPage === 'login' && <LoginScreen onLogin={handleLogin} />}
        {currentPage === 'instructions' && <Instructions onStartExam={startExam} />}
        {currentPage === 'assessment' && (
          <QuizEngine onFinish={finishExam} />
        )}
        {currentPage === 'results' && (
          <ResultsScreen 
            score={finalScore} 
            failedCats={failedCats} 
            studentName={studentName}
            studentEmail={studentEmail}
          />
        )}
      </main>

      {isProctoringActive && (
        <ProctorCamera studentName={studentName} studentEmail={studentEmail} isProctoringActive={isProctoringActive} />
      )}
    </div>
  );
}

export default App;
