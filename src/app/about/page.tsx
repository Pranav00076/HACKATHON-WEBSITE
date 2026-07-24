import type { Metadata } from 'next';
import AboutTerminal from '@/components/AboutTerminal';
import WhyParticipate from '@/components/WhyParticipate';
import WhatYouBuild from '@/components/WhatYouBuild';
import PartnerWithUs from '@/components/PartnerWithUs';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'About Omnikon | Build The Impossible',
  description: 'Learn about the Omnikon hackathon identity, our 4 core pillars, what builders create, and our ecosystem partners.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="eyebrow mx-auto">Ecosystem & Mission</div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
          About <span className="text-[#ff1e1e]">Omnikon</span>
        </h1>
        <p className="section-subtitle mx-auto mt-4 max-w-2xl">
          An elite online hackathon built to bridge ambitious developers, cutting-edge tools, and high-impact software products.
        </p>
      </div>

      <AboutTerminal />
      <WhyParticipate />
      <WhatYouBuild />
      <PartnerWithUs />
      <FinalCTA />
    </div>
  );
}
