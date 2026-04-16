import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureBadges from "./components/FeatureBadges";
import SecuritySection from "./components/SecuritySection";
import StickerSection from "./components/StickerSection";
import AISection from "./components/AISection";
import FeaturesGrid from "./components/FeaturesGrid";
import EmailSignup from "./components/EmailSignup";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureBadges />
      <SecuritySection />
      <StickerSection />
      <AISection />
      <FeaturesGrid />
      <EmailSignup />
      <Footer />
    </main>
  );
}
