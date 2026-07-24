'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

interface SectionTitleRevealProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionTitleReveal({ 
  children, 
  className = '', 
  as = 'h2' 
}: SectionTitleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const textShadow = useTransform(
    [mouseXSpring, mouseYSpring],
    ([xPos, yPos]) => {
      const xOffset = (xPos as number) * -10;
      const yOffset = (yPos as number) * -10;
      return `${xOffset}px ${yOffset}px 20px rgba(255, 30, 30, 0.2)`;
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Content = (
    <motion.span
      style={{ rotateX, rotateY, textShadow, display: 'inline-block' }}
      className={`section-title relative z-10 transition-colors duration-500 group-hover:text-white ${className}`}
    >
      {children}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ff1e1e]/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
    </motion.span>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
      style={{ perspective: 1000 }}
      className="inline-block relative group"
    >
      {as === 'h1' && <h1>{Content}</h1>}
      {as === 'h2' && <h2>{Content}</h2>}
      {as === 'h3' && <h3>{Content}</h3>}
    </motion.div>
  );
}
