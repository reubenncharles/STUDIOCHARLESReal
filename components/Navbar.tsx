
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
  onOpenWizard: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onOpenWizard, activePage, setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActivePage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-black/95 backdrop-blur-md py-3 md:py-4 border-b border-zinc-900 shadow-2xl' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center gap-2">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase group whitespace-nowrap leading-none flex items-baseline outline-none"
            >
              <span>STUDIO</span><span className="text-zinc-500 group-hover:text-white transition-colors duration-300">CHARLES</span>
            </button>
          </div>
          
          {/* Right: Navigation & CTA */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 outline-none ${activePage === link.id ? 'text-white border-b border-white pb-1' : 'text-zinc-400 hover:text-white'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={onOpenWizard}
              className="bg-white text-black px-3 py-2 sm:px-6 sm:py-2.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all flex-shrink-0"
            >
              <span className="hidden xs:inline">Start Project</span>
              <span className="xs:hidden">Start</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1 sm:p-2 hover:bg-zinc-900 transition-colors rounded-sm md:hidden z-50" 
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300 md:hidden">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-4xl font-black uppercase tracking-tighter italic ${activePage === link.id ? 'text-white' : 'text-zinc-800'}`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-px w-12 bg-zinc-800 mt-4"></div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-bold">Sydney based</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
