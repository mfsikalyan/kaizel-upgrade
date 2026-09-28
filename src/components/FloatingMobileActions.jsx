import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function FloatingMobileActions({ onOpenQuoteModal }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-kaizel-darker/95 backdrop-blur-lg border-t border-kaizel-borderDark p-3 lg:hidden flex items-center gap-3">
        <a
          href={`tel:${COMPANY_INFO.tollFree}`}
          className="flex-1 py-3 rounded-lg bg-kaizel-surface border border-kaizel-borderDark text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 text-kaizel-blue" />
          <span>CALL TOLL FREE</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex-1 py-3 rounded-lg bg-kaizel-blue text-white text-xs font-mono font-bold uppercase tracking-wider shadow-glow flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>REQUEST QUOTE</span>
        </button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 lg:bottom-8 right-6 z-40 p-3 rounded-full bg-kaizel-blue text-white shadow-glow hover:scale-110 transition-transform focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
