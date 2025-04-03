const Projects = () => {
    const projects = [
      { title: 'Project A', description: 'A web app for managing tasks' },
      { title: 'Project B', description: 'A secure messaging app' },
    ];
  
    return (
      <section id="projects">
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="project-cards">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  