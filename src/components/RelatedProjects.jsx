import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { worksData } from '../data/worksData';
import '../styles/related-projects.css';

export default function RelatedProjects({ currentProjectId }) {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get projects excluding the current one
    const availableProjects = worksData.filter(
      project => project.id !== currentProjectId
    );

    // Randomly select 2 projects
    const shuffled = [...availableProjects].sort(() => Math.random() - 0.5);
    setSelectedProjects(shuffled.slice(0, 2));
  }, [currentProjectId]);

  const handleProjectClick = (projectId) => {
    window.scrollTo(0, 0);
    navigate(`/work/${projectId}`);
  };

  if (selectedProjects.length < 2) {
    return null;
  }

  return (
    <div className="related-projects-container">
      <div className="related-projects-header">
        <h2>Explore More Projects</h2>
      </div>
      <div className="related-projects-grid">
        {selectedProjects.map((project) => (
          <div
            key={project.id}
            className="related-project-card"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="related-project-image">
              <img src={project.heroImage} alt={project.title} />
            </div>
            <div className="related-project-content">
              <h3>{project.title}</h3>
              <p className="related-project-cta">Explore Project</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
