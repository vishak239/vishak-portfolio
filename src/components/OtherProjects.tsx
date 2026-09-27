'use client';

import { archiveProjects } from '@/data/portfolioContent';
import { Film, ShoppingBag, Eye } from 'lucide-react';

const icons = [Film, ShoppingBag, Eye];

export default function OtherProjects() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-12 text-xs font-mono">
        <span className="text-gold-primary tracking-cinematic uppercase">
          07 — SELECTED ARCHIVE
        </span>
        <span className="text-cinematic-muted text-[11px] tracking-widest">
          INDEX {String(archiveProjects.length).padStart(2, '0')}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {archiveProjects.map((project, idx) => {
          const IconComponent = icons[idx] || Film;
          return (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-sm bg-surface-panel border border-surface-border hover:border-gold-primary/40 transition-all flex flex-col justify-between group shadow-cinematic"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-gold-bright tracking-cinematic uppercase">
                    {project.actLabel}
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-surface-highlight border border-surface-border flex items-center justify-center text-gold-primary group-hover:text-gold-bright transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="font-serif text-2xl text-cinematic-text mb-2 group-hover:text-gold-bright transition-colors">
                  {project.title}
                </h4>

                <p className="font-mono text-xs text-gold-bright/80 italic mb-4">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm font-sans text-cinematic-muted leading-relaxed font-light mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-border">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-sm bg-surface-highlight text-[10px] font-mono text-cinematic-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
