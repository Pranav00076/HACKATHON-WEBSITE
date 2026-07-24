'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';
import { faqsData } from '@/data/faqs';

const categories = ['All', 'General', 'Eligibility', 'Submissions', 'Prizes & Judging'] as const;

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory === 'All' 
    ? faqsData 
    : faqsData.filter((f) => f.category === activeCategory);

  return (
    <section id="faqs" className="section-shell">
      <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <ScrollReveal>
          <ScrollRevealItem>
            <div className="eyebrow">Questions & Answers</div>
            <h2 className="section-title">
              Everything Before You <span className="text-[#ff1e1e]">Register</span>
            </h2>
            <p className="section-subtitle mt-6 max-w-md">
              Quick answers for teams deciding whether Omnikon is the right place to build their next project.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`code-font text-xs uppercase tracking-widest px-4 py-2 rounded-xl border transition-all ${
                    activeCategory === cat
                      ? 'border-[#ff1e1e] bg-[#ff1e1e]/20 text-white font-bold shadow-[0_0_15px_rgba(255,30,30,0.3)]'
                      : 'border-white/10 bg-[#151515] text-[#bdbdbd] hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollRevealItem>
        </ScrollReveal>

        <div className="grid gap-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollRevealItem key={faq.question}>
                <motion.div 
                  layout
                  className={`premium-card transition-all duration-500 overflow-hidden ${
                    isOpen 
                      ? 'border-[#ff1e1e]/40 shadow-[0_10px_30px_rgba(255,30,30,0.15)] bg-[#0a0a0a]' 
                      : 'hover:border-[#ff1e1e]/20 hover:bg-[#0a0a0a]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left outline-none"
                  >
                    <span className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#ff1e1e]' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }} 
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                        isOpen 
                          ? 'border-[#ff1e1e]/50 bg-[#ff1e1e]/10 text-[#ff1e1e] shadow-[0_0_15px_rgba(255,30,30,0.2)]' 
                          : 'border-white/10 bg-[#151515] text-[#bdbdbd]'
                      }`}
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="border-t border-[#ff1e1e]/10 pt-4 text-lg leading-relaxed text-[#bdbdbd]">
                            <motion.p
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.4 }}
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollRevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
