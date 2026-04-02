import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.8 },
    },
    bounce: {
      y: [0, 10, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const skills = [
    "React",
    "TypeScript",
    "Full-Stack",
    "System Design",
    "Web Performance",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-glow opacity-40"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full filter blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="px-4 py-2 rounded-full blur-glass">
                <span className="text-sm font-medium text-primary">
                  Full-Stack Engineer & Product Architect
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span className="block">Crafting</span>
              <span className="block gradient-text">Digital Experiences</span>
              <span className="block">at Scale</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              FAANG-level engineer specializing in building scalable systems,
              beautiful interfaces, and products that millions use. Proven track
              record at driving technical excellence and user-centric design.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button
              className="h-12 px-8 text-base font-semibold group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="h-12 px-8 text-base font-semibold"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Skill badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center pt-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                custom={index}
                variants={floatingVariants}
                initial="hidden"
                animate={["visible", "float"]}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            animate={["visible", "bounce"]}
            className="pt-16"
          >
            <div className="flex justify-center">
              <div className="p-2 rounded-full border border-border/50">
                <ChevronDown className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
