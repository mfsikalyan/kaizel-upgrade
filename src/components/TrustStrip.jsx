import React from 'react';
import { ShieldCheck, Award, FileCheck, Wrench, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function TrustStrip() {
  const trustItems = [
    { icon: ShieldCheck, label: "ISO 9001:2015", detail: "Quality Management System" },
    { icon: Award, label: "ISO 14001:2015", detail: "Environmental Standard" },
    { icon: FileCheck, label: "IS 14665 COMPLIANT", detail: "Bureau of Indian Standards" },
    { icon: Wrench, label: "IN-HOUSE R&D", detail: "Custom Shaft Testing" },
    { icon: PhoneCall, label: "24×7 SERVICE", detail: "Emergency Lifeline Hotline" }
  ];

  return (
    <div className="bg-kaizel-surface border-y border-kaizel-borderDark py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-kaizel-borderDark/40">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0 group hover:translate-y-[-2px] transition-transform"
              >
                <div className="w-10 h-10 rounded-lg bg-kaizel-blue/10 border border-kaizel-blue/30 flex items-center justify-center flex-shrink-0 group-hover:bg-kaizel-blue group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 text-kaizel-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-kaizel-textMuted font-sans">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
