'use client';

import { skillCategories } from '@/data/portfolioContent';
import { Cpu, Code, Database, Eye, Server, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  Programming: Code,
  'AI & Machine Learning': Cpu,
  'Computer Vision': Eye,
  'Data Science': Database,
  'Backend Systems': Server,
  'Tooling & Ops': Wrench,
};

export default function SkillsEcosystem() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase">
          09 — REPERTOIRE MATRIX
        </span>
        <span className="h-[1px] flex-1 bg-surface-border" />
      </div>

      <div className="flex flex-col gap-2 mb-12">
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cinematic-text tracking-tight">
          Technical Disciplines
        </h3>
        <p className="text-sm font-sans text-cinematic-muted font-light">
          Structured engineering categories focused on applied AI, computer vision, and backend architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const IconComponent = categoryIcons[cat.category] || Cpu;
          return (
            <div
              key={cat.category}
              className="p-6 rounded-sm bg-surface-panel border border-surface-border hover:border-gold-primary/40 transition-all flex flex-col justify-between group shadow-cinematic"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-gold-bright tracking-cinematic uppercase">
                    DISCIPLINE
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-surface-highlight border border-surface-border flex items-center justify-center text-gold-primary group-hover:text-gold-bright transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="font-serif text-xl text-cinematic-text mb-4">
                  {cat.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-sm bg-surface-highlight border border-surface-border text-xs font-mono text-cinematic-text hover:text-gold-bright hover:border-gold-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-surface-border text-[10px] font-mono text-cinematic-dim flex items-center justify-between">
                <span>{cat.skills.length} CORE CAPABILITIES</span>
                <span className="text-gold-bright">VERIFIED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
