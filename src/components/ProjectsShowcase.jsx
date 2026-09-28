import React, { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import { ArrowUpRight, MapPin, X, Building, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectsShowcase({ limit = null, hideHeader = false }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className={hideHeader ? "py-2 sm:py-4 relative overflow-hidden" : "py-12 sm:py-16 bg-kaizel-dark relative overflow-hidden"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header or Filter Bar */}
        {hideHeader ? (
          <div className="flex flex-wrap gap-2 mb-6">
            {PROJECT_CATEGORIES.map((cat) => (
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
        ) : (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-px bg-kaizel-accent" />
                <span>INSTALLATION PORTFOLIO</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
                ARCHITECTURAL <br />
                <span className="text-kaizel-blue">SHOWCASE.</span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((cat) => (
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
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="glass-panel rounded-2xl overflow-hidden border border-kaizel-borderDark hover:border-kaizel-blue/60 transition-all duration-300 group cursor-pointer hover:-translate-y-1 shadow-card-dark flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-kaizel-darker">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kaizel-surface via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-kaizel-dark/80 backdrop-blur-md border border-kaizel-borderDark text-[11px] font-mono font-medium text-kaizel-accent uppercase">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-kaizel-textMuted font-mono">
                    <MapPin className="w-3.5 h-3.5 text-kaizel-blue" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-kaizel-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-kaizel-textMuted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-kaizel-borderDark/40 flex items-center justify-between text-[11px] font-mono text-kaizel-blue uppercase">
                <span>{project.elevatorType}</span>
                <ArrowUpRight className="w-4 h-4 text-kaizel-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View all button if limit specified */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-kaizel-surface hover:bg-kaizel-surfaceHover border border-kaizel-borderDark hover:border-kaizel-blue text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all"
            >
              <span>VIEW FULL PROJECT ARCHIVE ({PROJECTS.length} PROJECTS)</span>
              <ArrowUpRight className="w-4 h-4 text-kaizel-accent" />
            </Link>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-kaizel-darker/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-kaizel-borderDark max-w-2xl w-full relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 text-kaizel-textMuted hover:text-white rounded-full bg-kaizel-surface"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-kaizel-borderDark">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-kaizel-accent">
                <span>{activeModalProject.category}</span>
                <span>•</span>
                <span>{activeModalProject.location}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white uppercase">
                {activeModalProject.title}
              </h3>

              <p className="text-sm text-kaizel-textMuted leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-kaizel-darker/80 border border-kaizel-borderDark font-mono text-xs">
              <div>
                <span className="text-kaizel-textMuted block text-[10px]">FLOOR COUNT</span>
                <span className="text-white font-semibold">{activeModalProject.floors}</span>
              </div>
              <div>
                <span className="text-kaizel-textMuted block text-[10px]">LIFT UNITS</span>
                <span className="text-white font-semibold">{activeModalProject.units}</span>
              </div>
              <div>
                <span className="text-kaizel-textMuted block text-[10px]">PAYLOAD</span>
                <span className="text-kaizel-accent font-semibold">{activeModalProject.capacity}</span>
              </div>
            </div>

            <button
              onClick={() => setActiveModalProject(null)}
              className="w-full py-3 rounded-md bg-kaizel-blue text-white font-semibold text-xs font-mono uppercase tracking-wider"
            >
              CLOSE DETAILS
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
