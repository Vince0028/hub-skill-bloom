
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

interface HeroSectionProps {
  onAuthClick: (mode: 'signin' | 'signup') => void;
}

export const HeroSection = ({ onAuthClick }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-pale-sand to-sage-green/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-midnight-teal mb-6 animate-fade-in">
            Exchange Skills,
            <span className="text-coral-orange block">Build Connections</span>
          </h1>
          
          <p className="text-xl text-off-black/70 mb-8 max-w-2xl mx-auto animate-slide-up">
            Connect with people in your community to share knowledge, learn new skills, 
            and build meaningful relationships. No money required - just passion for learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
            <Button
              size="lg"
              className="bg-coral-orange hover:bg-coral-orange/90 text-white font-semibold px-8 py-4 text-lg hover-lift"
              onClick={() => onAuthClick('signup')}
            >
              Start Swapping Skills
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white font-semibold px-8 py-4 text-lg hover-lift"
            >
              <Search className="mr-2 h-5 w-5" />
              Explore Skills
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-coral-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-poppins font-semibold text-midnight-teal mb-2">Find Skills You Need</h3>
              <p className="text-off-black/60">Browse thousands of skills offered by community members</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-sage-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-poppins font-semibold text-midnight-teal mb-2">Connect & Exchange</h3>
              <p className="text-off-black/60">Match with others and start meaningful skill exchanges</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-midnight-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-poppins font-semibold text-midnight-teal mb-2">Grow Together</h3>
              <p className="text-off-black/60">Build your skill set while helping others achieve their goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
