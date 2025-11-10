import useScrollAnimation from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { skillCarousels, type SkillCarousel } from "@/data/skills";

const AutoScrollCarousel = ({ title, items, direction = "right" }: SkillCarousel) => {
  const duplicatedItems = [...items, ...items];
  const animationClass = direction === "right" ? "animate-scroll-right" : "animate-scroll-left";
  const animationDuration = Math.max(items.length * 4.5, 24);

  return (
    <div className="group">
      <div className="mb-2 flex items-center gap-3 px-1 sm:px-2">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"></span>
        <h3 className="text-sm font-semibold text-gray-200 sm:text-base">{title}</h3>
      </div>
      <div className="relative overflow-hidden py-2 sm:py-3">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[7rem] sm:w-[8rem] lg:w-[9rem]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(17,24,39,1) 0%, rgba(17,24,39,0.97) 15%, rgba(17,24,39,0.85) 35%, rgba(17,24,39,0.6) 60%, rgba(17,24,39,0.35) 85%, rgba(17,24,39,0) 100%)"
          }}
        ></div>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[7rem] sm:w-[8rem] lg:w-[9rem]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(270deg, rgba(17,24,39,1) 0%, rgba(17,24,39,0.97) 15%, rgba(17,24,39,0.85) 35%, rgba(17,24,39,0.6) 60%, rgba(17,24,39,0.35) 85%, rgba(17,24,39,0) 100%)"
          }}
        ></div>
        <div
          className={cn(
            "relative z-0 flex gap-3 sm:gap-4 scrolling-carousel-track",
            animationClass,
            "group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:[animation-play-state:paused]"
          )}
          style={{ animationDuration: `${animationDuration}s` }}
          role="list"
          aria-label={`${title} carousel`}
        >
          {duplicatedItems.map((item, index) => (
            <div key={`${item.label}-${index}`} role="listitem" className="shrink-0">
              <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 text-center text-sm font-semibold text-gray-100 backdrop-blur-lg sm:h-40 sm:w-40 sm:text-base">
                {item.iconSrc && (
                  <img
                    src={item.iconSrc}
                    alt={item.label}
                    className="h-14 w-14 object-contain sm:h-20 sm:w-20"
                    loading="lazy"
                  />
                )}
                <span className="leading-tight">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className={`mx-auto mt-10 mb-6 w-full max-w-7xl transform px-2 pt-8 pb-6 transition-all duration-700 sm:mt-16 sm:mb-10 sm:px-4 sm:pt-12 sm:pb-8 md:px-8 ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mb-5 rounded-3xl bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-8 text-center shadow-2xl sm:mb-8 sm:px-8 sm:py-10">
        <h2 className="mb-2 text-2xl font-bold text-white sm:mb-3 sm:text-4xl">Technical Skills</h2>
        <p className="text-base text-gray-300 sm:text-xl">
          A continuously scrolling view of the tools, languages, and platforms I rely on every day.
        </p>
      </div>

      <div className="space-y-3 sm:space-y-5">
        {skillCarousels.map((carousel) => (
          <AutoScrollCarousel key={carousel.title} {...carousel} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
