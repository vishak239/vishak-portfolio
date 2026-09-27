'use client';

import Image from 'next/image';
import { profileData } from '@/data/portfolioContent';
import CinematicVideo from '@/components/CinematicVideo';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Act Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase">
          02 — ORIGIN // ACT II
        </span>
        <span className="h-[1px] flex-1 bg-surface-border" />
      </div>

      {/* Establishing Shot — caption-free cut of the About footage */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[3/1] rounded-sm overflow-hidden bg-surface-panel border border-surface-border shadow-cinematic mb-12 group">
        <CinematicVideo
          src="/videos/about-clean.mp4"
          poster="/images/posters/about.jpg"
          objectPosition="50% 30%"
          videoClassName="contrast-[1.05] brightness-[0.85] saturate-[0.85] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 pointer-events-none">
          <span className="px-3 py-1 rounded-sm bg-surface/85 backdrop-blur-md border border-surface-border text-gold-bright tracking-cinematic uppercase text-[10px] font-mono">
            ACT II // ESTABLISHING SHOT
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Portrait & Workspace Frame */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-surface-panel border border-surface-border shadow-cinematic group">
            {/* The Real Photograph of Vishak in About section */}
            <Image
              src="/images/about.jpg"
              alt="Vishak — Curious by Nature, Building Through Code"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-[center_top] transition-transform duration-700 ease-out group-hover:scale-105 contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-sm bg-surface/80 backdrop-blur-md border border-surface-border text-[10px] font-mono text-gold-bright tracking-widest uppercase">
                Field Study • Technical Exploration
              </span>
            </div>
          </div>

          {/* Academic Snapshot Card */}
          <div className="p-5 rounded-sm bg-surface-panel border border-surface-border flex flex-col gap-2">
            <span className="text-[10px] font-mono text-gold-primary uppercase tracking-cinematic">
              Academic Foundation
            </span>
            <h4 className="font-serif text-lg text-cinematic-text">
              {profileData.education.degree} in {profileData.education.major}
            </h4>
            <p className="text-xs font-sans text-cinematic-muted">
              {profileData.education.institution}
            </p>
            <div className="flex items-center justify-between pt-3 mt-2 border-t border-surface-border text-xs font-mono">
              <span className="text-cinematic-muted">CGPA: <strong className="text-gold-bright">{profileData.education.cgpa}</strong></span>
              <span className="text-cinematic-muted">Class of <strong className="text-cinematic-text">{profileData.education.graduationYear}</strong></span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Constellation */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cinematic-text tracking-tight leading-tight">
              Curious by nature.<br />
              <span className="italic text-gold-bright font-serif">Building through code.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-cinematic-muted text-sm sm:text-base leading-relaxed font-sans font-light">
            {profileData.aboutStory.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Topology Constellation Blueprint (From Approved Stitch Reference) */}
          <div className="p-6 rounded-sm bg-surface-panel/80 border border-surface-border flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-surface-border pb-3 text-xs font-mono">
              <span className="text-[10px] text-gold-bright tracking-cinematic uppercase">
                TOPOLOGY • CORE STACK ARCHITECTURE
              </span>
              <span className="text-[10px] text-cinematic-muted">CONNECTED DISCIPLINE</span>
            </div>

            <div className="w-full flex justify-center py-4">
              <svg
                viewBox="0 0 320 220"
                className="w-full max-w-sm h-auto text-gold-primary"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connecting Lines */}
                <line x1="160" y1="110" x2="65" y2="45" stroke="#C9A227" strokeDasharray="3 3" strokeOpacity="0.4" strokeWidth="1.2" />
                <line x1="160" y1="110" x2="255" y2="45" stroke="#C9A227" strokeDasharray="3 3" strokeOpacity="0.4" strokeWidth="1.2" />
                <line x1="160" y1="110" x2="45" y2="175" stroke="#C9A227" strokeDasharray="3 3" strokeOpacity="0.4" strokeWidth="1.2" />
                <line x1="160" y1="110" x2="275" y2="175" stroke="#C9A227" strokeDasharray="3 3" strokeOpacity="0.4" strokeWidth="1.2" />
                <line x1="65" y1="45" x2="255" y2="45" stroke="#C9A227" strokeOpacity="0.2" strokeWidth="1" />
                <line x1="45" y1="175" x2="275" y2="175" stroke="#C9A227" strokeOpacity="0.2" strokeWidth="1" />

                {/* Center Node: AI Core */}
                <circle cx="160" cy="110" r="28" fill="#111111" stroke="#C9A227" strokeWidth="1.5" />
                <circle cx="160" cy="110" r="18" fill="#C9A227" fillOpacity="0.2" />
                <circle cx="160" cy="110" r="4" fill="#E6C45A" />
                <text x="160" y="113" textAnchor="middle" fill="#F5F1E8" fontFamily="var(--font-jetbrains)" fontSize="8.5" fontWeight="600" letterSpacing="0.05em">
                  AI CORE
                </text>

                {/* Node: Python */}
                <circle cx="65" cy="45" r="20" fill="#111111" stroke="#E6C45A" strokeWidth="1" />
                <circle cx="65" cy="45" r="3.5" fill="#E6C45A" />
                <text x="65" y="74" textAnchor="middle" fill="#A9A39A" fontFamily="var(--font-jetbrains)" fontSize="8">
                  PYTHON
                </text>

                {/* Node: ML & Stats */}
                <circle cx="255" cy="45" r="20" fill="#111111" stroke="#E6C45A" strokeWidth="1" />
                <circle cx="255" cy="45" r="3.5" fill="#E6C45A" />
                <text x="255" y="74" textAnchor="middle" fill="#A9A39A" fontFamily="var(--font-jetbrains)" fontSize="8">
                  ML & DATA
                </text>

                {/* Node: Computer Vision */}
                <circle cx="45" cy="175" r="20" fill="#111111" stroke="#E6C45A" strokeWidth="1" />
                <circle cx="45" cy="175" r="3.5" fill="#E6C45A" />
                <text x="45" y="204" textAnchor="middle" fill="#A9A39A" fontFamily="var(--font-jetbrains)" fontSize="8">
                  VISION
                </text>

                {/* Node: Automation & Django */}
                <circle cx="275" cy="175" r="20" fill="#111111" stroke="#E6C45A" strokeWidth="1" />
                <circle cx="275" cy="175" r="3.5" fill="#E6C45A" />
                <text x="275" y="204" textAnchor="middle" fill="#A9A39A" fontFamily="var(--font-jetbrains)" fontSize="8">
                  BACKEND
                </text>
              </svg>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-border">
              {['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'OpenCV', 'Django', 'Automation'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-sm bg-surface-highlight border border-surface-border text-gold-bright text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
