import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../assets';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Founder', href: '#founder' },
    { label: 'Team', href: '#team' },
    { label: 'Visiting Card', href: '#visiting-card' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        isScrolled 
          ? 'border-b border-neutral-200/90 shadow-xs' 
          : 'border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Brand — Nav Links — 1 Primary Action */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus:outline-hidden"
          >
            <img
              src={IMAGES.logo}
              alt="NEXGEN SOLUTIONS Logo"
              className="w-11 h-11 object-contain transition-transform duration-200 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== IMAGES.logoExternal) {
                  e.currentTarget.src = IMAGES.logoExternal;
                }
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-neutral-900 group-hover:text-[#D71920] transition-colors leading-none">
                NEXGEN
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#D71920] uppercase mt-0.5">
                SOLUTIONS
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative py-1 hover:text-[#D71920] transition-colors whitespace-nowrap shrink-0 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D71920] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:8053551698"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-[#D71920] transition-colors whitespace-nowrap shrink-0 px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D71920]" />
              <span>8053551698</span>
            </a>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#D71920] rounded-lg hover:bg-[#B5141A] shadow-sm transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>Get a Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-[#D71920] hover:bg-neutral-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium text-neutral-800 hover:text-[#D71920] py-2 border-b border-neutral-100 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:8053551698"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-100 text-neutral-800 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#D71920]" />
                <span>Direct Call: 8053551698</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#D71920] text-white text-sm font-semibold shadow-sm hover:bg-[#B5141A] transition-all"
              >
                <span>Get a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
