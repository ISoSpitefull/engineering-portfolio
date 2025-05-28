
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, User } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-16">
        <Hero />
        
        {/* Project Categories Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore My Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Dive deeper into my engineering journey through detailed project showcases, organized by collaboration type.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-3">
                  <User className="h-8 w-8" />
                  Personal Projects
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Individual engineering projects showcasing my technical skills and learning journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Explore my personal projects where I experiment with new technologies, solve interesting problems, 
                  and document my learning experiences. Each project includes detailed insights into what I learned 
                  and my future plans for improvement.
                </p>
                <Link to="/personal-projects">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    View Personal Projects
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors flex items-center gap-3">
                  <Users className="h-8 w-8" />
                  Team Projects
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Collaborative engineering projects demonstrating teamwork and leadership skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Discover the collaborative projects I've worked on with diverse teams. These projects highlight 
                  my ability to work effectively in group settings, contribute to shared goals, and learn from 
                  fellow engineers and designers.
                </p>
                <Link to="/team-projects">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                    View Team Projects
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
