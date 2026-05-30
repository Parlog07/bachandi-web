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

      <div className="container-max relative z-10">
        
        {/* Title */}
        <div className="section-header">
          <h2 className="section-subtitle">
            Honored Guests
          </h2>
          <h3 
            className="section-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Reviews & Testimonials
          </h3>
          <p className="section-header-desc">
            Read what food critics and loyal diners say about their experiences dining under our glowing lanterns.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {reviews.map((r, idx) => (
            <div 
              key={idx}
              className="testimonial-card glass-panel card-luxury"
            >
              <Quote className="testimonial-quote-icon" />

              <div>
                {/* Stars */}
                <div className="testimonial-stars">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="testimonial-star-icon" />
                  ))}
                </div>

                {/* Quote */}
                <p className="testimonial-text">
                  "{r.quote}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="testimonial-user">
                <h4 
                  className="testimonial-name"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {r.name}
                </h4>
                <p className="testimonial-role">
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
