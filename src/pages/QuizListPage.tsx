import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { QuizModule } from '../data/ccnaQuizzes';

interface QuizListPageProps {
  modules: QuizModule[];
  title: string;
  subtitle: string;
  onSelectQuiz: (moduleId: string) => void;
  onBack: () => void;
  type: 'ccna' | 'cyber';
}

const QuizListPage: React.FC<QuizListPageProps> = ({ modules, title, subtitle, onSelectQuiz, onBack, type }) => {
  const { isDark } = useTheme();
  const bg = isDark ? 'bg-gray-950' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const text = isDark ? 'text-gray-100' : 'text-gray-900';
  const subText = isDark ? 'text-gray-400' : 'text-gray-600';
  const accent = type === 'ccna' ? 'text-blue-400' : 'text-green-400';

  return (
    <div className={`min-h-screen ${bg} pt-20 pb-16`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Back button */}
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-8 ${subText} hover:${text} transition-colors`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'} ${accent}`}>
            {type === 'ccna' ? '🌐' : '🛡️'} {type === 'ccna' ? 'CCNA CERTIFICATION PREP' : 'IT SECURITY CERTIFICATION PREP'}
          </div>
          <h1 className={`text-4xl sm:text-5xl font-black mb-4 ${text}`}>{title}</h1>
          <p className={`text-xl ${subText} max-w-2xl mx-auto`}>{subtitle}</p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, idx) => (
            <button
              key={module.id}
              onClick={() => onSelectQuiz(module.id)}
              className={`${cardBg} border rounded-2xl p-6 text-left hover:border-green-400/50 transition-all group hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}
            >
              {/* Icon & Question count */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl`}>
                  {module.icon}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                  {module.questions.length} Questions
                </span>
              </div>

              {/* Module number */}
              <div className={`text-xs font-semibold tracking-wider mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                MODULE {String(idx + 1).padStart(2, '0')}
              </div>

              <h3 className={`text-xl font-bold mb-2 ${text} group-hover:${accent} transition-colors`}>
                {module.title}
              </h3>
              <p className={`text-sm ${subText} mb-4`}>{module.description}</p>

              {/* Progress indicator */}
              <div className={`flex items-center gap-2 text-sm ${accent} font-semibold`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start Quiz →
              </div>
            </button>
          ))}
        </div>

        {/* Info box */}
        <div className={`mt-12 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-blue-50 border-blue-200'} border rounded-2xl p-6 text-center`}>
          <p className={`${subText} text-sm`}>
            💡 After completing any quiz, you can earn a <strong className={accent}>personalized certificate</strong> based on your performance.
            Score 90%+ for Excellent, 70%+ for Good, and below for More to Learn rating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizListPage;
