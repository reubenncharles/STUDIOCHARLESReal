
import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    { name: "Yellow Property Management", label: "SYDNEY REAL ESTATE" },
    { name: "Burwood Football Club", label: "NPL / SPORTS" },
    { name: "30K+ TikTok Community", label: "CONTENT CREATOR" },
    { name: "2M+ Interactions", label: "VIRAL REACH" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-wrap justify-between items-center gap-12 md:gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
        {clients.map((client) => (
          <div key={client.name} className="flex flex-col">
            <span className="text-lg md:text-2xl font-black uppercase tracking-tighter text-white">
              {client.name.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "text-white" : "text-zinc-500"}>
                  {word}{' '}
                </span>
              ))}
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-600 mt-1 font-bold">
              {client.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
