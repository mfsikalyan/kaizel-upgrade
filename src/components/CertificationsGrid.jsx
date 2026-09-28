import React, { useState } from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle, Eye, X, Download, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function CertificationsGrid() {
  const [selectedCertModal, setSelectedCertModal] = useState(null);

  const iso45001Cert = {
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety Management System",
    certNo: "22EOIK75",
    issuanceDate: "20/10/2022",
    expiryDate: "19/10/2025",
    accreditation: "IAF / EGAC Accredited (CAB # 118005)",
    scope: "Manufacturing, Assembling, Designing, Erection, Installation, Repair & Maintenance of Elevators, Escalators & Lifting Devices.",
    image: "/images/iso_45001_certificate.jpg"
  };

  return (
    <section className="py-24 bg-kaizel-surface border-y border-kaizel-borderDark relative overflow-hidden">
      {/* Background Engineering Line Grid Accent */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-kaizel-accent" />
            <span>VERIFIED QUALITY CREDENTIALS</span>
            <span className="w-8 h-px bg-kaizel-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            CERTIFICATIONS & <span className="text-kaizel-blue">QUALITY POLICIES.</span>
          </h2>
          <p className="text-sm text-kaizel-textMuted">
            Adhering strictly to international ISO frameworks, IAF global accreditations, and Bureau of Indian Standards elevator safety codes.
          </p>
        </div>

        {/* Featured ISO 45001 Official Certificate Spotlight Banner */}
        <div className="mb-12 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-blue-950/40 via-kaizel-darker to-cyan-950/40 shadow-glow relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Certificate Document Thumbnail */}
            <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setSelectedCertModal(iso45001Cert)}>
              <div className="relative aspect-[3/4] max-w-xs mx-auto rounded-xl overflow-hidden border border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.25)] bg-white/5">
                <img
                  src={iso45001Cert.image}
                  alt="Kaizel ISO 45001:2018 Certificate of Registration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kaizel-darker/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-cyan-950/90 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>OFFICIAL REGISTRATION</span>
                  </span>
                  
                  <span className="p-2 rounded-full bg-kaizel-blue text-white shadow-glow group-hover:scale-110 transition-transform">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Certificate Highlights & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 font-mono text-xs text-cyan-300">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>OFFICIAL CERTIFICATE OF REGISTRATION</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                  ISO 45001:2018 CERTIFIED
                </h3>
                <p className="text-xs font-mono text-kaizel-accent uppercase tracking-wider font-semibold">
                  OCCUPATIONAL HEALTH & SAFETY MANAGEMENT SYSTEM
                </p>
              </div>

              <p className="text-sm text-kaizel-textMuted leading-relaxed">
                Kaizel Engineers Pvt. Ltd. is formally certified under Registration Certificate No. <strong className="text-white font-mono">{iso45001Cert.certNo}</strong> for the design, manufacturing, assembly, erection, installation, and 24x7 maintenance of elevators, escalators, and lifting platforms.
              </p>

              {/* Certificate Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-kaizel-darker/80 border border-kaizel-borderDark">
                  <span className="text-[10px] text-kaizel-textMuted block">CERTIFICATE NO</span>
                  <span className="text-cyan-300 font-bold">{iso45001Cert.certNo}</span>
                </div>
                <div className="p-3 rounded-lg bg-kaizel-darker/80 border border-kaizel-borderDark">
                  <span className="text-[10px] text-kaizel-textMuted block">ISSUANCE DATE</span>
                  <span className="text-white font-bold">{iso45001Cert.issuanceDate}</span>
                </div>
                <div className="p-3 rounded-lg bg-kaizel-darker/80 border border-kaizel-borderDark col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-kaizel-textMuted block">ACCREDITATION</span>
                  <span className="text-kaizel-accent font-bold">IAF / EGAC</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedCertModal(iso45001Cert)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-kaizel-blue to-cyan-600 hover:from-kaizel-blueHover hover:to-cyan-500 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>INSPECT FULL OFFICIAL CERTIFICATE DOCUMENT</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.credentials.map((cred, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-kaizel-borderDark hover:border-kaizel-blue/50 transition-colors space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-kaizel-blue/20 border border-kaizel-blue/40 flex items-center justify-center text-kaizel-accent group-hover:bg-kaizel-blue group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-kaizel-textMuted uppercase">VERIFIED</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight group-hover:text-kaizel-accent transition-colors">
                  {cred.title}
                </h3>
                <div className="text-xs font-mono text-kaizel-blue uppercase font-semibold">
                  {cred.subtitle}
                </div>
              </div>

              <p className="text-xs text-kaizel-textMuted leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Official Certificate Lightbox Modal */}
      {selectedCertModal && (
        <div className="fixed inset-0 z-50 bg-kaizel-darker/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 max-w-4xl w-full relative space-y-6 max-h-[95vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setSelectedCertModal(null)}
              className="absolute top-4 right-4 p-2 text-kaizel-textMuted hover:text-white rounded-full bg-kaizel-surface border border-kaizel-borderDark transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 border-b border-kaizel-borderDark/60 pb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white uppercase">
                  {selectedCertModal.title} - CERTIFICATE OF REGISTRATION
                </h3>
                <p className="text-xs font-mono text-kaizel-accent">
                  KAIZEL ENGINEERS PRIVATE LIMITED // CERT NO: {selectedCertModal.certNo}
                </p>
              </div>
            </div>

            {/* High-Res Certificate Image View */}
            <div className="relative aspect-[3/4] max-w-xl mx-auto rounded-xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-white">
              <img
                src={selectedCertModal.image}
                alt={selectedCertModal.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-kaizel-darker border border-kaizel-borderDark font-mono text-xs">
              <div>
                <span className="text-kaizel-textMuted block text-[10px]">CERTIFICATE NO</span>
                <span className="text-cyan-300 font-bold">{selectedCertModal.certNo}</span>
              </div>
              <div>
                <span className="text-kaizel-textMuted block text-[10px]">INITIAL REGISTRATION</span>
                <span className="text-white font-bold">{selectedCertModal.issuanceDate}</span>
              </div>
              <div>
                <span className="text-kaizel-textMuted block text-[10px]">EXPIRY DATE</span>
                <span className="text-amber-400 font-bold">{selectedCertModal.expiryDate}</span>
              </div>
              <div>
                <span className="text-kaizel-textMuted block text-[10px]">ACCREDITATION</span>
                <span className="text-kaizel-accent font-bold">IAF / EGAC</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedCertModal(null)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-kaizel-blue to-cyan-600 text-white font-semibold text-xs font-mono uppercase tracking-wider shadow-glow"
            >
              CLOSE DOCUMENT INSPECTOR
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
