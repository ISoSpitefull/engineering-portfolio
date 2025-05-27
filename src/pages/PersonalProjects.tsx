
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalProjects = () => {
  const personalProjects = [
    {
      id: 1,
      name: "Smart Energy Monitor",
      skills: ["Arduino", "Python", "Data Analysis", "IoT"],
      learningExperience: "This project taught me the importance of real-time data processing and how to optimize power consumption in embedded systems. I learned to work with various sensors and understand the challenges of wireless communication in IoT devices.",
      futurePlans: "Plan to integrate machine learning algorithms for predictive energy usage patterns and develop a mobile app for remote monitoring.",
      format: "large"
    },
    {
      id: 2,
      name: "Personal Finance Tracker",
      skills: ["React", "Node.js", "MongoDB", "Chart.js"],
      learningExperience: "Gained valuable experience in full-stack development and learned about data visualization best practices. Understanding user experience design became crucial for making financial data accessible.",
      futurePlans: "Add AI-powered spending insights and integrate with banking APIs for automatic transaction categorization.",
      format: "medium"
    },
    {
      id: 3,
      name: "Automated Plant Watering System",
      skills: ["Raspberry Pi", "Python", "Sensors"],
      learningExperience: "Learned about hardware-software integration and the importance of fail-safe mechanisms in automated systems.",
      futurePlans: "Expand to multiple plants with individual care profiles.",
      format: "small"
    },
    {
      id: 4,
      name: "Task Management CLI Tool",
      skills: ["Go", "CLI Design", "File Systems"],
      learningExperience: "First project in Go language. Learned about efficient file handling and creating intuitive command-line interfaces.",
      futurePlans: "Add cloud synchronization and team collaboration features.",
      format: "small"
    },
    {
      id: 5,
      name: "Weather Prediction Model",
      skills: ["Python", "TensorFlow", "Data Science", "API Integration"],
      learningExperience: "Deep dive into machine learning algorithms and working with large datasets. Learned about model validation and the importance of feature engineering in prediction accuracy.",
      futurePlans: "Improve model accuracy by incorporating satellite imagery data and expand to long-term climate predictions.",
      format: "medium"
    }
  ];

  const renderProjectCard = (project: typeof personalProjects[0]) => {
    const baseClasses = "group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg";
    
    if (project.format === "large") {
      return (
        <Card key={project.id} className={`${baseClasses} col-span-full`}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
              <Code className="h-6 w-6" />
              {project.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Relevant Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Learning Experience
                </h4>
                <p className="text-gray-700 leading-relaxed">{project.learningExperience}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-900 mb-2">Future Plans</h4>
              <p className="text-gray-700">{project.futurePlans}</p>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (project.format === "medium") {
      return (
        <Card key={project.id} className={`${baseClasses} md:col-span-2`}>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Relevant Skills</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Learning Experience</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{project.learningExperience}</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-3 rounded-lg border-l-4 border-green-500">
              <h4 className="font-medium text-gray-900 mb-1 text-sm">Future Plans</h4>
              <p className="text-gray-700 text-sm">{project.futurePlans}</p>
            </div>
          </CardContent>
        </Card>
      );
    }

    // Small format
    return (
      <Card key={project.id} className={baseClasses}>
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-1">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-gray-700 text-xs leading-relaxed">{project.learningExperience}</p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-2 rounded border-l-2 border-orange-400">
              <p className="text-gray-700 text-xs">{project.futurePlans}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
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
  );
};

export default PersonalProjects;
