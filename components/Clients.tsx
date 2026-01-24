import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Yellow Property Management",
      logo: "/logos/yellow-property.png"
    },
    {
      name: "Burwood Football Club",
      logo: "/logos/burwood-fc.png"
    },
    {
      name: "aideatr",
      logo: "/logos/aideatr.png"
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
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
