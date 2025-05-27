
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
            alt="Profile" 
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Student Engineer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            & Designer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions that bridge the gap between 
          engineering principles and real-world applications. Currently studying to become 
          the next generation of problem solvers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            View My Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="#" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="#" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a 
            href="#" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
