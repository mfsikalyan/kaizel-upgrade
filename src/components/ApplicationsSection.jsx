import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Home, Building, Hospital, Hotel, Factory, Car, Landmark } from 'lucide-react';

export default function ApplicationsSection({ hideHeader = false }) {
  const applications = [
    {
      title: "Private Villas & Duplexes",
      desc: "Compact hydraulic & MRL home lifts designed with low pit depth and luxury interior finishes.",
      icon: Home,
      image: "/images/home_elevator.jpg",
      link: "/products/home-elevators"
    },
    {
      title: "Apartments & High-Rises",
      desc: "High-speed residential elevator group dispatch systems for continuous passenger transit.",
      icon: Building,
      image: "/images/residential_elevator.jpg",
      link: "/products/residential-elevators"
    },
    {
      title: "Hospitals & Healthcare",
      desc: "Medical stretcher lifts with priority code response and antibacterial hygienic interiors.",
      icon: Hospital,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      link: "/products/stretcher-elevators"
    },
    {
      title: "Hotels & Commercial Malls",
      desc: "Panoramic glass lifts and aesthetic passenger elevators creating iconic architectural highlights.",
      icon: Hotel,
      image: "/images/panoramic_elevator.jpg",
      link: "/products/panoramic-elevators"
    },
    {
      title: "Factories & Warehouses",
      desc: "Heavy freight lifts built to withstand forklift loading and multi-ton cargo logistics.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      link: "/products/goods-freight-elevators"
    },
    {
      title: "Automated Parking Systems",
      desc: "Multi-tier hydraulic and puzzle mechanical car stacking platforms to multiply parking slots.",
      icon: Car,
      image: "/images/hero_elevator.jpg",
      link: "/products/car-parking-systems"
    }
  ];

  return (
    <section className={hideHeader ? "py-2 sm:py-4 relative overflow-hidden" : "py-12 sm:py-16 bg-kaizel-dark relative overflow-hidden"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-kaizel-accent uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-px bg-kaizel-accent" />
                <span>BUILDING APPLICATION SECTORS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
                SOLUTIONS FOR <br />
                <span className="text-kaizel-blue">EVERY BUILDING.</span>
              </h2>
            </div>

            <p className="text-sm text-kaizel-textMuted max-w-md">
              Tailored vertical mobility configurations engineered for specific building codes, footfall densities, and structural constraints.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, idx) => {
            const Icon = app.icon;
            return (
              <Link
                key={idx}
                to={app.link}
                className="glass-panel rounded-2xl overflow-hidden border border-kaizel-borderDark hover:border-kaizel-blue/60 transition-all duration-300 group hover:-translate-y-1 shadow-card-dark flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-kaizel-darker">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kaizel-surface via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-kaizel-dark/90 backdrop-blur-md border border-kaizel-borderDark flex items-center justify-center text-kaizel-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-kaizel-accent transition-colors">
                        {app.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-kaizel-textMuted group-hover:text-kaizel-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <p className="text-xs text-kaizel-textMuted leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 text-[11px] font-mono text-kaizel-blue uppercase flex items-center gap-1">
                  <span>EXPLORE SECTOR SPECIFICATIONS</span>
                  <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
