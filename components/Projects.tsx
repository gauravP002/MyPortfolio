import React from 'react';
import { projects } from '../data/portfolioData';
import { Icon } from './icons';

const Projects: React.FC = () => {
  return (
    <div className="projects-content">
      <h2 className="section-title">My Projects</h2>
      <div className="section-underline"></div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card__image-wrapper">
              <img src={project.image} alt={project.title} className="project-card__image" />
              <div className="project-card__overlay">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    <Icon name="link" size={24} />
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
                  <Icon name="github" size={24} />
                </a>
              </div>
            </div>
            <div className="project-card__info">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
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

export default Projects;