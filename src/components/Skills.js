import React from 'react';
import { FaCode, FaDatabase, FaPython, FaPhp, FaGithub, FaAndroid, FaBrain, FaUsers, FaClock, FaLightbulb } from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Skills.css';

const hardSkills = [
  { icon: <FaGithub />, label: 'Git, GitHub' },
  { icon: <FaCode />, label: 'HTML, CSS, JavaScript' },
  { icon: <FaPhp />, label: 'PHP, Laravel' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <FaDatabase />, label: 'MySQL, SQLite' },
  { icon: <FaAndroid />, label: 'Android Studio, Kotlin (dasar)' },
  { icon: <FaBrain />, label: 'Machine Learning (Dasar), Generative AI, Prompt AI' },
];

const softSkills = [
  { icon: <FaLightbulb />, label: 'Problem Solving' },
  { icon: <FaUsers />, label: 'Komunikasi, Teamwork' },
  { icon: <FaClock />, label: 'Time Management' },
  { icon: <FaLightbulb />, label: 'Fleksibility & Adaptability' },
];

function Skills() {
  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skills-group">
          <h3>Hard Skill</h3>
          <div className="skills-cards">
            {hardSkills.map((skill, idx) => (
              <div className="skill-card" key={idx}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-label">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-group">
          <h3>Soft Skill</h3>
          <div className="skills-cards">
            {softSkills.map((skill, idx) => (
              <div className="skill-card" key={idx}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-label">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 