import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import LifecycleTimeline from '../components/LifecycleTimeline';
import ServiceLocations from '../components/ServiceLocations';
import LeadGenForm from '../components/LeadGenForm';
import { PhoneCall, ShieldCheck, Clock, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ServicePage({ onOpenQuoteModal }) {
  return (
    <div className="pt-16 sm:pt-20 pb-12 bg-kaizel-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Service & AMC' }]} />

        <div className="max-w-3xl mb-6 space-y-2">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-px bg-kaizel-accent" />
            <span>24x7 EMERGENCY & PREVENTIVE CARE</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            INSTALLATION & <span className="text-kaizel-blue">LIFETIME SUPPORT.</span>
          </h1>
          <p className="text-sm text-kaizel-textMuted leading-relaxed">
            Kaizel offers Annual Maintenance Contracts (AMC), scheduled monthly health checks, and 24x7 rapid emergency response hotlines.
          </p>
        </div>

        {/* Call Banner */}
        <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-kaizel-borderDark mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-card-dark">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-kaizel-accent">
              <Clock className="w-4 h-4" />
              <span>ROUND-THE-CLOCK EMERGENCY HOTLINE</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              NEED IMMEDIATE BREAKDOWN ASSISTANCE?
            </h3>
            <p className="text-xs text-kaizel-textMuted">
              Our 24x7 emergency rescue team is on standby to respond to passenger breakdown alerts.
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.tollFree}`}
            className="px-6 py-3 rounded-xl bg-kaizel-blue hover:bg-kaizel-blueHover text-white font-display font-bold text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-glow flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>CALL {COMPANY_INFO.tollFree}</span>
          </a>
        </div>

        <LifecycleTimeline compact={true} />

        <div className="my-10">
          <ServiceLocations />
        </div>

        <LeadGenForm />
      </div>
    </div>
  );
}
