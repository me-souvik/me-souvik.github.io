export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer & Team Leader",
      company: "Professional Experience",
      duration: "2021 - Present",
      desc: "Led a team to deliver 10+ production-level web and mobile applications across multiple domains. Built scalable systems including CRM, ERP, and Hotel Management solutions with secure APIs, payment gateway integrations, and optimized database performance (30–50% faster response times).",
    },
    {
      role: "Backend & System Developer",
      company: "Project-Based Work",
      duration: "2021 - Present",
      desc: "Developed robust backend systems using PHP and REST APIs, ensuring secure and efficient data handling. Implemented advanced SQL optimization, real-time webhooks, and scalable architectures for high-performance applications.",
    },
    {
      role: "Frontend & Android Developer",
      company: "Applications & Solutions",
      duration: "2023 - 2024",
      desc: "Designed responsive UI using JavaScript, jQuery, HTML5, and CSS3. Built Java-based Android applications with real-time API integration and seamless data synchronization across platforms.",
    },
    {
      role: "Deployment & System Management",
      company: "DevOps & Production",
      duration: "2021 - Present",
      desc: "Managed complete deployment lifecycle including VPS setup, server configuration, domain management, and production releases. Ensured application stability through testing, debugging, and performance optimization.",
    },
    {
      role: "Video & Audio Production",
      company: "Creative Work",
      desc: "Produced and edited video and audio content including reels, promotional media, and digital assets. Skilled in editing, sound design, and content optimization for social and web platforms.",
    },
    {
      role: "Author & Poet",
      company: "Creative Writing",
      desc: "Write original poetry and creative content with a focus on expression, storytelling, and emotional depth. Experienced in crafting engaging written pieces for digital platforms and personal publications.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="exp-title">Experience</h2>

      <div className="exp-grid">
        {experiences.map((item, index) => (
          <div className="exp-card" key={index}>
            <h3>{item.role}</h3>
            <span className="company">{item.company}</span>
            <span className="duration">{item.duration}</span>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}