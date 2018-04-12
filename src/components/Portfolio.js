import React from 'react'

const Portfolio = ({ projects }) => (
  <div className="portfolio">
    <h2>My Work</h2>
    <div className="projects-container">
      {projects.map(project => (
        <div className="project">
          <h3>
            <a target="_blank " href={project.liveSite}>
              {project.name}
            </a>
          </h3>
          <h4>{project.description}</h4>
          <p>{project.tags.map(tag => <span className="tag">{tag}</span>)}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Portfolio
