import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Amira Al-Mansoor',
      role: 'Middle Eastern Food Critic',
      quote: 'The Black Truffle Chicken Shawarma is a revelation. I have tasted shawarma from Beirut to Cairo, but Bachandi has elevated this classic street food to high-end fine dining. Absolutely divine.',
      rating: 5
    },
    {
      name: 'Julian Mercer',
      role: 'Gourmet Traveller Mag',
      quote: 'Stepping into Bachandi feels like stepping into a luxury Cairo café at night. The crimson lights, warm lantern glows, and the slow cedarwood smoke platter made our evening unforgettable.',
      rating: 5
    },
    {
      name: 'Karim Haddad',
      role: 'Local Dining Connoisseur',
      quote: 'I have ordered the Wagyu Beef Shawarma twice now. The quality of the Wagyu wrapped in microgreens and truffle tahini is outstanding. Bachandi is the definition of Middle Eastern culinary luxury.',
      rating: 5
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="section-padding relative overflow-hidden bg-islamic-pattern"
      style={{
        backgroundColor: 'var(--color-bg-dark)'
      }}
    >
      {/* Background glow effects */}
      <div className="absolute left-1/4 bottom-1/4 w-[350px] h-[350px] ambient-glow-red rounded-full opacity-20 pointer-events-none" />
      <div className="absolute right-1/4 top-1/4 w-[350px] h-[350px] ambient-glow-gold rounded-full opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold-gradient text-xs uppercase tracking-widest font-semibold mb-3">
            Honored Guests
          </h2>
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Reviews & Testimonials
          </h3>
          <p className="text-gray-400">
            Read what food critics and loyal diners say about their experiences dining under our glowing lanterns.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 card-luxury flex flex-col justify-between text-left relative bg-[#170a0a]/50"
            >
              <Quote className="absolute right-6 top-6 w-10 h-10 text-[#d4af37]/10" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 italic">
                  "{r.quote}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="border-t border-white/5 pt-4 mt-auto">
                <h4 
                  className="text-lg font-bold text-[#f4edd8]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {r.name}
                </h4>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                  {r.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
