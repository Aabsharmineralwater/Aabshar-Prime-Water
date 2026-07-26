import { useState, useEffect } from 'react';
import { Droplets, Phone, Home, Package, Building2, Info, Briefcase, Users, MapPin, Clock, Mail } from 'lucide-react';
import aabsharLogo from '../assets/images/aabshar_brand_logo_small.webp';

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
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
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
                    alt="Aabshar Prime Water Logo"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
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

              {/* Mobile CTA Quick Button in top bar */}
              <div className="flex md:hidden items-center">
                <button
                  onClick={onOrderClick}
                  className="inline-flex items-center justify-center px-4 py-2 font-bold text-xs text-white rounded-full bg-linear-to-r from-brand-teal to-brand-aqua hover:brightness-105 shadow-sm active:scale-95 transition-all cursor-pointer border-0"
                >
                  <Droplets className="w-3.5 h-3.5 mr-1 text-white animate-pulse" />
                  Order
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
