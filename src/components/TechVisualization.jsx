import React, { useState } from 'react';
import { TECH_FEATURES } from '../data/technology';
import { Cpu, ShieldAlert, Sliders, Eye, Scale, Volume2, Zap, PhoneCall, Check, AlertTriangle, Radio, Activity, Lock, Unlock, VolumeX, PhoneIncoming } from 'lucide-react';

export default function TechVisualization() {
  const [activeTechId, setActiveTechId] = useState(TECH_FEATURES[0].id);
  const [simulatedOverload, setSimulatedOverload] = useState(false);
  const [simulatedBeamTrip, setSimulatedBeamTrip] = useState(false);
  const [simulatedIntercom, setSimulatedIntercom] = useState(false);
  const [doorState, setDoorState] = useState('open'); // 'open' | 'closing' | 'closed'

  const activeTech = TECH_FEATURES.find(t => t.id === activeTechId) || TECH_FEATURES[0];

  const getIcon = (id) => {
    switch (id) {
      case 'vvvf-drive': return Cpu;
      case 'ard-rescue': return ShieldAlert;
      case 'vvvf-doors': return Sliders;
      case 'light-curtain': return Eye;
      case 'overload-sensor': return Scale;
      case 'floor-sound': return Volume2;
      case 'gearless-pmsm': return Zap;
      default: return PhoneCall;
    }
  };

  const renderTechnologySchematic = (techId) => {
    switch (techId) {
      case 'overload-sensor':
        return (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-kaizel-darker/90 border border-kaizel-borderDark relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-kaizel-accent" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    DIGITAL LOAD CELL STRAIN-GAUGE MONITOR
                  </span>
                </div>
                <button
                  onClick={() => setSimulatedOverload(!simulatedOverload)}
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                    simulatedOverload
                      ? 'bg-red-500/20 border border-red-500 text-red-400 shadow-glow'
                      : 'bg-kaizel-surface hover:bg-kaizel-surfaceHover text-kaizel-accent border border-kaizel-borderDark'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{simulatedOverload ? 'RESET WEIGHT' : 'TEST OVERLOAD (1150 KG)'}</span>
                </button>
              </div>

              {/* Cabin Floor Load Diagram */}
              <div className="relative p-6 rounded-lg bg-kaizel-dark border border-kaizel-borderDark/80 flex flex-col items-center justify-center space-y-4">
                <div className="w-full max-w-md space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-kaizel-textMuted">CABIN LIVE PAYLOAD:</span>
                    <span className={simulatedOverload ? 'text-red-400 font-bold' : 'text-kaizel-accent font-bold'}>
                      {simulatedOverload ? '1150 KG (112.7% OVERLOAD)' : '680 KG (66.6% NOMINAL)'}
                    </span>
                  </div>

                  {/* Progress Weight Bar */}
                  <div className="w-full h-3 rounded-full bg-kaizel-darker overflow-hidden border border-kaizel-borderDark">
                    <div
                      className={`h-full transition-all duration-500 ${
                        simulatedOverload ? 'bg-red-500 w-[112%]' : 'bg-kaizel-accent w-[66%]'
                      }`}
                    />
                  </div>
                </div>

                {/* Alarm Warning Siren Panel */}
                {simulatedOverload ? (
                  <div className="w-full p-3 rounded-md bg-red-500/10 border border-red-500/40 text-red-400 font-mono text-xs flex items-center justify-between animate-pulse">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <span className="font-bold">ALERT: OVERLOAD CAPACITY EXCEEDED!</span>
                    </div>
                    <span className="text-[10px] bg-red-500/20 px-2 py-0.5 rounded text-red-300">DOORS HELD OPEN</span>
                  </div>
                ) : (
                  <div className="w-full p-3 rounded-md bg-kaizel-accent/10 border border-kaizel-accent/30 text-kaizel-accent font-mono text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-kaizel-accent" />
                      <span>WEIGHT WITHIN RATED MARGIN (MAX 1020 KG)</span>
                    </div>
                    <span className="text-[10px] bg-kaizel-accent/20 px-2 py-0.5 rounded text-kaizel-accent">SAFE TO DEPART</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'light-curtain':
        return (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-kaizel-darker/90 border border-kaizel-borderDark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-kaizel-accent" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    128-BEAM INFRARED OPTICAL LIGHT BARRIER
                  </span>
                </div>
                <button
                  onClick={() => setSimulatedBeamTrip(!simulatedBeamTrip)}
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all ${
                    simulatedBeamTrip
                      ? 'bg-amber-500/20 border border-amber-500 text-amber-400'
                      : 'bg-kaizel-surface hover:bg-kaizel-surfaceHover text-kaizel-accent border border-kaizel-borderDark'
                  }`}
                >
                  {simulatedBeamTrip ? 'CLEAR OBSTACLE' : 'SIMULATE OBSTACLE TRIP'}
                </button>
              </div>

              {/* Light Curtain Scanner Frame */}
              <div className="relative p-6 rounded-lg bg-kaizel-dark border border-kaizel-borderDark flex items-center justify-between">
                {/* Left Sensor Array */}
                <div className="w-4 h-32 rounded bg-kaizel-blue/30 border border-kaizel-blue flex flex-col justify-around items-center py-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-kaizel-accent animate-ping" />
                  ))}
                </div>

                {/* Simulated Infrared Beams */}
                <div className="flex-1 px-4 space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-0.5 w-full transition-all ${
                        simulatedBeamTrip && i === 2
                          ? 'bg-red-500 shadow-[0_0_8px_#ef4444]'
                          : 'bg-kaizel-accent/60 shadow-[0_0_6px_#06b6d4]'
                      }`}
                    />
                  ))}
                </div>

                {/* Right Sensor Array Receiver */}
                <div className="w-4 h-32 rounded bg-kaizel-blue/30 border border-kaizel-blue flex flex-col justify-around items-center py-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-kaizel-accent" />
                  ))}
                </div>
              </div>

              {simulatedBeamTrip && (
                <div className="mt-3 p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs flex items-center gap-2 animate-bounce">
                  <AlertTriangle className="w-4 h-4" />
                  <span>INFRARED BEAM INTERRUPTED // INSTANT AUTO-REVERSE TRIGGERED</span>
                </div>
              )}
            </div>
          </div>
        );

      case 'vvvf-drive':
        return (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-kaizel-darker/90 border border-kaizel-borderDark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-kaizel-blue" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    VVVF PWM INVERTER FREQUENCY WAVEFORM
                  </span>
                </div>
                <span className="font-mono text-xs text-kaizel-accent bg-kaizel-blue/20 px-2.5 py-1 rounded border border-kaizel-blue/40">
                  OUTPUT: 50.0 Hz (SMOOTH ACCEL RAMP)
                </span>
              </div>

              {/* Oscilloscope Waveform Box */}
              <div className="relative h-28 w-full bg-kaizel-dark rounded-lg border border-kaizel-borderDark overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full text-kaizel-accent" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <path
                    d="M 0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                  <path
                    d="M 0 50 Q 25 80, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50"
                    fill="none"
                    stroke="#00ffff"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                </svg>
                <div className="absolute top-2 left-2 text-[10px] font-mono text-kaizel-textMuted">
                  VOLTAGE RATIO (V/F): CONSTANT TORQUE
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 font-mono text-[11px] text-center">
                <div className="bg-kaizel-dark p-2 rounded border border-kaizel-borderDark">
                  <span className="text-kaizel-textMuted block text-[9px]">START CURRENT</span>
                  <span className="text-kaizel-accent font-bold">-50% SPIKE</span>
                </div>
                <div className="bg-kaizel-dark p-2 rounded border border-kaizel-borderDark">
                  <span className="text-kaizel-textMuted block text-[9px]">STOP LEVELING</span>
                  <span className="text-white font-bold">±2 MM ACCURACY</span>
                </div>
                <div className="bg-kaizel-dark p-2 rounded border border-kaizel-borderDark">
                  <span className="text-kaizel-textMuted block text-[9px]">ENERGY SAVINGS</span>
                  <span className="text-kaizel-blue font-bold">UP TO 40%</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ard-rescue':
        return (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-kaizel-darker/90 border border-kaizel-borderDark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-400" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    AUTOMATIC RESCUE FAILOVER DIAGRAM
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  GRID OUTAGE AUTO-RESCUE
                </span>
              </div>

              {/* Failover Process Flow */}
              <div className="grid grid-cols-4 gap-2 text-center font-mono text-[10px]">
                <div className="bg-kaizel-dark p-3 rounded border border-kaizel-borderDark">
                  <span className="text-red-400 block font-bold mb-1">1. POWER FAIL</span>
                  <span className="text-kaizel-textMuted">Grid Outage Detected</span>
                </div>
                <div className="bg-kaizel-dark p-3 rounded border border-amber-500/40 bg-amber-500/10">
                  <span className="text-amber-400 block font-bold mb-1">2. ARD ENGAGE</span>
                  <span className="text-kaizel-textMuted">Battery 48V Active</span>
                </div>
                <div className="bg-kaizel-dark p-3 rounded border border-kaizel-borderDark">
                  <span className="text-white block font-bold mb-1">3. SLOW DRIVE</span>
                  <span className="text-kaizel-textMuted">Travels to Nearest Floor</span>
                </div>
                <div className="bg-kaizel-dark p-3 rounded border border-kaizel-accent/40 bg-kaizel-accent/10">
                  <span className="text-kaizel-accent block font-bold mb-1">4. AUTO UNLOCK</span>
                  <span className="text-kaizel-accent">Doors Open Safely</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'vvvf-doors':
        return (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-kaizel-darker/90 border border-kaizel-borderDark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-kaizel-accent" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    SYNCHRONOUS ENCODER DOOR ACTUATOR
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setDoorState('open')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono ${doorState === 'open' ? 'bg-kaizel-blue text-white font-bold' : 'bg-kaizel-surface text-kaizel-textMuted'}`}
                  >
                    OPEN
                  </button>
                  <button
                    onClick={() => setDoorState('closed')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono ${doorState === 'closed' ? 'bg-kaizel-blue text-white font-bold' : 'bg-kaizel-surface text-kaizel-textMuted'}`}
                  >
                    CLOSE
                  </button>
                </div>
              </div>

              {/* Animated Doors Simulation */}
              <div className="relative h-28 bg-kaizel-dark rounded-lg border border-kaizel-borderDark overflow-hidden flex items-center justify-between px-2">
                <div
                  className={`h-24 bg-kaizel-surface border-r-2 border-kaizel-accent rounded-l transition-all duration-700 flex items-center justify-center ${
                    doorState === 'closed' ? 'w-1/2' : 'w-16'
                  }`}
                >
                  <span className="text-[9px] font-mono text-kaizel-accent rotate-90">LEFT DOOR</span>
                </div>
                <div
                  className={`h-24 bg-kaizel-surface border-l-2 border-kaizel-accent rounded-r transition-all duration-700 flex items-center justify-center ${
                    doorState === 'closed' ? 'w-1/2' : 'w-16'
                  }`}
                >
                  <span className="text-[9px] font-mono text-kaizel-accent -rotate-90">RIGHT DOOR</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'floor-sound':
        return (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-kaizel-darker/90 border border-kaizel-borderDark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-kaizel-accent" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    VOICE SYNTHESIZER & AUDITORY ANNUNCIATOR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-kaizel-accent bg-kaizel-accent/10 px-2 py-0.5 rounded border border-kaizel-accent/30">
                  MULTI-LINGUAL VOICE ACTIVE
                </span>
              </div>

              {/* Floor Position TFT Screen & Audio Spectrum */}
              <div className="p-4 rounded-lg bg-kaizel-dark border border-kaizel-borderDark flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-display text-2xl font-bold text-white tracking-widest flex items-center gap-2">
                    <span className="text-kaizel-accent">FLOOR 14</span>
                    <span className="text-xs font-mono text-kaizel-blue bg-kaizel-blue/20 px-2 py-0.5 rounded">▲ GOING UP</span>
                  </div>
                  <p className="text-[11px] font-mono text-kaizel-textMuted">
                    🔊 "Arriving at Floor 14. Doors opening on the right."
                  </p>
                </div>

                {/* Equalizer Wave Visualizer */}
                <div className="flex items-end gap-1 h-10">
                  {[40, 80, 60, 100, 70, 90, 50].map((h, idx) => (
                    <div
                      key={idx}
                      style={{ height: `${h}%` }}
                      className="w-1.5 bg-kaizel-accent rounded-t animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'gearless-pmsm':
        return (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-kaizel-darker/90 border border-kaizel-borderDark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-kaizel-accent" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    PERMANENT MAGNET SYNCHRONOUS MOTOR (PMSM)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-kaizel-accent bg-kaizel-blue/20 px-2.5 py-1 rounded border border-kaizel-blue/40">
                  OIL-FREE GREEN PROPULSION
                </span>
              </div>

              <div className="p-4 rounded-lg bg-kaizel-dark border border-kaizel-borderDark grid grid-cols-3 gap-3 text-center font-mono text-xs">
                <div className="p-2 bg-kaizel-darker rounded border border-kaizel-borderDark">
                  <span className="text-kaizel-textMuted block text-[9px]">ENERGY REGENERATION</span>
                  <span className="text-kaizel-accent font-bold">+45% RECOVERED</span>
                </div>
                <div className="p-2 bg-kaizel-darker rounded border border-kaizel-borderDark">
                  <span className="text-kaizel-textMuted block text-[9px]">ACOUSTIC NOISE</span>
                  <span className="text-white font-bold">38 dB (SILENT)</span>
                </div>
                <div className="p-2 bg-kaizel-darker rounded border border-kaizel-borderDark">
                  <span className="text-kaizel-textMuted block text-[9px]">GEARBOX MAINTENANCE</span>
                  <span className="text-kaizel-blue font-bold">ZERO OIL LEAKS</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'intercom-system':
      default:
        return (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-kaizel-darker/90 border border-kaizel-borderDark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-kaizel-accent" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    DUAL-WAY EMERGENCY INTERCOM CONSOLE
                  </span>
                </div>
                <button
                  onClick={() => setSimulatedIntercom(!simulatedIntercom)}
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                    simulatedIntercom
                      ? 'bg-kaizel-blue text-white shadow-glow'
                      : 'bg-kaizel-surface hover:bg-kaizel-surfaceHover text-kaizel-accent border border-kaizel-borderDark'
                  }`}
                >
                  <PhoneIncoming className="w-3.5 h-3.5" />
                  <span>{simulatedIntercom ? 'END CALL' : 'TEST SECURITY CALL'}</span>
                </button>
              </div>

              <div className="p-4 rounded-lg bg-kaizel-dark border border-kaizel-borderDark flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-kaizel-textMuted block text-[10px]">DIRECT CHANNEL LINK</span>
                  <span className={simulatedIntercom ? 'text-kaizel-accent font-bold animate-pulse' : 'text-white'}>
                    {simulatedIntercom ? 'CALL CONNECTED TO SECURITY DESK' : '24x7 KAIZEL RESPONSE DESK (STANDBY)'}
                  </span>
                </div>

                <div className={`w-3 h-3 rounded-full ${simulatedIntercom ? 'bg-kaizel-accent animate-ping' : 'bg-kaizel-textMuted'}`} />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-24 bg-kaizel-dark relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-kaizel-accent" />
            <span>CORE SPECIFICATIONS</span>
            <span className="w-8 h-px bg-kaizel-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            POWER OF <span className="text-kaizel-blue">TECHNOLOGY.</span>
          </h2>
          <p className="text-sm text-kaizel-textMuted">
            Explore the embedded microprocessors, safety locks, and drive mechanisms that power Kaizel lifts.
          </p>
        </div>

        {/* Interactive Engineering Schematic & Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Feature Buttons List */}
          <div className="lg:col-span-5 space-y-2.5">
            {TECH_FEATURES.map((tech) => {
              const Icon = getIcon(tech.id);
              const isActive = tech.id === activeTechId;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveTechId(tech.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-kaizel-blue/20 border-kaizel-blue text-white shadow-glow'
                      : 'bg-kaizel-surface/60 border-kaizel-borderDark text-kaizel-textMuted hover:border-kaizel-blue/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-kaizel-blue text-white' : 'bg-kaizel-surfaceHover text-kaizel-accent group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-white uppercase">
                        {tech.title}
                      </div>
                      <div className="text-[11px] font-mono text-kaizel-textMuted">
                        {tech.category}
                      </div>
                    </div>
                  </div>
                  
                  {isActive && <Check className="w-4 h-4 text-kaizel-accent" />}
                </button>
              );
            })}
          </div>

          {/* Right Live Interactive Technical Spec Visualizer */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-kaizel-borderDark h-full flex flex-col justify-between relative overflow-hidden shadow-card-dark">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Cpu className="w-48 h-48 text-kaizel-blue" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-kaizel-blue/20 border border-kaizel-blue/40 font-mono text-xs text-kaizel-accent uppercase">
                    {activeTech.category}
                  </span>
                  <span className="font-mono text-xs text-kaizel-textMuted">
                    SYSTEM REF: K-TECH-{activeTech.id.toUpperCase()}
                  </span>
                </div>

                {/* Side-by-side on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                  {/* Realistic Hardware Image Banner */}
                  {activeTech.image && (
                    <div className="relative aspect-[4/3] md:aspect-auto w-full h-full min-h-[200px] rounded-xl overflow-hidden border border-kaizel-borderDark bg-kaizel-darker shadow-lg group">
                      <img
                        key={activeTech.id}
                        src={activeTech.image}
                        alt={activeTech.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-kaizel-darker via-transparent to-transparent opacity-85" />
                      
                      {/* Hardware Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-kaizel-dark/90 backdrop-blur-md border border-kaizel-borderDark text-[10px] font-mono text-kaizel-accent flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-kaizel-accent animate-pulse" />
                        <span>HARDWARE SNAPSHOT</span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 px-2.5 py-1 rounded bg-kaizel-dark/90 backdrop-blur-md border border-kaizel-borderDark text-[10px] font-mono text-white/90 truncate">
                        {activeTech.title.toUpperCase()}
                      </div>
                    </div>
                  )}

                  {/* High-Tech Dedicated Schematic Visualizer for Active Technology */}
                  <div className="w-full h-full flex flex-col justify-center">
                    {renderTechnologySchematic(activeTech.id)}
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">
                  {activeTech.title}
                </h3>

                <p className="text-sm font-mono text-kaizel-accent">
                  // {activeTech.subtitle}
                </p>

                <p className="text-sm text-kaizel-textMuted leading-relaxed pt-2">
                  {activeTech.description}
                </p>

                {/* Simulated Engineering Diagnostic Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-kaizel-borderDark/60 font-mono text-xs">
                  <div className="bg-kaizel-darker/80 p-3 rounded border border-kaizel-borderDark">
                    <span className="text-kaizel-textMuted block text-[10px]">OPERATIONAL STATE</span>
                    <span className="text-kaizel-accent font-semibold">100% NOMINAL</span>
                  </div>
                  <div className="bg-kaizel-darker/80 p-3 rounded border border-kaizel-borderDark">
                    <span className="text-kaizel-textMuted block text-[10px]">SAFETY COMPLIANCE</span>
                    <span className="text-white font-semibold">IS 14665 SEC 4</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 text-xs font-mono text-kaizel-textMuted flex items-center justify-between border-t border-kaizel-borderDark/40 mt-6">
                <span>KAIZEL R&D LABS // BHUBANESWAR</span>
                <span className="text-kaizel-accent">ONLINE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
