import { HeroSection } from "@/components/sections/hero-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ProductsSection } from "@/components/sections/products-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { MapSection } from "@/components/sections/map-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <MapSection />
    </main>
  );
}
