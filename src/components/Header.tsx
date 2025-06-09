
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface HeaderProps {
  onAuthClick: (mode: 'signin' | 'signup') => void;
}

export const Header = ({ onAuthClick }: HeaderProps) => {
  return (
    <header className="bg-midnight-teal shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-coral-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-poppins font-bold text-pale-sand">
              SkillSwap Hub
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#explore" className="text-pale-sand hover:text-coral-orange transition-colors">
              Explore Skills
            </a>
            <a href="#how-it-works" className="text-pale-sand hover:text-coral-orange transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-pale-sand hover:text-coral-orange transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-pale-sand hover:text-coral-orange hover:bg-sage-green/20"
              onClick={() => onAuthClick('signin')}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-coral-orange hover:bg-coral-orange/90 text-white font-medium"
              onClick={() => onAuthClick('signup')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
