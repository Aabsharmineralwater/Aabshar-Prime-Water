import React, { useState, useEffect, useRef } from 'react';
import { 
  Hotel, 
  Utensils, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  Upload, 
  Send, 
  CheckCircle2, 
  Compass, 
  Heart, 
  Factory, 
  Dumbbell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Custom generated high-fidelity physical mockup images
import gymMockup from '../assets/images/b2b_gym_card_mockup.png';
import riverdaleMockup from '../assets/images/b2b_riverdale_card_mockup.png';
import nexoraMockup from '../assets/images/b2b_nexora_card_mockup.png';

interface B2BProps {
  onQuoteClick?: () => void;
}

// Premium High-Fidelity Private Label Mockup Card with dark studio radial-gradient background, category pill top-left, and animated color swatches
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
    <div className="flex flex-col items-center bg-gradient-to-br from-[#0A1930]/95 via-[#0F3A4A]/80 to-[#0A1930]/95 backdrop-blur-xl border border-[#4FD1E8]/30 rounded-3xl p-6 sm:p-7 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6),_inset_0_1px_1px_0_rgba(255,255,255,0.15)] hover:border-[#4FD1E8] hover:shadow-[0_25px_50px_-10px_rgba(79,209,232,0.3),_inset_0_1px_1px_0_rgba(255,255,255,0.25)] transition-all duration-500 group w-full max-w-sm relative overflow-hidden text-white">
      {/* Micro-depth top edge shine line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FD1E8]/60 to-transparent pointer-events-none z-20" />

      {/* Background radial glow accent */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#4FD1E8]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#4FD1E8]/25 transition-colors" />
      
      {/* Category Pill Top-Left */}
      <div className="w-full flex justify-between items-center mb-5 z-10">
        {badge}
        <span className="text-[10px] font-mono text-[#4FD1E8] font-bold tracking-wider uppercase bg-[#0F3A4A]/80 px-2.5 py-1 rounded-full border border-[#4FD1E8]/30 shadow-xs">
          Studio Render
        </span>
      </div>

      {/* Dark Studio Image Container */}
      <div className="relative w-full aspect-[4/5] px-4 py-6 bg-gradient-to-b from-[#0F3A4A]/80 via-[#0A1930] to-[#061224] rounded-2xl flex items-center justify-center overflow-hidden border border-[#4FD1E8]/20 shadow-inner">
        {/* Soft studio backlighting spotlight */}
        <div className="absolute w-44 h-44 bg-[radial-gradient(circle,rgba(79,209,232,0.25)_0%,transparent_70%)] rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
        
        {/* Bottle Image */}
        <img 
          src={imageSrc} 
          alt={`${brandName} custom bottle pairs`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-auto object-contain z-10 filter drop-shadow-[0_18px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-transform duration-500 ease-out"
        />

        {/* Rippled Drop-Shadow & Water Reflection under bottle */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
          <div className="w-24 h-2.5 rounded-[100%] bg-[#4FD1E8]/30 blur-sm scale-x-125 group-hover:scale-x-150 transition-transform duration-500" />
          <div className="w-36 h-1.5 rounded-[100%] border border-[#4FD1E8]/40 scale-y-50 opacity-60 -mt-1" />
        </div>

        {/* Studio Gloss Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 select-none pointer-events-none z-20" />
      </div>

      {/* Brand & Design Info */}
      <div className="w-full mt-5 text-left z-10">
        <h4 className="font-serif text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#4FD1E8] transition-colors duration-200 leading-snug">
          {brandName}
        </h4>
        <p className="font-sans text-xs text-[#4FD1E8] font-semibold mt-1 tracking-wide">
          {subtitle}
        </p>
        
        <p className="font-sans italic text-xs text-slate-300/90 mt-3 line-clamp-2 border-l-2 border-[#C9A24A] pl-2.5">
          "{tagline}"
        </p>

        {/* Palette Matching - Labeled Brand Palette Chip */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 font-extrabold flex items-center gap-1">
              🎨 Brand Palette
            </span>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#0F3A4A]/80 border border-[#4FD1E8]/25 shadow-xs">
              <div className="flex items-center gap-1.5">
                {colors.map((c, i) => (
                  <div 
                    key={i} 
                    className="w-3.5 h-3.5 rounded-full border border-white/80 shadow-xs" 
                    style={{ backgroundColor: c.bg }}
                    title={c.name}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] font-bold text-sky-100/90 truncate max-w-[130px]">
                {colors.map(c => c.name.split(' ')[0]).join(' · ')}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 font-extrabold">
              Bottle Formats
            </span>
            <div className="flex items-center gap-1.5">
              {volumes.map((v, i) => (
                <span 
                  key={i} 
                  className="text-[10px] font-mono font-bold bg-[#0A1930] text-[#4FD1E8] px-2.5 py-1 rounded-md border border-[#4FD1E8]/30 shadow-xs"
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

// Case study cards data for Private Label Industry Mockups
const caseStudiesData = [
  {
    id: 'fitness',
    imageSrc: gymMockup,
    alt: 'IronCore Fitness Custom Bottle',
    badgeText: 'Fitness & Sports',
    badgeClass: 'text-[#C9A24A] bg-[#C9A24A]/20 border-[#C9A24A]/40',
    title: 'IronCore Fitness',
    description: 'High-performance athletic club custom bottles.',
    cardContainerClass: 'bg-gradient-to-b from-[#1c1917]/90 via-[#0A1930] to-[#0A1930] border-[#C9A24A]/40 hover:border-[#C9A24A]',
    overlayClass: 'bg-amber-500/10 group-hover:bg-amber-500/20'
  },
  {
    id: 'dining',
    imageSrc: riverdaleMockup,
    alt: 'The Olive Table Custom Bottle',
    badgeText: 'Fine Dining & Cafes',
    badgeClass: 'text-[#00D4FF] bg-[#00D4FF]/20 border-[#00D4FF]/40',
    title: 'The Olive Table',
    description: 'Gourmet dining table 500 mL mineral bottles.',
    cardContainerClass: 'bg-gradient-to-b from-[#0F3A4A]/90 via-[#0A1930] to-[#0A1930] border-[#00D4FF]/40 hover:border-[#00D4FF]',
    overlayClass: 'bg-sky-500/10 group-hover:bg-sky-500/20'
  },
  {
    id: 'corporate',
    imageSrc: nexoraMockup,
    alt: 'Nexora Technologies Custom Bottle',
    badgeText: 'Corporate & Tech',
    badgeClass: 'text-teal-300 bg-teal-500/20 border-teal-500/40',
    title: 'Nexora Technologies',
    description: 'Executive summit boardroom water bottles.',
    cardContainerClass: 'bg-gradient-to-b from-[#042f2e]/90 via-[#0A1930] to-[#0A1930] border-teal-500/40 hover:border-teal-400',
    overlayClass: 'bg-teal-500/10 group-hover:bg-teal-500/20'
  }
];

const MobileCaseStudyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [pausedUntil, setPausedUntil] = useState<number>(0);

  const totalCards = caseStudiesData.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setPausedUntil(Date.now() + 8000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setPausedUntil(Date.now() + 8000);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setPausedUntil(Date.now() + 8000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() >= pausedUntil) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalCards);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [pausedUntil, totalCards]);

  const currentCard = caseStudiesData[currentIndex];

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto px-6 select-none">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous card"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)] active:scale-95 hover:bg-[#00D4FF] hover:text-[#0A1930] transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next card"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)] active:scale-95 hover:bg-[#00D4FF] hover:text-[#0A1930] transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Slide Box */}
      <div className="overflow-hidden rounded-3xl touch-pan-y relative w-full">
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={currentCard.id}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragSnapToOrigin={true}
            onDragEnd={(_e, info) => {
              const swipe = info.offset.x;
              const velocity = info.velocity.x;
              if (swipe < -40 || velocity < -250) {
                handleNext();
              } else if (swipe > 40 || velocity > 250) {
                handlePrev();
              }
            }}
            initial={{ opacity: 0, x: direction >= 0 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? '-100%' : '100%' }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 32 },
              opacity: { duration: 0.25 }
            }}
            style={{ willChange: 'transform' }}
            className={`backdrop-blur-xl border rounded-3xl p-6 shadow-xl relative overflow-hidden group transition-colors duration-500 w-full cursor-grab active:cursor-grabbing ${currentCard.cardContainerClass}`}
          >
            <div className={`absolute inset-0 pointer-events-none transition-colors ${currentCard.overlayClass}`} />

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-900 flex items-center justify-center p-4">
              <img
                src={currentCard.imageSrc}
                alt={currentCard.alt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="relative z-10 text-left">
              <span className={`font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${currentCard.badgeClass}`}>
                {currentCard.badgeText}
              </span>
              <h4 className="font-serif text-xl font-bold text-white mt-2">{currentCard.title}</h4>
              <p className="font-sans text-xs text-slate-300 mt-1">{currentCard.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {caseStudiesData.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-7 h-2.5 bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]'
                : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

interface OnboardingStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const MobileOnboardingCarousel = ({ steps }: { steps: OnboardingStep[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [pausedUntil, setPausedUntil] = useState<number>(0);

  const totalCards = steps.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setPausedUntil(Date.now() + 8000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setPausedUntil(Date.now() + 8000);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setPausedUntil(Date.now() + 8000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() >= pausedUntil) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalCards);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [pausedUntil, totalCards]);

  const st = steps[currentIndex];

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto px-6 my-4 select-none">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous step"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)] active:scale-95 hover:bg-[#00D4FF] hover:text-[#0A1930] transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next step"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)] active:scale-95 hover:bg-[#00D4FF] hover:text-[#0A1930] transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Slide Box */}
      <div className="overflow-hidden rounded-2xl touch-pan-y relative w-full min-h-[220px]">
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={st.num}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragSnapToOrigin={true}
            onDragEnd={(_e, info) => {
              const swipe = info.offset.x;
              const velocity = info.velocity.x;
              if (swipe < -40 || velocity < -250) {
                handleNext();
              } else if (swipe > 40 || velocity > 250) {
                handlePrev();
              }
            }}
            initial={{ opacity: 0, x: direction >= 0 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? '-100%' : '100%' }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 32 },
              opacity: { duration: 0.25 }
            }}
            style={{ willChange: 'transform' }}
            className="bg-[#0F3A4A]/80 backdrop-blur-xl border border-[#00D4FF]/40 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center relative overflow-hidden min-h-[220px] w-full cursor-grab active:cursor-grabbing"
          >
            {/* Fine gold top accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#C9A24A] to-[#00D4FF]" />

            {/* Badge Step Indicator Header */}
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#C9A24A] bg-[#C9A24A]/10 border border-[#C9A24A]/30 px-2.5 py-0.5 rounded-full mb-3">
              Step {currentIndex + 1} of {totalCards}
            </span>

            {/* Circle Node Number */}
            <div className="w-14 h-14 rounded-full bg-[#C9A24A] text-[#0A1930] border-2 border-white shadow-[0_0_20px_#C9A24A] flex items-center justify-center font-mono font-black text-sm my-1">
              {st.num}
            </div>

            <div className="flex items-center gap-1.5 mt-3 mb-1 text-[#00D4FF]">
              {st.icon}
              <h4 className="font-serif text-lg font-extrabold text-white">
                {st.title}
              </h4>
            </div>

            <p className="font-sans text-xs text-slate-200 leading-relaxed max-w-xs mt-1">
              {st.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {steps.map((item, idx) => (
          <button
            key={item.num}
            type="button"
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to step ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-7 h-2.5 bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]'
                : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function B2B({ onQuoteClick }: B2BProps) {
  // Form Logic State
  const [formStep, setFormStep] = useState<1 | 2>(1);
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
  const [activeStepHover, setActiveStepHover] = useState<number>(0);

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

  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Business Name is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setFormStep(2);
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

  // Industries served fine-line icon strip
  const industries = [
    { title: "Hotels & Resorts", icon: <Hotel className="w-5 h-5 text-[#C9A24A]" /> },
    { title: "Restaurants & Cafes", icon: <Utensils className="w-5 h-5 text-[#C9A24A]" /> },
    { title: "Corporate Boardrooms", icon: <Building2 className="w-5 h-5 text-[#C9A24A]" /> },
    { title: "Weddings & Marquees", icon: <Heart className="w-5 h-5 text-[#C9A24A]" /> },
    { title: "Conferences & Expos", icon: <Factory className="w-5 h-5 text-[#C9A24A]" /> },
    { title: "Fitness & Wellness", icon: <Dumbbell className="w-5 h-5 text-[#C9A24A]" /> },
  ];

  // Steps data for Metro-Map Connected Timeline
  const steps = [
    {
      num: "01",
      title: "Submit Brand Logo",
      desc: "Upload logo file, brand palette guidelines, and volume targets.",
      icon: <Upload className="w-4 h-4 text-[#00D4FF]" />,
    },
    {
      num: "02",
      title: "Graphic Studio Mockup",
      desc: "Our design team creates 3D digital renderings within 24 hours.",
      icon: <Sparkles className="w-4 h-4 text-[#00D4FF]" />,
    },
    {
      num: "03",
      title: "Review & Approval",
      desc: "Review high-definition label proofs and request adjustments.",
      icon: <Compass className="w-4 h-4 text-[#00D4FF]" />,
    },
    {
      num: "04",
      title: "Chilled Fleet Delivery",
      desc: "Fresh automated bottling and cold-chain door-to-door delivery.",
      icon: <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />,
    },
  ];

  return (
    <section id="b2b" className="py-24 bg-gradient-to-b from-[#0A1930] via-[#0D223D] to-[#0A1930] text-white relative overflow-hidden cv-auto">
      {/* Top Gradient Transition (Replacing SVG wave) */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0A1930] via-[#0A1930]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-[#C9A24A]/40 pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 5: SPLIT-LAYOUT B2B EDITORIAL + FINE-LINE ICON STRIP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/30 text-[#C9A24A] text-xs font-mono font-bold uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>B2B Private Label Program</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              Your Brand on Every Bottle. <br />
              <span className="font-serif italic text-[#00D4FF]">Pure Mineral Water</span> for Discerning Venues.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
            >
              Transform standard hydration into a high-impact branding statement. We manufacture, custom-label, and deliver certified mineral water directly to luxury hotels, fine dining establishments, corporate boardrooms, and premier wedding marquees.
            </motion.p>

            {/* Fine-Line Icon Strip for Industries Served */}
            <div className="pt-6 border-t border-white/10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#C9A24A] block mb-3">
                Industries Served
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {industries.map((ind) => (
                  <div key={ind.title} className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C9A24A]/50 transition-colors">
                    <div className="p-2 rounded-full bg-[#C9A24A]/10 mb-1.5">
                      {ind.icon}
                    </div>
                    <span className="font-serif text-xs font-bold text-white leading-tight">
                      {ind.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Highlight Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F3A4A]/80 via-[#0A1930] to-[#061224] p-8 rounded-3xl border border-[#00D4FF]/30 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00D4FF]/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="font-serif text-2xl font-extrabold text-white mb-2">
              Why Choose Aabshar Private Label?
            </h3>
            <div className="w-12 h-1 bg-[#C9A24A] rounded-full mb-6" />

            <ul className="space-y-4 font-sans text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                <span><strong>High-Definition Printing:</strong> Crystal-clear waterproof gloss label wraps that maintain vibrant brand colors when chilled.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                <span><strong>WHO & PCRWR Certified:</strong> 135 PPM target mineral water guaranteed to satisfy international purity benchmarks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                <span><strong>Chilled Fleet Delivery:</strong> Scheduled doorstep runs across Rawalpindi, Islamabad, and Fateh Jang.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 6: METRO-MAP CONNECTED HORIZONTAL TIMELINE PROCESS */}
        <div className="mb-24 max-w-5xl mx-auto bg-[#0A1930]/90 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-[#00D4FF]/30 shadow-2xl text-center relative overflow-hidden">
          <div className="mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C9A24A]">
              EFFICIENT WORKFLOW
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Connected 4-Step Onboarding Trace
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2">
              Hover over nodes to inspect details along our digital circuit trace
            </p>
          </div>

          {/* Mobile View: Auto-sliding Carousel (< md) */}
          <div className="block md:hidden">
            <MobileOnboardingCarousel steps={steps} />
          </div>

          {/* Desktop/Tablet View: Circuit Trace Timeline Line & Nodes (>= md) */}
          <div className="hidden md:block relative my-8">
            {/* Glowing cyan-and-gold gradient timeline line */}
            <div className="absolute top-7 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#00D4FF] via-[#C9A24A] to-[#00D4FF] z-0 rounded-full shadow-[0_0_10px_#00D4FF]" />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((st, idx) => {
                const isActive = activeStepHover === idx;
                return (
                  <div
                    key={st.num}
                    onMouseEnter={() => setActiveStepHover(idx)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Node circle */}
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-black text-sm transition-all duration-300 z-10 border-2 ${
                      isActive
                        ? 'bg-[#C9A24A] text-[#0A1930] border-white shadow-[0_0_20px_#C9A24A] scale-110'
                        : 'bg-[#0F3A4A] text-white border-[#00D4FF]/60 hover:border-white'
                    }`}>
                      {st.num}
                    </div>

                    <h4 className="font-serif text-sm font-extrabold text-white mt-3 mb-1 group-hover:text-[#00D4FF] transition-colors">
                      {st.title}
                    </h4>

                    <p className="font-sans text-xs text-slate-300 leading-relaxed text-center px-2">
                      {st.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 7: MOCKUP CARDS WITH COLOR-TINTED OVERLAYS & HOVER ZOOM */}
        <div className="mb-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
              Private Label Industry Mockups
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2">
              Customized bottle renderings created for Pakistani industry leaders
            </p>
          </div>

          {/* Mobile Carousel View (widths < 768px / md) */}
          <div className="block md:hidden">
            <MobileCaseStudyCarousel />
          </div>

          {/* Desktop/Tablet Grid View (widths >= 768px / md) */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 justify-center items-stretch">
            {caseStudiesData.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`backdrop-blur-xl border rounded-3xl p-6 shadow-xl relative overflow-hidden group transition-all duration-500 ${card.cardContainerClass}`}
              >
                <div className={`absolute inset-0 pointer-events-none transition-colors ${card.overlayClass}`} />

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-900 flex items-center justify-center p-4">
                  <img
                    src={card.imageSrc}
                    alt={card.alt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="relative z-10 text-left">
                  <span className={`font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${card.badgeClass}`}>
                    {card.badgeText}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white mt-2">{card.title}</h4>
                  <p className="font-sans text-xs text-slate-300 mt-1">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 8: REQUEST BRAND MOCKUP FORM (DARK GLASSMORPHISM + GOLD PROGRESS BAR + FLOATING LABELS) */}
        <div id="get-quote-block" className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A1930]/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-[#00D4FF]/30 relative overflow-hidden text-white"
          >
            {/* Slim Gold Progress Bar at Top */}
            <div className="absolute top-0 inset-x-0 h-1 bg-slate-800">
              <div
                className="h-full bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#00D4FF] transition-all duration-500"
                style={{ width: formStep === 1 ? '50%' : '100%' }}
              />
            </div>

            <div className="text-center mb-8 max-w-lg mx-auto">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C9A24A]">
                COMPLIMENTARY GRAPHIC PROOF
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Request Your Brand Mockup
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2">
                Provide basic details and receive a 3D digital bottle proof within 24–48 hours.
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
                  className="space-y-6 text-left"
                >
                  {formStep === 1 ? (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div>
                          <label htmlFor="fullName" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                            Full Name *
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full bg-[#0F3A4A]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-all ${
                              errors.fullName ? 'border-red-500' : 'border-white/20'
                            }`}
                            placeholder="e.g. Hammad Khan"
                          />
                        </div>

                        {/* Company Name */}
                        <div>
                          <label htmlFor="companyName" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                            Company Name *
                          </label>
                          <input
                            id="companyName"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className={`w-full bg-[#0F3A4A]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-all ${
                              errors.companyName ? 'border-red-500' : 'border-white/20'
                            }`}
                            placeholder="e.g. Nexus Enterprises"
                          />
                        </div>
                      </div>

                      {/* City */}
                      <div>
                        <label htmlFor="city" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                          City *
                        </label>
                        <input
                          id="city"
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full bg-[#0F3A4A]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-all ${
                            errors.city ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="Rawalpindi, Islamabad, Fateh Jang..."
                        />
                      </div>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="w-full py-4 bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] text-[#0A1930] font-black uppercase tracking-widest text-xs rounded-xl shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
                      >
                        Proceed to Order Specs <ArrowRight className="w-4 h-4 text-[#0A1930]" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Business Type */}
                        <div>
                          <label htmlFor="businessType" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                            Business Type *
                          </label>
                          <select
                            id="businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleInputChange}
                            className="w-full bg-[#0F3A4A] border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF]"
                          >
                            <option value="Hotel" className="bg-[#0A1930]">Hotel / Resort</option>
                            <option value="Restaurant" className="bg-[#0A1930]">Restaurant / Cafe</option>
                            <option value="Office" className="bg-[#0A1930]">Office / Corporate</option>
                            <option value="Shaadi Hall" className="bg-[#0A1930]">Shaadi Hall / Marquee</option>
                            <option value="Other" className="bg-[#0A1930]">Other Brand Event</option>
                          </select>
                        </div>

                        {/* Quantity */}
                        <div>
                          <label htmlFor="quantity" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                            Monthly Volume *
                          </label>
                          <select
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            className="w-full bg-[#0F3A4A] border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF]"
                          >
                            <option value="100–500 bottles" className="bg-[#0A1930]">100–500 bottles</option>
                            <option value="500–1000 bottles" className="bg-[#0A1930]">500–1000 bottles</option>
                            <option value="1000–5000 bottles" className="bg-[#0A1930]">1000–5000 bottles</option>
                            <option value="5000+ bottles" className="bg-[#0A1930]">5000+ bottles</option>
                          </select>
                        </div>
                      </div>

                      {/* Logo Upload */}
                      <div>
                        <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                          Brand Logo Upload (Optional)
                        </label>
                        <div className="relative border border-dashed border-white/30 rounded-xl bg-[#0F3A4A]/40 p-3 hover:border-[#00D4FF] transition-all text-center cursor-pointer">
                          <input
                            id="logoUpload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          />
                          <span className="text-xs text-slate-300">
                            {logoFile ? logoFile.name : "Click to select logo file (PNG / SVG)"}
                          </span>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A24A] mb-1.5">
                          Special Requirements
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F3A4A]/60 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D4FF] resize-none"
                          placeholder="Describe preferred label colors or delivery schedule..."
                        />
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setFormStep(1)}
                          className="w-1/3 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase rounded-xl transition-colors cursor-pointer"
                        >
                          ← Back
                        </button>
                        <button
                          id="b2b-submit-btn"
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 py-3.5 bg-gradient-to-r from-[#00D4FF] via-[#0284c7] to-[#00D4FF] hover:brightness-110 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? "Generating Proof..." : "Request Free Digital Proof"}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#00D4FF] mx-auto mb-3 animate-bounce" />
                  <h4 className="font-serif text-xl font-bold text-white">Inquiry Received!</h4>
                  <p className="font-sans text-xs text-slate-300 mt-2">
                    Our design team will contact you via WhatsApp with custom digital bottle proofs within 24–48 hours.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0A1930] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-[#C9A24A]/40 pointer-events-none z-20" />
    </section>
  );
}
