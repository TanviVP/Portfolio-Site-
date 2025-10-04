import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-episode-header">
          <div className="episode-badge">Episode 1</div>
          <div className="episode-info">
            <h2>About Me</h2>
            <p>The origin story - Who I am and what drives me</p>
          </div>
        </div>
        <div className="grid grid-2">
          <div className="episode-card">
            <div className="episode-card-number">Scene 1</div>
            <h3 className="card-title">Who I Am</h3>
            <p className="card-description">
            I am a final-year IT engineering student with a strong interest in data analytics and business intelligence. 
            Skilled in Python, SQL, Power BI, Tableau, and C++, I enjoy solving complex problems, analyzing data to generate insights, and building impactful projects such as dashboards and recommendation systems.
             I am eager to apply my technical and analytical skills to contribute meaningfully in data-driven roles.
            </p>
          </div>
          <div className="episode-card">
            <div className="episode-card-number">Scene 2</div>
            <h3 className="card-title">What I Do</h3>
            <p className="card-description">
            I analyze data to uncover insights, build dashboards, and develop data-driven solutions that support informed decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;