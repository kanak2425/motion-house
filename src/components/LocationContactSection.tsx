import React, { useState } from 'react';
import { MapPin, Phone, Clock, ChevronDown, Instagram, Youtube, Car, Train } from 'lucide-react';
import { FAQ_ITEMS } from '../data/danceData';

export const LocationContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [transitTab, setTransitTab] = useState<'metro' | 'driving'>('metro');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="location-contact" className="py-28 bg-[#FAF6F0] text-[#26160F] relative border-t border-[#E5D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details, Studio Hours & Transit */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-2">
                <span>09. Visit & Connect</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-none">
                LOCATION & HOURS
              </h2>
              <p className="mt-4 text-[#5C3D2E] text-sm sm:text-base font-light leading-relaxed">
                Centrally located in the heart of the arts warehouse quarter, designed for easy public transit access and late-night rehearsals.
              </p>

              {/* Contact Information Grid */}
              <div className="mt-8 space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                  <MapPin className="w-4 h-4 text-[#8C5535] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#26160F] font-semibold block text-sm font-display uppercase tracking-wide">Studio Address</span>
                    <span className="text-[#3D271D]">Level 2, The Warehouse District, 42 Rhythm Boulevard</span>
                    <span className="text-[#8C5535] block mt-0.5">Bengaluru, KA 560038</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                    <div className="flex items-center gap-2 text-[#8C5535] mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-[#26160F] font-semibold text-sm font-display uppercase">Studio Hours</span>
                    </div>
                    <div className="text-[#3D271D]">Mon–Fri: 08:00 AM – 10:00 PM</div>
                    <div className="text-[#5C3D2E] mt-0.5">Sat–Sun: 08:30 AM – 09:00 PM</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                    <div className="flex items-center gap-2 text-[#8C5535] mb-1">
                      <Phone className="w-4 h-4" />
                      <span className="text-[#26160F] font-semibold text-sm font-display uppercase">Direct Contact</span>
                    </div>
                    <div className="text-[#3D271D]">+91 98200 44120</div>
                    <div className="text-[#5C3D2E] mt-0.5">hello@motionhouse.dance</div>
                  </div>
                </div>
              </div>

              {/* Transit & Access Toggle */}
              <div className="mt-6 p-4 rounded-xl bg-[#FFFDFB] border border-[#E5D9CB] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8C5535] font-bold">
                    Getting Here
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setTransitTab('metro')}
                      className={`px-3 py-1 text-[11px] font-mono rounded transition-colors ${
                        transitTab === 'metro' ? 'bg-[#26160F] text-[#FAF6F0] font-bold shadow-sm' : 'text-[#5C3D2E] hover:text-[#26160F]'
                      }`}
                    >
                      Metro
                    </button>
                    <button
                      onClick={() => setTransitTab('driving')}
                      className={`px-3 py-1 text-[11px] font-mono rounded transition-colors ${
                        transitTab === 'driving' ? 'bg-[#26160F] text-[#FAF6F0] font-bold shadow-sm' : 'text-[#5C3D2E] hover:text-[#26160F]'
                      }`}
                    >
                      Car / Bike
                    </button>
                  </div>
                </div>

                {transitTab === 'metro' ? (
                  <div className="flex items-center gap-2.5 text-xs text-[#3D271D]">
                    <Train className="w-4 h-4 text-[#8C5535] shrink-0" />
                    <span>8-minute walk from Rhythm Arts Metro Station (Purple Line, Exit Gate 2).</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5 text-xs text-[#3D271D]">
                    <Car className="w-4 h-4 text-[#8C5535] shrink-0" />
                    <span>Free basement two-wheeler & four-wheeler parking with security valet for dancers.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-[#E5D9CB] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8C5535] font-bold uppercase">
                Follow The Academy:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#FFFDFB] hover:bg-[#26160F] hover:text-[#FAF6F0] text-[#26160F] transition-colors border border-[#E5D9CB] shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#FFFDFB] hover:bg-[#26160F] hover:text-[#FAF6F0] text-[#26160F] transition-colors border border-[#E5D9CB] shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-2">
              <span>Answers Before Your First Class</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-[#26160F] mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h3>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm ${
                      isOpen
                        ? 'bg-[#FFFDFB] border-[#26160F] ring-1 ring-[#26160F]/30'
                        : 'bg-[#FFFDFB] border-[#E5D9CB] hover:border-[#26160F]/30'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-display font-bold uppercase text-base text-[#26160F]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#8C5535] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-[#5C3D2E] font-normal leading-relaxed border-t border-[#E5D9CB] animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
