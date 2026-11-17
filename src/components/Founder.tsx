import React from 'react';
import { Phone, Mail, MapPin, CreditCard, Download, ShieldCheck, Award, Building2 } from 'lucide-react';

interface FounderProps {
  onScrollToVisitingCard: () => void;
  onCopyNotice?: (msg: string) => void;
}

export const Founder: React.FC<FounderProps> = ({ onScrollToVisitingCard, onCopyNotice }) => {
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

    if (onCopyNotice) onCopyNotice('Ravi Kumar vCard downloaded to your device!');
  };

  return (
    <section id="founder" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-3xl border border-neutral-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Column: Prestigious Executive Seal & Monogram (NO PHOTO) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle Ambient Red Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D71920]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D71920] uppercase font-bold mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Executive Leadership</span>
                </div>

                {/* Monogram Badge */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D71920] to-[#9E1015] flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-red-950/50 border border-red-400/30 mb-6">
                  RK
                </div>

                <div className="text-xs uppercase tracking-wider font-mono text-neutral-400">
                  Owner & Founder
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 leading-tight">
                  RAVI KUMAR
                </h3>
                <div className="text-sm font-semibold text-[#D71920] mt-1.5">
                  NEXGEN SOLUTIONS
                </div>

                <p className="mt-6 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Guiding NEXGEN SOLUTIONS with strategic vision, technical excellence, and dedication to delivering modern IT, web architecture, and creative multimedia solutions.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 relative z-10 space-y-3 text-xs text-neutral-400">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>HQ: Elante Business Tower, Chandigarh</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>Direct Project Governance & Quality Assurance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Narrative, Direct Contact & Verification */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-2">
                  <span>Founder Introduction</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  Leadership Focused on Real Business Results
                </h2>
                <div className="text-sm font-medium text-neutral-500 mt-1 mb-6">
                  Founded and actively directed by <strong>RAVI KUMAR</strong>
                </div>

                <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    As the founder of NEXGEN SOLUTIONS, <strong>RAVI KUMAR</strong> spearheads the organization with an unwavering focus on technological innovation, modern design aesthetics, and client trust.
                  </p>
                  <p>
                    From our corporate office in Elante Business Tower, Chandigarh, Ravi oversees every major initiative across website development, UI/UX systems, brand identity, and video production to ensure dependable quality and transparent communication.
                  </p>
                  <p>
                    By uniting all essential creative and IT services under one roof, we eliminate agency fragmentation and empower companies with seamless, high-converting digital assets.
                  </p>
                </div>

                {/* Direct Contact Cards */}
                <div className="mt-8 pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:8053551698"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#D71920] hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#D71920]/10 text-[#D71920] flex items-center justify-center shrink-0 group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-500 font-medium">Founder's Phone</div>
                      <div className="text-sm font-bold text-neutral-900">+91 80535 51698</div>
                    </div>
                  </a>

                  <a
                    href="mailto:work@nexgensolution.shop"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#D71920] hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#D71920]/10 text-[#D71920] flex items-center justify-center shrink-0 group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-neutral-500 font-medium">Founder's Email</div>
                      <div className="text-sm font-bold text-neutral-900 truncate">work@nexgensolution.shop</div>
                    </div>
                  </a>
                </div>

                <div className="mt-4 flex items-start gap-2.5 text-xs text-neutral-500">
                  <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                  <span>
                    Store No 17, 3rd Floor, Elante Business Tower, Industrial Area Phase I, Chandigarh – 160002, India
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onScrollToVisitingCard}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D71920] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#B5141A] transition-colors shadow-xs active:scale-95"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>View 3D Digital Visiting Card</span>
                </button>

                <button
                  type="button"
                  onClick={downloadVCard}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-200/80 transition-colors active:scale-95"
                >
                  <Download className="w-4 h-4 text-neutral-600" />
                  <span>Download Contact (.vcf)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
