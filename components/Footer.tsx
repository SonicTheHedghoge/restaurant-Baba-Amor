import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="font-serif text-lg text-white font-bold">Baba Amor</h4>
          <p>Djerbian Cuisine • Established in Djerba</p>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Baba Amor. All rights reserved.</p>
          <p className="text-xs mt-1">Designed with love for Tunisian heritage.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;