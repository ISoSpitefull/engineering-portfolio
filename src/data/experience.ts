export interface ExperienceEntry {
  year: string;
  title: string;
  company: string;
  description: string[];
  skills: string[];
  lessons: string;
}

export const experienceTimeline: ExperienceEntry[] = [
  {
    year: "2025-2026",
    title: "Propulsion Lead & Facilities Manager",
    company: "University of Saskatchewan Space Design Team",
    description: [
      "Managed the daily operations, security, and organization of the USST engineering lab and workshop. Developed and enforced safety protocols and standard operating procedures, conducting regular briefings to maintain a zero-incident workplace.",
      "Led the propulsion sub-team in designing, testing, and optimizing rocket propulsion systems. Coordinated test schedules, data collection, and analysis to enhance performance and reliability.",
      "Additionally, acted as the primary liaison for university faculty, coordinating space allocation, equipment maintenance, and institutional compliance."
    ],
    skills: ["Team Management", "Safety Protocols", "Data Analysis", "Communication", "Organization"],
    lessons:
      "Learned the importance of code reviews and agile development practices in a fast-paced startup environment."
  },
  {
    year: "2024-2025",
    title: "Propulsion & Systems Member",
    company: "University of Saskatchewan Space Design Team",
    description: [
      "Performed trajectory and apogee simulations while designing and optimizing a boat tail for improved aerodynamics. Conducted hand calculations for thrust, forces, and center of gravity, ensuring stable flight performance through iterative design.",
      "Documented critical design processes in logbooks and technical reports to support future team efforts. Contributions also included competition planning, data analysis in Excel, and organizational tasks to streamline team operations."
    ],
    skills: ["Solidworks", "Microsoft Office", "Ansys", "Fusion 360", "OpenRocket"],
    lessons:
      "Learned the importance of code reviews and agile development practices in a fast-paced startup environment."
  },
  {
    year: "2023",
    title: "Skills Alberta Provincial Competitor",
    company: "Skills Canada Alberta 2023 Robotics Competition",
    description: [
      "Designed and built a hockey robot in a team of 3 to compete in the 2023 Skills Alberta Provincial Robotics Competition."
    ],
    skills: ["Fabrication", "Technical Documentation", "Teamwork", "Presentation Skills"],
    lessons:
      "Discovered the value behind simulation and calculations before starting on construction and testing phases."
  },
  {
    year: "2023",
    title: "FRC Mechanical Lead",
    company: "4627 Manning Robotics",
    description: [
      "As a grade 12 student, I was the mechanical lead for 4627 Manning Robotics. I was responsible for the design and construction drive train systems for our 2023 season robot."
    ],
    skills: ["Team Leadership", "Fusion 360", "Excel Optimization"],
    lessons:
      "Began to realize that engineering is not just about technical skills, but also about creative problem-solving and understanding the team."
  }
];
