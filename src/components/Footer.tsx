import React from 'react';
import { Instagram, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#26160F] text-[#FAF6F0] border-t border-[#3D271D] pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#FAF6F0]/15">
          <div>
            <a
              href="#"
              className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-wider text-[#FAF6F0] flex items-center gap-2"
            >
              <span>MOTION HOUSE</span>
              <span className="w-2 h-2 rounded-full bg-[#D8C7B3] shadow-sm" />
            </a>
            <p className="mt-2 text-sm text-[#D8C7B3] font-display uppercase tracking-widest font-semibold">
              DANCE ACADEMY · “FEEL THE BEAT. OWN THE FLOOR.”
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xl sm:text-2xl font-display font-extrabold uppercase tracking-tight text-[#FAF6F0]">
              “EVERY BODY HAS A RHYTHM.”
            </span>
          </div>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs font-mono">
          <div>
            <h4 className="text-[#D8C7B3] uppercase font-bold tracking-wider mb-4">Academy</h4>
            <ul className="space-y-2 text-[#FAF6F0]/80">
              <li><a href="#opening-cinematic" className="hover:text-white transition-colors">Cinematic Opening</a></li>
              <li><a href="#welcome-manifesto" className="hover:text-white transition-colors">Philosophy & Floors</a></li>
              <li><a href="#dance-styles" className="hover:text-white transition-colors">Dance Disciplines</a></li>
              <li><a href="#inside-studio" className="hover:text-white transition-colors">Studio Spaces</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D8C7B3] uppercase font-bold tracking-wider mb-4">Training</h4>
            <ul className="space-y-2 text-[#FAF6F0]/80">
              <li><a href="#class-schedule" className="hover:text-white transition-colors">Weekly Timings</a></li>
              <li><a href="#membership-pricing" className="hover:text-white transition-colors">Passes & Rates</a></li>
              <li><a href="#instructors" className="hover:text-white transition-colors">Faculty Profiles</a></li>
              <li><a href="#book-trial" className="hover:text-white transition-colors">Trial Class Pass</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D8C7B3] uppercase font-bold tracking-wider mb-4">Studio Visit</h4>
            <p className="text-[#FAF6F0]/80 leading-relaxed">
              Level 2, The Warehouse District<br />
              42 Rhythm Boulevard<br />
              Bengaluru, KA 560038<br />
              +91 98200 44120
            </p>
          </div>

          <div>
            <h4 className="text-[#D8C7B3] uppercase font-bold tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#FAF6F0]/10 hover:bg-[#FAF6F0] hover:text-[#26160F] text-[#FAF6F0] transition-colors border border-[#FAF6F0]/20"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#FAF6F0]/10 hover:bg-[#FAF6F0] hover:text-[#26160F] text-[#FAF6F0] transition-colors border border-[#FAF6F0]/20"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#FAF6F0]/70 hover:text-white transition-colors font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright */}
        <div className="pt-8 border-t border-[#FAF6F0]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#FAF6F0]/60 gap-4">
          <div>
            © {new Date().getFullYear()} Motion House Dance Academy. All rights reserved.
          </div>
          <div>
            Demonstration website for creative arts education.
          </div>
        </div>
      </div>
    </footer>
  );
};
