'use client';

import { housePriceProject } from '@/data/portfolioContent';
import { BarChart3, Database, Layers, TrendingUp } from 'lucide-react';

export default function HousePriceProject() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Section Act Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase">
          {housePriceProject.actLabel}
        </span>
        <span className="h-[1px] flex-1 bg-surface-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Case Study Narrative */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono tracking-cinematic uppercase text-cinematic-muted">
              PREDICTIVE REGRESSION CASE STUDY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cinematic-text uppercase tracking-tight">
              {housePriceProject.title}
            </h3>
            <p className="font-serif text-lg sm:text-xl text-gold-bright italic mt-1">
              “{housePriceProject.tagline}”
            </p>
          </div>

          <p className="text-cinematic-muted text-sm sm:text-base leading-relaxed font-sans font-light">
            {housePriceProject.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {housePriceProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-sm bg-surface-panel border border-surface-border text-xs font-mono text-cinematic-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Data Lifecycle Stepper & Architecture */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-surface-panel border border-surface-border flex flex-col gap-6 shadow-cinematic">
          <div className="flex items-center justify-between border-b border-surface-border pb-3 text-xs font-mono">
            <span className="text-gold-bright tracking-cinematic uppercase flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-gold-primary" />
              Notebook Workflow
            </span>
            <span className="text-cinematic-muted">PHASE 1</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {housePriceProject.flowSteps?.map((step) => (
              <div
                key={step.number}
                className={`p-4 rounded-sm border ${
                  step.accent
                    ? 'bg-surface-highlight border-gold-primary/60'
                    : 'bg-surface-elevated border-surface-border'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-gold-bright font-semibold">
                    PHASE {step.number}
                  </span>
                  {step.accent ? (
                    <TrendingUp className="w-3.5 h-3.5 text-gold-bright" />
                  ) : (
                    <Database className="w-3.5 h-3.5 text-cinematic-dim" />
                  )}
                </div>
                <h4 className="font-serif text-base text-cinematic-text font-normal mb-1">
                  {step.title}
                </h4>
                <p className="text-xs font-sans text-cinematic-muted leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-sm bg-surface-elevated/70 border border-surface-border flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-cinematic-muted">
              <Layers className="w-4 h-4 text-gold-primary" />
              <span>Models:</span>
            </div>
            <span className="text-gold-bright">Linear Regression • Random Forest</span>
          </div>
        </div>
      </div>
    </section>
  );
}
