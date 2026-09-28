import React from 'react';
import { ShieldCheck, Lock, Flame, AlertOctagon, PhoneCall } from 'lucide-react';
import { SAFETY_PILLARS } from '../data/technology';

export default function SafetySection({ onOpenQuoteModal }) {
  return (
    <section className="py-24 bg-kaizel-darker relative overflow-hidden border-b border-kaizel-borderDark">
      {/* Subtle Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-kaizel-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 font-mono text-xs font-semibold uppercase">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>ZERO COMPROMISE STANDARDS</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase">
              SAFETY IS <br />
              <span className="text-kaizel-blue">ENGINEERED IN.</span>
            </h2>

            <p className="text-sm sm:text-base text-kaizel-textMuted leading-relaxed">
              Every Kaizel elevator system incorporates multi-layered mechanical locks, electrical safety interlocks, and automated battery rescue protocol to protect passenger life under any eventuality.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-md bg-kaizel-blue hover:bg-kaizel-blueHover text-white text-xs font-mono font-semibold uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center gap-3"
              >
                <PhoneCall className="w-4 h-4" />
                <span>TALK TO AN ENGINEER</span>
              </button>
            </div>
          </div>

          {/* Right Column: Safety Systems Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SAFETY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-xl border border-kaizel-borderDark space-y-3 hover:border-kaizel-blue/50 transition-colors"
              >
                <div className="flex justify-between items-center font-mono text-[10px] text-kaizel-accent">
                  <span>SYSTEM 0{idx + 1}</span>
                  <span className="bg-kaizel-surface px-2 py-0.5 rounded text-kaizel-textMuted">{pillar.code}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-xs text-kaizel-textMuted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
