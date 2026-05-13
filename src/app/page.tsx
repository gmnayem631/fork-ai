import AIFeaturesSection from "@/components/home/AIFeaturesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FAQSection from "@/components/home/FAQSection";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import NewsletterSection from "@/components/home/NewsletterSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSectio";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedRecipes />
      <HowItWorks />
      <CategoriesSection />
      <StatsSection />
      <TestimonialsSection />
      <AIFeaturesSection />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
