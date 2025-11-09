export type ProjectType = "personal" | "team";
export type ProjectLayout = "large" | "medium" | "small";

export interface ProjectDetailContent {
  purpose: string[];
  development: string[];
  documentation: string[];
  results: string[];
  futurePlans: string[];
}

export interface PersonalProject {
  id: number;
  type: "personal";
  name: string;
  image: string;
  layout: ProjectLayout;
  skills: string[];
  learningExperience: string;
  futurePlansSummary: string;
  detail: ProjectDetailContent;
}

export interface TeamProjectDetail extends ProjectDetailContent {
  myRole: string[];
}

export interface TeamProject {
  id: number;
  type: "team";
  isFeatured?: boolean;
  teamSize: number;
  teamName: string;
  projectName: string;
  image: string;
  skills: string[];
  description: string;
  roleSummary: string;
  detail: TeamProjectDetail;
}

export type AnyProject = PersonalProject | TeamProject;

export const personalProjects: PersonalProject[] = [
  {
    id: 1,
    type: "personal",
    name: "Sunrise Simulight",
    image: "/images/SimuLight Wide Banner Website.png",
    layout: "large",
    skills: ["Arduino", "Python", "Systems Integration", "IoT"],
    learningExperience:
      "Learned IoT connections, power optimization through intelligent dimming algorithms, and user-centered design through feedback from 15+ test subjects to improve wake-up experience.",
    futurePlansSummary:
      "Develop standalone mobile app, integrate with smart home systems, implement machine learning for personalized light patterns, and explore commercial manufacturing partnerships.",
    detail: {
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
    }
  },
  {
    id: 2,
    type: "personal",
    name: "Arduino Based Macro Keyboard",
    image: "/images/MacroKeyboard Banner Website.png",
    layout: "medium",
    skills: ["Arduino", "C++", "Electronics", "User-Centric Design"],
    learningExperience:
      "Developed accessible solutions for users with motor disabilities, improved programming skills through custom firmware development, and learned the importance of cross-platform compatibility.",
    futurePlansSummary:
      "Create customizable keyboard layout software, develop wireless Bluetooth versions, implement advanced macro features, and establish open-source community collaboration.",
    detail: {
      purpose: [
        "To create an affordable, customizable macro keyboard for users with accessibility needs and productivity enthusiasts who require specialized input solutions",
        "Address the high cost of commercial macro keyboards and the lack of customization options available in mainstream products",
        "Provide a solution for users with motor disabilities who require simplified input methods for improved computer accessibility",
        "Develop a platform for experimenting with custom firmware, lighting effects, and macro automation workflows",
        "Encourage open-source collaboration by providing detailed documentation and customizable hardware design files"
      ],
      development: [
        "Designed modular PCB layout allowing easy swapping of switches, encoders, and LED modules for rapid prototyping and customization",
        "Implemented custom firmware using Arduino IDE with support for multiple profiles, per-key macros, and debounce calibration",
        "Developed 3D-printed enclosure with ergonomic angle, detachable wrist rest, and built-in cable management",
        "Integrated RGB lighting with per-key control and customizable effects using open-source libraries and custom animation scripts",
        "Designed cross-platform desktop application prototype for managing macros, lighting presets, and firmware updates",
        "Conducted usability testing with accessibility-focused users to refine key layout, macro configuration, and tactile feedback"
      ],
      documentation: [
        "Firmware documentation with code comments, state diagrams, and configuration guides for custom macro development",
        "Hardware assembly guide including bill of materials, soldering instructions, and enclosure assembly diagrams",
        "Accessibility testing reports documenting user feedback, iterative improvements, and ergonomic considerations",
        "Electrical schematics covering switch matrix design, microcontroller pin assignments, and power regulation circuitry",
        "Manufacturing files including Gerber files, 3D enclosure models, and laser-cutting templates for rapid fabrication",
        "Community contribution guidelines encouraging open-source collaboration and feature requests"
      ],
      results: [
        "Completed fully functional macro keyboard prototype supporting per-key macros, profile switching, and RGB lighting control",
        "Improved typing efficiency and accessibility for users with motor impairments through customizable layouts and haptic feedback",
        "Demonstrated cross-platform compatibility with Windows, macOS, and Linux via HID-compliant USB interface",
        "Reduced hardware costs by sourcing modular components and designing for easy assembly using accessible tools",
        "Showcased project at local maker meetups and online communities, receiving positive feedback and collaboration requests",
        "Established open-source repository for firmware and design files to support community-driven enhancements"
      ],
      futurePlans: [
        "Create customizable keyboard layout software with drag-and-drop interface for macro assignment and lighting presets",
        "Develop wireless Bluetooth and 2.4GHz versions with low-latency communication and secure pairing",
        "Implement advanced macro features including conditional logic, scripting support, and application-specific profiles",
        "Establish open-source community collaboration through documentation, contribution guidelines, and feature roadmaps",
        "Integrate haptic feedback modules for tactile confirmation of macro execution and accessibility cues",
        "Explore small-scale manufacturing partnerships to make the keyboard accessible to broader audiences"
      ]
    }
  },
  {
    id: 3,
    type: "personal",
    name: "RC Airplane Based Land Surveying System",
    image: "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    layout: "small",
    skills: ["Raspberry Pi", "Python", "LiDAR", "GPS"],
    learningExperience:
      "Building radio controlled airplane for aerial photography and 3D land modeling, learning flight path automation algorithms and image stitching techniques for seamless aerial mosaics.",
    futurePlansSummary:
      "Integrate LiDAR and GPS for centimeter-level precision, add real-time data transmission, develop machine learning for crop health analysis, and establish agricultural research partnerships.",
    detail: {
      purpose: [
        "To develop an affordable aerial surveying platform capable of capturing high-resolution imagery for agriculture, construction, and environmental monitoring",
        "Enable rural communities and small farms to access precision mapping tools without relying on expensive commercial drone services",
        "Explore long-endurance RC aircraft configurations optimized for stability, payload capacity, and autonomous flight capabilities",
        "Implement automated flight path planning to reduce operator workload and ensure consistent coverage of survey areas",
        "Demonstrate the viability of open-source hardware and software for professional-grade surveying applications"
      ],
      development: [
        "Designed lightweight composite airframe with modular payload bay supporting cameras, LiDAR, and environmental sensors",
        "Integrated Raspberry Pi flight controller with GPS waypoint navigation, telemetry streaming, and fail-safe routines",
        "Developed image capture pipeline with synchronized shutter control, gimbal stabilization, and vibration isolation",
        "Implemented ground control software for mission planning, live telemetry monitoring, and post-flight data management",
        "Tested multiple propulsion setups to balance flight time, payload capacity, and redundancy for mission-critical flights",
        "Created calibration routines for camera lens distortion correction and geotag accuracy verification"
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
  }
];

export const teamProjects: TeamProject[] = [
  {
    id: 1,
    type: "team",
    isFeatured: true,
    teamSize: 25,
    teamName: "USST - University of Saskatchewan Space Design Team",
    projectName: "USST Rocket Project: Up ↑",
    image: "/images/Rocket Full Length.png",
    skills: ["OpenRocket", "Fusion 360", "ANSYS", "SolidWorks", "OnShape"],
    description:
      "Designed and optimized components for an 8ft M-class rocket launch at Launch Canada 2025, contributing to Canada's growing space sector through innovative propulsion and structural design solutions.",
    roleSummary:
      "CAD modeling lead for rocket components, aerodynamic analysis using ANSYS/OpenRocket, and cross-functional team coordination between propulsion, structures, and avionics sub-teams.",
    detail: {
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
    }
  },
  {
    id: 2,
    type: "team",
    teamSize: 35,
    teamName: "4627 Manning Robotics",
    projectName: "Thor & Loki",
    image: "/images/4627Thor.png",
    skills: ["Fusion 360 Simulation", "Fusion 360 Assemblies", "Team Leadership", "Manufacturing"],
    description:
      "Designed and maintained drive train systems for 4627 Manning Robotics during the 2023 FRC Charged Up challenge, achieving 95% reliability during competitions.",
    roleSummary:
      "Drive train systems lead engineer responsible for gearbox design, system optimization, and mentoring junior team members in CAD modeling and manufacturing processes.",
    detail: {
      purpose: [
        "To develop high-performance competition robots capable of meeting the rigorous demands of the FIRST Robotics Competition (FRC) Charged Up challenge",
        "Ensure drive train reliability and efficiency to maintain competitive performance throughout regional and international events",
        "Lead mechanical design efforts focused on robustness, serviceability, and modularity for rapid repairs during competitions",
        "Mentor junior team members in CAD, manufacturing, and systems engineering best practices",
        "Create documentation and knowledge transfer processes to sustain long-term team success"
      ],
      development: [
        "Owned gearbox and drive train design including gear ratio selection, frame integration, and stress analysis",
        "Implemented preventive maintenance program that delivered 95% drivetrain reliability across events",
        "Designed modular swerve drive configurations allowing rapid wheel module swaps during competition",
        "Introduced CAD review cadence and tolerance stack-up analysis to prevent manufacturing rework",
        "Coordinated mechanical-electrical integration efforts to ensure clean routing and service loops",
        "Championed use of Fusion 360 simulation tools for load cases and driver practice feedback"
      ],
      documentation: [
        "Technical specifications detailing drivetrain performance metrics, torque calculations, and material selections",
        "Manufacturing work instructions with exploded views, tolerances, and inspection checkpoints",
        "Maintenance playbooks describing pre/post-match checklists, fastener torque specs, and spare parts tracking",
        "Electrical and pneumatic schematics aligned with mechanical layouts for seamless subsystem integration",
        "Driver training guides capturing control schemes, autonomous routines, and match strategies",
        "Post-event retrospectives highlighting lessons learned, risks, and continuous improvement items"
      ],
      results: [
        "Maintained 95% drivetrain reliability during the 2023 season, minimizing downtime and emergency repairs",
        "Achieved consistent autonomous performance through precise drivetrain calibration and control loop tuning",
        "Supported top regional rankings and playoff appearances through dependable mechanical performance",
        "Reduced assembly time by 30% via modular gearbox design and standardized hardware",
        "Enabled quick strategy pivots thanks to documented change procedures and configuration options",
        "Recognized by judges and mentors for professional-level documentation and mentoring impact"
      ],
      futurePlans: [
        "Adopt lighter materials and custom gear profiles to further improve acceleration and efficiency",
        "Pilot predictive maintenance using onboard sensors to detect drivetrain anomalies before failures",
        "Expand mentorship program to include workshops for rookie teams in the district",
        "Integrate advanced simulation workflows for full-robot digital twins and driver training",
        "Develop sponsorship-ready documentation packages highlighting engineering rigor",
        "Explore offseason projects that repurpose competition robots for outreach demonstrations"
      ],
      myRole: [
        "Drive train systems lead engineer responsible for gearbox design and system optimization, achieving 95% reliability during competitions",
        "Contributed to top rankings at regional and international events through innovative design solutions and effective team coordination",
        "Led design reviews and technical presentations to ensure all team members understood system requirements and performance expectations",
        "Coordinated manufacturing processes including material procurement, tooling setup, and quality control procedures",
        "Mentored junior team members in CAD modeling, simulation techniques, and manufacturing processes for skill development",
        "Managed project timelines and resource allocation to ensure on-time completion of all robot components and systems"
      ]
    }
  },
  {
    id: 3,
    type: "team",
    teamSize: 3,
    teamName: "Manning Robotics",
    projectName: "2023 Skills Alberta Robotics Competition",
    image: "/images/skillsbot.JPG",
    skills: ["Machining", "Circuit Design", "Problem Solving", "Technical Documentation", "Fabrication"],
    description:
      "Led a team of 3 to design and engineer two high-performance hockey robots for the 2023 Skills Robotics Competition, showcasing advanced robotics engineering skills.",
    roleSummary:
      "Team leader coordinating design, prototyping, documentation, and testing to optimize robot functionality and precision for competitive performance.",
    detail: {
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
    }
  },
  {
    id: 4,
    type: "team",
    teamSize: 6,
    teamName: "ExoSpace",
    projectName: "2024 NASA Space Apps Challenge",
    image:
      "https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg?w=600&h=300&fit=crop",
    skills: ["HTML", "CSS", "JavaScript", "NASA API"],
    description:
      "Competed in the 2024 NASA Space Apps Challenge, developing innovative solutions for space exploration and technology using web technologies and NASA APIs.",
    roleSummary:
      "Front-end development and API integration for data visualization components, contributing to creative solutions for space science challenges.",
    detail: {
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
        "Implemented progressive web app features including offline caching, install prompts, and performance optimizations"
      ],
      documentation: [
        "API integration guides documenting authentication, rate limiting, and error handling best practices",
        "User experience research notes summarizing accessibility considerations and iterative feedback cycles",
        "Technical architecture diagrams showing data flow, caching layers, and component relationships",
        "Presentation materials for competition judges highlighting technical achievements and user impact",
        "Testing protocols covering browser compatibility, performance budgets, and accessibility audits",
        "Post-competition retrospectives capturing lessons learned and roadmap opportunities"
      ],
      results: [
        "Delivered working prototype within 48-hour hackathon window featuring multiple live data visualizations",
        "Received positive feedback from NASA challenge judges for innovative approach to data visualization and user experience design",
        "Achieved high scores in technical implementation, creativity, and potential impact categories during competition evaluation",
        "Generated interest from space education community for potential collaboration on educational outreach programs",
        "Established team reputation for quality work and innovative problem-solving in space technology applications",
        "Built reusable component library for future space data visualization projects"
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
  }
];

export const featuredTeamProject = teamProjects.find((project) => project.isFeatured);
export const additionalTeamProjects = teamProjects.filter((project) => !project.isFeatured);

export const allProjects: AnyProject[] = [...personalProjects, ...teamProjects];

export const getProjectById = (type: ProjectType, id: number) => {
  return (type === "personal" ? personalProjects : teamProjects).find((project) => project.id === id);
};
