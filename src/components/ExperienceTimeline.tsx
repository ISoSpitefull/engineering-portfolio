import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2024-2025",
      title: "Propulsion & Systems Member",
      company: "University of Saskatchewan Space Design Team",
      description: (
        <>
          Performed trajectory and apogee simulations while designing and optimizing a boat tail for improved aerodynamics. I conducted hand calculations for thrust, forces, and center of gravity, ensuring stable flight performance through iterative design.
          <br /><br />
          Additionally, I documented critical design processes in logbooks and technical reports to support future team efforts. My contributions also included competition planning, data analysis in Excel, and organizational tasks to streamline team operations.
        </>
      ),
      skills: ["Solidworks", "Microsoft Office", "Ansys", "Fusion 360", "OpenRocket"],
      lessons: "Learned the importance of code reviews and agile development practices in a fast-paced startup environment."
    },
    {
      year: "2023",
      title: "Skills Alberta Provincial Competitor",
      company: "Skills Canada Alberta 2023 Robotics Competition",
      description: "Designed and built a hockey robot in a team of 3 to compete in the 2023 Skills Alberta Provincial Robotics Competition.",
      skills: ["Fabrication ", "Technical Documentation", "Teamwork", "Presentation Skills"],
      lessons: "Discovered the value behind simulation and calculations before starting on construction and testing phases."
    },
    {
      year: "2023",
      title: "FRC Mechanical Lead",
      company: "4627 Manning Robotics",
      description: "As a grade 12 student, I was the mechanical lead for 4627 Manning Robotics. I was responsible for the design and construction drive train systems for our 2023 season robot.",
      skills: ["Team Leadership", "Fusion 360", "Excel Optimization"],
      lessons: "Began to realize that engineering is not just about technical skills, but also about creative problem-solving and understanding the team."
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">My Engineering Journey</h2>
        <p className="text-base text-gray-300 max-w-xl mx-auto">
          Every step of my engineering journey has taught me valuable lessons about technology, teamwork, and innovation.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
          >
            {/* Year */}
            <div className="md:col-span-1">
              <span className="text-gray-400 font-medium text-sm">{exp.year}</span>
            </div>
            
            {/* Content */}
            <div className="md:col-span-3 space-y-2">
              <div>
                <h3 className="text-white font-semibold text-lg">{exp.title}</h3>
                <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
