'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, ArrowUpCircle, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const socials = [
  { href: 'https://omnikonhub.com', label: 'Website' },
  { icon: Mail, href: 'mailto:contact@omnikonhub.com', label: 'Email' },
  { href: 'https://github.com/Omnikon-Org', label: 'GitHub' },
  { href: 'https://discord.gg/yWtjK2Tb8T', label: 'Discord' },
  { href: 'https://www.linkedin.com/company/omnikon-org', label: 'LinkedIn' },
  { href: 'https://x.com/OmnikonOrg', label: 'X (Twitter)' },
  { href: 'https://www.instagram.com/omnikonorg', label: 'Instagram' },
];

const links = [
  { title: 'Navigation', items: [
    { name: 'Home', href: '/' }, 
    { name: 'About Ecosystem', href: '/about' }, 
    { name: 'Innovation Tracks', href: '/tracks' }, 
    { name: 'Prizes & Judging', href: '/prizes' }, 
    { name: 'Schedule & Timeline', href: '/schedule' }
  ] },
  { title: 'Resources', items: [
    { name: 'Official Rulebook', href: '/rulebook' },
    { name: 'Community & FAQ', href: '/community' }
  ] },
  { title: 'Contact', items: [
    { name: 'contact@omnikonhub.com', href: 'mailto:contact@omnikonhub.com' }, 
    { name: 'Sponsorship & Partnerships', href: '/about' }
  ] },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden pt-24 pb-10 border-t border-[#ff1e1e]/20 bg-[#050505]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none opacity-[0.15] mix-blend-screen" style={{ background: 'radial-gradient(ellipse at bottom, #ff1e1e 0%, transparent 60%)' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,30,30,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,30,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 group inline-flex mb-8">
              <span className="relative h-16 w-16 overflow-hidden rounded-2xl border border-[#ff1e1e]/30 bg-[#151515] group-hover:border-[#ff1e1e] group-hover:shadow-[0_0_20px_rgba(255,30,30,0.4)] transition-all duration-300">
                <Image src="/LogoOmnikon.jpeg" alt="Omnikon logo" fill sizes="64px" className="object-cover" />
              </span>
              <span className="leading-none">
                <span className="block text-3xl font-black uppercase tracking-widest text-white group-hover:text-[#ff1e1e] group-hover:drop-shadow-[0_0_10px_rgba(255,30,30,0.8)] transition-all duration-300">Omnikon</span>
                <span className="code-font block text-xs mt-1 uppercase tracking-[0.3em] text-[#bdbdbd]">National Hackathon</span>
              </span>
            </Link>
            <p className="text-[#bdbdbd] mb-8 max-w-sm leading-relaxed text-lg">
              The premier build arena for developers who want to push boundaries, craft premium products, and shape the future of technology.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="code-font px-3 py-1.5 rounded-lg border border-white/10 bg-[#151515] text-xs text-[#bdbdbd] transition-colors hover:text-[#ff1e1e] hover:border-[#ff1e1e]/50 hover:bg-[#ff1e1e]/10"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

          {links.map((col, idx) => (
            <motion.div 
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
            >
              <h4 className="text-white font-bold mb-6 text-xl">{col.title}</h4>
              <ul className="grid gap-5">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-[#bdbdbd] hover:text-[#ff1e1e] transition-all hover:translate-x-2 inline-block text-[15px] tracking-wide">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border-[#ff1e1e]/30 bg-[#0a0a0a]/80 backdrop-blur-xl group relative overflow-hidden shadow-[0_0_40px_rgba(255,30,30,0.05)]"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff1e1e]/10 to-transparent -translate-x-full skew-x-[-20deg]"
            animate={{ translateX: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
          />

          <div className="relative z-10 w-full lg:w-auto text-center lg:text-left flex-1">
            <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-wide flex items-center justify-center lg:justify-start gap-3">
              <MessageSquare size={28} className="text-[#ff1e1e]" />
              Stay Connected
            </h4>
            <p className="text-[#bdbdbd] text-lg mb-6 max-w-2xl">
              Join the official Omnikon Discord server to receive event updates, mentorship, and team announcements.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-[#bdbdbd]">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#ff1e1e] rounded-full" /> Event announcements</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#ff1e1e] rounded-full" /> Mentor support</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#ff1e1e] rounded-full" /> Team formation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#ff1e1e] rounded-full" /> Live Q&A</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#ff1e1e] rounded-full" /> Submission reminders</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#ff1e1e] rounded-full" /> Winner announcements</li>
            </ul>
          </div>
          
          <div className="relative z-10 flex w-full lg:w-auto justify-center lg:justify-end mt-6 lg:mt-0">
            <motion.a 
              href="https://discord.gg/yWtjK2Tb8T"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="magnetic-button primary-button !min-h-0 py-4 px-10 rounded-xl whitespace-nowrap group/btn shadow-[0_0_20px_rgba(255,30,30,0.3)] flex items-center gap-2"
            >
              Join Discord
              <motion.span className="inline-block transition-transform group-hover/btn:translate-x-1">
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        <div className="h-[2px] w-full bg-[#151515] mb-8 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#ff1e1e] to-transparent shadow-[0_0_10px_#ff1e1e]"
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="code-font text-xs text-[#bdbdbd] uppercase tracking-widest text-center md:text-left">
            © 2026 Omnikon Hackathon. Build The Impossible.
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex items-center gap-2 text-[#ff1e1e] hover:text-white transition-colors uppercase code-font text-xs tracking-widest font-bold"
          >
            Back to top
            <ArrowUpCircle size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
