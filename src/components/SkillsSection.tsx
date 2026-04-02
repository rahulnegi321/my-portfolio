import { motion } from "framer-motion";
import { useMemo } from "react";
import { Skill } from "../lib/supabase";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const categorizedSkills = useMemo(() => {
    return skills.reduce(
      (acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
      },
      {} as Record<string, Skill[]>
    );
  }, [skills]);

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

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full stack and modern development practices
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(categorizedSkills).map(([category, categorySkills]) => (
            <SkillCategory
              key={category}
              category={category}
              skills={categorySkills}
            />
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { label: "Years of Experience", value: "5+" },
            { label: "Projects Completed", value: "20+" },
            { label: "Languages", value: "6+" },
            { label: "Team Members Led", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="text-center p-6 rounded-lg bg-card/50 blur-glass border border-border hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

const SkillCategory = ({ category, skills }: SkillCategoryProps) => {
  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={categoryVariants}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="h-full bg-card/30 blur-glass rounded-xl p-6 md:p-8 border border-border group-hover:border-primary/50 transition-all duration-300 space-y-6">
        {/* Category title */}
        <div>
          <h3 className="text-2xl font-bold text-foreground capitalize mb-2">
            {category}
          </h3>
          <div className="w-12 h-1 bg-gradient-primary rounded-full" />
        </div>

        {/* Skills list */}
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar = ({ skill, index }: SkillBarProps) => {
  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: index * 0.1 + 0.4,
            duration: 0.4,
          }}
          className="text-sm font-semibold text-primary"
        >
          {skill.proficiency_level}%
        </motion.span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-card rounded-full overflow-hidden border border-border/50">
        <motion.div
          variants={barVariants}
          initial="hidden"
          whileInView="visible"
          className="h-full bg-gradient-primary rounded-full"
          style={{
            boxShadow: "0 0 20px hsl(200 98% 39% / 0.5)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillsSection;
