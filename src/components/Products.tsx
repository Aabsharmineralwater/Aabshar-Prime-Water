import { useState } from 'react';
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
  Truck,
  MessageCircle,
  CheckCircle2,
  BadgePercent,
  Layers,
  Clock,
  Bell,
  Paintbrush,
  Building2,
  Check,
  LucideIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import WaterRippleEffect from './WaterRippleEffect';
import bottleImage15L from '../assets/images/product_card_1_5l.png';
import bottleImage500ml from '../assets/images/product_card_500ml.png';
import bottleImage19L from '../assets/images/regenerated_image_1788459984885.png';
import bottleImage12L from '../assets/images/regenerated_image_1788460019830.png';
import bottleImage6L from '../assets/images/regenerated_image_1788460051533.png';
import privateLabelImg from '../assets/images/b2b_nexora_card_mockup.png';

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
  isComingSoon?: boolean;
  isPrivateLabel?: boolean;
  blendMultiply?: boolean;
  notifyMessage?: string;
}

interface ProductsProps {
  onOrderProduct: (size: string) => void;
}

export default function Products({ onOrderProduct }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'available' | 'coming_soon'>('all');
  const [notifiedItems, setNotifiedItems] = useState<Record<string, boolean>>({});

  const handleNotifyMe = (item: ProductItem) => {
    setNotifiedItems((prev) => ({ ...prev, [item.id]: true }));
    const text = encodeURIComponent(
      item.notifyMessage || `Hello Aabshar Team, please notify me when the ${item.sizeBadge} (${item.name}) becomes available!`
    );
    window.open(`https://wa.me/923051999897?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const items: ProductItem[] = [
    // 1. Current Available Product: 500ml
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
      isComingSoon: false,
    },
    // 2. Current Available Product: 1.5L
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
      isComingSoon: false,
    },
    // 3. Current Available Product: Private Label Service
    {
      id: 'private-label',
      name: 'Aabshar Bespoke Labeling',
      sizeBadge: 'Private Label (Custom Branding)',
      subtitle: 'Custom branded water bottles for corporate, hospitality & events',
      price: 'Custom Quote',
      priceDetail: 'Tailored batch pricing & zero setup fees',
      features: [
        { text: 'High-definition custom CMYK logo & foil branding', icon: Paintbrush },
        { text: 'Available across 500ml & 1.5L ergonomic formats', icon: Layers },
        { text: 'Trusted by luxury hotels, gyms, weddings & summits', icon: Building2 },
        { text: 'Certified mineral profile (TDS 120–160 PPM)', icon: ShieldCheck },
        { text: 'Dedicated corporate account manager & fleet logistics', icon: Truck },
      ],
      imgScale: 'scale-95 sm:scale-100',
      tagline: 'Elevate your brand presence with signature customized mineral water bottles.',
      image: privateLabelImg,
      isComingSoon: false,
      isPrivateLabel: true,
    },
    // 4. Coming Soon Product: 19 Litre Gallon
    {
      id: '19L',
      name: 'Aabshar Hydro Tower',
      sizeBadge: '19 Litre Gallon',
      subtitle: 'Dispenser cooler vessel for homes, offices & corporate cafeterias',
      price: 'Coming Soon',
      priceDetail: 'Weekly swap subscription launching shortly',
      features: [
        { text: 'Universal fit for electric dispensers & ceramic crocks', icon: Home },
        { text: 'Heavy-duty food-grade polycarbonate construction', icon: ShieldCheck },
        { text: 'Integrated ergonomic grip for balanced, safe lifting', icon: Dumbbell },
        { text: 'Tamper-evident hygienic seal with every fleet dispatch', icon: CheckCircle2 },
        { text: 'Scheduled doorstep bottle replacement route', icon: Truck },
      ],
      imgScale: 'scale-100',
      tagline: 'High-volume pure mineral hydration engineered for water coolers and active workspaces.',
      image: bottleImage19L,
      isComingSoon: true,
      blendMultiply: false,
      notifyMessage: 'Hello Aabshar Team, please notify me when the 19 Litre Gallon bottle is available for order!',
    },
    // 5. Coming Soon Product: 12 Litre Bottle
    {
      id: '12L',
      name: 'Aabshar Home Reservoir',
      sizeBadge: '12 Litre Bottle',
      subtitle: 'Mid-capacity dispenser & counter-top reservoir for modern households',
      price: 'Coming Soon',
      priceDetail: 'Eco-conscious bulk family format',
      features: [
        { text: 'Convenient countertop footprint without a floor cooler', icon: Home },
        { text: 'Reinforced heavy-duty carry handle for effortless pouring', icon: Zap },
        { text: 'Balanced TDS 120–160 PPM for cellular wellness', icon: Droplets },
        { text: '100% recyclable, premium high-clarity BPA-free PET', icon: ShieldCheck },
        { text: 'Airtight dual-seal closure keeps water crisp and fresh', icon: Snowflake },
      ],
      imgScale: 'scale-100',
      tagline: 'A modern mid-size pantry reservoir providing multi-day pure water for the entire family.',
      image: bottleImage12L,
      isComingSoon: true,
      blendMultiply: false,
      notifyMessage: 'Hello Aabshar Team, please notify me when the 12 Litre bottle is launched!',
    },
    // 6. Coming Soon Product: 6 Litre Bottle
    {
      id: '6L',
      name: 'Aabshar Pantry Reserve',
      sizeBadge: '6 Litre Bottle',
      subtitle: 'Compact bulk bottle crafted for standard refrigerator shelves & road trips',
      price: 'Coming Soon',
      priceDetail: 'Convenient multi-day personal hydration',
      features: [
        { text: 'Slim profile fits horizontally or vertically on fridge shelves', icon: Snowflake },
        { text: 'Ergonomic grab-and-go handle for picnics, sports & travel', icon: Dumbbell },
        { text: 'Anti-splash precision neck prevents spills while dispensing', icon: Droplets },
        { text: 'Lightweight rigid food-safe design for easy handling', icon: ShieldCheck },
        { text: 'Ideal multi-day backup supply for active households', icon: Home },
      ],
      imgScale: 'scale-100',
      tagline: 'Easy-to-chill, grab-and-go bulk format tailored for refrigerators and road journeys.',
      image: bottleImage6L,
      isComingSoon: true,
      blendMultiply: false,
      notifyMessage: 'Hello Aabshar Team, please notify me when the 6 Litre bottle is launched!',
    },
  ];

  const filteredItems = items.filter((item) => {
    if (activeTab === 'available') return !item.isComingSoon;
    if (activeTab === 'coming_soon') return item.isComingSoon;
    return true;
  });

  return (
    <section id="products" className="py-20 bg-slate-50/70 text-slate-800 relative overflow-hidden cv-auto border-t border-b border-slate-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
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
          <p className="font-sans text-slate-600 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
            From active personal bottles to upcoming dispenser gallons and bespoke private labeling, discover our complete mineral water line.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 max-w-xl mx-auto px-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shadow-xs ${
              activeTab === 'all'
                ? 'bg-[#0284C7] text-white shadow-md shadow-sky-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>All Products</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              activeTab === 'all' ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              6
            </span>
          </button>

          <button
            onClick={() => setActiveTab('available')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shadow-xs ${
              activeTab === 'available'
                ? 'bg-[#0284C7] text-white shadow-md shadow-sky-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available Now</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              activeTab === 'available' ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              3
            </span>
          </button>

          <button
            onClick={() => setActiveTab('coming_soon')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shadow-xs ${
              activeTab === 'coming_soon'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Clock className={`w-3.5 h-3.5 ${activeTab === 'coming_soon' ? 'text-white' : 'text-amber-500'}`} />
            <span>Coming Soon</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              activeTab === 'coming_soon' ? 'bg-white/25 text-white' : 'bg-amber-100 text-amber-800'
            }`}>
              3
            </span>
          </button>
        </div>

        {/* Product Cards - Asymmetric Split Layout Cards */}
        <div className="flex flex-col gap-6 sm:gap-10 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((prod, index) => {
              const isComingSoon = prod.isComingSoon;
              const isPrivateLabel = prod.isPrivateLabel;
              const isNotified = notifiedItems[prod.id];

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={`bg-white border rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 relative group ${
                    isComingSoon
                      ? 'border-amber-200/90 hover:border-amber-400/80 ring-1 ring-amber-100'
                      : isPrivateLabel
                      ? 'border-sky-300/90 hover:border-blue-400'
                      : 'border-slate-200/90 hover:border-sky-300'
                  }`}
                >
                  {/* High-Contrast "Coming Soon" Badge in Top-Right Corner */}
                  {isComingSoon && (
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30">
                      <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md border border-amber-300/40">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-spin-slow" />
                        <span>COMING SOON</span>
                      </div>
                    </div>
                  )}

                  {/* Private Label Corner Ribbon */}
                  {isPrivateLabel && (
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30">
                      <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-slate-900 to-[#0284C7] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                        <Crown className="w-3 h-3 text-amber-300" />
                        <span>B2B CUSTOM</span>
                      </div>
                    </div>
                  )}

                  {/* Left Column: Asymmetric Bottle Showcase Stage */}
                  <div className={`md:col-span-5 relative min-h-[280px] sm:min-h-[320px] md:min-h-[450px] flex flex-col items-center justify-end pt-12 sm:pt-16 md:pt-16 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 border-b md:border-b-0 md:border-r overflow-hidden ${
                    isComingSoon
                      ? 'bg-gradient-to-b from-amber-50/40 via-sky-50/40 to-slate-100 border-amber-200/60'
                      : 'bg-gradient-to-b from-sky-50/80 via-sky-50/40 to-slate-100 border-slate-200'
                  }`}>
                    {/* Radial Spotlight & Caustic Light behind Bottle */}
                    <div className={`absolute w-56 sm:w-64 h-56 sm:h-64 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none ${
                      isComingSoon
                        ? 'bg-[radial-gradient(circle,rgba(245,158,11,0.18)_0%,transparent_75%)]'
                        : 'bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_75%)]'
                    }`} />

                    {/* Refined Size Badge Top Left */}
                    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20">
                      <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[#0284C7] text-[11px] sm:text-xs font-mono font-black tracking-wider uppercase shadow-xs">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00D4FF]" />
                        <span>{prod.sizeBadge}</span>
                      </div>
                    </div>

                    {/* Glowing Platform Pedestal & Water Ripple Effect beneath Bottle */}
                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-44 sm:w-48 md:w-56 h-8 sm:h-10 bg-gradient-to-r from-sky-200/40 via-sky-300/50 to-sky-200/40 rounded-[100%] blur-md pointer-events-none z-10 animate-ripple-pulse" />
                    <WaterRippleEffect size="lg" className="bottom-1 sm:bottom-2 opacity-60" />

                    {/* Floating Bottle Render with Gentle Idle Bobbing */}
                    <motion.img
                      src={prod.image}
                      alt={`${prod.name} - ${prod.sizeBadge}`}
                      loading="lazy"
                      decoding="async"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                      className={`h-56 sm:h-60 md:h-72 w-auto object-contain pointer-events-none filter drop-shadow-[0_16px_24px_rgba(2,132,199,0.22)] z-20 mt-4 sm:mt-6 md:mt-6 mb-1 ${
                        prod.blendMultiply ? 'mix-blend-multiply' : ''
                      } ${prod.imgScale}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Right Column: Details & Actions */}
                  <div className="md:col-span-7 p-4 sm:p-6 md:p-8 flex flex-col justify-between text-left">
                    <div>
                      {/* Top Badges Row */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                        {isComingSoon ? (
                          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest">
                            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600" />
                            <span>UPCOMING LAUNCH</span>
                          </div>
                        ) : isPrivateLabel ? (
                          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest">
                            <Paintbrush className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0284C7]" />
                            <span>BESPOKE BRANDING</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest">
                            <Droplets className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00D4FF]" />
                            <span>AABSHAR PURE SERIES</span>
                          </div>
                        )}

                        <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
                          <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0284C7]" />
                          <span>TDS 135 VERIFIED</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-[#0284C7] transition-colors duration-200 mb-0.5 sm:mb-1">
                        {prod.name}
                      </h3>
                      <p className="font-sans text-slate-600 text-xs sm:text-sm font-medium mb-2.5 sm:mb-4">
                        {prod.subtitle}
                      </p>

                      {/* Animated Thin Accent Line */}
                      <div className={`w-full h-[1.5px] mb-3 sm:mb-5 ${
                        isComingSoon
                          ? 'bg-gradient-to-r from-amber-500 via-amber-300 to-transparent'
                          : 'bg-gradient-to-r from-[#0088CC] via-sky-300 to-transparent'
                      }`} />

                      {/* Specifications List with Contextual Icons - Hidden on mobile (< md), visible on tablet/desktop (>= md) */}
                      <ul className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {prod.features.map((feat) => {
                          const IconComponent = feat.icon;
                          return (
                            <li key={feat.text} className="flex items-center text-xs text-slate-700 font-medium">
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2.5 flex-shrink-0 ${
                                isComingSoon
                                  ? 'bg-amber-50 border-amber-200 text-amber-600'
                                  : 'bg-sky-50 border-sky-200 text-[#0284C7]'
                              }`}>
                                <IconComponent className="w-3 h-3" />
                              </div>
                              <span className="leading-tight">{feat.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div>
                      {/* Pricing / Availability Box */}
                      {isComingSoon ? (
                        <div className="mb-3 sm:mb-5 p-2.5 sm:p-4 bg-amber-50/70 rounded-xl sm:rounded-2xl border border-amber-200/90 flex items-center justify-between gap-2 sm:gap-3 shadow-xs relative overflow-hidden">
                          <div>
                            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                              Release Status
                            </span>
                            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-900 leading-none">
                              Coming Soon
                            </span>
                            <span className="text-[10px] sm:text-xs text-amber-700/90 font-medium block mt-1">
                              {prod.priceDetail}
                            </span>
                          </div>
                          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-mono text-[10px] sm:text-xs font-black uppercase tracking-wide">
                            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700" />
                            <span>In Production</span>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-3 sm:mb-5 p-2.5 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 flex items-center justify-between gap-2 sm:gap-3 shadow-xs relative overflow-hidden group/price">
                          <div className="relative z-10">
                            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                              {isPrivateLabel ? 'Pricing Plan' : 'Unit Retail Price'}
                            </span>
                            <div className="flex items-baseline gap-1">
                              <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-none">
                                {prod.price}
                              </span>
                            </div>
                            <span className="text-[10px] sm:text-xs text-slate-500 font-medium block mt-1">
                              {prod.priceDetail}
                            </span>
                          </div>
                          <div className="relative z-10 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284C7] font-mono text-[10px] sm:text-xs font-black uppercase tracking-wide">
                            {isPrivateLabel ? (
                              <>
                                <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0284C7]" />
                                <span>Zero Setup Fee</span>
                              </>
                            ) : (
                              <>
                                <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0284C7]" />
                                <span>Bulk Savings</span>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* CTA Actions */}
                      {isComingSoon ? (
                        <div>
                          {/* Notify Me on WhatsApp Action */}
                          <button
                            id={`notify-btn-${prod.id}`}
                            onClick={() => handleNotifyMe(prod)}
                            className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl sm:rounded-2xl shadow-md border border-amber-400/50 transition-all cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 hover:shadow-lg active:scale-98"
                          >
                            {isNotified ? (
                              <>
                                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                                <span>Waitlist Confirmed! Opening WhatsApp...</span>
                              </>
                            ) : (
                              <>
                                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                                <span>Notify Me When Available</span>
                              </>
                            )}
                          </button>
                          <p className="font-sans text-center text-[10px] sm:text-[11px] text-amber-700/80 mt-1.5 sm:mt-2 font-medium">
                            Join the priority launch waitlist to receive early-bird stock alerts and discounts.
                          </p>
                        </div>
                      ) : isPrivateLabel ? (
                        <div>
                          <a
                            id="private-label-btn"
                            href="#b2b"
                            onClick={(e) => {
                              e.preventDefault();
                              const b2bEl = document.querySelector('#b2b');
                              if (b2bEl) {
                                b2bEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }}
                            className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gradient-to-r from-slate-900 via-[#0A2540] to-[#0284C7] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl sm:rounded-2xl shadow-md border border-sky-400/30 transition-all cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 hover:shadow-lg active:scale-98 group"
                          >
                            <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D4FF] group-hover:rotate-12 transition-transform shrink-0" />
                            <span className="text-center leading-snug">Explore Private Label Branding</span>
                          </a>
                          <p className="font-sans text-center text-[10px] sm:text-[11px] text-slate-500 mt-1.5 sm:mt-2 font-medium">
                            Full digital preview & 3D mockup consultation for businesses, hotels & events
                          </p>
                        </div>
                      ) : (
                        <div>
                          <button
                            id={`order-btn-${prod.id}`}
                            onClick={() => onOrderProduct(prod.id)}
                            className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gradient-to-r from-[#00D4FF] via-[#0284C7] to-[#0369A1] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl sm:rounded-2xl shadow-md border border-[#00D4FF]/50 transition-all cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 hover:shadow-lg active:scale-98 group"
                          >
                            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white group-hover:scale-110 transition-transform shrink-0" />
                            <span className="text-center leading-snug">Order {prod.sizeBadge} Chilled</span>
                          </button>
                          <p className="font-sans text-center text-[10px] sm:text-[11px] text-slate-500 mt-1.5 sm:mt-2 font-medium">
                            Daily Chilled Express Delivery across Rawalpindi, Islamabad & Fateh Jang
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* SPECIAL WHOLESALE / BULK ORDER PRICING CARD */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 max-w-5xl mx-auto relative group"
        >
          {/* Subtle Outer Cyan Aura / Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF]/40 via-[#0284C7]/30 to-[#0088CC]/40 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

          {/* Main Card Container */}
          <div className="relative bg-gradient-to-br from-white via-sky-50/50 to-blue-50/30 border-2 border-sky-300 hover:border-[#00D4FF] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl overflow-hidden">
            
            {/* Background Water Caustic / Decorative Ripple */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(0,180,216,0.12)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[radial-gradient(circle,rgba(2,132,199,0.1)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              
              {/* Left Column: Heading, Badges, Subtext, and Feature Checklist */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#0284C7] to-[#00D4FF] text-white font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
                    <BadgePercent className="w-3.5 h-3.5" />
                    <span>Bulk Order Special</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 font-mono text-[10px] sm:text-xs font-black uppercase tracking-wide shadow-xs animate-pulse">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>FREE DELIVERY</span>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200 text-slate-700 font-mono text-[10px] sm:text-xs font-bold uppercase">
                    <Layers className="w-3 h-3 text-[#0284C7]" />
                    <span>500ML & 1.5L Universal Rate</span>
                  </div>
                </div>

                {/* Main Heading */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                  Wholesale Rate Special
                </h3>

                {/* Subtext */}
                <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 font-normal max-w-xl">
                  Best rate for bulk/wholesale orders — available for both <span className="font-bold text-slate-800">500ml</span> and <span className="font-bold text-slate-800">1.5 litre</span> bottles.
                </p>

                {/* Bullet Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 w-full mb-2 sm:mb-0">
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center flex-shrink-0 text-[#0284C7]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>Valid for 500ml & 1.5L PET Cases</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 text-emerald-600">
                      <Truck className="w-3.5 h-3.5" />
                    </div>
                    <span>100% Free Doorstep Delivery</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center flex-shrink-0 text-[#0284C7]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span>TDS 120-160 Lab Verified Purity</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center flex-shrink-0 text-[#0284C7]">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span>Rwp, Islamabad & Fateh Jang</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Custom Wholesale Pricing Box, Visual Callout & Actions */}
              <div className="lg:col-span-5 bg-white/90 backdrop-blur-md rounded-2xl border border-sky-200 p-4 sm:p-6 shadow-md flex flex-col justify-between text-center lg:text-left">
                
                {/* Custom Wholesale Pricing Display */}
                <div className="mb-4 text-center">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Tiered Volume Savings
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] via-[#00B4D8] to-[#0284C7] leading-tight">
                    Custom Wholesale Pricing
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mt-1.5">
                    Better rates unlocked as your order grows • Get a personalized quote based on your order size
                  </p>
                </div>

                {/* Thin Divider */}
                <div className="w-full h-px bg-slate-200 mb-4" />

                {/* CTAs */}
                <div className="flex flex-col gap-2.5">
                  <button
                    id="order-wholesale-btn"
                    onClick={() => onOrderProduct('500ml')}
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#00D4FF] via-[#0284C7] to-[#0369A1] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md border border-[#00D4FF]/50 transition-all cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg active:scale-98"
                  >
                    <ShoppingCart className="w-4 h-4 text-white shrink-0" />
                    <span>Get Wholesale Quote</span>
                  </button>

                  <a
                    id="wholesale-whatsapp-btn"
                    href="https://wa.me/923051999897?text=Hello%20Aabshar%20Team%2C%20I%20am%20interested%20in%20Custom%20Wholesale%20Pricing%20for%20bulk%20orders%20(500ml%20/%201.5L)%20with%20Free%20Delivery.%20Please%20provide%20a%20quote%20based%20on%20my%20volume."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Contact for Bulk Order</span>
                  </a>
                </div>

                <p className="font-sans text-center text-[10px] text-slate-500 mt-2.5 font-medium">
                  ⚡ Same-Day / Scheduled Bulk Fleet Dispatch Available
                </p>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

