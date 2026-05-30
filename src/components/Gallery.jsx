import React from 'react';
import { Sparkles } from 'lucide-react';

export const Gallery = () => {
  const photos = [
    {
      src: 'assets/hero_shawarma.png',
      title: 'The Royal Wrap',
      subtitle: 'Charcoal roasted and toasted saj',
      className: 'span-2'
    },
    {
      src: 'assets/charcoal_rotisserie.png',
      title: 'Flame & Spices',
      subtitle: 'Slow rotisserie roasting skewers',
      className: 'row-2'
    },
    {
      src: 'assets/shawarma_plate.png',
      title: 'The Sultan Platter',
      subtitle: 'Gourmet plates served with rich dips',
      className: ''
    },
    {
      src: 'assets/arabic_sweets.png',
      title: 'Golden Treasures',
      subtitle: 'Luxurious pastries, baklava & kunafa',
      className: ''
    },
    {
      src: 'assets/truffle_shawarma.png',
      title: 'Truffle Masterpiece',
      subtitle: 'Signature wrap infused with white-truffle toum',
      className: 'span-2'
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

      <div className="container-max relative z-10">
        
        {/* Title Block */}
        <div className="section-header">
          <h2 className="section-subtitle">
            A Feast for the Eyes
          </h2>
          <h3 
            className="section-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Gourmet Photography
          </h3>
          <p className="section-header-desc">
            A visual journey into our kitchen, showcasing the colors, textures, and luxury of Bachandi's kitchen.
          </p>
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="gallery-grid">
          {photos.map((photo, idx) => (
            <div 
              key={idx}
              className={`gallery-item ${photo.className}`}
            >
              {/* Image */}
              <img 
                src={photo.src} 
                alt={photo.title}
                className="gallery-img"
              />

              {/* Hover Dark Overlay & Text Reveal */}
              <div 
                className="gallery-overlay"
                style={{ background: 'linear-gradient(to top, rgba(12,4,4,0.95) 0%, rgba(12,4,4,0.4) 60%, transparent 100%)' }}
              >
                <span className="gallery-overlay-tag">
                  <Sparkles className="w-3 h-3 fill-[#d4af37]" /> culinary art
                </span>
                <h4 
                  className="gallery-overlay-title"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {photo.title}
                </h4>
                <p className="gallery-overlay-subtitle">
                  {photo.subtitle}
                </p>
              </div>

              {/* Static Border Accent */}
              <div className="gallery-border" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
