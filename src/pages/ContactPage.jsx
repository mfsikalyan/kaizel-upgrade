import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import LeadGenForm from '../components/LeadGenForm';
import ServiceLocations from '../components/ServiceLocations';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20 pb-12 bg-kaizel-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        <div className="max-w-3xl mb-6 space-y-2">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-px bg-kaizel-accent" />
            <span>GET IN TOUCH WITH OUR ENGINEERS</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            CONTACT <span className="text-kaizel-blue">KAIZEL ENGINEERS.</span>
          </h1>
          <p className="text-sm text-kaizel-textMuted leading-relaxed">
            Reach out for technical lift specifications, custom shaft dimensions, AMC proposals, or breakdown assistance.
          </p>
        </div>

        {/* Lead Form */}
        <LeadGenForm compact={true} />

        {/* Locations Grid */}
        <div className="my-10">
          <ServiceLocations />
        </div>

      </div>
    </div>
  );
}
