'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';
import TextReveal from './animations/TextReveal';
import { useRef } from 'react';

const timeline = [
  {
    phase: 'Phase 1',
    title: 'Problem Statements Released',
    date: 'August 15, 2026',
    desc: 'The official problem statements are revealed. Registration must be complete before creating your GitHub repository.',
  },
  {
    phase: 'Phase 2',
    title: 'PDF Idea Submission',
    date: 'August 20, 2026',
    desc: 'Submit your 10-page PDF report explaining your project idea, architecture, tech stack, and impact. No working code required.',
  },
  {
    phase: 'Phase 3',
    title: 'PPT Presentation Submission',
    date: 'August 27, 2026',
    desc: 'Submit your PowerPoint presentation demonstrating your project scope and design using the official Omnikon template.',
  },
  {
    phase: 'Phase 4',
    title: 'Prototype Submission',
    date: 'September 1, 2026',
    desc: 'Code freeze. Submit your live deployed service, GitHub repository link, and a 2-5 minute video pitch.',
  },
  {
    phase: 'Phase 5',
    title: 'Winners Announced',
    date: 'September 5, 2026',
    desc: 'Closing ceremony. Results declared and prizes awarded to the top teams!',
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="section-shell relative overflow-hidden">
      <ScrollReveal className="section-inner max-w-4xl mx-auto">
        <ScrollRevealItem className="mb-12 sm:mb-20 text-center">
          <div className="eyebrow mx-auto">The Roadmap</div>
          <h2 className="section-title">
            <TextReveal text="Hackathon" delay={0.1} as="span" className="inline-block mr-2" />
            <TextReveal text="Timeline" delay={0.3} as="span" className="text-[#ff1e1e] inline-block" />
          </h2>
        </ScrollRevealItem>

        <div ref={containerRef} className="relative pb-10">
          <div className="absolute left-4 sm:left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#151515] md:-translate-x-1/2" />
          
          <motion.div 
            className="absolute left-4 sm:left-[28px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#ff1e1e] to-[#ff1e1e]/20 md:-translate-x-1/2 shadow-[0_0_15px_#ff1e1e]"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-10 sm:gap-16 relative">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollRevealItem key={item.phase}>
                  <div className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <motion.div 
                      className="absolute left-4 sm:left-[28px] md:left-1/2 w-4 h-4 bg-[#050505] border-2 border-[#ff1e1e] rounded-full shadow-[0_0_15px_#ff1e1e] transform -translate-x-1/2 md:translate-x-[-50%] z-10"
                      whileInView={{ backgroundColor: "#ff1e1e", scale: [1, 1.4, 1] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true, margin: "-50px" }}
                    />

                    <div className={`w-full md:w-1/2 pl-10 sm:pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="premium-card p-5 sm:p-8 inline-block w-full group overflow-hidden relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="relative z-10">
                          <div className="code-font text-[#ff1e1e] text-xs sm:text-sm mb-2 uppercase tracking-widest inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ff1e1e] animate-pulse" />
                            {item.phase}
                          </div>
                          <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#ff1e1e] group-hover:drop-shadow-[0_0_10px_rgba(255,30,30,0.5)] transition-all duration-300">
                            {item.title}
                          </h3>
                          <div className="code-font text-white/80 bg-white/5 inline-block px-3 py-1 rounded mb-3 sm:mb-4 text-xs tracking-wider">
                            {item.date}
                          </div>
                          <p className="text-[#bdbdbd] text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </ScrollRevealItem>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
