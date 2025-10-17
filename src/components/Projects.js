import React, { useEffect, useState } from "react"; 
import './Project.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  const API_URL = "https://portfolio-backend-3-hop9.onrender.com/api/projects"

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;