
import React from 'react';

const FeaturedProduction: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-black border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-2/5 order-2 lg:order-1">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-black mb-4 block">Case Study // 01</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none mb-8">
              Yellow Property<br />Management.
            </h2>
            <div className="space-y-6">
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                A cinematic walking tour engineered for brand authority. Moving beyond 15-second hooks into long-form property storytelling.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-zinc-900 bg-zinc-950">
                  <span className="text-[8px] uppercase tracking-widest text-zinc-500 block mb-1">Focus</span>
                  <span className="text-[10px] font-bold text-white uppercase">Walking Tour</span>
                </div>
                <div className="p-4 border border-zinc-900 bg-zinc-950">
                  <span className="text-[8px] uppercase tracking-widest text-zinc-500 block mb-1">Grade</span>
                  <span className="text-[10px] font-bold text-white uppercase">DaVinci Resolve</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-px bg-zinc-800 group-hover:w-20 transition-all duration-500"></div>
                  <span className="text-[10px] uppercase tracking-widest font-black italic">Sydney Real Estate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div className="w-full lg:w-3/5 order-1 lg:order-2">
            <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-800 group overflow-hidden shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
              {/* Using a clean, parameter-free URL to resolve "Error 153" */}
              <iframe 
                src="https://www.youtube.com/embed/iffIaziwp1M" 
                className="absolute inset-0 w-full h-full border-0"
                title="Yellow Property Management Walking Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="no-referrer"
              ></iframe>
              {/* Overlay Decoration */}
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                 <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-sm">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/70">4K REC</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduction;
