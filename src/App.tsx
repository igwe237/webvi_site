import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BrandCharterBanner } from './components/BrandCharterBanner.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { StarlinkSpecial } from './components/StarlinkSpecial.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal.tsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.tsx';
import { ServiceItem } from './data/services.ts';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string | undefined>();
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  const handleOpenQuote = (serviceId?: string) => {
    setQuoteInitialService(serviceId);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteInitialService(undefined);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForModal(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedServiceForModal(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#111827] selection:bg-[#00d2ff]/20 selection:text-[#111827]">
      {/* Top Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Brand Charter & Core Strategic Pillars */}
        <BrandCharterBanner />

        {/* Services Showcase (11 services) */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenQuote={handleOpenQuote}
        />

        {/* Starlink Spotlight */}
        <StarlinkSpecial onOpenQuote={handleOpenQuote} />

        {/* Client Testimonials (7 Cameroonian clients) */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Interactive Modals */}
      <QuoteSimulatorModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialServiceId={quoteInitialService}
      />

      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={handleCloseServiceModal}
        onOpenQuote={handleOpenQuote}
      />

      {/* Floating 24/7 WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
