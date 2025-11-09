import { Badge } from "@/components/ui/badge";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { experienceTimeline } from "@/data/experience";
import type { ExperienceEntry } from "@/data/experience";

const ExperienceCard = ({ entry, index }: { entry: ExperienceEntry; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-800/70 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="md:col-span-1">
        <span className="text-gray-300 font-bold text-xl md:text-2xl">{entry.year}</span>
      </div>

      <div className="md:col-span-3 space-y-3">
        <div>
          <h3 className="text-white font-semibold text-lg">{entry.title}</h3>
          <p className="text-blue-400 font-medium text-sm">{entry.company}</p>
        </div>

        {entry.description.map((paragraph, idx) => (
          <p key={idx} className="text-gray-300 text-sm leading-relaxed">
            {paragraph}
          </p>
        ))}

        <div className="flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-blue-900 text-blue-200">
              {skill}
            </Badge>
          ))}
        </div>

        <p className="text-gray-400 text-sm italic">{entry.lessons}</p>
      </div>
    </div>
  );
};

const ExperienceTimeline = () => (
  <section className="py-12 sm:py-20 px-4 max-w-6xl mx-auto">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">My Engineering Journey</h2>
      <p className="text-base text-gray-300 max-w-xl mx-auto">
        Every step of my engineering journey has taught me valuable lessons about technology, teamwork, and innovation.
      </p>
    </div>

    <div className="space-y-6">
      {experienceTimeline.map((entry, index) => (
        <ExperienceCard key={`${entry.year}-${entry.title}`} entry={entry} index={index} />
      ))}
    </div>
  </section>
);

export default ExperienceTimeline;
