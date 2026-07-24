'use client';

import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import TerminalTypewriter from './TerminalTypewriter';

interface SpecialWordProps {
  word: string;
  className?: string;
}

export default function SpecialWord({ word, className = '' }: SpecialWordProps) {
  const normalizedWord = word.toUpperCase();

  switch (normalizedWord) {
    case 'BUILD':
      return <BuildEffect word={word} className={className} />;
    case 'AI':
    case 'AI & MACHINE LEARNING':
      return <GlitchText text={word} className={className} />;
    case 'SECURITY':
    case 'CYBERSECURITY':
      return <SecurityEffect word={word} className={className} />;
    case 'CLOUD':
    case 'CLOUD & DEVOPS':
      return <CloudEffect word={word} className={className} />;
    case 'FRONTEND':
    case 'FRONTEND & UI':
      return <FrontendEffect word={word} className={className} />;
    case 'OPEN SOURCE':
    case 'OPEN SOURCE EXPERIENCE':
      return <TerminalTypewriter text={word} className={className} />;
    case 'INNOVATION':
      return <InnovationEffect word={word} className={className} />;
    case 'COMMUNITY':
      return <CommunityEffect word={word} className={className} />;
    case 'DISCORD':
      return <DiscordEffect word={word} className={className} />;
    case 'REGISTER':
      return <RegisterEffect word={word} className={className} />;
    case 'PARTICIPATE':
      return <ParticipateEffect word={word} className={className} />;
    case 'GRAVITY':
      return <GravityEffect word={word} className={className} />;
    case 'CHAMPIONS':
      return <ChampionsEffect word={word} className={className} />;
    case 'US':
      return <UsEffect word={word} className={className} />;
    case 'JOIN OUR DISCORD':
      return <JoinOurDiscordEffect word={word} className={className} />;
    default:
      return <span className={className}>{word}</span>;
  }
}

function BuildEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`inline-flex ${className}`}>
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -20, x: (i % 2 === 0 ? -20 : 20), rotate: -15 }}
          whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.05 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function SecurityEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`relative inline-block overflow-hidden group/sec ${className}`}>
      {word}
      <motion.span 
        className="absolute top-0 bottom-0 left-0 w-1 bg-[#ff1e1e] shadow-[0_0_10px_#ff1e1e]"
        initial={{ x: "-100%" }}
        whileInView={{ x: "1000%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
      />
    </span>
  );
}

function CloudEffect({ word, className }: { word: string; className: string }) {
  return (
    <motion.span 
      className={`inline-block ${className}`}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {word}
    </motion.span>
  );
}

function FrontendEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="opacity-30">{word}</span>
      <motion.span 
        className="absolute top-0 left-0 text-[#ff1e1e] overflow-hidden whitespace-nowrap"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        {word}
      </motion.span>
    </span>
  );
}

function InnovationEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`inline-flex ${className}`}>
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          animate={{ color: ["#ffffff", "#ff1e1e", "#ffffff"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: i * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function CommunityEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span 
        className="absolute inset-0 bg-[#ff1e1e]/20 blur-[10px]"
        animate={{ opacity: [0, 1, 0], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <span className="relative z-10 tracking-widest">{word}</span>
    </span>
  );
}

function DiscordEffect({ word, className }: { word: string; className: string }) {
  return (
    <motion.span 
      className={`inline-block ${className}`}
      animate={{ textShadow: ["0 0 5px rgba(255,30,30,0.2)", "0 0 20px rgba(255,30,30,0.8)", "0 0 5px rgba(255,30,30,0.2)"] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {word}
    </motion.span>
  );
}

function RegisterEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <span className="relative z-10">{word}</span>
      <motion.span 
        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
      />
    </span>
  );
}

function ParticipateEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white">{word}</span>
      <motion.span 
        className="absolute inset-y-0 left-0 z-20 w-[2px] bg-[#ff1e1e] shadow-[0_0_10px_3px_rgba(255,30,30,0.8)]"
        animate={{ x: ["-10px", "150%"] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
      />
      <span className="absolute inset-0 z-0 text-[#ff1e1e]/20">{word}</span>
    </span>
  );
}

function GravityEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span 
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="absolute w-10 h-10 border border-[#ff1e1e] rounded-full scale-0 animate-ping opacity-20" />
      </motion.span>
      <motion.span 
        className="relative z-10 inline-block"
        initial={{ scaleY: 1, scaleX: 1, y: 0 }}
        whileInView={{ scaleY: [1, 0.5, 1.2, 1], scaleX: [1, 1.5, 0.9, 1], y: [0, 10, -5, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
      >
        {word}
      </motion.span>
    </span>
  );
}

function ChampionsEffect({ word, className }: { word: string; className: string }) {
  return (
    <span className={`relative inline-block overflow-hidden text-transparent bg-clip-text bg-gradient-to-b from-white to-[#bdbdbd] ${className}`}>
      {word}
      <motion.span 
        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-70 mix-blend-overlay -skew-x-12"
        animate={{ x: ["-150%", "200%"] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 10, ease: "linear" }}
      />
    </span>
  );
}

function UsEffect({ word, className }: { word: string; className: string }) {
  return (
    <motion.span 
      className={`inline-block ${className}`}
      animate={{ textShadow: ["0px 0px 5px rgba(255,30,30,0.5)", "0px 0px 20px rgba(255,30,30,1)", "0px 0px 5px rgba(255,30,30,0.5)"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {word}
    </motion.span>
  );
}

function JoinOurDiscordEffect({ word, className }: { word: string; className: string }) {
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    >
      {word}
      <motion.span 
        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#ff1e1e]"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
      />
    </motion.span>
  );
}
