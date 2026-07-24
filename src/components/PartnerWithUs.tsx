'use client';

import { motion, useInView, animate } from 'framer-motion';
import { Trophy, Code2, Globe, CalendarDays } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { icon: Trophy, value: 10000, prefix: '₹', suffix: '', label: 'PRIZE POOL' },
  { icon: Code2, value: 5, prefix: '', suffix: '', label: 'INNOVATION TRACKS' },
  { icon: Globe, value: 100, prefix: '', suffix: '%', label: 'ONLINE' },
  { icon: CalendarDays, value: 1, prefix: '', suffix: ' MONTH', label: 'BUILD CYCLE' },
];

function AnimatedStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, stat.value, {
        duration: 1.5,
        delay: 0.12 * index,
        ease: "easeOut",
        onUpdate: (val) => setCount(Math.round(val))
      });
      return controls.stop;
    }
  }, [isInView, index, stat.value]);

  const displayValue = stat.value >= 1000 ? count.toLocaleString('en-IN') : count;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.12 * index, ease: "easeOut" }}
      whileHover="hover"
      variants={{
        hover: { y: -4, scale: 1.03 }
      }}
      className="relative group p-6 flex flex-col items-center justify-center text-center rounded-2xl transition-all duration-300 hover:bg-[#0c0c0c] hover:shadow-[0_15px_30px_rgba(255,30,30,0.05)] border border-transparent hover:border-[#ff1e1e]/10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: [0, 1, 0], scale: [0.8, 1.2, 1] } : {}}
        transition={{ duration: 1.2, delay: 0.12 * index + 1.2, times: [0, 0.5, 1], ease: "easeInOut" }}
        className="absolute inset-0 bg-[#ff1e1e]/15 blur-2xl rounded-full z-0 pointer-events-none"
      />

      <div className="absolute inset-0 bg-[#ff1e1e]/0 group-hover:bg-[#ff1e1e]/5 blur-xl rounded-full z-0 pointer-events-none transition-colors duration-300" />

      <motion.div 
        className="relative z-10 mb-4 text-[#bdbdbd] group-hover:text-[#ff1e1e] transition-colors duration-300"
        variants={{
          hover: { scale: 1.1, opacity: [1, 0.7, 1], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
        }}
      >
        <stat.icon size={36} strokeWidth={1.5} />
      </motion.div>

      <div className="relative z-10 code-font text-4xl sm:text-5xl font-black text-white group-hover:brightness-125 transition-all duration-300 neon-text flex items-center">
        {stat.prefix}
        <span>{displayValue}</span>
        {stat.suffix}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.12 * index + 1.4 }} 
        className="relative z-10 text-xs sm:text-sm text-[#bdbdbd] uppercase tracking-widest mt-4 font-semibold group-hover:text-white transition-colors duration-300"
      >
        {stat.label}
      </motion.div>
    </motion.div>
  );
}

export default function PartnerWithUs() {
  return (
    <section id="partner" className="section-shell border-t border-[#ff1e1e]/10">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <div className="eyebrow mx-auto">Get Involved</div>
          <h2 className="section-title">
            Partner With <span className="text-[#ff1e1e]">Us</span>
          </h2>
          <p className="section-subtitle mx-auto mb-16">
            Join hands with Omnikon to foster innovation and support the next generation of builders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-8 text-center flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-[#bdbdbd] mb-8">Want to sponsor or partner with us? Send us an email and let&apos;s discuss.</p>
            </div>
            <a href="mailto:contact@omnikonhub.com" className="magnetic-button primary-button w-full flex items-center justify-center">contact@omnikonhub.com</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="premium-card p-8 text-center flex flex-col justify-between border-[#ff1e1e]/30 bg-[#ff1e1e]/5"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#ff1e1e] mb-4">Join Discord</h3>
              <p className="text-[#bdbdbd] mb-8">Reach out to the core team directly on our community Discord server.</p>
            </div>
            <a href="https://discord.gg/yWtjK2Tb8T" target="_blank" rel="noopener noreferrer" className="magnetic-button secondary-button w-full flex items-center justify-center border-[#ff1e1e]/50 hover:bg-[#ff1e1e] hover:text-black transition-colors">Join Server</a>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-[#151515]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <AnimatedStat key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
