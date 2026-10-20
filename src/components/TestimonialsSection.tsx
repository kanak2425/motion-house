import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/danceData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#FAF6F0] text-[#26160F] relative border-t border-[#E5D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-3">
            <span>07. Student Stories & Culture</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-none">
            VOICES FROM THE FLOOR
          </h2>
          <p className="mt-4 text-[#5C3D2E] text-sm sm:text-base font-light leading-relaxed">
            How regular people transform confidence, musicality, and physical stamina through intentional training.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#FFFDFB] border border-[#E5D9CB] p-8 flex flex-col justify-between hover:border-[#26160F]/30 transition-all duration-300 relative group shadow-sm hover:shadow-md"
            >
              <div>
                <Quote className="w-8 h-8 text-[#8C5535] mb-6 group-hover:text-[#26160F] transition-colors" />

                <p className="text-base text-[#3D271D] font-normal leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 border-t border-[#E5D9CB] flex flex-col">
                <span className="font-display font-bold uppercase text-lg text-[#26160F]">
                  {t.name}
                </span>
                <span className="text-xs text-[#5C3D2E]">
                  {t.role}
                </span>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-mono text-[#8C5535] font-semibold">
                  <span>{t.style}</span>
                  <span>·</span>
                  <span className="text-[#5C3D2E]">{t.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demonstration Disclaimer */}
        <div className="mt-12 text-center text-[11px] font-mono text-[#5C3D2E]">
          * Illustrative demonstration testimonials representing representative student learning trajectories.
        </div>
      </div>
    </section>
  );
};
