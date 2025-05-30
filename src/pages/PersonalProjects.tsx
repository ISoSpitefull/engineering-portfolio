import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Lightbulb, Target, Image } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalProjects = () => {
  const personalProjects = [
    {
      id: 1,
      name: "Sunrise Simulight",
      skills: ["Arduino", "Python", "Systems Integration", "IoT"],
      learningExperience: "This project taught me the importance of IOT connections and how to optimize power consumption in embedded systems. I learned to work with circuits and softwares and understand the challenges of wireless communication in IoT devices.",
      futurePlans: "Plan to make a standalone mobile application for users to control the lights and set the schedule, to shift away from the reliance on other apps and services.",
      image: "/src/assets/images/simulightlogo.jpg",
      format: "large"
    },
    {
      id: 2,
      name: "Arduino Based Macro Keyboard",
      skills: ["Arduino", "C++", "Electronics", "User-Centric Design"],
      learningExperience: "This project taught me how to design accessible solutions and customize hardware for diverse needs. I improved my programming and engineering skills while learning the importance of user-centric design.",
      futurePlans: "plan to develop a fully customizable keyboard layout software for users, allowing them to adjust settings and configurations without needing third-party applications or services.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      format: "large"
    },
    {
      id: 3,
      name: "RC Airplane Based Land Surveying System",
      skills: ["Raspberry Pi", "Python", "LiDAR", "GPS"],
      learningExperience: "Currently building an RC airplane to take aerial photos and videos of the land, and use them to create a 3D model of the land.",
      futurePlans: "Hoping to expand into LiDAR and GPS integration to create a more accurate 3D model of the land.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=200&fit=crop",
      format: "large"
    },

  ];

  const renderProjectCard = (project: typeof personalProjects[0]) => {
    const baseClasses = "group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg";
    
    if (project.format === "large") {
      return (
        <Card key={project.id} className={`${baseClasses} col-span-full`}>
          <div className="relative h-64 overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            </div>
          </div>
          <CardContent className="space-y-6 pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Relevant Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-900 text-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Learning Experience
                </h4>
                <p className="text-gray-300 leading-relaxed">{project.learningExperience}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-white mb-2">Future Plans</h4>
              <p className="text-gray-300">{project.futurePlans}</p>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (project.format === "medium") {
      return (
        <Card key={project.id} className={`${baseClasses} md:col-span-2`}>
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
            </div>
          </div>
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Relevant Skills</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-900 text-green-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Learning Experience</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{project.learningExperience}</p>
            </div>
            <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 p-3 rounded-lg border-l-4 border-green-500">
              <h4 className="font-medium text-white mb-1 text-sm">Future Plans</h4>
              <p className="text-gray-300 text-sm">{project.futurePlans}</p>
            </div>
          </CardContent>
        </Card>
      );
    }

    // Small format
    return (
      <Card key={project.id} className={baseClasses}>
        <div className="relative h-32 overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          <div className="absolute bottom-2 left-2">
            <h3 className="text-lg font-bold text-white">{project.name}</h3>
          </div>
        </div>
        <CardContent className="space-y-3 pt-3">
          <div className="flex flex-wrap gap-1">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-orange-900 text-orange-200 text-xs">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-gray-300 text-xs leading-relaxed">{project.learningExperience}</p>
            <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-2 rounded border-l-2 border-orange-400">
              <p className="text-gray-300 text-xs">{project.futurePlans}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

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
            <h1 className="text-4xl font-bold text-white mb-4">Personal Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A collection of my individual engineering projects, showcasing my learning journey and technical growth. 
              Each project represents a unique challenge and learning opportunity.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-auto">
            {personalProjects.map(renderProjectCard)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalProjects;
