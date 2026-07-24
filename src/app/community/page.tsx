import type { Metadata } from 'next';
import Mentors from '@/components/Mentors';
import FAQ from '@/components/FAQ';
import Sponsors from '@/components/Sponsors';
import DiscordBanner from '@/components/DiscordBanner';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Community, Mentors & FAQ | Omnikon Hackathon 2026',
  description: 'Join the Omnikon developer community, meet our mentors, browse sponsors, and find answers to all hackathon FAQs.',
};

export default function CommunityPage() {
  return (
    <div className="space-y-16 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="eyebrow mx-auto">Community Hub</div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
          Community & <span className="text-[#ff1e1e]">Support</span>
        </h1>
        <p className="section-subtitle mx-auto mt-4 max-w-2xl">
          Get guidance from industry veterans, connect with participants nationwide, and find answers to all common questions.
        </p>
      </div>

      <Mentors />
      <FAQ />
      <Sponsors />
      <DiscordBanner />
      <FinalCTA />
    </div>
  );
}
