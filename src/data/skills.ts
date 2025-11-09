export type CarouselDirection = "left" | "right";

export interface SkillCarouselItem {
  label: string;
  iconSrc?: string;
}

export interface SkillCarousel {
  title: string;
  direction?: CarouselDirection;
  items: SkillCarouselItem[];
}

export const skillCarousels: SkillCarousel[] = [
  {
    title: "Engineering Tools",
    direction: "right",
    items: [
      { label: "Fusion 360" },
      { label: "Inventor" },
      { label: "AutoCAD" },
      { label: "OnShape" },
      { label: "SolidWorks" },
      { label: "Civil 3D" },
      { label: "Revit" },
      { label: "SketchUp" },
      { label: "OpenRocket" },
      { label: "ANSYS" },
      { label: "Fusion 360 Simulation" },
      { label: "Excel" }
    ]
  },
  {
    title: "Programming Languages",
    direction: "right",
    items: [
      { label: "Arduino variant C/C++" },
      { label: "C/C++" },
      { label: "MATLAB" },
      { label: "Python" },
      { label: "HTML5" },
      { label: "Java" }
    ]
  },
  {
    title: "Platforms",
    direction: "right",
    items: [
      { label: "Microsoft Office" },
      { label: "Google Suite" },
      { label: "Autodesk Online" },
      { label: "GitHub" },
      { label: "Vercel" },
      { label: "Microsoft Projects" }
    ]
  }
];
