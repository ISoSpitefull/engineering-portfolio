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
      { label: "Fusion 360", iconSrc: "/icons/fusion-360.png" },
      { label: "Inventor", iconSrc: "/icons/inventor.png" },
      { label: "AutoCAD", iconSrc: "/icons/autocad.png" },
      { label: "OnShape", iconSrc: "/icons/onshape.png" },
      { label: "SolidWorks", iconSrc: "/icons/solidworks.png" },
      { label: "Civil 3D", iconSrc: "/icons/civil-3d.png" },
      { label: "Revit", iconSrc: "/icons/revit.png" },
      { label: "SketchUp", iconSrc: "/icons/sketchup.png" },
      { label: "OpenRocket", iconSrc: "/icons/openrocket.png" },
      { label: "ANSYS", iconSrc: "/icons/ansys.png" },
      { label: "Excel", iconSrc: "/icons/excel.png" }
    ]
  },
  {
    title: "Programming Languages",
    direction: "right",
    items: [
      { label: "Arduino variant C/C++", iconSrc: "/icons/arduino.png" },
      { label: "C/C++", iconSrc: "/icons/cpp.png" },
      { label: "MATLAB", iconSrc: "/icons/matlab.png" },
      { label: "Python", iconSrc: "/icons/python.png" },
      { label: "HTML5", iconSrc: "/icons/html5.png" },
      { label: "Java", iconSrc: "/icons/java.png" }
    ]
  },
  {
    title: "Platforms",
    direction: "right",
    items: [
      { label: "Microsoft Office", iconSrc: "/icons/microsoft-office.png" },
      { label: "Google Suite", iconSrc: "/icons/google-suite.png" },
      { label: "Autodesk Online", iconSrc: "/icons/autodesk.png" },
      { label: "GitHub", iconSrc: "/icons/github.png" },
      { label: "Vercel", iconSrc: "/icons/vercel.png" },
      { label: "Microsoft Project", iconSrc: "/icons/microsoft-project.png" }
    ]
  }
];
