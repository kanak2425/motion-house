import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/danceData';

export const StudioGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Choreography', 'Practice', 'Battles', 'Studio Space'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="inside-studio" className="py-28 bg-[#F3ECE2] text-[#26160F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-2">
              <span>06. Spaces, Cyphers & Rehearsals</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-none">
              INSIDE THE STUDIO
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#26160F] text-[#FAF6F0] shadow-sm'
                    : 'bg-[#FAF6F0] text-[#3D271D] hover:bg-[#E5D9CB] border border-[#E5D9CB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden bg-neutral-900 border border-[#E5D9CB] hover:border-[#26160F]/50 cursor-pointer ${
                item.span || 'col-span-1'
              } h-80 sm:h-96 shadow-md shadow-[#26160F]/5`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FAF6F0] bg-[#26160F]/80 backdrop-blur-md px-2.5 py-1 rounded shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Zoom Trigger Affordance */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-[#FAF6F0]/85 text-[#26160F] border border-[#E5D9CB]">
                <Eye className="w-4 h-4 text-[#26160F]" />
              </div>

              {/* Caption Card at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 transform group-hover:-translate-y-1 transition-transform">
                <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-[#FAF6F0] group-hover:text-[#F3ECE2] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#FAF6F0]/80 font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Specs Footer Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFFDFB] border border-[#E5D9CB] grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono text-xs shadow-sm">
          <div>
            <span className="text-[#8C5535] font-bold block">Floor System:</span>
            <span className="text-[#26160F] font-semibold">Sprung Hardwood Maple</span>
          </div>
          <div>
            <span className="text-[#8C5535] font-bold block">Mirror Coverage:</span>
            <span className="text-[#26160F] font-semibold">Full Wall Acoustic Bevel</span>
          </div>
          <div>
            <span className="text-[#8C5535] font-bold block">Audio Monitoring:</span>
            <span className="text-[#26160F] font-semibold">Dynacord Dual 15" Subs</span>
          </div>
          <div>
            <span className="text-[#8C5535] font-bold block">HVAC Air Flow:</span>
            <span className="text-[#26160F] font-semibold">Fresh Air HEPA Circulators</span>
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxIndex(null)}
            type="button"
            className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF6F0]/20 hover:bg-[#FAF6F0] hover:text-[#26160F] text-[#FAF6F0] z-20 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            type="button"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#FAF6F0]/20 hover:bg-[#FAF6F0] hover:text-[#26160F] text-[#FAF6F0] z-20 transition-transform active:scale-90"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            type="button"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#FAF6F0]/20 hover:bg-[#FAF6F0] hover:text-[#26160F] text-[#FAF6F0] z-20 transition-transform active:scale-90"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-[#FAF6F0]/20"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-mono text-[#FAF6F0]/80 uppercase tracking-widest font-semibold">
                {filteredItems[lightboxIndex].category} · Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="text-2xl font-display font-bold uppercase text-[#FAF6F0] mt-1">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#FAF6F0]/80 font-light mt-1">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
