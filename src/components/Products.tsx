import { 
  ShoppingCart, 
  Sparkles, 
  Droplets, 
  ShieldCheck, 
  Zap, 
  Dumbbell, 
  Briefcase, 
  Snowflake, 
  Home, 
  Crown, 
  Tag,
  LucideIcon
} from 'lucide-react';
import { motion } from 'motion/react';
import WaterRippleEffect from './WaterRippleEffect';
import bottleImage15L from '../assets/images/product_card_1_5l.png';
import bottleImage500ml from '../assets/images/product_card_500ml.png';

interface ProductFeature {
  text: string;
  icon: LucideIcon;
}

interface ProductItem {
  id: string;
  name: string;
  sizeBadge: string;
  subtitle: string;
  price: string;
  priceDetail: string;
  features: ProductFeature[];
  imgScale: string;
  tagline: string;
  image: string;
}

interface ProductsProps {
  onOrderProduct: (size: string) => void;
}

export default function Products({ onOrderProduct }: ProductsProps) {
  const items: ProductItem[] = [
    {
      id: '500ml',
      name: 'Aabshar Eco Active',
      sizeBadge: '500ml Bottle',
      subtitle: 'Perfect for on-the-go active hydration',
      price: 'PKR 50',
      priceDetail: 'Per bottle (Bulk rate available)',
      features: [
        { text: 'Compact ergonomic active design', icon: Zap },
        { text: 'Fits standard gym & vehicle holders', icon: Dumbbell },
        { text: 'BPA-Free 100% food grade safe plastic', icon: ShieldCheck },
        { text: 'Ideal for corporate meetings & events', icon: Briefcase },
        { text: 'Direct chilled doorstep express shipping', icon: Snowflake },
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
        { text: 'Perfect family dining & kitchen size', icon: Home },
        { text: 'Supports full daily cell hydration goals', icon: Droplets },
        { text: 'Rigid, high-clarity crystal base structure', icon: ShieldCheck },
        { text: 'Favorite choice for 5-star hotels & cafes', icon: Crown },
        { text: 'Direct chilled doorstep express shipping', icon: Snowflake },
      ],
      imgScale: 'scale-105',
      tagline: 'Perfect family size or high-density workplace solution to elevate daily hydration.',
      image: bottleImage15L,
    },
  ];

  return (
    <section id="products" className="py-20 bg-slate-50/70 text-slate-800 relative overflow-hidden cv-auto border-t border-b border-slate-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span>Explore Our Sizes</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Pure Minerals in <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] via-[#00B4D8] to-[#0284C7]">Premium Vessels</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0088CC] via-[#00B4D8] to-[#0284C7] mx-auto mt-3 rounded-full shadow-xs" />
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
              className="bg-white border border-slate-200/90 hover:border-sky-300 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 relative group"
            >
              {/* Left Column: Asymmetric Bottle Showcase Stage */}
              <div className="md:col-span-5 relative min-h-[350px] sm:min-h-[390px] md:min-h-[450px] bg-gradient-to-b from-sky-50/80 via-sky-50/40 to-slate-100 flex flex-col items-center justify-end pt-16 sm:pt-20 pb-8 px-6 border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden">
                {/* Radial Spotlight & Caustic Light behind Bottle */}
                <div className="absolute w-64 h-64 bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_75%)] rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                {/* Refined Size Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[#0284C7] text-xs font-mono font-black tracking-wider uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#00D4FF] animate-pulse" />
                    <span>{prod.sizeBadge}</span>
                  </div>
                </div>

                {/* Glowing Platform Pedestal & Water Ripple Effect beneath Bottle */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-10 bg-gradient-to-r from-sky-200/40 via-sky-300/50 to-sky-200/40 rounded-[100%] blur-md pointer-events-none z-10 animate-ripple-pulse" />
                <WaterRippleEffect size="lg" className="bottom-2 opacity-60" />

                {/* Floating Bottle Render with Gentle Idle Bobbing */}
                <motion.img
                  src={prod.image}
                  alt={`${prod.name} - ${prod.sizeBadge}`}
                  loading="lazy"
                  decoding="async"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className={`h-56 sm:h-64 md:h-72 w-auto object-contain pointer-events-none filter drop-shadow-[0_18px_25px_rgba(2,132,199,0.2)] z-20 mt-8 sm:mt-10 md:mt-6 mb-1 ${prod.imgScale}`}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Column: Details & Pricing */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left">
                <div>
                  {/* Top Badges Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-mono font-black uppercase tracking-widest">
                      <Droplets className="w-3.5 h-3.5 text-[#00D4FF]" />
                      <span>AABSHAR PURE SERIES</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-mono font-bold tracking-wider uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>TDS 135 VERIFIED</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#0284C7] transition-colors duration-200 mb-1">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm font-medium mb-4">
                    {prod.subtitle}
                  </p>

                  {/* Animated Thin Cyan Accent Line */}
                  <div className="w-full h-[1.5px] bg-gradient-to-r from-[#0088CC] via-sky-300 to-transparent mb-5" />

                  {/* Specifications List with Contextual Icons */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {prod.features.map((feat) => {
                      const IconComponent = feat.icon;
                      return (
                        <li key={feat.text} className="flex items-center text-xs text-slate-700 font-medium">
                          <div className="w-5 h-5 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center mr-2.5 flex-shrink-0 text-[#0284C7]">
                            <IconComponent className="w-3 h-3 text-[#0284C7]" />
                          </div>
                          <span className="leading-tight">{feat.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  {/* Premium Pricing Box */}
                  <div className="mb-5 p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 shadow-xs relative overflow-hidden group/price">
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Unit Retail Price</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
                          {prod.price}
                        </span>
                      </div>
                    </div>
                    <div className="relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284C7] font-mono text-xs font-black uppercase tracking-wide">
                      <Tag className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Bulk Savings Available</span>
                    </div>
                  </div>

                  {/* Refined CTA Button */}
                  <button
                    id={`order-btn-${prod.id}`}
                    onClick={() => onOrderProduct(prod.id)}
                    className="w-full px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#00D4FF] via-[#0284C7] to-[#0369A1] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-md border border-[#00D4FF]/50 transition-all cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 hover:shadow-lg active:scale-98 group"
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white group-hover:scale-110 transition-transform shrink-0" />
                    <span className="text-center leading-snug">Order {prod.sizeBadge} Chilled</span>
                  </button>
                  <p className="font-sans text-center text-[11px] text-slate-500 mt-2 font-medium">
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

