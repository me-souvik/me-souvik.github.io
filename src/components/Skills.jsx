import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaAndroid,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { SiMongodb, SiExpress, SiMysql, SiFirebase } from "react-icons/si";

export default function TechStack() {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
    { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
    { name: "React", icon: <FaReact color="#61dbfb" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
    { name: "Python", icon: <FaPython color="#2052f8" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "PHP", icon: <FaPhp color="#2052f8" /> },
  ];

  const database = [
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  ];

  const android = [
    { name: "Android", icon: <FaAndroid color="#3ddc84" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
  ];

  const others = [
    { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
    { name: "GitLab", icon: <SiGitlab color="#fc6d26" /> },
    { name: "VS Code", icon: <VscVscode color="#0078d4" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
  ];

  const renderBox = (title, items) => (
    <div className="tech-box">
      <h3>{title}</h3>

      <div className="tech-items">
        {items.map((item, index) => (
          <div className="tech-item" key={index}>
            <div className="tech-icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="techstack" id="techstack">
      <h2 className="tech-title">Tech Stack</h2>

      <div className="tech-grid">
        {renderBox("Frontend", frontend)}
        {renderBox("Backend", backend)}
        {renderBox("Database", database)}
        {renderBox("Android", android)}
        {renderBox("Others", others)}
      </div>
    </section>
  );
}