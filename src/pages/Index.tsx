import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import UseCasesSection from "@/components/UseCasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ValueSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
