import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductGrid({ limit = null }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="py-24 bg-kaizel-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-kaizel-accent" />
              <span>PRODUCT RANGE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              VERTICAL MOBILITY FOR <br />
              <span className="text-kaizel-blue">EVERY ENVIRONMENT.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md text-xs font-mono font-medium transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Optional View All CTA if limited */}
        {limit && PRODUCTS.length > limit && (
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-kaizel-surface hover:bg-kaizel-surfaceHover border border-kaizel-borderDark hover:border-kaizel-blue text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all group"
            >
              <span>VIEW ENTIRE CATALOG ({PRODUCTS.length} PRODUCTS)</span>
              <ArrowRight className="w-4 h-4 text-kaizel-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
