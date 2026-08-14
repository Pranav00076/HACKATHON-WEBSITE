'use client';

import React, { useState } from 'react';
import { FileText, ExternalLink, Loader2 } from 'lucide-react';
import { extractFileId } from '@driveloader/react';

export interface DriveDocumentProps {
  src: string;
  height?: string | number;
  width?: string | number;
  className?: string;
}

export function DriveDocument({ src, height = "600px", width = "100%", className = "" }: DriveDocumentProps) {
  const [loading, setLoading] = useState(true);
  const fileId = extractFileId(src) || "1ABXX8rxts63tgmOXTjz-_Ilo8xqCMWyf";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className={`relative overflow-hidden w-full rounded-xl bg-[#050505] ${className}`} style={{ width, height }}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] text-white z-10">
          <Loader2 className="w-8 h-8 animate-spin text-[#ff1e1e] mb-3" />
          <p className="font-mono text-xs text-[#bdbdbd] tracking-widest uppercase">Loading Problem Statement PDF...</p>
        </div>
      )}
      <iframe
        src={previewUrl}
        width="100%"
        height="100%"
        className="border-0 w-full h-full"
        allow="autoplay"
        onLoad={() => setLoading(false)}
        title="Google Drive Document Viewer"
      />
    </div>
  );
}

export function DocumentReader({ docUrl }: { docUrl?: string }) {
  const url = docUrl || "https://drive.google.com/file/d/1ABXX8rxts63tgmOXTjz-_Ilo8xqCMWyf/view?usp=sharing";

  return (
    <div className="w-full flex flex-col rounded-2xl border border-[#ff1e1e]/30 bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(255,30,30,0.15)]">
      {/* Document Reader Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#111111] px-4 sm:px-6 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff1e1e]/10 text-[#ff1e1e] border border-[#ff1e1e]/20">
            <FileText size={18} />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
              Omnikon 2026 Official Problem Statements.pdf
            </h4>
            <div className="flex items-center gap-2 text-[11px] code-font text-[#bdbdbd]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1e1e] animate-pulse" />
              <span>Official Document &bull; Google Drive</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-white bg-[#1a1a1a] hover:bg-[#ff1e1e]/20 hover:text-[#ff1e1e] border border-white/10 hover:border-[#ff1e1e]/40 rounded-lg transition-colors"
          >
            <ExternalLink size={14} />
            <span>Open in Drive</span>
          </a>
        </div>
      </div>

      {/* PDF Container */}
      <div className="w-full bg-[#050505] min-h-[600px] relative">
        <DriveDocument
          src={url}
          height="600px"
          width="100%"
        />
      </div>
    </div>
  );
}

export default DocumentReader;
