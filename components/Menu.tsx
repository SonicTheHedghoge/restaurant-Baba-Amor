import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Starter', 'Main', 'Dessert', 'Drink'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-100 to-white"></div>
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-djerba-clay text-sm font-bold uppercase tracking-widest">Discover</span>
          <h2 className="font-serif text-4xl md:text-5xl text-djerba-blue mt-2 mb-6">Our Menu</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-djerba-blue text-white shadow-lg scale-105' 
                    : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer h-[400px]">
      <img 
        src={item.imageUrl} 
        alt={item.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="flex justify-between items-baseline mb-2">
           <span className="text-xs font-bold bg-djerba-gold text-slate-900 px-2 py-1 rounded uppercase tracking-wider">{item.category}</span>
           <span className="font-serif text-xl text-djerba-gold italic">{item.price}</span>
        </div>
        <h3 className="font-serif text-2xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Menu;