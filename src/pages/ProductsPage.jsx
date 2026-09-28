import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function ProductsPage({ onOpenQuoteModal, onOpenConfiguratorModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 sm:pt-20 pb-12 bg-kaizel-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: 'Products' }]} />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-kaizel-accent" />
              <span>FULL ELEVATOR & MOBILITY CATALOG</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              ELEVATOR <span className="text-kaizel-blue">SOLUTIONS.</span>
            </h1>
            <p className="text-sm text-kaizel-textMuted max-w-xl">
              Explore our complete range of certified elevator systems, panoramic glass lifts, stretchers, and car parking stackers.
            </p>
          </div>

          <button
            onClick={onOpenConfiguratorModal}
            className="px-5 py-3 rounded-lg bg-kaizel-surface hover:bg-kaizel-surfaceHover border border-kaizel-borderDark hover:border-kaizel-blue text-white text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2 shadow-glow flex-shrink-0"
          >
            <Sparkles className="w-4 h-4 text-kaizel-accent" />
            <span>OPEN 3D CABIN STUDIO</span>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass-panel p-4 rounded-2xl border border-kaizel-borderDark mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-kaizel-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search elevators, specs..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-kaizel-darker border border-kaizel-borderDark text-xs text-white placeholder-kaizel-textMuted focus:outline-none focus:border-kaizel-blue transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-kaizel-blue text-white shadow-glow'
                    : 'bg-kaizel-surface hover:bg-kaizel-surfaceHover text-kaizel-textMuted hover:text-white border border-kaizel-borderDark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-kaizel-textMuted font-mono text-sm">
            No products match your search query "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
