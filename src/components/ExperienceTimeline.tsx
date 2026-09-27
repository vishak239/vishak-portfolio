'use client';

import { experienceItems } from '@/data/portfolioContent';
import { Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase">
          10 — CHRONICLES
        </span>
        <span className="h-[1px] flex-1 bg-surface-border" />
      </div>

      <div className="flex flex-col gap-2 mb-12">
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cinematic-text tracking-tight">
          Engineering Residencies
        </h3>
        <p className="text-sm font-sans text-cinematic-muted font-light">
          Practical industry internships in Python development, machine learning, and deep learning.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-surface-border">
        {experienceItems.map((exp, idx) => (
          <div key={idx} className="py-8 flex flex-col gap-4 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface-panel border border-surface-border flex items-center justify-center text-gold-primary">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-cinematic-text">
                    {exp.company}
                  </h4>
                  <span className="text-xs font-mono text-gold-bright">
                    {exp.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-sm bg-surface-highlight border border-surface-border text-[10px] font-mono text-cinematic-muted uppercase tracking-wider">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Special Callout Badge for Independently Secured Nexvra Role */}
            {exp.badge && (
              <div className="p-3.5 rounded-sm bg-gold-primary/10 border border-gold-primary/30 flex items-start gap-3 max-w-2xl">
                <ShieldCheck className="w-4 h-4 text-gold-bright shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gold-bright font-bold uppercase tracking-widest">
                    {exp.badge}
                  </span>
                  <span className="text-xs font-sans text-cinematic-text mt-0.5 leading-relaxed">
                    {exp.highlight}
                  </span>
                </div>
              </div>
            )}

            <p className="text-xs sm:text-sm font-sans text-cinematic-muted leading-relaxed font-light max-w-3xl">
              {exp.description}
            </p>

            {exp.responsibilities && (
              <ul className="flex flex-col gap-2 pt-1 max-w-3xl">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs font-sans text-cinematic-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-bright/80 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
