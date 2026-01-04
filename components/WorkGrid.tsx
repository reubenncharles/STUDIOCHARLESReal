
import React, { useState, useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  sourceId: string;
  platform: 'tiktok' | 'youtube';
}

const VideoPlayer: React.FC<{ project: Project; isActive: boolean }> = ({ project, isActive }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setLoaded(false);
    }
  }, [isActive]);

  const getEmbedUrl = () => {
    if (project.platform === 'tiktok') {
      return `https://www.tiktok.com/embed/v2/${project.sourceId}?lang=en-US&autoplay=1&is_copy_url=true&is_from_webapp=v1`;
    }
    // Minimal URL to avoid config errors
    return `https://www.youtube.com/embed/${project.sourceId}?autoplay=1&mute=1`;
  };

  return (
    <div className="work-slide h-full w-full snap-start relative bg-black flex flex-col justify-end overflow-hidden group/slide">
      {(!loaded || !isActive) && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 z-10 transition-opacity duration-500">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 border border-white/5 rounded-full animate-ping absolute inset-0"></div>
              <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
            </div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-700 font-bold animate-pulse">Initializing {project.platform.toUpperCase()}...</p>
          </div>
        </div>
      )}

      {isActive && (
        <iframe
          src={getEmbedUrl()}
          className={`absolute left-0 w-full z-0 border-none transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'} ${
            project.platform === 'tiktok' 
              ? '-top-[20%] h-[150%]' 
              : 'top-0 h-full'
          }`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          onLoad={() => setLoaded(true)}
          title={project.title}
          referrerPolicy="no-referrer"
        />
      )}
      
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/95 via-black/40 to-transparent z-10 pointer-events-none" />

      <div className="absolute bottom-10 left-8 z-20 pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-1 block">
          {project.platform === 'youtube' ? 'Cinematic Edit' : 'Series 24.1'}
        </span>
        <p className="text-xl font-black uppercase tracking-tighter text-white drop-shadow-2xl italic">
          {project.title}
        </p>
      </div>
    </div>
  );
};

const WorkGrid: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(2);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    { id: 2, title: "Sydney Reveal", sourceId: "7587344933774920982", platform: "tiktok" },
    { id: 3, title: "Modernist POV", sourceId: "7585834356472597782", platform: "tiktok" },
    { id: 4, title: "Architectural Lab", sourceId: "7585365964410195222", platform: "tiktok" },
    { id: 5, title: "The Sanctuary", sourceId: "7585013514914336022", platform: "tiktok" },
    { id: 6, title: "Skyline Edit", sourceId: "7584310303068949762", platform: "tiktok" },
    { id: 7, title: "Vertical Motion", sourceId: "7581273961074396438", platform: "tiktok" },
    { id: 8, title: "Harbour Estate", sourceId: "7580620922835160327", platform: "tiktok" },
    { id: 9, title: "Brutalist Walk", sourceId: "7579135011915631879", platform: "tiktok" }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setActiveId(id);
          }
        });
      },
      { 
        root: containerRef.current,
        threshold: 0.6 
      }
    );

    const elements = containerRef.current.querySelectorAll('.project-wrapper');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="h-[480px] xs:h-[540px] md:h-[620px] w-full bg-black border-[8px] md:border-[12px] border-zinc-900 rounded-[3rem] md:rounded-[3.5rem] overflow-hidden relative shadow-[0_0_100px_rgba(255,255,255,0.02)] ring-1 ring-white/10 transition-all duration-500">
        <div 
          ref={containerRef}
          className="h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth"
        >
          {projects.map((project) => (
            <div key={project.id} data-id={project.id} className="project-wrapper h-full snap-start">
              <VideoPlayer 
                project={project} 
                isActive={activeId === project.id} 
              />
            </div>
          ))}
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-30 opacity-20 hover:opacity-100 transition-opacity">
          {projects.map((p) => (
            <div 
              key={p.id}
              className={`w-[2px] rounded-full transition-all duration-500 ${activeId === p.id ? 'bg-white h-4 md:h-6' : 'bg-white/30 h-1 md:h-1.5'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12 flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => containerRef.current?.scrollBy({ top: -containerRef.current.clientHeight, behavior: 'smooth' })} 
            className="w-10 h-10 md:w-14 md:h-14 border border-zinc-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" /></svg>
          </button>
          <button 
            onClick={() => containerRef.current?.scrollBy({ top: containerRef.current.clientHeight, behavior: 'smooth' })} 
            className="w-10 h-10 md:w-14 md:h-14 border border-zinc-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/30">
            {activeId.toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkGrid;
