import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ExternalLink, Check, X, Eye } from 'lucide-react';
import { SVG_FALLBACKS } from '../assets';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'uiux' | 'branding' | 'media'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'web', label: 'Website Development' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'branding', label: 'Graphic & Branding' },
    { id: 'media', label: 'Video & Photo Editing' },
  ] as const;

  const filteredProjects = activeFilter === 'all' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-2">
            Portfolio & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Our Work & Sample Showcase
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            A curated gallery demonstrating our capabilities across modern web architecture, digital branding, interactive interface design, and multimedia production.
          </p>
          <div className="mt-2 text-xs text-neutral-500 italic">
            * All showcase projects below are representative demonstration samples displaying NEXGEN SOLUTIONS engineering and design capabilities.
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-100 rounded-xl max-w-max mb-10 border border-neutral-200">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === tab.id
                  ? 'bg-white text-neutral-900 shadow-xs border border-neutral-200/80'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-neutral-300 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = SVG_FALLBACKS.techWorkspace;
                    }}
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/95 text-neutral-900 text-xs font-semibold rounded-lg shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                      <Eye className="w-3.5 h-3.5 text-[#D71920]" />
                      <span>View Project Specs</span>
                    </span>
                  </div>

                  {/* Top Subtle Status Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-neutral-800 shadow-xs">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 mb-1.5 font-medium">
                    <span className="text-[#D71920] font-semibold">{project.sampleBadge}</span>
                    {project.metrics && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{project.metrics}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#D71920] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                    {project.deliverables.slice(0, 3).map((d, i) => (
                      <span key={i} className="text-[11px] text-neutral-600 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200/60">
                        {d}
                      </span>
                    ))}
                    {project.deliverables.length > 3 && (
                      <span className="text-[11px] text-neutral-400 self-center">
                        +{project.deliverables.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-5 pt-0">
                <span className="text-xs font-semibold text-[#D71920] flex items-center gap-1 group-hover:underline">
                  <span>Explore Details</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full bg-neutral-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = SVG_FALLBACKS.techWorkspace;
                  }}
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-1">
                  <span className="text-[#D71920] font-bold">{selectedProject.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.sampleBadge}</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900">
                  {selectedProject.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3">
                    Project Deliverables & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700 bg-neutral-50 p-2.5 rounded-lg border border-neutral-200/80">
                        <Check className="w-4 h-4 text-[#D71920] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <div className="text-xs text-neutral-500">
                    Engineered & designed by NEXGEN SOLUTIONS
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(null);
                      const contactElem = document.querySelector('#contact');
                      if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 bg-[#D71920] text-white text-xs font-semibold rounded-lg hover:bg-[#B5141A] transition-colors"
                  >
                    Request Similar Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
