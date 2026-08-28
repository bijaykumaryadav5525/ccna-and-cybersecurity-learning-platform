import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// ============================================================
// Render DOM element to canvas
// Avoid Tailwind opacity color classes because html2canvas
// can fail when it encounters modern oklab() color functions.
// ============================================================
const renderElementToCanvas = async (
  element: HTMLElement,
  scale = 2,
): Promise<HTMLCanvasElement> => {
  const clone = element.cloneNode(true) as HTMLElement;
  const sourceElements = [element, ...Array.from(element.querySelectorAll('*'))];
  const cloneElements = [clone, ...Array.from(clone.querySelectorAll('*'))];

  cloneElements.forEach((cloneElement, index) => {
    const sourceElement = sourceElements[index] as HTMLElement;
    const computedStyle = window.getComputedStyle(sourceElement);
    const cloneHtmlElement = cloneElement as HTMLElement;

    for (const property of computedStyle) {
      cloneHtmlElement.style.setProperty(
        property,
        computedStyle.getPropertyValue(property),
        computedStyle.getPropertyPriority(property),
      );
    }
  });

  const { width, height } = element.getBoundingClientRect();
  clone.style.position = 'fixed';
  clone.style.left = '-10000px';
  clone.style.top = '0';
  clone.style.width = `${width}px`;
  clone.style.height = `${height}px`;
  clone.style.transform = 'none';
  clone.style.margin = '0';
  document.body.appendChild(clone);

  try {
    return await html2canvas(clone, {
      scale,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#0a1628',
    });
  } finally {
    clone.remove();
  }
};

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

  // Fixed certificate signature name
  // Always display only Mr. BK Yadav.
  const signatures = {
    director: 'Mr. BK Yadav',
  };

  useEffect(() => {
    if (quizCompleted === true) {
      setInternalQuizCompleted(true);
      return;
    }

    setInternalQuizCompleted(
      typeof score === 'number' &&
        typeof total === 'number' &&
        total > 0,
    );
  }, [score, total, quizCompleted]);

  const hasValidScore =
    typeof score === 'number' &&
    typeof total === 'number' &&
    total > 0;

  const hasCompletedQuiz = internalQuizCompleted && hasValidScore;
  const percentage = hasValidScore
    ? Math.round((score / total) * 100)
    : 0;

  const bg = isDark ? 'bg-gray-950' : 'bg-gray-50';
  const cardBg = isDark
    ? 'bg-gray-900 border-gray-800'
    : 'bg-white border-gray-200';
  const text = isDark ? 'text-gray-100' : 'text-gray-900';
  const subText = isDark ? 'text-gray-400' : 'text-gray-600';

  const getRating = (pct: number) => {
    if (pct >= 90) {
      return {
        label: 'Excellent',
        grade: 'A',
        subtitle: 'OF EXCELLENCE',
        color: '#d4af37',
        borderColor: '#d4af37',
      };
    }

    if (pct >= 80) {
      return {
        label: 'Very Good',
        grade: 'B',
        subtitle: 'OF DISTINCTION',
        color: '#b8c4d0',
        borderColor: '#b8c4d0',
      };
    }

    if (pct >= 70) {
      return {
        label: 'Good',
        grade: 'C',
        subtitle: 'OF MERIT',
        color: '#cd7f32',
        borderColor: '#cd7f32',
      };
    }

    if (pct >= 60) {
      return {
        label: 'Average',
        grade: 'D',
        subtitle: 'OF ACHIEVEMENT',
        color: '#6b8cae',
        borderColor: '#6b8cae',
      };
    }

    return {
      label: 'Participation',
      grade: 'E',
      subtitle: 'OF PARTICIPATION',
      color: '#8e8e93',
      borderColor: '#8e8e93',
    };
  };

  const rating = getRating(percentage);

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const credentialId = `NetSec-${Date.now()
    .toString(36)
    .toUpperCase()
    .slice(-8)}`;

  const validateName = (value: string) => {
    const alphabeticRegex = /^[A-Za-z\s\.\-']*$/;

    if (!value) {
      setNameError('');
      return true;
    }

    if (!alphabeticRegex.test(value)) {
      setNameError(
        'Please enter only letters (A-Z, a-z), spaces, dots, hyphens, and apostrophes',
      );
      return false;
    }

    setNameError('');
    return true;
  };

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasCompletedQuiz) {
      alert(
        'Please complete the quiz first before generating a certificate.',
      );
      return;
    }

    const cleanName = name.trim();

    if (!cleanName) {
      alert('Please enter your name.');
      return;
    }

    const alphabeticRegex = /^[A-Za-z\s\.\-']*$/;

    if (!alphabeticRegex.test(cleanName)) {
      alert(
        'Please enter a valid name using only letters (A-Z, a-z), spaces, dots, hyphens, and apostrophes.',
      );
      return;
    }

    setSubmittedName(cleanName);
    setShowCert(true);
  };

  const downloadCertificate = async (
    format: 'png' | 'pdf' = 'png',
  ) => {
    const cert = certRef.current;

    if (!cert) {
      alert('Certificate not found. Please try again.');
      return;
    }

    setIsDownloading(true);

    try {
      const canvas = await renderElementToCanvas(cert, 2);

      if (format === 'png') {
        const blob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob(resolve, 'image/png');
        });

        if (!blob) {
          throw new Error(
            'The certificate image could not be created.',
          );
        }

        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.download = `NetSec_Certificate_${submittedName.replace(
          /\s/g,
          '_',
        )}.png`;

        link.href = objectUrl;
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(objectUrl);
      } else {
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width, canvas.height],
          hotfixes: ['px_scaling'],
        });

        pdf.addImage(
          imgData,
          'PNG',
          0,
          0,
          canvas.width,
          canvas.height,
        );

        pdf.save(
          `NetSec_Certificate_${submittedName.replace(
            /\s/g,
            '_',
          )}.pdf`,
        );
      }
    } catch (error) {
      console.error('Download error:', error);

      alert(
        `Failed to download certificate.\n\nError: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    } finally {
      setIsDownloading(false);
    }
  };

  // ============================================================
  // Locked state
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

            <h1
              className={`text-3xl font-black mb-3 ${text}`}
            >
              Certificate Locked
            </h1>

            <p
              className={`${subText} leading-relaxed mb-6`}
            >
              Please complete the MCQ quiz first to generate your
              certificate.
            </p>

            <button
              onClick={onBack}
              className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90 transition-all shadow-lg"
            >
              Complete MCQ Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // Certificate
  //
  // IMPORTANT:
  // - Fixed 820:520 aspect ratio on every screen.
  // - The complete certificate scales as ONE unit.
  // - cqw keeps typography proportional to the certificate itself.
  // - No mobile stacking/rearrangement inside the certificate.
  // - All colors used for the downloadable certificate are
  //   explicit hex/rgba values to avoid html2canvas oklab errors.
  // ============================================================
  if (showCert && submittedName) {
    return (
      <div className="min-h-screen bg-[#0a1628] px-2 py-4 sm:px-4 md:px-6 md:py-8 flex items-center justify-center">
        <div className="w-full max-w-[1000px] mx-auto">
          <div
            ref={certRef}
            className="relative mx-auto w-full max-w-[820px] aspect-[820/520] overflow-hidden rounded-2xl"
            style={{
              backgroundColor: '#0f1f30',
              border: `6px solid ${rating.borderColor}`,
              containerType: 'inline-size',
              boxSizing: 'border-box',
            }}
          >
            {/* Inner border */}
            <div
              className="absolute inset-[12px] rounded-xl border-2"
              style={{
                borderColor: `${rating.borderColor}80`,
              }}
            />

            {/* Corner flourishes */}
            {[
              ['top-4 left-4', 'border-t-4 border-l-4'],
              ['top-4 right-4', 'border-t-4 border-r-4'],
              ['bottom-4 left-4', 'border-b-4 border-l-4'],
              ['bottom-4 right-4', 'border-b-4 border-r-4'],
            ].map(([pos, border], idx) => (
              <div
                key={idx}
                className={`absolute ${pos} w-10 h-10 ${border} opacity-70`}
                style={{
                  borderColor: '#d4af37',
                }}
              >
                <div
                  className={`absolute ${
                    idx < 2 ? 'top-2' : 'bottom-2'
                  } ${
                    idx % 2 === 0 ? 'left-2' : 'right-2'
                  } w-4 h-4 border-t-2 border-l-2 opacity-50`}
                  style={{
                    borderColor: '#d4af37',
                  }}
                />
              </div>
            ))}

            {/* Main content.
                Everything remains in the same desktop layout on mobile. */}
            <div className="relative z-10 flex h-full flex-col items-center justify-between px-[5.5cqw] py-[3.4cqw] text-center">
              {/* Header */}
              <div className="w-full">
                <div className="relative inline-block px-[3.2cqw] py-[0.45cqw]">
                  <div
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{
                      backgroundColor: rating.borderColor,
                    }}
                  />

                  <div
                    className="absolute inset-x-0 bottom-0 h-0.5"
                    style={{
                      backgroundColor: rating.borderColor,
                    }}
                  />

                  <h1
                    className="font-serif font-bold tracking-[0.25em] text-[#d4af37] uppercase leading-none"
                    style={{
                      fontFamily:
                        'Georgia, "Times New Roman", serif',
                      fontSize: '4.8cqw',
                    }}
                  >
                    Certificate
                  </h1>
                </div>

                <div
                  className="mt-1 font-serif font-medium tracking-[0.35em]"
                  style={{
                    color: rating.borderColor,
                    fontSize: '2.2cqw',
                  }}
                >
                  {rating.subtitle}
                </div>

                <div
                  className="mx-auto mt-2 h-px"
                  style={{
                    width: '23cqw',
                    backgroundColor: rating.borderColor,
                  }}
                />
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col justify-center items-center -mt-1">
                <p
                  className="uppercase tracking-[0.25em] font-light"
                  style={{
                    color: 'rgba(255,255,255,0.60)',
                    fontSize: '1.4cqw',
                  }}
                >
                  This certificate is proudly presented to
                </p>

                <div
                  className="mt-3 px-4 py-1"
                  style={{
                    maxWidth: '88%',
                  }}
                >
                  <div
                    className="font-serif font-bold leading-none text-white"
                    style={{
                      fontFamily:
                        'Georgia, "Times New Roman", serif',
                      fontSize: '8cqw',
                    }}
                  >
                    {submittedName}
                  </div>

                </div>

                <p
                  className="mt-3 max-w-[80%] leading-relaxed"
                  style={{
                    color: 'rgba(255,255,255,0.80)',
                    fontSize: '1.5cqw',
                  }}
                >
                  for successfully completing the{' '}
                  <span
                    className="font-bold"
                    style={{ color: '#ffffff' }}
                  >
                    {moduleName}
                  </span>{' '}
                  with a score of{' '}
                  <span
                    className="font-bold"
                    style={{ color: rating.borderColor }}
                  >
                    {score}/{total} ({percentage}%)
                  </span>{' '}
                  –{' '}
                  <span
                    className="font-semibold"
                    style={{ color: rating.borderColor }}
                  >
                    {rating.label} (Grade {rating.grade})
                  </span>
                </p>
              </div>

              {/* ==================================================
                  ENHANCED FOOTER
                  Larger and clearer on both desktop and mobile.
                  Same proportions because all sizes use cqw.
                  ================================================== */}
              <div
                className="w-full max-w-[92%] flex flex-col items-center mt-2"
                style={{
                  gap: '0.9cqw',
                }}
              >
                <div
                  className="flex w-full justify-between items-end"
                  style={{
                    gap: '5cqw',
                  }}
                >
                  {/* DATE */}
                  <div className="flex-1 flex flex-col items-start text-left">
                    <div
                      className="uppercase tracking-[0.16em] font-bold"
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '1.05cqw',
                        marginBottom: '0.35cqw',
                      }}
                    >
                      Date
                    </div>

                    <div
                      className="font-serif font-bold border-b-2 w-full pb-1"
                      style={{
                        color: 'rgba(255,255,255,0.95)',
                        borderColor: rating.borderColor,
                        fontSize: '1.75cqw',
                        lineHeight: '1.25',
                      }}
                    >
                      {today}
                    </div>
                  </div>

                  {/* SEAL */}
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <div
                      className="flex items-center justify-center rounded-full border-[3px]"
                      style={{
                        width: '8cqw',
                        height: '8cqw',
                        borderColor: rating.borderColor,
                        color: rating.borderColor,
                        backgroundColor:
                          'rgba(255,255,255,0.05)',
                      }}
                    >
                      <span
                        className="font-serif font-bold"
                        style={{
                          fontSize: '2.8cqw',
                        }}
                      >
                        NS
                      </span>
                    </div>

                    <div
                      className="font-bold uppercase tracking-[0.16em]"
                      style={{
                        color: 'rgba(255,255,255,0.50)',
                        fontSize: '0.85cqw',
                        marginTop: '0.35cqw',
                      }}
                    >
                      Verified
                    </div>
                  </div>

                  {/* SIGNATURE */}
                  <div className="flex-1 flex flex-col items-end text-right">
                    <div
                      className="uppercase tracking-[0.16em] font-bold"
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '1.05cqw',
                        marginBottom: '0.35cqw',
                      }}
                    >
                      Signature
                    </div>

                    <div
                      className="font-serif italic border-b-2 w-full pb-1 text-right"
                      style={{
                        color: 'rgba(255,255,255,0.95)',
                        borderColor: rating.borderColor,
                        fontFamily:
                          '"Segoe Print", "Bradley Hand", cursive',
                        fontSize: '1.9cqw',
                        lineHeight: '1.25',
                      }}
                    >
                      {signatures.director}
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.9cqw',
                        marginTop: '0.35cqw',
                      }}
                    >
                      Director, NetSec Academy
                    </div>
                  </div>
                </div>

                {/* BOTTOM META */}
                <div
                  className="flex flex-nowrap justify-between items-center w-full border-t"
                  style={{
                    borderColor: `${rating.borderColor}60`,
                    paddingTop: '0.9cqw',
                    marginTop: '0.15cqw',
                    gap: '2cqw',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '1.05cqw',
                    lineHeight: '1.3',
                  }}
                >
                  <span className="whitespace-nowrap text-left">
                    ID:{' '}
                    <span
                      className="font-bold"
                      style={{
                        color: 'rgba(255,255,255,0.85)',
                      }}
                    >
                      {credentialId}
                    </span>
                  </span>

                  <span className="whitespace-nowrap underline decoration-dotted text-right">
                    Verify at{' '}
                    <span
                      className="font-bold"
                      style={{
                        color: 'rgba(255,255,255,0.85)',
                      }}
                    >
                      netsec.academy/verify
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Download buttons */}
          <div className="mt-6 grid grid-cols-2 gap-4 max-w-[400px] mx-auto">
            <button
              onClick={() => downloadCertificate('png')}
              disabled={isDownloading}
              className={`rounded-xl bg-[#2563eb] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#1d4ed8] active:scale-95 ${
                isDownloading
                  ? 'opacity-50 pointer-events-none'
                  : ''
              }`}
            >
              {isDownloading ? '⏳' : 'PNG'}
            </button>

            <button
              onClick={() => downloadCertificate('pdf')}
              disabled={isDownloading}
              className={`rounded-xl bg-[#dc2626] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#b91c1c] active:scale-95 ${
                isDownloading
                  ? 'opacity-50 pointer-events-none'
                  : ''
              }`}
            >
              {isDownloading ? '⏳' : 'PDF'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // Name input
  // ============================================================
  return (
    <div
      className={`min-h-screen ${
        isDark ? 'bg-[#0b1b2d]' : 'bg-[#edf4fa]'
      } px-3 py-5 flex items-center justify-center`}
    >
      <div className="w-full max-w-[420px]">
        {/* Single Back button */}
        <button
          type="button"
          onClick={onBack}
          className={`mb-4 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition-all ${
            isDark
              ? 'text-gray-300 hover:bg-white/10 hover:text-white'
              : 'text-slate-700 hover:bg-white hover:text-slate-900'
          }`}
        >
          <svg
            className="h-5 w-5"
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

        <div className="overflow-hidden rounded-[32px] border border-cyan-400/40 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.30)] backdrop-blur-sm">
          <div className="bg-gradient-to-br from-sky-200 via-white to-cyan-100 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm font-black text-white shadow-md shadow-cyan-500/30">
                  NS
                </div>

                <div className="text-lg font-black text-slate-800">
                  NetSec Academy
                </div>
              </div>
            </div>

            <div className="rounded-[22px] bg-sky-100/90 p-4 shadow-inner shadow-sky-200">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-sky-700">
                <span>📘</span>
                <span>
                  Ready to certify – {percentage}% Score
                </span>
              </div>

              <p className="text-sm leading-6 text-slate-700">
                Congratulations! Enter your full name to generate
                your professional certificate.
              </p>
            </div>

            {percentage > 0 && (
              <div className="mt-4 rounded-[22px] bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/80">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                  Your Quiz Result
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-black text-emerald-500">
                      {score}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Correct
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-black text-sky-500">
                      {total}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Total
                    </div>
                  </div>

                  <div>
                    <div
                      className="text-2xl font-black"
                      style={{
                        color: rating.borderColor,
                      }}
                    >
                      {percentage}%
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Score
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Your Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="e.g. John Doe"
                  className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-base text-slate-800 shadow-sm outline-none transition ${
                    nameError
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-sky-300 focus:border-cyan-500'
                  }`}
                  required
                  autoComplete="name"
                  pattern="[A-Za-z\s\.\-']*"
                />

                {nameError && (
                  <p className="mt-2 text-xs text-red-500">
                    {nameError}
                  </p>
                )}

                {name.trim() && !nameError && (
                  <p className="mt-2 text-xs font-medium text-emerald-600">
                    ✓ Name will appear as "{name.trim()}"
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={
                  !name.trim() ||
                  !!nameError ||
                  !hasCompletedQuiz
                }
                className={`w-full rounded-2xl py-4 text-base font-black shadow-lg transition ${
                  name.trim() &&
                  !nameError &&
                  hasCompletedQuiz
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:opacity-95 shadow-emerald-600/30'
                    : 'cursor-not-allowed bg-slate-300 text-slate-500'
                }`}
              >
                🏆 Generate My Certificate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
