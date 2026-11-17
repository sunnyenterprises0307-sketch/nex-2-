import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { VisitingCard3D } from './components/VisitingCard3D';
import { Founder } from './components/Founder';
import { TeamCards } from './components/TeamCards';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { Toast } from './components/Toast';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('Website Development');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToVisitingCard = () => {
    const cardElem = document.querySelector('#visiting-card');
    if (cardElem) {
      cardElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const srvElem = document.querySelector('#services');
    if (srvElem) {
      srvElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#D71920] selection:text-white">
      {/* 1. Header & Navigation */}
      <Header onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Homepage Hero Section */}
        <Hero onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 3. About Us */}
        <About onExploreServices={handleExploreServices} />

        {/* 4. Our Services (All 7 core services) */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* 5. 3D 360° Rotating Digital Visiting Card */}
        <VisitingCard3D onCopyNotice={showToast} />

        {/* 6. Owner & Founder — RAVI KUMAR (Name & Leadership Only, No Photo) */}
        <Founder 
          onScrollToVisitingCard={handleScrollToVisitingCard} 
          onCopyNotice={showToast} 
        />

        {/* 7. Core Team Members (4 Employee Cards with 3D Front & Back Flip) */}
        <TeamCards onCopyNotice={showToast} />

        {/* 7. Portfolio & Our Work */}
        <Portfolio />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. Our Work Process */}
        <Process />

        {/* 10. Contact & Inquiry Section with Google Maps Embed */}
        <Contact 
          selectedServicePreset={selectedServicePreset} 
          onCopyNotice={showToast} 
        />
      </main>

      {/* 11. Footer */}
      <Footer onSelectService={handleSelectServiceFromCard} />

      {/* Modals & Notifications */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        onSuccessNotice={showToast}
      />

      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
