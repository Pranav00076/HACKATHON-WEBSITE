import type { Metadata } from 'next';
import PrizePool from '@/components/PrizePool';
import JudgingCriteria from '@/components/JudgingCriteria';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Prizes & Judging Criteria | Omnikon Hackathon 2026',
  description: 'Explore the ₹10K prize pool, podium rewards, certificates, and the official 5-part evaluation rubric.',
};

export default function PrizesPage() {
  return (
    <div className="space-y-16 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="eyebrow mx-auto">Rewards & Evaluation</div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
          Prizes & <span className="text-[#ff1e1e]">Judging</span>
        </h1>
        <p className="section-subtitle mx-auto mt-4 max-w-2xl">
          Compete for cash rewards, official certificates, and mentor recognition judged against a transparent engineering rubric.
        </p>
      </div>

      <PrizePool />
      <JudgingCriteria />
      <FinalCTA />
    </div>
  );
}
