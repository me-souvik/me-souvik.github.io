import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left */}
        <div className="footer-left">
          <h3>Souvik Dutta</h3>
          <p>Building modern web experiences with clean and scalable code.</p>
        </div>

        {/* Center */}
        <div className="footer-center">
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right (Socials) */}
        <div className="footer-right">
          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Souvik Dutta. All rights reserved.</p>
      </div>
    </footer>
  );
}