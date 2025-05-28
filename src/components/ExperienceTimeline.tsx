
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2024",
      title: "Software Engineering Intern",
      company: "Tech Startup Inc.",
      description: "Developed full-stack web applications using React and Node.js. Collaborated with senior engineers on scalable system architecture.",
      skills: ["React", "Node.js", "PostgreSQL", "Docker"],
      lessons: "Learned the importance of code reviews and agile development practices in a fast-paced startup environment."
    },
    {
      year: "2023",
      title: "Research Assistant",
      company: "University Engineering Lab",
      description: "Conducted research on sustainable energy systems and published findings in undergraduate research journal.",
      skills: ["MATLAB", "Data Analysis", "Technical Writing"],
      lessons: "Discovered the value of systematic experimentation and the challenges of presenting complex technical concepts clearly."
    },
    {
      year: "2022",
      title: "Engineering Student",
      company: "University",
      description: "Started my engineering journey with a focus on computer science and sustainable technology solutions.",
      skills: ["Python", "C++", "Circuit Design", "3D Modeling"],
      lessons: "Realized that engineering is not just about technical skills, but also about creative problem-solving and teamwork."
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">My Engineering Journey</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Every step of my engineering journey has taught me valuable lessons about technology, teamwork, and innovation.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
            >
              <div className="flex-1">
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
                        {exp.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                    <CardDescription className="text-blue-400 font-semibold">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-lg border-l-4 border-orange-400">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        <strong className="text-orange-400">Key Lesson:</strong> {exp.lessons}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-gray-900 shadow-lg flex-shrink-0 z-10"></div>
              
              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
