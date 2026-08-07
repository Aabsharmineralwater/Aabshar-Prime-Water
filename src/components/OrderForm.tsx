import React, { useState, useEffect } from 'react';
import { ShoppingCart, CheckCircle2, Phone, User, MapPin, Sparkles, MessageCircle, Truck, ChevronDown, Minus, Plus, Droplets, Check, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrderFormProps {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

const trustBadges = [
  {
    id: 'badge-1',
    icon: ShieldCheck,
    iconColor: 'text-[#00D4FF]',
    glowColor: 'from-[#00D4FF]/20',
    title: 'No Upfront Payment',
    subtitle: 'Pay Cash on Delivery',
  },
  {
    id: 'badge-2',
    icon: MessageCircle,
    iconColor: 'text-[#25D366]',
    glowColor: 'from-[#25D366]/20',
    title: 'WhatsApp Confirmation',
    subtitle: 'Within 10 Minutes',
  },
  {
    id: 'badge-3',
    icon: Truck,
    iconColor: 'text-[#C9A24A]',
    glowColor: 'from-[#C9A24A]/20',
    title: 'Chilled Fleet Delivery',
    subtitle: 'Direct Doorstep Service',
  },
];

export default function OrderForm({ selectedSize, onSizeChange }: OrderFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Islamabad');
  const [quantity, setQuantity] = useState(5);
  const [corporateNotes, setCorporateNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Mobile Trust Badge Carousel State
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [isBadgeAutoPlaying, setIsBadgeAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (!isBadgeAutoPlaying) {
      const resumeTimer = setTimeout(() => {
        setIsBadgeAutoPlaying(true);
      }, 4000);
      return () => clearTimeout(resumeTimer);
    }

    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % trustBadges.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isBadgeAutoPlaying]);

  const handlePrevBadge = () => {
    setIsBadgeAutoPlaying(false);
    setBadgeIndex((prev) => (prev - 1 + trustBadges.length) % trustBadges.length);
  };

  const handleNextBadge = () => {
    setIsBadgeAutoPlaying(false);
    setBadgeIndex((prev) => (prev + 1) % trustBadges.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > 40) {
      setIsBadgeAutoPlaying(false);
      if (diffX > 0) {
        setBadgeIndex((prev) => (prev + 1) % trustBadges.length);
      } else {
        setBadgeIndex((prev) => (prev - 1 + trustBadges.length) % trustBadges.length);
      }
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    if (selectedSize) {
      setErrors((prev) => ({ ...prev, size: '' }));
    }
  }, [selectedSize]);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setErrors((prev) => ({ ...prev, quantity: '' }));
  };
  const handleDecrement = () => {
    setQuantity((prev) => {
      const newVal = prev > 5 ? prev - 1 : 5;
      if (newVal >= 5) {
        setErrors((prevErr) => ({ ...prevErr, quantity: '' }));
      }
      return newVal;
    });
  };

  const WHATSAPP_NUMBER = '923051999897';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }
    if (!city) {
      newErrors.city = 'City of residence is required';
    }
    if (!selectedSize) {
      newErrors.size = 'Vessel size selection is required';
    }
    if (!quantity || quantity < 5) {
      newErrors.quantity = 'Minimum 5 bottles are required for delivery';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    const sizeLabel = selectedSize === '1.5L' ? '1.5 Litre' : selectedSize === '19L' ? '19 Litre Gallon' : '500ml';
    const cleanNotes = corporateNotes.trim() ? corporateNotes.trim() : '';
    
    const message = `🛒 NEW ORDER — AABSHAR PRIME WATER\n\n👤 Name: ${name.trim()}\n📞 Phone: ${phone.trim()}\n🏙️ City: ${city}\n🍶 Bottle Size: ${sizeLabel}\n📦 Quantity: ${quantity}\n${cleanNotes ? `💬 Notes: ${cleanNotes}\n` : ''}\nOrder placed via Aabshar Website ✅`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const encoded = encodeURIComponent(message);
      try {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
      } catch (err) {
        console.error("Popup/window.open blocked by sandboxed environment", err);
      }
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setCity('Islamabad');
    setQuantity(5);
    setCorporateNotes('');
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0A1930] via-[#0D223D] to-[#0A1930] text-white relative overflow-hidden cv-auto">
      {/* Top & Bottom Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-[#C9A24A]/40 pointer-events-none z-20" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-[#C9A24A]/40 pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2 font-sans">
        
        {/* Section Header with Subtle Glow & Premium Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/40 text-[#C9A24A] text-xs font-mono font-bold tracking-widest uppercase mb-3.5 shadow-[0_0_15px_rgba(201,162,74,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E5C158] animate-pulse" />
            <span>EXPRESS DIRECT DOORSTEP DELIVERY</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Order <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A]">Aabshar Mineral Water</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent mx-auto mt-3 rounded-full shadow-[0_0_10px_#00D4FF]" />

          <p className="font-sans text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            No credit card needed — cash on doorstep delivery across Rawalpindi, Islamabad & Fateh Jang with guaranteed 135 TDS purity.
          </p>
        </div>

        {/* Sleek Dark Glassmorphism Order Card Container */}
        <div className="max-w-4xl mx-auto bg-[#0A1930]/90 backdrop-blur-2xl border border-[#00D4FF]/30 rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C9A24A]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Trust Badges Row — Desktop/Tablet Grid View (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-3 gap-3.5 pb-8 border-b border-white/10 mb-8 text-center">
            <div className="p-3.5 rounded-2xl bg-[#0F3A4A]/40 border border-white/10 hover:border-[#00D4FF]/40 hover:bg-[#0F3A4A]/70 transition-all duration-300 flex flex-col items-center group cursor-default shadow-sm">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#00D4FF]/20 to-[#0A1930] border border-[#00D4FF]/40 text-[#00D4FF] mb-2 shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-serif text-xs sm:text-sm font-bold text-white">No Upfront Payment</span>
              <span className="font-sans text-[11px] text-slate-400 mt-0.5">Pay Cash on Delivery</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#0F3A4A]/40 border border-white/10 hover:border-[#25D366]/40 hover:bg-[#0F3A4A]/70 transition-all duration-300 flex flex-col items-center group cursor-default shadow-sm">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-[#0A1930] border border-[#25D366]/40 text-[#25D366] mb-2 shadow-[0_0_15px_rgba(37,211,102,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <span className="font-serif text-xs sm:text-sm font-bold text-white">WhatsApp Confirmation</span>
              <span className="font-sans text-[11px] text-slate-400 mt-0.5">Within 10 Minutes</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#0F3A4A]/40 border border-white/10 hover:border-[#C9A24A]/40 hover:bg-[#0F3A4A]/70 transition-all duration-300 flex flex-col items-center group cursor-default shadow-sm">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#C9A24A]/20 to-[#0A1930] border border-[#C9A24A]/40 text-[#C9A24A] mb-2 shadow-[0_0_15px_rgba(201,162,74,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,162,74,0.5)] transition-all">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-serif text-xs sm:text-sm font-bold text-white">Chilled Fleet Delivery</span>
              <span className="font-sans text-[11px] text-slate-400 mt-0.5">Direct Doorstep Service</span>
            </div>
          </div>

          {/* Mobile Trust Badges Swipeable Auto-Sliding Carousel (< md) */}
          <div className="block md:hidden pb-6 border-b border-white/10 mb-8 relative">
            <div 
              className="relative overflow-hidden px-10 py-1"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Left Navigation Arrow */}
              <button
                type="button"
                onClick={handlePrevBadge}
                aria-label="Previous badge"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0F3A4A]/90 border border-white/20 text-[#00D4FF] flex items-center justify-center hover:bg-[#00D4FF] hover:text-[#0A1930] transition-colors z-10 cursor-pointer shadow-md active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Right Navigation Arrow */}
              <button
                type="button"
                onClick={handleNextBadge}
                aria-label="Next badge"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0F3A4A]/90 border border-white/20 text-[#00D4FF] flex items-center justify-center hover:bg-[#00D4FF] hover:text-[#0A1930] transition-colors z-10 cursor-pointer shadow-md active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Slide Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={badgeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="p-4 rounded-2xl bg-[#0F3A4A]/40 border border-white/10 flex flex-col items-center text-center shadow-sm"
                >
                  {(() => {
                    const badge = trustBadges[badgeIndex];
                    const Icon = badge.icon;
                    return (
                      <>
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${badge.glowColor} to-[#0A1930] border border-white/20 ${badge.iconColor} mb-2 shadow-[0_0_15px_rgba(0,212,255,0.2)]`}>
                          <Icon className="w-5 h-5 fill-current" />
                        </div>
                        <span className="font-serif text-sm font-bold text-white">{badge.title}</span>
                        <span className="font-sans text-[11px] text-slate-400 mt-0.5">{badge.subtitle}</span>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Active Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-3">
              {trustBadges.map((badge, idx) => (
                <button
                  key={badge.id}
                  type="button"
                  onClick={() => {
                    setIsBadgeAutoPlaying(false);
                    setBadgeIndex(idx);
                  }}
                  aria-label={`Go to badge ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === badgeIndex ? 'w-6 bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="order-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6 text-left"
              >
                {/* Bottle Size Selection Cards */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9A24A] flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-[#00D4FF]" />
                      <span>Select Bottle Size Vessel *</span>
                    </label>
                    {errors.size && (
                      <span className="text-xs text-red-400 font-bold">{errors.size}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {[
                      { size: '500ml', label: '500 mL Personal', price: 'RS 50 / bottle', desc: 'Handy & Compact', iconSize: 'w-4 h-5' },
                      { size: '1.5L', label: '1.5 Litre Family', price: 'RS 90 / bottle', desc: 'Most Popular', iconSize: 'w-5 h-6' },
                      { size: '19L', label: '19 Litre Gallon', price: 'RS 250 / gallon', desc: 'Home & Office Dispenser', iconSize: 'w-6 h-7' },
                    ].map((item) => {
                      const isActive = selectedSize === item.size;
                      return (
                        <button
                          key={item.size}
                          type="button"
                          onClick={() => onSizeChange(item.size)}
                          className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden group ${
                            isActive
                              ? 'bg-gradient-to-br from-[#0F3A4A] via-[#0A1930] to-[#0D2644] border-[#00D4FF] text-white shadow-[0_0_25px_rgba(0,212,255,0.35)] scale-[1.02] ring-1 ring-[#00D4FF]'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/30 hover:bg-white/10'
                          }`}
                        >
                          {/* Active Checkmark Badge */}
                          {isActive && (
                            <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#00D4FF] text-[#0A1930] flex items-center justify-center shadow-[0_0_10px_#00D4FF]">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}

                          <div className="flex items-center gap-2.5 mb-2">
                            <div className={`p-2 rounded-xl flex items-center justify-center transition-colors ${
                              isActive ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40' : 'bg-white/10 text-slate-400'
                            }`}>
                              <Droplets className={item.iconSize} />
                            </div>
                            <div>
                              <span className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                                isActive ? 'bg-[#00D4FF] text-[#0A1930]' : 'bg-white/10 text-slate-300'
                              }`}>
                                {item.size}
                              </span>
                            </div>
                          </div>

                          <span className="font-serif text-sm sm:text-base font-bold block text-white mt-1">
                            {item.label}
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="font-sans text-xs text-[#C9A24A] font-bold">
                              {item.price}
                            </span>
                            <span className="font-sans text-[10px] text-slate-400 italic">
                              {item.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name and Phone Inputs with Embedded Icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4 text-[#00D4FF]" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Muhammad Ali"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (e.target.value.trim()) {
                            setErrors((prev) => ({ ...prev, name: '' }));
                          }
                        }}
                        className={`w-full bg-[#0F3A4A]/60 border rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] focus:bg-[#0F3A4A] transition-all ${
                          errors.name ? 'border-red-500/80 bg-red-950/20' : 'border-white/20'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 font-semibold">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-2">
                      WhatsApp / Mobile Phone *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4 text-[#25D366]" />
                      </div>
                      <input
                        type="tel"
                        placeholder="e.g. 0305 1999897"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (e.target.value.trim()) {
                            setErrors((prev) => ({ ...prev, phone: '' }));
                          }
                        }}
                        className={`w-full bg-[#0F3A4A]/60 border rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] focus:bg-[#0F3A4A] transition-all ${
                          errors.phone ? 'border-red-500/80 bg-red-950/20' : 'border-white/20'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1 font-semibold">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* City Selection and Quantity Counter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-2">
                      City of Delivery *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4 text-[#00D4FF]" />
                      </div>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-[#0F3A4A]/60 border border-white/20 rounded-xl pl-10 pr-10 py-3 text-white text-sm appearance-none focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] focus:bg-[#0F3A4A] transition-all cursor-pointer"
                      >
                        <option value="Islamabad" className="bg-[#0A1930] text-white">Islamabad</option>
                        <option value="Rawalpindi" className="bg-[#0A1930] text-white">Rawalpindi</option>
                        <option value="Fateh Jang" className="bg-[#0A1930] text-white">Fateh Jang</option>
                        <option value="Lahore" className="bg-[#0A1930] text-white">Lahore</option>
                        <option value="Faisalabad" className="bg-[#0A1930] text-[#0A1930]">Faisalabad</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4 text-[#00D4FF]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-2">
                      Bottle Quantity (Min. 5 units)
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        aria-label="Decrease quantity"
                        className="w-12 h-12 bg-gradient-to-br from-[#0F3A4A] to-[#0A1930] hover:from-[#00D4FF]/20 hover:to-[#0F3A4A] border border-white/20 hover:border-[#00D4FF] rounded-xl text-white font-bold text-xl flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <div className="flex-1 text-center font-mono text-base font-extrabold bg-[#0F3A4A]/70 border border-[#00D4FF]/40 py-2.5 rounded-xl text-white shadow-[inset_0_0_10px_rgba(0,212,255,0.1)] flex items-center justify-center gap-2">
                        <span className="text-[#00D4FF] text-lg">{quantity}</span>
                        <span className="text-xs font-sans text-slate-300">units</span>
                      </div>

                      <button
                        type="button"
                        onClick={handleIncrement}
                        aria-label="Increase quantity"
                        className="w-12 h-12 bg-gradient-to-br from-[#0F3A4A] to-[#0A1930] hover:from-[#00D4FF]/20 hover:to-[#0F3A4A] border border-white/20 hover:border-[#00D4FF] rounded-xl text-white font-bold text-xl flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    {errors.quantity && (
                      <p className="text-xs text-red-400 mt-1 font-semibold">{errors.quantity}</p>
                    )}
                  </div>
                </div>

                {/* Delivery / Special Request Notes (Optional) */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Delivery Instructions / Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Call before arrival, corporate branding inquiry, floor number..."
                    value={corporateNotes}
                    onChange={(e) => setCorporateNotes(e.target.value)}
                    className="w-full bg-[#0F3A4A]/40 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00D4FF] transition-all"
                  />
                </div>

                {/* Submit Button (Golden Order Now with WhatsApp Icon & Shadow Glow) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] hover:brightness-110 text-[#0A1930] font-black text-[11px] xs:text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-[0_4px_25px_rgba(201,162,74,0.4)] border border-[#E5C158]/70 transition-all cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 mt-5 hover:shadow-[0_0_35px_rgba(201,162,74,0.65)] active:scale-98 group"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#0A1930] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-center leading-snug">{isSubmitting ? "Routing Order to Dispatch..." : "Confirm & Schedule WhatsApp Delivery"}</span>
                </button>
              </motion.form>
            ) : (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-[#00D4FF] mx-auto mb-4 animate-bounce drop-shadow-[0_0_20px_#00D4FF]" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Order Dispatched to Dispatch Team!</h3>
                <p className="font-sans text-sm text-slate-300 mt-3 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-white">{name}</span>. Our Islamabad/Rawalpindi fleet driver will contact you at <span className="text-[#00D4FF] font-bold">{phone}</span> to confirm doorstep delivery.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold text-white transition-all cursor-pointer hover:border-[#00D4FF]"
                >
                  Place Additional Order
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

