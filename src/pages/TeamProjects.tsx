import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Award, Code, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const TeamProjects = () => {
  const navigate = useNavigate();
  const showcaseProject = {
    teamSize: 25,
    teamName: "USST - University of Saskatchewan Space Design Team",
    projectName: "USST Rocket Project: Up ↑",
    skills: ["OpenRocket", "Fusion 360", "ANSYS", "SolidWorks", "OnShape"],
    image: "/images/Rocket Full Length.png",
    description: [
      "Collaborated as a part of the propulsion and systems sub-team at the University of Saskatchewan Space Design Team (USST) to design and optimize components for the launch of an 8ft M-class rocket at Launch Canada 2025",
      "Demonstrated the capabilities of student-led engineering teams in developing complex aerospace systems that meet professional industry standards and safety requirements",
      "Contributed to Canada's growing space sector by developing innovative propulsion and structural design solutions for small-scale rocket systems",
      "Provided hands-on learning opportunities for students in rocket propulsion, aerodynamics, structural analysis, and systems integration",
      "Established the University of Saskatchewan as a leader in student aerospace engineering education and research"
    ],
    myRole: [
      "Created CAD models using Solidworks, Fusion360, and OnShape for all major rocket components including nose cone, body tubes, and fin assemblies",
      "Used ANSYS and OpenRocket to optimize performance through aerodynamic analysis, structural testing, and trajectory simulation",
      "Managed timelines and coordinated cross-functional team meetings between propulsion, structures, and avionics sub-teams",
      "Organized design reviews and technical presentations to ensure all team members understood project requirements and constraints",
      "Coordinated reviews with faculty advisors and industry mentors to validate design approaches and safety considerations"
    ]
  };

  const teamProjects = [
    {
      id: 1,
      teamSize: 35,
      teamName: "4627 Manning Robotics",
      projectName: "Thor & Loki",
      skills: ["Fusion 360 Simulation", "Fusion 360 Assemblies", "Team Leadership", "Manufacturing"],
      image: "/images/4627Thor.png",
      description: [
        "Designed and maintained the drive train systems for 4627 Manning Robotics during the 2023 FRC Charged Up challenge",
        "Demonstrated advanced robotics engineering principles through practical application in competitive environments with real-time problem solving",
        "Developed innovative solutions for complex mechanical systems including drive trains, manipulators, and autonomous control systems",
        "Fostered teamwork and leadership skills through collaborative design processes and competition strategy development",
        "Represented Manning Robotics at regional and international levels while showcasing technical excellence and sportsmanship"
      ],
      myRole: [
        "Drive train systems lead engineer responsible for gearbox design and system optimization, achieving 95% reliability during competitions",
        "Contributed to top rankings at regional and international events through innovative design solutions and effective team coordination",
        "Led design reviews and technical presentations to ensure all team members understood system requirements and performance expectations",
        "Coordinated manufacturing processes including material procurement, tooling setup, and quality control procedures",
        "Mentored junior team members in CAD modeling, simulation techniques, and manufacturing processes for skill development"
      ]
    },
    {
      id: 2,
      teamSize: 3,
      teamName: "Manning Robotics",
      projectName: "2023 Skills Alberta Robotics Competition",
      skills: ["Machining", "Circuit Design", "Problem Solving", "Technical Documentation", "Fabrication",],
      image: "/images/skillsbot.JPG",
      description: [
        "Led a team of 3 to design and engineer two high-performance hockey robots for the 2023 Skills Robotics Competition",
        "Showcased advanced robotics engineering skills in a competitive environment requiring real-time problem solving and technical innovation",
        "Developed specialized control systems for precise movement and game piece manipulation in fast-paced competitive scenarios",
        "Demonstrated effective project management and team leadership skills in high-pressure competition environments",
        "Represented Manning Robotics and showcased technical excellence in precision engineering and robotic control systems"
      ],
      myRole: [
        "Team leader responsible for coordinating design, prototyping, documentation, and testing to optimize robot functionality and precision",
        "Led complete project lifecycle from initial concept development through final competition preparation and execution",
        "Managed team resources and timelines to ensure on-time completion of all project deliverables and competition requirements",
        "Coordinated technical design reviews and quality control procedures to maintain high standards throughout development process",
        "Mentored team members in technical skills including machining, circuit design, and programming for comprehensive skill development"
      ]
    },
    {
      id: 3,
      teamSize: 6,
      teamName: "ExoSpace",
      projectName: "2024 NASA Space Apps Challenge",
      skills: ["HTML", "CSS", "JavaScript", "NASA API"],
      image: "https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg?w=600&h=300&fit=crop",
      description: [
        "Competed in the 2024 NASA Space Apps Challenge, developing innovative solutions for space exploration and technology",
        "Demonstrated the potential of web technologies in making complex space data accessible and useful for researchers, educators, and the public",
        "Addressed specific challenges identified by NASA in areas such as data visualization, public engagement, and scientific communication",
        "Showcased collaborative problem-solving skills in a time-constrained environment requiring rapid prototyping and innovative thinking",
        "Contributed to space science advancement through creative use of publicly available space data and APIs"
      ],
      myRole: [
        "Team member responsible for brainstorming, coding, and prototyping solutions to address key challenges in space science and technology",
        "Contributed to front-end development including responsive design, user interface implementation, and data visualization components",
        "Assisted with API integration and data processing to ensure reliable access to NASA data sources and efficient data handling",
        "Participated in team coordination and project management to ensure timely completion of all deliverables within competition constraints",
        "Contributed to technical documentation and presentation materials for competition judges and potential stakeholders"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-4 mb-2">
              <Link to="/">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Team Projects</h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Collaborative engineering projects that showcase teamwork, leadership, and collective problem-solving. 
              These projects demonstrate my ability to work effectively in diverse technical teams.
            </p>
          </div>
        </div>

        {/* Showcase Project */}
        <section className="relative overflow-hidden pt-4 md:pt-8">
          {/* Background Image */}
          <div className="w-full h-[140px] sm:h-[200px] md:h-[300px] relative">
            <img 
              src={showcaseProject.image} 
              alt={showcaseProject.projectName}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative flex items-end">
            <div className="w-full max-w-7xl mx-auto px-4 py-3 md:pb-4">
              <div className="bg-gray-800/95 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-6 shadow-2xl border border-gray-700 max-w-5xl cursor-pointer" onClick={() => navigate(`/project/team/1`)}>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                  <span className="text-xs sm:text-sm font-medium text-purple-400 uppercase tracking-wide">Showcase Project</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">{showcaseProject.projectName}</h2>
                <ul className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed space-y-2">
                  {Array.isArray(showcaseProject.description) ? showcaseProject.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-400 mr-2 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  )) : (
                    <p>{showcaseProject.description}</p>
                  )}
                </ul>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Team Size</p>
                        <p className="text-sm sm:text-base font-semibold text-white">{showcaseProject.teamSize} members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Team Name</p>
                        <p className="text-sm sm:text-base font-semibold text-white">{showcaseProject.teamName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mt-1" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Key Technologies</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                          {showcaseProject.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-purple-900 text-purple-200 text-xs sm:text-sm py-0.5">
                              {skill}
                            </Badge>
                          ))}
                          {showcaseProject.skills.length > 3 && (
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs sm:text-sm py-0.5">
                              +{showcaseProject.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                      <p className="text-xs sm:text-sm text-gray-400 font-semibold">My Role</p>
                    </div>
                    <ul className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-2">
                      {Array.isArray(showcaseProject.myRole) ? showcaseProject.myRole.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-400 mr-2 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      )) : (
                        <p>{showcaseProject.myRole}</p>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Team Projects */}
        <section className="py-8 sm:py-12 md:py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Other Team Projects</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
              Additional collaborative projects that have contributed to my growth as a team player and technical contributor.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {teamProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg cursor-pointer" onClick={() => navigate(`/project/team/${project.id + 1}`)}>
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.projectName}
                    className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{project.projectName}</h3>
                    <p className="text-xs sm:text-sm text-gray-300">{project.teamName}</p>
                  </div>
                  {project.id === 3 && (
                    <a 
                      href="https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 text-xs text-gray-300 hover:text-white transition-colors bg-black/50 px-2 py-1 rounded"
                    >
                      NASA/JPL-Caltech
                    </a>
                  )}
                </div>
                
                <CardContent className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="h-4 w-4" />
                    <span className="text-xs sm:text-sm font-medium">{project.teamSize} team members</span>
                  </div>
                  
                  <ul className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-1">
                    {Array.isArray(project.description) ? project.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    )) : (
                      <p>{project.description}</p>
                    )}
                  </ul>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <h4 className="font-semibold text-white text-xs sm:text-sm">My Role</h4>
                    <ul className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-1">
                      {Array.isArray(project.myRole) ? project.myRole.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-400 mr-2 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      )) : (
                        <p>{project.myRole}</p>
                      )}
                    </ul>
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <h4 className="font-semibold text-white text-xs sm:text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-900 text-blue-200 text-xs py-0.5">
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
