import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const { isDark, toggleTheme } = useTheme();

  const [yearDropdown, setYearDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Ref to close dropdown when clicking outside
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setYearDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ccna-quiz', label: 'Network Quiz' },
    { id: 'ccna-lab', label: 'CCNA Lab' },
    { id: 'cyber-quiz', label: 'Cyber Quiz' },
    { id: 'cyber-threats', label: 'Cyber Threats' },
    { id: 'password', label: 'Password Safety' },
    { id: 'memory', label: '💜 Memory' },
  ];

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setYearDropdown(false);
    setMobileOpen(false);
  };

  const baseButtonClass = `w-full text-left px-4 py-3 text-sm transition-colors ${
    isDark
      ? 'text-slate-100 hover:bg-slate-800'
      : 'text-[#102a43] hover:bg-[#e7f3f1]'
  }`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#c7d8d6] bg-[#fffdf8] text-[#102a43] shadow-lg shadow-[#102a43]/10"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center">

          {/* =========================
              LOGO
          ========================== */}
          <button
            type="button"
            onClick={() => handleNavigation('home')}
            aria-label="Go to NetSec Academy home"
            className="group flex items-center gap-3 flex-shrink-0 rounded-xl p-1 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5e9a3]"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0f766e] text-white font-extrabold text-lg shadow-lg transition-transform group-hover:scale-105">
              NS
            </div>
            <span
                className="text-xl font-bold text-[#102a43]"
            >
              NetSec <span className="text-[#0f766e]">Academy</span>
            </span>
          </button>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="ml-auto hidden lg:flex items-center gap-1">

            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors hover:underline underline-offset-4 decoration-2 decoration-[#e4da45] ${
                  currentPage === item.id
                    ? 'text-white bg-[#0f766e]'
                    : 'text-[#102a43] hover:text-[#0f766e]'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* =========================
                YEARS DROPDOWN (Fixed width & clean styling)
            ========================== */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setYearDropdown(!yearDropdown)}
                className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 whitespace-nowrap transition-colors hover:underline underline-offset-4 decoration-2 decoration-[#e4da45] ${
                  ['year1', 'year2', 'year3', 'operating-systems', 'risk', 'cloud'].includes(currentPage)
                    ? 'text-white bg-[#0f766e]'
                    : 'text-[#102a43] hover:text-[#0f766e]'
                }`}
              >
                Years
                <svg
                  className={`w-4 h-4 ${yearDropdown ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {yearDropdown && (
                <div
                  className={`absolute right-0 top-full mt-2 w-64 rounded-xl border shadow-xl overflow-hidden ${
                    isDark
                      ? 'bg-slate-900 border-slate-700'
                      : 'bg-white border-[#0f766e]/30'
                  }`}
                >
                  {/* Years Section */}
                  <button
                    type="button"
                    onClick={() => handleNavigation('year1')}
                    className={`${baseButtonClass} ${currentPage === 'year1' ? 'text-[#0f766e] font-bold' : ''}`}
                  >
                    Year 1 (Coming soon)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('year2')}
                    className={`${baseButtonClass} ${currentPage === 'year2' ? 'text-[#0f766e] font-bold' : ''}`}
                  >
                    Year 2 (Coming soon)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('year3')}
                    className={`${baseButtonClass} ${currentPage === 'year3' ? 'text-[#0f766e] font-bold' : ''}`}
                  >
                    Year 3 (Coming soon)
                  </button>

                  {/* Divider */}
                  <div className={`h-px my-1 ${isDark ? 'bg-slate-700' : 'bg-[#0f766e]/15'}`} />

                  {/* Modules Section (Fixed links so they actually work) */}
                  <button
                    type="button"
                    onClick={() => handleNavigation('operating-systems')}
                    className={`${baseButtonClass} ${currentPage === 'operating-systems' ? 'text-[#0f766e] font-bold' : ''}`}
                  >
                    Operating System
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('risk')}
                    className={`${baseButtonClass} ${currentPage === 'risk' ? 'text-[#0f766e] font-bold' : ''}`}
                  >
                    Risk, Crisis & Security Management
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('cloud')}
                    className={`${baseButtonClass} ${currentPage === 'cloud' ? 'text-[#0f766e] font-bold' : ''}`}
                  >
                    Cloud Computing & the Internet of Things(IoT)
                  </button>

                </div>
              )}
            </div>

            {/* Divider */}
            <div className="w-px h-7 mx-2 bg-[#e4da45]/30" />

            {/* Medium */}
            <a
              href="https://medium.com/@bjxyz98"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                'text-[#0f766e] hover:text-[#e76f51]'
              }`}
            >
              Medium
            </a>

            {/* Portfolio */}
            <a
              href="https://bijaykumaryadav78.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                'text-[#0f766e] hover:text-[#e76f51]'
              }`}
            >
              Portfolio
            </a>

            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              title="Toggle theme"
              className={`ml-2 p-2 rounded-lg ${
                'bg-[#e76f51] text-white hover:bg-[#cf5b40]'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* =========================
              MOBILE BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto min-h-11 min-w-11 p-2 rounded-lg lg:hidden text-[#102a43]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#e4da45]/20 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium hover:underline underline-offset-4 decoration-2 decoration-[#f5e9a3] ${
                  currentPage === item.id
                    ? 'text-white bg-[#0f766e]'
                    : 'text-[#102a43] hover:bg-[#d9e7e5]'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Years & Modules */}
            <button type="button" onClick={() => handleNavigation('year1')} className="w-full text-left px-4 py-3 text-sm">Year 1 (Coming soon)</button>
            <button type="button" onClick={() => handleNavigation('year2')} className="w-full text-left px-4 py-3 text-sm">Year 2</button>
            <button type="button" onClick={() => handleNavigation('year3')} className="w-full text-left px-4 py-3 text-sm">Year 3 (Coming soon)</button>
            
            <button type="button" onClick={() => handleNavigation('operating-systems')} className="w-full text-left px-4 py-3 text-sm">Operating System</button>
            <button type="button" onClick={() => handleNavigation('risk')} className="w-full text-left px-4 py-3 text-sm">Risk, Crisis & Security Management</button>
            <button type="button" onClick={() => handleNavigation('cloud')} className="w-full text-left px-4 py-3 text-sm">Cloud Computing & the Internet of Things(IoT)</button>

            <div className="mt-2 border-t border-[#c7d8d6] pt-3 px-4 flex items-center gap-5">
              <a href="https://medium.com/@bjxyz98" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0f766e] hover:text-[#e76f51]">Medium</a>
              <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0f766e] hover:text-[#e76f51]">Port</a>
              <button type="button" onClick={toggleTheme} className="ml-auto">{isDark ? '☀️' : '🌙'}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;