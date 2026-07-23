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
    <div className="min-h-screen text-slate-100 font-sans selection:bg-brand-teal selection:text-white relative">
      
      {/* Decoupled Real Mountain / Abshar scenery background */}
      <div className="site-bg-backdrop" role="presentation" />
      
      {/* Absolute background canvas overlays */}
      <div className="fixed top-0 inset-x-0 bottom-0 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-teal/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-aqua/8 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '8000ms' }} />
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

            {/* Trust signal stats banner */}
            <div className="bg-gradient-to-r from-white/60 via-sky-50/45 to-white/60 backdrop-blur-md border-y border-white/50 py-6 sm:py-8 font-sans overflow-hidden shadow-inner-light">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-sky-200/50 text-brand-teal text-[10px] font-bold uppercase tracking-widest">
                      Quality Guaranteed
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                      Perfectly Balanced Premium Minerals for Daily Hydration
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3 font-bold text-xs sm:text-sm text-slate-800">
                    <span className="flex items-center gap-2">
                      <Droplet className="w-4 h-4 text-brand-teal animate-pulse" />
                      <span>Balanced Essential Minerals</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>WHO Compliant Quality</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-sky-600" />
                      <span>Chilled Logistic Fleet</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Catalogue side-by-side cards */}
            <Products onOrderProduct={handleOrderProduct} />

            {/* B2B Private Custom Label Branding Option */}
            <B2B onQuoteClick={() => {
              // Simply accept completed inquiry
            }} />

            {/* USP / Why Aabshar Section (About Us) */}
            <WhyUs />

            {/* Map tracker Area Delivery options */}
            <Delivery />

            {/* Reviews Testimonials Social Proof */}
            <Testimonials />

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
