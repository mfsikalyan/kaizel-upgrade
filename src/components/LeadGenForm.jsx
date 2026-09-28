import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';

export default function LeadGenForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    projectType: 'Residential Villa / Home',
    elevatorRequirement: 'Home Elevators',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Please fill in all required fields (*)');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section className={compact ? "py-2 sm:py-4 relative overflow-hidden" : "py-12 sm:py-16 bg-kaizel-dark relative overflow-hidden"} id="quote-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Hotline & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-px bg-kaizel-accent" />
                <span>CONSULT WITH OUR ENGINEERS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
                LET'S BUILD THE <br />
                <span className="text-kaizel-blue">RIGHT VERTICAL SOLUTION.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-kaizel-textMuted leading-relaxed">
              Whether you are planning a new architectural project, adding a home lift to a villa, or upgrading existing elevators, our engineering team will provide accurate shaft drawings, load estimations, and competitive quotes.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href={`tel:${COMPANY_INFO.tollFree}`}
                className="glass-panel p-5 rounded-2xl border border-kaizel-borderDark hover:border-kaizel-blue transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-kaizel-blue flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-kaizel-textMuted uppercase">Toll Free Engineering Helpline</div>
                  <div className="text-xl font-bold font-display text-white">{COMPANY_INFO.tollFree}</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="glass-panel p-5 rounded-2xl border border-kaizel-borderDark hover:border-kaizel-blue transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-kaizel-surfaceHover flex items-center justify-center text-kaizel-accent group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-kaizel-textMuted uppercase">Official Inquiry Email</div>
                  <div className="text-sm font-semibold text-white">{COMPANY_INFO.email}</div>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-kaizel-surface/50 border border-kaizel-borderDark flex items-center gap-3 text-xs text-kaizel-textMuted">
              <ShieldCheck className="w-5 h-5 text-kaizel-accent flex-shrink-0" />
              <span>ISO 9001:2015 Quality Assured Consultation. Zero Spam Guarantee.</span>
            </div>
          </div>

          {/* Right Column: Interactive Lead Gen Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-kaizel-borderDark shadow-card-dark relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-kaizel-blue/20 text-kaizel-accent border border-kaizel-blue flex items-center justify-center mx-auto shadow-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white uppercase">
                      QUOTE REQUEST RECEIVED
                    </h3>
                    <p className="text-sm text-kaizel-textMuted max-w-md mx-auto">
                      Thank you <strong className="text-white">{formData.name}</strong>. Our engineering specialist will review your specifications and reach out to you within 2 business hours.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '', company: '', email: '', phone: '', city: '',
                        projectType: 'Residential Villa / Home', elevatorRequirement: 'Home Elevators', message: ''
                      });
                    }}
                    className="px-6 py-3 rounded-md bg-kaizel-surface border border-kaizel-borderDark text-xs font-mono text-white uppercase tracking-wider hover:bg-kaizel-surfaceHover"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex justify-between items-center pb-2 border-b border-kaizel-borderDark">
                    <h3 className="font-display text-xl font-bold text-white uppercase">
                      REQUEST A FORMAL QUOTE
                    </h3>
                    <span className="text-[11px] font-mono text-kaizel-textMuted">* Required Fields</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-kaizel-textLight uppercase font-medium">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Mohanty"
                        className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white placeholder-kaizel-textMuted text-sm focus:outline-none focus:border-kaizel-blue transition-colors"
                        required
                      />
                    </div>

                    {/* Company / Organization */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-kaizel-textLight uppercase font-medium">
                        COMPANY / ESTATE
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Horizon Developers"
                        className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white placeholder-kaizel-textMuted text-sm focus:outline-none focus:border-kaizel-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-kaizel-textLight uppercase font-medium">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white placeholder-kaizel-textMuted text-sm focus:outline-none focus:border-kaizel-blue transition-colors"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-kaizel-textLight uppercase font-medium">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white placeholder-kaizel-textMuted text-sm focus:outline-none focus:border-kaizel-blue transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* City */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-kaizel-textLight uppercase font-medium">
                        CITY / LOCATION
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Bhubaneswar, Cuttack..."
                        className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white placeholder-kaizel-textMuted text-sm focus:outline-none focus:border-kaizel-blue transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-kaizel-textLight uppercase font-medium">
                        PROJECT TYPE
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white text-sm focus:outline-none focus:border-kaizel-blue transition-colors"
                      >
                        <option value="Residential Villa / Home">Residential Villa / Home</option>
                        <option value="Apartment / Housing Society">Apartment / Housing Society</option>
                        <option value="Commercial Complex / Mall">Commercial Complex / Mall</option>
                        <option value="Hospital / Medical Facility">Hospital / Medical Facility</option>
                        <option value="Industrial Plant / Warehouse">Industrial Plant / Warehouse</option>
                        <option value="Parking Garage">Parking Garage</option>
                      </select>
                    </div>

                    {/* Elevator Requirement */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-kaizel-textLight uppercase font-medium">
                        ELEVATOR REQUIREMENT
                      </label>
                      <select
                        name="elevatorRequirement"
                        value={formData.elevatorRequirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white text-sm focus:outline-none focus:border-kaizel-blue transition-colors"
                      >
                        {PRODUCTS.map(p => (
                          <option key={p.id} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-kaizel-textLight uppercase font-medium">
                      PROJECT DETAILS & SHAFT DIMENSIONS (OPTIONAL)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention floor count (G+3), shaft size, desired cabin finish..."
                      className="w-full px-4 py-3 rounded-lg bg-kaizel-darker border border-kaizel-borderDark text-white placeholder-kaizel-textMuted text-sm focus:outline-none focus:border-kaizel-blue transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-kaizel-blue hover:bg-kaizel-blueHover text-white font-display font-bold text-xs uppercase tracking-widest transition-all shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2"
                  >
                    <span>REQUEST A QUOTE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
