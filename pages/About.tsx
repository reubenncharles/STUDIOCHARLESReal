
import React from 'react';
import Services from '../components/Services';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 px-6 md:px-12 pt-24 md:pt-40 pb-32">
      <div className="max-w-7xl mx-auto">
        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold mb-4 block">Studio Story</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">REUBEN<br />CHARLES</h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Founded under the banner of <span className="text-white font-bold">Studio Charles</span>, Reuben Charles has redefined property media in Sydney by bridging the gap between traditional cinematography and high-velocity social virality.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed font-light">
              With a deep obsession for DaVinci Resolve and behavioral analytics, every frame is engineered to trigger the "save" and "share" mechanics of modern algorithms. From the NPL fields to the most exclusive penthouses in the CBD, the mission is simple: demand attention.
            </p>
          </div>
          <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 flex items-center justify-center relative group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
             <div className="z-10 text-center">
               <span className="text-[10px] uppercase tracking-[0.5em] font-black border border-white/20 px-6 py-2">Creative Director</span>
             </div>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-6 italic">Core Expertise</h2>
            <div className="h-1.5 w-32 bg-white"></div>
          </div>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default About;
