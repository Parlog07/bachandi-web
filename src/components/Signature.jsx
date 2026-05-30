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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold-gradient text-xs uppercase tracking-widest font-semibold mb-3">
            Culinary Masterpieces
          </h2>
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Signature Selection
          </h3>
          <p className="text-gray-400">
            Exclusive creations crafted by our founder, elevating classic street food formulas with premium international ingredients.
          </p>
        </div>

        {/* Feature Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Luxury Frame */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Gold Frame Backing */}
            <div className="absolute -inset-4 border border-[#d4af37]/30 rounded-2xl transform rotate-3 pointer-events-none z-0"></div>
            <div className="absolute -inset-2 border border-[#8b0000]/40 rounded-2xl transform -rotate-2 pointer-events-none z-0"></div>
            
            {/* The Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5 z-10 w-full max-w-[480px] aspect-square">
              <img 
                src="assets/truffle_shawarma.png" 
                alt="Signature Black Truffle Shawarma"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#aa841f] text-[#080202] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 fill-[#080202]" /> Signature Masterpiece
              </div>
            </div>
          </div>

          {/* Right Column: Culinary Details */}
          <div className="lg:col-span-6 text-left flex flex-col items-start">
            <h4 
              className="text-3xl md:text-4xl font-bold mb-4 text-[#f4edd8]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Black Truffle <br />
              <span className="text-gold-gradient">Chicken Shawarma</span>
            </h4>
            
            <span 
              className="text-2xl font-bold text-gold-light mb-6 block"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              $18.00
            </span>

            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              Our signature flatbread wrapped snugly around juicy, charcoal-finished roasted chicken breast. What sets it apart is a generous drizzle of house-made Italian black winter truffle oil blended into our secret recipe garlic toum, paired with crispy sumac red onion rings and organic baby arugula.
            </p>

            {/* Chef Quote Card */}
            <div className="glass-panel p-6 border-l-4 border-l-[#d4af37] relative mb-8 w-full bg-[#170a0a]/50">
              <Quote className="absolute right-6 top-6 w-12 h-12 text-[#d4af37]/10" />
              <p className="text-gray-300 italic text-sm md:text-base leading-relaxed mb-4 relative z-10">
                "I wanted to merge the comforting street food comfort of my childhood in Cairo with the rich, earthy complexity of black winter truffles. The result is pure culinary poetry."
              </p>
              <h5 className="text-gold-light text-sm font-semibold tracking-wider uppercase">
                — Chef Karim Bachandi
              </h5>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a href="#menu" className="btn-primary text-center px-8 py-3.5">
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
