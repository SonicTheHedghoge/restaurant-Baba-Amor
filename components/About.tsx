import React from 'react';
import { ChefHat, Heart, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/id/292/400/500" 
                alt="Djerbian Spices" 
                className="rounded-lg shadow-xl w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://picsum.photos/id/431/400/500" 
                alt="Restaurant Interior" 
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-djerba-sand/50 rounded-full blur-2xl"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center gap-2 text-djerba-blue">
               <MapPin size={20} />
               <span className="uppercase tracking-widest text-sm font-bold">Djerba, Tunisia</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
              A Culinary Journey <br/> <span className="text-djerba-clay italic">Through Time</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Baba Amor is more than just a restaurant; it is a tribute to the rich heritage of Djerbian cuisine. 
              Nestled in the beautiful island of Djerba, we bring you flavors that have been passed down through generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100 hover:shadow-md transition-shadow">
                <ChefHat className="text-djerba-clay" size={32} />
                <h3 className="font-serif text-xl font-bold text-slate-800">Authentic Recipes</h3>
                <p className="text-sm text-slate-500">Traditional methods honoring the ingredients of our island.</p>
              </div>
              <div className="flex flex-col gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100 hover:shadow-md transition-shadow">
                <Heart className="text-djerba-clay" size={32} />
                <h3 className="font-serif text-xl font-bold text-slate-800">Made with Love</h3>
                <p className="text-sm text-slate-500">Every dish is crafted with passion and hospitality.</p>
              </div>
            </div>

            <div className="pt-6">
                <span className="inline-block py-1 px-3 border border-djerba-blue text-djerba-blue text-xs tracking-wider uppercase rounded-full">Status: Open</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;