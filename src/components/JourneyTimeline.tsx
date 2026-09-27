'use client';

import { journeyStages } from '@/data/portfolioContent';

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase">
          08 — INTELLECTUAL EVOLUTION
        </span>
        <span className="h-[1px] flex-1 bg-surface-border" />
      </div>

      <div className="flex flex-col gap-2 mb-12">
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cinematic-text tracking-tight">
          The AI Trajectory
        </h3>
        <p className="text-sm font-sans text-cinematic-muted font-light">
          An editorial chronicle of technical learning and engineering progression.
        </p>
      </div>

      {/* Cinematic Stepper Timeline */}
      <div className="relative flex flex-col gap-8 pl-6 sm:pl-8 border-l border-gold-primary/25 ml-2 sm:ml-4">
        {journeyStages.map((stage) => (
          <div key={stage.stageNumber} className="relative flex flex-col gap-1.5 group">
            {/* Timeline Node Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface-elevated border-2 border-gold-primary flex items-center justify-center group-hover:scale-125 transition-transform">
              <span className={`w-1.5 h-1.5 rounded-full ${stage.isHorizon ? 'bg-gold-bright animate-ping' : 'bg-gold-primary'}`} />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-gold-bright tracking-cinematic uppercase font-semibold">
                {stage.stageNumber}
              </span>
              {stage.tagline && (
                <>
                  <span className="text-cinematic-dim text-[10px]">•</span>
                  <span className="text-[10px] font-mono text-cinematic-muted uppercase tracking-widest hidden sm:inline">
                    {stage.tagline}
                  </span>
                </>
              )}
            </div>

            <h4 className="font-serif text-xl sm:text-2xl text-cinematic-text group-hover:text-gold-bright transition-colors">
              {stage.title}
            </h4>

            <p className="text-xs sm:text-sm font-sans text-cinematic-muted leading-relaxed font-light max-w-3xl">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
