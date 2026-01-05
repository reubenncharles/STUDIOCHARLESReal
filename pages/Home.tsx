
import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import WorkGrid from '../components/WorkGrid';
import FeaturedProduction from '../components/FeaturedProduction';
import SportsProduction from '../components/SportsProduction';

interface HomeProps {
  onStartProject: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartProject }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero onStartProject={onStartProject} />
      
      <section className="bg-black py-12 md:py-24 border-y border-zinc-900">
        <Clients />
      </section>

      {/* Featured Production 01 - Real Estate */}
      <FeaturedProduction />

      {/* Featured Production 02 - Sports */}
      <SportsProduction />

      {/* Portfolio Feed integrated into Home */}
      <section id="work" className="py-16 md:py-32 px-4 md:px-12 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-20 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold mb-2 md:mb-4 block">Viral Short-form</span>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter italic leading-tight">The POV Series.</h2>
          </div>
          <div className="bg-zinc-950 p-6 md:p-24 border border-zinc-900 rounded-[2.5rem] md:rounded-[4rem]">
            <WorkGrid />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-12 text-center bg-zinc-950">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-7xl font-extrabold uppercase tracking-tighter italic leading-none">Converting attention into inquiries.</h2>
          <p className="text-zinc-500 text-base md:text-xl font-light uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            Studio Charles is a Sydney-based creative lab specializing in short-form virality and high-end property media.
          </p>
          <div className="h-px w-16 md:w-24 bg-zinc-800 mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
