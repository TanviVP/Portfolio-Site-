import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Web Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3",]
    },
    {
      category: "Data Analytics",
      skills: ["Data Visualization", "Excel", "Python", "SQL"]
    },
    {
      category: "Tools & Others",
      skills: ["Git","Tableau","Power BI"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-episode-header">
          <div className="episode-badge">Episode 5</div>
          <div className="episode-info">
            <h2>Skills & Tech Stack</h2>
            <p>The tools and technologies in my arsenal</p>
          </div>
        </div>
        <div className="grid grid-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="episode-card">
              <h3 className="card-title">{category.category}</h3>
              <div className="card-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;