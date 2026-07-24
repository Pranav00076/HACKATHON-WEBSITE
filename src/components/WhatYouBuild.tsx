'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const TARGET_DATE = new Date('2026-08-14T18:30:00Z').getTime();

const DOT_POSITIONS = [
  { left: '10%', top: '20%', duration: 3, delay: 0.1 },
  { left: '25%', top: '75%', duration: 5, delay: 1.2 },
  { left: '40%', top: '15%', duration: 4, delay: 0.5 },
  { left: '60%', top: '80%', duration: 6, delay: 1.8 },
  { left: '75%', top: '30%', duration: 3.5, delay: 2.1 },
  { left: '85%', top: '70%', duration: 5.5, delay: 0.8 },
  { left: '20%', top: '45%', duration: 4.5, delay: 2.5 },
  { left: '90%', top: '15%', duration: 6.5, delay: 1.0 },
];

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center premium-card bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#ff1e1e]/20 rounded-2xl p-4 sm:p-6 w-20 sm:w-28 relative group overflow-hidden"
    >
      <div className="absolute inset-0 shadow-[0_0_20px_rgba(255,30,30,0)] group-hover:shadow-[0_0_30px_rgba(255,30,30,0.15)] transition-shadow duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff1e1e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative h-12 sm:h-16 w-full flex justify-center items-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute font-black text-3xl sm:text-5xl text-white neon-text"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="code-font text-[10px] sm:text-xs text-[#bdbdbd] uppercase tracking-widest mt-2 group-hover:text-white transition-colors z-10">
        {label}
      </span>
    </motion.div>
  );
}

function ProblemStatementsList() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="text-center mb-12">
        <div className="eyebrow">The Showcase</div>
        <h2 className="section-title">
          What You <span className="text-[#ff1e1e]">Build</span>
        </h2>
        <p className="section-subtitle mt-4">
          The problem statements are officially released. Choose your challenge and start building.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="premium-card p-8 bg-[#111] hover:border-[#ff1e1e]/40 transition-colors">
            <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg mb-6 flex items-center justify-center border border-white/5 text-[#ff1e1e]">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Problem Statement {i}</h3>
            <p className="text-[#bdbdbd] text-sm leading-relaxed mb-6">
              Detailed description of the challenge, technical requirements, and evaluation criteria will be displayed here.
            </p>
            <a href="#" className="inline-flex items-center text-xs uppercase tracking-widest text-[#ff1e1e] hover:text-white transition-colors">
              Read More <ArrowRight size={14} className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function WhatYouBuild() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [isReleased, setIsReleased] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  
  const background = useTransform(
    [mouseXSpring, mouseYSpring],
    ([xPos, yPos]) => `radial-gradient(800px circle at ${(xPos as number) * 100}% ${(yPos as number) * 100}%, rgba(255, 30, 30, 0.15), transparent 60%)`
  );

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        setIsReleased(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  return (
    <section id="problem-statements" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />
      
      <div className="absolute inset-0 pointer-events-none">
        {DOT_POSITIONS.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/40 rounded-full"
            style={{ left: dot.left, top: dot.top }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay }}
          />
        ))}
      </div>

      <div className="section-inner min-h-[600px] flex items-center justify-center relative z-10" ref={containerRef} onMouseMove={handleMouseMove}>
        <AnimatePresence mode="wait">
          {isReleased ? (
            <ProblemStatementsList key="released" />
          ) : (
            <motion.div 
              key="countdown"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative"
            >
              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-50"
                style={{ background }}
              />

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff1e1e]/30 bg-[#ff1e1e]/5 text-[#ff1e1e] text-xs uppercase tracking-widest font-semibold mb-8 shadow-[0_0_15px_rgba(255,30,30,0.2)]"
              >
                <Rocket size={14} className="text-[#ff1e1e]" />
                <span>Problem Statements Release &bull; 15 Aug 2026</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none mb-6"
              >
                Problem Statements<br/>
                <span className="text-[#ff1e1e]">Coming Soon</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[#bdbdbd] max-w-2xl mx-auto leading-relaxed text-base sm:text-lg mb-12"
              >
                The official hackathon problem statements will be revealed on <strong className="text-white">15 August 2026</strong>.
                <br/><br/>
                Choose your challenge, build an innovative solution over the following month, and compete with teams from across the country. 
                Until then, prepare your team, sharpen your skills, and get ready to build something extraordinary.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 relative z-10"
              >
                <CountdownUnit value={timeLeft.days} label="Days" />
                <span className="text-2xl text-white/20 font-bold hidden sm:block">:</span>
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <span className="text-2xl text-white/20 font-bold hidden sm:block">:</span>
                <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                <span className="text-2xl text-white/20 font-bold hidden sm:block">:</span>
                <CountdownUnit value={timeLeft.seconds} label="Seconds" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
              >
                <a href="https://unstop.com/p/omnikon-national-hackathon-2026-omnikon-1715716" target="_blank" rel="noopener noreferrer" className="magnetic-button primary-button w-full sm:w-auto px-8 py-3 rounded-lg flex items-center justify-center gap-2 group">
                  Register Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
