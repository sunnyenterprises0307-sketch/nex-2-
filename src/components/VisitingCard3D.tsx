import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  RotateCw, 
  Play, 
  Pause, 
  Download, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { IMAGES } from '../assets';

interface VisitingCard3DProps {
  onCopyNotice?: (msg: string) => void;
}

export const VisitingCard3D: React.FC<VisitingCard3DProps> = ({ onCopyNotice }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Auto 360 spin animation loop
  useEffect(() => {
    if (!isAutoSpinning) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const spin = () => {
      setRotationAngle((prev) => (prev + 0.8) % 360);
      animFrameRef.current = requestAnimationFrame(spin);
    };

    animFrameRef.current = requestAnimationFrame(spin);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAutoSpinning]);

  // Handle mouse tilt effect when not auto-spinning
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAutoSpinning) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = -((y - centerY) / centerY) * 16;
    const tiltY = ((x - centerX) / centerX) * 16;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isAutoSpinning) {
      setTilt({ x: 0, y: 0 });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Flip toggle
  const toggleFlip = () => {
    if (isAutoSpinning) {
      setIsAutoSpinning(false);
    }
    setIsFlipped(!isFlipped);
  };

  // Reset to default front view
  const resetCard = () => {
    setIsAutoSpinning(false);
    setIsFlipped(false);
    setRotationAngle(0);
    setTilt({ x: 0, y: 0 });
  };

  // Toggle continuous 360 spin
  const toggleAutoSpin = () => {
    if (!isAutoSpinning) {
      setIsFlipped(false);
      setTilt({ x: 0, y: 0 });
    }
    setIsAutoSpinning(!isAutoSpinning);
  };

  // Copy full contact details
  const handleCopyContact = () => {
    const text = `NEXGEN SOLUTIONS
Owner & Founder: RAVI KUMAR
Phone: +91 8053551698
Email: work@nexgensolution.shop
Address: Store No 17, 3rd Floor, Elante Business Tower, Industrial Area Phase I, Chandigarh – 160002, India
Website: https://nexgensolution.shop`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      if (onCopyNotice) onCopyNotice('Contact details copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Generate and download standard vCard (.vcf)
  const downloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Kumar;Ravi;;;',
      'FN:Ravi Kumar',
      'ORG:NEXGEN SOLUTIONS',
      'TITLE:Owner & Founder',
      'TEL;TYPE=CELL,VOICE:+918053551698',
      'EMAIL;TYPE=WORK,INTERNET:work@nexgensolution.shop',
      'URL:https://nexgensolution.shop',
      'ADR;TYPE=WORK:;;Store No 17, 3rd Floor, Elante Business Tower, Industrial Area Phase I;Chandigarh;Chandigarh;160002;India',
      'NOTE:NEXGEN SOLUTIONS - IT, Technology & Creative Digital Solutions',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ravi_Kumar_NEXGEN_SOLUTIONS.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    if (onCopyNotice) onCopyNotice('Ravi Kumar vCard downloaded! Ready to add to your phone contacts.');
  };

  // Calculate current transform
  const effectiveRotateY = isAutoSpinning 
    ? rotationAngle 
    : isFlipped 
      ? 180 + tilt.y 
      : tilt.y;
      
  const effectiveRotateX = isAutoSpinning ? 0 : tilt.x;

  return (
    <section id="visiting-card" className="py-20 bg-neutral-50 relative overflow-hidden border-y border-neutral-200">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#D71920]/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Technology Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Digital Visiting Card
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Experience our 360° interactive business identity. Tilt with your mouse, flip to inspect credentials, or save directly to your mobile device.
          </p>
        </div>

        {/* 3D Card Interactive Stage */}
        <div className="flex flex-col items-center">
          {/* Card Viewport Container */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="perspective-1200 py-6 px-2 flex justify-center items-center w-full max-w-[540px] select-none cursor-pointer"
            onClick={toggleFlip}
            title="Click to flip the card"
          >
            <div 
              className="preserve-3d transition-transform duration-300 ease-out relative w-full h-[280px] sm:h-[300px] rounded-2xl"
              style={{
                transform: `rotateX(${effectiveRotateX}deg) rotateY(${effectiveRotateY}deg)`,
                transformStyle: 'preserve-3d',
                boxShadow: isHovered 
                  ? '0 25px 50px -12px rgba(215, 25, 32, 0.25), 0 12px 24px -8px rgba(0, 0, 0, 0.12)' 
                  : '0 20px 35px -10px rgba(0, 0, 0, 0.15), 0 6px 12px -4px rgba(215, 25, 32, 0.1)'
              }}
            >
              {/* ================= FRONT OF CARD ================= */}
              <div 
                className="backface-hidden absolute inset-0 w-full h-full rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl"
                style={{
                  transform: 'rotateY(0deg)',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Decorative Red Geometric Ribbons */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#D71920] to-[#B5141A] rounded-bl-full -mr-14 -mt-14 opacity-95 shadow-sm" />
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-neutral-100 rounded-full opacity-60" />
                <div className="absolute top-0 left-0 w-2.5 h-full bg-[#D71920]" />

                {/* Subtle Sheen Overlay */}
                <div className="card-glass-sheen absolute inset-0 pointer-events-none" />

                {/* Top Section: Brand Identity */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={IMAGES.logo}
                      alt="NEXGEN SOLUTIONS Logo"
                      className="w-12 h-12 object-contain shrink-0"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (e.currentTarget.src !== IMAGES.logoExternal) {
                          e.currentTarget.src = IMAGES.logoExternal;
                        }
                      }}
                    />
                    <div>
                      <span className="block text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900 leading-none">
                        NEXGEN
                      </span>
                      <span className="block text-xs font-bold tracking-widest text-[#D71920] mt-1">
                        SOLUTIONS
                      </span>
                    </div>
                  </div>

                  <div className="text-right text-white pr-2 pt-1 font-mono text-[10px] tracking-widest uppercase opacity-90">
                    Chandigarh · India
                  </div>
                </div>

                {/* Center / Bottom Section: Founder & Executive Identity */}
                <div className="relative z-10 mt-auto">
                  <div className="border-t border-neutral-100 pt-4 flex items-end justify-between">
                    <div>
                      <div className="text-xs uppercase font-semibold tracking-wider text-[#D71920] mb-0.5">
                        Owner & Founder
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-none">
                        RAVI KUMAR
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-1.5 font-medium">
                        IT, Technology & Creative Digital Solutions
                      </p>
                    </div>

                    <div className="flex flex-col items-end text-right">
                      <div className="px-2.5 py-1 bg-neutral-100 rounded-md text-[11px] font-mono font-medium text-neutral-700 flex items-center gap-1.5">
                        <RotateCw className="w-3 h-3 text-[#D71920]" />
                        <span>Flip for Contact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= BACK OF CARD ================= */}
              <div 
                className="backface-hidden absolute inset-0 w-full h-full rounded-2xl bg-neutral-900 text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-xl border border-neutral-800"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Background ambient accents */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D71920]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-2.5 h-full bg-[#D71920]" />

                {/* Back Top: Brand wordmark & Founder */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm shrink-0">
                      <img
                        src={IMAGES.logo}
                        alt="NEXGEN SOLUTIONS Logo"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (e.currentTarget.src !== IMAGES.logoExternal) {
                            e.currentTarget.src = IMAGES.logoExternal;
                          }
                        }}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-tight text-white leading-tight">
                        NEXGEN SOLUTIONS
                      </div>
                      <div className="text-[11px] text-[#D71920] font-medium">
                        RAVI KUMAR · Owner & Founder
                      </div>
                    </div>
                  </div>

                  {/* QR Code SVG */}
                  <div 
                    className="p-1.5 bg-white rounded-lg shadow-sm flex items-center justify-center"
                    title="Scan to save contact"
                  >
                    <svg className="w-11 h-11" viewBox="0 0 45 45" fill="none">
                      <rect width="45" height="45" rx="3" fill="#ffffff" />
                      {/* Top-left locator */}
                      <rect x="4" y="4" width="13" height="13" rx="2" fill="#171717" />
                      <rect x="6" y="6" width="9" height="9" rx="1" fill="#ffffff" />
                      <rect x="8" y="8" width="5" height="5" rx="0.5" fill="#D71920" />
                      
                      {/* Top-right locator */}
                      <rect x="28" y="4" width="13" height="13" rx="2" fill="#171717" />
                      <rect x="30" y="6" width="9" height="9" rx="1" fill="#ffffff" />
                      <rect x="32" y="8" width="5" height="5" rx="0.5" fill="#D71920" />
                      
                      {/* Bottom-left locator */}
                      <rect x="4" y="28" width="13" height="13" rx="2" fill="#171717" />
                      <rect x="6" y="30" width="9" height="9" rx="1" fill="#ffffff" />
                      <rect x="8" y="32" width="5" height="5" rx="0.5" fill="#D71920" />
                      
                      {/* Digital data dots */}
                      <rect x="20" y="5" width="4" height="4" fill="#171717" />
                      <rect x="20" y="11" width="4" height="4" fill="#D71920" />
                      <rect x="5" y="20" width="4" height="4" fill="#171717" />
                      <rect x="11" y="20" width="4" height="4" fill="#171717" />
                      <rect x="20" y="20" width="5" height="5" fill="#D71920" />
                      <rect x="28" y="20" width="4" height="4" fill="#171717" />
                      <rect x="35" y="20" width="4" height="4" fill="#171717" />
                      <rect x="20" y="28" width="4" height="4" fill="#171717" />
                      <rect x="28" y="28" width="4" height="4" fill="#D71920" />
                      <rect x="36" y="28" width="4" height="4" fill="#171717" />
                      <rect x="20" y="36" width="4" height="4" fill="#D71920" />
                      <rect x="28" y="36" width="4" height="4" fill="#171717" />
                      <rect x="36" y="36" width="4" height="4" fill="#171717" />
                    </svg>
                  </div>
                </div>

                {/* Back Details: Clean Clickable Links */}
                <div className="space-y-2 relative z-10 text-xs">
                  {/* Phone */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#D71920]/20 flex items-center justify-center text-[#D71920] shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <a 
                      href="tel:8053551698" 
                      onClick={(e) => e.stopPropagation()} 
                      className="font-medium text-neutral-200 hover:text-white transition-colors"
                    >
                      +91 80535 51698
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#D71920]/20 flex items-center justify-center text-[#D71920] shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <a 
                      href="mailto:work@nexgensolution.shop" 
                      onClick={(e) => e.stopPropagation()} 
                      className="font-medium text-neutral-200 hover:text-white transition-colors truncate"
                    >
                      work@nexgensolution.shop
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#D71920]/20 flex items-center justify-center text-[#D71920] shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] leading-tight text-neutral-300">
                      Store No 17, 3rd Floor, Elante Business Tower, Ind. Area Phase I, Chandigarh – 160002
                    </span>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#D71920]/20 flex items-center justify-center text-[#D71920] shrink-0">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <a 
                      href="https://nexgensolution.shop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} 
                      className="font-medium text-[#D71920] hover:underline flex items-center gap-1"
                    >
                      nexgensolution.shop
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Back Footer */}
                <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400">
                  <span>Click to return to front</span>
                  <span className="font-mono text-neutral-500">ISO Standard vCard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Controls Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={toggleFlip}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-neutral-800 text-xs sm:text-sm font-semibold rounded-lg border border-neutral-300 shadow-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all active:scale-95"
            >
              <RotateCw className="w-4 h-4 text-[#D71920]" />
              <span>Flip Card ({isFlipped ? 'Show Front' : 'Show Back'})</span>
            </button>

            <button
              type="button"
              onClick={toggleAutoSpin}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border shadow-sm transition-all active:scale-95 ${
                isAutoSpinning 
                  ? 'bg-[#D71920] text-white border-[#D71920] hover:bg-[#B5141A]' 
                  : 'bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              {isAutoSpinning ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause 360° Spin</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-[#D71920]" />
                  <span>Auto 360° Rotation</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={resetCard}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-neutral-600 text-xs sm:text-sm font-medium rounded-lg border border-neutral-200 hover:text-neutral-900 hover:bg-neutral-50 transition-all"
            >
              <span>Reset Angle</span>
            </button>

            <button
              type="button"
              onClick={handleCopyContact}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-neutral-800 text-xs sm:text-sm font-semibold rounded-lg border border-neutral-300 shadow-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-600" />
                  <span>Copy Details</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={downloadVCard}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D71920] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:bg-[#B5141A] transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Save vCard (.vcf)</span>
            </button>
          </div>

          <p className="mt-4 text-xs text-neutral-500 text-center">
            Tip: Move your mouse or drag over the card for realistic 3D perspective depth, or click to flip.
          </p>
        </div>
      </div>
    </section>
  );
};
