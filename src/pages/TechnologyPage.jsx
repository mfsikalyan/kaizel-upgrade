import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import TechVisualization from '../components/TechVisualization';
import SafetySection from '../components/SafetySection';
import CertificationsGrid from '../components/CertificationsGrid';

export default function TechnologyPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-16 sm:pt-20 pb-12 bg-kaizel-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Technology' }]} />

        <div className="max-w-3xl mb-6 space-y-2">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-px bg-kaizel-accent" />
            <span>ENGINEERING & R&D SPECIFICATIONS</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            POWER OF <span className="text-kaizel-blue">TECHNOLOGY.</span>
          </h1>
          <p className="text-sm text-kaizel-textMuted leading-relaxed">
            Our elevator platforms leverage VVVF micro-controllers, PMSM gearless motors, automatic battery rescue (ARD), and 128-beam infrared curtains engineered to IS 14665 safety codes.
          </p>
        </div>

        <TechVisualization hideHeader={true} />
        
        <div className="my-10">
          <SafetySection onOpenQuoteModal={onOpenQuoteModal} />
        </div>

        <CertificationsGrid />
      </div>
    </div>
  );
}
