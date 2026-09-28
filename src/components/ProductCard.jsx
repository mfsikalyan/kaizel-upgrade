import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Users, Gauge } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group glass-panel rounded-2xl overflow-hidden border border-kaizel-borderDark hover:border-kaizel-blue/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-card-dark"
    >
      <div>
        {/* Card Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-kaizel-darker">
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kaizel-surface via-transparent to-transparent opacity-80" />
          
          {/* Category Tag */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-kaizel-dark/80 backdrop-blur-md border border-kaizel-borderDark text-[11px] font-mono font-medium text-kaizel-accent uppercase">
            {product.category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-xl font-bold text-white group-hover:text-kaizel-accent transition-colors">
              {product.name}
            </h3>
            <div className="w-8 h-8 rounded-full bg-kaizel-surfaceHover group-hover:bg-kaizel-blue text-kaizel-textMuted group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-xs text-kaizel-textMuted leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* Footer Specs Pill */}
      <div className="px-6 pb-6 pt-2 border-t border-kaizel-borderDark/40 flex items-center justify-between text-[11px] font-mono text-kaizel-textMuted">
        <span className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-kaizel-blue" />
          <span>{product.specs.capacity.split('(')[0]}</span>
        </span>
        <span className="flex items-center gap-1">
          <Gauge className="w-3.5 h-3.5 text-kaizel-accent" />
          <span>{product.specs.speed}</span>
        </span>
      </div>
    </Link>
  );
}
