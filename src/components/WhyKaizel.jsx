import React from 'react';
import { ShieldAlert, Cpu, Maximize, Leaf, Wrench } from 'lucide-react';

export default function WhyKaizel() {
  const pillars = [
    {
      icon: ShieldAlert,
      title: "SAFETY FIRST",
      desc: "Integrated mechanical safety gear, double level limit switches, battery rescue ARD, and full-height infrared door sensors safeguard every trip."
    },
    {
      icon: Cpu,
      title: "ENGINEERED FOR PERFORMANCE",
      desc: "VVVF microprocessor frequency drives provide whisper-quiet acceleration, millimeter leveling, and reduced motor component stress."
    },
    {
      icon: Maximize,
      title: "DESIGNED AROUND YOUR SPACE",
      desc: "Flexible Machine-Room-Less (MRL) designs and shallow pit configurations allow effortless integration into existing buildings and new architectural structures."
    },
    {
      icon: Leaf,
      title: "ENERGY CONSCIOUS",
      desc: "Permanent magnet synchronous motors (PMSM) and regenerative braking systems cut power consumption by up to 45% compared to conventional geared units."
    },
    {
      icon: Wrench,
      title: "LIFETIME AFTER-SALES CARE",
      desc: "Dedicated 24x7 emergency response line, scheduled preventive AMC maintenance, and authentic spare parts availability ensure round-the-clock uptime."
    }
  ];

  return (
    <section className="py-24 bg-kaizel-surface border-y border-kaizel-borderDark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest">
            ENGINEERING PRINCIPLES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase">
            WHY KAIZEL ENGINEERS
          </h2>
          <p className="text-sm text-kaizel-textMuted">
            Built on verified engineering standards, safety compliance, and robust post-installation support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-kaizel-borderDark hover:border-kaizel-blue/50 transition-colors space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-kaizel-blue/15 border border-kaizel-blue/30 flex items-center justify-center text-kaizel-accent group-hover:bg-kaizel-blue group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-tight uppercase group-hover:text-kaizel-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-kaizel-textMuted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
