import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, User } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16">
        <Hero />
        
        {/* Project Categories Section with enhanced animations */}
        <section id="projects" className="py-8 sm:py-12 px-4 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 relative inline-block text-gradient">
              Explore My Projects
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-fade-in [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]"></div>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              Dive deeper into my engineering journey through detailed project showcases, organized by collaboration type.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-4">
            <Card className="group glass-card hover:glow-primary transition-all duration-500 hover:-translate-y-4 flex flex-col relative overflow-hidden animate-fade-in-left [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-20 h-20 glow-primary opacity-0 group-hover:opacity-100 rounded-full blur-xl transform translate-x-10 -translate-y-10 transition-all duration-700"></div>
              
              <CardHeader className="pb-2 sm:pb-4 relative z-10">
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-all duration-300 flex items-center gap-2 sm:gap-3">
                  <User className="h-6 sm:h-8 w-6 sm:w-8 transition-all duration-300 group-hover:scale-110" />
                  Personal Projects
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base sm:text-lg group-hover:text-foreground transition-colors duration-300">
                  Individual engineering projects showcasing my technical skills and learning journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4 relative z-10">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  Explore and view my personal projects where I experiment with new technologies, solve day to day problems, 
                  and document my learning experiences. Each project includes detailed insights into what I learned 
                  and my future plans for improvement.
                </p>
                <Link to="/personal-projects" className="block">
                  <Button className="w-full glow-primary hover:glow-primary text-sm sm:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105 group/btn">
                    <span className="relative z-10">View Personal Projects</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group glass-card hover:glow-accent transition-all duration-500 hover:-translate-y-4 flex flex-col relative overflow-hidden animate-fade-in-right [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
              {/* Background glow */}
              <div className="absolute top-0 left-0 w-20 h-20 glow-accent opacity-0 group-hover:opacity-100 rounded-full blur-xl transform -translate-x-10 -translate-y-10 transition-all duration-700"></div>
              
              <CardHeader className="pb-2 sm:pb-4 relative z-10">
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-all duration-300 flex items-center gap-2 sm:gap-3">
                  <Users className="h-6 sm:h-8 w-6 sm:w-8 transition-all duration-300 group-hover:scale-110" />
                  Team Projects
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base sm:text-lg group-hover:text-foreground transition-colors duration-300">
                  Collaborative engineering projects demonstrating teamwork and leadership skills through various organizations and events.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4 relative z-10">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  Discover the collaborative projects I've worked on with diverse teams. These projects highlight 
                  my ability to work effectively in group settings, contribute to shared goals, and learn from 
                  fellow engineers and designers.
                </p>
                <Link to="/team-projects" className="block">
                  <Button className="w-full glow-accent hover:glow-accent text-sm sm:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105 group/btn">
                    <span className="relative z-10">View Team Projects</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
 