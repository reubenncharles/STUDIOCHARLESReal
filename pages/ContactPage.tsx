
import React from 'react';
import Contact from '../components/Contact';

interface ContactPageProps {
  onOpenWizard: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onOpenWizard }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 px-6 md:px-12 pt-24 md:pt-40 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold mb-4 block">Get In Touch</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12 italic">Let's Talk.</h1>
        </div>
        
        <Contact onOpenWizard={onOpenWizard} />
        
        <div className="mt-40 border-t border-zinc-900 pt-32 text-center">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] font-bold">
            Sydney based • Global reach
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
