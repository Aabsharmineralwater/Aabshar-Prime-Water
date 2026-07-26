import React, { useState, useEffect } from 'react';
import { ShoppingCart, CheckCircle2, Phone, User, Landmark, HelpCircle, Sparkles, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import bottleImage500ml from '../assets/images/order_form_500ml.webp';
import bottleImage15L from '../assets/images/order_form_1_5l.webp';

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

  // Synchronize local states if parent changes selection (e.g. they click a button on Products card)
  useEffect(() => {
    // If we want to do specific settings
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
      // Smooth scroll back to form top if needed (optional)
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Construct exact structured WhatsApp message as requested
    const sizeLabel = selectedSize === '1.5L' ? '1.5 Litre' : '500ml';
    const cleanNotes = isCorporate && corporateNotes.trim() ? corporateNotes.trim() : '';
    
    const message = `🛒 NEW ORDER — AABSHAR PRIME WATER\n\n👤 Name: ${name.trim()}\n📞 Phone: ${phone.trim()}\n🏙️ City: ${city}\n🍶 Bottle Size: ${sizeLabel}\n📦 Quantity: ${quantity}\n${cleanNotes ? `💬 Message: ${cleanNotes}\n` : ''}\nOrder placed via Aabshar Website ✅`;

    // Simulate premium backend network submission
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
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden spotlight-glow border-t border-white/5 text-slate-100 cv-auto">
      {/* Continuing Background Scenery Overlay (Slightly darker for text readability) */}
      <div className="absolute inset-0 bg-[rgba(5,15,35,0.72)] z-0 pointer-events-none" />
      {/* Top Wave Divider Representing Safe Purified Flow */}
      <div className="absolute top-0 inset-x-0 h-10 overflow-hidden pointer-events-none z-1 select-none opacity-40">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px]">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>

      {/* Background aesthetics */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-aqua/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated Rising Water Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute left-[18%] bottom-10 w-3 h-3 bg-brand-teal/15 rounded-full blur-xs animate-bubble-slow" />
        <div className="absolute right-[12%] bottom-20 w-4.5 h-4.5 bg-brand-teal/10 rounded-full blur-xs animate-bubble-fast [animation-delay:3.5s]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Left Column: Premium Selling/Trust items */}
          <div className="lg:col-span-12 xl:col-span-5 text-left flex flex-col justify-center relative z-10">
            <span className="font-sans text-xs text-white font-bold tracking-widest uppercase bg-brand-teal/30 border border-brand-teal/40 px-3.5 py-1.5 rounded-full mb-4 max-w-max inline-block">
              Express Shipment Scheduling
            </span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-white text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] tracking-tight mb-4">
              Place Your Mineral Order Today
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-brand-teal to-brand-aqua rounded-full mb-6" />
            <p className="font-sans text-sky-100/90 text-sm sm:text-base leading-relaxed mb-8">
              Fill out the schedule request form. No immediate credit card details are needed. Our regional operations team in Islamabad or Rawalpindi will dispatch a confirmation message on WhatsApp or place a direct verified phone call within 10 minutes to schedule delivery slots.
            </p>

            {/* Micro trust lists */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-sky-300 mt-0.5 border border-brand-teal/30">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-white">No Upfront Payment</h4>
                  <p className="font-sans text-xs sm:text-sm text-sky-100/70">Pay on cash delivery or direct bank transfers upon landing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-sky-300 mt-0.5 border border-brand-teal/30">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-white">Pre-Chilled Delivery</h4>
                  <p className="font-sans text-xs sm:text-sm text-sky-100/70">All bottles ship in clean temperature-regulated distribution vehicles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-sky-300 mt-0.5 border border-brand-teal/30">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-white">Minimum Order of 5</h4>
                  <p className="font-sans text-xs sm:text-sm text-sky-100/70">We establish custom route optimizations starting as low as five units.</p>
                </div>
              </div>
            </div>

            {/* Elegant Bottle physical showcase right on checkout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-4 bg-slate-900/40 border border-white/10 rounded-2xl flex items-center gap-4 relative overflow-hidden z-[5] text-white"
            >
              <div className="absolute right-[-10%] bottom-[-20%] w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
              <img
                src={selectedSize === '500ml' ? bottleImage500ml : bottleImage15L}
                alt="Selected Aabshar Bottle Visualizer"
                loading="lazy"
                decoding="async"
                className="h-28 w-auto animate-float object-contain drop-shadow-[0_8px_15px_rgba(2,132,199,0.15)] flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <span className="font-sans text-[10px] text-white font-bold uppercase tracking-wider bg-brand-teal/30 px-2 py-0.5 rounded border border-brand-teal/20">Selected Model</span>
                <h4 className="font-serif text-base font-bold text-white mt-1">Aabshar Hydration Companion</h4>
                <p className="font-sans text-xs text-sky-200/80 mt-1 leading-relaxed">
                  Your physical order matches our standard food-grade vertical logo design with pre-purified mineral parameters.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Form Container with animations */}
          <div className="lg:col-span-12 xl:col-span-7 relative z-10 text-slate-800">
            <div className="frosted-glass-card rounded-3xl p-8 sm:p-10 shadow-3d inner-highlight relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              
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
                    <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-2">
                      <ShoppingCart className="w-5.5 h-5.5 text-brand-teal" />
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">Chilled Hydration Form</h3>
                        <p className="font-sans text-xs text-brand-teal">Direct scheduling of clean minerals</p>
                      </div>
                    </div>

                    {/* Side-by-Side: Name and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Full Name *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                            <User className="w-4 h-4" />
                          </span>
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
                            className={`block w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-teal transition-all ${
                              errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-brand-teal'
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                            ⚠️ {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Contact Phone Number *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                            <Phone className="w-4 h-4" />
                          </span>
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
                            className={`block w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-teal transition-all ${
                              errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-brand-teal'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                            ⚠️ {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Side-by-Side: City and Bottle Size Selectors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          City of Residence *
                        </label>
                        <select
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                            if (e.target.value) {
                              setErrors((prev) => ({ ...prev, city: '' }));
                            }
                          }}
                          className={`block w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-teal transition-all ${
                            errors.city ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-teal'
                          }`}
                        >
                          <option value="Islamabad" className="text-slate-800">Islamabad (All sectors)</option>
                          <option value="Rawalpindi" className="text-slate-800">Rawalpindi (All cantts & areas)</option>
                          <option value="Fateh Jang" className="text-slate-800">Fateh Jang Zone</option>
                        </select>
                        {errors.city && (
                          <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                            ⚠️ {errors.city}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Preferred Vessel Size *
                        </label>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => onSizeChange('500ml')}
                            className={`flex-1 py-3 text-center rounded-xl font-bold text-xs uppercase transition-all tracking-wider cursor-pointer border ${
                              selectedSize === '500ml'
                                ? 'bg-brand-teal text-white shadow-md border-brand-teal'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-brand-teal/40'
                            }`}
                          >
                            500ml Pack
                          </button>
                          <button
                            type="button"
                            onClick={() => onSizeChange('1.5L')}
                            className={`flex-1 py-3 text-center rounded-xl font-bold text-xs uppercase transition-all tracking-wider cursor-pointer border ${
                              selectedSize === '1.5L'
                                ? 'bg-brand-teal text-white shadow-md border-brand-teal'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-brand-teal/40'
                            }`}
                          >
                            1.5 Litre Pack
                          </button>
                        </div>
                        {errors.size && (
                          <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1">
                            ⚠️ {errors.size}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Select Quantity Required *</h4>
                        <p className="font-sans text-[11px] text-slate-500 mt-0.5">Starting at minimum order of 5 units</p>
                      </div>
                      <div className="flex flex-col items-center md:items-end gap-1.5">
                        <div className="flex items-center justify-center md:justify-end gap-4">
                          <button
                            type="button"
                            onClick={handleDecrement}
                            className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-lg flex items-center justify-center hover:bg-slate-100 transition-all cursor-pointer shadow-2xs active:scale-95"
                          >
                            -
                          </button>
                          <span className="font-sans font-extrabold text-xl text-slate-900 w-12 text-center select-none">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={handleIncrement}
                            className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-lg flex items-center justify-center hover:bg-slate-100 transition-all cursor-pointer shadow-2xs active:scale-95"
                          >
                            +
                          </button>
                        </div>
                        {errors.quantity && (
                          <p className="text-red-500 text-[11px] font-semibold mt-0.5 flex items-center gap-1">
                            ⚠️ {errors.quantity}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Corporate Label toggle */}
                    <div className="space-y-4 pt-3 border-t border-slate-100">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={isCorporate}
                          onChange={(e) => {
                            setIsCorporate(e.target.checked);
                            if (!e.target.checked) {
                              setCorporateNotes('');
                            }
                          }}
                          className="w-4.5 h-4.5 rounded border-slate-200 bg-slate-50 text-brand-teal focus:ring-brand-teal cursor-pointer"
                        />
                        <span className="font-sans text-xs sm:text-sm text-slate-700 font-medium group-hover:text-slate-950 transition-colors">
                          💼 This is a B2B / Custom Labeling Inquiry
                        </span>
                      </label>

                      <AnimatePresence>
                        {isCorporate && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <textarea
                              rows={3}
                              placeholder="Briefly state your corporate branding requirement, preferred quantities (100+ units), or event profile (hotel, cafes, wedding marquee, corporate conference)..."
                              value={corporateNotes}
                              onChange={(e) => setCorporateNotes(e.target.value)}
                              className="block w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs sm:text-sm focus:border-brand-teal focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-teal transition-all placeholder-slate-400"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-linear-to-r from-brand-teal to-brand-aqua hover:brightness-110 font-bold text-sm tracking-widest text-white uppercase rounded-xl shadow-btn-glow hover:shadow-btn-glow border-t border-white/35 transition-all duration-300 press-scale cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Order Details...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Scheduling Request</span>
                        </>
                      )}
                    </button>
                    
                    <p className="font-sans text-center text-[10px] text-slate-400">
                      🔒 Your data is fully secure. We never sell personal records.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-4 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 flex items-center justify-center mx-auto mb-4 scale-110">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-sans text-xs text-brand-teal uppercase tracking-widest font-bold">
                        Request Confirmed
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3.5xl font-extrabold text-slate-900">
                        Order Received, {name}!
                      </h3>
                      <p className="font-serif text-amber-600 text-sm font-semibold">
                        Sheduling reference code: AAB-{Math.floor(100000 + Math.random() * 900000)}
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 max-w-md mx-auto p-5 rounded-2xl text-left space-y-3">
                      <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                        ✨ <strong>What happens next:</strong>
                      </p>
                      <ul className="space-y-2.5 text-xs text-slate-600">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Our active dispatcher will message you on WhatsApp: <strong>{phone}</strong> in under 10 minutes.
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          We will confirm your precise address coordinates and quantity ({quantity} × {selectedSize} bottles).
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Delivery scheduled for {city} (Pre-Chilled van express dispatch).
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Place Another Order
                      </button>
                      <a
                        href={`https://wa.me/923051999897?text=Hi%20Aabshar,%20I%20just%20submitted%20an%20order%20under%2520the%2520name%2520${encodeURIComponent(name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Instant WhatsApp Chat
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
