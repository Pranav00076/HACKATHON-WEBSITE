'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Trophy } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';
import TextReveal from './animations/TextReveal';
import { tracksData, Track } from '@/data/tracks';

const PARTICLE_POSITIONS = [
  { left: '10%', top: '20%', duration: 8, delay: 0, xOffset: 20 },
  { left: '25%', top: '70%', duration: 10, delay: 1, xOffset: -30 },
  { left: '40%', top: '15%', duration: 7, delay: 2, xOffset: 15 },
  { left: '55%', top: '80%', duration: 9, delay: 0.5, xOffset: -25 },
  { left: '70%', top: '30%', duration: 11, delay: 1.5, xOffset: 35 },
  { left: '85%', top: '65%', duration: 6, delay: 2.5, xOffset: -20 },
  { left: '15%', top: '85%', duration: 9.5, delay: 3, xOffset: 10 },
  { left: '75%', top: '10%', duration: 8.5, delay: 1.2, xOffset: -15 },
  { left: '90%', top: '45%', duration: 10.5, delay: 0.8, xOffset: 25 },
  { left: '35%', top: '50%', duration: 7.5, delay: 2.2, xOffset: -10 },
];

const stats = [
  { value: 5, prefix: '', suffix: '', label: 'Innovation Tracks' },
  { value: 10, prefix: '₹', suffix: 'K', label: 'Prize Pool' },
  { value: 1, prefix: '', suffix: ' Month', label: 'Build Cycle' },
  { value: 100, prefix: '', suffix: '%', label: 'Online Arena' },
  { value: 0, prefix: '', suffix: ' National', label: 'Participation' },
];

function AnimatedStat({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  if (stat.label === 'Participation') {
    return (
      <div ref={ref} className="flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="font-black text-white text-2xl sm:text-3xl neon-text">
          National
        </motion.div>
        <div className="mt-2 code-font text-[10px] sm:text-xs uppercase tracking-widest text-[#bdbdbd]">{stat.label}</div>
      </div>
    );
  }
  
  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center">
      <div className="font-black text-white text-2xl sm:text-3xl neon-text flex items-center justify-center">
        {stat.prefix}
        <motion.span initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
          {stat.value}
        </motion.span>
        {stat.suffix}
      </div>
      <div className="mt-2 code-font text-[10px] sm:text-xs uppercase tracking-widest text-[#bdbdbd]">{stat.label}</div>
    </div>
  );
}

export function TrackCard({ track, index }: { track: Track; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`premium-card group relative flex flex-col h-full overflow-hidden transition-all duration-300 transform-gpu bg-[#111111] ${track.featured ? 'lg:col-span-2 min-h-[480px] !border-[#ff1e1e]/40' : 'min-h-[440px]'}`}
    >
      <motion.div 
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([xPos, yPos]) => `radial-gradient(500px circle at ${(xPos as number) * 100 + 50}% ${(yPos as number) * 100 + 50}%, rgba(255, 30, 30, 0.15), transparent 50%)`
          )
        }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
      />

      {track.featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/15 to-transparent pointer-events-none" />
      )}
      
      <div className="relative z-10 flex h-full flex-col p-8 sm:p-10 pointer-events-none">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="flex items-center gap-6">
            <div 
              className={`flex items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_10px_30px_rgba(255,30,30,0.1)] group-hover:border-[#ff1e1e]/50 group-hover:text-[#ff1e1e] group-hover:shadow-[0_20px_40px_rgba(255,30,30,0.3)] group-hover:rotate-6 transition-all duration-300 ${track.featured ? 'h-20 w-20' : 'h-16 w-16'}`}
            >
              <track.icon size={track.featured ? 36 : 32} />
            </div>
            <div className="code-font text-2xl text-[#bdbdbd]/30 font-black group-hover:text-[#ff1e1e]/40 transition-colors duration-300">
              0{index + 1}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1e1e] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1e1e]"></span>
            </span>
            <span className="code-font text-[10px] uppercase tracking-widest text-white border border-white/10 rounded-full px-3 py-1 bg-[#151515]">
              {track.badge}
            </span>
          </div>
        </div>
        
        <h3 className={`font-bold text-white group-hover:text-[#ff1e1e] transition-colors duration-300 ${track.featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{track.title}</h3>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#bdbdbd] group-hover:text-white transition-colors duration-300">
          {track.desc}
        </p>

        <div className="mt-6 flex flex-col gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-xs uppercase tracking-widest text-[#bdbdbd] code-font mb-1">Ideas to build</div>
          <ul className="flex flex-wrap gap-2">
            {track.examples.map((ex) => (
              <li key={ex} className="text-sm text-white bg-[#222] border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1e1e]/70" />
                {ex}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-4 mb-12 flex flex-wrap gap-2">
          {track.tags.map((tag) => (
            <span 
              key={tag} 
              className="code-font rounded-full border border-white/5 bg-[#151515] px-4 py-1.5 text-xs text-[#bdbdbd]/80 group-hover:border-[#ff1e1e]/30 group-hover:text-white transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#ff1e1e]/10 bg-gradient-to-t from-[#ff1e1e]/10 to-transparent flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Trophy size={16} className="text-[#ff1e1e]" />
          <span className="text-sm font-semibold text-white tracking-wide">{track.award}</span>
        </div>

      </div>
    </motion.article>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="section-shell overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />
      
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,30,30,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,30,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"
        animate={{ y: [0, -80], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff1e1e]/15 blur-[150px] rounded-[100%] pointer-events-none mix-blend-screen" />

      {PARTICLE_POSITIONS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#ff1e1e]/40 rounded-full blur-[1px]"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [0, -150, 0],
            x: [0, p.xOffset, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <ScrollReveal stagger className="section-inner relative z-10">
        <ScrollRevealItem className="mb-12 max-w-4xl">
          <div className="eyebrow">Choose your build lane</div>
          <h2 className="section-title">
            <TextReveal text="Tracks With Real" delay={0.1} as="span" className="inline-block mr-2" />
            <TextReveal text="Gravity" delay={0.2} as="span" className="text-[#ff1e1e] inline-block" />
          </h2>
          <p className="section-subtitle mt-6 max-w-3xl">
            Choose the track that matches your passion. Whether you&apos;re building AI applications, cloud infrastructure, secure systems, or polished user experiences, every track is judged independently and rewards creativity, technical excellence, and real-world impact.
          </p>
        </ScrollRevealItem>

        <ScrollRevealItem className="mb-16">
          <div className="premium-card p-6 sm:p-8 relative overflow-hidden border-[#ff1e1e]/20 bg-[#0a0a0a]/80 backdrop-blur-xl">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10 divide-x divide-white/5">
              {stats.map((stat, i) => (
                <div key={stat.label} className={i === 0 ? 'border-l-0' : ''}>
                  <AnimatedStat stat={stat} />
                </div>
              ))}
            </div>
          </div>
        </ScrollRevealItem>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-[2000px] auto-rows-fr">
          {tracksData.map((track, index) => (
            <ScrollRevealItem key={track.id} className={track.featured ? 'lg:col-span-2 h-full' : 'h-full'}>
              <TrackCard track={track} index={index} />
            </ScrollRevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
