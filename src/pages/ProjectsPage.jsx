import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProjectsShowcase from '../components/ProjectsShowcase';

export default function ProjectsPage() {
  return (
    <div className="pt-16 sm:pt-20 pb-12 bg-kaizel-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Projects' }]} />

        <div className="max-w-3xl mb-6 space-y-2">
          <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-px bg-kaizel-accent" />
            <span>VERIFIED INSTALLATION ARCHIVE</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            PROJECT <span className="text-kaizel-blue">PORTFOLIO.</span>
          </h1>
          <p className="text-sm text-kaizel-textMuted leading-relaxed">
            Over 1033+ successful installations completed across high-rise residential apartments, commercial IT parks, hospitals, private villas, and manufacturing plants.
          </p>
        </div>

        <ProjectsShowcase hideHeader={true} />
      </div>
    </div>
  );
}
