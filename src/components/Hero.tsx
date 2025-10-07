import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-5xl mx-auto text-center z-10 space-y-8">
        
        {/* Your new avatar image */}
        <div className="flex justify-center mb-6">
          <img
            src="/profile.png" 
            alt="Rahul Negi Avatar"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </div>
        
        <div className="space-y-4 section-reveal revealed">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  "Rahul Negi",
                  2000, 
                  "a Developer",
                  2000,
                  "a Problem Solver",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
            Full-Stack Developer & Problem Solver
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto section-reveal revealed delay-200">
          Building scalable web applications with modern technologies. B.Tech student at NSUT 
          with 700+ DSA problems solved and a passion for creating seamless user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center section-reveal revealed delay-300">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all hover:shadow-[var(--glow-primary)]"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg transition-all"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;