import React, { useState } from 'react';
import { 
  Hotel, 
  Utensils, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  Upload, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  Award,
  Heart,
  Droplets,
  HelpCircle,
  FileCheck,
  Factory,
  Dumbbell
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Custom generated high-fidelity physical mockup images matching user upload
import gymMockup from '../assets/images/regenerated_image_1784659234041.png';
import riverdaleMockup from '../assets/images/aabshar_1_5l_bottle_1779790755825.png';
import nexoraMockup from '../assets/images/nexora_mockup_1779793261776.png';

// Single clean file export with B2B private label segment
interface B2BProps {
  onQuoteClick?: () => void;
}

// Premium High-Fidelity Private Label Mockup Card utilizing actual photorealistic generated assets
const RealBottleMockupCard = ({
  imageSrc,
  brandName,
  subtitle,
  badge,
  colors,
  volumes = ["500 mL", "1.5 Liters"],
  tagline
}: {
  imageSrc: string;
  brandName: string;
  subtitle: string;
  badge: React.ReactNode;
  colors: { bg: string; name: string }[];
  volumes?: string[];
  tagline: string;
}) => {
  return (
    <div className="flex flex-col items-center frosted-glass-card rounded-3xl p-5 sm:p-6 shadow-3d hover-lift tilt-card inner-highlight transition-all duration-500 group w-full max-w-sm relative overflow-hidden">
      {/* Background glow visual accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full filter blur-xl pointer-events-none group-hover:bg-brand-teal/10 transition-colors" />
      
      {/* Elegant Category Badge */}
      <div className="w-full flex justify-between items-center mb-4">
        {badge}
        <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider uppercase">
          Designer Mockup
        </span>
      </div>

      {/* Image Container with high detail and realistic shadow */}
      <div className="relative w-full aspect-[2/3] px-4 py-8 bg-gradient-to-b from-slate-50 to-slate-100/30 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100/80">
        
        {/* Soft backlighting beam */}
        <div className="absolute inset-0 bg-radial-gradient from-white/90 via-transparent to-transparent opacity-95" />
        
        {/* The photorealistic bottle assets generated from user attachments */}
        <img 
          src={imageSrc} 
          alt={`${brandName} custom bottle pairs`}
          referrerPolicy="no-referrer"
          className="h-full w-auto object-contain z-10 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)] group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gloss highlight strip overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 select-none pointer-events-none z-20" />
      </div>

      {/* Brand & Design Info */}
      <div className="w-full mt-5 text-left">
        <h4 className="font-serif text-lg font-extrabold text-slate-900 group-hover:text-brand-teal transition-colors duration-200 leading-snug">
          {brandName}
        </h4>
        <p className="font-sans text-xs text-slate-500 font-bold mt-1 tracking-wide">
          {subtitle}
        </p>
        
        <p className="font-serif italic text-xs text-slate-600 mt-3.5 line-clamp-2 border-l-2 border-brand-teal/30 pl-2">
          "{tagline}"
        </p>

        {/* Color Palette Indicators */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 font-bold">
              Palette Match
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              {colors.map((c, i) => (
                <div 
                  key={i} 
                  className="w-3.5 h-3.5 rounded-full border border-slate-200 shadow-xs relative group/color cursor-pointer" 
                  style={{ backgroundColor: c.bg }}
                  title={c.name}
                >
                  <span className="sr-only">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 font-bold">
              Available Formats
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              {volumes.map((v, i) => (
                <span 
                  key={i} 
                  className="text-[9px] font-mono font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded shadow-2xs border border-slate-200/40"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function B2B({ onQuoteClick }: B2BProps) {
  // Form Logic State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessType: 'Hotel',
    city: '',
    quantity: '100–500 bottles',
    message: '',
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (value.trim()) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Business Name is required';
    }
    if (!formData.businessType) {
      newErrors.businessType = 'Business Type is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.quantity) {
      newErrors.quantity = 'Estimated quantity selection is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const brandingType = formData.businessType === 'Hotel' ? '🏨 Hotels & Resorts' :
                         formData.businessType === 'Restaurant' ? '🍽️ Restaurants & Cafes' :
                         formData.businessType === 'Office' ? '🏢 Offices & Corporates' :
                         formData.businessType === 'Shaadi Hall' ? '💍 Shaadi Halls & Marquees' :
                         '🏭 Companies & Events';

    const WHATSAPP_NUMBER = '923051999897';
    
    const message = `🏢 B2B PRIVATE LABEL INQUIRY — AABSHAR\n\n👤 Name: ${formData.fullName.trim()}\n🏬 Company: ${formData.companyName.trim()}\n🏷️ Business Type: ${brandingType}\n🏙️ City: ${formData.city.trim()}\n📦 Monthly Quantity: ${formData.quantity}\n${formData.message.trim() ? `💬 Requirements: ${formData.message.trim()}\n` : ''}\nInquiry via Aabshar Website ✅`;

    // Simulating safe submission delays
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');

      if (onQuoteClick) {
        onQuoteClick();
      }
    }, 1200);
  };

  // Target cards data
  const targetCards = [
    {
      id: "b2b-hotels",
      title: "Hotels & Resorts",
      desc: "Impress every guest with your branded water on every table and room",
      icon: <Hotel className="w-8 h-8 text-brand-teal group-hover:text-brand-aqua transition-colors" />,
    },
    {
      id: "b2b-restaurants",
      title: "Restaurants & Cafes",
      desc: "Serve premium mineral water that carries your restaurant's identity",
      icon: <Utensils className="w-8 h-8 text-brand-teal group-hover:text-brand-aqua transition-colors" />,
    },
    {
      id: "b2b-offices",
      title: "Offices & Corporates",
      desc: "Strengthen your brand culture with custom labeled water for meetings and staff",
      icon: <Building2 className="w-8 h-8 text-brand-teal group-hover:text-brand-aqua transition-colors" />,
    },
    {
      id: "b2b-wedding",
      title: "Shaadi Halls & Marquees",
      desc: "Make every wedding memorable with elegantly branded water bottles",
      icon: <Heart className="w-8 h-8 text-brand-teal group-hover:text-brand-aqua transition-colors animate-pulse" />,
    },
    {
      id: "b2b-companies",
      title: "Companies & Events",
      desc: "Product launches, conferences, exhibitions — your brand, every bottle",
      icon: <Factory className="w-8 h-8 text-brand-teal group-hover:text-brand-aqua transition-colors" />,
    },
  ];

  // Steps data
  const steps = [
    {
      step: "Step 1",
      title: "Submit Your Logo",
      desc: "Share your logo, brand colors, and message via our simple form",
      icon: <Upload className="w-5 h-5 text-brand-teal" />,
    },
    {
      step: "Step 2",
      title: "We Design Your Mockup",
      desc: "Our team drafts a premium custom label mockup within 24–48 hours",
      icon: <Sparkles className="w-5 h-5 text-brand-teal" />,
    },
    {
      step: "Step 3",
      title: "You Review & Approve",
      desc: "Review, request changes, give final approval before production",
      icon: <Compass className="w-5 h-5 text-brand-teal" />,
    },
    {
      step: "Step 4",
      title: "We Produce & Deliver",
      desc: "Your custom labeled Aabshar Prime Water delivered fresh to your door",
      icon: <CheckCircle2 className="w-5 h-5 text-brand-teal" />,
    },
  ];

  // Specific themes formulated for physical cylinder projection mapping
  const pearlHotelTheme = {
    capColorClass: 'bg-amber-600/90', // gold bronze cap
    capRibLineClass: 'bg-amber-100/30',
    labelBgClass: 'bg-[#FAF9F5]', // Premium Ivory
    labelBorderClass: 'border-amber-600/50',
    labelTextColorClass: 'text-amber-900 font-serif',
    labelAccentLineClass: 'bg-amber-700/60',
    labelInnerBorderClass: 'border-amber-600/30',
    labelWatermarkClass: 'text-amber-800/65 font-bold',
  };

  const spiceRouteTheme = {
    capColorClass: 'bg-emerald-800', // deep green cap
    capRibLineClass: 'bg-emerald-100/20',
    labelBgClass: 'bg-[#123C27]', // Deep Green Label
    labelBorderClass: 'border-orange-400/50',
    labelTextColorClass: 'text-amber-100 font-serif',
    labelAccentLineClass: 'bg-orange-400/60',
    labelInnerBorderClass: 'border-orange-400/30-dashed border-dashed',
    labelWatermarkClass: 'text-orange-300/70 font-sans',
  };

  const nexusCorpTheme = {
    capColorClass: 'bg-indigo-950', // corporate deep navy cap
    capRibLineClass: 'bg-indigo-200/30',
    labelBgClass: 'bg-[#0A2342]', // Navy Blue Label
    labelBorderClass: 'border-slate-300/40',
    labelTextColorClass: 'text-slate-100 font-serif',
    labelAccentLineClass: 'bg-slate-300/60',
    labelInnerBorderClass: 'border-slate-300/20',
    labelWatermarkClass: 'text-slate-300/70 font-sans',
  };

  return (
    <section id="b2b" className="py-24 bg-transparent text-slate-100 relative overflow-hidden spotlight-glow border-t border-white/5">
      {/* Continuing Background Scenery Overlay (Slightly darker for text readability) */}
      <div className="absolute inset-0 bg-[rgba(5,15,35,0.72)] z-0 pointer-events-none" />
      
      {/* Soft and subtle light organic ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-brand-aqua/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern with subtle opacity suited for a clean minimal backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headline block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/35 border border-brand-teal/40 text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-200 animate-pulse" />
            <span className="text-sky-100">Custom Private Labeling</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3.5xl sm:text-4.5xl md:text-5.5xl font-extrabold tracking-tight leading-tight text-white text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            Elevate Your Brand With <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-aqua">Custom Label Water</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sky-300 text-base sm:text-lg md:text-xl font-bold mt-4 tracking-wide"
          >
            Your Logo. Your Company. Your Message. Our Premium Mineral Water.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sky-100/90 text-sm sm:text-base leading-relaxed mt-5 max-w-2xl mx-auto"
          >
            Partner with Aabshar and put your brand on every sip. We provide premium verified mineral water in custom-labeled bottles — professionally designed and delivered. Perfect for businesses that value quality and brand presence.
          </motion.p>
        </div>

        {/* 5 Target Cards Section */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="font-serif text-sm sm:text-base uppercase tracking-widest text-[#C9A84C] font-extrabold">
              Ideal Solution for Pakistan's Leading Ventures
            </h3>
            <div className="h-[2px] w-12 bg-[#C9A84C] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {targetCards.map((target, idx) => (
              <motion.div
                key={target.id}
                id={target.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="frosted-glass-card rounded-2xl p-6.5 hover:border-brand-teal/40 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-300 flex flex-col items-center text-center group shadow-sm text-slate-800"
              >
                <div className="mb-4 bg-brand-teal/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {target.icon}
                </div>
                <h4 className="font-serif text-base font-extrabold text-slate-900 mb-2 group-hover:text-brand-teal transition-colors duration-200">
                  {target.title}
                </h4>
                <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {target.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4 Step Process Horizontal Flow */}
        <div className="mb-28 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-2xl sm:text-3.5xl font-bold text-white text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              Seamless 4-Step Process
            </h3>
            <p className="font-sans text-xs sm:text-sm text-sky-100/90 mt-2">
              From creative concept blueprints to fresh direct distribution boxes in zero delays
            </p>
          </div>

          <div className="relative">
            {/* Connecting line between the steps */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-teal-100 via-sky-200 to-teal-100 z-0 animate-pulse" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((st, idx) => (
                <motion.div
                  key={st.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-teal flex items-center justify-center text-brand-teal font-sans text-xs font-black shadow-md mb-4 relative z-10">
                    {st.step.replace("Step ", "0")}
                  </div>
                  
                  <div className="frosted-glass-card p-6 rounded-2xl flex-grow flex flex-col h-full shadow-sm hover:shadow-md transition-shadow text-slate-800">
                    <div className="mb-3 mx-auto p-2 bg-brand-teal/10 rounded-full">{st.icon}</div>
                    <h4 className="font-serif text-base font-extrabold text-slate-900 mb-2">
                      {st.title}
                    </h4>
                    <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed mt-auto">
                      {st.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 🚨 Water Bottle Mockups Side-By-Side */}
        <div className="mb-28 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-2xl sm:text-4.5xl font-bold text-white text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              Custom Water Bottle Mockups
            </h3>
            <p className="font-sans text-xs sm:text-sm text-sky-100/90 mt-2 max-w-xl mx-auto">
              Browse through photorealistic private label concepts designed for leading establishments. Each setup features a matched pair of 500 mL and 1.5 L mineral water bottles with high-definition graphic wraps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
            
            {/* Bottle Mockup 1: GYM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center h-full"
            >
              <RealBottleMockupCard
                imageSrc={gymMockup}
                brandName="GYM Definest & Training"
                subtitle="High-Performance Athletic Clubs"
                tagline="Definest athletic standards, hydrating ultimate physical training."
                badge={
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-blue-50 text-blue-800 border border-blue-100 rounded-full shadow-2xs">
                    <Dumbbell className="w-3.5 h-3.5 text-blue-600" /> Fitness & Sports
                  </span>
                }
                colors={[
                  { bg: "#093375", name: "Imperial Blue" },
                  { bg: "#3b82f6", name: "Athletic Blue" },
                  { bg: "#ffffff", name: "Pure White" }
                ]}
              />
            </motion.div>

            {/* Bottle Mockup 2: RIVERDALE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex justify-center h-full"
            >
              <RealBottleMockupCard
                imageSrc={riverdaleMockup}
                brandName="Riverdale Restaurant"
                subtitle="Premium Dining & Bistros"
                tagline="Crafted flavors matched with exceptionally pure mineral hydration."
                badge={
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-100 rounded-full shadow-2xs">
                    <Utensils className="w-3.5 h-3.5 text-amber-600" /> Fine Dining & Cafes
                  </span>
                }
                colors={[
                  { bg: "#0f172a", name: "Slate Charcoal" },
                  { bg: "#2563eb", name: "Royal Indigo" },
                  { bg: "#ffffff", name: "Classic White" }
                ]}
              />
            </motion.div>

            {/* Bottle Mockup 3: NEXORA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center h-full"
            >
              <RealBottleMockupCard
                imageSrc={nexoraMockup}
                brandName="Nexora Technologies"
                subtitle="Modern Corporate Headquarters"
                tagline="Innovate, build, and deliver with top-tier corporate branding on every desk."
                badge={
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-indigo-50 text-indigo-800 border border-indigo-100 rounded-full shadow-2xs">
                    <Building2 className="w-3.5 h-3.5 text-indigo-600" /> Tech Ventures & Events
                  </span>
                }
                colors={[
                  { bg: "#0284c7", name: "Sky Teal" },
                  { bg: "#0e7490", name: "Deep Cyan" },
                  { bg: "#1e1b4b", name: "Digital Purple/Navy" }
                ]}
              />
            </motion.div>

          </div>
        </div>

        {/* Clean Light Brand Quote Form */}
        <div id="get-quote-block" className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="frosted-glass-card rounded-3xl p-8 sm:p-12 shadow-3d inner-highlight relative overflow-hidden"
          >
            {/* Top accent visual border line */}
            <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-brand-teal to-brand-aqua" />
            
            <div className="text-center mb-8 max-w-lg mx-auto">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
                Request Your Brand Mockup
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2">
                Provide basic business details. Our premium graphic lab will assemble and present a complimentary digital mockup of your product logo labeled bottle.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form-b2b"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 animate-fade-in"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:bg-white transition-all shadow-inner ${
                          errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-teal'
                        }`}
                        placeholder="e.g. Hammad Khan"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                          ⚠️ {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Company / Business Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-2">
                        Company / Business Name *
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:bg-white transition-all shadow-inner ${
                          errors.companyName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-teal'
                        }`}
                        placeholder="e.g. Nexus Enterprises"
                      />
                      {errors.companyName && (
                        <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                          ⚠️ {errors.companyName}
                        </p>
                      )}
                    </div>

                    {/* Business Type */}
                    <div>
                      <label htmlFor="businessType" className="block text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-2">
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:bg-white transition-all shadow-sm cursor-pointer ${
                          errors.businessType ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-teal'
                        }`}
                      >
                        <option value="Hotel">Hotel / Resort</option>
                        <option value="Restaurant">Restaurant / Cafe</option>
                        <option value="Office">Office / Corporate</option>
                        <option value="Shaadi Hall">Shaadi Hall / Marquee</option>
                        <option value="Other">Other Event / Brand Type</option>
                      </select>
                      {errors.businessType && (
                        <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                          ⚠️ {errors.businessType}
                        </p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-2">
                        City *
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:bg-white transition-all shadow-inner ${
                          errors.city ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-teal'
                        }`}
                        placeholder="e.g. Abbottabad, Islamabad, Peshawar"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                          ⚠️ {errors.city}
                        </p>
                      )}
                    </div>

                    {/* Quantity */}
                    <div>
                      <label htmlFor="quantity" className="block text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-2">
                        Estimated Monthly Quantity *
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:bg-white transition-all shadow-sm cursor-pointer ${
                          errors.quantity ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-teal'
                        }`}
                      >
                        <option value="100–500 bottles">100–500 bottles</option>
                        <option value="500–1000 bottles">500–1000 bottles</option>
                        <option value="1000–5000 bottles">1000–5000 bottles</option>
                        <option value="5000+ bottles">5000+ bottles</option>
                      </select>
                      {errors.quantity && (
                        <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                          ⚠️ {errors.quantity}
                        </p>
                      )}
                    </div>

                    {/* Styled upload input */}
                    <div>
                      <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-2">
                        Upload Brand Logo (Optional)
                      </label>
                      <div className="relative flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 p-3 hover:border-brand-teal hover:bg-white transition-all group cursor-pointer">
                        <input
                          id="logoUpload"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center gap-2">
                          <Upload className="w-4 h-4 text-slate-450 group-hover:text-brand-teal transition-colors" />
                          <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors truncate">
                            {logoFile ? logoFile.name : "Select JPG / PNG logo source"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message requirements */}
                  <div className="text-left">
                    <label htmlFor="message" className="block text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-2">
                      Your Message / Special Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition-all shadow-inner resize-none"
                      placeholder="Mention preferred distribution schedules, specific fonts, custom label coordinates, etc."
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      id="b2b-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-brand-teal to-brand-aqua disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest text-sm rounded-xl shadow-btn-glow hover:shadow-btn-glow border-t border-white/35 transition-all duration-300 press-scale cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing Design Package...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Request Your Free Mockup
                        </>
                      )}
                    </button>
                  </div>

                  {/* Guarantee statement */}
                  <p className="font-sans text-center text-xs text-slate-400 mt-4">
                    ✅ Free mockup within 48 hours — No commitment required
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success-b2b"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-500 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                    B2B Application Sent!
                  </h4>
                  <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Assalam-o-Alaikum, <span className="text-slate-900 font-bold">{formData.fullName}</span>. Your requirements for <span className="text-brand-teal font-extrabold">{formData.companyName}</span> have been routed to our Design Lab. We will contact you over WhatsApp/Email to present custom labels within <span className="text-slate-900 font-bold">24 to 48 hours</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setLogoFile(null);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        businessType: 'Hotel',
                        city: '',
                        quantity: '100–500 bottles',
                        message: '',
                      });
                    }}
                    className="mt-8 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* Subtle organic bottom curve spacer */}
      <div className="absolute bottom-0 inset-x-0 h-10 overflow-hidden pointer-events-none select-none opacity-5">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px] rotate-180">
          <path d="M0,20 C360,40 720,0 1080,30 C1260,45 1350,15 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
