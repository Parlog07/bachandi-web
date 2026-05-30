import React from 'react';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-islamic-pattern"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #200202 0%, #080202 100%)'
      }}
    >
      {/* Dynamic Lighting Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 ambient-glow-red rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 ambient-glow-gold rounded-full transform translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content Column */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4af37]/30 rounded-full bg-[#170a0a]/60 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-gold-light font-medium">An Immersive Culinary Arabic Night</span>
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Luxury Arabic <br />
            <span className="text-gold-gradient">Shawarma</span> Redefined
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            Step into the magical atmosphere of an Arabian night. Bachandi combines traditional, centuries-old recipes with premium cuts of meat, gourmet spices, and upscale street-food culture.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#menu" className="btn-primary text-center">
              Explore Our Menu
            </a>
            <a href="#contact" className="btn-secondary text-center">
              Find Our Location
            </a>
          </div>

          {/* Highlights Micro-Grid */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5 w-full">
            <div>
              <h3 className="text-2xl font-bold text-gold-light" style={{ fontFamily: 'var(--font-heading)' }}>100%</h3>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Premium Halal</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gold-light" style={{ fontFamily: 'var(--font-heading)' }}>18+</h3>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Secret Spices</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gold-light" style={{ fontFamily: 'var(--font-heading)' }}>24h</h3>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Slow Marinated</p>
            </div>
          </div>
        </div>

        {/* Right Media Column */}
        <div className="flex justify-center relative">
          {/* Backing Glow Ring */}
          <div className="absolute w-[80%] aspect-square rounded-full border border-[#d4af37]/20 flex items-center justify-center animate-pulse-glow" style={{ animationDuration: '6s' }}>
            <div className="w-[85%] aspect-square rounded-full border border-[#8b0000]/30"></div>
          </div>

          {/* Floating Premium Shawarma wrap */}
          <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden shadow-2xl animate-float border border-[#d4af37]/20">
            <img 
              src="assets/hero_shawarma.png" 
              alt="Premium Bachandi Shawarma wrap served with garlic sauce"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay on bottom of image for sleek look */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080202] via-transparent to-transparent opacity-60 pointer-events-none" style={{ background: 'linear-gradient(to top, #080202 0%, transparent 60%)' }} />
          </div>

          {/* Ambient Lighting Overlay */}
          <div className="absolute -inset-4 ambient-glow-amber opacity-40 mix-blend-screen pointer-events-none" />
        </div>
      </div>

      {/* Elegant Bottom Arch Divider in SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none" style={{ transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] text-bg-darker" style={{ fill: '#080202' }}>
          <path d="M0,0 C150,90 350,120 600,120 C850,120 1050,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
