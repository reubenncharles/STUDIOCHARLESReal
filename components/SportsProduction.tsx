import React, { useState } from 'react';
import { getProjectById } from '../data/projects';

const SportsProduction: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const project = getProjectById('burwood-fc');

  if (!project) return null;

  return (
    <section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-bold mb-4 block">
                Featured Production
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
                Sports Content.
              </h2>
            </div>
            <div className="flex items-center gap-4">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-800 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative">
          <div className="bg-black border border-zinc-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
            {/* Video Player Area */}
            <div className="relative aspect-video bg-gradient-to-br from-zinc-900 to-black">
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={project.videoUrl}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* Thumbnail/Placeholder with gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-zinc-900 to-black">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    {/* Client Logo/Title Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      <span className="text-blue-500 text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-4">
                        {project.client}
                      </span>
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm md:text-base max-w-xl mb-8">
                        {project.description}
                      </p>

                      {/* Play Button */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="group relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-300"
                        aria-label="Play video"
                      >
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30" />
                      </button>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/60 border border-zinc-700 text-zinc-300 text-xs font-mono">
                    {project.duration}
                  </div>
                </>
              )}
            </div>

            {/* Project Info Bar */}
            <div className="p-6 md:p-8 border-t border-zinc-800 bg-black/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Project Stats */}
                <div className="flex items-center gap-8">
                  {project.stats?.map((stat, i) => (
                    <div key={i} className="text-center md:text-left">
                      <div className="text-blue-500 text-xl md:text-2xl font-black">
                        {stat.value}
                      </div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest text-zinc-600 bg-zinc-900 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">
              The Challenge
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">
              Our Approach
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsProduction;
