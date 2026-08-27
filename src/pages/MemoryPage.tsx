import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface MemoryPageProps {
  onBack: () => void;
  onStartCCNA: () => void;   // <-- NEW prop
  onStartSecurity: () => void; // <-- NEW prop
}

const MemoryPage: React.FC<MemoryPageProps> = ({ onBack, onStartCCNA, onStartSecurity }) => {
  useTheme();

  // --- State for interactivity ---
  const [candleLit, setCandleLit] = useState(false);
  const [candleCount, setCandleCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  // --- Tribute Quiz Data ---
  const tributeQuestion = {
    question: "In the spirit of this platform, what does building this CCNA Quiz App truly symbolize?",
    options: [
      "The complexity of modern network protocols",
      "A shared journey of learning, growth, and connection",
      "Preparing for a final certification exam",
      "A collection of random technical facts",
    ],
    correct: 1,
    explanation:
      "Just like routing protocols find the best path through a network, this project represents our collective journey to share knowledge, connect with mentors, and help others find their way in the world of networking. It's built with heart, not just code.",
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const handleCandleClick = () => {
    setCandleLit(!candleLit);
    setCandleCount(candleCount + 1);
  };

  // --- Time-based greeting ---
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="min-h-screen bg-[#080b12] text-white pt-20 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-300/5 rounded-full blur-[100px]" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400/30 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: Math.random() * 6 + 's',
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 mb-10 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-[-4px]"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back to Home</span>
        </button>

        <div className="text-center">
          {/* Greeting */}
          <p className="text-amber-400/80 text-sm font-light tracking-widest mb-2 animate-pulse">
            {getGreeting()}, dear friend.
          </p>

          {/* Profile Photo */}
          <div className="relative inline-block mb-7 group">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-amber-400/70 bg-gray-900 shadow-2xl shadow-amber-500/20 mx-auto transition-transform duration-700 group-hover:scale-105">
              <img
                src="/src/image/memory photo.jpeg"
                alt="Memorial profile"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Interactive Candle */}
            <button
              onClick={handleCandleClick}
              className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-[#17130b] border-2 border-amber-400/60 flex items-center justify-center shadow-lg hover:shadow-amber-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
              title="Light a candle in their memory"
            >
              <span className={`text-2xl transition-transform duration-300 ${candleLit ? 'scale-125 rotate-6' : 'scale-100'}`}>
                
              </span>
              {candleLit && (
                <span className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
              )}
            </button>
          </div>

          {/* Candle counter */}
          {candleCount > 0 && (
            <p className="text-amber-300/80 text-xs font-light tracking-widest mb-4 -mt-2 animate-fade-in">
              {candleCount} candle{candleCount > 1 ? 's' : ''} lit in memory
            </p>
          )}

          {/* Memorial label */}
          <div className="flex items-center justify-center gap-3 text-amber-400 text-sm font-semibold tracking-[0.2em] mb-5">
            <span className="text-amber-300">🪶</span>
            <span>IN LOVING MEMORY</span>
            <span className="text-amber-300">🪶</span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            A Friend & Inspiration
          </h1>

          {/* Subtitle */}
          <p
            className="text-amber-300 text-lg sm:text-xl italic font-medium mb-5"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Forever in our hearts · Forever remembered
          </p>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-7" />

          {/* Dedication Card */}
          <div className="bg-[#111722]/90 backdrop-blur-md border border-amber-400/30 rounded-2xl p-7 sm:p-9 mb-10 shadow-xl shadow-black/30 transition-all duration-500 hover:border-amber-400/60">
            <p className="text-gray-100 leading-8 text-center text-base sm:text-lg">
              This platform was built with <span className="text-amber-400">❤️</span> heart, dedication, and a passion
              for learning. It is dedicated to all friends, mentors, and
              loved ones who inspire us to keep growing, to keep building,
              and to share knowledge with the world.
            </p>
            <div className="mt-5 text-center">
              <span className="text-amber-400 text-2xl animate-bounce">🕯️</span>
            </div>
          </div>

          {/* ========== TRIBUTE QUIZ SECTION ========== */}
          <div className="bg-gradient-to-br from-[#111722] to-[#0c101a] border border-amber-400/20 rounded-2xl p-6 sm:p-8 mb-10 shadow-2xl shadow-amber-500/5 backdrop-blur-sm transition-all duration-500 hover:border-amber-400/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🧠</span>
              <h2 className="text-xl font-bold text-white text-left">A Question from the Heart</h2>
            </div>

            <p className="text-gray-300 text-left text-sm mb-5 border-l-2 border-amber-400/40 pl-4 italic">
              {tributeQuestion.question}
            </p>

            <div className="space-y-3">
              {tributeQuestion.options.map((opt, idx) => {
                let buttonStyle = 'bg-[#1c2333] border-gray-600 hover:border-amber-400/60 hover:bg-[#232b3f]';
                let icon = '';

                if (showResult && selectedAnswer !== null) {
                  if (idx === tributeQuestion.correct) {
                    buttonStyle = 'bg-green-900/40 border-green-500 text-green-300';
                    icon = '✅ ';
                  } else if (idx === selectedAnswer && idx !== tributeQuestion.correct) {
                    buttonStyle = 'bg-red-900/40 border-red-500 text-red-300';
                    icon = '❌ ';
                  } else {
                    buttonStyle = 'bg-[#1c2333] border-gray-600 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => !showResult && handleAnswer(idx)}
                    disabled={showResult}
                    className={`w-full text-left px-5 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${buttonStyle} ${
                      !showResult ? 'hover:scale-[1.02] active:scale-95 cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-[#0d111a] border border-gray-600 flex items-center justify-center text-xs font-mono text-gray-400 flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 text-sm sm:text-base">
                      {icon} {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className={`mt-5 p-4 rounded-xl border ${selectedAnswer === tributeQuestion.correct ? 'bg-green-900/20 border-green-500/50' : 'bg-red-900/20 border-red-500/50'} animate-fade-in`}>
                <p className={`text-sm font-medium ${selectedAnswer === tributeQuestion.correct ? 'text-green-300' : 'text-red-300'}`}>
                  {selectedAnswer === tributeQuestion.correct ? '✨ Beautifully answered!' : '💭 A thoughtful try!'}
                </p>
                <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                  {tributeQuestion.explanation}
                </p>
                {selectedAnswer === tributeQuestion.correct && (
                  <p className="text-amber-400 text-xs mt-2">⭐ Thank you for playing along in their honor.</p>
                )}
                <button
                  onClick={() => {
                    setSelectedAnswer(null);
                    setShowResult(false);
                  }}
                  className="mt-3 text-xs text-amber-400/70 hover:text-amber-300 underline underline-offset-2 transition-colors"
                >
                  Try again
                </button>
              </div>
            )}
          </div>

          {/* ========== NEW: START QUIZ BUTTONS (CCNA & SECURITY) ========== */}
          <div className="bg-gradient-to-br from-[#111722] to-[#0c101a] border border-blue-400/20 rounded-2xl p-6 sm:p-8 mb-10 shadow-2xl shadow-blue-500/5 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🚀</span>
              <h2 className="text-xl font-bold text-white text-left">Start Your Quiz Journey</h2>
            </div>
            <p className="text-gray-300 text-sm text-left mb-5 opacity-80">
              Continue the legacy of learning. Choose your path below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onStartCCNA}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-bold hover:from-amber-400 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-amber-900/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-lg"
              >
                <span>🌐</span> Start CCNA Quiz
              </button>
              <button
                onClick={onStartSecurity}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-xl font-bold hover:from-red-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-red-900/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-lg"
              >
                <span>🔒</span> Start Security Quiz
              </button>
            </div>
          </div>

          {/* Special Thanks */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-5">👥 Special Thanks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  role: 'Friend & Collaborator',
                  emoji: '🤝',
                  note: 'For support and encouragement throughout this project',
                },
                {
                  role: 'Friend & Reviewer',
                  emoji: '⭐',
                  note: 'For testing, feedback and making this platform better',
                },
              ].map((person, idx) => (
                <div
                  key={idx}
                  className="bg-[#111722] border border-gray-700 hover:border-amber-400/40 rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{person.emoji}</div>
                  <div className="text-amber-400 font-bold text-sm">{person.role}</div>
                  <div className="text-gray-300 text-sm mt-2 leading-6">{person.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Medium Highlight */}
          <div className="bg-[#10151e] border border-gray-700 hover:border-green-500/40 rounded-2xl p-6 sm:p-7 mb-7 shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 bg-green-500/15 border border-green-500/20 rounded-xl flex items-center justify-center text-xl">
                ✍️
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">Follow on Medium</div>
                <div className="text-gray-400 text-sm">Regular updates on Networking & Cybersecurity</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-7 mb-5 text-left">
              📢 Stay updated with the latest articles on CCNA concepts, cybersecurity tips, lab guides, and real-world networking scenarios.
            </p>
            <a
              href="https://medium.com/@bjxyz98"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl font-bold hover:from-green-400 hover:to-green-600 transition-all duration-300 shadow-lg shadow-green-900/20 hover:scale-105 active:scale-95"
            >
              ✍️ Read on Medium →
            </a>
          </div>

          {/* Quote */}
          <div className="mt-8">
            <p className="text-amber-300 text-base italic font-medium" style={{ fontFamily: 'Georgia, serif' }}>
              "Knowledge shared is knowledge multiplied."
            </p>
          </div>
        </div>
      </div>

      {/* Global Animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-25px) scale(1.2);
            opacity: 0.6;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MemoryPage;