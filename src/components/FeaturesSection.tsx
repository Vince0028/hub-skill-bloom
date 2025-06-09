
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "👥",
      title: "Community Driven",
      description: "Join a thriving community of learners and teachers passionate about sharing knowledge."
    },
    {
      icon: "🔍",
      title: "Smart Matching",
      description: "Our intelligent system helps you find the perfect skill exchange partners in your area."
    },
    {
      icon: "💬",
      title: "Secure Messaging",
      description: "Built-in chat system to coordinate your skill exchanges safely and efficiently."
    },
    {
      icon: "⭐",
      title: "Verified Profiles",
      description: "Trust system with reviews and ratings to ensure quality skill exchanges."
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Access SkillSwap Hub from any device, anywhere, anytime."
    },
    {
      icon: "🎨",
      title: "All Skills Welcome",
      description: "From coding to cooking, music to marketing - every skill has value here."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-midnight-teal mb-4">
            Why Choose SkillSwap Hub?
          </h2>
          <p className="text-xl text-off-black/70 max-w-2xl mx-auto">
            We've created the perfect platform for skill sharing with features designed to make your learning journey smooth and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-sage-green/20 hover:border-coral-orange transition-all duration-300 hover:shadow-lg skill-card-hover"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-poppins font-semibold text-midnight-teal mb-3 text-xl">
                  {feature.title}
                </h3>
                <p className="text-off-black/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
