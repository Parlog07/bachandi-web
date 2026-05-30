import React from 'react';
import { Flame, Sparkles, ShieldCheck } from 'lucide-react';

export const About = () => {
  const pillars = [
    {
      icon: <Flame size={24} className="text-[#d4af37]" />,
      title: 'Secret 18-Spice Blend',
      desc: 'Our meat is marinating for 24 hours in an heirloom spice recipe passed down through generations.'
    },
    {
      icon: <Sparkles size={24} className="text-[#d4af37]" />,
      title: 'Traditional Spit-Roasting',
      desc: 'Cooked slowly to succulent perfection on custom vertical spits, then finished over genuine fruitwood charcoal embers.'
    },
    {
      icon: <ShieldCheck size={24} className="text-[#d4af37]" />,
      title: 'Gourmet Ingredients',
      desc: 'From organic local herbs to imported Syrian olive oil, we never compromise on the quality of our ingredients.'
    }
  ];

  return (
    <section 
      id="story" 
      className="section-padding relative overflow-hidden bg-islamic-pattern"
      style={{
        backgroundColor: 'rgba(28, 6, 6, 0.45)'
      }}
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] ambient-glow-red rounded-full opacity-30 pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] ambient-glow-gold rounded-full opacity-20 pointer-events-none" />

      <div className="about-grid container-max">
        {/* Left Text Block */}
        <div className="about-content-left">
          <h2 className="section-subtitle">
            Our Story
          </h2>
          <h3 
            className="section-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Born in Cairo Nights, <br />
            Perfected for the Connoisseur
          </h3>
          
          <div className="about-desc">
            <p>
              Bachandi was born from a desire to elevate Arabic street food into a luxury culinary experience. Inspired by the warm glows of Egyptian copper lanterns, Cairo nights, and the incredible aromas of Levant spices floating through ancient market alleyways.
            </p>
            <p>
              We believed that shawarma—the crown jewel of Middle Eastern street eats—deserved the same meticulous care, fine ingredients, and presentation as high-end dining. Our master chefs prepare each wrap, plate, and side using techniques that honor tradition while catering to a modern, refined palate.
            </p>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="about-cards">
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              className="about-card glass-panel card-luxury"
            >
              <div className="about-card-icon-box">
                {p.icon}
              </div>
              <div>
                <h4 className="about-card-title" style={{ fontFamily: 'var(--font-heading)' }}>
                  {p.title}
                </h4>
                <p className="about-card-desc">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
