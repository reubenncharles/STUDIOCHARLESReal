
import React from 'react';

interface HeroProps {
  onStartProject: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(24,24,27,1)_0%,_rgba(0,0,0,1)_70%)] opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center w-full">
        <div className="flex flex-col items-center gap-2 md:gap-4 mb-4 md:mb-8">
          <span className="inline-block px-4 py-1.5 border border-zinc-800 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 animate-pulse">
            Based in Sydney • Serving Global Clients
          </span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-white font-bold">
            2M+ Monthly Interactions • 30K+ Community
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-extrabold leading-[0.95] md:leading-[0.9] tracking-tighter uppercase mb-4 md:mb-8">
          REUBEN<br />CHARLES
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <p className="text-zinc-400 text-sm md:text-xl max-w-sm md:max-w-md font-light leading-relaxed">
            Leading the evolution of visual content through DaVinci Resolve mastery and viral-first strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="#work" className="border border-zinc-800 text-white px-8 py-3.5 md:py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-center text-[10px] md:text-sm">
              The Portfolio
            </a>
            <button 
              onClick={onStartProject}
              className="bg-white text-black px-8 py-3.5 md:py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors text-center text-[10px] md:text-sm"
            >
              Start Project
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
