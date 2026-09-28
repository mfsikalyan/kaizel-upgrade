import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-kaizel-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest">
            CLIENT FEEDBACK
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-kaizel-borderDark relative shadow-card-dark space-y-8">
            <Quote className="w-16 h-16 text-kaizel-blue/30 absolute top-6 right-8 pointer-events-none" />

            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(activeTest.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            <blockquote className="font-display text-lg sm:text-2xl text-white leading-relaxed font-medium">
              "{activeTest.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-kaizel-borderDark/60">
              <div>
                <div className="font-display font-bold text-lg text-white uppercase">
                  {activeTest.author}
                </div>
                <div className="text-xs text-kaizel-accent font-mono">
                  {activeTest.role}, {activeTest.company} ({activeTest.location})
                </div>
                <div className="text-[11px] text-kaizel-textMuted font-mono mt-1">
                  PROJECT: {activeTest.project}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-kaizel-surface hover:bg-kaizel-blue border border-kaizel-borderDark text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-kaizel-surface hover:bg-kaizel-blue border border-kaizel-borderDark text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
