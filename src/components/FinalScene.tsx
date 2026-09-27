'use client';

import { useState } from 'react';
import { profileData } from '@/data/portfolioContent';
import { Mail, FileText, Send, Copy, Check } from 'lucide-react';
import CinematicVideo from '@/components/CinematicVideo';

export default function FinalScene() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Act III Header */}
      <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-10 text-xs font-mono">
        <span className="text-gold-primary tracking-cinematic uppercase">
          ACT III // FINALE — EPILOGUE
        </span>
        <span className="text-cinematic-muted text-[11px] tracking-widest">
          SCENE 03
        </span>
      </div>

      {/* Atmospheric Cinematic Landscape Footage (journey.mp4) */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden bg-surface-panel border border-surface-border shadow-cinematic mb-12 group">
        <CinematicVideo
          src="/videos/journey.mp4"
          poster="/images/posters/journey.jpg"
          objectPosition="50% 45%"
          videoClassName="transition-transform duration-1000 ease-out group-hover:scale-105 contrast-[1.08] brightness-[0.9] saturate-[0.85]"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono pointer-events-none">
          <span className="px-3 py-1 rounded-sm bg-surface/85 backdrop-blur-md border border-surface-border text-gold-bright tracking-cinematic uppercase text-[10px]">
            THE HORIZON BECKONS // 2025–2027
          </span>
          <span className="hidden sm:inline text-cinematic-muted text-[10px] tracking-widest">
            35mm CINEMATOGRAPHY
          </span>
        </div>
      </div>

      {/* Narrative & Contact Action Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cinematic-text uppercase tracking-tight leading-tight">
            The next chapter<br />
            <span className="text-gold-bright italic">starts here.</span>
          </h3>
          <p className="text-cinematic-muted text-sm sm:text-base leading-relaxed font-sans font-light max-w-xl">
            Always open for engineering fellowships, research collaborations, and ambitious AI product teams. Reach out directly or connect across verified channels.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="px-6 py-3.5 rounded-sm bg-gold-primary text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-gold-bright transition-all shadow-gold-subtle flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Initialize Transmission</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-sm bg-surface-panel border border-surface-border text-cinematic-text font-mono text-xs font-medium tracking-widest uppercase hover:border-gold-primary/50 hover:text-gold-bright transition-all flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-gold-bright" />
                  <span className="text-gold-bright">Address Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cinematic-muted" />
                  <span>Copy Direct Mail</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Verified Channels Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`mailto:${profileData.contact.email}`}
            className="p-5 rounded-sm bg-surface-panel border border-surface-border hover:border-gold-primary/50 transition-all flex flex-col gap-2 group"
          >
            <div className="flex items-center justify-between">
              <Mail className="w-5 h-5 text-gold-primary group-hover:text-gold-bright transition-colors" />
              <span className="text-[10px] font-mono text-cinematic-dim">DIRECT</span>
            </div>
            <span className="font-serif text-lg text-cinematic-text group-hover:text-gold-bright transition-colors">
              Direct Mail
            </span>
            <span className="font-mono text-[11px] text-cinematic-muted truncate">
              {profileData.contact.email}
            </span>
          </a>

          <a
            href="#experience"
            className="p-5 rounded-sm bg-surface-panel border border-surface-border hover:border-gold-primary/50 transition-all flex flex-col gap-2 group"
          >
            <div className="flex items-center justify-between">
              <FileText className="w-5 h-5 text-gold-primary group-hover:text-gold-bright transition-colors" />
              <span className="text-[10px] font-mono text-cinematic-dim">ARCHIVE</span>
            </div>
            <span className="font-serif text-lg text-cinematic-text group-hover:text-gold-bright transition-colors">
              Resume
            </span>
            <span className="font-mono text-[11px] text-cinematic-muted truncate">
              Chronicles
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
