import React, { useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
  // Exclude a central rectangle to avoid overlapping important hero text
  excludeCenter?: boolean;
  // Percentage bounds for the excluded center (0-100)
  excludeBounds?: { xMin: number; xMax: number; yMin: number; yMax: number };
  minSize?: number; // px
  maxSize?: number; // px
}

const colors = [
  "bg-blue-400",
  "bg-purple-400",
  "bg-indigo-400",
  "bg-blue-300",
];

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 16,
  excludeCenter = true,
  excludeBounds = { xMin: 32, xMax: 68, yMin: 30, yMax: 70 },
  minSize = 4,
  maxSize = 10,
}) => {
  const particles = useMemo(() => {
    const arr: Array<{
      left: number; // percent
      top: number; // percent
      size: number; // px
      delay: number; // s
      duration: number; // s
      opacity: number; // 0..1
      color: string; // tailwind class
    }> = [];

    const inExcluded = (x: number, y: number) => {
      if (!excludeCenter) return false;
      return (
        x >= excludeBounds.xMin &&
        x <= excludeBounds.xMax &&
        y >= excludeBounds.yMin &&
        y <= excludeBounds.yMax
      );
    };

    let guard = 0;
    while (arr.length < count && guard < count * 10) {
      guard++;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      if (inExcluded(left, top)) continue;

      const size = clamp(minSize + Math.random() * (maxSize - minSize), minSize, maxSize);
      const delay = Math.random() * 4; // 0-4s
      const duration = 2.5 + Math.random() * 3; // 2.5s - 5.5s
      const opacity = 0.15 + Math.random() * 0.25; // 0.15 - 0.4
      const color = colors[Math.floor(Math.random() * colors.length)];

      arr.push({ left, top, size, delay, duration, opacity, color });
    }

    return arr;
  }, [count, excludeCenter, excludeBounds, minSize, maxSize]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none -z-0" aria-hidden>
      {particles.map((p, i) => (
        <div
          key={i}
          className={`${p.color} rounded-full animate-[pulse_var(--dur)_ease-in-out_infinite]`}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            // Custom properties to randomize per particle
            // Tailwind arbitrary value: we use a CSS var for duration and set it inline per particle
            // @ts-ignore - custom property
            ["--dur" as any]: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // slight blur for softness
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
