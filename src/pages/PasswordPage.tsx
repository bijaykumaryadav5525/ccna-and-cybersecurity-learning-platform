import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface PasswordPageProps {
  onBack: () => void;
}

const PasswordPage: React.FC<PasswordPageProps> = ({ onBack }) => {
  const { isDark } = useTheme();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const bg = isDark ? 'bg-gray-950' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const text = isDark ? 'text-gray-100' : 'text-gray-900';
  const subText = isDark ? 'text-gray-400' : 'text-gray-600';
  const inputBg = isDark ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900';

  const calculateEntropy = (pwd: string): number => {
    if (!pwd) return 0;
    const charsets = [
      /[a-z]/.test(pwd) ? 26 : 0,
      /[A-Z]/.test(pwd) ? 26 : 0,
      /[0-9]/.test(pwd) ? 10 : 0,
      /[^a-zA-Z0-9]/.test(pwd) ? 32 : 0,
    ];
    const poolSize = charsets.reduce((a, b) => a + b, 0);
    return poolSize ? Math.round(pwd.length * Math.log2(poolSize)) : 0;
  };

  const getStrength = (pwd: string) => {
    const checks = {
      length: pwd.length >= 12,
      longLength: pwd.length >= 16,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      numbers: /[0-9]/.test(pwd),
      symbols: /[^a-zA-Z0-9]/.test(pwd),
      noCommon: !['password', '123456', 'qwerty', 'abc123', 'admin', 'letmein'].some(c => pwd.toLowerCase().includes(c)),
      noRepeating: !/(.)\1{2,}/.test(pwd),
    };

    const score = Object.values(checks).filter(Boolean).length;
    const entropy = calculateEntropy(pwd);

    let level: string, color: string, percentage: number, description: string;

    if (!pwd) {
      level = 'Enter a password'; color = 'gray'; percentage = 0; description = '';
    } else if (score <= 2 || entropy < 28) {
      level = 'Very Weak'; color = 'red'; percentage = 20; description = 'Crackable in seconds. Change immediately.';
    } else if (score <= 4 || entropy < 40) {
      level = 'Weak'; color = 'orange'; percentage = 40; description = 'Vulnerable to dictionary attacks.';
    } else if (score <= 5 || entropy < 55) {
      level = 'Fair'; color = 'yellow'; percentage = 60; description = 'Moderate strength. Add more complexity.';
    } else if (score <= 6 || entropy < 70) {
      level = 'Strong'; color = 'green'; percentage = 80; description = 'Good password! Hard to crack.';
    } else {
      level = 'Very Strong'; color = 'emerald'; percentage = 100; description = 'Excellent! Resistant to all common attacks.';
    }

    return { level, color, percentage, description, checks, entropy, score };
  };

  const strength = getStrength(password);

  const colorMap: Record<string, string> = {
    gray: 'bg-gray-400',
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    emerald: 'bg-emerald-500',
  };

  const textColorMap: Record<string, string> = {
    gray: 'text-gray-400',
    red: 'text-red-400',
    orange: 'text-orange-400',
    yellow: 'text-yellow-400',
    green: 'text-green-400',
    emerald: 'text-emerald-400',
  };

  const tips = [
    { icon: '📏', title: 'Use 16+ characters', desc: 'Longer passwords are exponentially harder to crack.' },
    { icon: '🔤', title: 'Mix character types', desc: 'Combine uppercase, lowercase, numbers, and symbols.' },
    { icon: '🎲', title: 'Use passphrases', desc: 'Random words like "correct-horse-battery-staple" are both strong and memorable.' },
    { icon: '🚫', title: 'Avoid personal info', desc: 'Never use your name, birthday, or common words.' },
    { icon: '🔑', title: 'Use a password manager', desc: 'Tools like Bitwarden or 1Password generate and store unique passwords.' },
    { icon: '🔄', title: 'Never reuse passwords', desc: 'Each account should have a unique password.' },
  ];

  const commonPasswords = ['password', '123456', 'qwerty', 'abc123', 'monkey', '1234567', 'dragon', 'master', '666666', '111111'];

  return (
    <div className={`min-h-screen ${bg} pt-20 pb-16`}>
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={onBack} className={`flex items-center gap-2 mb-8 ${subText} hover:${text} transition-colors`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 text-yellow-400 ${isDark ? 'bg-yellow-400/10 border border-yellow-400/20' : 'bg-yellow-50 border border-yellow-200'}`}>
            🔒 INTERACTIVE PASSWORD ANALYZER
          </div>
          <h1 className={`text-4xl sm:text-5xl font-black mb-4 ${text}`}>Password Strength Checker</h1>
          <p className={`text-xl ${subText}`}>Analyze your password strength with entropy calculation and security recommendations</p>
        </div>

        {/* Main Checker */}
        <div className={`${cardBg} border rounded-2xl p-8 mb-8`}>
          {/* Input */}
          <div className="relative mb-6">
            <label className={`block text-sm font-semibold mb-2 ${text}`}>Enter Password to Analyze</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Type your password here..."
                className={`w-full ${inputBg} border rounded-xl px-4 py-3.5 pr-12 text-lg focus:outline-none focus:border-yellow-400 transition-colors font-mono`}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${subText} hover:${text} transition-colors p-1`}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Strength Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className={`font-bold text-lg ${textColorMap[strength.color]}`}>{strength.level}</span>
              {password && <span className={`text-sm ${subText}`}>Entropy: {strength.entropy} bits</span>}
            </div>
            <div className={`w-full h-3 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
              <div
                className={`h-full rounded-full transition-all duration-500 ${colorMap[strength.color]}`}
                style={{ width: `${strength.percentage}%` }}
              />
            </div>
            {password && <p className={`text-sm mt-2 ${textColorMap[strength.color]}`}>{strength.description}</p>}
          </div>

          {/* Checks */}
          {password && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { key: 'length', label: 'At least 12 characters' },
                { key: 'longLength', label: 'At least 16 characters' },
                { key: 'uppercase', label: 'Contains uppercase (A-Z)' },
                { key: 'lowercase', label: 'Contains lowercase (a-z)' },
                { key: 'numbers', label: 'Contains numbers (0-9)' },
                { key: 'symbols', label: 'Contains symbols (!@#$...)' },
                { key: 'noCommon', label: 'No common words' },
                { key: 'noRepeating', label: 'No repeating characters' },
              ].map(check => (
                <div key={check.key} className={`flex items-center gap-2 text-sm ${
                  (strength.checks as Record<string, boolean>)[check.key] ? 'text-green-400' : subText
                }`}>
                  <span>{(strength.checks as Record<string, boolean>)[check.key] ? '✅' : '○'}</span>
                  {check.label}
                </div>
              ))}
            </div>
          )}

          {/* Crack time estimate */}
          {password && (
            <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className={`text-sm font-semibold ${text} mb-1`}>⏱ Estimated Crack Time</div>
              <div className={`text-sm ${subText}`}>
                {strength.entropy < 28 ? 'Instantly' :
                 strength.entropy < 40 ? 'Minutes to hours' :
                 strength.entropy < 55 ? 'Days to weeks' :
                 strength.entropy < 70 ? 'Years' :
                 'Centuries (quantum-resistant)'}
              </div>
              <div className={`text-xs mt-1 ${subText}`}>Based on 10 billion guesses per second (modern GPU)</div>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className={`${cardBg} border rounded-2xl p-8 mb-8`}>
          <h2 className={`text-2xl font-black mb-6 ${text}`}>🔐 Password Best Practices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map(tip => (
              <div key={tip.title} className={`flex items-start gap-3 p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <span className="text-2xl shrink-0">{tip.icon}</span>
                <div>
                  <div className={`font-bold text-sm ${text}`}>{tip.title}</div>
                  <div className={`text-xs ${subText} mt-0.5`}>{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common passwords warning */}
        <div className={`${isDark ? 'bg-red-400/5 border-red-400/20' : 'bg-red-50 border-red-200'} border rounded-2xl p-6`}>
          <h3 className="text-red-400 font-bold mb-3">⛔ Never Use These (Top Common Passwords):</h3>
          <div className="flex flex-wrap gap-2">
            {commonPasswords.map(pwd => (
              <span key={pwd} className={`px-3 py-1.5 rounded-lg text-sm font-mono line-through ${isDark ? 'bg-red-400/10 text-red-300' : 'bg-red-100 text-red-600'}`}>
                {pwd}
              </span>
            ))}
          </div>
          <p className={`text-xs ${subText} mt-3`}>These are among the 10 most common passwords and are tested first in any attack.</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;
