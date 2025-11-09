export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface SkillEntry {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: SkillEntry[];
}

export const skillCategories: SkillCategory[] = [
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
      { name: "Engineering Logbook", level: "Intermediate" }
    ]
  },
  {
    category: "Other Tools",
    skills: [
      { name: "Revit", level: "Intermediate" },
      { name: "PASCO Capstone", level: "Advanced" },
      { name: "EasyEDA Web Editor", level: "Advanced" },
      { name: "CAM (CNC)", level: "Beginner" },
      { name: "AutoCAD", level: "Advanced" }
    ]
  }
];
