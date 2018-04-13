import React from 'react'

const Portfolio = ({ children, projects }) => (
  <div className="portfolio">
    <h2>My Work</h2>
    <div className="projects-container">
      {projects.map(project => (
        <div className="project" key={project.id}>
          <h3 className="title">
            <a target="_blank " href={project.liveSite}>
              {project.name}
            </a>
          </h3>
          <h4>{project.description}</h4>
          <p>
            {project.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </p>
        </div>
      ))}
      {children}
    </div>
  </div>
)

export default Portfolio
