import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { INSTRUCTORS, Instructor } from '../data/danceData';

export const InstructorsSection: React.FC = () => {
  const [activeInstructor, setActiveInstructor] = useState<Instructor>(INSTRUCTORS[0]);

  return (
    <section id="instructors" className="py-28 bg-[#FAF6F0] text-[#26160F] relative border-t border-[#E5D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-2">
              <span>05. The Faculty & Choreographers</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-none">
              MEET THE INSTRUCTORS
            </h2>
          </div>
          <p className="text-[#5C3D2E] text-sm sm:text-base max-w-md font-light leading-relaxed">
            Master artists who have trained with top crews globally, brought together by a shared passion for patient, rigorous mentoring.
          </p>
        </div>

        {/* 3 Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor) => {
            const isSelected = activeInstructor.id === instructor.id;

            return (
              <div
                key={instructor.id}
                onClick={() => setActiveInstructor(instructor)}
                className={`group rounded-2xl overflow-hidden bg-[#FFFDFB] border transition-all duration-300 flex flex-col cursor-pointer shadow-sm ${
                  isSelected
                    ? 'border-[#26160F] ring-1 ring-[#26160F] shadow-lg shadow-[#26160F]/10'
                    : 'border-[#E5D9CB] hover:border-[#26160F]/30'
                }`}
              >
                {/* Portrait Image */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={instructor.image}
                    alt={`${instructor.name} - ${instructor.role}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Specialty Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#FAF6F0] bg-[#26160F]/80 backdrop-blur-md px-3 py-1 rounded shadow-sm">
                      {instructor.specialty}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#FAF6F0]">
                    <span className="font-semibold">{instructor.experience}</span>
                    <span className="text-[#FAF6F0]/90">Resident Master</span>
                  </div>
                </div>

                {/* Info Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-[#26160F] group-hover:text-[#8C5535] transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-xs font-mono text-[#8C5535] mb-3 font-semibold">
                      {instructor.role}
                    </p>
                    <p className="text-sm text-[#5C3D2E] font-normal leading-relaxed mb-4">
                      {instructor.bio}
                    </p>
                  </div>

                  {/* Instructor Signature Style */}
                  <div className="pt-4 border-t border-[#E5D9CB] space-y-2">
                    <div className="text-[11px] font-mono text-[#8C5535] font-bold uppercase">
                      Signature Technique:
                    </div>
                    <div className="text-xs text-[#26160F] italic font-medium">
                      "{instructor.signatureStyle}"
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Instructor Spotlight Quote */}
        <div className="mt-12 p-8 rounded-2xl bg-[#F3ECE2] border border-[#E5D9CB] flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="p-3.5 rounded-full bg-[#FFFDFB] text-[#8C5535] shrink-0 border border-[#E5D9CB] shadow-sm">
            <Quote className="w-8 h-8" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg sm:text-xl font-light text-[#26160F] italic leading-relaxed">
              "{activeInstructor.quote}"
            </p>
            <div className="mt-2 text-xs font-mono text-[#5C3D2E]">
              <span className="text-[#26160F] font-bold">{activeInstructor.name}</span>
              <span className="mx-2 text-[#8C5535]">·</span>
              <span>{activeInstructor.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
