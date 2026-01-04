
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import OnboardingWizard from './components/OnboardingWizard';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle back-to-top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'contact':
        return <ContactPage onOpenWizard={() => setIsWizardOpen(true)} />;
      default:
        return <Home onStartProject={() => setIsWizardOpen(true)} />;
    }
  };

  return (
    <Layout 
      scrolled={scrolled} 
      onOpenWizard={() => setIsWizardOpen(true)} 
      activePage={currentPage}
      setActivePage={setCurrentPage}
    >
      {renderPage()}

      {isWizardOpen && (
        <OnboardingWizard onClose={() => setIsWizardOpen(false)} />
      )}
    </Layout>
  );
};

export default App;
