
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, User, Clock } from "lucide-react";

export const SkillsExplore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockSkills = [
    {
      id: 1,
      title: "Python Programming Basics",
      user: "Sarah Chen",
      category: "Programming",
      duration: "2-3 hours",
      description: "Learn the fundamentals of Python programming including variables, loops, and functions.",
      seeking: "Guitar lessons",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "Graphic Design with Figma",
      user: "Mike Rodriguez",
      category: "Design",
      duration: "1-2 hours",
      description: "Master the basics of Figma for creating stunning user interfaces and graphics.",
      seeking: "Spanish conversation practice",
      location: "Austin, TX"
    },
    {
      id: 3,
      title: "Italian Cooking Masterclass",
      user: "Elena Rossi",
      category: "Cooking",
      duration: "3-4 hours",
      description: "Learn to make authentic Italian pasta from scratch with traditional recipes.",
      seeking: "Photography basics",
      location: "New York, NY"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      user: "Alex Johnson",
      category: "Marketing",
      duration: "2 hours",
      description: "Understanding social media marketing, SEO basics, and content strategy.",
      seeking: "Yoga instruction",
      location: "Seattle, WA"
    },
    {
      id: 5,
      title: "Watercolor Painting",
      user: "Maria Garcia",
      category: "Art",
      duration: "1.5 hours",
      description: "Explore watercolor techniques for beginners and create beautiful landscapes.",
      seeking: "Web development help",
      location: "Denver, CO"
    },
    {
      id: 6,
      title: "Financial Planning Basics",
      user: "David Kim",
      category: "Finance",
      duration: "1 hour",
      description: "Learn budgeting, saving strategies, and investment fundamentals.",
      seeking: "Piano lessons",
      location: "Chicago, IL"
    }
  ];

  const categories = ["All", "Programming", "Design", "Cooking", "Marketing", "Art", "Finance"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = mockSkills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="explore" className="py-20 bg-pale-sand/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-midnight-teal mb-4">
            Explore Available Skills
          </h2>
          <p className="text-xl text-off-black/70 max-w-2xl mx-auto mb-8">
            Discover amazing skills offered by our community members. Find what you need and see what you can offer in return.
          </p>

          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-off-black/40 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 border-sage-green/30 focus:border-coral-orange"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-sage-green hover:bg-sage-green/90 text-white" 
                  : "border-sage-green text-sage-green hover:bg-sage-green hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Card 
              key={skill.id}
              className="border-sage-green/20 hover:border-coral-orange transition-all duration-300 skill-card-hover"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-sage-green/20 text-sage-green">
                    {skill.category}
                  </Badge>
                  <div className="flex items-center text-sm text-off-black/60">
                    <Clock className="h-4 w-4 mr-1" />
                    {skill.duration}
                  </div>
                </div>

                <h3 className="font-poppins font-semibold text-midnight-teal mb-2 text-lg">
                  {skill.title}
                </h3>

                <p className="text-off-black/70 mb-4 text-sm line-clamp-3">
                  {skill.description}
                </p>

                <div className="flex items-center mb-3">
                  <User className="h-4 w-4 mr-2 text-off-black/60" />
                  <span className="text-sm font-medium text-off-black">{skill.user}</span>
                  <span className="text-sm text-off-black/60 ml-2">• {skill.location}</span>
                </div>

                <div className="bg-coral-orange/10 p-3 rounded-lg mb-4">
                  <p className="text-sm text-off-black/80">
                    <span className="font-medium">Seeking:</span> {skill.seeking}
                  </p>
                </div>

                <Button 
                  className="w-full bg-coral-orange hover:bg-coral-orange/90 text-white font-medium"
                  size="sm"
                >
                  Connect & Exchange
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-off-black/60 text-lg">
              No skills found matching your search. Try a different keyword or category.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-sage-green hover:bg-sage-green/90 text-white font-semibold px-8 py-4"
          >
            View All Skills
          </Button>
        </div>
      </div>
    </section>
  );
};
