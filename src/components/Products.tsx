import { ShoppingCart, Sparkles, Droplet } from 'lucide-react';
import { motion } from 'motion/react';
import bottleImage15L from '../assets/images/product_card_1_5l.png';
import bottleImage500ml from '../assets/images/product_card_500ml.png';

interface ProductsProps {
  onOrderProduct: (size: string) => void;
}

export default function Products({ onOrderProduct }: ProductsProps) {
  const items = [
    {
      id: '500ml',
      name: 'Aabshar Eco Active',
      sizeBadge: '500ml Bottle',
      subtitle: 'Perfect for on-the-go active hydration',
      price: 'PKR 50',
      priceDetail: 'Per bottle (Bulk rate available)',
      features: [
        'Compact ergonomic active design',
        'Fits standard gym & vehicle holders',
        'BPA-Free 100% food grade safe plastic',
        'Ideal for corporate meetings & events',
        'Direct chilled doorstep express shipping',
      ],
      imgScale: 'scale-100',
      tagline: 'Stay active, stay fresh. Carried easily to the gym, office, or dining table.',
      image: bottleImage500ml,
    },
    {
      id: '1.5L',
      name: 'Aabshar Signature Suite',
      sizeBadge: '1.5 Litre Bottle',
      subtitle: 'Ideal for home & premium executive suites',
      price: 'PKR 90',
      priceDetail: 'Per bottle (Bulk rate available)',
      features: [
        'Perfect family dining & kitchen size',
        'Supports full daily cell hydration goals',
        'Rigid, high-clarity crystal base structure',
        'Favorite choice for 5-star hotels & cafes',
        'Direct chilled doorstep express shipping',
      ],
      imgScale: 'scale-105',
      tagline: 'Perfect family size or high-density workplace solution to elevate daily hydration.',
      image: bottleImage15L,
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-[#0A1930] via-[#0F3A4A] to-[#0A1930] text-white relative overflow-hidden cv-auto border-t border-[#00D4FF]/20">
      {/* Subtle Top & Bottom Glowing Divider Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent pointer-events-none z-20" />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4FD1E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0F3A4A]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4FD1E8]/15 border border-[#4FD1E8]/30 text-[#4FD1E8] text-xs font-mono font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Explore Our Sizes</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Pure Minerals in <span className="font-serif italic text-[#00D4FF]">Premium Vessels</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FD1E8] via-[#22d3ee] to-[#C9A24A] mx-auto mt-3 rounded-full" />
        </div>

        {/* Product Cards - Asymmetric Split Layout Cards */}
        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          {items.map((prod, index) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0A1930]/90 backdrop-blur-xl border border-[#00D4FF]/30 hover:border-[#00D4FF] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_60px_rgba(0,212,255,0.25)] grid grid-cols-1 md:grid-cols-12 relative group"
            >
              {/* Micro-depth top edge shine line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/80 to-[#C9A24A]/60 pointer-events-none z-30" />

              {/* Left Column: Asymmetric Bottle Showcase Stage */}
              <div className="md:col-span-5 relative min-h-[300px] md:min-h-[420px] bg-gradient-to-b from-[#0F3A4A] via-[#0A1930] to-[#061224] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#00D4FF]/20 overflow-hidden">
                {/* Radial Spotlight & Caustic Light behind Bottle */}
                <div className="absolute w-64 h-64 bg-[radial-gradient(circle,rgba(0,212,255,0.3)_0%,rgba(15,58,74,0.15)_50%,transparent_75%)] rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,18,36,0.8)_100%)] pointer-events-none" />

                {/* Size Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="font-mono px-3.5 py-1.5 rounded-full bg-[#C9A24A]/20 backdrop-blur-md border border-[#C9A24A]/60 text-[#C9A24A] text-xs font-black tracking-wider uppercase shadow-md">
                    {prod.sizeBadge}
                  </span>
                </div>

                {/* Floating Bottle Render */}
                <img
                  src={prod.image}
                  alt={`${prod.name} - ${prod.sizeBadge}`}
                  loading="lazy"
                  decoding="async"
                  className={`h-64 sm:h-72 md:h-80 w-auto object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 pointer-events-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] z-10 ${prod.imgScale}`}
                  referrerPolicy="no-referrer"
                />

                {/* Water Reflection & Ripple beneath bottle */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
                  <div className="w-36 h-3 rounded-[100%] bg-[#00D4FF]/40 blur-sm scale-x-125 group-hover:scale-x-150 transition-transform duration-500" />
                  <div className="w-48 h-2 rounded-[100%] border border-[#00D4FF]/40 scale-y-50 opacity-60 -mt-1.5" />
                </div>
              </div>

              {/* Right Column: Details & Pricing */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#00D4FF]">
                      AABSHAR PURE SERIES
                    </span>
                    <span className="font-mono text-[10px] text-[#C9A24A] bg-[#C9A24A]/10 border border-[#C9A24A]/30 px-2.5 py-0.5 rounded-full">
                      TDS 135 VERIFIED
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00D4FF] transition-colors duration-200 mb-1">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-slate-300 text-xs sm:text-sm font-medium mb-4">
                    {prod.subtitle}
                  </p>

                  {/* Animated Thin Gold/Cyan Accent Line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#00D4FF] via-[#C9A24A] to-transparent mb-5" />

                  {/* Specifications List */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {prod.features.map((feat) => (
                      <li key={feat} className="flex items-center text-xs text-slate-200 font-medium">
                        <div className="w-4 h-4 rounded-full bg-[#00D4FF]/20 border border-[#00D4FF]/40 flex items-center justify-center mr-2 flex-shrink-0">
                          <Droplet className="w-2.5 h-2.5 text-[#00D4FF] fill-[#00D4FF]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Pricing row with Large Serif Numeral */}
                  <div className="mb-5 p-4 bg-[#0F3A4A]/80 backdrop-blur-md rounded-2xl border border-[#00D4FF]/30 flex items-center justify-between shadow-inner">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 block">Unit Retail Price</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-[#C9A24A]">
                          {prod.price}
                        </span>
                      </div>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#C9A24A]/20 border border-[#C9A24A]/50 text-[#C9A24A] font-mono text-xs font-black uppercase tracking-wide shadow-xs">
                      Bulk Savings Available
                    </span>
                  </div>

                  <button
                    id={`order-btn-${prod.id}`}
                    onClick={() => onOrderProduct(prod.id)}
                    className="w-full inline-flex items-center justify-center py-4 px-6 bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] hover:brightness-110 font-black text-xs sm:text-sm tracking-widest text-[#0A1930] uppercase rounded-xl shadow-[0_4px_20px_rgba(201,162,74,0.35)] hover:shadow-[0_0_30px_rgba(201,162,74,0.6)] border border-[#E5C158]/60 transition-all duration-300 press-scale cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2 text-[#0A1930] fill-[#0A1930]" />
                    Order {prod.sizeBadge} Chilled
                  </button>
                  <p className="font-sans text-center text-[11px] text-slate-400 mt-2 font-medium">
                    Daily Chilled Express Delivery across Rawalpindi, Islamabad & Fateh Jang
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
