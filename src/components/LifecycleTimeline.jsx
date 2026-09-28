import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function LifecycleTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-kaizel-surface border-y border-kaizel-borderDark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest">
            PROJECT LIFECYCLE MANAGEMENT
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            FROM INSTALLATION TO <br />
            <span className="text-kaizel-blue">LIFETIME SUPPORT.</span>
          </h2>
          <p className="text-sm text-kaizel-textMuted">
            End-to-end execution framework ensuring safety, quality compliance, and ongoing operational excellence.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-7 gap-2 mb-10 relative">
            {/* Horizontal Line connector */}
            <div className="absolute top-6 left-12 right-12 h-0.5 bg-kaizel-borderDark -z-0" />

            {COMPANY_INFO.lifecycle.map((item, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center space-y-3 relative z-10 group focus:outline-none"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all ${
                    isActive
                      ? 'bg-kaizel-blue text-white shadow-glow scale-110 border-2 border-kaizel-accent'
                      : isPast
                      ? 'bg-kaizel-surfaceHover text-kaizel-accent border border-kaizel-blue'
                      : 'bg-kaizel-dark text-kaizel-textMuted border border-kaizel-borderDark group-hover:border-kaizel-blue'
                  }`}>
                    {item.step}
                  </div>
                  <span className={`text-xs font-mono font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-kaizel-accent' : 'text-kaizel-textMuted group-hover:text-white'
                  }`}>
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div className="glass-panel p-8 rounded-2xl border border-kaizel-borderDark max-w-3xl mx-auto text-center space-y-4 shadow-card-dark animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kaizel-blue/20 text-kaizel-accent font-mono text-xs font-bold">
              PHASE {COMPANY_INFO.lifecycle[activeStep].step} OF 07
            </div>
            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
              {COMPANY_INFO.lifecycle[activeStep].title}
            </h3>
            <p className="text-sm text-kaizel-textMuted leading-relaxed max-w-xl mx-auto">
              {COMPANY_INFO.lifecycle[activeStep].desc}
            </p>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {COMPANY_INFO.lifecycle.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-xl border border-kaizel-borderDark space-y-2 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-kaizel-blue/20 border border-kaizel-blue/40 font-mono font-bold text-kaizel-accent flex items-center justify-center flex-shrink-0">
                {item.step}
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-base font-bold text-white uppercase">
                  {item.title}
                </h4>
                <p className="text-xs text-kaizel-textMuted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
