import React, { Component } from "react";
import Maz from "./ProjectCard";
import ProjectDetails from "./projectDetail";

class ProjectWork extends Component {
  render() {
    const projects = [
      {
        title: 'Matched Community',
        description: 'This site created for students where a variety of educational resources are available in one place. On this site, students can create their portfolios, share them with others, and view portfolios of other students. They can also send friend requests to connect with others and chat. The site allows for creating groups where global groups can be formed to connect with a large number of people simultaneously. There is also a search platform on the site that is very helpful for students, enabling them to search for study materials and learning resources near their location and benefit from them. There are many other features available on this site as well.',
        technologies: 'React, CSS, HTML, javscript, bootstrap, etc',
        demoLink: 'https://matchedcommunity.com/',
        githubLink: 'https://matchedcommunity.com/'
      }
      // Add more projects as needed
    ];
    
    return (
      // <div className="Project" id="projects">
      //   {" "}
      //   <h1 className="about-header" style={{ textAlign: "center" }}>
      //     Projects
      //   </h1>
      //   <hr
      //     className="divider"
      //     style={{
      //       margin: "auto"
      //     }}
      //   />
      //    {projects.map((project, index) => (
      //   <ProjectDetails
      //     key={index}
      //     title={project.title}
      //     description={project.description}
      //     technologies={project.technologies}
      //     demoLink={project.demoLink}
      //     githubLink={project.githubLink}
      //   />
      // ))}
      //   {/* <Maz /> */}
      // </div>
      <div className="project-container" id="projects">
      <h1 className="project-header">Projects</h1>
      <hr className="divider"  style={{
        margin: "auto"
         }}/>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectDetails
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
    );
  }
}

export default ProjectWork;
