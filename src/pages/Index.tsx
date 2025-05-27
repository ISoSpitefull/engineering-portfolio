
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Home IoT System",
      description: "Designed and developed a comprehensive IoT system for home automation using Arduino and Raspberry Pi.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      tags: ["IoT", "Arduino", "Python", "React"],
      demoUrl: "#",
      githubUrl: "#",
      lessons: "Learned the importance of scalable architecture and real-time data handling in IoT systems."
    },
    {
      id: 2,
      title: "AI-Powered Study Assistant",
      description: "Built a machine learning application that helps students optimize their study schedules and track progress.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      tags: ["Machine Learning", "Python", "TensorFlow", "Flask"],
      demoUrl: "#",
      githubUrl: "#",
      lessons: "Discovered the challenges of training models with limited data and the importance of user feedback loops."
    },
    {
      id: 3,
      title: "Sustainable Energy Dashboard",
      description: "Created a web application to monitor and visualize renewable energy consumption across campus buildings.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      lessons: "Gained insights into data visualization best practices and the complexity of real-time data processing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Hero />
      
      {/* Projects Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent engineering projects that showcase my technical skills and problem-solving approach.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <ExperienceTimeline />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
