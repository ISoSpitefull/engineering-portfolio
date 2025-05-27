
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "Java", level: "Intermediate" },
        { name: "MATLAB", level: "Intermediate" }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "REST APIs", level: "Intermediate" }
      ]
    },
    {
      category: "Engineering Tools",
      skills: [
        { name: "AutoCAD", level: "Intermediate" },
        { name: "SolidWorks", level: "Intermediate" },
        { name: "Arduino", level: "Advanced" },
        { name: "Raspberry Pi", level: "Advanced" },
        { name: "Circuit Design", level: "Intermediate" }
      ]
    },
    {
      category: "Data & Analytics",
      skills: [
        { name: "Machine Learning", level: "Intermediate" },
        { name: "Data Visualization", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
        { name: "TensorFlow", level: "Beginner" },
        { name: "Statistical Analysis", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-100 text-green-800 border-green-300";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Beginner":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl my-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across different domains of engineering and software development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
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
