import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cyberThreats as importedThreats, ThreatScenario, MCQ } from '../data/cyberThreats';

// ----- localStorage helpers -----
const getStored = (key: string, fallback: any) => {
  const val = localStorage.getItem(key);
  return val !== null ? JSON.parse(val) : fallback;
};
const setStored = (key: string, value: any) => {
  if (value === null || value === undefined) localStorage.removeItem(key);
  else localStorage.setItem(key, JSON.stringify(value));
};

// ----- Helpers for fallback MCQs (unchanged) -----
const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const shuffle = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

function generateFallbackMCQs(threat: ThreatScenario): MCQ[] {
  const { id, indicators, response, prevention, attackVector, realWorldExample } = threat;
  const mcqs: MCQ[] = [];
  if (indicators && indicators.length) {
    const correct = pickRandom(indicators);
    let pool = indicators.filter(i => i !== correct);
    while (pool.length < 3) pool.push('Network latency is normal', 'CPU usage is low', 'No suspicious processes found');
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-fb-mcq-1`,
      question: 'Which of the following is a common indicator of this attack?',
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `"${correct}" is a typical sign.`
    });
  }
  if (response && response.length) {
    const correct = pickRandom(response);
    let pool = response.filter(r => r !== correct);
    while (pool.length < 3) pool.push('Ignore it', 'Pay the attackers', 'Share on social media');
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-fb-mcq-2`,
      question: 'What is the recommended first response?',
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `Correct: "${correct}"`
    });
  }
  if (prevention && prevention.length) {
    const correct = pickRandom(prevention);
    let pool = prevention.filter(p => p !== correct);
    while (pool.length < 3) pool.push('Disable all patches', 'Reuse passwords', 'Share keys');
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-fb-mcq-3`,
      question: 'Which is an effective prevention measure?',
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `"${correct}" is a proven prevention.`
    });
  }
  if (attackVector) {
    const correct = attackVector;
    const pool = ['Social engineering', 'SQL injection', 'Physical theft', 'Insider threat', 'DNS poisoning'].filter(d => d !== correct);
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-fb-mcq-4`,
      question: 'What is the primary attack vector?',
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `Vector: ${correct}`
    });
  }
  if (realWorldExample) {
    const q = pickRandom(['What real‑world incident is mentioned?', 'Which major attack is referenced?', 'What known case illustrates this threat?']);
    const correct = realWorldExample.length > 60 ? realWorldExample.slice(0, 60) + '…' : realWorldExample;
    const pool = ['SolarWinds 2020', 'Equifax 2017', 'DNC hack 2016', 'Colonial Pipeline 2021'].filter(d => d !== realWorldExample);
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-fb-mcq-5`,
      question: q,
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `References: ${realWorldExample}`
    });
  }
  while (mcqs.length < 3) {
    mcqs.push({
      id: `${id}-fb-fallback-${mcqs.length}`,
      question: `What is the main risk of a ${threat.title}?`,
      options: ['Data loss', 'Financial loss', 'Reputation damage', 'All of the above'],
      correctAnswer: 3,
      explanation: 'All of these are potential impacts.'
    });
  }
  return mcqs.slice(0, 3);
}

// ----- Complete fallback threats (8 threats) -----
const fallbackThreats: ThreatScenario[] = [
  // ... (same as before, keep your full list)
];

interface CyberThreatsPageProps {
  onBack: () => void;
  setIsThreatDetail: (value: boolean) => void;
}

const CyberThreatsPage: React.FC<CyberThreatsPageProps> = ({ onBack, setIsThreatDetail }) => {
  const { isDark } = useTheme();
  const [threats, setThreats] = useState<ThreatScenario[]>([]);
  const [selectedThreat, setSelectedThreat] = useState<ThreatScenario | null>(null);
  const [showSimulation, setShowSimulation] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [ransomAction, setRansomAction] = useState<'open' | 'delete' | null>(null);
  // Quiz state
  const [currentMcqs, setCurrentMcqs] = useState<MCQ[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);

  // Load threats
  useEffect(() => {
    if (importedThreats && importedThreats.length > 0) {
      setThreats(importedThreats);
    } else {
      setThreats(fallbackThreats);
    }
  }, []);

  // Restore selected threat from localStorage
  useEffect(() => {
    if (threats.length === 0) return;
    const storedId = getStored('selectedThreatId', null);
    if (storedId) {
      const threat = threats.find(t => t.id === storedId);
      if (threat) {
        setSelectedThreat(threat);
        setShowSimulation(false);
        setSimStep(0);
      }
    }
  }, [threats]);

  // Notify parent when detail is open/closed
  useEffect(() => {
    setIsThreatDetail(!!selectedThreat);
  }, [selectedThreat, setIsThreatDetail]);

  // Save selected threat id to localStorage
  useEffect(() => {
    setStored('selectedThreatId', selectedThreat?.id || null);
  }, [selectedThreat]);

  // Generate MCQs once when threat changes and reset quiz
  useEffect(() => {
    if (selectedThreat) {
      const mcqs = (selectedThreat.mcqs && selectedThreat.mcqs.length > 0)
        ? selectedThreat.mcqs
        : generateFallbackMCQs(selectedThreat);
      setCurrentMcqs(mcqs);
      setQuizAnswers([]);
      setQuizFinished(false);
      setCurrentQuizIdx(0);
    } else {
      setCurrentMcqs([]);
    }
  }, [selectedThreat]);

  // ----- Theme styles -----
  const bg = isDark ? 'bg-gray-950' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const text = isDark ? 'text-gray-100' : 'text-gray-900';
  const subText = isDark ? 'text-gray-400' : 'text-gray-600';

  const severityColor = (s: string) => {
    if (s === 'Critical') return 'text-red-400 bg-red-400/10 border-red-400/30';
    if (s === 'High') return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
    if (s === 'Medium') return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    return 'text-green-400 bg-green-400/10 border-green-400/30';
  };

  const resetAll = () => {
    setShowSimulation(false);
    setSimStep(0);
    setRansomAction(null);
    setQuizAnswers([]);
    setQuizFinished(false);
    setCurrentQuizIdx(0);
    setStored('selectedThreatId', null);
  };

  // ============================================================
  // RANSOMWARE SIMULATION (5 steps)
  // ============================================================
  const renderRansomwareSimulation = () => {
    const totalSteps = 5;
    const progress = ((simStep + 1) / totalSteps) * 100;

    if (simStep === 0) {
      return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <p className={`text-sm ${subText}`}>STEP 1 OF 5</p>
          <div className={`p-6 rounded-2xl ${cardBg} border`}>
            <h2 className={`text-2xl font-bold mb-4 ${text}`}>Ransomware - Watch Your Files Get Encrypted!</h2>
            <div className="font-mono text-sm">
              <p className={`${subText} mb-2`}>C:\Users\You\Documents</p>
              <div className="space-y-1">
                <p className={text}>📁 Family Photos <span className={subText}>342 files - Accessible ✅</span></p>
                <p className={text}>📁 Work Documents <span className={subText}>89 files - Accessible ✅</span></p>
                <p className={text}>📁 School Projects <span className={subText}>24 files - Accessible ✅</span></p>
                <p className={text}>📁 Tax Records <span className={subText}>12 files - Accessible ✅</span></p>
              </div>
            </div>
            <div className={`mt-6 ${subText} text-sm`}>
              Your computer has important files - family photos, work documents, school projects. Everything is safe and accessible. But you just received a suspicious email attachment...
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => { setSimStep(0); setRansomAction(null); }} className="px-6 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 text-white font-medium transition-all">Reset</button>
            <button onClick={() => setSimStep(1)} className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-all">Next Step →</button>
          </div>
        </div>
      );
    }

    if (simStep === 1) {
      // ... email choice (same as before)
      const isActionTaken = ransomAction !== null;
      return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <p className={`text-sm ${subText}`}>STEP 2 OF 5</p>
          <div className={`p-6 rounded-2xl ${cardBg} border`}>
            <h2 className={`text-2xl font-bold mb-4 ${text}`}>Ransomware - Watch Your Files Get Encrypted!</h2>
            <div className="font-mono text-sm">
              <p className={`${subText} mb-2`}>📧 Email from: accounting@company-invoices.xyz</p>
              <p className={`${subText} mb-2`}>Subject: <span className="text-red-400">URGENT: Your invoice is overdue!</span></p>
              <p className={`${subText} mb-4`}>Attachment: <span className="font-bold text-yellow-400">Invoice_Final.pdf.exe</span></p>
              {!isActionTaken ? (
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button onClick={() => setRansomAction('open')} className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition-all">Open the attachment</button>
                  <button onClick={() => setRansomAction('delete')} className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-all">Delete - looks suspicious!</button>
                </div>
              ) : (
                <div className={`mt-4 p-4 rounded-xl ${ransomAction === 'delete' ? 'bg-green-400/10 border border-green-400/30' : 'bg-red-400/10 border border-red-400/30'}`}>
                  {ransomAction === 'delete' ? (
                    <>
                      <p className="text-green-400 font-bold">✅ Smart Choice!</p>
                      <p className={`${subText} text-sm mt-1`}>You spotted the red flags: unknown sender (.xyz domain), urgency pressure, and .exe disguised as PDF. Your files are safe!</p>
                      <p className={`${subText} text-sm mt-2`}>THREAT AVOIDED - You recognized the phishing attempt!</p>
                    </>
                  ) : (
                    <>
                      <p className="text-red-400 font-bold">⚠️ You opened the attachment!</p>
                      <p className={`${subText} text-sm mt-1`}>The file executes a malicious script that encrypts your files.</p>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className={`mt-4 ${subText} text-sm`}>You received an email: 'Invoice_Final.pdf.exe'. Do you open it? This is how most ransomware spreads - disguised as normal files in emails.</div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => { setSimStep(0); setRansomAction(null); }} className="px-6 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 text-white font-medium transition-all">Reset</button>
            <button onClick={() => { if (isActionTaken) setSimStep(2); }} disabled={!isActionTaken} className={`px-6 py-2 rounded-xl font-medium transition-all ${isActionTaken ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-700 text-gray-400 cursor-not-allowed'}`}>
              {isActionTaken ? 'Next Step →' : 'Complete action above'}
            </button>
          </div>
        </div>
      );
    }

    if (simStep === 2) {
      // ... ransom note (same)
      const isEncrypted = ransomAction === 'open';
      return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <p className={`text-sm ${subText}`}>STEP 3 OF 5</p>
          <div className={`p-6 rounded-2xl ${cardBg} border`}>
            <h2 className={`text-2xl font-bold mb-4 ${text}`}>YOUR FILES ARE ENCRYPTED</h2>
            <div className="text-center">
              <p className="text-4xl font-black text-red-500 mb-4">🔒</p>
              <p className={`text-lg font-bold text-red-400`}>YOUR FILES HAVE BEEN ENCRYPTED!</p>
              <p className={`${subText} text-sm mt-2`}>467 files encrypted with AES-256.</p>
              <p className={`${subText} text-sm mt-2`}>To decrypt your files, send <span className="text-yellow-400 font-bold">0.5 Bitcoin ($21,000)</span> to:<br /><span className="font-mono text-xs">bc1qxy2kgdygjrqztzq2n0yrf2493p83kkfjhx0wlh</span></p>
              <ul className={`mt-4 text-sm ${subText} text-left max-w-md mx-auto`}>
                <li>• You have <span className="text-red-400">72 hours</span> or the price doubles.</li>
                <li>• After 7 days, files are <span className="text-red-400">permanently deleted</span>.</li>
                <li className="mt-2 text-yellow-400">⚠️ Attempting to decrypt files yourself will destroy them.</li>
              </ul>
              {!isEncrypted && (
                <div className={`mt-4 p-4 rounded-xl ${isDark ? 'bg-yellow-400/5 border border-yellow-400/20' : 'bg-yellow-50 border border-yellow-200'}`}>
                  <p className={`text-sm ${subText}`}><span className="font-semibold">Note:</span> You chose not to open the attachment, so this is just a simulation. But this is what would have happened.</p>
                </div>
              )}
            </div>
            <div className={`mt-4 ${subText} text-sm`}>If you opened it, here's what you'd see - a ransom note demanding Bitcoin payment. Even if you pay, there's no guarantee you'll get your files back.</div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => { setSimStep(1); setRansomAction(null); }} className="px-6 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 text-white font-medium transition-all">Reset</button>
            <button onClick={() => setSimStep(3)} className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-all">Next Step →</button>
          </div>
        </div>
      );
    }

    if (simStep === 3) {
      // ... prevention (same)
      return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <p className={`text-sm ${subText}`}>STEP 4 OF 5</p>
          <div className={`p-6 rounded-2xl ${cardBg} border`}>
            <h2 className={`text-2xl font-bold mb-4 ${text}`}>Ransomware - Watch Your Files Get Encrypted!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-4 rounded-xl ${isDark ? 'bg-red-400/10 border border-red-400/30' : 'bg-red-50 border border-red-200'}`}>
                <p className={`font-bold text-red-400`}>❌ No Backups</p>
                <p className={`${subText} text-sm mt-2`}>Files encrypted, no way to recover without paying. Even payment doesn't guarantee recovery.</p>
                <ul className={`mt-3 text-sm ${subText} space-y-1`}>
                  <li>• 467 files → ALL LOCKED</li>
                  <li>• $21,000 in Bitcoin</li>
                  <li>• 72 hours or price doubles</li>
                  <li>• Pay and MAYBE get files back</li>
                </ul>
              </div>
              <div className={`p-4 rounded-xl ${isDark ? 'bg-green-400/10 border border-green-400/30' : 'bg-green-50 border border-green-200'}`}>
                <p className={`font-bold text-green-400`}>✅ With Backups</p>
                <p className={`${subText} text-sm mt-2`}>Files encrypted? No problem. Wipe the computer, restore from backup. Zero ransom paid.</p>
                <ul className={`mt-3 text-sm ${subText} space-y-1`}>
                  <li>• 467 files → ALL LOCKED</li>
                  <li>• Backup from yesterday? ✓</li>
                  <li>• Restore all files → done!</li>
                  <li>• Ransom paid: $0</li>
                </ul>
              </div>
            </div>
            <div className={`mt-6 p-4 rounded-xl ${isDark ? 'bg-blue-400/10 border border-blue-400/30' : 'bg-blue-50 border border-blue-200'}`}>
              <p className={`font-bold ${text}`}>🛡️ Protect Yourself</p>
              <ul className={`mt-2 text-sm ${subText} space-y-1`}>
                <li>• Back up files regularly (cloud + external drive)</li>
                <li>• Never open .exe attachments from unknown senders</li>
                <li>• Check sender email domains carefully</li>
                <li>• Keep antivirus updated</li>
                <li>• If infected: disconnect from internet immediately, don't pay the ransom</li>
              </ul>
            </div>
            <div className={`mt-4 ${subText} text-sm`}>The best defense: regular backups! If you have backups, you can simply restore your files and ignore the ransom. Plus: never open .exe attachments from unknown senders.</div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => { setSimStep(0); setRansomAction(null); }} className="px-6 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 text-white font-medium transition-all">Reset</button>
            <button onClick={() => setSimStep(4)} className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-all">Take Quiz →</button>
          </div>
        </div>
      );
    }

    // Step 5: MCQ (now uses currentMcqs state)
    if (simStep === 4) {
      const mcqs = currentMcqs;
      const totalQ = mcqs.length;
      const currentIdx = currentQuizIdx;
      const currentMcq = mcqs[currentIdx];
      const selected = quizAnswers[currentIdx] !== undefined ? quizAnswers[currentIdx] : -1;
      const isAnswered = selected !== -1;

      if (quizFinished) {
        let correct = 0;
        mcqs.forEach((mcq, idx) => {
          if (quizAnswers[idx] === mcq.correctAnswer) correct++;
        });
        return (
          <div className="w-full max-w-6xl mx-auto space-y-6">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `100%` }} />
            </div>
            <p className={`text-sm ${subText}`}>Quiz Complete</p>
            <div className={`p-6 rounded-2xl ${cardBg} border`}>
              <h3 className={`text-2xl font-bold mb-4 ${text}`}>🎉 Quiz Complete!</h3>
              <p className={`text-lg ${text}`}>You scored <span className="text-green-400 font-bold">{correct}</span> out of <span className="font-bold">{totalQ}</span>.</p>
              <div className="mt-4 space-y-2">
                {mcqs.map((mcq, idx) => {
                  const userAns = quizAnswers[idx];
                  const isCorrect = userAns === mcq.correctAnswer;
                  return (
                    <div key={idx} className={`p-3 rounded-lg ${isCorrect ? 'bg-green-400/10 border border-green-400/30' : 'bg-red-400/10 border border-red-400/30'}`}>
                      <p className={`text-sm ${text}`}>{mcq.question}</p>
                      <p className={`text-xs ${subText}`}>
                        Your answer: {mcq.options[userAns]} {isCorrect ? '✅' : `❌ Correct: ${mcq.options[mcq.correctAnswer]}`}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => { setSelectedThreat(null); resetAll(); }} className="px-6 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all">Close</button>
              </div>
            </div>
          </div>
        );
      }

      const handleOptionClick = (optionIdx: number) => {
        if (isAnswered) return;
        const newAnswers = [...quizAnswers];
        newAnswers[currentIdx] = optionIdx;
        setQuizAnswers(newAnswers);
      };

      const handleNext = () => {
        if (!isAnswered) return;
        if (currentIdx < totalQ - 1) {
          setCurrentQuizIdx(currentIdx + 1);
        } else {
          setQuizFinished(true);
        }
      };

      return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${((currentIdx + 1) / totalQ) * 100}%` }} />
          </div>
          <p className={`text-sm ${subText}`}>Question {currentIdx + 1} of {totalQ}</p>
          <div className={`p-6 rounded-2xl ${cardBg} border`}>
            <h3 className={`text-xl font-bold mb-4 ${text}`}>📝 {currentMcq.question}</h3>
            <div className="space-y-2">
              {currentMcq.options.map((opt, idx) => {
                let btnClass = 'w-full text-left px-4 py-2 rounded-xl border transition-all ';
                const isSelected = selected === idx;
                const isCorrect = currentMcq.correctAnswer === idx;
                if (!isAnswered) {
                  btnClass += isSelected ? 'border-blue-500 bg-blue-500/10 text-blue-400' : `${isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'} ${text}`;
                } else {
                  if (isCorrect) btnClass += 'border-green-500 bg-green-500/10 text-green-400';
                  else if (isSelected && !isCorrect) btnClass += 'border-red-500 bg-red-500/10 text-red-400';
                  else btnClass += `${isDark ? 'border-gray-700 opacity-60' : 'border-gray-200 opacity-60'} ${subText}`;
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isAnswered}
                    className={btnClass}
                  >
                    <span className="font-medium">{String.fromCharCode(65 + idx)}.</span> {opt}
                    {isAnswered && isCorrect && <span className="ml-2">✅</span>}
                    {isAnswered && isSelected && !isCorrect && <span className="ml-2">❌</span>}
                  </button>
                );
              })}
            </div>
            {isAnswered && (
              <div className={`mt-4 p-3 rounded-xl ${isDark ? 'bg-blue-400/5 border border-blue-400/20' : 'bg-blue-50 border border-blue-200'}`}>
                <p className={`text-sm ${subText}`}>
                  <span className="font-semibold text-blue-400">Explanation:</span> {currentMcq.explanation}
                </p>
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  isAnswered ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentIdx < totalQ - 1 ? 'Next Question →' : 'See Results'}
              </button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // ============================================================
  // GENERIC SIMULATION (for non‑ransomware) – similarly uses currentMcqs
  // ============================================================
  const renderGenericSimulation = () => {
    if (!selectedThreat) return null;
    const steps = [
      { title: 'The Scenario', content: selectedThreat.scenario, icon: '🎭' },
      { title: 'Indicators of Compromise', content: selectedThreat.indicators.map(i => `• ${i}`).join('\n'), icon: '🚩' },
      { title: 'Your Response', content: selectedThreat.response.map((r, idx) => `${idx + 1}. ${r}`).join('\n'), icon: '🚨' },
      { title: 'Prevention Measures', content: selectedThreat.prevention.map(p => `✅ ${p}`).join('\n'), icon: '🛡️' },
    ];
    const hasQuiz = currentMcqs.length > 0;
    const totalSteps = steps.length + (hasQuiz ? 1 : 0);
    const currentStepIndex = simStep;

    if (hasQuiz && currentStepIndex === steps.length) {
      const mcqs = currentMcqs;
      const totalQ = mcqs.length;
      const currentIdx = currentQuizIdx;
      const currentMcq = mcqs[currentIdx];
      const selected = quizAnswers[currentIdx] !== undefined ? quizAnswers[currentIdx] : -1;
      const isAnswered = selected !== -1;

      if (quizFinished) {
        let correct = 0;
        mcqs.forEach((mcq, idx) => {
          if (quizAnswers[idx] === mcq.correctAnswer) correct++;
        });
        return (
          <div className="w-full max-w-6xl mx-auto space-y-6">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `100%` }} />
            </div>
            <p className={`text-sm ${subText}`}>Quiz Complete</p>
            <div className={`p-6 rounded-2xl ${cardBg} border`}>
              <h3 className={`text-2xl font-bold mb-4 ${text}`}>🎉 Quiz Complete!</h3>
              <p className={`text-lg ${text}`}>You scored <span className="text-green-400 font-bold">{correct}</span> out of <span className="font-bold">{totalQ}</span>.</p>
              <div className="mt-4 space-y-2">
                {mcqs.map((mcq, idx) => {
                  const userAns = quizAnswers[idx];
                  const isCorrect = userAns === mcq.correctAnswer;
                  return (
                    <div key={idx} className={`p-3 rounded-lg ${isCorrect ? 'bg-green-400/10 border border-green-400/30' : 'bg-red-400/10 border border-red-400/30'}`}>
                      <p className={`text-sm ${text}`}>{mcq.question}</p>
                      <p className={`text-xs ${subText}`}>
                        Your answer: {mcq.options[userAns]} {isCorrect ? '✅' : `❌ Correct: ${mcq.options[mcq.correctAnswer]}`}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => { setSelectedThreat(null); resetAll(); }} className="px-6 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all">Close</button>
              </div>
            </div>
          </div>
        );
      }

      const handleOptionClick = (optionIdx: number) => {
        if (isAnswered) return;
        const newAnswers = [...quizAnswers];
        newAnswers[currentIdx] = optionIdx;
        setQuizAnswers(newAnswers);
      };

      const handleNext = () => {
        if (!isAnswered) return;
        if (currentIdx < totalQ - 1) {
          setCurrentQuizIdx(currentIdx + 1);
        } else {
          setQuizFinished(true);
        }
      };

      return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${((currentIdx + 1) / totalQ) * 100}%` }} />
          </div>
          <p className={`text-sm ${subText}`}>Question {currentIdx + 1} of {totalQ}</p>
          <div className={`p-6 rounded-2xl ${cardBg} border`}>
            <h3 className={`text-xl font-bold mb-4 ${text}`}>📝 {currentMcq.question}</h3>
            <div className="space-y-2">
              {currentMcq.options.map((opt, idx) => {
                let btnClass = 'w-full text-left px-4 py-2 rounded-xl border transition-all ';
                const isSelected = selected === idx;
                const isCorrect = currentMcq.correctAnswer === idx;
                if (!isAnswered) {
                  btnClass += isSelected ? 'border-blue-500 bg-blue-500/10 text-blue-400' : `${isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'} ${text}`;
                } else {
                  if (isCorrect) btnClass += 'border-green-500 bg-green-500/10 text-green-400';
                  else if (isSelected && !isCorrect) btnClass += 'border-red-500 bg-red-500/10 text-red-400';
                  else btnClass += `${isDark ? 'border-gray-700 opacity-60' : 'border-gray-200 opacity-60'} ${subText}`;
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isAnswered}
                    className={btnClass}
                  >
                    <span className="font-medium">{String.fromCharCode(65 + idx)}.</span> {opt}
                    {isAnswered && isCorrect && <span className="ml-2">✅</span>}
                    {isAnswered && isSelected && !isCorrect && <span className="ml-2">❌</span>}
                  </button>
                );
              })}
            </div>
            {isAnswered && (
              <div className={`mt-4 p-3 rounded-xl ${isDark ? 'bg-blue-400/5 border border-blue-400/20' : 'bg-blue-50 border border-blue-200'}`}>
                <p className={`text-sm ${subText}`}>
                  <span className="font-semibold text-blue-400">Explanation:</span> {currentMcq.explanation}
                </p>
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  isAnswered ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentIdx < totalQ - 1 ? 'Next Question →' : 'See Results'}
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Regular steps
    const current = steps[currentStepIndex];
    const progress = ((currentStepIndex + 1) / totalSteps) * 100;
    return (
      <div className="w-full max-w-6xl mx-auto space-y-6">
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className={`text-sm ${subText}`}>Step {currentStepIndex + 1} of {totalSteps}</p>
        <div className={`p-6 rounded-2xl ${cardBg} border`}>
          <h3 className={`text-2xl font-bold mb-4 ${text}`}><span className="mr-2">{current.icon}</span> {current.title}</h3>
          <div className={`${subText} whitespace-pre-line leading-relaxed text-base`}>{current.content}</div>
        </div>
        <div className="flex justify-between gap-4">
          <button onClick={() => setSimStep(Math.max(0, currentStepIndex - 1))} disabled={currentStepIndex === 0} className={`px-6 py-2 rounded-xl font-medium transition-all ${currentStepIndex > 0 ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}>← Reset</button>
          <button onClick={() => { if (currentStepIndex < totalSteps - 1) setSimStep(currentStepIndex + 1); }} className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-all">
            {currentStepIndex < totalSteps - 1 ? 'Next Step →' : 'Take Quiz →'}
          </button>
        </div>
      </div>
    );
  };

  const renderSimulation = () => {
    if (!selectedThreat) return null;
    if (selectedThreat.id === 'ransomware') return renderRansomwareSimulation();
    return renderGenericSimulation();
  };

  // ============================================================
  // DETAIL MODAL (small card)
  // ============================================================
  const renderDetail = () => {
    if (!selectedThreat) return null;
    const threat = selectedThreat;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className={`${cardBg} border rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto relative`}>
          <div className={`bg-gradient-to-br ${threat.color} p-5 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/20 border border-white/30">{threat.severity}</span>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{threat.category}</span>
                </div>
                <h1 className="text-2xl font-black">{threat.title}</h1>
              </div>
              <span className="text-4xl">{threat.icon}</span>
            </div>
          </div>
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h2 className={`text-lg font-bold mb-2 ${text}`}>1. How It Works</h2>
            <p className={`${subText} text-sm leading-relaxed`}>{threat.scenario}</p>
          </div>
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h2 className={`text-lg font-bold mb-2 ${text}`}>2. How To Protect Yourself</h2>
            <ul className="space-y-1.5">
              {threat.prevention.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-2 text-sm ${subText}`}>
                  <span className="text-green-400 shrink-0 mt-0.5">✅</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5">
            <button
              onClick={() => {
                setShowSimulation(true);
                setSimStep(0);
                setRansomAction(null);
                setQuizAnswers([]);
                setQuizFinished(false);
                setCurrentQuizIdx(0);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-base hover:opacity-90 transition-all shadow-md"
            >
              🚀 Launch Interactive Simulation
            </button>
          </div>
          <button
            onClick={() => { setSelectedThreat(null); resetAll(); }}
            className="absolute top-3 right-3 text-white bg-black/30 rounded-full p-1 hover:bg-black/50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  // ============================================================
  // LIST VIEW
  // ============================================================
  const renderList = () => {
    if (threats.length === 0) {
      return <div className="text-center py-20"><p className={subText}>Loading threats...</p></div>;
    }
    return (
      <>
        <button onClick={onBack} className={`flex items-center gap-2 mb-8 ${subText} hover:${text} transition-colors`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 text-red-400 ${isDark ? 'bg-red-400/10 border border-red-400/20' : 'bg-red-50 border border-red-200'}`}>
            ⚠️ SCENARIO-BASED THREAT SIMULATIONS
          </div>
          <h1 className={`text-5xl font-black mb-4 ${text}`}>Cyber Threats</h1>
          <p className={`text-xl ${subText}`}>Click on any threat to learn how it works, then launch an interactive simulation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {threats.map((threat) => (
            <button
              key={threat.id}
              onClick={() => { setSelectedThreat(threat); resetAll(); }}
              className={`${cardBg} border rounded-2xl p-6 text-left hover:border-red-400/50 transition-all group hover:transform hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${threat.color} flex items-center justify-center text-2xl`}>{threat.icon}</div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${severityColor(threat.severity)}`}>{threat.severity}</span>
              </div>
              <div className={`text-xs font-semibold tracking-wider mb-1 ${subText}`}>{threat.category}</div>
              <h3 className={`text-xl font-bold mb-2 ${text} group-hover:text-red-400 transition-colors`}>{threat.title}</h3>
              <p className={`text-sm ${subText} line-clamp-2 mb-4`}>{threat.scenario.substring(0, 120)}...</p>
              <div className={`text-sm font-semibold text-red-400 flex items-center gap-2`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Click for interactive simulation
              </div>
            </button>
          ))}
        </div>
        <div className={`mt-12 ${isDark ? 'bg-red-400/5 border-red-400/20' : 'bg-red-50 border-red-200'} border rounded-2xl p-6 text-center`}>
          <p className={`text-sm ${subText}`}>⚠️ All scenarios are for <strong>educational purposes only</strong>. Understanding how attacks work helps you defend against them.</p>
        </div>
      </>
    );
  };

  // ============================================================
  // MAIN RENDER
  // ============================================================
  return (
    <div className={`min-h-screen ${bg} pt-20 pb-16`}>
      <div className="max-w-4xl mx-auto px-4">
        {selectedThreat ? (showSimulation ? renderSimulation() : renderDetail()) : renderList()}
      </div>
    </div>
  );
};

export default CyberThreatsPage;