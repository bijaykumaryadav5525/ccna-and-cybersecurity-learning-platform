import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { isDark } = useTheme();

  const footerBg = isDark
    ? 'bg-[#c7d8d6] border-t border-[#102a43]/20'
    : 'bg-[#c7d8d6] border-t border-[#102a43]/20';

  const textPrimary = 'text-[#102a43]';
  const textSecondary = 'text-[#102a43]/90';
  const textMuted = 'text-[#102a43]/80';
  const borderColor = 'border-[#102a43]/20';

  const cardBg = isDark
    ? 'bg-[#0f766e]/10 border border-[#102a43]/15'
    : 'bg-[#0f766e]/10 border border-[#102a43]/15';

  const cardHover = 'hover:bg-[#0f766e]/15 hover:border-[#0f766e]/40';

  const links = {
    Platform: [
      { label: 'CCNA Quiz', page: 'ccna-quiz' },
      { label: 'IT Security Quiz', page: 'cyber-quiz' },
      { label: 'CCNA Labs', page: 'ccna-lab' },
      { label: 'Cyber Threats', page: 'cyber-threats' },
    ],
    Tools: [
      { label: 'Password Checker', page: 'password' },
      { label: 'Certificates', page: 'certificate' },
      { label: 'Year 1 Modules (Coming soon)', page: 'year1' },
      { label: 'Year 2 Modules', page: 'year2' },
      { label: 'Year 3 Modules (Coming soon)', page: 'year3' },
    ],
    About: [
      { label: '💜 Memory', page: 'memory' },
      { label: 'Home', page: 'home' },
    ],
  };

  const socialLinks = [
    { name: 'Medium', icon: '✍️', url: 'https://medium.com/@bjxyz98', color: 'hover:text-[#078f40]' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/bijay-kumar-yadav-6a2b3b369/', color: 'hover:text-[#43f0e5]' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/bijaykumaryadav5525', color: 'hover:text-[#078f40]' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${footerBg} text-[#102a43]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-[#0f766e] rounded-xl flex items-center justify-center shadow-lg shadow-[#102a43]/15 group-hover:shadow-[#e76f51]/30 transition-shadow">
                <span className="text-white font-bold text-sm">NA</span>
              </div>
              <span className={`font-bold text-xl ${textPrimary}`}>
                NOEA <span className="text-[#0f766e]">Academy</span>
              </span>
            </button>
            <p className={`${textSecondary} text-sm leading-relaxed max-w-sm`}>
              A comprehensive platform for CCNA networking and cybersecurity education.
              Interactive quizzes, lab guides, and real‑world threat scenarios to build
              your skills.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl ${cardBg} ${textSecondary} ${social.color} transition-all text-sm font-medium hover:scale-105`}
                >
                  <span className="text-base">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className={`font-semibold text-sm uppercase tracking-wider ${textPrimary} mb-4`}>
              Platform
            </h4>
            <ul className="space-y-2.5">
              {links.Platform.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => setCurrentPage(item.page)}
                    className={`${textSecondary} hover:text-[#e76f51] transition-colors text-xs hover:translate-x-1 inline-block whitespace-nowrap`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools - now includes Year 3 Modules at the end */}
          <div>
            <h4 className={`font-semibold text-sm uppercase tracking-wider ${textPrimary} mb-4`}>
              Tools
            </h4>
            <ul className="space-y-2.5">
              {links.Tools.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => setCurrentPage(item.page)}
                    className={`${textSecondary} hover:text-[#e76f51] transition-colors text-xs hover:translate-x-1 inline-block whitespace-nowrap`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About - now only Memory and Home */}
          <div>
            <h4 className={`font-semibold text-sm uppercase tracking-wider ${textPrimary} mb-4`}>
              About
            </h4>
            <ul className="space-y-2.5 mb-6">
              {links.About.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => setCurrentPage(item.page)}
                    className={`${textSecondary} hover:text-[#e76f51] transition-colors text-xs hover:translate-x-1 inline-block whitespace-nowrap`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold ${cardBg} ${textSecondary} hover:text-[#e76f51] hover:border-[#e76f51]/50 transition-all whitespace-nowrap`}
            >
              ↑ Back to top
            </button>
          </div>
        </div>

        {/* Contributors (unchanged) */}
        <div className={`mt-12 pt-8 border-t ${borderColor}`}>
          <h4 className={`font-semibold text-sm uppercase tracking-wider ${textPrimary} mb-6`}>
            🤝 Contributors
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.linkedin.com/in/kwallaceccie/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start gap-4 p-4 rounded-2xl ${cardBg} transition-all duration-300 ${cardHover} shadow-sm`}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-green-400/30 group-hover:border-green-400/70 transition-colors">
                <img
                  src="/kevin-wallace.jpg"
                  alt="Kevin Wallace"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML =
                      '<span class="w-full h-full flex items-center justify-center text-white font-bold bg-slate-700">KW</span>';
                  }}
                />
              </div>
              <div className="flex-1">
                <div className={`font-semibold ${textPrimary} group-hover:text-blue-400 transition-colors`}>
                  Kevin Wallace
                </div>
                <div className={`text-xs ${textSecondary} mt-0.5`}>CCNA Lab & MCQ Contributor</div>
                <p className={`text-sm ${textMuted} mt-2 leading-relaxed`}>
                  Helped with CCNA lab concepts, networking guidance and CCNA MCQ content used within the platform.
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-madhuman-a17408257/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start gap-4 p-4 rounded-2xl ${cardBg} transition-all duration-300 ${cardHover} shadow-sm`}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 border-2 border-purple-400/30 group-hover:border-purple-400/70 transition-colors">
                <span className="text-white font-bold text-lg">RM</span>
              </div>
              <div className="flex-1">
                <div className={`font-semibold ${textPrimary} group-hover:text-blue-400 transition-colors`}>
                  Ritik Madhuman
                </div>
                <div className={`text-xs ${textSecondary} mt-0.5`}>MCQ Design & Cybersecurity</div>
                <p className={`text-sm ${textMuted} mt-2 leading-relaxed`}>
                  Helped improve MCQ design and question patterns for Year 1–3 modules, including cybersecurity MCQs.
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className={`mt-10 pt-6 border-t ${borderColor} flex flex-col sm:flex-row justify-between items-center gap-4`}>
          <p className={`text-sm ${textMuted}`}>
            © 2026 NOEA Academy. Built with 💚 for networking & security learners.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => setCurrentPage('memory')}
              className={`${textMuted} hover:text-amber-400 transition-colors flex items-center gap-1`}
            >
              💜 In Memory
            </button>
            <span className={textMuted}>·</span>
            <span className={`${textMuted} text-xs`}>v2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;