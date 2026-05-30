import React from 'react';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-section bg-islamic-pattern"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #200202 0%, #0c0202 100%)'
      }}
    >
      {/* Traditional Arabic Arch border outline */}
      <div className="arabic-arch-frame" />

      {/* Dynamic Lighting Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 ambient-glow-red rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 ambient-glow-gold rounded-full transform translate-x-1/2 translate-y-1/2" />

      <div className="hero-grid container-max">
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">An Immersive Culinary Arabic Night</span>
          </div>

          <h1 
            className="hero-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Luxury Arabic <br />
            <span className="text-gold-gradient">Shawarma</span> Redefined
          </h1>

          <p className="hero-desc">
            Step into the magical atmosphere of an Arabian night. Bachandi combines traditional, centuries-old recipes with premium cuts of meat, gourmet spices, and upscale street-food culture.
          </p>

          {/* Action CTAs */}
          <div className="hero-ctas">
            <a href="#menu" className="btn-primary" style={{ textDecoration: 'none' }}>
              Explore Our Menu
            </a>
            <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Find Our Location
            </a>
          </div>

          {/* Highlights Micro-Grid */}
          <div className="hero-metrics">
            <div>
              <h3 className="hero-metric-num" style={{ fontFamily: 'var(--font-heading)' }}>100%</h3>
              <p className="hero-metric-label">Premium Halal</p>
            </div>
            <div>
              <h3 className="hero-metric-num" style={{ fontFamily: 'var(--font-heading)' }}>18+</h3>
              <p className="hero-metric-label">Secret Spices</p>
            </div>
            <div>
              <h3 className="hero-metric-num" style={{ fontFamily: 'var(--font-heading)' }}>24h</h3>
              <p className="hero-metric-label">Slow Marinated</p>
            </div>
          </div>
        </div>

        {/* Right Media Column */}
        <div className="hero-media">
          {/* Backing Glow Ring */}
          <div className="hero-backdrop-glow">
            <div className="hero-backdrop-inner"></div>
          </div>

          {/* Floating Premium Shawarma wrap */}
          <div className="hero-image-container animate-float">
            <img 
              src="assets/hero_shawarma.png" 
              alt="Premium Bachandi Shawarma wrap served with garlic sauce"
              className="hero-image"
            />
            {/* Dark gradient overlay on bottom of image for sleek look */}
            <div className="hero-image-overlay" />
          </div>

          {/* Ambient Lighting Overlay */}
          <div className="absolute -inset-4 ambient-glow-amber opacity-40 mix-blend-screen pointer-events-none" />
        </div>
      </div>

      {/* Bottom Arch Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none" style={{ transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '40px', fill: '#120303', display: 'block' }}>
          <path d="M0,0 C150,90 350,120 600,120 C850,120 1050,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
