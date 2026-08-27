import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// ============================================================
// Helper: render DOM element to canvas (with solid colors only)
// ============================================================
const renderElementToCanvas = async (
  element: HTMLElement,
  scale = 1,
): Promise<HTMLCanvasElement> => {
  const canvas = await html2canvas(element, {
    scale: scale,
    useCORS: true,
    allowTaint: true,
    logging: false,
    backgroundColor: null,
  });
  return canvas;
};

// ============================================================
// Component props
// ============================================================
interface CertificatePageProps {
  score?: number;
  total?: number;
  moduleName?: string;
  quizCompleted?: boolean;
  onBack: () => void;
}

const CertificatePage: React.FC<CertificatePageProps> = ({
  score = 0,
  total = 0,
  moduleName = 'CCNA & Cybersecurity',
  quizCompleted = false,
  onBack,
}) => {
  const { isDark } = useTheme();

  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [showCert, setShowCert] = useState(false);
  const [nameError, setNameError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [internalQuizCompleted, setInternalQuizCompleted] = useState(false);

  const certRef = useRef<HTMLDivElement>(null);

  // ------------------------------------------------------------
  // Auto-detect quiz completion
  // ------------------------------------------------------------
  useEffect(() => {
    if (quizCompleted === true) {
      setInternalQuizCompleted(true);
      return;
    }

    if (typeof score === 'number' && typeof total === 'number' && total > 0) {
      setInternalQuizCompleted(true);
      console.log('✅ Auto-detected quiz completion from score/total');
    } else {
      setInternalQuizCompleted(false);
    }
  }, [score, total, quizCompleted]);

  // ------------------------------------------------------------
  // Debug
  // ------------------------------------------------------------
  useEffect(() => {
    console.log('🔍 CertificatePage Props:', {
      score,
      total,
      moduleName,
      quizCompleted,
      internalQuizCompleted,
      scoreType: typeof score,
      totalType: typeof total,
      hasValidScore: typeof score === 'number' && typeof total === 'number' && total > 0,
    });
  }, [score, total, moduleName, quizCompleted, internalQuizCompleted]);

  // ------------------------------------------------------------
  // Validation helpers
  // ------------------------------------------------------------
  const hasValidScore =
    typeof score === 'number' &&
    typeof total === 'number' &&
    total > 0;

  const hasCompletedQuiz = internalQuizCompleted && hasValidScore;

  const percentage = hasValidScore && total > 0
    ? Math.round((score / total) * 100)
    : 0;

  // ------------------------------------------------------------
  // Theme (for outer page – not captured)
  // ------------------------------------------------------------
  const bg = isDark ? 'bg-gray-950' : 'bg-gray-50';
  const cardBg = isDark
    ? 'bg-gray-900 border-gray-800'
    : 'bg-white border-gray-200';
  const text = isDark
    ? 'text-gray-100'
    : 'text-gray-900';
  const subText = isDark
    ? 'text-gray-400'
    : 'text-gray-600';
  const inputBg = isDark
    ? 'bg-gray-800 border-gray-700 text-gray-100'
    : 'bg-white border-gray-300 text-gray-900';

  // ------------------------------------------------------------
  // Rating (returns hex colors)
  // ------------------------------------------------------------
  const getRating = () => {
    if (percentage === 0 || !hasValidScore) {
      return {
        label: 'Participant',
        color: '#6366f1',
        emoji: '🎓',
        desc: 'Certificate of Completion',
      };
    }

    if (percentage >= 90) {
      return {
        label: 'Excellent',
        color: '#fbbf24',
        emoji: '🏆',
        desc: 'Certificate of Excellence',
      };
    }

    if (percentage >= 70) {
      return {
        label: 'Good',
        color: '#4ade80',
        emoji: '🥈',
        desc: 'Certificate of Achievement',
      };
    }

    return {
      label: 'More to Learn',
      color: '#60a5fa',
      emoji: '📚',
      desc: 'Certificate of Participation',
    };
  };

  const rating = getRating();

  // ------------------------------------------------------------
  // Date + credential ID
  // ------------------------------------------------------------
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const credentialId = `NetSec-${Date.now()
    .toString(36)
    .toUpperCase()
    .slice(-8)}`;

  // ------------------------------------------------------------
  // Name validation
  // ------------------------------------------------------------
  const validateName = (value: string) => {
    const alphabeticRegex = /^[A-Za-z\s\.\-']*$/;

    if (!value) {
      setNameError('');
      return true;
    }

    if (!alphabeticRegex.test(value)) {
      setNameError('❌ Please enter only letters (A-Z, a-z), spaces, dots, hyphens, and apostrophes');
      return false;
    }

    setNameError('');
    return true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  // ------------------------------------------------------------
  // Submit name
  // ------------------------------------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasCompletedQuiz) {
      alert('⚠️ Please complete the quiz first before generating a certificate.');
      return;
    }

    const cleanName = name.trim();

    if (!cleanName) {
      alert('⚠️ Please enter your name.');
      return;
    }

    const alphabeticRegex = /^[A-Za-z\s\.\-']*$/;
    if (!alphabeticRegex.test(cleanName)) {
      alert('⚠️ Please enter a valid name using only letters (A-Z, a-z), spaces, dots, hyphens, and apostrophes.');
      return;
    }

    console.log('✅ Generating certificate for:', cleanName);
    setSubmittedName(cleanName);
    setShowCert(true);
  };

  // ------------------------------------------------------------
  // DOWNLOAD CERTIFICATE
  // ------------------------------------------------------------
  const downloadCertificate = async (format: 'png' | 'pdf' = 'png') => {
    const cert = certRef.current;

    if (!cert) {
      alert('Certificate not found. Please try again.');
      return;
    }

    setIsDownloading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await renderElementToCanvas(cert, 2);

      console.log('✅ Canvas captured:', canvas.width, 'x', canvas.height);

      if (format === 'png') {
        const link = document.createElement('a');
        link.download = `NetSec_Certificate_${submittedName.replace(/\s/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width, canvas.height],
          hotfixes: ['px_scaling'],
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save(`NetSec_Certificate_${submittedName.replace(/\s/g, '_')}.pdf`);
      }
    } catch (error) {
      console.error('❌ Download error:', error);
      alert(`❌ Failed to download certificate.\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}\n\nPlease check the console (F12) for full details.`);
    } finally {
      setIsDownloading(false);
    }
  };

  // ------------------------------------------------------------
  // Print (fallback)
  // ------------------------------------------------------------
  const handlePrint = () => {
    const cert = certRef.current;

    if (!cert) {
      alert('Certificate not found. Please try again.');
      return;
    }

    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert('Please allow pop-ups to print the certificate.');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>NetSec Academy Certificate - ${submittedName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            * { box-sizing: border-box; }
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              min-height: 100%;
            }
            body {
              font-family: Georgia, serif;
              background: white;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              padding: 20px;
            }
            .certificate-wrapper {
              width: 100%;
              max-width: 1100px;
            }
            @media print {
              @page {
                size: landscape;
                margin: 0;
              }
              body { padding: 0; background: white; }
              .certificate-wrapper { max-width: none; width: 100vw; }
            }
          </style>
        </head>
        <body>
          <div class="certificate-wrapper">${cert.outerHTML}</div>
          <script>
            window.onload = function () {
              setTimeout(function () { window.print(); }, 500);
            };
          <\/script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  // ============================================================
  // RENDER: Locked state (quiz not completed)
  // ============================================================
  if (!hasCompletedQuiz) {
    return (
      <div
        className={`min-h-screen ${bg} pt-20 pb-16 flex items-center justify-center`}
      >
        <div className="max-w-lg w-full mx-auto px-4">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 mb-8 ${subText} hover:opacity-80 transition-opacity`}
          >
            <svg
              className="w-5 h-5"
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
            Back to Home
          </button>

          <div
            className={`${cardBg} border rounded-2xl p-8 text-center shadow-xl`}
          >
            <div
              className={`mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center ${
                isDark ? 'bg-red-500/10' : 'bg-red-50'
              }`}
            >
              <span className="text-4xl">🔒</span>
            </div>

            <h1 className={`text-3xl font-black mb-3 ${text}`}>
              Certificate Locked
            </h1>

            <p className={`${subText} leading-relaxed mb-6`}>
              You cannot generate a certificate yet.
              <br />
              Please complete the MCQ quiz first.
            </p>

            <div className="mb-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-sm text-left">
              <p className="font-bold text-yellow-800 dark:text-yellow-400">🔧 Debug Info:</p>
              <p className="text-yellow-700 dark:text-yellow-300">quizCompleted from props: {String(quizCompleted)}</p>
              <p className="text-yellow-700 dark:text-yellow-300">internalQuizCompleted: {String(internalQuizCompleted)}</p>
              <p className="text-yellow-700 dark:text-yellow-300">score: {score}</p>
              <p className="text-yellow-700 dark:text-yellow-300">total: {total}</p>
              <p className="text-yellow-700 dark:text-yellow-300">hasValidScore: {String(hasValidScore)}</p>
              <p className="text-yellow-700 dark:text-yellow-300">hasCompletedQuiz: {String(hasCompletedQuiz)}</p>
              <p className="text-yellow-700 dark:text-yellow-300 text-xs mt-1">
                💡 Tip: If you see score and total but quizCompleted is false,
                the certificate will still work!
              </p>
            </div>

            <div
              className={`rounded-xl p-4 mb-6 text-left ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className={`font-bold mb-3 ${text}`}>
                📋 Certificate Requirements
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className={internalQuizCompleted || quizCompleted ? 'text-green-400' : 'text-red-400'}>
                    {internalQuizCompleted || quizCompleted ? '✅' : '❌'}
                  </span>
                  <span className={internalQuizCompleted || quizCompleted ? 'text-green-400' : subText}>
                    Complete the MCQ quiz {(internalQuizCompleted || quizCompleted) ? '(Done!)' : ''}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={hasValidScore ? 'text-green-400' : 'text-red-400'}>
                    {hasValidScore ? '✅' : '❌'}
                  </span>
                  <span className={hasValidScore ? 'text-green-400' : subText}>
                    Receive your final score {hasValidScore ? `(${score}/${total})` : ''}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-500">○</span>
                  <span className={subText}>Enter your name</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">○</span>
                  <span className={subText}>Generate certificate</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="w-full py-4 rounded-xl font-bold text-lg
                         bg-gradient-to-r from-green-500 to-green-700
                         text-white hover:opacity-90
                         transition-all shadow-lg"
            >
              📝 Complete MCQ Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // RENDER: Certificate view (after generation)
  // ============================================================
  if (showCert && submittedName) {
    return (
      <div className={`min-h-screen ${bg} pt-20 pb-16`}>
        <div className="max-w-5xl mx-auto px-4">
          {/* Header controls */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <button
              onClick={() => setShowCert(false)}
              className={`flex items-center gap-2 ${subText} hover:opacity-80 transition-opacity`}
            >
              <svg
                className="w-5 h-5"
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
              Edit Name
            </button>

            <span
              className={`text-sm ${
                isDark ? 'text-green-400' : 'text-green-600'
              } font-semibold`}
            >
              ✅ Certificate generated successfully for{' '}
              <strong>{submittedName}</strong>
            </span>
          </div>

          {/* =================================================
              CERTIFICATE – with ALL colors as inline hex values
              ================================================= */}
          <div
            ref={certRef}
            style={{
              background: '#1e293b', // slate-800
              borderRadius: '1rem',
              padding: '4px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            }}
          >
            <div
              style={{
                background: '#0f172a', // slate-900
                borderRadius: '0.75rem',
                overflow: 'hidden',
                minHeight: '620px',
                position: 'relative',
              }}
            >
              {/* Corner decorations (using rating.color hex) */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '8rem', height: '8rem', opacity: 0.2 }}>
                <svg viewBox="0 0 100 100" fill="none">
                  <path d="M0 0 L100 0 L0 100 Z" fill={rating.color} />
                </svg>
              </div>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '8rem', height: '8rem', opacity: 0.2, transform: 'rotate(90deg)' }}>
                <svg viewBox="0 0 100 100" fill="none">
                  <path d="M0 0 L100 0 L0 100 Z" fill={rating.color} />
                </svg>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '8rem', height: '8rem', opacity: 0.2, transform: 'rotate(-90deg)' }}>
                <svg viewBox="0 0 100 100" fill="none">
                  <path d="M0 0 L100 0 L0 100 Z" fill={rating.color} />
                </svg>
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8rem', height: '8rem', opacity: 0.2, transform: 'rotate(180deg)' }}>
                <svg viewBox="0 0 100 100" fill="none">
                  <path d="M0 0 L100 0 L0 100 Z" fill={rating.color} />
                </svg>
              </div>

              {/* Borders */}
              <div
                style={{
                  position: 'absolute',
                  inset: '1.25rem',
                  border: '2px solid ' + rating.color,
                  borderRadius: '0.5rem',
                  opacity: 0.3,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '2rem',
                  border: '1px solid ' + rating.color,
                  borderRadius: '0.5rem',
                  opacity: 0.15,
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2.5rem 3.5rem',
                  textAlign: 'center',
                  minHeight: '620px',
                }}
              >
                {/* Academy header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(to bottom right, #4ade80, #3b82f6)',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                    }}
                  >
                    <span style={{ color: '#fff', fontWeight: 900, fontSize: '1rem' }}>NS</span>
                  </div>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.05em' }}>
                    NetSec ACADEMY
                  </span>
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1.75rem' }}>
                  NETWORKING & CYBERSECURITY
                </div>

                {/* Rating emoji & description */}
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{rating.emoji}</div>
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    marginBottom: '1.25rem',
                    color: rating.color,
                  }}
                >
                  {rating.desc.toUpperCase()}
                </div>
                <div style={{ color: '#d1d5db', fontSize: '1.125rem', marginBottom: '0.75rem' }}>
                  This is to certify that
                </div>

                {/* Student name */}
                <div
                  style={{
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '1.25rem',
                    fontFamily: 'Georgia, serif',
                    wordBreak: 'break-word',
                    maxWidth: '100%',
                  }}
                >
                  {submittedName}
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: '14rem',
                    height: '1px',
                    background: `linear-gradient(to right, transparent, ${rating.color}, transparent)`,
                    marginBottom: '1.25rem',
                  }}
                />

                <div style={{ color: '#d1d5db', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  has successfully completed
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: rating.color,
                  }}
                >
                  {moduleName || 'CCNA & Cybersecurity'} Quiz
                </div>

                {/* Score */}
                {percentage > 0 && (
                  <div style={{ color: '#d1d5db', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
                    Score:{' '}
                    <span style={{ fontWeight: 700, color: '#fff' }}>
                      {score}/{total}
                    </span>
                    {' · '}
                    <span style={{ fontWeight: 700, color: '#fff' }}>{percentage}%</span>
                    {' · '}
                    Rating:{' '}
                    <span style={{ fontWeight: 700, color: rating.color }}>{rating.label}</span>
                  </div>
                )}

                {/* Metadata */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem 3.5rem', marginTop: '0.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.25rem' }}>DATE ISSUED</div>
                    <div style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>{today}</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.25rem' }}>PLATFORM</div>
                    <div style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>NetSec Academy</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.25rem' }}>CREDENTIAL ID</div>
                    <div style={{ color: '#fff', fontSize: '0.875rem', fontFamily: 'monospace' }}>{credentialId}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              ACTIONS
              ================================================= */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => downloadCertificate('png')}
              disabled={isDownloading}
              className={`px-8 py-3 bg-gradient-to-r
                         from-blue-500 to-blue-700
                         text-white rounded-xl font-bold
                         hover:opacity-90 transition-opacity
                         ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isDownloading ? '⏳ Downloading...' : '📥 Download PNG'}
            </button>

            <button
              onClick={() => downloadCertificate('pdf')}
              disabled={isDownloading}
              className={`px-8 py-3 bg-gradient-to-r
                         from-red-500 to-red-700
                         text-white rounded-xl font-bold
                         hover:opacity-90 transition-opacity
                         ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isDownloading ? '⏳ Downloading...' : '📄 Download PDF'}
            </button>

            <button
              onClick={handlePrint}
              className={`px-8 py-3 bg-gradient-to-r
                         from-green-500 to-green-700
                         text-white rounded-xl font-bold
                         hover:opacity-90 transition-opacity`}
            >
              🖨️ Print Certificate
            </button>

            <button
              onClick={() => setShowCert(false)}
              className={`px-8 py-3 border rounded-xl font-bold transition-colors ${
                isDark
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              ✏️ Change Name
            </button>

            <button
              onClick={onBack}
              className={`px-8 py-3 border rounded-xl font-bold transition-colors ${
                isDark
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              🏠 Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // RENDER: Name input (quiz completed, not yet generated)
  // ============================================================
  return (
    <div
      className={`min-h-screen ${bg} pt-20 pb-16 flex items-center justify-center`}
    >
      <div className="max-w-lg w-full mx-auto px-4">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-8 ${subText} hover:opacity-80 transition-opacity`}
        >
          <svg
            className="w-5 h-5"
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
          Back
        </button>

        <div className={`${cardBg} border rounded-2xl p-8 shadow-xl`}>
          {/* Success header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{rating.emoji}</div>
            <h1 className={`text-3xl font-black mb-2 ${text}`}>
              Quiz Completed! 🎉
            </h1>
            {percentage > 0 && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                  percentage >= 90
                    ? 'bg-yellow-400/10 text-yellow-400'
                    : percentage >= 70
                    ? 'bg-green-400/10 text-green-400'
                    : 'bg-blue-400/10 text-blue-400'
                }`}
              >
                {rating.emoji} {rating.label} · {percentage}% Score
              </div>
            )}
            <p className={`${subText} text-sm`}>
              🎉 Congratulations! Your quiz has been completed.
              Enter your name below to generate your certificate.
            </p>
          </div>

          {/* Score summary */}
          {percentage > 0 && (
            <div
              className={`p-5 rounded-xl mb-6 ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className={`text-sm font-semibold mb-4 ${text}`}>
                📊 Your Quiz Result
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-2xl font-black text-green-400">{score}</div>
                  <div className={`text-xs ${subText}`}>Correct</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-400">{total}</div>
                  <div className={`text-xs ${subText}`}>Total</div>
                </div>
                <div>
                  <div
                    className="text-2xl font-black"
                    style={{ color: rating.color }}
                  >
                    {percentage}%
                  </div>
                  <div className={`text-xs ${subText}`}>Score</div>
                </div>
              </div>
            </div>
          )}

          {/* Name form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className={`block text-sm font-semibold mb-2 ${text}`}>
                Your Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name as it should appear..."
                className={`w-full ${inputBg} border rounded-xl
                           px-4 py-3.5
                           focus:outline-none
                           focus:border-green-400
                           transition-colors text-lg
                           ${nameError ? 'border-red-500 focus:border-red-500' : ''}`}
                required
                autoComplete="name"
                pattern="[A-Za-z\s\.\-']*"
                title="Please enter only letters (A-Z, a-z), spaces, dots, hyphens, and apostrophes"
              />
              {nameError && (
                <p className="text-red-500 text-xs mt-2">{nameError}</p>
              )}
              {name.trim() && !nameError && (
                <p className="text-xs mt-2 text-green-400">
                  ✅ Your name <strong>"{name.trim()}"</strong> will appear on the certificate.
                </p>
              )}
              <p className="text-xs mt-1 text-gray-400">
                Allowed: letters (A-Z, a-z), spaces, dots (.), hyphens (-), and apostrophes (')
              </p>
            </div>

            {/* Rating info */}
            <div
              className={`p-4 rounded-xl mb-6 ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className={`text-sm ${subText} mb-3`}>
                Certificate rating based on your quiz score:
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={subText}>90–100%</span>
                  <span className="font-bold text-yellow-400">Excellent 🏆</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={subText}>70–89%</span>
                  <span className="font-bold text-green-400">Good 🥈</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={subText}>0–69%</span>
                  <span className="font-bold text-blue-400">More to Learn 📚</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!name.trim() || !!nameError || !hasCompletedQuiz}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                name.trim() && !nameError && hasCompletedQuiz
                  ? 'bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90 shadow-lg'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              🏆 Generate My Certificate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;