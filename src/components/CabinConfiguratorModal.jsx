import React, { useState } from 'react';
import { X, Check, Sparkles, Sliders, ArrowRight, Eye, Layers, Sun, Shield, RotateCcw } from 'lucide-react';
import ThreeCabinCanvas from './ThreeCabinCanvas';

export default function CabinConfiguratorModal({ isOpen, onClose, onApplyToQuote }) {
  const [wallFinish, setWallFinish] = useState('gold');
  const [flooring, setFlooring] = useState('marble');
  const [lighting, setLighting] = useState('recessed');
  const [viewAngle, setViewAngle] = useState('perspective'); // 'perspective' | 'front' | 'panoramic'
  const [activeFloor, setActiveFloor] = useState(14);

  if (!isOpen) return null;

  // Options definitions with visual swatches & metadata
  const wallOptions = [
    {
      id: 'steel',
      name: 'Hairline Stainless Steel',
      category: 'Industrial Clean',
      swatchBg: 'bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500',
      description: 'Durable, scratch-resistant brushed metallic finish with mirror vertical inlay strips.'
    },
    {
      id: 'gold',
      name: 'Champagne Gold Anodized',
      category: 'Luxury Titanium',
      swatchBg: 'bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700',
      description: 'Warm, opulent titanium gold metallic coating with polished gold mirror accents.'
    },
    {
      id: 'wood',
      name: 'Teak Wood Veneer',
      category: 'Architectural Timber',
      swatchBg: 'bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-900',
      description: 'Warm natural wood grain timber panels with satin finish and metallic trim.'
    },
    {
      id: 'glass',
      name: 'Full Panoramic Glass',
      category: '180° Scenic View',
      swatchBg: 'bg-gradient-to-r from-cyan-600 via-blue-400 to-sky-700',
      description: '180-degree structural clear laminated safety glass with exterior skyline view.'
    }
  ];

  const flooringOptions = [
    {
      id: 'marble',
      name: 'Italian White Marble',
      swatchBg: 'bg-gradient-to-r from-slate-100 via-slate-300 to-slate-200',
      description: 'Polished white Calacatta marble slab with subtle grey veins.'
    },
    {
      id: 'granite',
      name: 'Black Granite Tile',
      swatchBg: 'bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900',
      description: 'High durability deep charcoal polished granite with grid joints.'
    },
    {
      id: 'diamond',
      name: 'Diamond Steel Plate',
      swatchBg: 'bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700',
      description: 'Non-slip heavy duty industrial steel checker plate.'
    },
    {
      id: 'vinyl',
      name: 'Anti-Microbial Vinyl',
      swatchBg: 'bg-gradient-to-r from-teal-800 via-emerald-700 to-teal-900',
      description: 'Hygienic, smooth anti-bacterial medical grade floor.'
    }
  ];

  const lightingOptions = [
    {
      id: 'recessed',
      name: 'Indirect Recessed LED',
      desc: 'Warm indirect perimeter ceiling glow casting ambient light down the cabin walls.'
    },
    {
      id: 'luminous',
      name: 'Full Luminous Acrylic',
      desc: 'High brightness uniform white light diffuser panel for modern commercial towers.'
    },
    {
      id: 'starry',
      name: 'Starry Sky Fiberoptic',
      desc: 'Decorative fiber optic constellation pinpoints on a deep dark ceiling panel.'
    }
  ];

  const activeWall = wallOptions.find(w => w.id === wallFinish) || wallOptions[0];
  const activeFloorOption = flooringOptions.find(f => f.id === flooring) || flooringOptions[0];
  const activeLight = lightingOptions.find(l => l.id === lighting) || lightingOptions[0];

  return (
    <div className="fixed inset-0 z-50 bg-kaizel-darker/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-kaizel-borderDark max-w-6xl w-full relative space-y-6 max-h-[95vh] overflow-y-auto shadow-card-dark">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4 border-b border-kaizel-borderDark">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-kaizel-blue/20 border border-kaizel-blue/40 flex items-center justify-center text-kaizel-accent shadow-glow">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                INTERACTIVE 3D CABIN STUDIO
              </h3>
              <p className="text-xs text-kaizel-textMuted font-mono">
                Real-Time WebGL 3D Elevator Interior Configurator
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-kaizel-surface hover:bg-kaizel-surfaceHover text-kaizel-textMuted hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Real Three.js WebGL 3D Rendered Elevator Cabin Viewport */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* View Angle Controls */}
            <div className="flex items-center justify-between bg-kaizel-darker p-1.5 rounded-xl border border-kaizel-borderDark text-xs font-mono">
              <span className="text-kaizel-textMuted px-2 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-kaizel-accent" />
                <span>3D VIEW PRESET</span>
              </span>
              <div className="flex items-center gap-1">
                {[
                  { id: 'perspective', label: '3D ORBIT' },
                  { id: 'front', label: 'FRONT' },
                  { id: 'panoramic', label: 'WIDE ANGLE' }
                ].map(angle => (
                  <button
                    key={angle.id}
                    onClick={() => setViewAngle(angle.id)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      viewAngle === angle.id
                        ? 'bg-kaizel-blue text-white shadow-glow'
                        : 'text-kaizel-textMuted hover:text-white'
                    }`}
                  >
                    {angle.label}
                  </button>
                ))}
              </div>
            </div>

            {/* REAL THREE.JS 3D CANVAS VIEWPORT */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-kaizel-borderDark/80 shadow-2xl bg-kaizel-darker">
              <ThreeCabinCanvas
                wallFinish={wallFinish}
                flooring={flooring}
                lighting={lighting}
                viewAngle={viewAngle}
                activeFloor={activeFloor}
              />

              {/* Dynamic Overlay Badges */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-panel text-xs text-kaizel-textLight flex items-center justify-between font-mono pointer-events-none">
                <span className="text-kaizel-accent font-bold">
                  {activeWall.name.toUpperCase()}
                </span>
                <span className="text-white">
                  FLOOR: {activeFloorOption.name}
                </span>
              </div>
            </div>

            {/* COP Floor Button Selector Panel */}
            <div className="p-3.5 rounded-xl bg-kaizel-surface/60 border border-kaizel-borderDark text-xs font-mono flex items-center justify-between">
              <span className="text-kaizel-textMuted flex items-center gap-2">
                <span>ACTIVE COP FLOOR:</span>
                <span className="text-kaizel-accent font-bold text-sm">FL {activeFloor} ▲</span>
              </span>
              <div className="flex gap-1.5">
                {[16, 14, 12, 8, 4, 'G'].map(num => (
                  <button
                    key={num}
                    onClick={() => typeof num === 'number' && setActiveFloor(num)}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold border transition-colors ${
                      activeFloor === num
                        ? 'bg-kaizel-blue text-white border-kaizel-accent'
                        : 'bg-kaizel-darker text-kaizel-textMuted border-kaizel-borderDark hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Material Swatch Selection Panel */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Cabin Wall Finish Swatches */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-kaizel-accent uppercase font-extrabold tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>1. SELECT CABIN WALL FINISH</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {wallOptions.map((opt) => {
                  const isSelected = wallFinish === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setWallFinish(opt.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 group ${
                        isSelected
                          ? 'bg-kaizel-blue/20 border-kaizel-blue text-white shadow-glow'
                          : 'bg-kaizel-darker border-kaizel-borderDark text-kaizel-textMuted hover:border-kaizel-blue/40 hover:text-white'
                      }`}
                    >
                      {/* Swatch Thumbnail */}
                      <div className={`w-10 h-10 rounded-lg ${opt.swatchBg} border border-white/30 flex-shrink-0 shadow-md group-hover:scale-105 transition-transform`} />

                      <div className="space-y-0.5 min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-xs text-white uppercase truncate">
                            {opt.name}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-kaizel-accent flex-shrink-0" />}
                        </div>
                        <p className="text-[10px] text-kaizel-textMuted line-clamp-2 leading-snug">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Flooring Material Swatches */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-kaizel-accent uppercase font-extrabold tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>2. SELECT FLOORING MATERIAL</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {flooringOptions.map((opt) => {
                  const isSelected = flooring === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setFlooring(opt.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'bg-kaizel-blue/20 border-kaizel-blue text-white shadow-glow'
                          : 'bg-kaizel-darker border-kaizel-borderDark text-kaizel-textMuted hover:text-white'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-md ${opt.swatchBg} border border-white/20 flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-white truncate">{opt.name}</div>
                        <div className="text-[10px] text-kaizel-textMuted truncate">{opt.description}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-kaizel-accent flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Ambient Ceiling Lighting */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-kaizel-accent uppercase font-extrabold tracking-wider flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <span>3. SELECT AMBIENT CEILING LIGHTING</span>
              </label>

              <div className="space-y-2">
                {lightingOptions.map((opt) => {
                  const isSelected = lighting === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setLighting(opt.id)}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-kaizel-blue/20 border-kaizel-blue text-white shadow-glow'
                          : 'bg-kaizel-darker border-kaizel-borderDark text-kaizel-textMuted hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-white">{opt.name}</div>
                        <div className="text-[10px] text-kaizel-textMuted">{opt.desc}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-kaizel-accent flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-kaizel-borderDark flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onApplyToQuote({
                    wallFinish: activeWall.name,
                    flooring: activeFloorOption.name,
                    lighting: activeLight.name
                  });
                }}
                className="flex-1 py-4 rounded-xl bg-kaizel-blue hover:bg-kaizel-blueHover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>APPLY 3D CONFIGURATION TO QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
