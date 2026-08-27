import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const { isDark } = useTheme();

  const bg = isDark ? 'bg-[#102a43]' : 'bg-[#fffdf8]';
  const cardBg = isDark ? 'bg-[#173b5a] border-[#fffdf8]/15' : 'bg-white border-[#102a43]/10';
  const text = isDark ? 'text-[#fffdf8]' : 'text-[#102a43]';
  const subText = isDark ? 'text-[#fffdf8]/75' : 'text-[#102a43]/75';

  const features = [
    { id: 'ccna-quiz', icon: '🌐', label: 'Network Quiz', desc: 'OSI model, subnetting, routing protocols, VLANs, etc. Detailed explanations.', badge: '17 Modules', tags: ['Routing', 'Switching', 'IPv6', 'Security'], color: 'from-[#0f766e] to-[#115e59]' },
    { id: 'cyber-quiz', icon: '🛡️', label: 'Cyber Security Quiz', desc: 'Cybersecurity concepts, cryptography, threats, compliance frameworks, etc.', badge: '21 Modules', tags: ['Threats', 'Crypto', 'Compliance', 'IDS/IPS'], color: 'from-[#102a43] to-[#243b53]' },
    { id: 'ccna-lab', icon: '💻', label: 'CCNA Labs', desc: 'Step-by-step Cisco lab guides with real commands, topology diagrams, and verification steps.', badge: '14 Labs', tags: ['Router Config', 'VLAN', 'OSPF', 'ACL'], color: 'from-[#2a9d8f] to-[#0f766e]' },
    { id: 'cyber-threats', icon: '⚠️', label: 'Cyber Threats', desc: 'Scenario-based real-world threat simulations. Learn to identify and respond to phishing, ransomware, MITM attacks.', badge: '25 Scenarios', tags: ['Phishing', 'Ransomware', 'SQLi', 'DDoS'], color: 'from-[#e76f51] to-[#c9553c]' },
    { id: 'password', icon: '🔒', label: 'Password Strength Checker', desc: 'Real-time password strength analysis with entropy calculation and security recommendations.', badge: 'Interactive', tags: ['Entropy', 'Breach Check', 'Tips'], color: 'from-[#f4a261] to-[#e76f51]' },
    { id: 'certificate', icon: '🏆', label: 'Earn Certificate', desc: 'Complete quizzes and earn a personalized certificate based on your performance. Excellent, Good, or More to Learn.', badge: 'Achievement', tags: ['CCNA', 'Security', 'Achievement'], color: 'from-[#457b9d] to-[#102a43]' },
  ];

  const whyItems = [
    { icon: '🌐', title: 'More Connected Devices', desc: 'Every phone, laptop, smart TV, and IoT device is a potential target for hackers.', stat: '2000% increase' },
    { icon: '📈', title: 'Sophisticated Attacks', desc: 'Cybercriminals use advanced tools and AI to create more convincing attacks.', stat: '3.5M jobs unfilled' },
    { icon: '⚡', title: 'Valuable Data', desc: 'Personal data is worth money. Your info can be sold or used for identity theft.', stat: '$4.45M avg breach cost' },
  ];

  return (
    <div className={`min-h-screen ${bg}`}>
      {/* Hero */}
      <div className={`relative overflow-hidden pt-16 ${isDark ? 'bg-[#102a43]' : 'bg-[#d9e7e5]'}`}>
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${isDark ? 'bg-green-400/10' : 'bg-blue-400/10'}`}
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${isDark ? 'bg-green-400/10 text-green-400 border border-green-400/20' : 'bg-green-50 text-green-700 border border-green-200'}`}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            NETWORKING & CYBERSECURITY ACADEMY
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight ${text}`}>
            Learn to <span className="text-green-400">Defend</span>
            <br />& <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Network</span> Right
          </h1>

          <p className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${subText}`}>
            Interactive CCNA labs, cybersecurity quizzes, real-world threat scenarios, and certifications to build your skills from beginner to expert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('ccna-quiz')}
              className="px-8 py-4 bg-[#0f766e] text-white rounded-xl font-bold text-lg hover:bg-[#115e59] transition-all shadow-lg hover:shadow-[#0f766e]/25 transform hover:-translate-y-0.5"
            >
              🌐 Start Network Quiz
            </button>
            <button
              onClick={() => setCurrentPage('cyber-quiz')}
              className="px-8 py-4 bg-[#e76f51] text-white rounded-xl font-bold text-lg hover:bg-[#c9553c] transition-all shadow-lg hover:shadow-[#e76f51]/25 transform hover:-translate-y-0.5"
            >
              🛡️ Start Security Quiz
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              { n: '16+', l: 'Network Modules' },
              { n: '20+', l: 'Security Modules' },
              { n: '1000+', l: 'MCQ Questions' },
              { n: '12+', l: 'Lab Guides' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className={`text-3xl font-black text-green-400`}>{s.n}</div>
                <div className={`text-sm ${subText}`}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className={`text-sm font-semibold tracking-widest ${isDark ? 'text-green-400' : 'text-green-600'} mb-2`}>EVERYTHING YOU NEED</p>
          <h2 className={`text-3xl sm:text-4xl font-black ${text}`}>Learning Modules</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <button
              key={f.id}
              onClick={() => setCurrentPage(f.id)}
              className={`${cardBg} border rounded-2xl p-7 min-h-[296px] text-left hover:border-[#f5e9a3]/60 transition-all group hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl`}>
                  {f.icon}
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${isDark ? 'bg-[#142f26] text-[#f9cfb8]' : 'bg-[#653522] text-[#f5e9df]'}`}>{f.badge}</span>
              </div>
              <h3 className={`text-xl font-bold leading-tight mb-3 ${text} group-hover:text-[#f96800] transition-colors`}>{f.label}</h3>
              <p className={`text-sm leading-6 mb-5 ${subText}`}>{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map(t => (
                  <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-md ${isDark ? 'bg-[#142f26] text-[#f9cfb8]' : 'bg-[#653522] text-[#f5e9df]'}`}>{t}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* What is Networking? */}
      <div className={`py-16 ${isDark ? 'bg-[#102a43]' : 'bg-[#fffdf8]'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className={`text-sm font-semibold tracking-widest ${isDark ? 'text-blue-400' : 'text-blue-600'} mb-2`}>UNDERSTANDING THE BASICS</p>
            <h2 className={`text-3xl sm:text-4xl font-black ${text}`}>What is <span className="text-blue-400">Computer Networking?</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🔗', title: 'Connectivity', desc: 'Networking connects computers and devices so they can share information, resources, and services across different locations.' },
              { icon: '📊', title: 'Protocols', desc: 'Standardized rules and protocols like TCP/IP, HTTP, DNS ensure devices from different manufacturers can communicate reliably.' },
              { icon: '🏗️', title: 'Infrastructure', desc: 'Routers, switches, cables, and wireless access points form the physical and logical infrastructure of modern networks.' },
            ].map(item => (
              <div key={item.title} className={`${cardBg} border rounded-2xl p-6 hover:border-blue-400/50 transition-all`}>
                <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'} flex items-center justify-center text-2xl mb-4`}>{item.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${text}`}>{item.title}</h3>
                <p className={`text-sm ${subText}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What is Cybersecurity? */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className={`text-sm font-semibold tracking-widest ${isDark ? 'text-green-400' : 'text-green-600'} mb-2`}>UNDERSTANDING THE BASICS</p>
          <h2 className={`text-3xl sm:text-4xl font-black ${text}`}>What is <span className="text-green-400">Cybersecurity?</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🔐', title: 'Protection', desc: 'Safeguarding computers, networks, and data from unauthorized access, theft, or damage.' },
            { icon: '👁️', title: 'Privacy', desc: 'Keeping personal information safe from hackers, advertisers, and malicious actors online.' },
            { icon: '🛡️', title: 'Defense', desc: 'Building habits and using tools to prevent cyber attacks before they happen.' },
          ].map((item, idx) => (
            <div key={item.title} className={`${cardBg} border rounded-2xl p-6 transition-all ${idx === 1 ? 'border-green-400/50 shadow-lg shadow-green-400/10' : 'hover:border-green-400/30'}`}>
              <div className={`w-12 h-12 rounded-xl ${idx === 1 ? 'bg-green-500/20' : isDark ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center text-2xl mb-4`}>{item.icon}</div>
              <h3 className={`text-lg font-bold mb-2 ${text}`}>{item.title}</h3>
              <p className={`text-sm ${subText}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Threats Are Increasing */}
      <div className={`py-16 ${isDark ? 'bg-[#102a43]' : 'bg-[#fffdf8]'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-black ${text}`}>Why Threats Are <span className="text-red-400">Increasing</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {whyItems.map(item => (
                <div key={item.title} className={`${cardBg} border rounded-xl p-5 flex items-start gap-4`}>
                  <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-red-500/20' : 'bg-red-100'} flex items-center justify-center text-2xl shrink-0`}>{item.icon}</div>
                  <div>
                    <h3 className={`font-bold ${text}`}>{item.title}</h3>
                    <p className={`text-sm ${subText}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className={`w-64 h-64 rounded-full ${isDark ? 'bg-red-500/10' : 'bg-red-100'} flex items-center justify-center`}>
                  <div className={`w-48 h-48 rounded-full ${isDark ? 'bg-red-500/20' : 'bg-red-200'} flex items-center justify-center`}>
                    <div className={`w-32 h-32 rounded-full ${isDark ? 'bg-red-500/30' : 'bg-red-300'} flex items-center justify-center text-5xl`}>
                      ⚠️
                    </div>
                  </div>
                </div>
                <div className={`absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-sm font-bold ${isDark ? 'bg-red-500 text-white' : 'bg-red-500 text-white'}`}>
                  2000% increase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
  <div className={`${cardBg} border rounded-2xl p-10`}>
    <h2 className={`text-3xl font-black mb-4 ${text}`}>
      Ready to Start Learning?
    </h2>
    <p className={`${subText} mb-8`}>
      Join thousands of learners building their CCNA and cybersecurity skills.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      {/* CCNA Quiz */}
      <button
        onClick={() => setCurrentPage('Network-quiz')}
        className="px-8 py-3 bg-[#0f766e] text-white rounded-xl font-bold hover:bg-[#115e59] transition-colors shadow-lg shadow-[#0f766e]/20"
      >
        🌐 Network Quiz
      </button>

      {/* CCNA Labs */}
      <button
        onClick={() => setCurrentPage('ccna-lab')}
        className="px-8 py-3 bg-[#2a9d8f] text-white rounded-xl font-bold hover:bg-[#0f766e] transition-colors shadow-lg shadow-[#2a9d8f]/20"
      >
        💻 CCNA Labs
      </button>

      {/* Cyber Security Quiz — NEW BUTTON */}
      <button
        onClick={() => setCurrentPage('cyber-quiz')}
        className="px-8 py-3 bg-[#102a43] text-white rounded-xl font-bold hover:bg-[#243b53] transition-colors shadow-lg shadow-[#102a43]/20"
      >
        🔐 Cyber Security Quiz
      </button>

      {/* Cyber Threats */}
      <button
        onClick={() => setCurrentPage('cyber-threats')}
        className="px-8 py-3 bg-[#e76f51] text-white rounded-xl font-bold hover:bg-[#c9553c] transition-colors shadow-lg shadow-[#e76f51]/20"
      >
        ⚠️ Cyber Threats
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default HomePage;
// src/pages/HomePage.tsx
