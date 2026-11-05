import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { BackToTop } from './components/common/BackToTop';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string>('');

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuoteService(serviceName || '');
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F4F7FA] font-sans antialiased text-slate-800">
        
        {/* Navigation Bar */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Dynamic Pages */}
        <div className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/services/:slug" 
              element={<ServiceDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/industries" 
              element={<IndustriesPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/why-choose-us" 
              element={<WhyChooseUsPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Floating Quick Actions & Back to Top */}
        <BackToTop />

        {/* Quote Request Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          defaultService={quoteService}
        />

      </div>
    </Router>
  );
};

export default App;
