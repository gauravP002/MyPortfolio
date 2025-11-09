import React from 'react';
import { skills } from '../data/portfolioData';
import { Icon } from './icons';

const Skills: React.FC = () => {
  return (
    <div className="skills-content">
      <h2 className="section-title">Professional Skills</h2>
      <div className="section-underline"></div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-card__content">
              <Icon name={skill.icon} size={50} color={skill.color} />
              <h3 className="skill-card__name">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;