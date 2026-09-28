import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Calculator, Send } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

export default function QuoteEstimatorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [buildingType, setBuildingType] = useState('Private Villa');
  const [floors, setFloors] = useState('G+3 (4 Stops)');
  const [passengers, setPassengers] = useState('6 Persons (408 kg)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFinish = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-kaizel-darker/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-kaizel-borderDark max-w-xl w-full relative space-y-6 shadow-card-dark">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-kaizel-borderDark">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-kaizel-accent" />
            <h3 className="font-display text-xl font-bold text-white uppercase">
              ELEVATOR REQUIREMENT ESTIMATOR
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-kaizel-surface hover:bg-kaizel-surfaceHover text-kaizel-textMuted hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-kaizel-blue/20 text-kaizel-accent border border-kaizel-blue flex items-center justify-center mx-auto shadow-glow">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-display text-2xl font-bold text-white uppercase">
              ESTIMATION SUBMITTED
            </h4>
            <p className="text-xs text-kaizel-textMuted max-w-md mx-auto">
              Our engineering team has received your details for <strong className="text-white">{buildingType}</strong> ({floors}, {passengers}). We will send your technical drawing & quote to {email || phone}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-kaizel-blue text-white text-xs font-mono font-bold uppercase tracking-wider"
            >
              CLOSE WIZARD
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between text-xs font-mono border-b border-kaizel-borderDark/40 pb-3">
              <span className={step >= 1 ? "text-kaizel-accent font-bold" : "text-kaizel-textMuted"}>
                1. BUILDING
              </span>
              <span>→</span>
              <span className={step >= 2 ? "text-kaizel-accent font-bold" : "text-kaizel-textMuted"}>
                2. CAPACITY
              </span>
              <span>→</span>
              <span className={step >= 3 ? "text-kaizel-accent font-bold" : "text-kaizel-textMuted"}>
                3. CONTACT
              </span>
            </div>

            {/* Step 1: Building Type */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <label className="text-xs font-mono text-kaizel-accent uppercase font-bold block">
                  SELECT YOUR BUILDING CATEGORY
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Private Villa", "Apartment Complex", "Commercial Office", 
                    "Hospital / Clinic", "Hotel / Resort", "Industrial Warehouse"
                  ].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBuildingType(b)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                        buildingType === b
                          ? 'bg-kaizel-blue/20 border-kaizel-blue text-white shadow-glow'
                          : 'bg-kaizel-darker border-kaizel-borderDark text-kaizel-textMuted hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-lg bg-kaizel-blue text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    <span>NEXT: CAPACITY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Floors & Passengers */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-kaizel-accent uppercase font-bold block">
                    NUMBER OF STOPS / FLOORS
                  </label>
                  <select
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white text-xs font-mono"
                  >
                    <option value="G+2 (3 Stops)">G+2 (3 Stops)</option>
                    <option value="G+3 (4 Stops)">G+3 (4 Stops)</option>
                    <option value="G+5 (6 Stops)">G+5 (6 Stops)</option>
                    <option value="G+10 (11 Stops)">G+10 (11 Stops)</option>
                    <option value="G+20+ High Rise">G+20+ High Rise</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-kaizel-accent uppercase font-bold block">
                    PASSENGER / PAYLOAD CAPACITY
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white text-xs font-mono"
                  >
                    <option value="4 Persons (272 kg)">4 Persons (272 kg)</option>
                    <option value="6 Persons (408 kg)">6 Persons (408 kg)</option>
                    <option value="8 Persons (544 kg)">8 Persons (544 kg)</option>
                    <option value="13 Persons (884 kg)">13 Persons (884 kg)</option>
                    <option value="Medical Stretcher (1600 kg)">Medical Stretcher (1600 kg)</option>
                    <option value="Heavy Freight (3000 kg+)">Heavy Freight (3000 kg+)</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded bg-kaizel-surface text-kaizel-textMuted text-xs font-mono uppercase"
                  >
                    BACK
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-lg bg-kaizel-blue text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    <span>NEXT: FINAL CONTACT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Form */}
            {step === 3 && (
              <form onSubmit={handleFinish} className="space-y-4 animate-fadeIn">
                <div className="p-3 rounded-lg bg-kaizel-surface/50 border border-kaizel-borderDark font-mono text-xs text-kaizel-textMuted">
                  SUMMARY: <strong className="text-white">{buildingType}</strong> | {floors} | {passengers}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-kaizel-textLight uppercase">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded bg-kaizel-darker border border-kaizel-borderDark text-white text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-kaizel-textLight uppercase">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91..."
                      className="w-full px-4 py-2.5 rounded bg-kaizel-darker border border-kaizel-borderDark text-white text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-kaizel-textLight uppercase">EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full px-4 py-2.5 rounded bg-kaizel-darker border border-kaizel-borderDark text-white text-xs"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 rounded bg-kaizel-surface text-kaizel-textMuted text-xs font-mono uppercase"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-kaizel-blue text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-glow"
                  >
                    <span>SUBMIT ESTIMATION</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
