import profile from "../assets/profile.jpeg"; // your photo
import ParticlesBg from "./ParticlesBg";
import Curve from "./Curve";
import cv from "../assets/souvik_dutta_cv.pdf";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <ParticlesBg />

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Souvik</span>
          </h1>

          <h2>Full Stack Developer & Android Developer</h2>

          <p>
            Full Stack Developer with 5+ years of experience building scalable web and mobile applications.
            Specialized in CRM, ERP, and secure payment systems with strong expertise in backend architecture and high-performance APIs.
          </p>

          <div className="hero-buttons">
            <a href={cv} className="btn-primary" target="_blank" rel="noopener noreferrer">View CV</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={profile} alt="profile" />
        </div>

      </div>
      <Curve />
    </section>
  );
}
