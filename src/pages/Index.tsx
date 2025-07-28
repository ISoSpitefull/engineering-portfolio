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
        
        {/* Project Categories Section with enhanced animations */}
        <section id="projects" className="py-8 sm:py-12 px-4 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Explore My Projects
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-fade-in [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]"></div>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              Dive deeper into my engineering journey through detailed project showcases, organized by collaboration type.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-4">
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-4 bg-gray-800/90 backdrop-blur-sm border-gray-700 shadow-lg flex flex-col relative overflow-hidden animate-fade-in-left [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full blur-xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="pb-2 sm:pb-4 relative z-10">
                <CardTitle className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-all duration-300 flex items-center gap-2 sm:gap-3">
                  <User className="h-6 sm:h-8 w-6 sm:w-8 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400" />
                  Personal Projects
                </CardTitle>
                <CardDescription className="text-gray-400 text-base sm:text-lg group-hover:text-gray-300 transition-colors duration-300">
                  Individual engineering projects showcasing my technical skills and learning journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4 relative z-10">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Explore and view my personal projects where I experiment with new technologies, solve day to day problems, 
                  and document my learning experiences. Each project includes detailed insights into what I learned 
                  and my future plans for improvement.
                </p>
                <Link to="/personal-projects" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group/btn relative overflow-hidden">
                    <span className="relative z-10">View Personal Projects</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-4 bg-gray-800/90 backdrop-blur-sm border-gray-700 shadow-lg flex flex-col relative overflow-hidden animate-fade-in-right [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-green-400/20 rounded-full blur-xl transform -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="pb-2 sm:pb-4 relative z-10">
                <CardTitle className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-400 transition-all duration-300 flex items-center gap-2 sm:gap-3">
                  <Users className="h-6 sm:h-8 w-6 sm:w-8 transition-all duration-300 group-hover:scale-110 group-hover:text-green-400" />
                  Team Projects
                </CardTitle>
                <CardDescription className="text-gray-400 text-base sm:text-lg group-hover:text-gray-300 transition-colors duration-300">
                  Collaborative engineering projects demonstrating teamwork and leadership skills through various organizations and events.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4 relative z-10">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Discover the collaborative projects I've worked on with diverse teams. These projects highlight 
                  my ability to work effectively in group settings, contribute to shared goals, and learn from 
                  fellow engineers and designers.
                </p>
                <Link to="/team-projects" className="block">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-sm sm:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 group/btn relative overflow-hidden">
                    <span className="relative z-10">View Team Projects</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
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
 