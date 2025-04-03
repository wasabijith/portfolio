const Skills = () => {
    const skills = ['JavaScript', 'Python', 'Cybersecurity', 'React', 'Node.js'];
  
    return (
      <section id="skills">
        <div className="skills-container">
          <h2>Skills</h2>
          <div className="skills-cards">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  