import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Project } from "../lib/supabase";

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of products I've built from conception to production,
            demonstrating full-stack expertise and impact
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all capitalize ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Background glow */}
      {isHovered && (
        <motion.div
          layoutId={`glow-${project.id}`}
          className="absolute inset-0 rounded-xl blur-xl opacity-50"
          style={{
            background:
              "linear-gradient(135deg, hsl(200 98% 39% / 0.3), hsl(280 85% 55% / 0.3))",
          }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Card content */}
      <div className="relative bg-card/50 blur-glass rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-300">
        {/* Image container */}
        {project.image_url && (
          <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          {/* Title and category */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary capitalize">
                  {project.category}
                </p>
              </div>
              {project.featured && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 rounded-full bg-accent/20"
                >
                  <TrendingUp className="w-5 h-5 text-accent" />
                </motion.div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Problem/Solution highlights */}
          {project.impact && (
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Impact:</span>{" "}
                {project.impact}
              </p>
            </div>
          )}

          {/* CTAs */}
          <div className="flex gap-3 pt-6">
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="default"
                  className="group/btn"
                  size="sm"
                >
                  View Live
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </a>
            )}
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="group/btn"
                  size="sm"
                >
                  Source Code
                  <Github className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;
