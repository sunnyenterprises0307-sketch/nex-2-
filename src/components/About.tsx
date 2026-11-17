import React from 'react';
import { Target, Lightbulb, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';
import { IMAGES, SVG_FALLBACKS } from '../assets';

interface AboutProps {
  onExploreServices: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreServices }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Collaboration Asset */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
                <img
                  src={IMAGES.about}
                  alt="NEXGEN SOLUTIONS team collaborating on web and design projects"
                  className="w-full h-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== IMAGES.aboutBackup && !target.src.includes('data:image')) {
                      target.src = IMAGES.aboutBackup;
                    } else {
                      target.src = SVG_FALLBACKS.techWorkspace;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-red-300 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Industrial Area Phase I, Chandigarh</span>
                  </div>
                  <div className="text-sm sm:text-base font-semibold">
                    Collaborative Strategy, Design & Code
                  </div>
                </div>
              </div>

              {/* Floating Quote Box */}
              <div className="mt-6 p-5 rounded-xl bg-neutral-50 border border-neutral-200">
                <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                  “At NEXGEN SOLUTIONS, we believe every business deserves a digital identity that commands trust, solves real technical challenges, and sparks sustainable growth.”
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-neutral-900">RAVI KUMAR</span>
                  <span className="text-neutral-500 font-medium">Owner & Founder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative & Strategic Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-3">
              About NEXGEN SOLUTIONS
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight text-balance">
              Your Complete Digital Partner Combining Technology, Creativity and Strategic Thinking
            </h2>

            <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Based in the vibrant commercial center of Chandigarh, India, <strong>NEXGEN SOLUTIONS</strong> delivers an integrated suite of IT, creative, and digital marketing services under one roof. We help established businesses and growing ventures establish a commanding online presence, modern web infrastructure, and captivating media assets.
            </p>

            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Founded and actively led by <strong>RAVI KUMAR</strong>, our mission is straightforward: eliminate fragmentation in digital services by offering web development, UI/UX design, branding, video editing, photo editing, SEO, and IT solutions with unified excellence.
            </p>

            {/* Core Pillars */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <div className="w-9 h-9 rounded-lg bg-[#D71920]/10 flex items-center justify-center text-[#D71920] shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Technology-Driven Execution
                  </h4>
                  <p className="mt-0.5 text-xs text-neutral-600 leading-relaxed">
                    Clean, responsive, and secure web solutions that load fast, rank effectively on search engines, and operate reliably across all screen sizes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <div className="w-9 h-9 rounded-lg bg-[#D71920]/10 flex items-center justify-center text-[#D71920] shrink-0 mt-0.5">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Creative & Brand Craftsmanship
                  </h4>
                  <p className="mt-0.5 text-xs text-neutral-600 leading-relaxed">
                    Distinguished graphic design, brand identities, social reels, and product imagery that separate your business from ordinary competitors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <div className="w-9 h-9 rounded-lg bg-[#D71920]/10 flex items-center justify-center text-[#D71920] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Direct Ownership & Accountability
                  </h4>
                  <p className="mt-0.5 text-xs text-neutral-600 leading-relaxed">
                    Transparent communication from our Elante Business Tower office in Chandigarh, ensuring every project is delivered with care and ongoing support.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D71920] hover:text-[#B5141A] transition-colors group"
              >
                <span>Learn more about our 7 core services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
