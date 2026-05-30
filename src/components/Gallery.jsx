import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

export const Gallery = () => {
  const photos = [
    {
      src: 'assets/hero_shawarma.png',
      title: 'The Royal Wrap',
      subtitle: 'Charcoal roasted and toasted saj',
      className: 'md:col-span-2 md:row-span-1'
    },
    {
      src: 'assets/charcoal_rotisserie.png',
      title: 'Flame & Spices',
      subtitle: 'Slow rotisserie roasting skewers',
      className: 'md:col-span-1 md:row-span-2'
    },
    {
      src: 'assets/shawarma_plate.png',
      title: 'The Sultan Platter',
      subtitle: 'Gourmet plates served with rich dips',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      src: 'assets/arabic_sweets.png',
      title: 'Golden Treasures',
      subtitle: 'Luxurious pastries, baklava & kunafa',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      src: 'assets/truffle_shawarma.png',
      title: 'Truffle Masterpiece',
      subtitle: 'Signature wrap infused with white-truffle toum',
      className: 'md:col-span-2 md:row-span-1'
    }
  ];

  return (
    <section 
      id="gallery" 
      className="section-padding relative overflow-hidden bg-islamic-pattern"
      style={{
        backgroundColor: 'var(--color-bg-darker)'
      }}
    >
      {/* Ambient glows */}
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] ambient-glow-red rounded-full opacity-15 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[350px] h-[350px] ambient-glow-gold rounded-full opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold-gradient text-xs uppercase tracking-widest font-semibold mb-3">
            A Feast for the Eyes
          </h2>
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Gourmet Photography
          </h3>
          <p className="text-gray-400">
            A visual journey into our kitchen, showcasing the colors, textures, and luxury of Bachandi's kitchen.
          </p>
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {photos.map((photo, idx) => (
            <div 
              key={idx}
              className={`relative overflow-hidden rounded-xl group border border-[#d4af37]/20 shadow-xl ${photo.className}`}
            >
              {/* Image */}
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Dark Overlay & Text Reveal */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#0c0404] via-[#0c0404]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-left"
                style={{ background: 'linear-gradient(to top, rgba(12,4,4,0.95) 0%, rgba(12,4,4,0.4) 60%, transparent 100%)' }}
              >
                <span className="inline-flex items-center gap-1 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3 fill-[#d4af37]" /> culinary art
                </span>
                <h4 
                  className="text-xl md:text-2xl font-bold text-[#f4edd8] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {photo.title}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  {photo.subtitle}
                </p>
              </div>

              {/* Static Border Accent */}
              <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-[#d4af37]/40 transition-colors duration-500 rounded-xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
