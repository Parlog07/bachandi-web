import React from 'react';
import { Flame, Sparkles, ShieldCheck } from 'lucide-react';

export const About = () => {
  const pillars = [
    {
      icon: <Flame className="w-6 h-6 text-[#d4af37]" />,
      title: 'Secret 18-Spice Blend',
      desc: 'Our meat is hand-massaged and marinated for 24 hours in an heirloom spice recipe passed down through generations.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#d4af37]" />,
      title: 'Traditional Clay Roasting',
      desc: 'Cooked slowly to succulent perfection on custom vertical spits, then finished over genuine fruitwood charcoal embers.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />,
      title: 'Gourmet Ingredients',
      desc: 'From organic local herbs to imported Syrian olive oil, we never compromise on the quality of our ingredients.'
    }
  ];

  return (
    <section 
      id="story" 
      className="section-padding relative overflow-hidden bg-islamic-pattern"
      style={{
        backgroundColor: 'var(--color-bg-dark)'
      }}
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] ambient-glow-red rounded-full opacity-30 pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] ambient-glow-gold rounded-full opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 
              className="text-gold-gradient text-xs uppercase tracking-widest font-semibold mb-3"
            >
              Our Story
            </h2>
            <h3 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Born in Cairo Nights, <br />
              Perfected for the Connoisseur
            </h3>
            
            <div className="space-y-4 text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
              <p>
                Bachandi was born from a desire to elevate Arabic street food into a luxury culinary experience. Inspired by the warm glows of Egyptian copper lanterns, Cairo nights, and the incredible aromas of Levant spices floating through ancient market alleyways.
              </p>
              <p>
                We believed that shawarma—the crown jewel of Middle Eastern street eats—deserved the same meticulous care, fine ingredients, and presentation as high-end dining. Our master chefs prepare each wrap, plate, and side using techniques that honor tradition while catering to a modern, refined palate.
              </p>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {pillars.map((p, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-6 card-luxury flex gap-5 items-start text-left"
              >
                <div className="p-3 bg-[#8b0000]/20 rounded-lg border border-[#d4af37]/20 flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#f4edd8]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {p.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
