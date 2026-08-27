import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import QuizListPage from './pages/QuizListPage';
import QuizPage from './pages/QuizPage';
import LabsPage from './pages/LabsPage';
import CyberThreatsPage from './pages/CyberThreatsPage';
import PasswordPage from './pages/PasswordPage';
import CertificatePage from './pages/CertificatePage';
import YearPage from './pages/YearPage';
import MemoryPage from './pages/MemoryPage';
import OperatingPage from './pages/operating';
import RiskPage from './pages/risk';
import CloudPage from './pages/cloud';
import { ccnaQuizModules } from './data/ccnaQuizzes';
import { cybersecurityQuizModules } from './data/cybersecurityQuizzes';

interface YearPageProps {
  year: number;
  onBack: () => void;
  onNavigateYear: (year: number) => void;
}

const ConfiguredYearPage = YearPage as React.ComponentType<YearPageProps>;

interface QuizResult {
  score: number;
  total: number;
  moduleName: string;
}

// ----- localStorage helpers -----
const getStored = (key: string, fallback: any) => {
  const val = localStorage.getItem(key);
  return val !== null ? JSON.parse(val) : fallback;
};
const setStored = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const AppContent: React.FC = () => {
  // Restore state from localStorage
  const [currentPage, setCurrentPage] = useState<string>(() => getStored('currentPage', 'home'));
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(() => getStored('selectedQuizId', null));
  const [quizType, setQuizType] = useState<'ccna' | 'cyber'>(() => getStored('quizType', 'ccna'));
  const [quizResult, setQuizResult] = useState<QuizResult | null>(() => getStored('quizResult', null));
  const [isThreatDetail, setIsThreatDetail] = useState(false);

  // Persist state changes
  useEffect(() => { setStored('currentPage', currentPage); }, [currentPage]);
  useEffect(() => { setStored('selectedQuizId', selectedQuizId); }, [selectedQuizId]);
  useEffect(() => { setStored('quizType', quizType); }, [quizType]);
  useEffect(() => { setStored('quizResult', quizResult); }, [quizResult]);

  // Scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSelectQuiz = (moduleId: string, type: 'ccna' | 'cyber') => {
    setSelectedQuizId(moduleId);
    setQuizType(type);
    setCurrentPage('quiz-active');
  };

  const handleQuizComplete = (score: number, total: number, moduleName: string) => {
    setQuizResult({ score, total, moduleName });
    setCurrentPage('certificate');
  };

  const getActiveModule = () => {
    const modules = quizType === 'ccna' ? ccnaQuizModules : cybersecurityQuizModules;
    return modules.find(m => m.id === selectedQuizId) || modules[0];
  };

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Pages that open FULL SCREEN (No Navbar & Footer)
  const isFullScreen = ['quiz-active', 'operating-systems', 'risk', 'cloud', 'year1', 'year2', 'year3'].includes(currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={navigate} />;
      case 'ccna-quiz':
        return <QuizListPage modules={ccnaQuizModules} title="Network Quiz" subtitle="Test your knowledge" onSelectQuiz={(id) => handleSelectQuiz(id, 'ccna')} onBack={() => navigate('home')} type="ccna" />;
      case 'cyber-quiz':
        return <QuizListPage modules={cybersecurityQuizModules} title="IT Security Quiz" subtitle="Test your cybersecurity knowledge" onSelectQuiz={(id) => handleSelectQuiz(id, 'cyber')} onBack={() => navigate('home')} type="cyber" />;
      case 'quiz-active':
        return <QuizPage module={getActiveModule()} onBack={() => navigate(quizType === 'ccna' ? 'ccna-quiz' : 'cyber-quiz')} onComplete={handleQuizComplete} />;
      case 'ccna-lab':
        return <LabsPage onBack={() => navigate('home')} />;
      case 'cyber-threats':
        return <CyberThreatsPage onBack={() => navigate('home')} setIsThreatDetail={setIsThreatDetail} />;
      case 'password':
        return <PasswordPage onBack={() => navigate('home')} />;
      case 'certificate':
        return <CertificatePage score={quizResult?.score} total={quizResult?.total} moduleName={quizResult?.moduleName} onBack={() => navigate('home')} />;
      
      // Year Routes - Direct link from Dropdown
      case 'year1':
      case 'year2':
      case 'year3': {
        const yearNum = parseInt(currentPage.replace('year', ''));
        return (
          <ConfiguredYearPage
            year={yearNum}
            onBack={() => navigate('home')}
            onNavigateYear={(y: number) => navigate(`year${y}`)}
          />
        );
      }

      // Operating System Page (Full Screen)
      case 'operating-systems':
        return <OperatingPage onBack={() => navigate('home')} />;

      case 'risk':
        return <RiskPage onBack={() => navigate('home')} onComplete={handleQuizComplete} />;

      case 'cloud':
        return <CloudPage onBack={() => navigate('home')} />;

      case 'memory':
        return <MemoryPage onBack={() => navigate('home')} onStartCCNA={() => navigate('ccna-quiz')} onStartSecurity={() => navigate('cyber-quiz')} />;
      default:
        return <HomePage setCurrentPage={navigate} />;
    }
  };

  const showFooter = !['quiz-active'].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hide Navbar and Footer when isFullScreen is true */}
      {!isThreatDetail && !isFullScreen && <Navbar currentPage={currentPage} setCurrentPage={navigate} />}
      <main className="flex-1">{renderPage()}</main>
      {!isThreatDetail && !isFullScreen && showFooter && <Footer setCurrentPage={navigate} />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;