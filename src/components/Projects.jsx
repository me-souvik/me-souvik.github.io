import project_website from "../assets/website.png";
import Inventory from "../assets/Inventory.webp";

export default function Projects() {
  const projects = [
    {
      img: project_website,
      title: "Portfolio Website",
      desc: "Personal portfolio built using React with modern UI design.",
      tech: "React, CSS",
      github: "https://github.com/me-souvik/me-souvik.github.io.git",
      live: "https://me-souvik.github.io",
    },
    {
      img: Inventory,
      title: "Stock Management Software",
      desc: "Inventory and stock management system with real-time tracking.",
      tech: "React, Spring Boot, Bootstrap, MySQL",
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
            <div className="project-image">
              {proj.img && (
                <img src={proj.img} alt={proj.title} />
              )}
            </div>

            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>

            <span className="tech">{proj.tech}</span>

            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={proj.live} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}