import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Yellow Property Management",
      logo: (
        <div className="flex items-center gap-3">
          {/* Hexagon with tree icon */}
          <svg className="w-12 h-12" viewBox="0 0 60 60" fill="none">
            {/* Hexagon outline */}
            <path
              d="M30 4L52 17V43L30 56L8 43V17L30 4Z"
              stroke="#F59E0B"
              strokeWidth="3"
              fill="none"
            />
            {/* Tree trunk */}
            <path
              d="M30 48V28"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Tree branches */}
            <path
              d="M30 28L22 20M30 28L38 20M30 34L24 28M30 34L36 28M30 40L26 36M30 40L34 36"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Branch tips */}
            <circle cx="22" cy="20" r="2" fill="#F59E0B" />
            <circle cx="38" cy="20" r="2" fill="#F59E0B" />
            <circle cx="24" cy="28" r="1.5" fill="#F59E0B" />
            <circle cx="36" cy="28" r="1.5" fill="#F59E0B" />
            <circle cx="26" cy="36" r="1.5" fill="#F59E0B" />
            <circle cx="34" cy="36" r="1.5" fill="#F59E0B" />
          </svg>
          <div className="text-left">
            <span className="text-white font-light text-xl md:text-2xl tracking-tight block leading-tight">yellow<span className="text-amber-500">.</span></span>
            <span className="text-zinc-500 text-[10px] tracking-[0.2em]">property management</span>
          </div>
        </div>
      )
    },
    {
      name: "Burwood Football Club",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-400">
            <span className="text-white font-black text-lg">BFC</span>
          </div>
          <div className="text-left">
            <span className="text-white font-black text-sm md:text-base uppercase tracking-tight block leading-tight">Burwood</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Football Club</span>
          </div>
        </div>
      )
    },
    {
      name: "aideatr",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="text-white font-black text-sm md:text-base tracking-tight block leading-tight">aideatr</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">AI Platform</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold">
          Trusted By
        </span>
      </div>

      {/* Client Logos */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-24">
        {clients.map((client) => (
          <div
            key={client.name}
            className="opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
          >
            {client.logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
