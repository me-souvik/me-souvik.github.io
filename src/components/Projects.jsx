export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React with modern UI design.",
      tech: "React, CSS",
      github: "#",
      live: "#",
    },
    {
      title: "E-Commerce App",
      desc: "Full-stack shopping app with cart and authentication.",
      tech: "MERN Stack",
      github: "#",
      live: "#",
    },
    {
      title: "Android Notes App",
      desc: "Simple notes app with local storage and clean UI.",
      tech: "Java, Android",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="project-title">My Projects</h2>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-image"></div>

            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>

            <span className="tech">{proj.tech}</span>

            <div className="project-links">
              <a href={proj.github} target="_blank">GitHub</a>
              <a href={proj.live} target="_blank">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}