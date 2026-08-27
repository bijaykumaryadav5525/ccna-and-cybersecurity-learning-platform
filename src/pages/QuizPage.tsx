import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { QuizModule } from '../data/ccnaQuizzes';

interface QuizPageProps {
  module: QuizModule;
  onBack: () => void;
  onComplete: (score: number, total: number, moduleName: string) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ module, onBack, onComplete }) => {
  const { isDark } = useTheme();
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(module.questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const bg = isDark ? 'bg-gray-950' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const text = isDark ? 'text-gray-100' : 'text-gray-900';
  const subText = isDark ? 'text-gray-400' : 'text-gray-600';

  const question = module.questions[currentQ];
  const selectedAnswer = selectedAnswers[currentQ];
  const isAnswered = selectedAnswer !== null;

  const handleAnswer = (optionIdx: number) => {
    if (isAnswered) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQ] = optionIdx;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQ < module.questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setShowExplanation(selectedAnswers[currentQ - 1] !== null);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.filter((ans, idx) => ans === module.questions[idx].correct).length;
  };

  const getOptionStyle = (optionIdx: number) => {
    if (!isAnswered) {
      return isDark
        ? 'border-gray-700 hover:border-blue-400 hover:bg-blue-400/5 cursor-pointer'
        : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
    }
    if (optionIdx === question.correct) {
      return 'border-green-400 bg-green-400/10 text-green-400';
    }
    if (optionIdx === selectedAnswer && selectedAnswer !== question.correct) {
      return 'border-red-400 bg-red-400/10 text-red-400';
    }
    return isDark ? 'border-gray-700 opacity-50' : 'border-gray-200 opacity-50';
  };

  if (quizCompleted) {
    const score = calculateScore();
    const percentage = Math.round((score / module.questions.length) * 100);
    let rating = '';
    let ratingColor = '';
    let ratingIcon = '';

    if (percentage >= 90) {
      rating = 'Excellent! 🏆';
      ratingColor = 'text-yellow-400';
      ratingIcon = '🥇';
    } else if (percentage >= 70) {
      rating = 'Good Job! 👍';
      ratingColor = 'text-green-400';
      ratingIcon = '🥈';
    } else {
      rating = 'More to Learn 📚';
      ratingColor = 'text-blue-400';
      ratingIcon = '📖';
    }

    return (
      <div className={`min-h-screen ${bg} pt-20 pb-16 flex items-center justify-center`}>
        <div className="max-w-2xl w-full mx-auto px-4">
          <div className={`${cardBg} border rounded-2xl p-8 text-center`}>
            <div className="text-6xl mb-4">{ratingIcon}</div>
            <h2 className={`text-3xl font-black mb-2 ${text}`}>Quiz Complete!</h2>
            <h3 className={`text-xl font-bold mb-6 ${ratingColor}`}>{rating}</h3>

            <div className="relative w-36 h-36 mx-auto mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke={isDark ? '#1f2937' : '#f3f4f6'} strokeWidth="10" />
                <circle
                  cx="50" cy="50" r="40" fill="none"
                  stroke={percentage >= 90 ? '#fbbf24' : percentage >= 70 ? '#4ade80' : '#60a5fa'}
                  strokeWidth="10"
                  strokeDasharray={`${percentage * 2.51327} ${251.327 - percentage * 2.51327}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-3xl font-black ${text}`}>{percentage}%</span>
                <span className={`text-xs ${subText}`}>{score}/{module.questions.length}</span>
              </div>
            </div>

            <p className={`${subText} mb-8`}>
              You answered <strong className={text}>{score}</strong> out of <strong className={text}>{module.questions.length}</strong> questions correctly.
            </p>

            {/* Per-question review */}
            <div className="text-left space-y-2 mb-8">
              <h4 className={`font-bold ${text} mb-3`}>Question Review:</h4>
              {module.questions.map((q, idx) => (
                <div key={idx} className={`flex items-center gap-2 text-sm ${selectedAnswers[idx] === q.correct ? 'text-green-400' : 'text-red-400'}`}>
                  <span>{selectedAnswers[idx] === q.correct ? '✅' : '❌'}</span>
                  <span className={`truncate ${text}`}>Q{idx + 1}: {q.question.substring(0, 50)}...</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => {
                  setCurrentQ(0);
                  setSelectedAnswers(Array(module.questions.length).fill(null));
                  setShowExplanation(false);
                  setQuizCompleted(false);
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                🔄 Retry Quiz
              </button>
              <button
                onClick={() => onComplete(score, module.questions.length, module.title)}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                🏆 Get Certificate
              </button>
              <button
                onClick={onBack}
                className={`px-6 py-3 border rounded-xl font-bold transition-colors ${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}
              >
                ← Back to Modules
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bg} pt-20 pb-16`}>
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className={`flex items-center gap-2 ${subText} hover:${text} transition-colors`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <div className={`flex items-center gap-2 text-sm ${subText}`}>
            <span className={`text-xl`}>{module.icon}</span>
            <span className="font-semibold">{module.title}</span>
          </div>
          <span className={`text-sm font-bold ${text}`}>{currentQ + 1} / {module.questions.length}</span>
        </div>

        {/* Progress Bar */}
        <div className={`w-full h-2 rounded-full mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${module.color} transition-all duration-500`}
            style={{ width: `${((currentQ + 1) / module.questions.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <div className={`${cardBg} border rounded-2xl p-8`}>
          <div className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4 ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
            Question {currentQ + 1}
          </div>
          <h2 className={`text-xl font-bold mb-6 ${text}`}>{question.question}</h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${getOptionStyle(idx)} ${text}`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-sm font-bold border-2 ${
                    isAnswered && idx === question.correct ? 'border-green-400 bg-green-400 text-white' :
                    isAnswered && idx === selectedAnswer && selectedAnswer !== question.correct ? 'border-red-400 bg-red-400 text-white' :
                    isDark ? 'border-gray-600' : 'border-gray-300'
                  }`}>
                    {isAnswered && idx === question.correct ? '✓' :
                     isAnswered && idx === selectedAnswer && selectedAnswer !== question.correct ? '✗' :
                     String.fromCharCode(65 + idx)}
                  </span>
                  <span className="pt-0.5">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && isAnswered && (
            <div className={`rounded-xl p-4 mb-6 border ${
              selectedAnswer === question.correct
                ? isDark ? 'bg-green-400/10 border-green-400/30 text-green-300' : 'bg-green-50 border-green-200 text-green-800'
                : isDark ? 'bg-blue-400/10 border-blue-400/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}>
              <div className="flex items-center gap-2 font-bold mb-2">
                {selectedAnswer === question.correct ? '✅ Correct!' : '❌ Incorrect - Here\'s why:'}
              </div>
              <p className="text-sm leading-relaxed">{question.explanation}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQ === 0}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentQ === 0
                  ? 'opacity-30 cursor-not-allowed'
                  : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                !isAnswered
                  ? 'opacity-30 cursor-not-allowed bg-gray-600 text-gray-400'
                  : 'bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90'
              }`}
            >
              {currentQ === module.questions.length - 1 ? 'Finish Quiz →' : 'Next Question →'}
            </button>
          </div>
        </div>

        {/* Question dots */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {module.questions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentQ(idx); setShowExplanation(selectedAnswers[idx] !== null); }}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                idx === currentQ
                  ? 'bg-blue-500 text-white'
                  : selectedAnswers[idx] === q.correct
                  ? 'bg-green-500 text-white'
                  : selectedAnswers[idx] !== null
                  ? 'bg-red-500 text-white'
                  : isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
