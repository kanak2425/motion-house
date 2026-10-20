import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FloatingMobileCTAProps {
  onBookClick: () => void;
}

export const FloatingMobileCTA: React.FC<FloatingMobileCTAProps> = ({ onBookClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      const bookingEl = document.getElementById('book-trial');
      let inBooking = false;
      if (bookingEl) {
        const rect = bookingEl.getBoundingClientRect();
        inBooking = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setIsVisible(scrolled && !inBooking);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-40 lg:hidden pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="max-w-md mx-auto pointer-events-auto">
        <button
          onClick={onBookClick}
          type="button"
          className="w-full py-3.5 px-5 bg-[#26160F] hover:bg-[#3D271D] text-[#FAF6F0] font-bold uppercase tracking-wider text-xs rounded-xl shadow-2xl shadow-[#26160F]/30 flex items-center justify-between border border-[#3D271D] active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D8C7B3]" />
            <span>Book Your First Class</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px] bg-[#FAF6F0]/15 px-2.5 py-1 rounded text-[#FAF6F0]">
            <span>₹399 Trial</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF6F0]" />
          </div>
        </button>
      </div>
    </div>
  );
};
