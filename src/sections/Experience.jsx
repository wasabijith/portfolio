const Experience = () => {
  const experiences = [
    { title: 'Cybersecurity Intern', company: 'Company A', description: 'Worked on securing web applications' },
    { title: 'Software Developer', company: 'Company B', description: 'Developed full-stack applications' },
  ];

  return (
    <section id="experience">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
