import React, { useState } from 'react';
import { EMPLOYEES_DATA, Employee } from '../data/teamData';
import { 
  RotateCw, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Users,
  ExternalLink,
  BadgeCheck
} from 'lucide-react';
import { IMAGES } from '../assets';

interface TeamCardsProps {
  onCopyNotice?: (msg: string) => void;
}

export const TeamCards: React.FC<TeamCardsProps> = ({ onCopyNotice }) => {
  // Track flip state per card id
  const [flippedCards, setFlippedCards] = useState<{ [id: string]: boolean }>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopy = (text: string, label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      if (onCopyNotice) {
        onCopyNotice(`${label} copied to clipboard!`);
      }
    });
  };

  return (
    <section id="team" className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Dedicated Core Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Our Key Team Members
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Meet the talent behind our digital engineering and creative production. Click any card to flip and view direct contact credentials.
          </p>
        </div>

        {/* 4 Employee Cards Grid with 3D Flip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {EMPLOYEES_DATA.map((emp: Employee) => {
            const isFlipped = !!flippedCards[emp.id];

            return (
              <div
                key={emp.id}
                className="perspective-1200 w-full h-[485px] cursor-pointer select-none group"
                onClick={() => toggleFlip(emp.id)}
                title="Click to flip card"
              >
                <div
                  className="preserve-3d relative w-full h-full rounded-2xl transition-transform duration-500 ease-out shadow-sm group-hover:shadow-xl"
                  style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* ================= FRONT OF EMPLOYEE CARD ================= */}
                  <div
                    className="backface-hidden absolute inset-0 w-full h-full rounded-2xl bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between p-5"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                    }}
                  >
                    {/* Top Branding & Department Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <div className="flex items-center gap-2">
                        <img
                          src={IMAGES.logo}
                          alt="NEXGEN SOLUTIONS Logo"
                          className="w-7 h-7 object-contain shrink-0"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (e.currentTarget.src !== IMAGES.logoExternal) {
                              e.currentTarget.src = IMAGES.logoExternal;
                            }
                          }}
                        />
                        <span className="text-[11px] font-bold tracking-tight text-neutral-900 uppercase">
                          NEXGEN
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-[#D71920] bg-red-50 px-2 py-0.5 rounded">
                        {emp.department}
                      </span>
                    </div>

                    {/* Employee Picture or Monogram */}
                    <div className="my-2 flex flex-col items-center">
                      {emp.image ? (
                        <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-neutral-200 shadow-md group-hover:border-[#D71920] transition-colors bg-white">
                          <img
                            src={emp.image}
                            alt={`${emp.name} - ${emp.designation}`}
                            className="w-full h-full object-cover object-[center_20%]"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            onError={(e) => {
                              if (emp.imageExternal && e.currentTarget.src !== emp.imageExternal) {
                                e.currentTarget.src = emp.imageExternal;
                              }
                            }}
                          />
                          <div className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" title="Active on duty" />
                        </div>
                      ) : (
                        <div className="relative w-32 h-32 rounded-2xl border-2 border-neutral-200 shadow-md group-hover:border-[#D71920] transition-colors bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
                          <span className="text-3xl font-black tracking-tight text-white">
                            {emp.name
                              .split(' ')
                              .map((part) => part[0])
                              .join('')
                              .slice(0, 2)
                              .toUpperCase()}
                          </span>
                          <div className="absolute bottom-2.5 text-[9px] font-mono uppercase tracking-widest text-[#D71920] font-bold">
                            NEXGEN
                          </div>
                          <div className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" title="Active on duty" />
                        </div>
                      )}

                      {/* Name & Designation */}
                      <h3 className="mt-3 text-lg font-extrabold text-neutral-900 text-center leading-tight">
                        {emp.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#D71920] text-center mt-1">
                        {emp.designation}
                      </div>
                    </div>

                    {/* Emp ID, Joining Date & Experience */}
                    <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-100 space-y-1.5 text-xs text-neutral-600">
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
                        <span className="text-neutral-500">Emp ID:</span>
                        <span className="font-mono font-bold text-neutral-900 tabular-nums">{emp.empId}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
                        <span className="text-neutral-500">Joining:</span>
                        <span className="font-semibold text-neutral-800 tabular-nums">{emp.joiningDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
                        <span>{emp.experience}</span>
                      </div>
                    </div>

                    {/* Flip Trigger CTA */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500">
                      <span className="text-[11px]">Click to view details</span>
                      <span className="inline-flex items-center gap-1 text-[#D71920] font-semibold">
                        <span>Flip Card</span>
                        <RotateCw className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      </span>
                    </div>
                  </div>

                  {/* ================= BACK OF EMPLOYEE CARD (BLACK / DARK THEMED) ================= */}
                  <div
                    className="backface-hidden absolute inset-0 w-full h-full rounded-2xl bg-neutral-900 text-white border border-neutral-800 overflow-hidden flex flex-col justify-between p-5 shadow-2xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    {/* Background red glow accent */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#D71920]/20 rounded-full blur-xl pointer-events-none" />

                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-800 relative z-10">
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">
                          {emp.name}
                        </div>
                        <div className="text-[11px] text-[#D71920] font-medium">
                          {emp.designation}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center shadow-sm shrink-0">
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
                    </div>

                    {/* Contact Credentials (Email, Phone, Address) */}
                    <div className="space-y-3 relative z-10 text-xs">
                      {/* Email */}
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">
                          Official Email
                        </div>
                        <div className="flex items-center justify-between bg-neutral-800/80 rounded-lg p-2 border border-neutral-700/60">
                          <a
                            href={`mailto:${emp.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-neutral-200 hover:text-white flex items-center gap-1.5 truncate text-[11px]"
                          >
                            <Mail className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
                            <span className="truncate">{emp.email}</span>
                          </a>
                          <button
                            type="button"
                            onClick={(e) => handleCopy(emp.email, `${emp.name}'s Email`, e)}
                            className="p-1 text-neutral-400 hover:text-white"
                            title="Copy Email"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">
                          Contact Number
                        </div>
                        <div className="flex items-center justify-between bg-neutral-800/80 rounded-lg p-2 border border-neutral-700/60">
                          <a
                            href={`tel:${emp.phone.replace(/\s+/g, '')}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-neutral-200 hover:text-white flex items-center gap-1.5 text-[11px] font-semibold"
                          >
                            <Phone className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
                            <span>{emp.phone}</span>
                          </a>
                          <button
                            type="button"
                            onClick={(e) => handleCopy(emp.phone, `${emp.name}'s Phone`, e)}
                            className="p-1 text-neutral-400 hover:text-white"
                            title="Copy Phone"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Office Address */}
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">
                          Office Address
                        </div>
                        <div className="flex items-start gap-1.5 text-[10px] text-neutral-300 leading-tight bg-neutral-800/80 rounded-lg p-2 border border-neutral-700/60">
                          <MapPin className="w-3 h-3 text-[#D71920] shrink-0 mt-0.5" />
                          <span>Store No 17, 3rd Floor, Elante Business Tower, Ind. Area Phase I, Chandigarh</span>
                        </div>
                      </div>

                      {/* Key Skills */}
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-1">
                          Core Specialization
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {emp.skills.slice(0, 3).map((skill, sIdx) => (
                            <span key={sIdx} className="text-[10px] bg-neutral-800 text-neutral-200 px-1.5 py-0.5 rounded border border-neutral-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Return Button */}
                    <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                      <span className="text-[11px] font-mono tabular-nums">ID: {emp.empId}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(emp.id);
                        }}
                        className="text-[#D71920] hover:text-red-400 flex items-center gap-1 text-[11px] font-semibold"
                      >
                        <span>Show Front</span>
                        <RotateCw className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
