import { motion } from "framer-motion";
import { Code as Code2, Zap, Users, Target } from "lucide-react";

const AboutSection = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const coreValues = [
    {
      icon: Code2,
      title: "Code Excellence",
      description: "Clean, maintainable, and performant code that scales",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Obsessed with fast load times and smooth interactions",
    },
    {
      icon: Users,
      title: "User Centric",
      description:
        "Building interfaces that delight and meet real user needs",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Focused on metrics that matter and real business value",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering meets design at the intersection of technical excellence
            and user experience
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              I'm a full-stack engineer with a passion for building products at
              scale. With experience at leading tech companies and startups, I
              specialize in architecting systems that can handle millions of
              users while maintaining beautiful, intuitive interfaces.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              My expertise spans modern frontend frameworks, backend system
              design, database optimization, and cloud infrastructure. But
              beyond the tech stack, I'm driven by solving real problems and
              creating meaningful impact through thoughtful engineering.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-3 pt-4"
            >
              <h3 className="text-xl font-bold text-foreground">
                What I'm passionate about:
              </h3>
              <ul className="space-y-2">
                {[
                  "Building scalable systems that serve millions",
                  "Creating beautiful, accessible user interfaces",
                  "Mentoring junior engineers and fostering growth",
                  "Open-source contribution and knowledge sharing",
                  "Continuous learning and staying ahead of the curve",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right side - Image placeholder or visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center relative group">
              {/* Animated background elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-primary rounded-2xl" />
              </motion.div>

              {/* Center content */}
              <div className="relative z-10 text-center space-y-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl"
                >
                  💻
                </motion.div>
                <p className="text-foreground font-semibold">
                  Full-Stack Engineer
                </p>
                <p className="text-sm text-muted-foreground">
                  Building the future, one line at a time
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core values grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-card/50 blur-glass rounded-xl p-6 border border-border group-hover:border-primary/50 transition-all duration-300 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                  >
                    <IconComponent className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
