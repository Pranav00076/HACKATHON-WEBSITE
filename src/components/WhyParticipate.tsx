'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Trophy, Award, Users, Code, Rocket, Target } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const PARTICLE_POSITIONS = [
  { left: '12%', top: '25%', duration: 6, delay: 0.1, xOffset: 15 },
  { left: '28%', top: '65%', duration: 8, delay: 1.2, xOffset: -20 },
  { left: '45%', top: '20%', duration: 7, delay: 0.5, xOffset: 25 },
  { left: '62%', top: '75%', duration: 9, delay: 1.8, xOffset: -15 },
  { left: '78%', top: '35%', duration: 6.5, delay: 2.1, xOffset: 30 },
  { left: '88%', top: '80%', duration: 8.5, delay: 0.8, xOffset: -10 },
  { left: '20%', top: '85%', duration: 7.5, delay: 2.5, xOffset: 18 },
  { left: '82%', top: '15%', duration: 9.5, delay: 1.0, xOffset: -22 },
];

const reasons = [
  { 
    icon: Trophy, 
    title: 'National Recognition', 
    desc: 'Showcase your project to a nationwide audience and earn recognition from the Omnikon community.',
    featured: true,
  },
  { 
    icon: Award, 
    title: 'Verified Certificates', 
    desc: 'Receive participation certificates, winner certificates, and recognition for your achievements.',
  },
  { 
    icon: Users, 
    title: 'Build Your Network', 
    desc: 'Meet developers, designers, mentors, sponsors, and students from colleges across India.',
  },
  { 
    icon: Code, 
    title: 'Open Source Experience', 
    desc: 'Publish your work on GitHub, collaborate with contributors, and strengthen your open-source profile.',
  },
  { 
    icon: Rocket, 
    title: 'Build Real Products', 
    desc: 'Solve meaningful problems and create production-ready projects that strengthen your portfolio.',
  },
  { 
    icon: Target, 
    title: 'Mentor Sessions', 
    desc: 'Receive guidance, technical feedback, and project reviews from experienced mentors throughout the hackathon.',
  },
];

const stats = [
  { icon: '🏫', value: 50, suffix: '+', label: 'Colleges' },
  { icon: '👨‍💻', value: 500, suffix: '+', label: 'Builders' },
  { icon: '🚀', value: 5, suffix: '', label: 'Tracks' },
  { icon: '🏆', value: 10, prefix: '₹', suffix: 'K', label: 'Prize Pool' },
  { icon: '🌐', value: 100, suffix: '%', label: 'Online' },
];

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <span ref={ref} className="font-black text-white text-3xl sm:text-4xl neon-text flex items-center">
      {prefix}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {value}
      </motion.span>
      {suffix}
    </span>
  );
}

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={`relative group overflow-hidden transition-all duration-300 transform-gpu ${
        reason.featured 
          ? 'premium-card lg:col-span-2 p-10 border-[#ff1e1e]/20 bg-gradient-to-br from-[#151515] to-[#0a0a0a]' 
          : 'premium-card p-8 bg-[#111111]'
      }`}
    >
      <motion.div 
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([xPos, yPos]) => `radial-gradient(600px circle at ${(xPos as number) * 100 + 50}% ${(yPos as number) * 100 + 50}%, rgba(255, 30, 30, 0.08), transparent 40%)`
          )
        }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
      />

      {reason.featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/5 to-transparent pointer-events-none" />
      )}

      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[#ff1e1e]/40 transition-colors duration-300 pointer-events-none" />
      
      <div className="absolute inset-0 shadow-[0_0_0_transparent] group-hover:shadow-[0_20px_40px_rgba(255,30,30,0.15)] transition-shadow duration-300 pointer-events-none rounded-2xl" />

      <div className="relative z-10 h-full flex flex-col pointer-events-none">
        <div className={`mb-6 inline-flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-[#ff1e1e]/20 text-[#ff1e1e] transition-all duration-300 group-hover:bg-[#ff1e1e]/10 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,30,30,0.3)] ${reason.featured ? 'h-16 w-16' : 'h-14 w-14'}`}>
          <reason.icon size={reason.featured ? 32 : 28} />
        </div>
        
        <h3 className={`font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#ff1e1e] ${reason.featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          {reason.title}
        </h3>
        
        <p className="text-[#bdbdbd] leading-relaxed transition-colors duration-300 group-hover:text-white">
          {reason.desc}
        </p>
      </div>
    </motion.article>
  );
}

export default function WhyParticipate() {
  return (
    <section id="why-participate" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />
      
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,30,30,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,30,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"
        animate={{ y: [0, -80] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff1e1e]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {PARTICLE_POSITIONS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#ff1e1e]/40 rounded-full blur-[1px]"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [0, -100, 0],
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

      <ScrollReveal stagger className="section-inner relative z-10 max-w-7xl mx-auto">
        <ScrollRevealItem className="max-w-3xl mb-16">
          <div className="eyebrow">The Experience</div>
          <h2 className="section-title relative">
            Why <span className="text-[#ff1e1e]">Participate</span>
          </h2>
          <p className="section-subtitle mt-6">
            Build beyond the weekend. Join a month-long innovation journey where you&apos;ll collaborate with talented builders, receive mentor guidance, solve real-world challenges, and showcase your work on a national stage.
          </p>
        </ScrollRevealItem>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {reasons.map((reason) => (
            <ScrollRevealItem key={reason.title} className={reason.featured ? 'lg:col-span-2 h-full' : 'h-full'}>
              <div className="h-full">
                <ReasonCard reason={reason} />
              </div>
            </ScrollRevealItem>
          ))}
        </div>

        <ScrollRevealItem className="mt-20">
          <div className="premium-card p-8 sm:p-12 relative overflow-hidden border-[#ff1e1e]/20 bg-[#0a0a0a]/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff1e1e]/5 to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-4 relative z-10 divide-x divide-white/5">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`flex flex-col items-center justify-center text-center px-4 ${i === 0 ? 'border-l-0' : ''}`}>
                  <div className="text-2xl mb-2 opacity-80">{stat.icon}</div>
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  <div className="mt-2 code-font text-xs sm:text-sm uppercase tracking-widest text-[#bdbdbd]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollRevealItem>
      </ScrollReveal>
    </section>
  );
}
