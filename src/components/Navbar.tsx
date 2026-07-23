import { useState, useEffect } from 'react';
import { Menu, X, Droplets, Phone, Mail, MapPin, Clock, Info, ChevronRight, Home, Package, Briefcase, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import aabsharLogo from '../assets/images/regenerated_image_1779783054758.png';

interface NavbarProps {
  onOrderClick: () => void;
  onLinkClick: (href: string) => void;
}

export default function Navbar({ onOrderClick, onLinkClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 240; // timing offset
      const sections = ['#hero', '#products', '#b2b', '#about', '#contact'];
      
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home className="w-4 h-4" /> },
    { name: 'Product', href: '#products', icon: <Package className="w-4 h-4" /> },
    { name: 'B2B Service', href: '#b2b', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'About Us', href: '#about', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Phone className="w-4 h-4" /> },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    onLinkClick(href);
  };

  return (
    <>
      <header
        id="navbar"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans"
      >
        {/* COLLAPSIBLE PREMIUM TOP UTILITY BAR (Desktop only) */}
        <div 
          className={`hidden md:block bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-300 border-b border-white/[0.04] transition-all duration-350 transform origin-top overflow-hidden ${
            isScrolled ? 'max-h-0 py-0 opacity-0 scale-y-0' : 'max-h-11 py-2 opacity-100 scale-y-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-semibold tracking-wide">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                <span>Rawalpindi • Islamabad • Fateh Jang</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                <Clock className="w-3.5 h-3.5 text-brand-teal" />
                <span>Daily Delivery: 8:00 AM – 8:00 PM</span>
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+923051999897" className="flex items-center gap-1.5 text-sky-200 hover:text-white transition-colors font-bold">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+92-305-1999897</span>
              </a>
              <a href="mailto:aabshar.org@gmail.com" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>aabshar.org@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION GLASS CONTAINER */}
        <div 
          className={`transition-all duration-300 border-b ${
            isScrolled
              ? 'bg-white/96 backdrop-blur-xl shadow-lg border-slate-200/60 py-2'
              : 'bg-white/90 backdrop-blur-lg shadow-md border-slate-200/30 py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between min-h-16 md:min-h-18">
              
              {/* Premium Logo Column */}
              <div className="flex-shrink-0 flex items-center">
                <button 
                  onClick={() => handleLinkClick('#hero')} 
                  className="flex items-center gap-2 group cursor-pointer bg-transparent border-0 active:scale-95 transition-transform duration-200"
                >
                  <img
                    src={aabsharLogo}
                    alt="Aabshar Mineral Water Logo"
                    className={`object-contain transition-all duration-300 group-hover:scale-102 ${
                      isScrolled
                        ? 'h-14 sm:h-16 md:h-18 lg:h-20'
                        : 'h-16 sm:h-18 md:h-22 lg:h-24'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </button>
              </div>

              {/* Desktop Navigation Link Pills */}
              <div className="hidden md:flex items-center space-x-2 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/40">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.href)}
                      className={`font-sans text-xs lg:text-sm font-bold transition-all duration-300 cursor-pointer px-4.5 py-1.8 rounded-full ${
                        isActive 
                          ? 'text-white bg-linear-to-r from-brand-teal to-brand-aqua shadow-sm scale-102 border-t border-white/20' 
                          : 'text-slate-700 hover:text-brand-teal hover:bg-white/90'
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </div>

              {/* Desktop Dynamic Call To Action Button */}
              <div className="hidden md:flex items-center">
                <button
                  id="navbar-cta"
                  onClick={onOrderClick}
                  className="relative inline-flex items-center justify-center px-6 py-2.5 font-extrabold text-xs lg:text-sm tracking-wide text-white rounded-full bg-linear-to-r from-brand-teal to-brand-aqua hover:brightness-105 shadow-[0_4px_14px_rgba(2,132,199,0.25)] border-t border-white/30 hover:border-white/40 press-scale transition-all duration-300 cursor-pointer"
                >
                  <Droplets className="w-4 h-4 mr-1.5 text-white animate-pulse" />
                  Order Now
                </button>
              </div>

              {/* Mobile Hamburger menu toggle */}
              <div className="flex md:hidden">
                <button
                  id="menu-toggle"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Navigation Menu"
                  className="text-slate-800 hover:text-brand-teal hover:bg-slate-100/60 focus:outline-none focus:ring-2 focus:ring-brand-teal p-2 rounded-xl press-scale transition-colors border border-slate-205"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ELEGANT MOBILE DRAWER SYSTEM */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Tap to close backdrop overlay with high cinematic atmosphere */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-slate-950/45 backdrop-blur-xs z-40 md:hidden"
                id="drawer-backdrop"
              />

              {/* Modern Slide-out Panel Drawer Container */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 210 }}
                className="fixed top-0 right-0 h-screen w-full max-w-[340px] sm:max-w-[380px] bg-white z-50 md:hidden shadow-2xl border-l border-slate-200/60 flex flex-col justify-between overflow-y-auto"
                id="drawer-panel"
              >
                {/* 1. Drawer Header Panel */}
                <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-sky-50/20 to-teal-50/10">
                  <div className="flex items-center gap-1">
                    <img 
                      src={aabsharLogo} 
                      alt="Aabshar Mineral Water Logo" 
                      className="h-11 w-auto"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-left select-none">
                      <span className="font-serif italic text-xs font-black text-brand-teal block leading-tight">Aabshar</span>
                      <span className="text-[9px] font-sans font-bold text-slate-400 tracking-wider block uppercase leading-none">Mineral Water</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* 2. Main Navigation Links Lists */}
                <div className="px-5 py-6 flex-grow space-y-6">
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest pl-1 mb-3 select-none">
                      Menu Sections
                    </h4>
                    <div className="space-y-1.5">
                      {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                          <button
                            key={link.name}
                            onClick={() => handleLinkClick(link.href)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                              isActive
                                ? 'text-brand-teal bg-sky-50 shadow-xs border-l-4 border-brand-teal pl-3'
                                : 'text-slate-700 hover:text-brand-teal hover:bg-slate-50 border-l-4 border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={isActive ? 'text-brand-teal' : 'text-slate-400'}>
                                {link.icon}
                              </span>
                              <span>{link.name}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-brand-teal translate-x-1' : 'text-slate-400'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Balanced Quality Summary Widget Card */}
                  <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100/50 space-y-2">
                    <div className="flex items-center gap-2 text-brand-teal font-extrabold text-xs tracking-wider uppercase">
                      <Info className="w-4 h-4" />
                      <span>Standard Certification</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed text-left font-semibold">
                      Formulated with a scientifically balanced natural minerals TDS 120–160, offering healthy active companion standards daily.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-sky-100/50">
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Fluoride/Sulfate</span>
                        <span className="text-[11px] font-black text-slate-800">Balanced Verified</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Lab Sourced</span>
                        <span className="text-[11px] font-black text-slate-800">100% PCRWR Approved</span>
                      </div>
                    </div>
                  </div>

                  {/* 4. Contact Details Widget Card */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                    <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
                      <Phone className="w-4 h-4 text-brand-teal" />
                      <span>Regional Delivery Ops</span>
                    </div>
                    
                    <div className="space-y-2 text-[11px] text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-teal mt-0.5 flex-shrink-0" />
                        <span className="leading-tight text-left">Islamabad, Rawalpindi & Fateh Jang sectors</span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <a href="tel:+923051999897" className="text-brand-teal font-black hover:underline text-left">
                          +92-305-1999897
                        </a>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Mail className="w-3.5 h-3.5 text-sky-500 mt-0.5 flex-shrink-0" />
                        <a href="mailto:aabshar.org@gmail.com" className="text-brand-teal font-medium hover:underline text-left break-all">
                          aabshar.org@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Mobile CTA Bottom Block */}
                <div className="p-5 border-t border-slate-100 bg-slate-50/50">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOrderClick();
                    }}
                    className="flex items-center justify-center w-full px-5 py-3.5 text-sm font-black text-white bg-linear-to-r from-brand-teal to-brand-aqua rounded-xl shadow-[0_4px_16px_rgba(2,132,199,0.2)] hover:brightness-105 active:scale-98 transition-all cursor-pointer border-0"
                  >
                    <Droplets className="w-4.5 h-4.5 mr-2 text-white animate-bounce" />
                    Place Quick Order
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
