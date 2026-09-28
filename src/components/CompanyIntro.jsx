import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react';

export default function CompanyIntro() {
  return (
    <section className="py-24 bg-kaizel-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Large Architectural Media */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-kaizel-accent" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase">
              POWER OF <br />
              <span className="text-kaizel-blue">TECHNOLOGY.</span>
            </h2>

            <div className="relative rounded-2xl overflow-hidden border border-kaizel-borderDark aspect-[4/3] group shadow-card-dark">
              <img
                src="/images/panoramic_elevator.jpg"
                alt="Kaizel Architectural Elevator Installation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kaizel-darker via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel text-xs text-kaizel-textLight flex items-center justify-between">
                <span className="font-mono">Precision Elevator Manufacturing</span>
                <span className="text-kaizel-accent font-mono">EST. ODISHA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Features */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            
            <p className="text-base sm:text-lg text-kaizel-textMuted leading-relaxed">
              <strong className="text-white">Kaizel Engineers Pvt. Ltd.</strong> is a specialized engineering enterprise dedicated to designing, manufacturing, installing, and servicing advanced vertical transportation solutions.
            </p>

            <p className="text-sm sm:text-base text-kaizel-textMuted leading-relaxed">
              From luxurious compact villa elevators to high-speed commercial tower passenger lifts, hospital stretcher systems, and automated car parking platforms, our solutions synthesize micro-processor drive precision with architectural aesthetics.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "In-House R&D for custom lift shaft layouts & overhead optimization",
                "Advanced VVVF gearless propulsion with smooth door actuation",
                "Strict adherence to Bureau of Indian Standards (IS 14665)",
                "Complete 24x7 after-sales maintenance & rapid emergency response"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kaizel-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-kaizel-textLight font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-md bg-kaizel-surface hover:bg-kaizel-surfaceHover border border-kaizel-borderDark hover:border-kaizel-blue text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all group"
              >
                <span>DISCOVER KAIZEL</span>
                <ArrowRight className="w-4 h-4 text-kaizel-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
