import { ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import combinedBottlesImage from '../assets/images/aabshar_combined_bottles_1784927333136.jpg';

interface HeroProps {
  onOrderClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onOrderClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 flex items-center justify-center noise-overlay overflow-hidden bg-transparent"
    >
      {/* 1. Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,15,35,0.62)] via-[rgba(5,15,35,0.45)] to-[rgba(5,15,35,0.70)] z-0 pointer-events-none" />

      {/* 2. Soft radial vignette at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)] z-0 pointer-events-none" />

      {/* 3. Mountain mist/fog effect fading into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none z-[2]" />

      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/15 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" style={{ transform: 'translateZ(-150px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-aqua/10 rounded-full blur-[150px] pointer-events-none animate-pulse duration-5000 z-0" style={{ transform: 'translateZ(-120px)' }} />
      
      {/* Wave element overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 water-gradient pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-white font-sans font-semibold text-xs sm:text-sm mb-6 max-w-max shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-sky-300 animate-spin-slow" />
              <span className="text-sky-100">Premium Balanced Mineral Water — TDS 120–160</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7.5xl font-extrabold text-white tracking-tight leading-none mb-6 text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
            >
              Aabshar<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-aqua">
                Prime Water
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-sky-100/90 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-xl"
            >
              Aabshar Prime Water is a trusted bottled water brand dedicated to providing pure, safe, and refreshing drinking water. We maintain high standards of quality, hygiene, and customer satisfaction to ensure every bottle delivers freshness and trust.
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                id="hero-order-cta"
                onClick={onOrderClick}
                className="w-full sm:w-auto text-center px-8 py-4 bg-linear-to-r from-brand-teal to-brand-aqua hover:brightness-110 font-bold text-base text-white rounded-full shadow-btn-glow hover:shadow-btn-glow border-t border-white/35 active:scale-95 transition-all duration-300 press-scale cursor-pointer"
              >
                Order Doorstep Delivery
              </button>
              
              <button
                id="hero-explore-cta"
                onClick={onExploreClick}
                className="w-full sm:w-auto text-center px-8 py-4 bg-white/90 hover:bg-white border border-white hover:text-brand-teal font-bold text-base text-slate-800 rounded-full active:scale-95 transition-all duration-300 press-scale shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 text-brand-teal" />
              </button>
            </motion.div>

            {/* Quick trust badges - styled glassmorphic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl p-5 sm:p-6 bg-slate-900/65 backdrop-blur-md border border-white/10 rounded-3xl shadow-3d inner-highlight text-slate-100"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-sans">
                  <span className="font-bold text-xs text-sky-300">TDS</span>
                </div>
                <div className="text-left">
                  <h4 className="font-sans text-white text-xs sm:text-sm font-semibold">120–160 Value</h4>
                  <p className="font-sans text-[10px] sm:text-xs text-slate-300">Balanced Minerals</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                  <ShieldCheck className="w-4.5 h-4.5 text-sky-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans text-white text-xs sm:text-sm font-semibold">Lab Verified</h4>
                  <p className="font-sans text-[10px] sm:text-xs text-slate-300">100% Pure</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                  <Truck className="w-4.5 h-4.5 text-sky-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans text-white text-xs sm:text-sm font-semibold">Cold Delivery</h4>
                  <p className="font-sans text-[10px] sm:text-xs text-slate-300">Water Fleet</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-fidelity SACRED bottle image composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative max-w-lg w-full flex items-center justify-center py-8"
            >
              {/* Radial gradient glow background beneath bottle */}
              <div className="absolute inset-0 m-auto w-72 h-72 bg-radial-gradient blur-xs animate-slow-spin rounded-full opacity-30 select-none pointer-events-none" />
              <div className="absolute bg-brand-aqua/10 w-56 h-56 rounded-full filter blur-[70px] mix-blend-multiply opacity-50 select-none animate-pulse" />
              
              {/* Single combined bottle image */}
              <div className="relative flex items-center justify-center h-[430px] sm:h-[500px] md:h-[580px] w-full pb-4">
                <img
                  src={combinedBottlesImage}
                  alt="Aabshar Prime Water Bottles"
                  className="max-h-[380px] sm:max-h-[460px] md:max-h-[530px] w-auto animate-float object-contain relative z-10 pointer-events-none filter drop-shadow-[0_15px_30px_rgba(2,132,199,0.18)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Elegant floating circular badge */}
              <div 
                className="absolute bottom-16 left-2 md:left-6 bg-white/95 border border-brand-teal/30 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-3d z-30 animate-float [animation-delay:2s] text-left inner-highlight"
              >
                <p className="font-sans text-[10px] sm:text-xs text-brand-teal uppercase tracking-wider font-bold">Health Factor</p>
                <p className="font-display text-base sm:text-lg text-slate-800 font-bold">100% Certified Pure</p>
                <p className="font-sans text-[10px] sm:text-xs text-slate-500">Perfect Mineral Balance</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
