import React from 'react';
import './ProjectDetails.css'; // Import CSS for styling

const ProjectDetails = ({ title, description, technologies, demoLink, githubLink, imageUrl }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <img  src="images/download.png"
          alt={title} className="project-image" />
        <div className="project-title">{title}</div>
      </div>
      {/* <p className="project-short-description">A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p>
      */}
      <p className="project-description">{description}</p>
      <p className="project-technologies"><strong>Technologies used:</strong> {technologies}</p>
      <div className="project-links">
        {demoLink && <a href={demoLink} className="btn" target="_blank" rel="noopener noreferrer">View Demo</a>}
        {githubLink && <a href={githubLink} className="btn" target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
      </div>
    </div>
  );
};

export default ProjectDetails;
