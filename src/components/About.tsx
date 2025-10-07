import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient development with focus on meeting deadlines"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to solving complex challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-reveal">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 section-reveal">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer currently pursuing B.Tech in Information Technology 
              at Netaji Subhas University of Technology, Delhi (Expected May 2026). With expertise in 
              React.js, Node.js, and modern web technologies, I create scalable applications that solve 
              real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech has been marked by consistent achievement - I've solved 700+ DSA problems 
              on LeetCode and GeeksforGeeks, ranking in the top 21% globally on LeetCode. I was also selected 
              as a SpaceCon Hackathon Finalist among the top 20 teams from 10,000+ participants nationwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I bring leadership experience as a Team Captain in competitive sports and believe 
              in the power of collaboration to build exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid gap-6 section-reveal">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 card-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
