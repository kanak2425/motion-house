import React, { useState } from 'react';
import { ArrowUpRight, Info, X, CheckCircle2 } from 'lucide-react';
import { DANCE_STYLES, DanceStyle } from '../data/danceData';

interface DanceStylesSectionProps {
  onSelectStyle: (styleName: string) => void;
}

export const DanceStylesSection: React.FC<DanceStylesSectionProps> = ({ onSelectStyle }) => {
  const [selectedStyleModal, setSelectedStyleModal] = useState<DanceStyle | null>(null);

  return (
    <section id="dance-styles" className="py-28 bg-[#F3ECE2] text-[#26160F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-2">
              <span>02. Disciplines & Movement Tracks</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-none">
              EXPLORE DANCE STYLES
            </h2>
          </div>
          <p className="text-[#5C3D2E] text-sm sm:text-base max-w-md font-light leading-relaxed">
            From urban grooves to lyrical floorwork and cinematic Bollywood, each discipline is designed to build musicality, stamina, and confidence.
          </p>
        </div>

        {/* 6 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DANCE_STYLES.map((style) => (
            <div
              key={style.id}
              className="group relative rounded-2xl overflow-hidden bg-[#FFFDFB] border border-[#E5D9CB] hover:border-[#26160F]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#26160F]/8"
            >
              {/* Card Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                <img
                  src={style.image}
                  alt={`${style.name} dance style at Motion House`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Level Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FAF6F0] bg-[#26160F]/80 backdrop-blur-md px-3 py-1 rounded shadow-sm">
                    {style.level}
                  </span>
                </div>

                {/* Quick Info Modal Trigger */}
                <button
                  onClick={() => setSelectedStyleModal(style)}
                  type="button"
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF6F0]/80 hover:bg-[#26160F] text-[#26160F] hover:text-[#FAF6F0] border border-[#E5D9CB] transition-colors"
                  title="View style curriculum & details"
                  aria-label={`View ${style.name} details`}
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-[#26160F] group-hover:text-[#8C5535] transition-colors">
                      {style.name}
                    </h3>
                    <span className="text-xs font-mono text-[#8C5535] shrink-0 font-semibold">
                      {style.bpm}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#8C5535] mb-3 font-semibold">
                    {style.tagline}
                  </p>

                  <p className="text-sm text-[#5C3D2E] font-normal leading-relaxed mb-6">
                    {style.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#E5D9CB] flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedStyleModal(style)}
                    type="button"
                    className="text-xs font-mono text-[#5C3D2E] hover:text-[#26160F] transition-colors"
                  >
                    View Syllabus
                  </button>

                  <button
                    onClick={() => onSelectStyle(style.name)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#26160F] hover:text-[#8C5535] group/btn transition-colors"
                  >
                    <span>Explore Classes</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8C5535] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Style Details Modal */}
      {selectedStyleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#FFFDFB] border border-[#E5D9CB] p-6 sm:p-8 text-[#26160F] shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedStyleModal(null)}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF6F0] hover:bg-[#26160F] text-[#26160F] hover:text-[#FAF6F0] border border-[#E5D9CB] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-[#8C5535] font-bold">
              Curriculum & Class Guide
            </span>

            <h3 className="mt-1 text-3xl font-display font-extrabold uppercase tracking-tight text-[#26160F]">
              {selectedStyleModal.name}
            </h3>

            <p className="mt-2 text-sm text-[#5C3D2E] font-normal leading-relaxed">
              {selectedStyleModal.description}
            </p>

            <div className="mt-6 pt-6 border-t border-[#E5D9CB]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C5535] font-bold mb-3">
                Core Focus Modules & Syllabus
              </h4>
              <ul className="space-y-2.5">
                {selectedStyleModal.curriculum.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-[#26160F]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5535] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs bg-[#FAF6F0] p-4 rounded-xl border border-[#E5D9CB] font-mono">
              <div>
                <span className="text-[#5C3D2E] block">Tempo Range:</span>
                <span className="text-[#26160F] font-bold">{selectedStyleModal.bpm}</span>
              </div>
              <div>
                <span className="text-[#5C3D2E] block">Experience Level:</span>
                <span className="text-[#26160F] font-bold">{selectedStyleModal.level}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  const styleName = selectedStyleModal.name;
                  setSelectedStyleModal(null);
                  onSelectStyle(styleName);
                }}
                type="button"
                className="flex-1 py-3.5 bg-[#26160F] hover:bg-[#3D271D] text-[#FAF6F0] font-bold uppercase tracking-wider text-xs rounded-xl transition-colors text-center shadow-lg shadow-[#26160F]/15"
              >
                View {selectedStyleModal.name} In Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
