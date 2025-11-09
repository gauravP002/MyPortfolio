import React from 'react';
import { skills } from '../data/portfolioData';
import { Icon } from './icons';

const About: React.FC = () => {
  return (
    <div className="about-layout">
      <div className="about-layout__info">
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>
        <p className="section-paragraph">
          I'm a dedicated Frontend Engineer with a strong passion for creating elegant, high-performance web applications. With years of experience in the field, I have honed my skills in modern frameworks like React and Angular, allowing me to build dynamic and responsive user interfaces.
        </p>
        <p className="section-paragraph">
          My journey in tech began with a curiosity for how things work on the web, which quickly evolved into a career. I thrive on solving complex problems and am committed to writing clean, maintainable, and scalable code. I believe in the power of good design and its ability to enhance user experience.
        </p>
      </div>
      <div className="about-layout__stack">
        <h3 className="about-layout__stack-title">My Tech Stack</h3>
        <div className="tech-stack-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="tech-stack-grid__item">
              <Icon name={skill.icon} size={40} color={skill.color} />
              <p className="tech-stack-grid__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;