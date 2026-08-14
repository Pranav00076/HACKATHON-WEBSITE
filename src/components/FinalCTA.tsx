'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="register" className="section-shell overflow-hidden">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="premium-card relative mx-auto max-w-5xl px-6 py-14 text-center sm:px-10 sm:py-20 group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,30,0.15),transparent_42%),radial-gradient(circle_at_16%_100%,rgba(255,255,255,0.05),transparent_34%)] transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
          
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="eyebrow justify-center">Build Phase In Progress</div>
            <h2 className="mt-5 text-[clamp(2.6rem,7vw,6.2rem)] font-black uppercase leading-[0.9] text-white">
              Build Something <span className="text-[#ff1e1e]">Undeniable</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#bdbdbd]">
              Registrations are officially closed. Review the released problem statements, collaborate with your squad, and prepare your project submission.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/tracks#problem-statements" className="magnetic-button primary-button shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_35px_rgba(255,30,30,0.5)] transition-shadow flex items-center justify-center gap-2">
                <FileText size={18} /> View Problem Statements <ArrowRight size={18} />
              </Link>
              <Link href="/rulebook" className="magnetic-button secondary-button hover:border-[#ff1e1e]/40 transition-colors flex items-center justify-center gap-2">
                <BookOpen size={18} /> Official Rulebook
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
