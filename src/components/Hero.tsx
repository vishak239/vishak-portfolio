'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ArrowDown, FileText, Sparkles } from 'lucide-react';
import { profileData } from '@/data/portfolioContent';
import CinematicVideo from '@/components/CinematicVideo';

// Staggers the opening reveal (see `.cine-rise` in globals.css).
const cue = (ms: number) => ({ '--cine-delay': `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="hero" className="relative isolate w-full overflow-hidden bg-surface">
      {/* Opening Footage: full-bleed backdrop that fades up from black */}
      <CinematicVideo
        src="/videos/hero.mp4"
        poster="/images/posters/hero.jpg"
        priority
        className="absolute inset-0"
        mediaClassName="inset-x-0 top-0 h-svh lg:h-full"
        videoClassName="brightness-[0.62] contrast-[1.08] saturate-[0.8]"
        objectPosition="50% 45%"
        controlClassName="bottom-5 right-6 md:right-[max(3rem,calc((100%_-_80rem)/2_+_3rem))]"
      >
        {/* Legibility grade: vertical on stacked layouts, lateral behind the lg text column */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/75 via-surface/45 to-surface/80 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-surface/90 via-surface/50 to-surface/20" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(5, 5, 5, 0.8) 100%)' }}
        />
        {/* Navbar clearance and dissolve into Act II */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
      </CinematicVideo>

      <div className="relative z-10 min-h-svh flex flex-col justify-between pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Strip */}
        <div style={cue(300)} className="cine-rise flex items-center justify-between border-b border-surface-border pb-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse shadow-gold-glow" />
            <span className="text-gold-bright tracking-cinematic uppercase">ACT I // SCENE 01</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-cinematic-muted text-[11px] tracking-widest">
            <span>ARCHIVE // 2026</span>
            <span className="text-surface-border">|</span>
            <span>B.TECH AI &amp; DS</span>
          </div>
        </div>

        {/* Main Grid: Editorial Typography & Letterboxed Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 md:py-16">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span style={cue(700)} className="cine-rise text-xs md:text-sm font-mono tracking-cinematic uppercase text-gold-primary flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                {profileData.subheadline}
              </span>
              <h1 style={cue(850)} className="cine-rise font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-cinematic-text uppercase leading-none font-normal">
                {profileData.name}
              </h1>
              <p style={cue(1000)} className="cine-rise text-xs sm:text-sm font-mono tracking-widest uppercase text-cinematic-muted mt-2">
                {profileData.roles.join(' / ')}
              </p>
            </div>

            <div style={cue(1150)} className="cine-rise max-w-xl flex flex-col gap-4 pt-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-gold-bright italic font-normal leading-snug">
                “{profileData.headline}”
              </h2>
              <p className="text-cinematic-muted text-sm sm:text-base leading-relaxed font-sans font-light">
                {profileData.editorialStatement}
              </p>
            </div>

            {/* Action CTAs */}
            <div style={cue(1350)} className="cine-rise flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#work"
                className="px-6 py-3.5 rounded-sm bg-gold-primary text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-gold-bright transition-all shadow-gold-subtle flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#experience"
                className="px-6 py-3.5 rounded-sm bg-surface-panel border border-surface-border text-cinematic-text font-mono text-xs font-medium tracking-widest uppercase hover:border-gold-primary/50 hover:text-gold-bright transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-gold-primary" />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Real Photograph */}
          <div style={cue(1000)} className="cine-rise lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm overflow-hidden bg-surface-panel border border-surface-border shadow-cinematic group">
              {/* The Real Photograph of Vishak with priority loading */}
              <Image
                src="/images/hero.jpg"
                alt="Vishak — AI Engineer Editorial Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                className="object-cover object-[center_top] transition-transform duration-1000 ease-out group-hover:scale-105 contrast-[1.08] brightness-[0.95]"
              />
              {/* Subtle Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

              {/* Editorial Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-sm bg-surface/85 backdrop-blur-md border border-surface-border text-[10px] font-mono">
                <span className="text-gold-bright tracking-wider uppercase">CHRONICLE : VOL. 25</span>
                <span className="text-cinematic-muted tracking-widest">VISUAL ARCHIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Strip Bar */}
        <div style={cue(1600)} className="cine-rise grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-sm bg-surface-panel/60 backdrop-blur-sm border border-surface-border text-xs font-mono">
          <div className="flex flex-col">
            <span className="text-[10px] text-cinematic-dim uppercase tracking-cinematic">Discipline</span>
            <span className="text-gold-bright font-medium mt-1">AI / ML / Python Engineering</span>
          </div>
          <div className="flex flex-col sm:border-l sm:border-surface-border sm:pl-4">
            <span className="text-[10px] text-cinematic-dim uppercase tracking-cinematic">Location</span>
            <span className="text-cinematic-text font-medium mt-1">{profileData.contact.location}</span>
          </div>
          <div className="flex flex-col sm:border-l sm:border-surface-border sm:pl-4">
            <span className="text-[10px] text-cinematic-dim uppercase tracking-cinematic">Engagement</span>
            <span className="text-gold-bright font-medium mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              {profileData.contact.status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
