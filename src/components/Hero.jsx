import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, Cpu, Sliders, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Hero({ onOpenQuoteModal, onOpenConfiguratorModal }) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-kaizel-darker">
      {/* Background Hero Photographic Media with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_elevator.jpg"
          alt="Kaizel Modern Architectural Elevator"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kaizel-darker via-kaizel-darker/90 to-kaizel-darker/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-kaizel-darker via-transparent to-kaizel-darker/70" />
      </div>

      {/* Engineering Grid & Micro-Line Animations */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-kaizel-blue/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-kaizel-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Editorial Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kaizel-blue/15 border border-kaizel-blue/40 text-kaizel-accent font-mono text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-kaizel-accent animate-ping" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] uppercase">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-kaizel-offwhite to-kaizel-textMuted">
                THE WAY
              </span> <br />
              <span className="text-kaizel-blue">PEOPLE MOVE.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-kaizel-textMuted leading-relaxed max-w-2xl font-normal">
              {COMPANY_INFO.subTagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-md bg-kaizel-blue hover:bg-kaizel-blueHover text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-glow hover:shadow-glow-lg flex items-center gap-3 group"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <Link
                to="/products"
                className="px-8 py-4 rounded-md bg-kaizel-surface/80 hover:bg-kaizel-surfaceHover border border-kaizel-borderDark hover:border-kaizel-blue text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center gap-3 group"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-4 h-4 text-kaizel-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Technical Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-kaizel-borderDark/60 max-w-xl">
              <div className="flex items-center gap-2 text-xs text-kaizel-textMuted">
                <Cpu className="w-4 h-4 text-kaizel-accent flex-shrink-0" />
                <span>VVVF Micro-Drives</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-kaizel-textMuted">
                <ShieldCheck className="w-4 h-4 text-kaizel-blue flex-shrink-0" />
                <span>ARD Emergency Rescue</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-kaizel-textMuted">
                <Sliders className="w-4 h-4 text-kaizel-accent flex-shrink-0" />
                <span>Custom Shaft Design</span>
              </div>
            </div>

          </div>

          {/* Right Floating Architectural Glass Studio Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-panel p-6 rounded-2xl border border-kaizel-borderDark/80 shadow-card-dark relative group hover:border-kaizel-blue/50 transition-colors">
              <div className="flex justify-between items-center pb-4 border-b border-kaizel-borderDark">
                <span className="text-xs font-mono text-kaizel-accent uppercase tracking-wider">INTERACTIVE STUDIO</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kaizel-blue/20 text-kaizel-textLight">3D CONFIGURATOR</span>
              </div>

              <div className="my-5 relative rounded-lg overflow-hidden border border-kaizel-borderDark aspect-[4/3]">
                <img
                  src="/images/home_elevator.jpg"
                  alt="Kaizel Cabin Studio Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kaizel-darker via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-mono">
                  Configure Wall Finishes, Lighting & Controls
                </div>
              </div>

              <p className="text-xs text-kaizel-textMuted leading-relaxed mb-4">
                Visualize custom elevator cabin layouts with teak veneers, ambient LED ceilings, and Italian marble floors.
              </p>

              <button
                onClick={onOpenConfiguratorModal}
                className="w-full py-3 rounded-md bg-kaizel-surfaceHover hover:bg-kaizel-blue border border-kaizel-borderDark hover:border-transparent text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>OPEN CABIN STUDIO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[11px] font-mono text-kaizel-textMuted opacity-70 hover:opacity-100 transition-opacity">
        <span>SCROLL TO DISCOVER</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-kaizel-accent" />
      </div>
    </section>
  );
}
