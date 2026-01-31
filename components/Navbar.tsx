import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2 backdrop-blur-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className={`font-serif text-3xl font-bold tracking-tighter ${scrolled ? 'text-djerba-blue' : 'text-white'}`}>
            Baba Amor
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-sans font-medium text-sm uppercase tracking-widest hover:text-djerba-gold transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${SOCIAL_LINKS.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-djerba-clay hover:bg-djerba-clay/90 text-white px-5 py-2 rounded-full font-bold transition-transform hover:scale-105"
          >
            <Phone size={16} />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-djerba-clay focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-djerba-blue' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col items-center py-8 space-y-6 animate-fade-in-up">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-serif text-xl text-djerba-blue hover:text-djerba-clay"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a 
            href={`tel:${SOCIAL_LINKS.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-djerba-clay text-white px-6 py-3 rounded-full font-bold"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} />
            <span>{SOCIAL_LINKS.phone}</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;