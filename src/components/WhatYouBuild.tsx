'use client';

import { Rocket, FileText, Download } from 'lucide-react';
import DocumentReader from './DocumentReader';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

export default function WhatYouBuild() {
  const docUrl = "https://drive.google.com/file/d/1ABXX8rxts63tgmOXTjz-_Ilo8xqCMWyf/view?usp=sharing";

  return (
    <section id="problem-statements" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />
      
      <ScrollReveal stagger className="section-inner relative z-10 max-w-6xl mx-auto">
        <ScrollRevealItem className="text-center mb-12 sm:mb-16">
          <div className="eyebrow mx-auto !border-[#ff1e1e]/40 !bg-[#ff1e1e]/10 text-white font-bold inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1e1e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff1e1e]"></span>
            </span>
            <Rocket size={14} className="text-[#ff1e1e]" />
            <span>Problem Statements Live</span>
          </div>

          <h2 className="section-title mt-2">
            Official <span className="text-[#ff1e1e]">Problem Statements</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 max-w-2xl">
            The official hackathon problem statements document has been released. Read through the problem statements, select your track, and build your solution.
          </p>
        </ScrollRevealItem>

        <ScrollRevealItem className="mb-12">
          {/* Embedded DriveLoader PDF Document Reader */}
          <DocumentReader docUrl={docUrl} />
        </ScrollRevealItem>

        {/* Action Callout Bar */}
        <ScrollRevealItem>
          <div className="premium-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-[#ff1e1e]/30 bg-[#0a0a0a]">
            <div className="flex items-center gap-4 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 text-[#ff1e1e]">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Need an offline copy?</h4>
                <p className="text-sm text-[#bdbdbd]">You can view or download the full problem statements PDF directly on Google Drive.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-button primary-button w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3"
              >
                <Download size={16} />
                <span>Open in Google Drive</span>
              </a>
            </div>
          </div>
        </ScrollRevealItem>

      </ScrollReveal>
    </section>
  );
}
