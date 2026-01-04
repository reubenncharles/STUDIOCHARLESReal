
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center leading-none">
          STUDIO<span className="text-zinc-500">CHARLES</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
            &copy; {new Date().getFullYear()} REUBEN CHARLES. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
