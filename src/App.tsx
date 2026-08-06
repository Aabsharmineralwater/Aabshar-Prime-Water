import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import B2B from './components/B2B';
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BottomNav from './components/BottomNav';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet, ShieldCheck, Truck } from 'lucide-react';

export default function App() {
  const [selectedSize, setSelectedSize] = useState('500ml');
  const [page, setPage] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy' || hash === '#/privacy') {
        setPage('privacy');
        window.scrollTo({ top: 0 });
      } else if (hash === '#terms' || hash === '#/terms') {
        setPage('terms');
        window.scrollTo({ top: 0 });
      } else {
        setPage('home');
        if (hash && hash !== '#' && hash !== '#/') {
          // Allow some time for rendering before scrolling
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 150);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLinkClick = (href: string) => {
    if (href === '#privacy' || href === '#/privacy') {
      window.location.hash = '#/privacy';
    } else if (href === '#terms' || href === '#/terms') {
      window.location.hash = '#/terms';
    } else {
      window.location.hash = href;
      if (page !== 'home') {
        setPage('home');
      }
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (href === '#hero' || href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const handleOrderProduct = (size: string) => {
    setSelectedSize(size === '500ml' ? '500ml' : '1.5L');
    handleLinkClick('#contact');
  };

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-[#4FD1E8] selection:text-[#0A1930] relative bg-[#F3F7F9]">
      
      {/* Absolute background canvas overlays */}
      <div className="fixed top-0 inset-x-0 bottom-0 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0F3A4A]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#4FD1E8]/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen pb-16 md:pb-0">
        {/* Navbar */}
        <Navbar 
          onOrderClick={() => handleLinkClick('#contact')} 
          onLinkClick={handleLinkClick}
        />

        {page === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero
              onOrderClick={() => handleLinkClick('#contact')}
              onExploreClick={() => handleLinkClick('#products')}
            />

            {/* Editorial "Perfectly Balanced Premium Minerals" Magazine Strip */}
            <div className="bg-[#0A1930] text-white py-12 sm:py-16 font-sans relative overflow-hidden border-y border-[#00D4FF]/20 shadow-inner">
              {/* Subtle Topographic Water Ripple Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00D4FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="font-mono text-xs uppercase font-extrabold text-[#C9A24A] tracking-[0.25em] bg-[#C9A24A]/10 px-4 py-1.5 rounded-full border border-[#C9A24A]/30">
                    THE AABSHAR PURITY STANDARDS
                  </span>
                  <blockquote className="font-serif text-2xl sm:text-4xl italic font-bold text-white tracking-tight mt-4 leading-snug">
                    “Every drop filtered through deep Himalayan rock strata, bottled with unyielding perfection.”
                  </blockquote>
                </div>

                {/* Horizontal Editorial Divider-Separated List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-white/15 items-center bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-center gap-4 px-4 text-center md:text-left">
                    <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] flex-shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                      <Droplet className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-white">135 PPM Sweet Spot</h4>
                      <p className="font-sans text-xs text-slate-300 mt-0.5">Optimized essential mineral balance</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 px-4 text-center md:text-left">
                    <div className="w-12 h-12 rounded-full bg-[#C9A24A]/10 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A] flex-shrink-0 shadow-[0_0_15px_rgba(201,162,74,0.2)]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-white">WHO Compliant Lab Tests</h4>
                      <p className="font-sans text-xs text-slate-300 mt-0.5">Strict microbiological safety checks</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 px-4 text-center md:text-left">
                    <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] flex-shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-white">Chilled Express Fleet</h4>
                      <p className="font-sans text-xs text-slate-300 mt-0.5">Islamabad, Rawalpindi & Fateh Jang</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Catalogue side-by-side cards */}
            <Products onOrderProduct={handleOrderProduct} />

            {/* Reviews Testimonials Social Proof */}
            <Testimonials />

            {/* B2B Private Custom Label Branding Option */}
            <B2B onQuoteClick={() => {
              // Simply accept completed inquiry
            }} />

            {/* USP / Why Aabshar Section (About Us) */}
            <WhyUs />

            {/* Map tracker Area Delivery options */}
            <Delivery />

            {/* Interactive Ordering Form / Contact */}
            <OrderForm
              selectedSize={selectedSize}
              onSizeChange={(size) => setSelectedSize(size)}
            />
          </>
        ) : page === 'privacy' ? (
          <PrivacyPolicy onBackToHome={() => handleLinkClick('#hero')} />
        ) : (
          <TermsAndConditions onBackToHome={() => handleLinkClick('#hero')} />
        )}

        {/* Footer */}
        <Footer onLinkClick={handleLinkClick} />

        {/* Pulsing floating WhatsApp helper bottom-right */}
        <WhatsAppButton />

        {/* Fixed Mobile Bottom Navigation */}
        <BottomNav onLinkClick={handleLinkClick} />
      </div>

    </div>
  );
}
