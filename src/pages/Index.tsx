import HeroSection from "@/components/HeroSection";
import EligibilitySection from "@/components/EligibilitySection";
import PrizesSection from "@/components/PrizesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EligibilitySection />
      <PrizesSection />
      <Footer />
    </div>
  );
};

export default Index;
