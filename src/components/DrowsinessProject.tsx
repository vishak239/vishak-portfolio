'use client';

import { useState } from 'react';
import { drowsinessProject } from '@/data/portfolioContent';
import { Camera, Eye, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function DrowsinessProject() {
  const [simulatedDrowsy, setSimulatedDrowsy] = useState(false);

  // Simulated Eye Aspect Ratio values
  const earValue = simulatedDrowsy ? 0.17 : 0.31;
  const threshold = 0.22;
  const isAlert = earValue < threshold;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      {/* Section Act Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono text-gold-primary tracking-cinematic uppercase">
          {drowsinessProject.actLabel}
        </span>
        <span className="h-[1px] flex-1 bg-surface-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Case Study Narrative */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono tracking-cinematic uppercase text-cinematic-muted">
              EDGE COMPUTER VISION SYSTEM
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cinematic-text uppercase tracking-tight">
              {drowsinessProject.title}
            </h3>
            <p className="font-serif text-lg sm:text-xl text-gold-bright italic mt-1">
              “{drowsinessProject.tagline}”
            </p>
          </div>

          <p className="text-cinematic-muted text-sm sm:text-base leading-relaxed font-sans font-light">
            {drowsinessProject.description}
          </p>

          {/* Core Concept Sequence */}
          <div className="p-4 rounded-sm bg-surface-panel border border-surface-border flex flex-col gap-3">
            <span className="text-[10px] font-mono text-gold-primary uppercase tracking-cinematic">
              Core Concept Pipeline
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {['Webcam', '→', 'Face Detection', '→', 'Eye Detection', '→', 'Eye Aspect Ratio', '→', 'Drowsiness Detection', '→', 'Alert'].map((node, i) => (
                <span
                  key={i}
                  className={node === '→' ? 'text-gold-primary font-bold' : 'px-2 py-1 rounded-sm bg-surface-highlight text-cinematic-text'}
                >
                  {node}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {drowsinessProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-sm bg-surface-panel border border-surface-border text-xs font-mono text-cinematic-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Vision Telemetry HUD Simulation */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-surface-panel border border-surface-border flex flex-col gap-6 shadow-cinematic">
          <div className="flex items-center justify-between border-b border-surface-border pb-4">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-gold-primary" />
              <span className="text-xs font-mono text-gold-bright uppercase tracking-widest">
                Ocular Telemetry Visualizer
              </span>
            </div>
            <button
              onClick={() => setSimulatedDrowsy(!simulatedDrowsy)}
              className="px-3 py-1 rounded-sm bg-surface-highlight border border-surface-border text-xs font-mono text-gold-bright hover:border-gold-primary transition-colors"
            >
              Toggle State: {simulatedDrowsy ? 'Awake Mode' : 'Fatigue Simulation'}
            </button>
          </div>

          {/* Synthetic Camera HUD Viewfinder */}
          <div className="relative aspect-[16/10] rounded-sm bg-surface-elevated border border-surface-border flex items-center justify-center overflow-hidden">
            {/* HUD Viewfinder Grid */}
            <div className="absolute inset-4 border border-surface-border/50 rounded-sm pointer-events-none" />
            <div className="absolute top-6 left-6 text-[10px] font-mono text-cinematic-dim">
              REC // 30 FPS • OPENCV_CV2
            </div>
            <div className="absolute top-6 right-6 text-[10px] font-mono text-cinematic-dim">
              RES: 640x480 RAW
            </div>

            {/* Simulated Eye Tracking Wireframe */}
            <div className="flex items-center gap-8 sm:gap-12">
              <div className={`p-4 rounded-sm border transition-all duration-300 ${isAlert ? 'border-red-500 bg-red-500/10' : 'border-gold-primary bg-gold-primary/10'}`}>
                <Eye className={`w-8 h-8 ${isAlert ? 'text-red-400' : 'text-gold-bright'}`} />
                <span className="block text-[9px] font-mono text-center mt-1 text-cinematic-muted">LEFT_EYE</span>
              </div>
              <div className={`p-4 rounded-sm border transition-all duration-300 ${isAlert ? 'border-red-500 bg-red-500/10' : 'border-gold-primary bg-gold-primary/10'}`}>
                <Eye className={`w-8 h-8 ${isAlert ? 'text-red-400' : 'text-gold-bright'}`} />
                <span className="block text-[9px] font-mono text-center mt-1 text-cinematic-muted">RIGHT_EYE</span>
              </div>
            </div>

            {/* Alert Status Banner */}
            <div className="absolute bottom-6 inset-x-6 flex items-center justify-between px-4 py-2 rounded-sm bg-surface/90 backdrop-blur-md border border-surface-border text-xs font-mono">
              <div className="flex items-center gap-2">
                {isAlert ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
                    <span className="text-red-400 font-bold uppercase tracking-wider">
                      ALERT: FATIGUE DETECTED
                    </span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-gold-bright" />
                    <span className="text-gold-bright uppercase tracking-wider">
                      STATUS: ATTENTIVE / NOMINAL
                    </span>
                  </>
                )}
              </div>
              <span className="text-cinematic-muted">
                EAR: <strong className={isAlert ? 'text-red-400' : 'text-gold-bright'}>{earValue.toFixed(2)}</strong> (thresh: {threshold})
              </span>
            </div>
          </div>

          {/* Mathematical Geometric Note */}
          <div className="p-3.5 rounded-sm bg-surface-elevated/70 border border-surface-border text-xs font-mono text-cinematic-muted">
            <span className="text-gold-bright font-semibold">EAR Formulation:</span> EAR = (||p2 - p6|| + ||p3 - p5||) / (2 * ||p1 - p4||). Real-time Euclidean landmark distance tracking across consecutive camera frames.
          </div>
        </div>
      </div>
    </section>
  );
}
