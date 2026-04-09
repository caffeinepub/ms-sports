import DiscountPopup from "@/components/DiscountPopup";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import { Toaster } from "@/components/ui/sonner";
import AboutSection from "@/pages/AboutSection";
import ContactSection from "@/pages/ContactSection";
import HeroSection from "@/pages/HeroSection";
import ProductsSection from "@/pages/ProductsSection";
import TestimonialsSection from "@/pages/TestimonialsSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background font-body">
      <StickyHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
      <DiscountPopup />
      <Toaster richColors position="top-center" />
    </div>
  );
}
