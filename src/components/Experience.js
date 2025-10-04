import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Dat Analyst Intern",
      company: "ARG Supply Tech",
      duration: "Feb 2025 - May 2025",
      description: "Developed a detailed Power BI dashboard on packaging materials using Power BI and Excel, enabling material, vendor, plant, and outlier analysis that improved business visibility and decision-making."
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-episode-header">
          <div className="episode-badge">Episode 3</div>
          <div className="episode-info">
            <h2>Work Experience</h2>
            <p>Professional adventures and career milestones</p>
          </div>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.duration}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;