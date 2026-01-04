
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "DaVinci Resolve Editing",
      desc: "Precision editing with high-end color grading and sound design. Optimized for the fast-paced consumption of modern social platforms.",
      num: "01"
    },
    {
      title: "Property Media Production",
      desc: "Specialized walking tours and drone-integrated showcases for Sydney's elite property management firms.",
      num: "02"
    },
    {
      title: "Viral Script Engineering",
      desc: "Using hook-based frameworks to craft content that demands attention. Proven track record with 2 million interactions monthly.",
      num: "03"
    },
    {
      title: "AI-Enhanced Workflows",
      desc: "Integrating AI voices and generative visuals to create hyper-engaging reviews and narrative short films.",
      num: "04"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {services.map((service) => (
        <div key={service.num} className="p-8 border border-zinc-900 hover:border-zinc-700 transition-all group hover:bg-zinc-900/50">
          <span className="text-4xl font-black text-zinc-800 group-hover:text-white transition-colors duration-500 block mb-6">{service.num}</span>
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
          <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors font-light">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
