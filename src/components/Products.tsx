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
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4FD1E8]/15 border border-[#4FD1E8]/30 text-[#4FD1E8] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(79,209,232,0.2)]"
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
            Pure Minerals in <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A]">Premium Vessels</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FD1E8] via-[#22d3ee] to-[#C9A24A] mx-auto mt-3 rounded-full shadow-[0_0_10px_#00D4FF]" />
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
              className="bg-[#0A1930]/90 backdrop-blur-xl border border-[#00D4FF]/30 hover:border-[#00D4FF] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_65px_rgba(0,212,255,0.3)] hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 relative group"
            >
              {/* Micro-depth top edge shine line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/80 to-[#C9A24A]/60 pointer-events-none z-30" />

              {/* Left Column: Asymmetric Bottle Showcase Stage */}
              <div className="md:col-span-5 relative min-h-[350px] sm:min-h-[390px] md:min-h-[450px] bg-gradient-to-b from-[#0F3A4A] via-[#0A1930] to-[#061224] flex flex-col items-center justify-end pt-16 sm:pt-20 pb-8 px-6 border-b md:border-b-0 md:border-r border-[#00D4FF]/30 overflow-hidden">
                {/* Vertical Divider Glow Accent Line */}
                <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-[#00D4FF]/60 via-[#C9A24A]/40 to-[#00D4FF]/60 pointer-events-none z-30" />

                {/* Radial Spotlight & Caustic Light behind Bottle */}
                <div className="absolute w-64 h-64 bg-[radial-gradient(circle,rgba(0,212,255,0.35)_0%,rgba(15,58,74,0.15)_50%,transparent_75%)] rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,18,36,0.8)_100%)] pointer-events-none" />

                {/* Refined Size Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A1930]/80 backdrop-blur-md border border-[#C9A24A]/60 text-[#C9A24A] text-xs font-mono font-black tracking-wider uppercase shadow-[0_4px_15px_rgba(201,162,74,0.25)]">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5C158] animate-pulse" />
                    <span>{prod.sizeBadge}</span>
                  </div>
                </div>

                {/* Glowing Platform Pedestal & Water Ripple Effect beneath Bottle */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-10 bg-gradient-to-r from-[#00D4FF]/25 via-[#38bdf8]/45 to-[#00D4FF]/25 rounded-[100%] blur-md pointer-events-none z-10 animate-ripple-pulse" />
                <WaterRippleEffect size="lg" className="bottom-2" />

                {/* Floating Bottle Render with Gentle Idle Bobbing */}
                <motion.img
                  src={prod.image}
                  alt={`${prod.name} - ${prod.sizeBadge}`}
                  loading="lazy"
                  decoding="async"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className={`h-56 sm:h-64 md:h-72 w-auto object-contain pointer-events-none filter drop-shadow-[0_22px_38px_rgba(0,0,0,0.85)] z-20 mt-8 sm:mt-10 md:mt-6 mb-1 ${prod.imgScale}`}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Column: Details & Pricing */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left">
                <div>
                  {/* Top Badges Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-mono font-black uppercase tracking-widest shadow-[0_0_10px_rgba(0,212,255,0.15)]">
                      <Droplets className="w-3.5 h-3.5 text-[#00D4FF]" />
                      <span>AABSHAR PURE SERIES</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/40 text-[#C9A24A] text-[11px] font-mono font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(201,162,74,0.15)]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E5C158]" />
                      <span>TDS 135 VERIFIED</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00D4FF] transition-colors duration-200 mb-1">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-slate-300 text-xs sm:text-sm font-medium mb-4">
                    {prod.subtitle}
                  </p>

                  {/* Animated Thin Gold/Cyan Accent Line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#00D4FF] via-[#C9A24A] to-transparent mb-5" />

                  {/* Specifications List with Contextual Icons */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {prod.features.map((feat) => {
                      const IconComponent = feat.icon;
                      return (
                        <li key={feat.text} className="flex items-center text-xs text-slate-200 font-medium">
                          <div className="w-5 h-5 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/40 flex items-center justify-center mr-2.5 flex-shrink-0 text-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.2)]">
                            <IconComponent className="w-3 h-3 text-[#00D4FF]" />
                          </div>
                          <span className="leading-tight">{feat.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  {/* Premium Pricing Box */}
                  <div className="mb-5 p-4 bg-gradient-to-r from-[#0F3A4A]/90 via-[#0A1930]/90 to-[#0F3A4A]/90 backdrop-blur-md rounded-2xl border border-[#00D4FF]/40 flex flex-wrap items-center justify-between gap-3 shadow-[0_8px_25px_rgba(0,0,0,0.4)] relative overflow-hidden group/price">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 block mb-0.5">Unit Retail Price</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-[#C9A24A] drop-shadow-sm">
                          {prod.price}
                        </span>
                      </div>
                    </div>
                    <div className="relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#C9A24A]/25 via-[#E5C158]/25 to-[#C9A24A]/25 border border-[#C9A24A]/70 text-[#E5C158] font-mono text-xs font-black uppercase tracking-wide shadow-[0_0_15px_rgba(201,162,74,0.3)] animate-pulse">
                      <Tag className="w-3.5 h-3.5 text-[#E5C158]" />
                      <span>Bulk Savings Available</span>
                    </div>
                  </div>

                  {/* Refined CTA Button */}
                  <button
                    id={`order-btn-${prod.id}`}
                    onClick={() => onOrderProduct(prod.id)}
                    className="w-full px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] hover:brightness-110 text-[#0A1930] font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-[0_4px_25px_rgba(201,162,74,0.4)] border border-[#E5C158]/70 transition-all cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 hover:shadow-[0_0_35px_rgba(201,162,74,0.65)] active:scale-98 group"
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#0A1930] group-hover:scale-110 transition-transform shrink-0" />
                    <span className="text-center leading-snug">Order {prod.sizeBadge} Chilled</span>
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

