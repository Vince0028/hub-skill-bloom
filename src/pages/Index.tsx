
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SkillsExplore } from "@/components/SkillsExplore";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={handleAuthClick} />
      <main>
        <HeroSection onAuthClick={handleAuthClick} />
        <FeaturesSection />
        <SkillsExplore />
      </main>
      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;
