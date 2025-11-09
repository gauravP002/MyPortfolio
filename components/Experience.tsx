import React from 'react';
import { experiences } from '../data/portfolioData';
import { Icon } from './icons';

const Experience: React.FC = () => {
  return (
    <div className="experience-content">
      <h2 className="section-title">Work Experience</h2>
      <div className="section-underline"></div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__icon-wrapper">
              {exp.logo && <Icon name={exp.logo} size={20} />}
            </div>
            <div className="timeline__content">
              <h3 className="timeline__role">{exp.role}</h3>
              <p className="timeline__company">{exp.company}</p>
              <p className="timeline__period">{exp.period}</p>
              <ul className="timeline__description">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="timeline__tags">
                {exp.technologies.map(tech => (
                   <span key={tech} className="timeline__tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;