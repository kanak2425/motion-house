import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface WelcomeSectionProps {
  onLearnMore: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="welcome-manifesto" className="relative py-28 sm:py-36 bg-[#FAF6F0] text-[#26160F] overflow-hidden border-t border-[#E5D9CB]">
      {/* Background Soft Warm Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8C5535]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Manifesto & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-3">
              <span>01. The Motion House Philosophy</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-[0.95]">
              MORE THAN DANCE. <br />
              <span className="text-[#8C5535]">
                IT’S YOUR MOVEMENT.
              </span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[#3D271D] font-light leading-relaxed">
              Motion House was built on a simple conviction: rhythm is not an exclusive talent—it is an innate human impulse waiting for the right space to ignite.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#5C3D2E] font-normal leading-relaxed">
              Whether you are taking your very first step in a beginner groove class, refining complex syncopations as an aspiring commercial artist, or jumping into Friday night cyphers, our studios are engineered for growth without intimidation. Here, technique meets heart, and strangers become your crew.
            </p>

            {/* Studio Core Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                <div className="flex items-center gap-2 text-[#26160F] font-bold text-sm">
                  <Zap className="w-4 h-4 text-[#8C5535]" />
                  <span>Beginner-Safe Atmosphere</span>
                </div>
                <p className="mt-1.5 text-xs text-[#5C3D2E] leading-relaxed">
                  Zero judgment culture. Instructors break down choreography counts step-by-step from day one.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                <div className="flex items-center gap-2 text-[#26160F] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#8C5535]" />
                  <span>Sprung Timber Floors</span>
                </div>
                <p className="mt-1.5 text-xs text-[#5C3D2E] leading-relaxed">
                  Multi-tier sprung shock-absorption prevents knee and ankle fatigue during high-impact sessions.
                </p>
              </div>
            </div>

            {/* Action Link */}
            <div className="mt-8">
              <button
                onClick={onLearnMore}
                type="button"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-[#26160F] hover:text-[#8C5535] transition-colors group"
              >
                <span>Discover our weekly curriculum & timetable</span>
                <ArrowRight className="w-4 h-4 text-[#8C5535] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Image & Quantitative Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden border border-[#E5D9CB] group shadow-xl shadow-[#26160F]/5">
              <img
                src="/src/assets/images/studio_battle_cypher_1792512604823.jpg"
                alt="Motion House studio dancers during evening cypher and workshop"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#26160F]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FAF6F0] font-semibold">
                  Friday Rehearsal Cypher
                </span>
                <p className="mt-1 text-[#FAF6F0] text-sm font-medium">
                  Studio C · 40+ dancers in spontaneous freestyle training
                </p>
              </div>
            </div>

            {/* Quantitative Impact strip */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                <div className="text-3xl font-display font-extrabold text-[#26160F] tabular-nums tracking-tight">
                  3 Halls
                </div>
                <div className="text-xs text-[#5C3D2E] mt-1">Acoustically tuned sprung studios</div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                <div className="text-3xl font-display font-extrabold text-[#8C5535] tabular-nums tracking-tight">
                  18+
                </div>
                <div className="text-xs text-[#5C3D2E] mt-1">Weekly scheduled sessions</div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                <div className="text-3xl font-display font-extrabold text-[#26160F] tabular-nums tracking-tight">
                  450+
                </div>
                <div className="text-xs text-[#5C3D2E] mt-1">Active academy students</div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                <div className="text-3xl font-display font-extrabold text-[#26160F] tabular-nums tracking-tight">
                  100%
                </div>
                <div className="text-xs text-[#5C3D2E] mt-1">Original faculty choreography</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
