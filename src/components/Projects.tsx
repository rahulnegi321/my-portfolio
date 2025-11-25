import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
  {
    title: "Real-Time Communication Platform",
    description:
      "A real-time multi-user video conferencing platform using WebRTC with optimized ICE + SDP signaling, peer-to-peer streams, screen sharing, and real-time chat. Features stable connection architecture and smooth React Context-based state management.",
    technologies: ["React.js", "Node.js", "WebRTC", "Socket.IO"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    github: "https://github.com/rahulnegi321/zoom-clone",
    live: "#" // ❌ No live link
  },

  {
    title: "Content-Driven Food Discovery Platform",
    description:
      "A role-based food content platform with JWT authentication, Multer media upload pipeline, optimized MongoDB queries, and smooth React Router navigation for feeds, profiles, and content uploads.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Multer"],
    image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=800&q=80",
    github: "https://github.com/rahulnegi321/food-app",
    live: "#" // ❌ No live link
  },

  {
    title: "Social Media Backend Service",
    description:
      "A secure backend following MVC architecture with 10+ REST APIs, JWT authentication, bcrypt hashing, input validation, and protected routes for user authentication and post management.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    github: "https://github.com/rahulnegi321/backend-project",
    live: "#" // ❌ No live link
  },

  {
    title: "AI Article Summarizer (Chrome Extension)",
    description:
      "A Manifest V3 Chrome extension using the Gemini API to generate structured summaries. Includes secure API key handling, a minimal UI, and instant summarization workflow.",
    technologies: ["Gemini API", "JavaScript", "Manifest V3", "Chrome APIs"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    github: "https://github.com/rahulnegi321/AI-Summarizer-Chrome-Extension",
    live: "#" // ❌ No live link
  },

 {
  title: "Health Genie",
  description:
    "A responsive healthcare UI platform featuring multi-page routing, AI-ready chat interface, custom CSS animations, and Chart.js dashboards for future health analytics.",
  technologies: ["React.js", "Chart.js", "CSS", "React Router"],
  image: "https://images.pexels.com/photos/6129049/pexels-photo-6129049.jpeg?auto=compress&cs=tinysrgb&w=800",
  github: "https://github.com/rahulnegi321/health-genie",
  live: "https://health-genie-rahulnegi321s-projects.vercel.app/"
},

  {
    title: "Interactive Frontend Animation Website",
    description:
      "A highly engaging animation-rich website built with HTML, CSS, JavaScript, and Shery.js, featuring scroll-based effects, hover transitions, and visually appealing minimal UI.",
    technologies: ["HTML", "CSS", "JavaScript", "Shery.js"],
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=800&q=80",
    github: "https://github.com/rahulnegi321/frontend-project",
    live: "https://rahulnegi321.github.io/frontend-project/" // ✅ live link
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
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

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

                  {project.live !== "#" && (
                    <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
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
