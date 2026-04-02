import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Experience } from "../lib/supabase";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(
    experiences[0]?.id || null
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isExpanded={expandedId === exp.id}
              onToggle={() =>
                setExpandedId(expandedId === exp.id ? null : exp.id)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExperienceCard = ({
  experience,
  index,
  isExpanded,
  onToggle,
}: ExperienceCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <motion.div
      variants={cardVariants}
      onClick={onToggle}
      className="cursor-pointer group"
    >
      {/* Timeline line and dot */}
      <div className="flex gap-6 md:gap-8">
        <div className="relative flex flex-col items-center">
          {/* Dot */}
          <motion.div
            animate={isExpanded ? { scale: 1.3 } : { scale: 1 }}
            className="w-4 h-4 rounded-full bg-primary border-2 border-background shadow-lg"
          />

          {/* Connecting line */}
          <div
            className={`w-1 flex-1 min-h-16 transition-colors duration-300 ${
              isExpanded ? "bg-gradient-to-b from-primary to-primary/50" : "bg-border"
            }`}
          />
        </div>

        {/* Content */}
        <div className="flex-1 pb-6">
          {/* Header - always visible */}
          <div
            className="bg-card/50 blur-glass rounded-lg p-6 md:p-8 border border-border group-hover:border-primary/50 transition-all duration-300 space-y-3"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {experience.role}
                </h3>
                <p className="text-base md:text-lg text-primary font-semibold">
                  {experience.company}
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-sm font-medium text-muted-foreground">
                  {formatDate(experience.period_start)} -{" "}
                  {experience.current
                    ? "Present"
                    : experience.period_end
                      ? formatDate(experience.period_end)
                      : ""}
                </p>
                {experience.current && (
                  <div className="inline-block px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Current
                  </div>
                )}
              </div>
            </div>

            {/* Description always visible */}
            <p className="text-muted-foreground leading-relaxed pt-2">
              {experience.description}
            </p>

            {/* Expandable content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isExpanded ? "visible" : "hidden"}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-6 border-t border-border">
                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <span className="w-1 h-4 rounded-full bg-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                        >
                          <span className="text-primary font-bold mt-1">→</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <span className="w-1 h-4 rounded-full bg-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Toggle indicator */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="pt-4 flex justify-center"
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
