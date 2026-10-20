import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { studioBeat } from '../utils/audioBeat';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const active = studioBeat.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { label: 'Experience', href: '#opening-cinematic' },
    { label: 'Styles', href: '#dance-styles' },
    { label: 'Schedule', href: '#class-schedule' },
    { label: 'Pricing', href: '#membership-pricing' },
    { label: 'Instructors', href: '#instructors' },
    { label: 'Studio', href: '#inside-studio' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F0]/92 backdrop-blur-md border-b border-[#E5D9CB] py-3.5 shadow-md shadow-[#26160F]/5'
            : 'bg-gradient-to-b from-[#FAF6F0]/90 via-[#FAF6F0]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl sm:text-2xl font-display font-extrabold tracking-wider text-[#26160F] uppercase whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26160F]"
          >
            <span className="text-[#26160F] group-hover:text-[#8C5535] transition-colors">MOTION HOUSE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C5535] inline-block shadow-sm" />
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#3D271D]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#8C5535] transition-colors tracking-wide whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#26160F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Audio Beat Affordance */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Beat Synthesizer Toggle */}
            <button
              onClick={handleToggleAudio}
              type="button"
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all border ${
                isPlayingAudio
                  ? 'bg-[#26160F] text-[#FAF6F0] border-[#26160F] shadow-sm'
                  : 'bg-[#F3ECE2] text-[#3D271D] border-[#E5D9CB] hover:border-[#26160F] hover:text-[#26160F]'
              }`}
              title={isPlayingAudio ? 'Stop studio beat' : 'Feel the studio beat (92 BPM lo-fi synth groove)'}
              aria-label={isPlayingAudio ? 'Stop studio beat' : 'Play studio beat'}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#FAF6F0] animate-pulse" />
                  <span className="tracking-wide">BEAT ON</span>
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-3 bg-[#FAF6F0] animate-[pulse_0.4s_infinite]" />
                    <span className="w-0.5 h-1.5 bg-[#FAF6F0] animate-[pulse_0.6s_infinite]" />
                    <span className="w-0.5 h-2.5 bg-[#FAF6F0] animate-[pulse_0.5s_infinite]" />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#3D271D]/70" />
                  <span className="tracking-wide">STUDIO BEAT</span>
                </>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onBookClick}
              type="button"
              className="bg-[#26160F] hover:bg-[#3D271D] text-[#FAF6F0] px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md transition-all shadow-md shadow-[#26160F]/20 whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26160F]"
            >
              <span>Book Class</span>
              <ArrowUpRight className="w-4 h-4 hidden sm:inline-block text-[#FAF6F0]" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-[#26160F] hover:text-[#8C5535] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF6F0]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-12 flex flex-col justify-between border-b border-[#E5D9CB] animate-in fade-in duration-200">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold uppercase tracking-wider text-[#26160F] hover:text-[#8C5535] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#E5D9CB] flex flex-col gap-4">
            <button
              onClick={handleToggleAudio}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F3ECE2] border border-[#E5D9CB] text-[#26160F] text-sm font-semibold"
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#8C5535]" />
                  <span>Pause Studio Beat</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Enable Studio Beat Groove (92 BPM)</span>
                </>
              )}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 bg-[#26160F] text-[#FAF6F0] font-bold uppercase tracking-wider text-sm rounded-lg shadow-lg shadow-[#26160F]/30"
            >
              Book Your First Class (₹399 Trial)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
