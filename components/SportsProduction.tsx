
import React from 'react';

const SportsProduction: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Video Player - Left aligned for visual variety */}
          <div className="w-full lg:w-3/5 order-1">
            <div className="relative aspect-video w-full bg-black border border-zinc-800 group overflow-hidden shadow-2xl">
              {/* Google Drive Embed - Using preview link for embedding */}
              <iframe 
                src="https://drive.google.com/file/d/1bdp7KcNNI-z4ghgUUymsj9Y-RLCNtcUW/preview" 
                className="absolute inset-0 w-full h-full border-0"
                title="Burwood FC Season Recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* UI Decoration */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                 <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-2 py-1 rounded-sm border border-white/10">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white">SPORTS // NPL</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/5 order-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-black mb-4 block">Case Study // 02</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none mb-8">
              Burwood<br /><span className="text-zinc-500">Football Club.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-zinc-400 text-lg leading-relaxed font-light italic">
                "Translating the raw kinetic energy of the pitch into a high-octane narrative."
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Elite-level sports cinematography designed to capture the intensity of the game. A masterclass in pacing and sound design tailored for the modern sports consumer.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-zinc-900 bg-black">
                  <span className="text-[8px] uppercase tracking-widest text-zinc-500 block mb-1">Focus</span>
                  <span className="text-[10px] font-bold text-white uppercase">Season Recap</span>
                </div>
                <div className="p-4 border border-zinc-900 bg-black">
                  <span className="text-[8px] uppercase tracking-widest text-zinc-500 block mb-1">Editing</span>
                  <span className="text-[10px] font-bold text-white uppercase">High-Velocity</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-px bg-zinc-800 group-hover:w-20 transition-all duration-500"></div>
                  <span className="text-[10px] uppercase tracking-widest font-black italic text-zinc-400 group-hover:text-white transition-colors">NPL Season Review 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsProduction;
