
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Award, Code, User } from "lucide-react";
import { Link } from "react-router-dom";

const TeamProjects = () => {
  const showcaseProject = {
    teamSize: 25,
    teamName: "USST - University of Saskatchewan Space Design Team",
    projectName: "USST Rocket Project: Up ↑",
    skills: ["OpenRocket", "Fusion 360", "ANSYS", "SolidWorks", "OnShape"],
    image: "/src/assets/images/Rocket Full Length.png",
    description: "Collaborated as a part of the propulsion and systems sub-team at the University of Saskatchewan Space Design Team (USST) to design and optimize components for the launch of an 8ft M-class rocket at Launch Canada 2025.",
    myRole: "Created CAD models using Solidworks, Fusion360, and OnShape, and used ANSYS and OpenRocket to optimize performance. Managed timelines, organized meetings, and coordinated reviews, gaining hands-on experience in aerospace engineering and team management."
  };

  const teamProjects = [
    {
      id: 1,
      teamSize: 35,
      teamName: "4627 Manning Robotics",
      projectName: "Thor & Loki",
      skills: ["Fusion 360 Simulation", "Fusion 360 Assemblies", "Team Leadership", "Manufacturing"],
      image: "/src/assets/images/4627Thor.png",
      description: "Designed and maintained the drive train systems for 4627 Manning Robotics during the 2023 FRC Charged Up challenge.",
      myRole: "Drive train systems lead engineer responsible for gearbox design and system optimization, contributing to top rankings at regional and international events"
    },
    {
      id: 2,
      teamSize: 3,
      teamName: "Manning Robotics",
      projectName: "2023 Skills Alberta Robotics Competition",
      skills: ["Machining", "Circuit Design", "Problem Solving", "Technical Documentation", "Fabrication",],
      image: "/src/assets/images/skillsbot.JPG",
      description: "Led a team of 3 to design and engineer two high-performance hockey robots for the 2023 Skills Robotics Competition.",
      myRole: "Team leader responsible for coordinating design, prototyping, documentation, and testing to optimize robot functionality and precision."
    },
    {
      id: 3,
      teamSize: 6,
      teamName: "Space Explorers",
      projectName: "2024 NASA Space Apps Challenge",
      skills: ["HTML", "CSS", "JavaScript", "NASA API"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      description: "Competed in the 2024 NASA Space Apps Challenge, developing innovative solutions for space exploration and technology.",
      myRole: "Team member responsible for brainstorming, coding, and prototyping solutions to address key challenges in space science and technology."
    },

  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">Team Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Collaborative engineering projects that showcase teamwork, leadership, and collective problem-solving. 
              These projects demonstrate my ability to work effectively in diverse technical teams.
            </p>
          </div>
        </div>

        {/* Showcase Project */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="w-full h-[500px] relative">
            <img 
              src={showcaseProject.image} 
              alt={showcaseProject.projectName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-4 pb-8">
              <div className="bg-gray-800/95 backdrop-blur-md rounded-lg p-8 shadow-2xl border border-gray-700 max-w-5xl">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-purple-400" />
                  <span className="text-sm font-medium text-purple-400 uppercase tracking-wide">Showcase Project</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">{showcaseProject.projectName}</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{showcaseProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-400">Team Size</p>
                        <p className="font-semibold text-white">{showcaseProject.teamSize} members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="text-sm text-gray-400">Team Name</p>
                        <p className="font-semibold text-white">{showcaseProject.teamName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Code className="h-5 w-5 text-purple-400" />
                      <div>
                        <p className="text-sm text-gray-400">Key Technologies</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {showcaseProject.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-purple-900 text-purple-200">
                              {skill}
                            </Badge>
                          ))}
                          {showcaseProject.skills.length > 3 && (
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                              +{showcaseProject.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-orange-400" />
                      <p className="text-sm text-gray-400 font-semibold">My Role</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{showcaseProject.myRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Team Projects */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Other Team Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Additional collaborative projects that have contributed to my growth as a team player and technical contributor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.projectName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{project.projectName}</h3>
                    <p className="text-gray-300 text-sm">{project.teamName}</p>
                  </div>
                </div>
                
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">{project.teamSize} team members</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">My Role</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">{project.myRole}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-900 text-blue-200 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamProjects;
