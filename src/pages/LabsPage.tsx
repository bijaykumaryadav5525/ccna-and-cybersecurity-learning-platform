import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ccnaLabs, Lab } from '../data/labs';

interface LabsPageProps {
  onBack: () => void;
}

const LabsPage: React.FC<LabsPageProps> = ({ onBack }) => {
  const { isDark } = useTheme();
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  const bg = isDark ? 'bg-gray-950' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const text = isDark ? 'text-gray-100' : 'text-gray-900';
  const subText = isDark ? 'text-gray-400' : 'text-gray-600';
  const codeBg = isDark ? 'bg-gray-950 border-gray-700' : 'bg-gray-900 border-gray-700';

  const difficultyColor = (d: string) => {
    if (d === 'Beginner') return 'text-green-400 bg-green-400/10 border-green-400/30';
    if (d === 'Intermediate') return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    return 'text-red-400 bg-red-400/10 border-red-400/30';
  };

  if (selectedLab) {
    return (
      <div className={`min-h-screen ${bg} pt-20 pb-16`}>
        <div className="max-w-4xl mx-auto px-4">
          <button onClick={() => setSelectedLab(null)} className={`flex items-center gap-2 mb-6 ${subText} hover:${text} transition-colors`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Labs
          </button>

          {/* Lab Header */}
          <div className={`${cardBg} border rounded-2xl p-8 mb-6`}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${difficultyColor(selectedLab.difficulty)}`}>
                    {selectedLab.difficulty}
                  </span>
                  <span className={`text-xs ${subText}`}>⏱ {selectedLab.duration}</span>
                </div>
                <h1 className={`text-3xl font-black ${text}`}>{selectedLab.title}</h1>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl">
                💻
              </div>
            </div>
            <p className={subText}>{selectedLab.description}</p>

            {/* Topology */}
            <div className={`mt-4 p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} font-mono text-sm ${isDark ? 'text-green-400' : 'text-green-700'}`}>
              <div className={`text-xs font-sans font-semibold mb-1 ${subText}`}>NETWORK TOPOLOGY</div>
              {selectedLab.topology}
            </div>
          </div>

          {/* Objectives */}
          <div className={`${cardBg} border rounded-2xl p-6 mb-6`}>
            <h2 className={`text-lg font-bold mb-4 ${text}`}>🎯 Lab Objectives</h2>
            <ul className="space-y-2">
              {selectedLab.objectives.map((obj, idx) => (
                <li key={idx} className={`flex items-center gap-3 text-sm ${subText}`}>
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className={`${cardBg} border rounded-2xl p-6 mb-6`}>
            <h2 className={`text-lg font-bold mb-6 ${text}`}>📋 Configuration Steps</h2>
            <div className="space-y-6">
              {selectedLab.steps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold mb-1 ${text}`}>{step.title}</h3>
                      <p className={`text-sm mb-3 ${subText}`}>{step.description}</p>
                      {step.command && (
                        <div className={`${codeBg} border rounded-xl p-4 font-mono text-sm`}>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-500 text-xs ml-2">Cisco IOS</span>
                          </div>
                          {step.command.split('\n').map((cmd, i) => (
                            <div key={i} className="text-green-400">
                              <span className="text-gray-500">Router(config)# </span>
                              {cmd}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification */}
          <div className={`${cardBg} border rounded-2xl p-6 mb-6`}>
            <h2 className={`text-lg font-bold mb-4 ${text}`}>✅ Verification Commands</h2>
            <div className="space-y-3">
              {selectedLab.verification.map((cmd, idx) => {
                const [command, ...desc] = cmd.split(' - ');
                return (
                  <div key={idx} className={`${codeBg} border rounded-xl p-3`}>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 font-mono text-sm shrink-0">$</span>
                      <div>
                        <div className="text-green-400 font-mono text-sm">{command}</div>
                        {desc.length > 0 && <div className={`text-xs ${subText} mt-1`}>{desc.join(' - ')}</div>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {selectedLab.tags.map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-medium ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bg} pt-20 pb-16`}>
      <div className="max-w-6xl mx-auto px-4">
        <button onClick={onBack} className={`flex items-center gap-2 mb-8 ${subText} hover:${text} transition-colors`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 text-green-400 ${isDark ? 'bg-green-400/10 border border-green-400/20' : 'bg-green-50 border border-green-200'}`}>
            💻 CISCO HANDS-ON LAB GUIDES
          </div>
          <h1 className={`text-5xl font-black mb-4 ${text}`}>CCNA Labs</h1>
          <p className={`text-xl ${subText}`}>Step-by-step lab guides with real Cisco IOS commands, topology diagrams, and verification steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ccnaLabs.map((lab, idx) => (
            <button
              key={lab.id}
              onClick={() => setSelectedLab(lab)}
              className={`${cardBg} border rounded-2xl p-6 text-left hover:border-green-400/50 transition-all group hover:transform hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-2xl">
                  💻
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${difficultyColor(lab.difficulty)}`}>
                    {lab.difficulty}
                  </span>
                  <span className={`text-xs ${subText}`}>⏱ {lab.duration}</span>
                </div>
              </div>
              <div className={`text-xs font-semibold tracking-wider mb-1 ${subText}`}>LAB {String(idx + 1).padStart(2, '0')}</div>
              <h3 className={`text-lg font-bold mb-2 ${text} group-hover:text-green-400 transition-colors`}>{lab.title}</h3>
              <p className={`text-sm ${subText} mb-4 line-clamp-2`}>{lab.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {lab.tags.slice(0, 3).map(tag => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-green-400 font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                View Lab Guide
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabsPage;
