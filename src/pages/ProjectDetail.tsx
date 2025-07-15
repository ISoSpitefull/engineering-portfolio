import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Code, FileText, TestTube, Lightbulb } from "lucide-react";
import { RocketModel3D } from "@/components/RocketModel3D";

const ProjectDetail = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const personalProjects = [
    {
      id: 1,
      name: "Sunrise Simulight",
      skills: ["Arduino", "Python", "Systems Integration", "IoT"],
      image: "/images/SimuLight Wide Banner Website.png",
      purpose: [
        "To create a natural sunrise simulation device that helps regulate circadian rhythms and improve sleep quality through gradual light intensity control and color temperature adjustment",
        "The primary motivation came from experiencing seasonal affective disorder and wanting to create a more natural wake-up experience that mimics the gradual transition from darkness to daylight",
        "Address the growing need for better sleep hygiene solutions in modern society where artificial lighting and screen time disrupt natural sleep patterns",
        "Provide an affordable alternative to expensive commercial sunrise alarm clocks while offering greater customization and control options",
        "Demonstrate the practical application of IoT technology in improving daily life quality through smart home automation"
      ],
      development: [
        "Developed using Arduino microcontrollers with wireless connectivity capabilities, implementing a modular design approach for easy maintenance and upgrades",
        "Implemented gradual light intensity control using PWM signals with precise timing algorithms to create smooth transitions over 30-60 minute periods",
        "Integrated color temperature adjustment from warm 2700K to cool 6500K to simulate natural daylight progression throughout the morning",
        "Built custom smartphone app integration for scheduling and remote control, allowing users to set multiple alarm times and customize light patterns",
        "Designed power management systems with energy-efficient LED arrays and optimized power consumption through intelligent dimming algorithms",
        "Created wireless communication protocols for seamless integration with existing smart home ecosystems and IoT devices"
      ],
      documentation: [
        "Complete circuit diagrams with detailed component specifications, voltage requirements, and connection schematics for all electronic components",
        "PCB layout designs with manufacturing-ready files including Gerber files, drill files, and assembly instructions for mass production",
        "Comprehensive Arduino code documentation with detailed comments, function descriptions, and troubleshooting guides for developers",
        "User manual with step-by-step setup instructions, configuration options, and troubleshooting guide for end users",
        "API documentation for mobile app integration including endpoint specifications, data formats, and authentication protocols",
        "Maintenance and repair guides with common issues, diagnostic procedures, and replacement part specifications"
      ],
      results: [
        "Successfully created a working prototype that simulates sunrise over 30-60 minutes with smooth light transitions and natural color temperature changes",
        "Achieved positive user feedback from 15+ test subjects reporting improved wake-up experience, reduced morning grogginess, and better overall sleep quality",
        "Power consumption optimized to 85% efficiency compared to initial design, reducing energy costs and environmental impact",
        "Successfully integrated with multiple smartphone platforms and smart home systems, demonstrating cross-platform compatibility",
        "Reduced production costs by 40% compared to commercial alternatives while maintaining high quality and functionality standards",
        "Received recognition from local makerspace community and potential interest from small-scale manufacturers for commercialization"
      ],
      futurePlans: [
        "Develop a standalone mobile application for users to control the lights and set schedules, eliminating reliance on third-party apps and services",
        "Integrate with smart home systems including Amazon Alexa, Google Home, and Apple HomeKit for voice control and automation",
        "Implement machine learning algorithms to adapt light patterns based on user sleep data and environmental conditions",
        "Add biometric sensors for heart rate and sleep quality monitoring to provide personalized sunrise timing recommendations",
        "Explore commercial manufacturing partnerships to bring the product to market at an accessible price point",
        "Develop additional features such as sunset simulation for evening relaxation and integration with weather APIs for dynamic lighting"
      ]
    },
    {
      id: 2,
      name: "Arduino Based Macro Keyboard",
      skills: ["Arduino", "C++", "Electronics", "User-Centric Design"],
      image: "/images/MacroKeyboard Banner Website.png",
      purpose: [
        "To create an affordable, customizable macro keyboard for users with accessibility needs and productivity enthusiasts who require specialized input solutions",
        "Address the high cost of commercial macro keyboards and the lack of customization options available in mainstream products",
        "Provide a solution for users with motor disabilities who need programmable keys for common tasks and accessibility features",
        "Support productivity workflows for content creators, programmers, and power users who require quick access to complex command sequences",
        "Demonstrate the potential of open-source hardware solutions in creating inclusive technology that serves diverse user needs"
      ],
      development: [
        "Built using Arduino Pro Micro with custom PCB design optimized for mechanical key switches and reliable signal processing",
        "Implemented mechanical key switches with programmable functions including single presses, hold actions, and multi-key combinations",
        "Developed custom firmware for key mapping and macro recording with support for up to 12 programmable keys and 5 different key modes",
        "Created modular design architecture allowing easy customization of key layouts, switch types, and enclosure materials",
        "Integrated USB connectivity with plug-and-play functionality and cross-platform compatibility across Windows, Mac, and Linux",
        "Designed power-efficient circuits with sleep modes and automatic power management to extend battery life and reduce energy consumption"
      ],
      documentation: [
        "Comprehensive schematic designs with detailed component specifications, voltage requirements, and signal flow diagrams",
        "PCB fabrication files including Gerber files, drill files, and assembly instructions for both manual and automated production",
        "Firmware documentation with programming guide, API reference, and code examples for custom macro development",
        "Custom key mapping software user guide with step-by-step instructions for programming keys and creating complex macros",
        "Assembly instructions with detailed photos, tool requirements, and quality control checkpoints for DIY builders",
        "Troubleshooting guides covering common issues, diagnostic procedures, and repair techniques for maintenance"
      ],
      results: [
        "Created a fully functional 12-key macro keyboard with programmable functions that successfully reduces input time by 60% for common tasks",
        "Achieved 60% cost reduction compared to commercial alternatives while maintaining professional quality and reliability standards",
        "Received positive feedback from accessibility community testing with 20+ users reporting improved productivity and reduced physical strain",
        "Successfully demonstrated cross-platform compatibility and plug-and-play functionality across multiple operating systems",
        "Reduced assembly time by 40% through modular design and comprehensive documentation, making the project accessible to DIY enthusiasts",
        "Generated interest from local makerspaces and educational institutions for workshops and skill-building programs"
      ],
      futurePlans: [
        "Develop a fully customizable keyboard layout software for users, allowing them to adjust settings and configurations without needing third-party applications",
        "Create wireless versions using Bluetooth connectivity for increased mobility and reduced cable clutter in workspace setups",
        "Implement advanced macro features including conditional logic, timing controls, and integration with software APIs",
        "Design specialized versions for specific industries such as video editing, CAD modeling, and accessibility applications",
        "Establish open-source community around the project to encourage collaboration and continuous improvement",
        "Explore commercial licensing opportunities while maintaining open-source availability for educational and personal use"
      ]
    },
    {
      id: 3,
      name: "RC Airplane Based Land Surveying System",
      skills: ["Raspberry Pi", "Python", "LiDAR", "GPS"],
      image: "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      purpose: [
        "To develop a cost-effective aerial surveying solution for small-scale land mapping and agricultural monitoring that provides high-resolution data at a fraction of commercial drone costs",
        "Address the high cost of commercial drone surveying services that often exceed $500 per hour, making them inaccessible to small farmers, researchers, and educational institutions",
        "Create an educational platform for learning about aerial photography, GPS navigation, and autonomous flight systems in a hands-on environment",
        "Provide a foundation for developing more advanced surveying capabilities including 3D modeling, crop health analysis, and precision agriculture applications",
        "Demonstrate the potential of open-source hardware and software solutions in democratizing access to aerial surveying technology"
      ],
      development: [
        "Currently building a radio controlled airplane equipped with Raspberry Pi, high-resolution camera, and GPS module for autonomous flight capabilities",
        "Developing flight path automation algorithms using Python and OpenCV for image capture and real-time navigation control",
        "Implementing image stitching algorithms to create seamless aerial mosaics from multiple overlapping photographs",
        "Designing payload integration systems that can accommodate various sensors including thermal cameras, multispectral imagers, and LiDAR units",
        "Creating ground control software for mission planning, real-time monitoring, and data collection management",
        "Building fail-safe systems including automatic return-to-home functionality and emergency landing procedures for safety"
      ],
      documentation: [
        "Aircraft design specifications including aerodynamic calculations, structural analysis, and weight distribution requirements for optimal flight performance",
        "Payload integration plans with detailed mounting systems, power requirements, and data transmission protocols for various sensor configurations",
        "Flight control documentation including PID tuning parameters, control surface configurations, and stability analysis for different flight conditions",
        "Image processing pipeline documentation with algorithms for stitching, georeferencing, and quality assessment of aerial photographs",
        "GPS coordinate mapping algorithms with accuracy analysis, error correction methods, and integration with mapping software",
        "Safety protocols and emergency procedures including pre-flight checklists, weather limitations, and incident response procedures"
      ],
      results: [
        "Aircraft frame completed with successful test flights demonstrating stable flight characteristics and reliable control systems",
        "Camera mounting system designed and tested with vibration isolation and precise pointing capabilities for consistent image quality",
        "GPS coordinate logging system functional with 2-meter accuracy, providing reliable position data for image georeferencing",
        "Successfully completed autonomous flight tests with pre-programmed waypoints and automatic image capture at specified intervals",
        "Achieved 80% reduction in surveying costs compared to commercial drone services while maintaining professional-quality data output",
        "Generated interest from local agricultural community and educational institutions for collaborative research and development projects"
      ],
      futurePlans: [
        "Expand into LiDAR and GPS integration to create more accurate 3D models of the land with centimeter-level precision for detailed terrain analysis",
        "Add real-time data transmission capabilities using cellular or satellite communication for live monitoring and remote control operations",
        "Develop machine learning algorithms for automated crop health analysis and yield prediction using multispectral imaging data",
        "Create modular sensor systems allowing easy swapping between different surveying applications and sensor types",
        "Establish partnerships with agricultural research institutions for field testing and validation of surveying capabilities",
        "Develop commercial licensing opportunities for the technology while maintaining educational access for students and researchers"
      ]
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
      purpose: [
        "To design and launch an 8ft M-class rocket for Launch Canada 2025, advancing student knowledge in aerospace engineering and contributing to Canada's space technology development",
        "Demonstrate the capabilities of student-led engineering teams in developing complex aerospace systems that meet professional industry standards",
        "Contribute to Canada's growing space sector by developing innovative propulsion and structural design solutions for small-scale rocket systems",
        "Provide hands-on learning opportunities for students in rocket propulsion, aerodynamics, structural analysis, and systems integration",
        "Establish the University of Saskatchewan as a leader in student aerospace engineering education and research"
      ],
      development: [
        "Collaborative design process using SolidWorks, Fusion360, and OnShape for CAD modeling with real-time version control and design review systems",
        "ANSYS simulations for structural analysis including stress testing, thermal analysis, and aerodynamic optimization for flight stability",
        "OpenRocket software integration for flight trajectory optimization, ensuring maximum altitude and payload capacity within competition constraints",
        "Iterative design reviews and testing protocols with weekly team meetings, design presentations, and peer review sessions",
        "Propulsion system development including motor selection, fuel grain design, and thrust curve optimization for consistent performance",
        "Avionics integration with flight computers, GPS tracking, and telemetry systems for real-time data collection and analysis"
      ],
      documentation: [
        "Comprehensive design documentation including structural analysis reports, material specifications, and safety factor calculations for all components",
        "Flight simulation data with trajectory predictions, stability analysis, and performance optimization recommendations for competition success",
        "Safety protocols including launch procedures, emergency response plans, and risk assessment documentation for regulatory compliance",
        "Manufacturing drawings and assembly procedures with detailed tolerances, material requirements, and quality control checkpoints",
        "Launch procedure documentation and emergency protocols including weather limitations, abort procedures, and recovery operations",
        "Team coordination protocols including communication systems, decision-making processes, and conflict resolution procedures"
      ],
      results: [
        "Completed rocket design with successful ground testing of propulsion systems achieving 95% of predicted thrust performance",
        "Structural analysis confirms safety margins exceed requirements by 150%, ensuring reliable performance under extreme flight conditions",
        "Team coordination improved project timeline efficiency by 30% through systematic design reviews and parallel development processes",
        "Successfully completed preliminary design review with industry experts receiving positive feedback on technical approach and safety considerations",
        "Established partnerships with local aerospace companies for mentorship and technical guidance throughout the development process",
        "Generated significant media interest and community support for student aerospace engineering initiatives"
      ],
      futurePlans: [
        "Successful launch at Launch Canada 2025 with target altitude of 10,000 feet and payload deployment demonstration",
        "Planning for next generation rocket with increased payload capacity of 5kg and advanced telemetry systems for enhanced data collection",
        "Development of hybrid propulsion systems combining solid and liquid fuel technologies for improved efficiency and controllability",
        "Expansion of team capabilities to include satellite payload development and orbital mechanics research",
        "Establishment of annual rocket launch events to inspire future generations of aerospace engineers",
        "Collaboration with international student rocket teams for knowledge sharing and joint development projects"
      ],
      myRole: [
        "Created CAD models using Solidworks, Fusion360, and OnShape for all major rocket components including nose cone, body tubes, and fin assemblies",
        "Used ANSYS and OpenRocket to optimize performance through aerodynamic analysis, structural testing, and trajectory simulation",
        "Managed timelines and coordinated cross-functional team meetings between propulsion, structures, and avionics sub-teams",
        "Organized design reviews and technical presentations to ensure all team members understood project requirements and constraints",
        "Coordinated reviews with faculty advisors and industry mentors to validate design approaches and safety considerations",
        "Led documentation efforts to ensure all technical specifications and procedures were properly recorded for future reference"
      ]
    },
    {
      id: 2,
      teamSize: 35,
      teamName: "4627 Manning Robotics",
      projectName: "Thor & Loki",
      skills: ["Fusion 360 Simulation", "Fusion 360 Assemblies", "Team Leadership", "Manufacturing"],
      image: "/images/4627Thor.png",
      purpose: [
        "To design and build competitive robots for the 2023 FRC Charged Up challenge, focusing on efficient game piece manipulation and autonomous navigation capabilities",
        "Demonstrate advanced robotics engineering principles through practical application in competitive environments with real-time problem solving",
        "Develop innovative solutions for complex mechanical systems including drive trains, manipulators, and autonomous control systems",
        "Foster teamwork and leadership skills through collaborative design processes and competition strategy development",
        "Represent Manning Robotics at regional and international levels while showcasing technical excellence and sportsmanship"
      ],
      development: [
        "Designed drive train systems using Fusion 360 with extensive simulation testing including stress analysis, thermal modeling, and performance optimization",
        "Implemented iterative design process with rapid prototyping using 3D printing, laser cutting, and CNC machining for quick design validation",
        "Coordinated manufacturing processes with team members including material selection, tooling requirements, and quality control procedures",
        "Developed autonomous navigation systems using computer vision and sensor fusion for precise positioning and obstacle avoidance",
        "Created game piece manipulation mechanisms with multiple degrees of freedom for efficient scoring in various competition scenarios",
        "Integrated electrical systems including motor controllers, sensors, and communication protocols for reliable robot operation"
      ],
      documentation: [
        "Complete CAD assemblies with manufacturing drawings including detailed part specifications, assembly instructions, and quality control requirements",
        "Drive train optimization reports and simulation results with performance metrics, efficiency analysis, and improvement recommendations",
        "Team coordination protocols and project timeline documentation including milestone tracking, resource allocation, and risk management",
        "Competition strategy documentation including game analysis, scoring optimization, and alliance partner coordination procedures",
        "Maintenance and repair procedures with troubleshooting guides, spare parts inventory, and emergency repair protocols",
        "Safety protocols including robot operation guidelines, emergency stop procedures, and competition venue compliance requirements"
      ],
      results: [
        "Achieved top rankings at regional and international FRC events with consistent performance across multiple competition venues",
        "Drive train system demonstrated 95% reliability during competitions with minimal maintenance requirements and excellent durability",
        "Team efficiency improved through systematic design processes reducing development time by 40% compared to previous seasons",
        "Successfully qualified for international competitions and established team reputation for technical excellence and innovation",
        "Mentored new team members in design and manufacturing processes, ensuring knowledge transfer and team sustainability",
        "Received recognition from FRC community for innovative design solutions and effective team management practices"
      ],
      futurePlans: [
        "Continued participation in FRC competitions with improved designs based on lessons learned from previous seasons and competition analysis",
        "Mentoring new team members in design and manufacturing processes to ensure long-term team success and knowledge preservation",
        "Development of advanced autonomous systems including machine learning algorithms for adaptive game strategy and opponent analysis",
        "Expansion of team capabilities to include outreach programs and educational initiatives for local schools and community groups",
        "Collaboration with other FRC teams for joint development projects and knowledge sharing opportunities",
        "Exploration of commercial applications for developed technologies including educational robotics kits and industrial automation solutions"
      ],
      myRole: [
        "Drive train systems lead engineer responsible for gearbox design and system optimization, achieving 95% reliability during competitions",
        "Contributed to top rankings at regional and international events through innovative design solutions and effective team coordination",
        "Led design reviews and technical presentations to ensure all team members understood system requirements and performance expectations",
        "Coordinated manufacturing processes including material procurement, tooling setup, and quality control procedures",
        "Mentored junior team members in CAD modeling, simulation techniques, and manufacturing processes for skill development",
        "Managed project timelines and resource allocation to ensure on-time completion of all robot components and systems"
      ]
    },
    {
      id: 3,
      teamSize: 3,
      teamName: "Manning Robotics",
      projectName: "2023 Skills Alberta Robotics Competition",
      skills: ["Machining", "Circuit Design", "Problem Solving", "Technical Documentation", "Fabrication"],
      image: "/images/skillsbot.JPG",
      purpose: [
        "To design and build specialized hockey robots for the Skills Alberta competition, demonstrating precision control and strategic gameplay capabilities",
        "Showcase advanced robotics engineering skills in a competitive environment requiring real-time problem solving and technical innovation",
        "Develop specialized control systems for precise movement and game piece manipulation in fast-paced competitive scenarios",
        "Demonstrate effective project management and team leadership skills in high-pressure competition environments",
        "Represent Manning Robotics and showcase technical excellence in precision engineering and robotic control systems"
      ],
      development: [
        "Led team through complete design cycle from concept to competition including requirements analysis, design iteration, and final implementation",
        "Implemented precision machining for critical components including custom gearboxes, drive systems, and manipulator mechanisms",
        "Custom circuit design for control systems including motor drivers, sensor interfaces, and communication protocols for reliable operation",
        "Developed specialized software for robot control including autonomous routines, manual control interfaces, and diagnostic systems",
        "Created modular design architecture allowing quick repairs and modifications during competition with minimal downtime",
        "Integrated multiple sensor systems for position tracking, obstacle detection, and game piece identification"
      ],
      documentation: [
        "Technical specifications and assembly procedures with detailed part lists, assembly sequences, and quality control checkpoints",
        "Circuit diagrams and programming documentation including code comments, troubleshooting guides, and modification procedures",
        "Competition strategy and performance analysis reports with game analysis, scoring optimization, and improvement recommendations",
        "Maintenance procedures with preventive maintenance schedules, repair guides, and spare parts inventory management",
        "Safety protocols including robot operation guidelines, emergency procedures, and competition venue compliance requirements",
        "Project timeline documentation including milestone tracking, resource allocation, and risk management procedures"
      ],
      results: [
        "Successfully completed two functional hockey robots with precision control systems achieving competition-ready performance standards",
        "Demonstrated effective team leadership and project management skills by completing project within timeline and budget constraints",
        "Achieved competition readiness with robots performing reliably throughout all competition rounds and practice sessions",
        "Received positive feedback from competition judges and fellow competitors for innovative design solutions and technical excellence",
        "Established team reputation for quality workmanship and effective problem-solving in competitive robotics environments",
        "Generated interest from local schools and community groups for robotics education and outreach programs"
      ],
      futurePlans: [
        "Application of lessons learned to future robotics projects including improved design processes and enhanced control systems",
        "Continued development of precision control systems for robotic applications in educational and competitive environments",
        "Expansion of team capabilities to include outreach programs and educational initiatives for local schools and community groups",
        "Development of commercial applications for precision control technologies including educational robotics kits and training programs",
        "Collaboration with other robotics teams for joint development projects and knowledge sharing opportunities",
        "Mentoring new team members and students in robotics engineering principles and competitive robotics strategies"
      ],
      myRole: [
        "Team leader responsible for coordinating design, prototyping, documentation, and testing to optimize robot functionality and precision",
        "Led complete project lifecycle from initial concept development through final competition preparation and execution",
        "Managed team resources and timelines to ensure on-time completion of all project deliverables and competition requirements",
        "Coordinated technical design reviews and quality control procedures to maintain high standards throughout development process",
        "Mentored team members in technical skills including machining, circuit design, and programming for comprehensive skill development",
        "Represented team in competition interactions and technical presentations to judges and fellow competitors"
      ]
    },
    {
      id: 4,
      teamSize: 6,
      teamName: "ExoSpace",
      projectName: "2024 NASA Space Apps Challenge",
      skills: ["HTML", "CSS", "JavaScript", "NASA API"],
      image: "https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg?w=600&h=300&fit=crop",
      purpose: [
        "To develop innovative web-based solutions for space exploration challenges using NASA's open data and APIs, contributing to space science advancement",
        "Motivated by the opportunity to contribute to space science and technology advancement through creative use of publicly available space data",
        "Demonstrate the potential of web technologies in making complex space data accessible and useful for researchers, educators, and the public",
        "Address specific challenges identified by NASA in areas such as data visualization, public engagement, and scientific communication",
        "Showcase collaborative problem-solving skills in a time-constrained environment requiring rapid prototyping and innovative thinking"
      ],
      development: [
        "Developed responsive web application using modern JavaScript frameworks with mobile-first design principles for universal accessibility",
        "Integrated NASA APIs for real-time space data visualization including satellite imagery, astronomical data, and mission information",
        "Implemented user-friendly interfaces for complex space data with intuitive navigation, interactive visualizations, and educational content",
        "Created data processing pipelines for handling large datasets from multiple NASA sources with efficient caching and optimization",
        "Built modular architecture allowing easy integration of additional data sources and visualization components",
        "Implemented progressive web app features for offline functionality and enhanced user experience across different devices"
      ],
      documentation: [
        "API integration documentation and data visualization specifications with detailed endpoint descriptions and data format requirements",
        "User interface design guidelines and deployment procedures including responsive design principles and cross-browser compatibility",
        "Challenge solution documentation and presentation materials with technical approach, implementation details, and results analysis",
        "Code documentation with detailed comments, function descriptions, and troubleshooting guides for future development",
        "User manual with feature descriptions, navigation instructions, and troubleshooting procedures for end users",
        "Deployment documentation including hosting requirements, configuration settings, and maintenance procedures"
      ],
      results: [
        "Successfully developed and deployed functional web application within 48-hour challenge timeframe meeting all competition requirements",
        "Demonstrated effective team collaboration and rapid prototyping skills through coordinated development and testing processes",
        "Received positive feedback from NASA challenge judges for innovative approach to data visualization and user experience design",
        "Achieved high scores in technical implementation, creativity, and potential impact categories during competition evaluation",
        "Generated interest from space education community for potential collaboration on educational outreach programs",
        "Established team reputation for quality work and innovative problem-solving in space technology applications"
      ],
      futurePlans: [
        "Continued development of space technology applications with focus on educational outreach and public engagement initiatives",
        "Potential collaboration opportunities with space agencies and research institutions for data visualization and public communication projects",
        "Expansion of application features to include additional NASA data sources and enhanced visualization capabilities",
        "Development of educational modules for schools and universities to teach space science concepts through interactive web applications",
        "Exploration of commercial applications for space data visualization technologies in media, education, and research sectors",
        "Participation in future NASA challenges and space technology competitions to further develop skills and contribute to space science"
      ],
      myRole: [
        "Team member responsible for brainstorming, coding, and prototyping solutions to address key challenges in space science and technology",
        "Contributed to front-end development including responsive design, user interface implementation, and data visualization components",
        "Assisted with API integration and data processing to ensure reliable access to NASA data sources and efficient data handling",
        "Participated in team coordination and project management to ensure timely completion of all deliverables within competition constraints",
        "Contributed to technical documentation and presentation materials for competition judges and potential stakeholders",
        "Collaborated with team members to develop innovative solutions that effectively addressed NASA's space exploration challenges"
      ]
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
                <ul className="space-y-3">
                  {Array.isArray(project.purpose) ? project.purpose.map((item, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  )) : (
                    <p className="text-gray-300 leading-relaxed">{project.purpose}</p>
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* 3D Model - Only for USST Rocket Project */}
            {type === 'team' && (project as any).projectName === "USST Rocket Project: Up ↑" && (
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <div className="h-5 w-5 text-orange-400">🚀</div>
                    3D Rocket Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Interactive 3D model of the rocket assembly. Hover to stop rotation, click fullscreen for detailed view.</p>
                  <RocketModel3D modelPath="/ROCKETAssembly_July8.gltf" scale={0.05} />
                </CardContent>
              </Card>
            )}

            {/* Schematics/Development */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Code className="h-5 w-5 text-green-400" />
                  Schematics & Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {Array.isArray(project.development) ? project.development.map((item, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-green-400 mr-3 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  )) : (
                    <p className="text-gray-300 leading-relaxed">{project.development}</p>
                  )}
                </ul>
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
                <ul className="space-y-3">
                  {Array.isArray(project.documentation) ? project.documentation.map((item, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-purple-400 mr-3 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  )) : (
                    <p className="text-gray-300 leading-relaxed">{project.documentation}</p>
                  )}
                </ul>
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
                <ul className="space-y-3">
                  {Array.isArray(project.results) ? project.results.map((item, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-orange-400 mr-3 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  )) : (
                    <p className="text-gray-300 leading-relaxed">{project.results}</p>
                  )}
                </ul>
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
              <ul className="space-y-3">
                {Array.isArray(project.futurePlans) ? project.futurePlans.map((item, index) => (
                  <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                    <span className="text-yellow-400 mr-3 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                )) : (
                  <p className="text-gray-300 leading-relaxed">{project.futurePlans}</p>
                )}
              </ul>
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
                <ul className="space-y-3">
                  {Array.isArray((project as any).myRole) ? (project as any).myRole.map((item, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-cyan-400 mr-3 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  )) : (
                    <p className="text-gray-300 leading-relaxed">{(project as any).myRole}</p>
                  )}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;