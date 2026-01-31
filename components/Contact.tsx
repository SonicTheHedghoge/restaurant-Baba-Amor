import React from 'react';
import { Phone, Mail, MapPin, Facebook, Clock } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-djerba-blue text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-djerba-gold/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Section */}
          <div className="space-y-8">
            <div className="space-y-2">
               <h3 className="text-djerba-gold font-sans uppercase tracking-widest font-bold">Get in Touch</h3>
               <h2 className="font-serif text-4xl md:text-6xl font-bold">Visit Us Today</h2>
            </div>
            
            <p className="text-blue-100 text-lg leading-relaxed max-w-md">
              We look forward to serving you the finest Djerbian cuisine. 
              Reservations are recommended for dinner service.
            </p>

            <div className="space-y-6 pt-6">
              <a href={`tel:${SOCIAL_LINKS.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 hover:text-djerba-gold transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-djerba-gold group-hover:text-djerba-blue transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                   <span className="block text-xs text-blue-300 uppercase">Phone</span>
                   <span className="text-xl font-serif">{SOCIAL_LINKS.phone}</span>
                </div>
              </a>

              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 hover:text-djerba-gold transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-djerba-gold group-hover:text-djerba-blue transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                   <span className="block text-xs text-blue-300 uppercase">Email</span>
                   <span className="text-xl font-serif">{SOCIAL_LINKS.email}</span>
                </div>
              </a>

               <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                   <span className="block text-xs text-blue-300 uppercase">Location</span>
                   <span className="text-xl font-serif">Djerba, Tunisia</span>
                </div>
              </div>

               <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                   <span className="block text-xs text-blue-300 uppercase">Opening Hours</span>
                   <span className="text-xl font-serif">Open Daily</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
               <a 
                 href={SOCIAL_LINKS.facebook} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-djerba-blue transition-all"
               >
                 <Facebook size={20} />
                 <span>Follow us on Facebook (2.8k Followers)</span>
               </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl p-2 h-[500px] relative">
            <iframe 
                width="100%" 
                height="100%" 
                style={{border:0, borderRadius: '8px'}}
                loading="lazy" 
                allowFullScreen
                src="https://maps.google.com/maps?q=Baba+Amor+Djerba+Tunisia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="bg-stone-200"
            >
            </iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;