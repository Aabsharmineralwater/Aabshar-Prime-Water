import { ArrowRight, ShoppingCart, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import bottleImage15L from '../assets/images/aabshar_1_5l_bottle_1779790755825.png';
import bottleImage500ml from '../assets/images/regenerated_image_1784659234041.png';

interface ProductsProps {
  onOrderProduct: (size: string) => void;
}

export default function Products({ onOrderProduct }: ProductsProps) {
  const items = [
    {
      id: '500ml',
      name: 'Aabshar Eco Active',
      sizeBadge: '500ml Bottle',
      subtitle: 'Perfect for on-the-go lifestyle',
      price: 'Contact for Bulk Pricing',
      features: [
        'Compact sporty design',
        'Fits standard gym & car holders',
        'BPA-Free premium safe plastic',
        'Ideal for corporate conferences, board rooms & events',
        'Direct chilled doorstep express shipping',
      ],
      imgScale: 'scale-90',
      tagline: 'Stay active, stay fresh. Carried easily to the gym, office, or dining table.',
      image: bottleImage500ml,
    },
    {
      id: '1.5L',
      name: 'Aabshar Signature Suite',
      sizeBadge: '1.5 Litre Bottle',
      subtitle: 'Ideal for home & premium offices',
      price: 'Contact for Bulk Pricing',
      features: [
        'Perfect dining & kitchen size',
        'Supports daily full-hydration goals',
        'Rigid, high-clarity crystal base',
        'Favorite choice for 5-star hotels & signature cafes',
        'Direct chilled doorstep express shipping',
      ],
      imgScale: 'scale-100',
      tagline: 'Perfect family size or high-density workplace solution to elevate daily hydration.',
      image: bottleImage15L,
    },
  ];

  return (
    <section id="products" className="py-24 bg-transparent relative overflow-hidden spotlight-glow border-t border-white/5">
      {/* Continuing Background Scenery Overlay (lighter for products) */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(5,15,35,0.60)] via-[rgba(5,15,35,0.45)] to-[rgba(5,15,35,0.65)] z-0 pointer-events-none" />

      {/* Background graphics */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-aqua/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />
 
      {/* Animated Rising Water Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute left-[15%] bottom-10 w-4 h-4 bg-brand-teal/10 rounded-full blur-xs animate-bubble-slow" />
        <div className="absolute left-[45%] bottom-2 w-3 h-3 bg-brand-teal/5 rounded-full blur-xs animate-bubble-fast [animation-delay:2s]" />
        <div className="absolute right-[22%] bottom-12 w-5 h-5 bg-brand-teal/10 rounded-full blur-xs animate-bubble-slow [animation-delay:4s]" />
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/35 border border-brand-teal/30 text-white text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-sky-200" />
            <span className="text-sky-100">Explore Our Sizes</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            Pure Minerals in Premium Vessels
          </motion.h2>
          <div className="w-20 h-1 bg-linear-to-r from-brand-teal to-brand-aqua mx-auto mt-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sky-100/90 text-base sm:text-lg mt-4"
          >
            Every drop of Aabshar contains perfectly balanced minerals in food-grade, safe, crystal-clear bottles, adorned with our signature vertical blue design logo.
          </motion.p>
        </div>
 
        {/* Product Cards Side-By-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
          {items.map((prod, index) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="frosted-glass-card rounded-3xl overflow-hidden shadow-3d flex flex-col hover-lift tilt-card inner-highlight transition-all duration-500 relative group"
            >
              {/* Size Badge Layer */}
              <div className="absolute top-6 left-6 z-20">
                <span className="font-sans px-4 py-1.5 rounded-full bg-brand-teal text-white text-xs sm:text-sm font-bold shadow-md tracking-wide uppercase">
                  {prod.sizeBadge}
                </span>
              </div>

              {/* Top part: SACRED Bottle Graphic */}
              <div className="relative h-96 bg-linear-to-b from-sky-50/40 to-teal-50/20 flex items-center justify-center p-8 border-b border-white/20 overflow-hidden">
                {/* Visual circle accent in card background */}
                <div className="absolute w-64 h-64 bg-brand-teal/5 rounded-full blur-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                
                {/* SACRED Bottle - size adjusted proportionally based on scale */}
                <img
                  src={prod.image}
                  alt={`${prod.name} - ${prod.sizeBadge}`}
                  loading="lazy"
                  className={`h-72 sm:h-80 w-auto object-contain transition-transform duration-500 group-hover:scale-105 pointer-events-none drop-shadow-[0_15px_25px_rgba(2,132,199,0.1)] ${prod.imgScale}`}
                  referrerPolicy="no-referrer"
                />

                {/* Vertical logo identifier overlay indicating true raw file */}
                <div className="absolute bottom-4 right-6 bg-white/95 border border-slate-200 px-3 py-1 rounded-md text-[10px] text-slate-500 font-mono flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-ping" />
                  AUTHENTIC BOTTLE
                </div>
              </div>

              {/* Bottom part: Features & CTA */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-brand-teal transition-colors duration-200">
                      {prod.name}
                    </h3>
                    <p className="font-sans text-brand-teal text-sm sm:text-base font-semibold mt-1">
                      {prod.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-slate-500 text-sm leading-relaxed italic mb-6">
                    "{prod.tagline}"
                  </p>

                  <h4 className="font-sans text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                    Premium Quality Standards
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {prod.features.map((feat) => (
                      <li key={feat} className="flex items-start text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    id={`order-btn-${prod.id}`}
                    onClick={() => onOrderProduct(prod.id)}
                    className="w-full inline-flex items-center justify-center p-4 bg-linear-to-r from-brand-teal to-brand-aqua hover:brightness-110 font-bold text-sm tracking-widest text-white uppercase rounded-2xl shadow-btn-glow hover:shadow-btn-glow border-t border-white/35 transition-all duration-300 press-scale cursor-pointer"
                  >
                    <ShoppingCart className="w-5.5 h-5.5 mr-2" />
                    Order {prod.sizeBadge} Chilled
                  </button>
                  <p className="font-sans text-center text-xs text-slate-500 mt-3 font-medium">
                    Rawalpindi, Islamabad, and Fateh Jang Delivery Area
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Floating crystal clear wave flowing into private branding panel */}
      <div className="absolute bottom-0 inset-x-0 h-12 overflow-hidden pointer-events-none z-10 select-none opacity-40 translate-y-px">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px] rotate-180">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>
    </section>
  );
}
