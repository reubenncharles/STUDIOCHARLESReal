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
        <div className="flex items-center gap-3">
          {/* Circular badge with player */}
          <svg className="w-14 h-14" viewBox="0 0 80 80" fill="none">
            {/* Navy blue circle */}
            <circle cx="40" cy="40" r="38" fill="#2B4075" />
            {/* White ring */}
            <circle cx="40" cy="40" r="30" stroke="white" strokeWidth="2" fill="none" />
            {/* Motion streaks */}
            <path d="M8 32L22 38L8 44" fill="#F5B041" />
            <path d="M4 38L18 42L4 46" fill="#F5B041" opacity="0.7" />
            {/* Player silhouette - simplified kicking figure */}
            <g fill="#F5B041">
              {/* Head */}
              <circle cx="44" cy="28" r="5" />
              {/* Body */}
              <path d="M42 33C42 33 38 42 40 48C42 54 44 52 44 52L48 44L52 48L56 42L50 38L46 33L42 33Z" />
              {/* Kicking leg */}
              <path d="M40 48L32 56L28 54" strokeWidth="4" stroke="#F5B041" strokeLinecap="round" />
              {/* Ball */}
              <circle cx="26" cy="56" r="4" />
            </g>
          </svg>
          <div className="text-left">
            <span className="text-[#F5B041] font-black text-sm md:text-base uppercase tracking-wide block leading-tight">Burwood</span>
            <span className="text-zinc-400 text-[10px] uppercase tracking-[0.15em]">Football Club</span>
          </div>
        </div>
      )
    },
    {
      name: "aideatr",
      logo: (
        <div className="flex items-center">
          <svg className="w-32 h-12" viewBox="0 0 140 50" fill="none">
            {/* Top green arc */}
            <path
              d="M25 12 Q70 -5 115 12"
              stroke="#1B7F37"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Bottom green arc */}
            <path
              d="M25 38 Q70 55 115 38"
              stroke="#1B7F37"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Red text "aideatr" */}
            <text
              x="70"
              y="32"
              textAnchor="middle"
              fill="#E31B23"
              fontFamily="Arial, sans-serif"
              fontSize="22"
              fontWeight="bold"
              fontStyle="italic"
            >
              aideatr
            </text>
          </svg>
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
