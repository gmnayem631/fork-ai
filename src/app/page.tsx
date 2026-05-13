import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedRecipes />
      <HowItWorks />
      <Footer />
    </main>
  );
}
