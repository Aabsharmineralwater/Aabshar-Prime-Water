import React, { useState, useEffect } from 'react';
import { ShoppingCart, CheckCircle2, Phone, User, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import bottleImage500ml from '../assets/images/order_form_500ml.png';
import bottleImage15L from '../assets/images/order_form_1_5l.png';

interface OrderFormProps {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export default function OrderForm({ selectedSize, onSizeChange }: OrderFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Islamabad');
  const [quantity, setQuantity] = useState(5);
  const [isCorporate, setIsCorporate] = useState(false);
  const [corporateNotes, setCorporateNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    
    const sizeLabel = selectedSize === '1.5L' ? '1.5 Litre' : '500ml';
    const cleanNotes = isCorporate && corporateNotes.trim() ? corporateNotes.trim() : '';
    
    const message = `🛒 NEW ORDER — AABSHAR PRIME WATER\n\n👤 Name: ${name.trim()}\n📞 Phone: ${phone.trim()}\n🏙️ City: ${city}\n🍶 Bottle Size: ${sizeLabel}\n📦 Quantity: ${quantity}\n${cleanNotes ? `💬 Message: ${cleanNotes}\n` : ''}\nOrder placed via Aabshar Website ✅`;

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
    setIsCorporate(false);
    setCorporateNotes('');
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0A1930] via-[#0D223D] to-[#0A1930] text-white relative overflow-hidden cv-auto">
      {/* Top & Bottom Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-[#C9A24A]/40 pointer-events-none z-20" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-[#C9A24A]/40 pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-[#C9A24A] font-bold tracking-widest uppercase bg-[#C9A24A]/10 border border-[#C9A24A]/30 px-3.5 py-1 rounded-full mb-3 inline-block">
            EXPRESS DIRECT DELIVERY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Order <span className="font-serif italic text-[#00D4FF]">Aabshar Mineral Water</span>
          </h2>
          <p className="font-sans text-slate-300 text-sm sm:text-base mt-2">
            No credit card needed — cash on doorstep delivery across Rawalpindi, Islamabad & Fateh Jang.
          </p>
        </div>

        {/* Sleek Dark Glassmorphism Container */}
        <div className="max-w-4xl mx-auto bg-[#0A1930]/95 backdrop-blur-2xl border border-[#00D4FF]/30 rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Horizontal Icon Strip Across Top */}
          <div className="grid grid-cols-3 gap-4 pb-8 border-b border-white/10 mb-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-2.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] mb-1.5">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <span className="font-serif text-xs font-bold text-white">No Upfront Payment</span>
              <span className="font-sans text-[10px] text-slate-400">Cash on delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2.5 rounded-full bg-[#C9A24A]/10 border border-[#C9A24A]/30 text-[#C9A24A] mb-1.5">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-serif text-xs font-bold text-white">WhatsApp Confirmation</span>
              <span className="font-sans text-[10px] text-slate-400">Within 10 mins</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] mb-1.5">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-serif text-xs font-bold text-white">Chilled Fleet Delivery</span>
              <span className="font-sans text-[10px] text-slate-400">Doorstep runs</span>
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
                {/* Tactile Toggle Buttons for Bottle Size Selection */}
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-3">
                    Select Bottle Size Vessel *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { size: '500ml', label: '500 mL Personal', price: 'RS 50 / bottle' },
                      { size: '1.5L', label: '1.5 Litre Family', price: 'RS 90 / bottle' },
                      { size: '19L', label: '19 Litre Gallon', price: 'RS 250 / gallon' },
                    ].map((item) => {
                      const isActive = selectedSize === item.size;
                      return (
                        <button
                          key={item.size}
                          type="button"
                          onClick={() => onSizeChange(item.size)}
                          className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                            isActive
                              ? 'bg-gradient-to-br from-[#0F3A4A] to-[#0A1930] border-[#00D4FF] text-white shadow-[0_0_20px_rgba(0,212,255,0.3)] scale-[1.02]'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/30'
                          }`}
                        >
                          <span className={`font-mono text-xs font-black block ${isActive ? 'text-[#00D4FF]' : 'text-slate-400'}`}>
                            {item.size}
                          </span>
                          <span className="font-serif text-sm font-bold block mt-1">
                            {item.label}
                          </span>
                          <span className="font-sans text-[10px] text-slate-400 block mt-0.5">
                            {item.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name and Phone Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                      Full Name *
                    </label>
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
                      className={`w-full bg-[#0F3A4A]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-all ${
                        errors.name ? 'border-red-500' : 'border-white/20'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                      WhatsApp / Mobile Phone *
                    </label>
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
                      className={`w-full bg-[#0F3A4A]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-all ${
                        errors.phone ? 'border-red-500' : 'border-white/20'
                      }`}
                    />
                  </div>
                </div>

                {/* City and Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                      City of Delivery *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#0F3A4A] border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF]"
                    >
                      <option value="Islamabad" className="bg-[#0A1930]">Islamabad</option>
                      <option value="Rawalpindi" className="bg-[#0A1930]">Rawalpindi</option>
                      <option value="Fateh Jang" className="bg-[#0A1930]">Fateh Jang</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                      Bottle Quantity (Min. 5 units)
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="w-12 h-11 bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold text-lg flex items-center justify-center transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-mono text-lg font-bold bg-[#0F3A4A]/60 border border-white/20 py-2.5 rounded-xl text-white">
                        {quantity} bottles
                      </span>
                      <button
                        type="button"
                        onClick={handleIncrement}
                        className="w-12 h-11 bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold text-lg flex items-center justify-center transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit Button (Golden Order Now style) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] hover:brightness-110 text-[#0A1930] font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-[0_4px_25px_rgba(201,162,74,0.4)] border border-[#E5C158]/60 transition-all cursor-pointer flex items-center justify-center gap-2 mt-4 hover:shadow-[0_0_35px_rgba(201,162,74,0.6)] active:scale-98"
                >
                  {isSubmitting ? "Routing Order..." : "Confirm & Schedule WhatsApp Delivery"}
                </button>
              </motion.form>
            ) : (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-[#00D4FF] mx-auto mb-3 animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-white">Order Dispatched to Dispatch Team!</h3>
                <p className="font-sans text-xs text-slate-300 mt-2">
                  Thank you, <span className="font-bold text-white">{name}</span>. Our Islamabad/Rawalpindi fleet driver will contact you at <span className="text-[#00D4FF] font-bold">{phone}</span> to confirm doorstep delivery.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold text-white transition-colors cursor-pointer"
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
