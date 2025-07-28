
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
    <Card className="group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:-translate-y-4 bg-white/90 backdrop-blur-sm border-0 shadow-lg relative overflow-hidden animate-scale-in">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400/15 to-blue-400/15 rounded-full blur-lg transform -translate-x-8 translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>
      
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
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-300 hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-500 group-hover:border-l-6 group-hover:shadow-lg group-hover:shadow-purple-200/50 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-sm text-gray-700 italic relative z-10 group-hover:text-gray-800 transition-colors duration-300">
            <strong className="text-purple-700 group-hover:text-purple-800 transition-colors duration-300">Lesson Learned:</strong> {project.lessons}
          </p>
        </div>
        
        <div className="flex gap-3 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group/btn relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <ExternalLink className="h-4 w-4 mr-1 transition-transform duration-300 group-hover/btn:scale-110" />
              Live Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 hover:bg-gray-50 transition-all duration-500 hover:scale-105 hover:shadow-md group/btn border-2 hover:border-gray-400"
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
