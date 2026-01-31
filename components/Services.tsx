import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-djerba-blue mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-djerba-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            Whether you want to dine under the stars or enjoy our food at home, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.HelpCircle;
            
            return (
              <div key={service.id} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border-t-4 border-transparent hover:border-djerba-clay">
                <div className="w-16 h-16 mx-auto bg-stone-50 rounded-full flex items-center justify-center text-djerba-clay mb-4 group-hover:bg-djerba-clay group-hover:text-white transition-colors duration-300">
                  <IconComponent size={32} />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-2">{service.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;