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
import AquaticBackground from './components/AquaticBackground';
import { motion, AnimatePresence } from 'motion/react';

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
    <div className="min-h-screen text-slate-150 font-sans selection:bg-[#4FD1E8] selection:text-[#0A1930] relative bg-[#0A1930]">
      
      {/* Dynamic Animated Aquatic Background (Water caustics, wave vectors, rising bubble particles) */}
      <AquaticBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
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

            {/* Product Catalogue side-by-side cards */}
            <Products onOrderProduct={handleOrderProduct} />

            {/* B2B Private Custom Label Branding Option */}
            <B2B onQuoteClick={() => {
              // Simply accept completed inquiry
            }} />

            {/* USP / Why Aabshar Section (About Us) */}
            <WhyUs />

            {/* Reviews Testimonials Social Proof */}
            <Testimonials />

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
