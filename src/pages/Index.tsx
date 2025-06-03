import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, User } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-16">
        <Hero />
        
        {/* Project Categories Section */}
        <section id="projects" className="py-8 sm:py-12 px-4 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Explore My Projects</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
              Dive deeper into my engineering journey through detailed project showcases, organized by collaboration type.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-4">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg flex flex-col">
              <CardHeader className="pb-2 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2 sm:gap-3">
                  <User className="h-6 sm:h-8 w-6 sm:w-8" />
                  Personal Projects
                </CardTitle>
                <CardDescription className="text-gray-400 text-base sm:text-lg">
                  Individual engineering projects showcasing my technical skills and learning journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Explore and view my personal projects where I experiment with new technologies, solve day to day problems, 
                  and document my learning experiences. Each project includes detailed insights into what I learned 
                  and my future plans for improvement.
                </p>
                <Link to="/personal-projects" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base py-2 sm:py-3">
                    View Personal Projects
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg flex flex-col">
              <CardHeader className="pb-2 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-400 transition-colors flex items-center gap-2 sm:gap-3">
                  <Users className="h-6 sm:h-8 w-6 sm:w-8" />
                  Team Projects
                </CardTitle>
                <CardDescription className="text-gray-400 text-base sm:text-lg">
                  Collaborative engineering projects demonstrating teamwork and leadership skills through various organizations and events.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Discover the collaborative projects I've worked on with diverse teams. These projects highlight 
                  my ability to work effectively in group settings, contribute to shared goals, and learn from 
                  fellow engineers and designers.
                </p>
                <Link to="/team-projects" className="block">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-sm sm:text-base py-2 sm:py-3">
                    View Team Projects
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
 