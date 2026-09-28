import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { 
  ArrowUpRight, ShieldCheck, CheckCircle2, Cpu, Users, Gauge, 
  Layers, Wrench, Sparkles, PhoneCall, ArrowLeft 
} from 'lucide-react';

export default function ProductDetailPage({ onOpenQuoteModal, onOpenConfiguratorModal }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-kaizel-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Products', path: '/products' },
            { label: product.name }
          ]}
        />

        {/* 2. Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kaizel-blue/20 border border-kaizel-blue/40 text-kaizel-accent font-mono text-xs font-semibold uppercase">
              <span>{product.category} ELEVATOR SYSTEM</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              {product.name}
            </h1>

            <p className="text-base sm:text-lg text-kaizel-accent font-mono font-semibold">
              // {product.tagline}
            </p>

            <p className="text-sm sm:text-base text-kaizel-textMuted leading-relaxed">
              {product.description}
            </p>

            {/* Key Spec Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-kaizel-surface border border-kaizel-borderDark">
                <span className="text-kaizel-textMuted block text-[10px]">PAYLOAD CAPACITY</span>
                <span className="text-white font-bold">{product.specs.capacity}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-kaizel-surface border border-kaizel-borderDark">
                <span className="text-kaizel-textMuted block text-[10px]">RATED SPEED</span>
                <span className="text-kaizel-accent font-bold">{product.specs.speed}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-kaizel-surface border border-kaizel-borderDark col-span-2 sm:col-span-1">
                <span className="text-kaizel-textMuted block text-[10px]">DRIVE SYSTEM</span>
                <span className="text-white font-bold">{product.specs.driveType.split(' ')[0]}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-md bg-kaizel-blue hover:bg-kaizel-blueHover text-white text-xs font-mono font-semibold uppercase tracking-wider shadow-glow flex items-center gap-2"
              >
                <span>REQUEST SPEC & QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConfiguratorModal}
                className="px-6 py-4 rounded-md bg-kaizel-surface hover:bg-kaizel-surfaceHover border border-kaizel-borderDark text-white text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-kaizel-accent" />
                <span>CONFIGURE CABIN</span>
              </button>
            </div>
          </div>

          {/* Right Product Media Showcase */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-kaizel-borderDark shadow-card-dark bg-kaizel-darker group">
              <img
                src={product.heroImage}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kaizel-darker via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel text-xs text-kaizel-textLight flex items-center justify-between font-mono">
                <span>ISO 9001:2015 CERTIFIED</span>
                <span className="text-kaizel-accent">IS 14665 COMPLIANT</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Technical Specifications Table */}
        <div className="glass-panel p-8 rounded-3xl border border-kaizel-borderDark mb-16 space-y-6 shadow-card-dark">
          <div className="flex justify-between items-center pb-4 border-b border-kaizel-borderDark">
            <h2 className="font-display text-2xl font-bold text-white uppercase flex items-center gap-2">
              <Cpu className="w-5 h-5 text-kaizel-accent" />
              TECHNICAL SPECIFICATIONS TABLE
            </h2>
            <span className="text-xs font-mono text-kaizel-textMuted uppercase">ENGINEERING DATA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="p-4 rounded-xl bg-kaizel-darker border border-kaizel-borderDark flex justify-between items-center">
                <span className="text-kaizel-textMuted uppercase">{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className="text-white font-bold text-right">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Key Features & Safety Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          
          {/* Features */}
          <div className="glass-panel p-8 rounded-3xl border border-kaizel-borderDark space-y-6">
            <h3 className="font-display text-xl font-bold text-white uppercase flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-kaizel-accent" />
              ENGINEERING FEATURES
            </h3>
            <ul className="space-y-3">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-kaizel-textMuted leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-kaizel-accent mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Systems */}
          <div className="glass-panel p-8 rounded-3xl border border-kaizel-borderDark space-y-6">
            <h3 className="font-display text-xl font-bold text-white uppercase flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-kaizel-blue" />
              INTEGRATED SAFETY SYSTEMS
            </h3>
            <ul className="space-y-3">
              {product.safetySystems.map((saf, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-kaizel-textMuted leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-kaizel-accent flex-shrink-0 mt-0.5" />
                  <span>{saf}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 5. Applications & Finishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-kaizel-borderDark space-y-4">
            <h3 className="font-display text-lg font-bold text-white uppercase">
              RECOMMENDED BUILDING APPLICATIONS
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-xs font-mono text-kaizel-accent">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-kaizel-borderDark space-y-4">
            <h3 className="font-display text-lg font-bold text-white uppercase">
              AVAILABLE CABIN FINISH OPTIONS
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.finishes.map((fin, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-xs font-mono text-white">
                  {fin}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 6. Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8 pt-8 border-t border-kaizel-borderDark">
            <h3 className="font-display text-2xl font-bold text-white uppercase">
              RELATED {product.category.toUpperCase()} ELEVATORS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
