import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../data/company';

export default function KeyNumbers() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-kaizel-surface border-y border-kaizel-borderDark relative overflow-hidden">
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest">
            PROVEN TRACK RECORD
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">
            NUMBERS THAT REFLECT TRUST
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-kaizel-borderDark text-center space-y-3 group hover:border-kaizel-blue/50 transition-colors"
            >
              <div className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight group-hover:text-kaizel-accent transition-colors">
                {animated ? stat.value : 0}{stat.suffix}
              </div>
              <div className="font-mono text-xs font-semibold text-kaizel-blue tracking-widest uppercase">
                {stat.label}
              </div>
              <p className="text-xs text-kaizel-textMuted leading-relaxed pt-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
