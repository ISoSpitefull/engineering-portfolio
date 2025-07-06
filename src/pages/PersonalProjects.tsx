import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Lightbulb, Target, Image } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PersonalProjects = () => {
  const navigate = useNavigate();
  const personalProjects = [
    {
      id: 1,
      name: "Sunrise Simulight",
      skills: ["Arduino", "Python", "Systems Integration", "IoT"],
      learningExperience: [
        "This project taught me the importance of IoT connections and how to optimize power consumption in embedded systems through intelligent dimming algorithms and sleep modes",
        "I learned to work with circuits and software integration, understanding the challenges of wireless communication in IoT devices and developing reliable protocols",
        "Gained experience in user-centered design by incorporating feedback from 15+ test subjects to improve wake-up experience and reduce morning grogginess",
        "Developed skills in modular design architecture allowing easy maintenance and upgrades while maintaining high quality and functionality standards",
        "Learned the importance of comprehensive documentation including circuit diagrams, PCB layouts, and user manuals for successful project completion"
      ],
      futurePlans: [
        "Plan to make a standalone mobile application for users to control the lights and set schedules, eliminating reliance on third-party apps and services",
        "Integrate with smart home systems including Amazon Alexa, Google Home, and Apple HomeKit for voice control and automation",
        "Implement machine learning algorithms to adapt light patterns based on user sleep data and environmental conditions",
        "Add biometric sensors for heart rate and sleep quality monitoring to provide personalized sunrise timing recommendations",
        "Explore commercial manufacturing partnerships to bring the product to market at an accessible price point"
      ],
      image: "/images/SimuLight Wide Banner Website.png",
      format: "large"
    },
    {
      id: 2,
      name: "Arduino Based Macro Keyboard",
      skills: ["Arduino", "C++", "Electronics", "User-Centric Design"],
      learningExperience: [
        "This project taught me how to design accessible solutions and customize hardware for diverse needs including users with motor disabilities",
        "I improved my programming and engineering skills while learning the importance of user-centric design through extensive community testing",
        "Developed expertise in mechanical key switch implementation and custom firmware development for programmable functions",
        "Gained experience in modular design architecture allowing easy customization of key layouts, switch types, and enclosure materials",
        "Learned the importance of cross-platform compatibility and plug-and-play functionality across multiple operating systems"
      ],
      futurePlans: [
        "Plan to develop a fully customizable keyboard layout software for users, allowing them to adjust settings and configurations without needing third-party applications",
        "Create wireless versions using Bluetooth connectivity for increased mobility and reduced cable clutter in workspace setups",
        "Implement advanced macro features including conditional logic, timing controls, and integration with software APIs",
        "Design specialized versions for specific industries such as video editing, CAD modeling, and accessibility applications",
        "Establish open-source community around the project to encourage collaboration and continuous improvement"
      ],
      image: "/images/MacroKeyboard Banner Website.png",
      format: "medium"
    },
    {
      id: 3,
      name: "RC Airplane Based Land Surveying System",
      skills: ["Raspberry Pi", "Python", "LiDAR", "GPS"],
      learningExperience: [
        "Currently building a radio controlled airplane to take aerial photos and videos of land to eventually use them to create a 3D model of the land",
        "Learning about flight path automation algorithms using Python and OpenCV for image capture and real-time navigation control",
        "Developing skills in image stitching algorithms to create seamless aerial mosaics from multiple overlapping photographs",
        "Gaining experience in payload integration systems that can accommodate various sensors including thermal cameras and multispectral imagers",
        "Understanding the importance of fail-safe systems including automatic return-to-home functionality and emergency landing procedures"
      ],
      futurePlans: [
        "Hoping to expand into LiDAR and GPS integration to create a more accurate 3D model of the land with centimeter-level precision",
        "Add real-time data transmission capabilities using cellular or satellite communication for live monitoring and remote control operations",
        "Develop machine learning algorithms for automated crop health analysis and yield prediction using multispectral imaging data",
        "Create modular sensor systems allowing easy swapping between different surveying applications and sensor types",
        "Establish partnerships with agricultural research institutions for field testing and validation of surveying capabilities"
      ],
      image: "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      format: "small"
    },

  ];

  const renderProjectCard = (project: typeof personalProjects[0]) => {
    const baseClasses = "group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg";
    
    if (project.format === "large") {
      return (
        <Card key={project.id} className={`${baseClasses} col-span-full cursor-pointer`} onClick={() => navigate(`/project/personal/${project.id}`)}>
          <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
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
                <ul className="space-y-2">
                  {Array.isArray(project.learningExperience) ? project.learningExperience.map((item, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-blue-400 mr-2 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  )) : (
                    <p className="text-gray-300 leading-relaxed">{project.learningExperience}</p>
                  )}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-white mb-2">Future Plans</h4>
              <ul className="space-y-2">
                {Array.isArray(project.futurePlans) ? project.futurePlans.map((item, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                )) : (
                  <p className="text-gray-300">{project.futurePlans}</p>
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (project.format === "medium") {
      return (
        <Card key={project.id} className={`${baseClasses} md:col-span-2 cursor-pointer`} onClick={() => navigate(`/project/personal/${project.id}`)}>
          <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">{project.name}</h3>
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
              <ul className="space-y-1">
                {Array.isArray(project.learningExperience) ? project.learningExperience.map((item, index) => (
                  <li key={index} className="text-gray-300 text-sm leading-relaxed flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                )) : (
                  <p className="text-gray-300 text-sm leading-relaxed">{project.learningExperience}</p>
                )}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 p-3 rounded-lg border-l-4 border-green-500">
              <h4 className="font-medium text-white mb-1 text-sm">Future Plans</h4>
              <ul className="space-y-1">
                {Array.isArray(project.futurePlans) ? project.futurePlans.map((item, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                )) : (
                  <p className="text-gray-300 text-sm">{project.futurePlans}</p>
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
      );
    }

    // Small format
    return (
      <Card key={project.id} className={`${baseClasses} cursor-pointer`} onClick={() => navigate(`/project/personal/${project.id}`)}>
        <div className="relative h-36 sm:h-40 overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          <div className="absolute bottom-3 left-2">
            <h3 className="text-base sm:text-lg font-bold text-white">{project.name}</h3>
          </div>
          {project.id === 3 && (
            <a 
              href="https://unsplash.com/photos/black-and-white-tripod-on-green-grass-field-during-daytime-zSrksQgp4W0"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 text-xs text-gray-300 hover:text-white transition-colors bg-black/50 px-2 py-1 rounded"
            >
              Valerie V. 2021, Aug 5th. Unsplash
            </a>
          )}
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
            <ul className="space-y-1">
              {Array.isArray(project.learningExperience) ? project.learningExperience.map((item, index) => (
                <li key={index} className="text-gray-300 text-xs leading-relaxed flex items-start">
                  <span className="text-orange-400 mr-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              )) : (
                <p className="text-gray-300 text-xs leading-relaxed">{project.learningExperience}</p>
              )}
            </ul>
            <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-2 rounded border-l-2 border-orange-400">
              <ul className="space-y-1">
                {Array.isArray(project.futurePlans) ? project.futurePlans.map((item, index) => (
                  <li key={index} className="text-gray-300 text-xs flex items-start">
                    <span className="text-orange-400 mr-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                )) : (
                  <p className="text-gray-300 text-xs">{project.futurePlans}</p>
                )}
              </ul>
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
