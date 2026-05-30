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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-opacity-90 shadow-2xl border-b border-opacity-40' 
          : 'py-6 bg-opacity-40 border-b border-opacity-10'
      }`}
      style={{ 
        backgroundColor: scrolled ? 'rgba(12, 4, 4, 0.92)' : 'rgba(8, 2, 2, 0.5)',
        borderBottom: `1px solid ${scrolled ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.1)'}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Flame className="w-6 h-6 text-[#d4af37] transition-all group-hover:scale-110 group-hover:text-[#f3c556]" />
          <span 
            className="text-2xl font-bold tracking-widest text-gold-gradient"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            BACHANDI
          </span>
        </a>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wider text-gray-300 hover:text-white transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Order CTA Button */}
        <div className="hidden md:block">
          <a href="#menu" className="btn-primary text-xs py-2 px-5 rounded-md">
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 border-b border-[#d4af37]/20 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
        style={{ 
          background: 'rgba(15, 5, 5, 0.96)',
          backdropFilter: 'blur(16px)'
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white py-2 text-lg border-b border-gray-800/40"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center mt-2"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
