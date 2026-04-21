export default function Education() {
  const educationData = [
    {
      degree: "B.C.A.",
      institution: "Bidhan Chandra College, Asansol",
      year: "2017 — 2020",
      desc: "Focused on full-stack development and system design.",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Santinagar Vidyamandir(H.S)",
      year: "2015 — 2017",
      desc: "Science stream with Mathematics.",
    },
    {
      degree: "Secondary (10th)",
      institution: "Subhaspally Bidyaniketan (H.S)",
      year: "2015",
      desc: "Completed with strong academic performance.",
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-card">
              <span className="year">{edu.year}</span>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}