import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import CompanyIntro from '../components/CompanyIntro';
import KeyNumbers from '../components/KeyNumbers';
import CertificationsGrid from '../components/CertificationsGrid';
import { ShieldCheck, Award, Wrench, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-kaizel-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-px bg-kaizel-accent" />
            <span>KAIZEL ENGINEERS PVT. LTD.</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            ENGINEERING EXCELLENCE IN <br />
            <span className="text-kaizel-blue">VERTICAL TRANSPORTATION.</span>
          </h1>
          <p className="text-base text-kaizel-textMuted leading-relaxed">
            Headquartered in Bhubaneswar, Odisha, Kaizel Engineers Pvt. Ltd. stands as a premier Indian elevator manufacturing and technology company specializing in safe, efficient, and architectural building mobility systems.
          </p>
        </div>

        <CompanyIntro />
        
        <div className="my-16">
          <KeyNumbers />
        </div>

        <CertificationsGrid />
      </div>
    </div>
  );
}
