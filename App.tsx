import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load heavy components
const OnboardingWizard = lazy(() => import('./components/OnboardingWizard'));

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current page from location
  const currentPage = location.pathname.replace(/^\/STUDIOCHARLES\/?/, '') || 'home';

  return (
    <ErrorBoundary>
      <Layout 
        scrolled={scrolled} 
        onOpenWizard={() => setIsWizardOpen(true)}
        activePage={currentPage}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home onStartProject={() => setIsWizardOpen(true)} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage onOpenWizard={() => setIsWizardOpen(true)} />} />
        </Routes>

        {isWizardOpen && (
          <Suspense fallback={
            <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100]">
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Loading...</p>
              </div>
            </div>
          }>
            <OnboardingWizard onClose={() => setIsWizardOpen(false)} />
          </Suspense>
        )}
      </Layout>
    </ErrorBoundary>
  );
};

const App: React.FC = () => {
  return (
    <Router >
      <AppContent />
    </Router>
  );
};

export default App;
