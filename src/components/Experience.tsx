import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Sky IT Infratech Pvt. Ltd.",
      role: "Web Development Intern",
      period: "June 2025 - July 2025",
      description: "Engineered and maintained reusable front-end components using React.js and Material UI. Collaborated in an Agile development workflow using Git to ensure timely project delivery.",
      technologies: ["React.js", "Material UI", "Git", "Agile"]
    },
    {
      company: "Netaji Subhas University of Technology, Delhi",
      role: "B.Tech in Information Technology",
      period: "Expected May 2026",
      description: "Pursuing Bachelor of Technology with focus on full-stack development, data structures & algorithms. Achieved top 21% ranking on LeetCode with 700+ problems solved. Selected as SpaceCon Hackathon Finalist (Top 20 from 10,000+ participants).",
      technologies: ["DSA", "Web Development", "Database Systems", "Software Engineering"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-reveal">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 card-glow section-reveal"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
