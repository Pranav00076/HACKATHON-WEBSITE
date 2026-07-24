'use client';

import { motion, useInView } from 'framer-motion';
import { MessageSquare, CheckCircle2, BookOpen } from 'lucide-react';
import { useRef } from 'react';

const features = [
  'Official announcements',
  'Mentor sessions',
  'Live support',
  'Team formation',
  'FAQs',
  'Schedule updates',
  'Problem statement release (15 August)',
  'Submission reminders',
  'Results & winner announcements'
];

export default function DiscordBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-shell relative overflow-hidden py-20" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#ff1e1e]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-inner max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover="hover"
          className="premium-card p-8 sm:p-12 relative overflow-hidden group border border-[#ff1e1e]/30 bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-[2rem] shadow-[0_0_40px_rgba(255,30,30,0.1)] transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-[#ff1e1e]/50 transition-colors duration-500 pointer-events-none" />
          
          <motion.div 
            initial={{ left: "-100%" }}
            animate={isInView ? { left: "200%" } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#ff1e1e]/20 to-transparent skew-x-[-20deg] pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-2xl bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 flex items-center justify-center text-[#ff1e1e] mb-8 relative group-hover:bg-[#ff1e1e]/20 transition-colors duration-300"
              >
                <MessageSquare size={32} />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1e1e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff1e1e] border-2 border-[#0a0a0a]"></span>
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-4 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                🚨 Official<br/>Communication Hub
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[#bdbdbd] text-lg leading-relaxed mb-8 space-y-4"
              >
                <p>
                  All important hackathon announcements, updates, mentor sessions, Q&A, results, schedule changes, support, and winner announcements will be shared exclusively on our official Discord server.
                </p>
                <p className="font-semibold text-white">
                  Every registered participant is strongly encouraged to join the server before the event begins.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="https://discord.gg/yWtjK2Tb8T" target="_blank" rel="noopener noreferrer" className="magnetic-button primary-button px-8 py-3 rounded-lg flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,30,30,0.5)] transition-all">
                  <MessageSquare size={18} />
                  <span>Join Discord</span>
                </a>
                <a href="/rulebook" className="magnetic-button secondary-button px-8 py-3 rounded-lg flex items-center justify-center gap-2">
                  <BookOpen size={18} />
                  <span>Read Rulebook</span>
                </a>
              </motion.div>
            </div>

            <div className="bg-[#111] border border-white/5 p-6 sm:p-8 rounded-2xl">
              <h3 className="code-font text-xs uppercase tracking-widest text-[#ff1e1e] mb-6 font-bold">What you get access to</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
                    className="flex items-start gap-3 text-sm text-[#bdbdbd] group-hover:text-white transition-colors duration-300"
                  >
                    <CheckCircle2 size={16} className="text-[#ff1e1e] shrink-0 mt-0.5" />
                    <span className="leading-tight">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
