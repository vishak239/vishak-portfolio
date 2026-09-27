'use client';

import { ArrowUp } from 'lucide-react';
import { profileData } from '@/data/portfolioContent';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs text-gold-bright tracking-cinematic uppercase font-semibold">
            {profileData.name} — {profileData.roles.join(' • ')}
          </span>
          <span className="text-[11px] font-mono text-cinematic-muted">
            Designed for cinematic storytelling. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-sm bg-surface-panel border border-surface-border hover:border-gold-primary text-cinematic-muted hover:text-gold-bright transition-all flex items-center gap-2 text-xs font-mono"
          aria-label="Scroll to top of page"
        >
          <span>Return to Opening</span>
          <ArrowUp className="w-4 h-4 text-gold-primary" />
        </button>
      </div>
    </footer>
  );
}
