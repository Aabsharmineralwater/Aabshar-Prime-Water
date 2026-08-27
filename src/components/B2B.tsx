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
  ChevronRight,
  User,
  MapPin,
  ChevronDown,
  Package,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import WaterRippleEffect from './WaterRippleEffect';

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
    <div className="flex flex-col items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-lg hover:border-sky-300 hover:shadow-xl transition-all duration-500 group w-full max-w-sm relative overflow-hidden text-slate-800">
      {/* Category Pill Top-Left */}
      <div className="w-full flex justify-between items-center mb-5 z-10">
        {badge}
        <span className="text-[10px] font-mono text-[#0284C7] font-bold tracking-wider uppercase bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 shadow-xs">
          Studio Render
        </span>
      </div>

      {/* Light Studio Image Container */}
      <div className="relative w-full aspect-[4/5] px-4 py-6 bg-gradient-to-b from-sky-50/80 via-sky-50/40 to-slate-100 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-200 shadow-inner">
        {/* Soft studio backlighting spotlight */}
        <div className="absolute w-44 h-44 bg-[radial-gradient(circle,rgba(0,180,216,0.15)_0%,transparent_70%)] rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
        
        {/* Bottle Image */}
        <img 
          src={imageSrc} 
          alt={`${brandName} custom bottle pairs`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-auto object-contain z-10 filter drop-shadow-[0_16px_20px_rgba(2,132,199,0.15)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-transform duration-500 ease-out"
        />

        {/* Water Ripple & Splash Effect under bottle */}
        <WaterRippleEffect size="md" className="opacity-60" />
      </div>

      {/* Brand & Design Info */}
      <div className="w-full mt-5 text-left z-10">
        <h4 className="font-serif text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#0284C7] transition-colors duration-200 leading-snug">
          {brandName}
        </h4>
        <p className="font-sans text-xs text-[#0284C7] font-semibold mt-1 tracking-wide">
          {subtitle}
        </p>
        
        <p className="font-sans italic text-xs text-slate-600 mt-3 line-clamp-2 border-l-2 border-[#0284C7] pl-2.5">
          "{tagline}"
        </p>

        {/* Palette Matching - Labeled Brand Palette Chip */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-extrabold flex items-center gap-1">
              🎨 Brand Palette
            </span>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1.5">
                {colors.map((c, i) => (
                  <div 
                    key={i} 
                    className="w-3.5 h-3.5 rounded-full border border-white shadow-xs" 
                    style={{ backgroundColor: c.bg }}
                    title={c.name}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] font-bold text-slate-700 truncate max-w-[130px]">
                {colors.map(c => c.name.split(' ')[0]).join(' · ')}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-extrabold">
              Bottle Formats
            </span>
            <div className="flex items-center gap-1.5">
              {volumes.map((v, i) => (
                <span 
                  key={i} 
                  className="text-[10px] font-mono font-bold bg-sky-50 text-[#0284C7] px-2.5 py-1 rounded-md border border-sky-200 shadow-xs"
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
    badgeClass: 'text-[#0284C7] bg-sky-50 border-sky-200',
    title: 'IronCore Fitness',
    description: 'High-performance athletic club custom bottles.',
    cardContainerClass: 'bg-white border-slate-200 hover:border-sky-300 shadow-lg text-slate-800',
    overlayClass: 'bg-sky-500/5 group-hover:bg-sky-500/10'
  },
  {
    id: 'dining',
    imageSrc: riverdaleMockup,
    alt: 'The Olive Table Custom Bottle',
    badgeText: 'Fine Dining & Cafes',
    badgeClass: 'text-[#0284C7] bg-sky-50 border-sky-200',
    title: 'The Olive Table',
    description: 'Gourmet dining table 500 mL mineral bottles.',
    cardContainerClass: 'bg-white border-slate-200 hover:border-sky-300 shadow-lg text-slate-800',
    overlayClass: 'bg-sky-500/5 group-hover:bg-sky-500/10'
  },
  {
    id: 'corporate',
    imageSrc: nexoraMockup,
    alt: 'Nexora Technologies Custom Bottle',
    badgeText: 'Corporate & Tech',
    badgeClass: 'text-[#0284C7] bg-sky-50 border-sky-200',
    title: 'Nexora Technologies',
    description: 'Executive summit boardroom water bottles.',
    cardContainerClass: 'bg-white border-slate-200 hover:border-sky-300 shadow-lg text-slate-800',
    overlayClass: 'bg-sky-500/5 group-hover:bg-sky-500/10'
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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center shadow-md active:scale-95 hover:bg-sky-50 transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next card"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center shadow-md active:scale-95 hover:bg-sky-50 transition-all duration-300 cursor-pointer"
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
            className={`border rounded-3xl p-6 shadow-lg relative overflow-hidden group transition-colors duration-500 w-full cursor-grab active:cursor-grabbing ${currentCard.cardContainerClass}`}
          >
            <div className={`absolute inset-0 pointer-events-none transition-colors ${currentCard.overlayClass}`} />

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-100 flex items-center justify-center p-4">
              <img
                src={currentCard.imageSrc}
                alt={currentCard.alt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain z-20 relative transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <WaterRippleEffect size="md" className="bottom-2 opacity-60" />
            </div>

            <div className="relative z-10 text-left">
              <span className={`font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${currentCard.badgeClass}`}>
                {currentCard.badgeText}
              </span>
              <h4 className="font-serif text-xl font-bold text-slate-900 mt-2">{currentCard.title}</h4>
              <p className="font-sans text-xs text-slate-600 mt-1">{currentCard.description}</p>
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
                ? 'w-7 h-2.5 bg-gradient-to-r from-[#0284C7] via-[#00B4D8] to-[#00D4FF] rounded-full shadow-sm'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center shadow-md active:scale-95 hover:bg-sky-50 transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next step"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center shadow-md active:scale-95 hover:bg-sky-50 transition-all duration-300 cursor-pointer"
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
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md flex flex-col items-center text-center relative overflow-hidden min-h-[220px] w-full cursor-grab active:cursor-grabbing"
          >
            {/* Fine cyan top accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0284C7] via-[#00B4D8] to-[#00D4FF]" />

            {/* Badge Step Indicator Header */}
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#0284C7] bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full mb-3">
              Step {currentIndex + 1} of {totalCards}
            </span>

            {/* Circle Node Number */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white border-2 border-sky-200 shadow-md flex items-center justify-center font-mono font-black text-sm my-1">
              {st.num}
            </div>

            <div className="flex items-center gap-1.5 mt-3 mb-1 text-[#0284C7]">
              {st.icon}
              <h4 className="font-serif text-lg font-extrabold text-slate-900">
                {st.title}
              </h4>
            </div>

            <p className="font-sans text-xs text-slate-600 leading-relaxed max-w-xs mt-1">
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
                ? 'w-7 h-2.5 bg-gradient-to-r from-[#0284C7] via-[#00B4D8] to-[#00D4FF] rounded-full shadow-sm'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
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
    { title: "Hotels & Resorts", icon: <Hotel className="w-5 h-5 text-[#00D4FF]" /> },
    { title: "Restaurants & Cafes", icon: <Utensils className="w-5 h-5 text-[#00D4FF]" /> },
    { title: "Corporate Boardrooms", icon: <Building2 className="w-5 h-5 text-[#00D4FF]" /> },
    { title: "Weddings & Marquees", icon: <Heart className="w-5 h-5 text-[#00D4FF]" /> },
    { title: "Conferences & Expos", icon: <Factory className="w-5 h-5 text-[#00D4FF]" /> },
    { title: "Fitness & Wellness", icon: <Dumbbell className="w-5 h-5 text-[#00D4FF]" /> },
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
    <section id="b2b" className="py-24 bg-slate-50/70 text-slate-800 relative overflow-hidden cv-auto border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 5: B2B EDITORIAL + INDUSTRIES SERVED */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>B2B Private Label Program</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Your Brand on Every Bottle. <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] via-[#00B4D8] to-[#0284C7]">Pure Mineral Water</span> for Discerning Venues.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Transform standard hydration into a high-impact branding statement. We manufacture, custom-label, and deliver certified mineral water directly to luxury hotels, fine dining establishments, corporate boardrooms, and premier wedding marquees.
          </motion.p>

          {/* Fine-Line Icon Strip for Industries Served */}
          <div className="pt-8 border-t border-slate-200 max-w-4xl mx-auto">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284C7] block mb-4">
              Industries Served
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {industries.map((ind) => (
                <div key={ind.title} className="flex flex-col items-center text-center p-3 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-2.5 rounded-full bg-sky-50 mb-2">
                    {ind.icon}
                  </div>
                  <span className="font-serif text-xs font-bold text-slate-800 leading-tight">
                    {ind.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 6: METRO-MAP CONNECTED HORIZONTAL TIMELINE PROCESS */}
        <div className="mb-24 max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-center relative overflow-hidden">
          <div className="mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0284C7]">
              EFFICIENT WORKFLOW
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Connected 4-Step Onboarding Trace
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2">
              Hover over nodes to inspect details along our digital circuit trace
            </p>
          </div>

          {/* Mobile View: Auto-sliding Carousel (< md) */}
          <div className="block md:hidden">
            <MobileOnboardingCarousel steps={steps} />
          </div>

          {/* Desktop/Tablet View: Circuit Trace Timeline Line & Nodes (>= md) */}
          <div className="hidden md:block relative my-8">
            {/* Glowing cyan-and-royal gradient timeline line */}
            <div className="absolute top-7 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#00D4FF] via-[#0284C7] to-[#0369A1] z-0 rounded-full shadow-sm" />

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
                        ? 'bg-[#0284C7] text-white border-sky-300 shadow-md scale-110'
                        : 'bg-sky-50 text-[#0284C7] border-sky-200 hover:border-[#0284C7]'
                    }`}>
                      {st.num}
                    </div>

                    <h4 className="font-serif text-sm font-extrabold text-slate-900 mt-3 mb-1 group-hover:text-[#0284C7] transition-colors">
                      {st.title}
                    </h4>

                    <p className="font-sans text-xs text-slate-600 leading-relaxed text-center px-2">
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
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900">
              Private Label Industry Mockups
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2">
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
                className={`border rounded-3xl p-6 shadow-lg relative overflow-hidden group transition-all duration-500 ${card.cardContainerClass}`}
              >
                <div className={`absolute inset-0 pointer-events-none transition-colors ${card.overlayClass}`} />

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-100 flex items-center justify-center p-4">
                  <img
                    src={card.imageSrc}
                    alt={card.alt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-auto object-contain z-20 relative transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <WaterRippleEffect size="md" className="bottom-2 opacity-60" />
                </div>

                <div className="relative z-10 text-left">
                  <span className={`font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${card.badgeClass}`}>
                    {card.badgeText}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-slate-900 mt-2">{card.title}</h4>
                  <p className="font-sans text-xs text-slate-600 mt-1">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 8: REQUEST BRAND MOCKUP FORM */}
        <div id="get-quote-block" className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 relative overflow-hidden text-slate-800"
          >
            {/* Ambient Corner Blur Effects */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

            {/* Slim Cyan Progress Bar at Top */}
            <div className="absolute top-0 inset-x-0 h-1 bg-slate-100">
              <div
                className="h-full bg-gradient-to-r from-[#00D4FF] via-[#0284C7] to-[#0369A1] transition-all duration-500"
                style={{ width: formStep === 1 ? '50%' : '100%' }}
              />
            </div>

            <div className="text-center mb-8 max-w-lg mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-mono font-bold tracking-widest uppercase mb-3.5 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7] animate-pulse" />
                <span>COMPLIMENTARY GRAPHIC PROOF</span>
              </motion.div>

              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Request Your <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] via-[#00B4D8] to-[#0284C7]">Brand Mockup</span>
              </h3>
              
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent mx-auto mt-2.5 rounded-full" />

              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-3 max-w-lg mx-auto leading-relaxed">
                Provide basic details and receive a high-definition 3D digital bottle proof tailored to your brand within 24–48 hours.
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
                  className="space-y-6 text-left relative z-10"
                >
                  {formStep === 1 ? (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div>
                          <label htmlFor="fullName" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <User className="w-4 h-4 text-[#0284C7]" />
                            </div>
                            <input
                              id="fullName"
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className={`w-full bg-slate-50 border rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] focus:bg-white transition-all ${
                                errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-200'
                              }`}
                              placeholder="e.g. Hammad Khan"
                            />
                          </div>
                          {errors.fullName && (
                            <p className="text-xs text-red-500 mt-1 font-semibold">{errors.fullName}</p>
                          )}
                        </div>

                        {/* Company Name */}
                        <div>
                          <label htmlFor="companyName" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Company / Business Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Building2 className="w-4 h-4 text-[#0284C7]" />
                            </div>
                            <input
                              id="companyName"
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              className={`w-full bg-slate-50 border rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] focus:bg-white transition-all ${
                                errors.companyName ? 'border-red-500 bg-red-50/50' : 'border-slate-200'
                              }`}
                              placeholder="e.g. Nexus Enterprises"
                            />
                          </div>
                          {errors.companyName && (
                            <p className="text-xs text-red-500 mt-1 font-semibold">{errors.companyName}</p>
                          )}
                        </div>
                      </div>

                      {/* City */}
                      <div>
                        <label htmlFor="city" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                          City *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <MapPin className="w-4 h-4 text-[#0284C7]" />
                          </div>
                          <input
                            id="city"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={`w-full bg-slate-50 border rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] focus:bg-white transition-all ${
                              errors.city ? 'border-red-500 bg-red-50/50' : 'border-slate-200'
                            }`}
                            placeholder="Rawalpindi, Islamabad, Fateh Jang..."
                          />
                        </div>
                        {errors.city && (
                          <p className="text-xs text-red-500 mt-1 font-semibold">{errors.city}</p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#0284C7] via-[#00B4D8] to-[#0088CC] hover:brightness-105 text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2.5 mt-5 active:scale-98 group"
                      >
                        <span>Proceed to Order Specs</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Business Type */}
                        <div>
                          <label htmlFor="businessType" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Business Type *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Building2 className="w-4 h-4 text-[#0284C7]" />
                            </div>
                            <select
                              id="businessType"
                              name="businessType"
                              value={formData.businessType}
                              onChange={handleInputChange}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3 text-slate-900 text-sm appearance-none focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] focus:bg-white transition-all cursor-pointer"
                            >
                              <option value="Hotel">Hotel / Resort</option>
                              <option value="Restaurant">Restaurant / Cafe</option>
                              <option value="Office">Office / Corporate</option>
                              <option value="Shaadi Hall">Shaadi Hall / Marquee</option>
                              <option value="Other">Other Brand Event</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <ChevronDown className="w-4 h-4 text-[#0284C7]" />
                            </div>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div>
                          <label htmlFor="quantity" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Monthly Volume *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Package className="w-4 h-4 text-[#0284C7]" />
                            </div>
                            <select
                              id="quantity"
                              name="quantity"
                              value={formData.quantity}
                              onChange={handleInputChange}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3 text-slate-900 text-sm appearance-none focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] focus:bg-white transition-all cursor-pointer"
                            >
                              <option value="100–500 bottles">100–500 bottles</option>
                              <option value="500–1000 bottles">500–1000 bottles</option>
                              <option value="1000–5000 bottles">1000–5000 bottles</option>
                              <option value="5000+ bottles">5000+ bottles</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <ChevronDown className="w-4 h-4 text-[#0284C7]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Logo Upload */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Brand Logo Upload (Optional)
                        </label>
                        <div className="relative border border-dashed border-slate-300 hover:border-[#0284C7] rounded-xl bg-slate-50 p-3.5 transition-all text-center cursor-pointer group hover:bg-sky-50/50">
                          <input
                            id="logoUpload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                          />
                          <div className="flex items-center justify-center gap-2 text-xs text-slate-600 group-hover:text-slate-900">
                            <Upload className="w-4 h-4 text-[#0284C7]" />
                            <span>{logoFile ? logoFile.name : "Click or drag to select logo file (PNG / SVG)"}</span>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Special Requirements
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3.5 flex items-center pointer-events-none text-slate-400">
                            <FileText className="w-4 h-4 text-[#0284C7]" />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] focus:bg-white transition-all resize-none"
                            placeholder="Describe preferred label colors or delivery schedule..."
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setFormStep(1)}
                          className="w-1/3 py-3 sm:py-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold text-xs uppercase rounded-xl transition-all cursor-pointer"
                        >
                          ← Back
                        </button>
                        <button
                          id="b2b-submit-btn"
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 py-3 sm:py-3.5 bg-gradient-to-r from-[#0284C7] via-[#00B4D8] to-[#0088CC] hover:brightness-105 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4 text-white" />
                          <span>{isSubmitting ? "Generating Proof..." : "Request Free Digital Proof"}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </motion.form>
              ) : (
                <div className="text-center py-8 relative z-10">
                  <CheckCircle2 className="w-14 h-14 text-[#0284C7] mx-auto mb-3 animate-bounce" />
                  <h4 className="font-serif text-2xl font-bold text-slate-900">Inquiry Received!</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Our design team will contact you via WhatsApp with custom digital bottle proofs within 24–48 hours.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
