import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Yellow Property Management",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-xl">Y</span>
          </div>
          <div className="text-left">
            <span className="text-white font-black text-sm md:text-base uppercase tracking-tight block leading-tight">Yellow</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Property</span>
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
