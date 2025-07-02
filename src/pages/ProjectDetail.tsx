import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Code, FileText, TestTube, Lightbulb } from "lucide-react";

const ProjectDetail = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const personalProjects = [
    {
      id: 1,
      name: "Sunrise Simulight",
      skills: ["Arduino", "Python", "Systems Integration", "IoT"],
      image: "/images/SimuLight Wide Banner Website.png",
      purpose: "To create a natural sunrise simulation device that helps regulate circadian rhythms and improve sleep quality. The motivation came from experiencing seasonal affective disorder and wanting to create a more natural wake-up experience.",
      development: "Developed using Arduino microcontrollers with wireless connectivity. Implemented gradual light intensity control using PWM signals and color temperature adjustment. Integrated with smartphone apps for scheduling and remote control.",
      documentation: "Complete circuit diagrams, PCB layouts, and Arduino code documentation. User manual with setup instructions and troubleshooting guide. API documentation for mobile app integration.",
      results: "Successfully created a working prototype that simulates sunrise over 30-60 minutes. Positive user feedback on improved wake-up experience. Power consumption optimized to 85% efficiency compared to initial design.",
      futurePlans: "Plan to make a standalone mobile application for users to control the lights and set the schedule, to shift away from the reliance on other apps and services. Also considering integration with smart home systems."
    },
    {
      id: 2,
      name: "Arduino Based Macro Keyboard",
      skills: ["Arduino", "C++", "Electronics", "User-Centric Design"],
      image: "/images/MacroKeyboard Banner Website.png",
      purpose: "To create an affordable, customizable macro keyboard for users with accessibility needs and productivity enthusiasts. Motivated by the high cost of commercial solutions and lack of customization options.",
      development: "Built using Arduino Pro Micro with custom PCB design. Implemented mechanical key switches with programmable functions. Developed custom firmware for key mapping and macro recording.",
      documentation: "Schematic designs, PCB fabrication files, and assembly instructions. Firmware documentation with programming guide. Custom key mapping software user guide.",
      results: "Created a fully functional 12-key macro keyboard with programmable functions. Reduced cost by 60% compared to commercial alternatives. Positive feedback from accessibility community testing.",
      futurePlans: "Plan to develop a fully customizable keyboard layout software for users, allowing them to adjust settings and configurations without needing third-party applications or services."
    },
    {
      id: 3,
      name: "RC Airplane Based Land Surveying System",
      skills: ["Raspberry Pi", "Python", "LiDAR", "GPS"],
      image: "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      purpose: "To develop a cost-effective aerial surveying solution for small-scale land mapping and agricultural monitoring. Motivated by the high cost of commercial drone surveying services.",
      development: "Currently building a radio controlled airplane equipped with Raspberry Pi, high-resolution camera, and GPS module. Developing flight path automation and image stitching algorithms.",
      documentation: "Aircraft design specifications, payload integration plans, and flight control documentation. Image processing pipeline documentation and GPS coordinate mapping algorithms.",
      results: "Aircraft frame completed with successful test flights. Camera mounting system designed and tested. GPS coordinate logging system functional with 2-meter accuracy.",
      futurePlans: "Hoping to expand into LiDAR and GPS integration to create a more accurate 3D model of the land. Planning to add real-time data transmission capabilities."
    }
  ];

  const teamProjects = [
    {
      id: 1,
      teamSize: 25,
      teamName: "USST - University of Saskatchewan Space Design Team",
      projectName: "USST Rocket Project: Up ↑",
      skills: ["OpenRocket", "Fusion 360", "ANSYS", "SolidWorks", "OnShape"],
      image: "/images/Rocket Full Length.png",
      purpose: "To design and launch an 8ft M-class rocket for Launch Canada 2025, advancing student knowledge in aerospace engineering and contributing to Canada's space technology development.",
      development: "Collaborative design process using SolidWorks, Fusion360, and OnShape for CAD modeling. ANSYS simulations for structural analysis and OpenRocket for flight trajectory optimization. Iterative design reviews and testing protocols.",
      documentation: "Comprehensive design documentation including structural analysis reports, flight simulation data, and safety protocols. Manufacturing drawings and assembly procedures. Launch procedure documentation and emergency protocols.",
      results: "Completed rocket design with successful ground testing of propulsion systems. Structural analysis confirms safety margins exceed requirements. Team coordination improved project timeline efficiency by 30%.",
      futurePlans: "Successful launch at Launch Canada 2025. Planning for next generation rocket with increased payload capacity and advanced telemetry systems.",
      myRole: "Created CAD models using Solidworks, Fusion360, and OnShape, and used ANSYS and OpenRocket to optimize performance. Managed timelines, organized meetings, and coordinated reviews."
    },
    {
      id: 2,
      teamSize: 35,
      teamName: "4627 Manning Robotics",
      projectName: "Thor & Loki",
      skills: ["Fusion 360 Simulation", "Fusion 360 Assemblies", "Team Leadership", "Manufacturing"],
      image: "/images/4627Thor.png",
      purpose: "To design and build competitive robots for the 2023 FRC Charged Up challenge, focusing on efficient game piece manipulation and autonomous navigation capabilities.",
      development: "Designed drive train systems using Fusion 360 with extensive simulation testing. Implemented iterative design process with rapid prototyping. Coordinated manufacturing processes with team members.",
      documentation: "Complete CAD assemblies with manufacturing drawings. Drive train optimization reports and simulation results. Team coordination protocols and project timeline documentation.",
      results: "Achieved top rankings at regional and international FRC events. Drive train system demonstrated 95% reliability during competitions. Team efficiency improved through systematic design processes.",
      futurePlans: "Continued participation in FRC competitions with improved designs based on lessons learned. Mentoring new team members in design and manufacturing processes.",
      myRole: "Drive train systems lead engineer responsible for gearbox design and system optimization, contributing to top rankings at regional and international events."
    },
    {
      id: 3,
      teamSize: 3,
      teamName: "Manning Robotics",
      projectName: "2023 Skills Alberta Robotics Competition",
      skills: ["Machining", "Circuit Design", "Problem Solving", "Technical Documentation", "Fabrication"],
      image: "/images/skillsbot.JPG",
      purpose: "To design and build specialized hockey robots for the Skills Alberta competition, demonstrating precision control and strategic gameplay capabilities.",
      development: "Led team through complete design cycle from concept to competition. Implemented precision machining for critical components and custom circuit design for control systems.",
      documentation: "Technical specifications and assembly procedures. Circuit diagrams and programming documentation. Competition strategy and performance analysis reports.",
      results: "Successfully completed two functional hockey robots with precision control systems. Demonstrated effective team leadership and project management skills. Achieved competition readiness within timeline constraints.",
      futurePlans: "Application of lessons learned to future robotics projects. Continued development of precision control systems for robotic applications.",
      myRole: "Team leader responsible for coordinating design, prototyping, documentation, and testing to optimize robot functionality and precision."
    },
    {
      id: 4,
      teamSize: 6,
      teamName: "ExoSpace",
      projectName: "2024 NASA Space Apps Challenge",
      skills: ["HTML", "CSS", "JavaScript", "NASA API"],
      image: "https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg?w=600&h=300&fit=crop",
      purpose: "To develop innovative web-based solutions for space exploration challenges using NASA's open data and APIs. Motivated by the opportunity to contribute to space science and technology advancement.",
      development: "Developed responsive web application using modern JavaScript frameworks. Integrated NASA APIs for real-time space data visualization. Implemented user-friendly interfaces for complex space data.",
      documentation: "API integration documentation and data visualization specifications. User interface design guidelines and deployment procedures. Challenge solution documentation and presentation materials.",
      results: "Successfully developed and deployed functional web application within 48-hour challenge timeframe. Demonstrated effective team collaboration and rapid prototyping skills. Positive feedback from NASA challenge judges.",
      futurePlans: "Continued development of space technology applications. Potential collaboration opportunities with space agencies and research institutions.",
      myRole: "Team member responsible for brainstorming, coding, and prototyping solutions to address key challenges in space science and technology."
    }
  ];

  const project = type === 'personal' 
    ? personalProjects.find(p => p.id === parseInt(id || '0'))
    : teamProjects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const projectTitle = type === 'personal' ? (project as any).name : (project as any).projectName;
  const projectImage = project.image;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-16">
        {/* Header */}
        <div className="relative">
          <div className="h-64 sm:h-80 md:h-96 overflow-hidden">
            <img 
              src={projectImage} 
              alt={projectTitle}
              className="w-full h-full object-contain sm:object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
          </div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-4 py-6">
              <div className="mb-4">
                <Button 
                  onClick={() => navigate(type === 'personal' ? '/personal-projects' : '/team-projects')}
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to {type === 'personal' ? 'Personal' : 'Team'} Projects
                </Button>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{projectTitle}</h1>
              
              {type === 'team' && (
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-blue-900 text-blue-200">
                    {(project as any).teamName}
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-900 text-purple-200">
                    {(project as any).teamSize} team members
                  </Badge>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Purpose/Motivation */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="h-5 w-5 text-blue-400" />
                  Purpose & Motivation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{project.purpose}</p>
              </CardContent>
            </Card>

            {/* Schematics/Development */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Code className="h-5 w-5 text-green-400" />
                  Schematics & Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{project.development}</p>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileText className="h-5 w-5 text-purple-400" />
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{project.documentation}</p>
              </CardContent>
            </Card>

            {/* Tests/Results */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <TestTube className="h-5 w-5 text-orange-400" />
                  Tests & Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{project.results}</p>
              </CardContent>
            </Card>
          </div>

          {/* Future Plans - Full Width */}
          <Card className="bg-gray-800 border-gray-700 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Lightbulb className="h-5 w-5 text-yellow-400" />
                Future Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">{project.futurePlans}</p>
            </CardContent>
          </Card>

          {/* My Role - Only for team projects */}
          {type === 'team' && (
            <Card className="bg-gray-800 border-gray-700 mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="h-5 w-5 text-cyan-400" />
                  My Role
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{(project as any).myRole}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;