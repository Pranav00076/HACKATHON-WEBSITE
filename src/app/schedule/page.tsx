import type { Metadata } from 'next';
import Timeline from '@/components/Timeline';
import FinalCTA from '@/components/FinalCTA';
import { timelinePhases } from '@/data/timeline';

export const metadata: Metadata = {
  title: 'Schedule & Roadmap | Omnikon Hackathon 2026',
  description: 'Track the complete event schedule, registration dates, problem statement release, milestone submissions, and grand finale results.',
};

export default function SchedulePage() {
  return (
    <div className="space-y-16 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="eyebrow mx-auto">Event Calendar</div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
          Hackathon <span className="text-[#ff1e1e]">Schedule</span>
        </h1>
        <p className="section-subtitle mx-auto mt-4 max-w-2xl">
          From problem statement release to final live presentation. Mark your calendars for key submission deadlines.
        </p>
      </div>

      <Timeline />

      {/* Detailed Milestones Section */}
      <section className="section-shell max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="eyebrow">Milestone Guidelines</div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-2">
            Phase <span className="text-[#ff1e1e]">Deliverables</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timelinePhases.map((phase) => (
            <div key={phase.id} className="premium-card p-6 border-[#ff1e1e]/20 bg-[#0a0a0a]/90">
              <div className="flex items-center justify-between mb-4">
                <span className="code-font text-xs text-[#ff1e1e] uppercase tracking-widest font-bold">Phase {phase.id}</span>
                <span className="code-font text-xs text-[#bdbdbd] bg-[#151515] px-3 py-1 rounded border border-white/10">{phase.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
              <p className="text-sm text-[#bdbdbd] mb-4 leading-relaxed">{phase.desc}</p>

              {phase.details && (
                <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-[#bdbdbd]">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ff1e1e]">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
