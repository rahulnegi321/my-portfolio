import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/rahulnegi321", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rahulnegi123", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rahulnegi0312303@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 section-reveal">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 section-reveal">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 section-reveal">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all"
              asChild
            >
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <social.icon className="w-5 h-5" />
                {social.label}
              </a>
            </Button>
          ))}
        </div>
        
        <div className="bg-card border border-border rounded-xl p-8 card-glow section-reveal">
          <p className="text-lg text-muted-foreground mb-6">
            Want to work together? Feel free to reach out!
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all hover:shadow-[var(--glow-primary)]"
            asChild
          >
            <a href="mailto:rahulnegi0312303@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
