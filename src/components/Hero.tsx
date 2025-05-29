import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            Nikhil Patel
          </span>
          Student Engineer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 leading-normal">
            & Designer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions that bridge the gap between 
          engineering principles and real-world application. Currently studying to complete my degree in Electrical Engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            View My Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/ISoSpitefull" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nikhil-p-ba1581281/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
