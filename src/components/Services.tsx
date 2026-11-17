import React from 'react';
import { 
  Globe, 
  Layout, 
  Palette, 
  Video, 
  Camera, 
  TrendingUp, 
  Cpu, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'Camera': return <Camera className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-2">
              Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Our Professional Services
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              End-to-end digital solutions tailored to strengthen your corporate visibility, streamline customer engagement, and scale your brand.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono font-medium text-neutral-500 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-xs">
              7 Integrated Disciplines Under One Roof
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const isFeatured = service.highlight || index === 0;

            return (
              <div
                key={service.id}
                className={`group rounded-2xl bg-white border transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden ${
                  isFeatured 
                    ? 'border-neutral-300 shadow-md ring-1 ring-[#D71920]/15' 
                    : 'border-neutral-200 hover:border-neutral-300 hover:shadow-md'
                }`}
              >
                {/* Top Subtle Red Accent Line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#D71920] transition-colors" />

                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-[#D71920] text-neutral-800 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[#D71920] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight group-hover:text-[#D71920] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-neutral-500 mt-1 mb-3">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-2.5">
                      Core Deliverables
                    </div>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap, capIdx) => (
                        <li key={capIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-neutral-700 hover:text-[#D71920] hover:bg-neutral-50 transition-colors group/btn"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-[#D71920]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
