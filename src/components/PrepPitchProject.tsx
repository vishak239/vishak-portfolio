'use client';

import { useState } from 'react';
import { prepPitchProject } from '@/data/portfolioContent';
import { CheckCircle2, ChevronRight, Terminal, Award } from 'lucide-react';
import CinematicVideo from '@/components/CinematicVideo';

export default function PrepPitchProject() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-12 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
          <span className="text-gold-bright tracking-cinematic uppercase">
            {prepPitchProject.actLabel}
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-sm bg-gold-primary/10 border border-gold-primary/30 text-gold-bright tracking-widest text-[10px] uppercase font-bold">
          FLAGSHIP SYSTEM
        </span>
      </div>

      {/* Build Footage — workspace cut; background screen held in soft focus */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden bg-surface-panel border border-surface-border shadow-cinematic mb-12 group">
        <CinematicVideo
          src="/videos/prepitch-clean.mp4"
          poster="/images/posters/prepitch.jpg"
          objectPosition="50% 40%"
          videoClassName="contrast-[1.06] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 pointer-events-none">
          <span className="px-3 py-1 rounded-sm bg-surface/85 backdrop-blur-md border border-surface-border text-gold-bright tracking-cinematic uppercase text-[10px] font-mono">
            BEHIND THE BUILD // WORKSPACE
          </span>
        </div>
      </div>

      {/* Main Flagship Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono tracking-cinematic uppercase text-cinematic-muted">
              STUDENT MOCK INTERVIEW PLATFORM
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cinematic-text uppercase tracking-tight">
              {prepPitchProject.title}
            </h3>
            <p className="font-serif text-xl sm:text-2xl text-gold-bright italic mt-1">
              “{prepPitchProject.tagline}”
            </p>
          </div>

          <p className="text-cinematic-muted text-sm sm:text-base leading-relaxed font-sans font-light">
            {prepPitchProject.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {prepPitchProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-sm bg-surface-panel border border-surface-border text-xs font-mono text-cinematic-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Vishak's Engineering Contributions Ledger */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-surface-panel border border-surface-border flex flex-col gap-5">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase flex items-center gap-2">
              <Award className="w-4 h-4" />
              Public Prototype
            </span>
            <span className="text-[10px] font-mono text-cinematic-muted">REACT · TYPESCRIPT · ON GITHUB</span>
          </div>

          <ul className="flex flex-col gap-3.5">
            {prepPitchProject.responsibilities?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-cinematic-muted">
                <CheckCircle2 className="w-4 h-4 text-gold-bright shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {prepPitchProject.inDevelopment && (
            <div className="flex flex-col gap-3 pt-5 border-t border-surface-border">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase">
                  In Development
                </span>
                <span className="text-[10px] font-mono text-cinematic-muted">DJANGO · PYTHON · NOT YET PUBLIC</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {prepPitchProject.inDevelopment.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-sm bg-surface-highlight border border-dashed border-surface-border text-xs font-mono text-cinematic-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cinematic Animated Process Flow (8-Step Sequence) */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-surface-border pb-3 text-xs font-mono">
          <span className="text-gold-bright tracking-cinematic uppercase flex items-center gap-2">
            <Terminal className="w-4 h-4 text-gold-primary" />
            How the Prototype Works (8 Steps)
          </span>
          <span className="text-cinematic-muted hidden sm:inline">DESKTOP & MOBILE RESPONSIVE</span>
        </div>

        {/* Step Flow: Desktop Horizontal / Mobile Vertical */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {prepPitchProject.flowSteps?.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-5 rounded-sm transition-all duration-300 flex flex-col justify-between min-h-[170px] border ${
                  isSelected
                    ? 'bg-surface-highlight border-gold-primary shadow-gold-subtle'
                    : 'bg-surface-panel/70 border-surface-border hover:border-gold-primary/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded-sm ${
                      step.accent || isSelected
                        ? 'bg-gold-primary text-black font-bold'
                        : 'bg-surface-border text-cinematic-muted'
                    }`}
                  >
                    STEP {step.number}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-gold-bright translate-x-1' : 'text-cinematic-dim'
                    }`}
                  />
                </div>

                <div>
                  <h4 className="font-serif text-lg text-cinematic-text font-normal mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs font-sans text-cinematic-muted leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
