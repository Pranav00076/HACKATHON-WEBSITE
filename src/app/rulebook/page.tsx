"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { rulebookData } from '@/data/rulebook';
import { timelinePhases } from '@/data/timeline';
import { prizesData } from '@/data/prizes';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function RulebookPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-[#ff1e1e] selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:100%_4px]" />
      </div>

      <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-[#ff1e1e]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#ff1e1e] hover:text-white transition-colors group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm tracking-widest uppercase">Return to Arena</span>
          </Link>
          <div className="font-mono text-xs text-[#ff1e1e]/50 uppercase tracking-widest hidden sm:block">
            OMNIKON_HACKATHON_2026 // OFFICIAL_RULEBOOK
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 flex flex-col lg:flex-row gap-12 items-start">
        <aside className="w-full lg:w-64 lg:sticky lg:top-24 shrink-0">
          <div className="border border-[#ff1e1e]/20 bg-black/50 backdrop-blur-sm p-6 rounded-sm shadow-[0_0_15px_rgba(255,0,0,0.05)]">
            <h3 className="text-white font-mono uppercase tracking-widest mb-6 pb-4 border-b border-[#ff1e1e]/20 text-sm">
              Index_Directory
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              {rulebookData.map((section) => (
                <li key={section.id}>
                  <button 
                    onClick={() => scrollToSection(section.id)}
                    className="text-left w-full text-gray-400 hover:text-[#ff1e1e] transition-colors tracking-widest uppercase flex gap-2"
                  >
                    <span className="text-[#ff1e1e]/60">{section.id}.</span>
                    <span className="truncate">{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border border-[#ff1e1e]/40 bg-red-950/10 p-6 rounded-sm shadow-[0_0_20px_rgba(255,0,0,0.1)]">
            <h3 className="text-[#ff1e1e] font-mono uppercase tracking-widest mb-4 flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-[#ff1e1e] animate-pulse" />
              Key_Dates
            </h3>
            <div className="space-y-4">
              {timelinePhases.map((phase) => (
                <div key={phase.id} className="border-l border-[#ff1e1e]/30 pl-3">
                  <div className="text-white font-mono text-xs font-bold tracking-widest">{phase.date}</div>
                  <div className="text-gray-400 text-xs mt-1">{phase.title}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 w-full max-w-4xl">
          <header className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-4 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"
            >
              Official <span className="text-[#ff1e1e]">Rulebook</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-mono text-sm tracking-widest border-l-2 border-[#ff1e1e] pl-4"
            >
              VERSION 1.0.0 // LAST UPDATED: CURRENT
            </motion.p>
          </header>

          <div className="space-y-20">
            {rulebookData.map((section) => (
              <motion.section 
                key={section.id}
                id={`section-${section.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-widest mb-8 pb-4 border-b border-white/10 flex items-center gap-4">
                  <span className="text-[#ff1e1e] bg-red-950/30 px-3 py-1 rounded-sm border border-[#ff1e1e]/20">{section.id}</span>
                  {section.title}
                </h2>

                {section.items.length > 0 && (
                  <div className="space-y-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-[#ff1e1e] mt-1 shrink-0">▹</span>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.table && (
                  <div className="mt-8 overflow-x-auto border border-white/10 rounded-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 font-mono text-white tracking-widest uppercase">
                        <tr>
                          {section.table.headers.map((header, i) => (
                            <th key={i} className="px-6 py-4 border-b border-white/10">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            {row.map((cell, j) => (
                              <td key={j} className={`px-6 py-4 ${j === 0 ? 'text-[#ff1e1e] font-bold' : 'text-gray-300'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {section.table.note && (
                      <div className="p-4 bg-red-950/20 text-[#ff1e1e] text-xs font-mono tracking-widest border-t border-[#ff1e1e]/20">
                        {section.table.note}
                      </div>
                    )}
                  </div>
                )}

                {section.id === "06" && (
                  <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {prizesData.map((prize) => (
                      <div key={prize.title} className="premium-card p-5">
                        <div className="text-sm uppercase tracking-[0.16em] text-[#bdbdbd]">{prize.place}</div>
                        <div className="mt-3 text-2xl font-bold text-white">{prize.title}</div>
                        <div className="code-font mt-2 text-2xl sm:text-3xl font-black" style={{ color: prize.accent }}>{prize.amountStr}</div>
                      </div>
                    ))}
                  </div>
                )}

              </motion.section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
