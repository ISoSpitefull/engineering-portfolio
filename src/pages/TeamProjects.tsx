import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Award, Code } from "lucide-react";
import { Link } from "react-router-dom";

const TeamProjects = () => {
  const showcaseProject = {
    teamSize: 8,
    teamName: "Innovation Labs",
    projectName: "Campus Sustainability Platform",
    skills: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Data Analytics"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&h=600&fit=crop",
    description: "A comprehensive platform to monitor and optimize energy consumption across university buildings, featuring real-time dashboards, predictive analytics, and automated reporting systems."
  };

  const teamProjects = [
    {
      id: 1,
      teamSize: 5,
      teamName: "Tech Pioneers",
      projectName: "Smart Library System",
      skills: ["Python", "Flask", "SQLite", "RFID", "IoT"]
    },
    {
      id: 2,
      teamSize: 6,
      teamName: "Data Wizards",
      projectName: "Student Performance Analytics",
      skills: ["Python", "Pandas", "Machine Learning", "Tableau", "REST APIs"]
    },
    {
      id: 3,
      teamSize: 4,
      teamName: "Mobile Masters",
      projectName: "Campus Navigation App",
      skills: ["React Native", "Firebase", "Google Maps API", "GPS"]
    },
    {
      id: 4,
      teamSize: 7,
      teamName: "AI Enthusiasts",
      projectName: "Automated Grading System",
      skills: ["Python", "TensorFlow", "NLP", "Computer Vision", "Django"]
    },
    {
      id: 5,
      teamSize: 3,
      teamName: "Hardware Hackers",
      projectName: "IoT Weather Station Network",
      skills: ["Arduino", "LoRaWAN", "Python", "Time Series DB", "Grafana"]
    },
    {
      id: 6,
      teamSize: 5,
      teamName: "Web Warriors",
      projectName: "Event Management Platform",
      skills: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Stripe API"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Team Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Collaborative engineering projects that showcase teamwork, leadership, and collective problem-solving. 
            These projects demonstrate my ability to work effectively in diverse technical teams.
          </p>
        </div>
      </div>

      {/* Showcase Project */}
      <section className="relative">
        <div className="w-full h-96 overflow-hidden">
          <img 
            src={showcaseProject.image} 
            alt={showcaseProject.projectName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-purple-600" />
                <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">Showcase Project</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{showcaseProject.projectName}</h2>
              <p className="text-lg text-gray-700 mb-6 max-w-4xl">{showcaseProject.description}</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Team Size</p>
                    <p className="font-semibold text-gray-900">{showcaseProject.teamSize} members</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-500">Team Name</p>
                    <p className="font-semibold text-gray-900">{showcaseProject.teamName}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500">Key Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {showcaseProject.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                          {skill}
                        </Badge>
                      ))}
                      {showcaseProject.skills.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                          +{showcaseProject.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Projects */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Team Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Additional collaborative projects that have contributed to my growth as a team player and technical contributor.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.projectName}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.teamName}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">{project.teamSize} team members</span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
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
  );
};

export default TeamProjects;
