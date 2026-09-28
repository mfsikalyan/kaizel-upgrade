import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight, ShieldCheck, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import KaizelLogo from './KaizelLogo';

export default function Navbar({ onOpenQuoteModal, onOpenConfiguratorModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Technology', path: '/technology' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      
      {/* Seamless Ambient Dark Blue Gradient Vessel */}
      <div className={`transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-b from-[#050811]/98 via-[#081022]/95 to-[#050811]/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] pb-1' 
          : 'bg-gradient-to-b from-[#050811]/95 via-[#091226]/80 to-transparent backdrop-blur-xl pb-1'
      }`}>

        {/* Top Info Bar - Compact Micro Badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1.5 pb-0.5 flex justify-between items-center text-[10px]">
          
          {/* Left Certification Credentials - Floating Micro Badges */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-950/60 via-cyan-950/40 to-blue-950/60 border border-cyan-500/30 text-cyan-200 font-mono text-[10px] px-2.5 py-0.5 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.12)] backdrop-blur-md">
              <ShieldCheck className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span className="font-bold text-white tracking-wide">ISO 9001 & ISO 14001</span>
              <span className="text-cyan-400 font-semibold hidden lg:inline">CERTIFIED</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1 bg-kaizel-surface/60 border border-kaizel-borderDark/60 text-slate-300 font-mono text-[10px] px-2.5 py-0.5 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-kaizel-accent animate-ping" />
              <span className="text-kaizel-accent font-semibold">IS 14665 COMPLIANT</span>
            </div>
          </div>

          {/* Right Phone & Interactive Studio Button */}
          <div className="flex items-center gap-3 text-[10px]">
            <a 
              href={`tel:${COMPANY_INFO.tollFree}`} 
              className="flex items-center gap-1 text-slate-200 hover:text-cyan-300 transition-colors font-medium group"
            >
              <Phone className="w-3 h-3 text-kaizel-blue group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-slate-400 font-normal">Toll Free:</span>
              <span className="font-mono font-semibold text-white">{COMPANY_INFO.tollFree}</span>
            </a>

            <button
              onClick={onOpenConfiguratorModal}
              className="bg-gradient-to-r from-kaizel-blue/30 to-cyan-500/20 hover:from-kaizel-blue/50 hover:to-cyan-500/40 border border-cyan-400/40 text-cyan-200 hover:text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1 transition-all shadow-[0_0_10px_rgba(6,182,212,0.15)]"
            >
              <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
              <span>3D CABIN STUDIO</span>
              <ArrowUpRight className="w-2.5 h-2.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            
            {/* Authentic Kaizel Logo Brand */}
            <KaizelLogo />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-kaizel-darker/60 p-1 rounded-full border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[11px] font-medium transition-all px-3.5 py-1 rounded-full ${
                      isActive 
                        ? 'bg-gradient-to-r from-kaizel-blue to-cyan-600 text-white font-bold shadow-[0_0_12px_rgba(37,99,235,0.5)] border border-cyan-400/30' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-kaizel-blue to-cyan-600 hover:from-kaizel-blueHover hover:to-cyan-500 text-white text-[11px] font-semibold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center gap-1.5 hover:scale-105"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={onOpenQuoteModal}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-kaizel-blue to-cyan-600 text-white text-xs font-semibold uppercase tracking-wider shadow-glow"
              >
                QUOTE
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-cyan-300 rounded-lg focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050811]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-28 pb-8 px-6 overflow-y-auto border-t border-cyan-500/20 animate-fadeIn">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan-400" />
              <span>NAVIGATION MENU</span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center justify-between text-xl font-display font-semibold text-white py-3 border-b border-white/10 hover:text-cyan-300 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </Link>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfiguratorModal();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-950/80 to-cyan-950/60 border border-cyan-400/40 text-cyan-200 text-sm font-mono font-medium flex items-center justify-between shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <span>3D CABIN CONFIGURATOR STUDIO</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-kaizel-blue to-cyan-600 text-white font-semibold text-sm uppercase tracking-wider shadow-glow text-center"
            >
              REQUEST A QUOTE NOW
            </button>
            
            <div className="flex items-center justify-between text-xs text-slate-300 pt-3 border-t border-white/10 font-mono">
              <span>Toll Free: {COMPANY_INFO.tollFree}</span>
              <span className="text-cyan-400 font-semibold">ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
