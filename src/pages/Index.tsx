import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import {
  fetchProjects,
  fetchExperiences,
  fetchSkills,
  trackAnalytics,
  type Project,
  type Experience,
  type Skill,
} from "@/lib/supabase";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5,
  });

  const { data: experiences = [] } = useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: fetchExperiences,
    staleTime: 1000 * 60 * 5,
  });

  const { data: skills = [] } = useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    trackAnalytics("page_view", {
      timestamp: new Date().toISOString(),
    });
  }, []);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <NavigationBar isDark={isDark} onThemeToggle={handleThemeToggle} />
        <main>
          <HeroSection />
          <AboutSection />
          {experiences.length > 0 && (
            <ExperienceTimeline experiences={experiences} />
          )}
          {projects.length > 0 && (
            <ProjectShowcase projects={projects} />
          )}
          {skills.length > 0 && <SkillsSection skills={skills} />}
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
