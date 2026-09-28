import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import KaizelLogo from './KaizelLogo';

export default function Footer({ onOpenQuoteModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kaizel-darker text-kaizel-textMuted border-t border-kaizel-borderDark relative overflow-hidden">
      {/* Background Engineering Line Grid Accent */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-kaizel-borderDark">
          
          {/* Col 1: Company Profile */}
          <div className="lg:col-span-2 space-y-6">
            <KaizelLogo size="large" />

            <p className="text-sm text-kaizel-textMuted leading-relaxed max-w-sm">
              Kaizel Engineers Pvt. Ltd. is a premier vertical transportation technology company specializing in high-performance elevator systems, custom architectural lifts, and automated car parking solutions across India.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-kaizel-textLight pt-1">
              <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                <Shield className="w-3.5 h-3.5 text-cyan-400" /> ISO 9001:2015
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                <Shield className="w-3.5 h-3.5 text-cyan-400" /> ISO 14001:2015
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                <Shield className="w-3.5 h-3.5 text-cyan-400" /> ISO 45001:2018
              </span>
              <span className="px-3 py-1 rounded-full bg-kaizel-surface border border-kaizel-borderDark text-slate-300">
                IS 14665 COMPLIANT
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-kaizel-accent">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Kaizel</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Building Solutions</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Engineering & Tech</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">24x7 AMC & Support</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Directory</Link></li>
            </ul>
          </div>

          {/* Col 3: Elevator Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-kaizel-accent">
              PRODUCTS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/products/home-elevators" className="hover:text-white transition-colors">Home Elevators</Link></li>
              <li><Link to="/products/passenger-elevators" className="hover:text-white transition-colors">Passenger Elevators</Link></li>
              <li><Link to="/products/panoramic-elevators" className="hover:text-white transition-colors">Panoramic Elevators</Link></li>
              <li><Link to="/products/automobile-elevators" className="hover:text-white transition-colors">Automobile Elevators</Link></li>
              <li><Link to="/products/stretcher-elevators" className="hover:text-white transition-colors">Stretcher Elevators</Link></li>
              <li><Link to="/products/hydraulic-elevators" className="hover:text-white transition-colors">Hydraulic Elevators</Link></li>
              <li><Link to="/products/dumbwaiter-elevators" className="hover:text-white transition-colors">Dumbwaiters</Link></li>
              <li><Link to="/products/car-parking-systems" className="hover:text-white transition-colors">Car Parking Systems</Link></li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-kaizel-accent">
              HEADQUARTERS & CONTACT
            </h4>
            <div className="space-y-3 text-sm">
              <a 
                href={`tel:${COMPANY_INFO.tollFree}`}
                className="flex items-start gap-3 p-3 rounded-lg bg-kaizel-surface border border-kaizel-borderDark hover:border-kaizel-blue transition-colors group"
              >
                <Phone className="w-4 h-4 text-kaizel-blue mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-kaizel-textMuted uppercase font-mono">Toll Free Support</div>
                  <div className="text-white font-semibold">{COMPANY_INFO.tollFree}</div>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-kaizel-textLight hover:text-kaizel-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-kaizel-blue" />
                <span className="text-xs">{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-3 text-xs leading-relaxed text-kaizel-textMuted">
                <MapPin className="w-4 h-4 text-kaizel-blue flex-shrink-0 mt-0.5" />
                <span>Bhubaneswar (HQ), Odisha, India. Serving East, North, West & South Regions.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Legal & Sitemap */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-kaizel-textMuted">
            © {currentYear} {COMPANY_INFO.name} All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
            <span className="text-kaizel-borderDark">•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-kaizel-borderDark">•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-1.5 text-kaizel-accent hover:text-white transition-colors font-mono font-medium"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
