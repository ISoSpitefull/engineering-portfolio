import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Beginner" },
        { name: "JavaScript", level: "Beginner" },
        { name: "C++", level: "Intermediate" },
        { name: "MATLAB", level: "Advanced" },
        { name: "HTML/CSS", level: "Intermediate" }
      ]
    },
    {
      category: "Engineering Tools",
      skills: [
        { name: "AutoCAD", level: "Advanced" },
        { name: "SolidWorks", level: "Intermediate" },
        { name: "Arduino", level: "Advanced" },
        { name: "Fusion 360", level: "Advanced" },
        { name: "Circuit Design", level: "Intermediate" }
      ]
    },
    {
      category: "Documentation",
      skills: [
        { name: "Microsoft Word", level: "Advanced" },
        { name: "Microsoft PowerPoint", level: "Advanced" },
        { name: "Excel", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
        { name: "Logbooks", level: "Intermediate" }
      ]
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-900 text-green-200 border-green-700";
      case "Intermediate":
        return "bg-blue-900 text-blue-200 border-blue-700";
      case "Beginner":
        return "bg-yellow-900 text-yellow-200 border-yellow-700";
      default:
        return "bg-gray-700 text-gray-300 border-gray-600";
    }
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl my-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across different domains of engineering and development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card 
            key={index} 
            className={`hover:shadow-xl transition-shadow duration-300 bg-gray-800 backdrop-blur-sm border-gray-700 ${
              index === skillCategories.length - 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <Badge 
                      variant="outline" 
                      className={`${getLevelColor(skill.level)} font-semibold border`}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
