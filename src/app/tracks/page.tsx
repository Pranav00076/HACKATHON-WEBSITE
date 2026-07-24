import type { Metadata } from 'next';
import Tracks from '@/components/Tracks';
import WhatYouBuild from '@/components/WhatYouBuild';
import FinalCTA from '@/components/FinalCTA';
import { tracksData } from '@/data/tracks';

export const metadata: Metadata = {
  title: 'Innovation Tracks | Omnikon Hackathon 2026',
  description: 'Explore all 5 innovation tracks: Frontend, Full Stack, Cloud & DevOps, AI & ML, and Cybersecurity. Choose your lane and build.',
};

export default function TracksPage() {
  return (
    <div className="space-y-16 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="eyebrow mx-auto">Build Lanes</div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
          Innovation <span className="text-[#ff1e1e]">Tracks</span>
        </h1>
        <p className="section-subtitle mx-auto mt-4 max-w-2xl">
          Choose the track that fits your squad best. Every track is judged independently with specialized criteria and track awards.
        </p>
      </div>

      <Tracks />

      {/* Problem Statements Details */}
      <section className="section-shell max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="eyebrow">Detailed Guidelines</div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-2">
            Track <span className="text-[#ff1e1e]">Problem Statements</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {tracksData.map((track) => (
            <div key={track.id} className="premium-card p-8 border-[#ff1e1e]/20 bg-[#0a0a0a]/90">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-[#ff1e1e]">
                  <track.icon size={24} />
                </div>
                <div>
                  <span className="code-font text-xs text-[#ff1e1e] uppercase tracking-widest">{track.badge}</span>
                  <h3 className="text-2xl font-bold text-white">{track.title}</h3>
                </div>
              </div>
              <p className="text-[#bdbdbd] mb-6 leading-relaxed">
                {track.problemStatement}
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="code-font text-xs text-[#bdbdbd] uppercase tracking-widest mb-2">Recommended Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {track.tags.map((tag) => (
                    <span key={tag} className="code-font text-xs px-3 py-1 rounded-full bg-[#151515] text-white border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhatYouBuild />
      <FinalCTA />
    </div>
  );
}
