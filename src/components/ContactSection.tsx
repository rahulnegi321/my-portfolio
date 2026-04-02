import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Copy, CircleCheck as CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      handle: "your.email@example.com",
      color: "hover:text-primary",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      handle: "Your Name",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      handle: "username",
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      handle: "@username",
      color: "hover:text-sky-400",
    },
  ];

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("your.email@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {/* Email CTA */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 md:p-12 border border-primary/30 blur-glass">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Get in Touch
                  </h3>
                  <p className="text-muted-foreground">
                    Have a question or proposal? I'd love to hear from you.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex-1"
                  >
                    <Button className="w-full h-12 text-base font-semibold">
                      <Mail className="w-4 h-4 mr-2" />
                      Send me an email
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="h-12 px-6 font-semibold"
                    onClick={handleCopyEmail}
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy email
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Or connect on social media
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1 + 0.6,
                          duration: 0.5,
                        }}
                        whileHover={{ y: -4 }}
                        className="h-full bg-card/50 blur-glass rounded-xl p-6 border border-border group-hover:border-primary/50 transition-all duration-300 text-center space-y-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`flex justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300 ${link.color}`}
                        >
                          <IconComponent className="w-8 h-8" />
                        </motion.div>
                        <div className="space-y-1">
                          <p className="font-semibold text-foreground">
                            {link.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {link.handle}
                          </p>
                        </div>
                      </motion.div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <p className="text-muted-foreground">
              Response time: Usually within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
