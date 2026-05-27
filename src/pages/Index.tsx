import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ServicesSection from "@/components/ServicesSection";
import EquipmentSection from "@/components/EquipmentSection";
import CoachesPreSection from "@/components/CoachesPreSection";

import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <ServicesSection />
      <EquipmentSection />
      <CoachesPreSection />
      
      <PlansSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
