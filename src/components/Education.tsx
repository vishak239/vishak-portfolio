'use client';

import { profileData } from '@/data/portfolioContent';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const edu = profileData.education;

  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase">
          11 — ACADEMIC FOUNDATION
        </span>
        <span className="h-[1px] flex-1 bg-surface-border" />
      </div>

      <div className="flex flex-col gap-2 mb-12">
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cinematic-text tracking-tight">
          Academic Credentials
        </h3>
        <p className="text-sm font-sans text-cinematic-muted font-light">
          Formal engineering degree in Artificial Intelligence and Data Science.
        </p>
      </div>

      <div className="p-8 sm:p-10 rounded-sm bg-surface-panel border border-surface-border shadow-cinematic flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center justify-between border-b border-surface-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-surface-highlight border border-surface-border flex items-center justify-center text-gold-primary">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-gold-bright uppercase tracking-cinematic">
                UNDERGRADUATE PROGRAM
              </span>
              <h4 className="font-serif text-2xl text-cinematic-text">
                {edu.degree}
              </h4>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-sm bg-gold-primary/10 border border-gold-primary/30 text-gold-bright font-mono text-xs font-semibold">
            B.TECH AI & DS
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="font-serif text-xl text-gold-bright">
            {edu.major}
          </h5>
          <p className="text-sm font-sans text-cinematic-muted">
            {edu.institution}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-surface-border text-xs font-mono">
          <div className="flex items-center gap-2 text-cinematic-muted">
            <Award className="w-4 h-4 text-gold-primary" />
            <span>CGPA: <strong className="text-gold-bright font-semibold">{edu.cgpa}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-cinematic-muted">
            <Calendar className="w-4 h-4 text-gold-primary" />
            <span>Graduation: <strong className="text-cinematic-text">{edu.graduationYear}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-cinematic-muted">
            <MapPin className="w-4 h-4 text-gold-primary" />
            <span>Location: <strong className="text-cinematic-text">{edu.location}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
