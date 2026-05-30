import React from 'react';
import { Flame } from 'lucide-react';

export const Footer = () => {
  return (
    <footer 
      className="bg-[#080202] border-t border-[#d4af37]/20 pt-16 pb-8 relative overflow-hidden bg-islamic-pattern"
    >
      {/* Background ambient light */}
      <div className="absolute left-1/2 bottom-0 w-[500px] h-[250px] ambient-glow-red rounded-full opacity-20 transform -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-7 h-7 text-[#d4af37]" />
            <span 
              className="text-3xl font-bold tracking-widest text-gold-gradient"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              BACHANDI
            </span>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
            Experience the culinary treasures of Cairo and Levant at night. Authentic, slow-marinated shawarma served in a premium, modern Arabian atmosphere.
          </p>
        </div>

        {/* Navigation & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8 mb-12">
          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#story" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Story</a>
            <a href="#menu" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Menu</a>
            <a href="#signature" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Signature</a>
            <a href="#gallery" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-gray-400 hover:text-[#d4af37] transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-gray-400 hover:text-[#d4af37] transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="TripAdvisor / Compass"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-gray-400 hover:text-[#d4af37] transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Base Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Bachandi Restaurant. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <span className="text-[#8b0000]">♥</span> for Premium Middle Eastern Hospitality
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
