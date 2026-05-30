import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signature', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className="navbar"
      style={{ 
        paddingTop: scrolled ? '0.75rem' : '1.5rem',
        paddingBottom: scrolled ? '0.75rem' : '1.5rem',
        backgroundColor: scrolled ? 'rgba(12, 4, 4, 0.92)' : 'rgba(8, 2, 2, 0.4)',
        borderBottom: `1px solid ${scrolled ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.1)'}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-logo">
          <Flame size={24} className="text-[#d4af37]" />
          <span 
            className="text-2xl font-bold tracking-widest text-gold-gradient"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            BACHANDI
          </span>
        </a>

        {/* Desktop Menu Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <a href="#menu" className="btn-primary nav-cta-btn" style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}>
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-toggle-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}
        style={{ 
          background: 'rgba(15, 5, 5, 0.96)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="nav-mobile-link"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#menu"
          onClick={() => setIsOpen(false)}
          className="btn-primary"
          style={{ textAlign: 'center', marginTop: '0.5rem' }}
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
