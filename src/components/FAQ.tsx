import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Droplets, MapPin, Award, Building2 } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'tds' | 'delivery' | 'b2b' | 'purity';
  categoryLabel: string;
  question: string;
  answer: string;
  highlights?: string[];
}

const faqData: FAQItem[] = [
  {
    id: 'tds-level',
    category: 'tds',
    categoryLabel: 'TDS & Purity',
    question: 'What is the TDS (Total Dissolved Solids) level of Aabshar Prime Water?',
    answer: 'Aabshar Prime Water is scientifically balanced at a sweet-spot TDS level of 120–160 PPM (Parts Per Million). Unlike zero-TDS RO water which lacks vital nutrients, or tap water with harsh contaminants, our water is naturally bio-hydrating and enriched with essential minerals like Calcium, Magnesium, and Potassium in complete accordance with WHO (World Health Organization) and PCRWR (Pakistan Council of Research in Water Resources) standards.',
    highlights: ['120–160 PPM Sweet Spot', '100% PCRWR & WHO Certified', 'Essential Calcium & Magnesium'],
  },
  {
    id: 'delivery-coverage',
    category: 'delivery',
    categoryLabel: 'Delivery & Areas',
    question: 'Which cities and areas do you deliver to in Pakistan?',
    answer: 'We provide direct express doorstep delivery across major metropolitan centers in Punjab, including Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Sialkot, Gujranwala, and Fateh Jang. Standard home and office orders are dispatched via our specialized temperature-controlled delivery fleet within 24 to 48 hours of order placement.',
    highlights: ['24-48 Hour Doorstep Dispatch', 'Chilled Delivery Fleet', 'Servicing Major Punjab Cities'],
  },
  {
    id: 'private-labeling',
    category: 'b2b',
    categoryLabel: 'Private Labeling (B2B)',
    question: 'How does Aabshar custom private labeling & co-branding work for businesses?',
    answer: 'We offer bespoke private-label bottling for corporate boardrooms, 5-star hotels, fine-dining restaurants, luxury events, weddings, and fitness centers. You can customize bottle sizes (330ml, 500ml, 1.5L) with custom waterproof metallic or matte labels featuring your company logo and brand color palette. We support flexible low Minimum Order Quantities (MOQs) with swift production timelines.',
    highlights: ['Custom Metallic & Foil Labels', 'Corporate & Hotel Co-Branding', 'Low MOQs & Fast Turnaround'],
  },
  {
    id: 'purification-process',
    category: 'purity',
    categoryLabel: 'TDS & Purity',
    question: 'How is Aabshar Prime Water purified and tested?',
    answer: 'Our water is drawn from deep natural rock aquifers and undergoes a rigorous 7-stage purification process. This includes micro-sediment filtration, reverse osmosis, mineral remineralization, UV disinfection, and controlled ozonation. Every batch undergoes daily physical, chemical, and microbiological testing in ISO-certified laboratories to guarantee 100% purity and safety.',
    highlights: ['7-Stage Multi-Barrier Purification', 'Deep Aquifer Source', 'Daily ISO Lab Testing'],
  },
  {
    id: 'ordering-subscription',
    category: 'delivery',
    categoryLabel: 'Delivery & Areas',
    question: 'How do I place an order or set up a recurring delivery subscription?',
    answer: 'Placing an order is seamless! You can order directly through our website order form or via WhatsApp (+92-305-1999897). For homes and commercial offices requiring regular supply, we offer flexible weekly and monthly recurring subscription plans with automatic scheduled deliveries and dedicated account management.',
    highlights: ['Instant WhatsApp Ordering', 'Weekly & Monthly Auto-Supply', 'Dedicated Support Manager'],
  },
  {
    id: 'bottle-quality',
    category: 'b2b',
    categoryLabel: 'Private Labeling (B2B)',
    question: 'Are Aabshar water bottles safe, BPA-free, and food-grade certified?',
    answer: 'Yes, absolutely. All Aabshar bottles are manufactured from 100% virgin PET, BPA-free, food-grade materials that exceed national and international food safety regulations. They are engineered with high structural rigidity to prevent crushing during transport while maintaining pristine clarity.',
    highlights: ['100% Virgin BPA-Free PET', 'Food-Grade Certified', 'Crystal Clarity & High Strength'],
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string>('tds-level');
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'tds', label: 'TDS & Purity', icon: Droplets },
    { id: 'delivery', label: 'Delivery & Coverage', icon: MapPin },
    { id: 'b2b', label: 'Private Labeling', icon: Building2 },
  ];

  const filteredFaqs = activeTab === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeTab);

  // Generate JSON-LD schema for FAQPage SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section 
      id="faq" 
      className="py-20 bg-gradient-to-b from-[#0A1930] via-[#0D223D] to-[#0A1930] text-white relative overflow-hidden cv-auto border-t border-[#00D4FF]/20"
    >
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative ambient water glows & wave divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent pointer-events-none z-20" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#C9A24A]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-mono font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Frequently Asked <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A]">Questions</span>
          </motion.h2>

          <p className="font-sans text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Everything you need to know about Aabshar's bio-balanced 135 TDS mineral water, express delivery coverage, and custom B2B bottle labeling.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00D4FF] to-[#0F3A4A] text-white shadow-[0_0_20px_rgba(0,212,255,0.4)] border border-[#00D4FF]'
                    : 'bg-[#0A1930]/80 text-slate-300 hover:text-white hover:bg-[#0F3A4A]/60 border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#00D4FF]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0D2644]/90 border-[#00D4FF] shadow-[0_10px_30px_rgba(0,212,255,0.2)]'
                    : 'bg-[#0A1930]/80 border-white/10 hover:border-[#00D4FF]/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none select-none group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#00D4FF] text-[#0A1930]' : 'bg-[#0F3A4A] text-[#00D4FF] group-hover:bg-[#00D4FF]/20'
                    }`}>
                      <Droplets className="w-4 h-4 fill-current" />
                    </div>
                    <span className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 flex-shrink-0 ${
                    isOpen 
                      ? 'bg-[#00D4FF]/20 border-[#00D4FF] text-[#00D4FF] rotate-180' 
                      : 'border-white/20 text-slate-400 group-hover:text-white'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                        <p className="mb-4">{faq.answer}</p>

                        {faq.highlights && faq.highlights.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {faq.highlights.map((hl, i) => (
                              <span 
                                key={i}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-mono font-bold"
                              >
                                <Award className="w-3 h-3 text-[#C9A24A]" />
                                <span>{hl}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp Assistance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F3A4A] via-[#0A1930] to-[#0F3A4A] border border-[#00D4FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left relative overflow-hidden"
        >
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] flex-shrink-0">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Have a unique question or bulk custom inquiry?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1">
                Our water hydrologist team is available on WhatsApp 24/7 for instant support.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/923051999897?text=Hi%20Aabshar,%20I%20have%20a%20question%20regarding%20Aabshar%20Prime%20Water."
            target="_blank"
            rel="noreferrer"
            className="relative z-10 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] active:scale-95 transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
