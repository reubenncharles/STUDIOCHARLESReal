import React from 'react';

const Clients: React.FC = () => {
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
        {/* Yellow Property - wider logo, needs less height */}
        <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
          <img
            src="/logos/yellow-property.png"
            alt="Yellow Property Management"
            style={{ height: '32px' }}
            className="w-auto object-contain"
          />
        </div>

        {/* Burwood FC - circular badge, needs more height */}
        <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
          <img
            src="/logos/burwood-fc.png"
            alt="Burwood Football Club"
            style={{ height: '48px' }}
            className="w-auto object-contain"
          />
        </div>

        {/* aideatr - similar to Yellow */}
        <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
          <img
            src="/logos/aideatr.png"
            alt="aideatr"
            style={{ height: '28px' }}
            className="w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
