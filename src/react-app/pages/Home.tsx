import HeroSection from '@/react-app/components/HeroSection';
import BenefitsSection from '@/react-app/components/BenefitsSection';
import HowItWorksSection from '@/react-app/components/HowItWorksSection';
import FAQSection from '@/react-app/components/FAQSection';
import ContactSection from '@/react-app/components/ContactSection';
import Footer from '@/react-app/components/Footer';
import SkipToContent from '@/react-app/components/SkipToContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SkipToContent />
      <HeroSection />
      <div id="main-content">
        <BenefitsSection />
        <HowItWorksSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
