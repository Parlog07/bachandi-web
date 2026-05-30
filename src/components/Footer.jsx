import React from 'react';
import { Flame } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer bg-islamic-pattern">
      {/* Background ambient light */}
      <div className="absolute left-1/2 bottom-0 w-[500px] h-[250px] ambient-glow-red rounded-full opacity-20 transform -translate-x-1/2 pointer-events-none" />

      <div className="container-max relative z-10">
        
        {/* Brand & Slogan */}
        <div className="footer-top">
          <div className="footer-logo-box">
            <Flame size={28} className="text-[#d4af37]" />
            <span 
              className="footer-logo-text text-gold-gradient"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              BACHANDI
            </span>
          </div>
          <p className="footer-slogan">
            Experience the culinary treasures of Cairo and Levant at night. Authentic, slow-marinated shawarma served in a premium, modern Arabian atmosphere.
          </p>
        </div>

        {/* Navigation & Social Links */}
        <div className="footer-mid">
          {/* Quick links */}
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#story" className="footer-link">Story</a>
            <a href="#menu" className="footer-link">Menu</a>
            <a href="#signature" className="footer-link">Signature</a>
            <a href="#gallery" className="footer-link">Gallery</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="footer-socials">
            <a 
              href="#" 
              aria-label="Instagram"
              className="footer-social-btn"
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
              className="footer-social-btn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="TripAdvisor / Compass"
              className="footer-social-btn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Base Info */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Bachandi Restaurant. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Designed with <span className="footer-credit-heart">♥</span> for Premium Middle Eastern Hospitality
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
