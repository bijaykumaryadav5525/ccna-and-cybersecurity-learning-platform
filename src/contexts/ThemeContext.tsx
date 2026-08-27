import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  if (!mounted) return null;

  const darkBg = 'bg-[#0d2f4d]';
  const darkText = 'text-[#f3e4c9]';
  const lightBg = 'bg-[#f3e4c9]';
  const lightText = 'text-[#0d2f4d]';

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`min-h-screen transition-all duration-500 ease-in-out ${
          isDark ? darkBg : lightBg
        } ${isDark ? darkText : lightText}`}
        style={{
          boxShadow: isDark ? 'inset 0 0 80px rgba(13, 47, 77, 0.35)' : 'none',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);