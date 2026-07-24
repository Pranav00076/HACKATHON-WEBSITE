'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, GraduationCap } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';
import TextReveal from './animations/TextReveal';

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-shell overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <ScrollReveal stagger className="section-inner relative z-10 max-w-5xl mx-auto">
        <ScrollRevealItem className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <div className="eyebrow justify-center">Official Partners</div>
          <h2 className="section-title">
            <TextReveal text="Backed By Industry" delay={0.1} as="span" className="inline-block mr-2" />
            <TextReveal text="Leaders" delay={0.3} as="span" className="text-[#ff1e1e] inline-block" />
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            We are proud to collaborate with ecosystem leaders providing platforms, mentorship, learning resources, and growth opportunities.
          </p>
        </ScrollRevealItem>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Unstop Partner Card */}
          <ScrollRevealItem>
            <motion.a
              href="https://unstop.com/p/omnikon-national-hackathon-2026-omnikon-1715716"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="premium-card p-8 sm:p-10 flex flex-col justify-between h-full group relative overflow-hidden border-[#ff1e1e]/30 bg-[#0a0a0a]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ff1e1e]/40 bg-[#ff1e1e]/10 text-xs font-mono uppercase tracking-widest text-[#ff1e1e]">
                    <ShieldCheck size={14} />
                    <span>Platform Partner</span>
                  </div>
                  <ExternalLink size={18} className="text-[#bdbdbd] group-hover:text-[#ff1e1e] transition-colors" />
                </div>

                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-black tracking-wider text-white group-hover:text-[#ff1e1e] transition-colors duration-300">
                    unstop
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Official Event Host</h3>
                <p className="text-[#bdbdbd] text-sm leading-relaxed mb-6">
                  Omnikon is officially hosted on Unstop — India&apos;s leading platform for hackathons, coding challenges, and career acceleration. Registrations, submissions, and evaluation tracking take place seamlessly on Unstop.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#ff1e1e]">
                <span>Register &amp; Submit on Unstop</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.a>
          </ScrollRevealItem>

          {/* Upstox Partner Card */}
          <ScrollRevealItem>
            <motion.a
              href="https://upstox.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="premium-card p-8 sm:p-10 flex flex-col justify-between h-full group relative overflow-hidden border-white/10 bg-[#0a0a0a]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-mono uppercase tracking-widest text-white">
                    <GraduationCap size={14} className="text-[#ff1e1e]" />
                    <span>Knowledge Partner</span>
                  </div>
                  <ExternalLink size={18} className="text-[#bdbdbd] group-hover:text-white transition-colors" />
                </div>

                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">
                    uplearn
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#bdbdbd] tracking-widest uppercase">
                    BY UPSTOX
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Learning &amp; Growth Partner</h3>
                <p className="text-[#bdbdbd] text-sm leading-relaxed mb-6">
                  Uplearn by Upstox empowers student developers with financial technology knowledge, learning content, and career guidance during the hackathon lifecycle.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white">
                <span>Explore Upstox &amp; Uplearn</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.a>
          </ScrollRevealItem>
        </div>
      </ScrollReveal>
    </section>
  );
}
