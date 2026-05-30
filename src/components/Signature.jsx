import React from 'react';
import { Sparkles, Quote } from 'lucide-react';

export const Signature = () => {
  return (
    <section 
      id="signature" 
      className="section-padding relative overflow-hidden bg-islamic-pattern"
      style={{
        backgroundColor: 'var(--color-bg-dark)'
      }}
    >
      {/* Glow Effects */}
      <div className="absolute right-1/4 top-1/4 w-[400px] h-[400px] ambient-glow-gold rounded-full opacity-20 pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] ambient-glow-red rounded-full opacity-15 pointer-events-none" />

      <div className="container-max relative z-10">
        
        {/* Header Title */}
        <div className="section-header">
          <h2 className="section-subtitle">
            Culinary Masterpieces
          </h2>
          <h3 
            className="section-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Signature Selection
          </h3>
          <p className="section-header-desc">
            Exclusive creations crafted by our founder, elevating classic street food formulas with premium international ingredients.
          </p>
        </div>

        {/* Feature Split Grid Layout */}
        <div className="signature-grid">
          
          {/* Left Column: Image with Luxury Frame */}
          <div className="signature-media">
            {/* Decorative Borders */}
            <div className="signature-frame-1" />
            <div className="signature-frame-2" />
            
            {/* The Image Box */}
            <div className="signature-image-box">
              <img 
                src="assets/truffle_shawarma.png" 
                alt="Signature Black Truffle Shawarma"
                className="signature-image"
              />
              <div className="signature-image-badge">
                <Sparkles size={14} className="fill-[#080202]" /> Signature Masterpiece
              </div>
            </div>
          </div>

          {/* Right Column: Culinary Details */}
          <div className="signature-content-right">
            <h4 
              className="signature-title"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Black Truffle <br />
              <span className="text-gold-gradient">Chicken Shawarma</span>
            </h4>
            
            <span 
              className="signature-price"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              $18.00
            </span>

            <p className="signature-desc">
              Our signature flatbread wrapped snugly around juicy, charcoal-finished roasted chicken breast. What sets it apart is a generous drizzle of house-made Italian black winter truffle oil blended into our secret recipe garlic toum, paired with crispy sumac red onion rings and organic baby arugula.
            </p>

            {/* Chef Quote Card */}
            <div className="signature-quote-box glass-panel">
              <Quote className="signature-quote-icon" />
              <p className="signature-quote-text">
                "I wanted to merge the comforting street food comfort of my childhood in Cairo with the rich, earthy complexity of black winter truffles. The result is pure culinary poetry."
              </p>
              <h5 className="signature-quote-author">
                — Chef Karim Bachandi
              </h5>
            </div>

            <div style={{ width: '100%' }}>
              <a href="#menu" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
                Reserve Signature Wrap
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Signature;
