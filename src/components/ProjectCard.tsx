import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

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
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <div className="relative overflow-hidden rounded-t-lg">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          width={700}
          height={475}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-sm text-gray-700 italic">
            <strong>Lesson Learned:</strong> {project.lessons}
          </p>
        </div>
        
        <div className="flex gap-3 pt-2">
          <a 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </Button>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full hover:bg-gray-50"
            >
              <Github className="h-4 w-4 mr-1" />
              Code
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
