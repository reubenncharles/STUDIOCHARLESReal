
import React from 'react';

interface ContactProps {
  onOpenWizard: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenWizard }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-extrabold uppercase tracking-tighter mb-8 leading-tight">
          Let's Scale Your<br />Viral Impact<br />Together.
        </h2>
        <p className="text-zinc-400 mb-12 max-w-sm">
          Based in Sydney, delivering content that dominates feeds. Reach out directly or use our project wizard for a tailored strategy.
        </p>
        
        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600 mb-3 font-bold">Direct Channels</p>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Email</span>
                <a href="mailto:hello@studiocharles.com.au" className="text-xl md:text-2xl font-bold hover:text-zinc-400 transition-colors">
                  hello@studiocharles.com.au
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Phone</span>
                <a href="tel:0410745738" className="text-xl md:text-2xl font-bold hover:text-zinc-400 transition-colors">
                  0410 745 738
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600 mb-4 font-bold">Instant Message</p>
            <a 
              href="https://wa.me/61410745738" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-zinc-800 px-6 py-3 hover:bg-white hover:text-black transition-all group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.133 1.415 4.75 1.416 5.482.002 9.944-4.461 9.947-9.945.002-2.657-1.032-5.155-2.908-7.03s-4.373-2.912-7.027-2.914c-5.483 0-9.944 4.463-9.947 9.947 0 1.763.463 3.31 1.408 4.771l-1.076 3.931 4.026-1.056zm12.512-5.42c-.243-.122-1.443-.713-1.668-.795-.223-.083-.385-.122-.547.122-.162.243-.628.795-.77.955-.141.158-.283.179-.527.057-.243-.122-1.026-.378-1.954-1.206-.721-.643-1.209-1.437-1.35-1.681-.141-.243-.015-.375.106-.496.111-.11.243-.283.365-.425.122-.141.162-.243.243-.406.083-.162.041-.305-.021-.426-.062-.122-.547-1.32-.75-1.81-.197-.474-.398-.41-.547-.417-.141-.007-.305-.009-.467-.009-.162 0-.425.062-.648.305-.223.243-.852.833-.852 2.031s.872 2.356 1.015 2.538c.142.182 1.71 2.611 4.14 3.66.578.249 1.03.398 1.383.511.581.185 1.11.158 1.528.096.467-.069 1.443-.59 1.647-1.159.203-.569.203-1.056.142-1.159-.062-.102-.224-.162-.467-.284z"/>
              </svg>
              <span className="text-xs uppercase tracking-widest font-bold">Message on WhatsApp</span>
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">Sydney HQ</p>
            <p className="text-zinc-400 text-sm">Available for local production and global post-production.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start">
        <div className="p-10 border border-zinc-900 bg-black/50 backdrop-blur-sm w-full">
          <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Start a Project</h3>
          <p className="text-zinc-500 mb-8 font-light">
            Skip the generic forms. Use our guided onboarding wizard to specify your project details and get a tailored quote within 24 hours.
          </p>
          <button 
            onClick={onOpenWizard}
            className="w-full bg-white text-black font-bold uppercase tracking-[0.2em] py-5 hover:bg-zinc-200 transition-colors"
          >
            Launch Project Wizard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
