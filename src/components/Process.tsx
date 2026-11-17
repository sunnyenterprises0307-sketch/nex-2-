import React from 'react';
import { Search, Compass, PenTool, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      subtitle: "Understand the client's goals",
      description: 'We initiate every partnership with deep listening. We evaluate your target audience, existing digital touchpoints, commercial goals, and core brand strengths.',
      icon: <Search className="w-6 h-6 text-[#D71920]" />,
    },
    {
      step: '02',
      title: 'Plan',
      subtitle: 'Develop the right strategy',
      description: 'We craft comprehensive technical architectures, content hierarchies, visual moodboards, and deliverable schedules to ensure total alignment.',
      icon: <Compass className="w-6 h-6 text-[#D71920]" />,
    },
    {
      step: '03',
      title: 'Create',
      subtitle: 'Design and develop the solution',
      description: 'Our specialists build clean, accessible code, design distinctive brand systems, edit cinematic media, and optimize every interactive detail.',
      icon: <PenTool className="w-6 h-6 text-[#D71920]" />,
    },
    {
      step: '04',
      title: 'Deliver',
      subtitle: 'Launch, review and improve',
      description: 'Rigorous cross-browser testing, domain configuration, performance tuning, and post-launch technical support to safeguard long-term success.',
      icon: <Rocket className="w-6 h-6 text-[#D71920]" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-2">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Our 4-Step Work Process
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            A disciplined, transparent journey from initial discovery to high-impact digital delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line behind cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-neutral-200 -translate-y-8 z-0" />

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 p-7 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#D71920]/40 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 group-hover:border-[#D71920] flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-neutral-300 group-hover:text-[#D71920] transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#D71920] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#D71920] mt-1 mb-3">
                  {item.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                <span>Phase {item.step} of 04</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
