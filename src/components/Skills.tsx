const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "JWT Authentication"]
    },
    {
      category: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Git", "GitHub", "WebRTC"]
    },
    {
      category: "Languages & DSA",
      skills: ["C++", "JavaScript", "SQL", "Data Structures", "Algorithms", "700+ LeetCode"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-reveal">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-glow section-reveal"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{cat.category}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-muted hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
