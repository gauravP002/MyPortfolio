import React from 'react';
import { aboutMe } from '../data/portfolioData';
import { Icon } from './icons';

const About: React.FC = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="section-underline"></div>
      <div className="about-layout">
        <div className="about-layout__personal-info">
          {aboutMe.bio.map((p, i) => <p key={i} className="section-paragraph">{p}</p>)}

          <ul className="about-layout__highlights">
            {aboutMe.highlights.map((item, index) => (
              <li key={index}>
                <Icon name="checkmark" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="about-layout__hobbies">
            <h3 className="about-layout__hobbies-title">Interests & Hobbies</h3>
            <div className="hobbies-chips">
              {aboutMe.hobbies.map(hobby => <span key={hobby} className="hobby-chip">{hobby}</span>)}
            </div>
          </div>
          
          <p className="about-layout__personality">{aboutMe.personality}</p>

          <div className="about-layout__actions">
            <a href="/resume.pdf" download className="button button--primary">
              Download Resume
            </a>
            <a href="#contact" className="button button--secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="about-layout__gallery">
          {aboutMe.galleryImages.map((src, index) => (
            <div className="gallery-image-wrapper" key={index}>
              <img src={src} alt={`Personal gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;