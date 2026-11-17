import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { IMAGES } from '../assets';

interface FooterProps {
  onSelectService: (service: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Brand & Overview */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm shrink-0">
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
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  NEXGEN
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#D71920] uppercase mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mb-4">
              NEXGEN SOLUTIONS is a premier IT, technology and creative digital solutions company in Chandigarh, India. Founded by Ravi Kumar, we engineer bespoke websites, interfaces, media, and marketing strategies that drive lasting business growth.
            </p>

            <div className="text-xs text-neutral-300 font-medium">
              <span className="text-[#D71920] font-semibold">Leadership:</span> RAVI KUMAR, Owner & Founder
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollTo('#home')} 
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollTo('#about')} 
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollTo('#services')} 
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollTo('#portfolio')} 
                  className="hover:text-white transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollTo('#founder')} 
                  className="hover:text-white transition-colors"
                >
                  Founder Profile
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollTo('#team')} 
                  className="hover:text-white transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollTo('#visiting-card')} 
                  className="hover:text-white transition-colors text-[#D71920]"
                >
                  3D Visiting Card
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollTo('#contact')} 
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* 7 Core Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">
              Core Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(s.title);
                      scrollTo('#contact');
                    }}
                    className="hover:text-[#D71920] transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Office Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">
              Chandigarh Office
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Store No 17, 3rd Floor, Elante Business Tower, Industrial Area Phase I, Chandigarh – 160002, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D71920] shrink-0" />
                <a href="tel:8053551698" className="hover:text-white transition-colors">
                  +91 80535 51698
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D71920] shrink-0" />
                <a href="mailto:work@nexgensolution.shop" className="hover:text-white transition-colors truncate">
                  work@nexgensolution.shop
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D71920] shrink-0" />
                <a 
                  href="https://nexgensolution.shop" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  nexgensolution.shop
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 NEXGEN SOLUTIONS. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Chandigarh, India</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D71920]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
