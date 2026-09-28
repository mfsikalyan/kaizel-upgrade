import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sliders } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-24 bg-kaizel-dark min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-md space-y-6">
        <div className="font-display font-extrabold text-7xl sm:text-9xl text-kaizel-blue tracking-tighter shadow-glow">
          404
        </div>
        <h1 className="font-display text-2xl font-bold text-white uppercase">
          ELEVATOR FLOOR NOT FOUND
        </h1>
        <p className="text-xs text-kaizel-textMuted leading-relaxed">
          The destination floor you requested does not exist or has been relocated.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-kaizel-blue text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>
          <Link
            to="/products"
            className="px-6 py-3 rounded-lg bg-kaizel-surface border border-kaizel-borderDark text-white font-mono text-xs font-bold uppercase tracking-wider"
          >
            EXPLORE CATALOG
          </Link>
        </div>
      </div>
    </div>
  );
}
