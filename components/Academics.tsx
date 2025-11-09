import React from 'react';
import { academics } from '../data/portfolioData';
import { Icon } from './icons';

const Academics: React.FC = () => {
  return (
    <div className="academics-content">
      <h2 className="section-title">Academics</h2>
      <div className="section-underline"></div>
      <div className="timeline">
        {academics.map((edu, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__icon-wrapper">
              <Icon name={edu.logo} size={20} />
            </div>
            <div className="timeline__content">
              <h3 className="timeline__role">{edu.degree}</h3>
              <p className="timeline__company">{edu.institute}</p>
              <p className="timeline__period">{edu.period} &bull; {edu.score}</p>
              <ul className="timeline__description">
                {edu.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;