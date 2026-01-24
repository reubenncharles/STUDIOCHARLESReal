
import React from 'react';
import WorkGrid from '../components/WorkGrid';
import FeaturedProduction from '../components/FeaturedProduction';
import SportsProduction from '../components/SportsProduction';
import AideatrProduction from '../components/AideatrProduction';

const Portfolio: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-24 md:pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold mb-4 block">Work Portfolio</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8 italic">Production Archive.</h1>
          <div className="h-2 w-48 bg-white mb-12"></div>
          <p className="text-zinc-400 text-sm md:text-xl max-w-2xl leading-relaxed uppercase tracking-widest font-light">
            From high-velocity social hooks to cinematic long-form narratives.
            <span className="text-white"> Engineered for dominance across every platform.</span>
          </p>
        </div>
      </div>

      {/* Featured Production Section 01 */}
      <FeaturedProduction />

      {/* Featured Production Section 02 - Burwood FC */}
      <SportsProduction />

      {/* Featured Production Section 03 - aideatr */}
      <AideatrProduction />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <div className="mb-20 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold mb-4 block">Social Feed</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">The POV Series.</h2>
        </div>
        <div className="bg-zinc-950 p-12 md:p-24 border border-zinc-900 rounded-[2.5rem] md:rounded-[4rem]">
          <WorkGrid />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
