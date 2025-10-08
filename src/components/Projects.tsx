import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Happy Video Call",
      description: "A full-stack video conferencing platform with features like peer-to-peer video/audio calls, screen sharing, and real-time chat. Architected for stable connections and efficient state management using the React Context API.",
      technologies: ["React.js", "Node.js", "WebRTC", "Socket.IO"],
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
      github: "https://github.com/rahulnegi321/zoom-clone",
      live: "https://zoom-clone-pj1t.onrender.com/"
    },
    {
      title: "Social Media Backend",
      description: "A secure and scalable backend API with JWT authentication and bcrypt hashing. Features an MVC architecture with protected routes to handle user authentication, post management, and a commenting system.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      github: "https://github.com/rahulnegi321/backend-project",
      live: "#"
    },
    {
      title: "AI Article Summarizer",
      description: "A user-friendly Chrome extension that provides AI-powered article summaries in three distinct formats. Built with Manifest V3 standards to ensure secure storage of user API keys and custom preferences.",
      technologies: ["Google Gemini API", "JavaScript", "Manifest V3", "Chrome APIs"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      github: "https://github.com/rahulnegi321/AI-Summarizer-Chrome-Extension",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-reveal">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden card-glow section-reveal group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
               <div className="flex gap-3 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                {/* Conditional rendering for Live Demo button */}
                {project.live !== "#" && (
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
