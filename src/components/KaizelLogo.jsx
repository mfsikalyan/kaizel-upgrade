import React from 'react';
import { Link } from 'react-router-dom';

export default function KaizelLogo({ showSubtext = true, size = 'normal' }) {
  const isLarge = size === 'large';

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {/* Authentic KAIZEL Wordmark with red arrow inside 'A' */}
          <span className={`font-display font-extrabold tracking-widest text-white flex items-center select-none ${
            isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}>
            <span>K</span>
            
            {/* Letter 'A' with embedded red upward arrow */}
            <span className="relative inline-flex items-center justify-center px-[0.5px]">
              <span>A</span>
              <span className="absolute inset-0 flex items-center justify-center -translate-y-[1px]">
                <svg
                  className="w-2.5 h-2.5 text-red-500 fill-current drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L3 16h6v5h6v-5h6L12 3z" />
                </svg>
              </span>
            </span>

            <span>IZEL</span>
          </span>

          {/* ENGINEERS Badge */}
          <span className="text-cyan-300 text-[9px] tracking-widest font-mono font-semibold uppercase px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.25)]">
            ENGINEERS
          </span>
        </div>

        {showSubtext && (
          <span className="text-[9px] text-slate-400 tracking-widest font-mono font-medium uppercase -mt-0.5">
            VERTICAL TRANSPORTATION
          </span>
        )}
      </div>
    </Link>
  );
}
