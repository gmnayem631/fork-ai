import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
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
      <Footer />
    </main>
  );
}
