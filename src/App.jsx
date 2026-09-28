import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingMobileActions from './components/FloatingMobileActions';
import CabinConfiguratorModal from './components/CabinConfiguratorModal';
import QuoteEstimatorModal from './components/QuoteEstimatorModal';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SolutionsPage from './pages/SolutionsPage';
import TechnologyPage from './pages/TechnologyPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top automatically on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleOpenConfiguratorModal = () => {
    setIsConfiguratorOpen(true);
  };

  const handleApplyConfigToQuote = (selections) => {
    setIsConfiguratorOpen(false);
    setIsQuoteModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-kaizel-dark text-kaizel-textLight selection:bg-kaizel-blue selection:text-white">
        
        {/* Navigation */}
        <Navbar
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenConfiguratorModal={handleOpenConfiguratorModal}
        />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onOpenConfiguratorModal={handleOpenConfiguratorModal}
                />
              }
            />
            <Route
              path="/products"
              element={
                <ProductsPage
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onOpenConfiguratorModal={handleOpenConfiguratorModal}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetailPage
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onOpenConfiguratorModal={handleOpenConfiguratorModal}
                />
              }
            />
            <Route
              path="/solutions"
              element={<SolutionsPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/technology"
              element={<TechnologyPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/service"
              element={<ServicePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Floating Actions for Mobile & Scroll to Top */}
        <FloatingMobileActions onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Global Interactive Modals */}
        <QuoteEstimatorModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />

        <CabinConfiguratorModal
          isOpen={isConfiguratorOpen}
          onClose={() => setIsConfiguratorOpen(false)}
          onApplyToQuote={handleApplyConfigToQuote}
        />

      </div>
    </Router>
  );
}
