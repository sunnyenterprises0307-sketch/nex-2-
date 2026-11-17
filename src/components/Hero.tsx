import React, { useState } from 'react';
import { ArrowRight, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import { IMAGES, SVG_FALLBACKS } from '../assets';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleResetMouse = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleResetMouse}
    >
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-neutral-200/40 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(#171717 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Editorial Location & Brand Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              <span className="text-[#D71920] font-bold">NEXGEN SOLUTIONS</span>
              <span aria-hidden="true">·</span>
              <span>Chandigarh, India</span>
              <span aria-hidden="true">·</span>
              <span>Founded by Ravi Kumar</span>
            </div>

            {/* Exact Required Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] max-w-2xl text-balance">
              Innovative Digital Solutions.{' '}
              <span className="text-[#D71920]">Limitless Possibilities.</span>
            </h1>

            {/* Exact Required Description */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl font-normal">
              We transform ideas into powerful digital experiences through innovative web development, creative design, video editing, digital marketing and next-generation technology solutions.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D71920] text-white text-sm sm:text-base font-semibold rounded-xl shadow-md shadow-red-600/20 hover:bg-[#B5141A] transition-all duration-200 active:scale-95 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-100 text-neutral-900 text-sm sm:text-base font-semibold rounded-xl hover:bg-neutral-200/80 transition-all duration-200 active:scale-95"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#visiting-card')}
                className="inline-flex items-center gap-2 px-4 py-3 bg-white text-neutral-700 text-sm font-medium rounded-xl border border-neutral-300 hover:border-[#D71920] hover:text-[#D71920] transition-colors"
              >
                <CreditCard className="w-4 h-4 text-[#D71920]" />
                <span>View Digital Visiting Card</span>
              </button>
            </div>

            {/* Quick Proof Trust Markers */}
            <div className="mt-10 pt-8 border-t border-neutral-200/80 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-black text-neutral-900 tracking-tight">
                  7 Core
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Digital Service Disciplines
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#D71920] tracking-tight">
                  100%
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Custom Architecture & Design
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl font-black text-neutral-900 tracking-tight">
                  Chandigarh
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Elante Business Tower Hub
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Mouse Parallax & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl transition-transform duration-300 ease-out bg-white"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)`,
              }}
            >
              {/* Main Visual Image Asset */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={IMAGES.hero}
                  alt="NEXGEN SOLUTIONS Modern Technology and Creative Workstations"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== IMAGES.heroBackup && !target.src.includes('data:image')) {
                      target.src = IMAGES.heroBackup;
                    } else {
                      target.src = SVG_FALLBACKS.techWorkspace;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-red-300">
                    Chandigarh Technology Hub
                  </div>
                  <div className="text-base sm:text-lg font-bold leading-tight mt-0.5">
                    Engineering Modern Web & Creative Media
                  </div>
                </div>
              </div>

              {/* Floating Accents */}
              <div 
                className="absolute -top-3 -right-3 bg-white p-3.5 rounded-xl border border-neutral-200 shadow-lg flex items-center gap-3 transition-transform duration-200"
                style={{
                  transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`
                }}
              >
                <img
                  src={IMAGES.logo}
                  alt="NEXGEN SOLUTIONS Logo"
                  className="w-9 h-9 object-contain shrink-0"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (e.currentTarget.src !== IMAGES.logoExternal) {
                      e.currentTarget.src = IMAGES.logoExternal;
                    }
                  }}
                />
                <div>
                  <div className="text-xs font-bold text-neutral-900">
                    RAVI KUMAR
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    Owner & Founder
                  </div>
                </div>
              </div>

              <div 
                className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-xl border border-neutral-200 shadow-lg hidden sm:flex items-center gap-2.5 transition-transform duration-200"
                style={{
                  transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#D71920]" />
                <span className="text-xs font-semibold text-neutral-800">
                  Store No 17, Elante Business Tower
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Pillar Strip Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80">
            <div className="text-xs font-bold text-[#D71920] uppercase tracking-wider mb-1">
              01. Web Development
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              Modern Full-Stack Code
            </h4>
            <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
              Responsive, SEO-optimized business websites and high-converting e-commerce.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80">
            <div className="text-xs font-bold text-[#D71920] uppercase tracking-wider mb-1">
              02. UI/UX & Graphics
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              High-Fidelity Branding
            </h4>
            <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
              Intuitive user journeys, distinct brand logos, and commercial campaign assets.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80">
            <div className="text-xs font-bold text-[#D71920] uppercase tracking-wider mb-1">
              03. Next-Gen Media
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              Video & Photo Editing
            </h4>
            <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
              Commercial photo retouching, reels, shorts, and corporate promo video production.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80">
            <div className="text-xs font-bold text-[#D71920] uppercase tracking-wider mb-1">
              04. Strategic Growth
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              SEO & Digital Marketing
            </h4>
            <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
              Targeted digital advertising, search engine presence, and proactive IT troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
