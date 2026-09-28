import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function ServiceLocations() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(0);

  const regions = ["All", "East (HQ)", "East", "North", "West", "South"];

  const filteredLocations = selectedRegion === "All"
    ? COMPANY_INFO.locations
    : COMPANY_INFO.locations.filter(loc => loc.region.includes(selectedRegion));

  return (
    <section className="py-24 bg-kaizel-surface border-y border-kaizel-borderDark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-kaizel-accent" />
              <span>SERVICE NETWORK & BRANCHES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              LOCATIONS & <br />
              <span className="text-kaizel-blue">SERVICE COVERAGE.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-md text-xs font-mono font-medium transition-all ${
                  selectedRegion === reg
                    ? 'bg-kaizel-blue text-white shadow-glow'
                    : 'bg-kaizel-dark hover:bg-kaizel-surfaceHover text-kaizel-textMuted hover:text-white border border-kaizel-borderDark'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-kaizel-borderDark hover:border-kaizel-blue/50 transition-colors space-y-4"
            >
              <div className="flex items-center justify-between border-b border-kaizel-borderDark/40 pb-3">
                <span className="px-2.5 py-0.5 rounded bg-kaizel-blue/20 text-kaizel-accent font-mono text-xs uppercase font-semibold">
                  {loc.region}
                </span>
                <span className="text-xs font-mono text-kaizel-textMuted">BRANCH</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white uppercase">
                {loc.city}
              </h3>

              <div className="space-y-3 text-xs leading-relaxed text-kaizel-textMuted">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-kaizel-blue flex-shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-kaizel-blue flex-shrink-0" />
                  <a href={`tel:${loc.phone}`} className="text-white hover:text-kaizel-accent font-semibold font-mono">
                    {loc.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-kaizel-blue flex-shrink-0" />
                  <a href={`mailto:${loc.email}`} className="text-kaizel-accent hover:underline">
                    {loc.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-kaizel-borderDark/40 font-mono text-[11px] text-kaizel-textLight">
                  <Clock className="w-3.5 h-3.5 text-kaizel-accent flex-shrink-0" />
                  <span>{loc.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
