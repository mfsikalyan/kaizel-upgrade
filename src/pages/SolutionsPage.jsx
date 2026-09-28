import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ApplicationsSection from '../components/ApplicationsSection';
import LeadGenForm from '../components/LeadGenForm';
import { ArrowUpRight, Building, Home, Hospital, Factory, Car, Shield } from 'lucide-react';

export default function SolutionsPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-16 sm:pt-20 pb-12 bg-kaizel-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: 'Solutions' }]} />

        <div className="max-w-3xl mb-6 space-y-2">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-px bg-kaizel-accent" />
            <span>TAILORED BUILDING MOBILITY</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            VERTICAL MOBILITY <span className="text-kaizel-blue">BY BUILDING TYPE.</span>
          </h1>
          <p className="text-sm text-kaizel-textMuted leading-relaxed">
            Every building environment has distinct traffic flows, load demands, pit depths, and aesthetic expectations. Kaizel Engineers crafts solution packages tailored specifically to your architecture.
          </p>
        </div>

        <ApplicationsSection hideHeader={true} />

        <div className="mt-12">
          <LeadGenForm />
        </div>

      </div>
    </div>
  );
}
