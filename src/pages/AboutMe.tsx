
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 glow-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 glow-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="pt-16 relative z-10">
        {/* Header */}
        <div className="glass-card border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="glass-card hover:glow-primary">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gradient mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn more about my journey as an engineering student, my experience, and the technical skills I've developed along the way.
            </p>
          </div>
        </div>

        <ExperienceTimeline />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default AboutMe;
