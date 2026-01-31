import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/id/326/1920/1080")', 
          filter: 'brightness(0.6)' 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="block text-djerba-gold font-sans uppercase tracking-[0.3em] mb-4 text-sm md:text-base animate-fade-in-up">
          Welcome to Djerba
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Baba Amor
        </h1>
        <p className="text-gray-100 text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Experience the authentic soul of Tunisian cuisine in the heart of Djerba.
          Where tradition meets the Mediterranean breeze.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#menu" className="px-8 py-4 bg-djerba-clay hover:bg-orange-700 text-white text-sm uppercase tracking-widest font-bold transition-all transform hover:-translate-y-1 shadow-lg rounded-sm">
            View Menu
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-djerba-blue text-white text-sm uppercase tracking-widest font-bold transition-all transform hover:-translate-y-1 rounded-sm">
            Book a Table
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;