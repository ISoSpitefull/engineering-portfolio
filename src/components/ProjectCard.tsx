
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  lessons: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group glass-card hover:glow-primary transition-all duration-700 hover:-translate-y-4 relative overflow-hidden animate-scale-in">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-20 h-20 glow-primary opacity-0 group-hover:opacity-100 rounded-full blur-xl transform translate-x-10 -translate-y-10 transition-all duration-700"></div>
      
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce-gentle"></div>
        </div>
      </div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-all duration-500">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="hover:glow-primary transition-all duration-300 hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="glass-card p-4 rounded-lg border-l-4 border-primary group-hover:border-l-6 group-hover:glow-secondary transition-all duration-500 relative overflow-hidden">
          <p className="text-sm text-muted-foreground italic relative z-10 group-hover:text-foreground transition-colors duration-300">
            <strong className="text-primary transition-colors duration-300">Lesson Learned:</strong> {project.lessons}
          </p>
        </div>
        
        <div className="flex gap-3 pt-2">
          <Button 
            size="sm" 
            className="flex-1 glow-primary hover:glow-primary transition-all duration-500 hover:scale-105 group/btn"
          >
            <span className="relative z-10 flex items-center">
              <ExternalLink className="h-4 w-4 mr-1 transition-transform duration-300 group-hover/btn:scale-110" />
              Live Demo
            </span>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 glass-card hover:glow-secondary transition-all duration-500 hover:scale-105 group/btn"
          >
            <Github className="h-4 w-4 mr-1 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12" />
            Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
