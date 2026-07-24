'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, Variants, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import TextReveal from './animations/TextReveal';
import { HACKATHON_CONFIG } from '@/data/hackathon';

const targetDate = new Date(HACKATHON_CONFIG.dates.targetIso);

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const difference = Math.max(targetDate.getTime() - Date.now(), 0);
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid w-full grid-cols-4 gap-2 sm:gap-4 mt-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div 
          key={unit} 
          className="premium-card p-4 text-center group cursor-default overflow-hidden relative"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff1e1e]/0 via-[#ff1e1e]/5 to-[#ff1e1e]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 code-font text-2xl sm:text-4xl font-bold text-white group-hover:text-[#ff1e1e] group-hover:drop-shadow-[0_0_10px_rgba(255,30,30,0.8)] transition-all duration-300">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="relative z-10 code-font mt-2 text-[0.60rem] sm:text-xs uppercase tracking-[0.2em] text-[#bdbdbd] group-hover:text-white transition-colors duration-300">
            {unit}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const parallaxX1 = useTransform(mouseX, [-1, 1], [-20, 20]);
  const parallaxY1 = useTransform(mouseY, [-1, 1], [-20, 20]);
  const parallaxX2 = useTransform(mouseX, [-1, 1], [30, -30]);
  const parallaxY2 = useTransform(mouseY, [-1, 1], [30, -30]);

  return (
    <section ref={containerRef} id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ x: parallaxX1, y: parallaxY1 }}
          className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-[#ff1e1e]/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{ x: parallaxX2, y: parallaxY2 }}
          className="absolute right-[10%] bottom-[10%] h-80 w-80 rounded-full bg-[#ff1e1e]/10 blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div 
          style={{ x: parallaxX1, y: parallaxY2 }}
          className="absolute left-[15%] bottom-[30%] opacity-[0.03] code-font text-xs"
        >
          {`const hackathon = new Omnikon({ 
  status: 'active',
  innovation: Infinity
});`}
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-inner relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="eyebrow mb-6 inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1e1e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1e1e]"></span>
          </span>
          {HACKATHON_CONFIG.subTagline}
        </motion.div>
        
        <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-tight mb-8 perspective-[1000px]">
          <TextReveal text="Build The" splitBy="letters" delay={0.1} className="block mb-2 text-[#bdbdbd]" />
          <TextReveal text="Impossible" splitBy="letters" delay={0.5} className="block text-[#ff1e1e] neon-text" />
        </h1>
        
        <motion.p variants={itemVariants} className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-white font-medium drop-shadow-md mb-10">
          {HACKATHON_CONFIG.description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#bdbdbd] mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff1e1e]/20 bg-[#151515] px-5 py-2.5 shadow-[0_0_15px_rgba(255,30,30,0.1)] hover:border-[#ff1e1e]/50 hover:shadow-[0_0_20px_rgba(255,30,30,0.3)] transition-all cursor-default">
            <CalendarDays size={18} className="text-[#ff1e1e]" />
            {HACKATHON_CONFIG.dates.display}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff1e1e]/20 bg-[#151515] px-5 py-2.5 shadow-[0_0_15px_rgba(255,30,30,0.1)] hover:border-[#ff1e1e]/50 hover:shadow-[0_0_20px_rgba(255,30,30,0.3)] transition-all cursor-default">
            <MapPin size={18} className="text-[#ff1e1e]" />
            {HACKATHON_CONFIG.location}
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-16 relative">
          <motion.a 
            href={HACKATHON_CONFIG.registrationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="magnetic-button primary-button w-full sm:w-auto min-w-[200px] group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
              animate={{ translateX: ['-150%', '150%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Register Now 
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </span>
          </motion.a>
          <Link 
            href="/rulebook" 
            className="magnetic-button secondary-button w-full sm:w-auto min-w-[200px]"
          >
            View Rulebook
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl border-t border-[#ff1e1e]/20 pt-10 mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HACKATHON_CONFIG.stats.map((stat, idx) => (
            <motion.div 
              key={stat.label} 
              className={`border-[#ff1e1e]/10 ${idx !== 0 ? 'md:border-l md:pl-6' : ''}`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="code-font text-3xl font-bold text-white neon-text">{stat.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-[#bdbdbd]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-2xl mt-12">
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-[-60px] sm:bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#bdbdbd] code-font">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#ff1e1e]/20 to-transparent relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-[#ff1e1e]"
              animate={{ top: ['-50%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
