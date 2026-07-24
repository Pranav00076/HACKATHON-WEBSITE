'use client';

import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  splitBy?: 'words' | 'letters';
  delay?: number;
}

export default function TextReveal({
  text,
  className = '',
  as = 'div',
  splitBy = 'words',
  delay = 0
}: TextRevealProps) {
  const words = text.split(' ');
  const letters = text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: splitBy === 'letters' ? 0.03 : 0.08, delayChildren: delay * i },
    }),
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const innerContent = (
    <>
      {splitBy === 'words' ? (
        words.map((word, index) => (
          <motion.span
            variants={item}
            key={index}
            className="inline-block mr-[0.25em] whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))
      ) : (
        letters.map((letter, index) => (
          <motion.span
            variants={item}
            key={index}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))
      )}
    </>
  );

  const containerProps = {
    variants: container,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: '-50px' },
    className: `flex flex-wrap ${className}`
  };

  if (as === 'h1') return <motion.h1 {...containerProps}>{innerContent}</motion.h1>;
  if (as === 'h2') return <motion.h2 {...containerProps}>{innerContent}</motion.h2>;
  if (as === 'h3') return <motion.h3 {...containerProps}>{innerContent}</motion.h3>;
  if (as === 'h4') return <motion.h4 {...containerProps}>{innerContent}</motion.h4>;
  if (as === 'p') return <motion.p {...containerProps}>{innerContent}</motion.p>;
  if (as === 'span') return <motion.span {...containerProps}>{innerContent}</motion.span>;

  return <motion.div {...containerProps}>{innerContent}</motion.div>;
}
