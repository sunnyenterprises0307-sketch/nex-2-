import React from 'react';
import { 
  Lightbulb, 
  Sparkles, 
  Smartphone, 
  Cpu, 
  Layers, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Creative & Modern Solutions',
      description: 'We blend cutting-edge aesthetics with practical business functionality, ensuring your digital presence feels fresh, engaging, and memorable.',
      icon: <Lightbulb className="w-6 h-6 text-[#D71920]" />,
    },
    {
      title: 'Professional Design Approach',
      description: 'Every layout, typography pairing, and color harmony is engineered using strict design systems and brand identity principles.',
      icon: <Sparkles className="w-6 h-6 text-[#D71920]" />,
    },
    {
      title: 'Responsive & User-Friendly Websites',
      description: 'Every web application is meticulously tested on mobile, tablet, and ultra-wide screens for swift loading times and frictionless navigation.',
      icon: <Smartphone className="w-6 h-6 text-[#D71920]" />,
    },
    {
      title: 'Technology-Driven Thinking',
      description: 'We adopt modern frameworks, performance optimizations, and secure architectures that scale with your business over time.',
      icon: <Cpu className="w-6 h-6 text-[#D71920]" />,
    },
    {
      title: 'Multiple Digital Services Under One Roof',
      description: 'From website development and UI/UX to video editing, photo retouching, graphic design, and digital marketing—everything is coordinated seamlessly.',
      icon: <Layers className="w-6 h-6 text-[#D71920]" />,
    },
    {
      title: 'Focus on Quality & Customer Satisfaction',
      description: 'Direct founder accountability with Ravi Kumar ensures transparent timelines, honest advice, and dedicated post-launch support.',
      icon: <HeartHandshake className="w-6 h-6 text-[#D71920]" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-2">
            The Nexgen Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Why Choose NEXGEN SOLUTIONS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            A trustworthy, client-first approach built on technical excellence, creative integrity, and proven commercial outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-[#D71920]/15 flex items-center justify-center mb-6 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#D71920] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Advantage 0{idx + 1}</span>
                <span className="text-[#D71920]">Verified Practice</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
