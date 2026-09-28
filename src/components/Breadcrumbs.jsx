import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-kaizel-textMuted py-4 border-b border-kaizel-borderDark/40 mb-8">
      <Link to="/" className="hover:text-white flex items-center gap-1">
        <Home className="w-3.5 h-3.5 text-kaizel-blue" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-kaizel-borderDark" />
          {item.path ? (
            <Link to={item.path} className="hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="text-kaizel-accent font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
