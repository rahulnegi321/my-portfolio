import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      label: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="relative py-16 px-4 md:px-8 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Branding */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center font-bold text-foreground">
              ▲
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Building scalable systems and beautiful interfaces that make a
              real impact.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {footerLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-border origin-left mb-8"
        />

        {/* Bottom section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved. Crafted with care.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 text-xs text-muted-foreground"
          >
            <a
              href="#"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              Privacy Policy
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              Terms
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
