import React from 'react';
import { ShieldCheck, Award, FileCheck, Wrench, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function CertificationsGrid() {
  return (
    <section className="py-24 bg-kaizel-surface border-y border-kaizel-borderDark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest">
            VERIFIED CREDENTIALS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase">
            CERTIFICATIONS & QUALITY POLICIES
          </h2>
          <p className="text-sm text-kaizel-textMuted">
            Adhering strictly to international quality frameworks and Bureau of Indian Standards elevator codes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.credentials.map((cred, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-kaizel-borderDark hover:border-kaizel-blue/50 transition-colors space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-kaizel-blue/20 border border-kaizel-blue/40 flex items-center justify-center text-kaizel-accent group-hover:bg-kaizel-blue group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-kaizel-textMuted uppercase">VERIFIED</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight group-hover:text-kaizel-accent transition-colors">
                  {cred.title}
                </h3>
                <div className="text-xs font-mono text-kaizel-blue uppercase font-semibold">
                  {cred.subtitle}
                </div>
              </div>

              <p className="text-xs text-kaizel-textMuted leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
