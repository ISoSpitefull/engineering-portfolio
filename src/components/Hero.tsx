import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[70vh] flex items-center justify-center px-4 py-20 sm:py-28 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-primary opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 glow-secondary opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-accent opacity-10 rounded-full blur-3xl"></div>
      
      {/* Floating particles background */}
      <FloatingParticles count={18} />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="block text-gradient mb-2 animate-fade-in-up">
            Nikhil Patel
          </span>
          <span className="text-foreground animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Student Engineer
          </span>
          <span className="block text-gradient leading-normal animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            & Designer
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
          Passionate about creating innovative solutions that bridge the gap between 
          engineering principles and real-world application. Currently studying to complete my degree in Electrical Engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 px-2 animate-fade-in-up [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
          <Button 
            size="lg" 
            className="w-full sm:w-auto glow-primary hover:glow-primary font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-500 hover:scale-110 group relative overflow-hidden"
            onClick={scrollToProjects}
          >
            <span className="relative z-10">View My Projects</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto glass-card hover:glow-secondary font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-500 hover:scale-110 group"
          >
            <span className="transition-all duration-300">
              Download Resume
            </span>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mt-6 mb-4 animate-fade-in-up [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
          <a 
            href="https://github.com/ISoSpitefull" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125 transform hover:glow-primary p-2 rounded-full"
          >
            <Github className="h-6 sm:h-8 w-6 sm:w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nikhil-p-ba1581281/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125 transform hover:glow-primary p-2 rounded-full"
          >
            <Linkedin className="h-6 sm:h-8 w-6 sm:w-8" />
          </a>
          <a 
            href="mailto:nikhil.patel.23052@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125 transform hover:glow-primary p-2 rounded-full"
          >
            <Mail className="h-6 sm:h-8 w-6 sm:w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
