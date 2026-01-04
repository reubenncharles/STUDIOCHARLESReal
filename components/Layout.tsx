
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  scrolled: boolean;
  onOpenWizard: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, scrolled, onOpenWizard, activePage, setActivePage }) => {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black flex flex-col">
      <Navbar 
        scrolled={scrolled} 
        onOpenWizard={onOpenWizard} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
