import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Reuben has been great to work with, quick, efficient and great communication throughout.",
      author: "Meraj Huda",
      title: "Head Coach",
      company: "Burwood FC"
    },
    {
      quote: "Reuben handled everything from filming and direction to editing. Will 100% be using his services again.",
      author: "Katina",
      title: "Property Manager",
      company: "Yellow Property Management"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold mb-4 block">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
            What Clients Say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 md:p-12 border border-zinc-800 bg-black/50 hover:border-zinc-700 transition-all group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-zinc-800 group-hover:text-zinc-700 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-zinc-800 pt-6">
                <p className="text-white font-bold text-base uppercase tracking-wide mb-1">
                  {testimonial.author}
                </p>
                <p className="text-zinc-500 text-sm">
                  {testimonial.title} • {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-800 bg-black/30">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">
              100+ Successful Projects Delivered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
