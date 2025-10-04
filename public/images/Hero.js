import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Hello, I'm Tanvi Pakhale
            </h1>
            
            <div className="hero-roles">
              <span className="role-text">I'm a </span>
              <span className="role-highlight">Web Developer</span>
              <span className="role-separator"> • </span>
              <span className="role-highlight">Problem Solver</span>
              <span className="role-separator"> • </span>
              <span className="role-highlight">Tech Enthusiast</span>
            </div>
            
            <h2 className="hero-subtitle">
              Final Year Engineering Student
            </h2>
            <h3 className="hero-specialization">
              Information Technology Engineering
            </h3>
            
            <p className="hero-description slide-up">
              Passionate about creating innovative digital solutions and building impactful web applications. 
              Currently pursuing my Bachelor's degree while gaining hands-on experience in modern technologies, 
              full-stack development, and solving real-world problems through code.
            </p>
            
            <div className="hero-highlights-text">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span className="highlight-text">Building scalable web applications with modern frameworks</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span className="highlight-text">Solving complex problems with creative and efficient solutions</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span className="highlight-text">Focused on user experience and clean, maintainable code</span>
              </div>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            
            <div className="hero-skills">
              <h4 className="skills-title">Technical Skills</h4>
              <div className="skills-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn btn-primary">
                View My Projects
              </button>
              <button className="btn btn-secondary">
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img 
                src="/images/Tanvi Professional Photo.jpg" 
                alt="Tanvi Pakhale - Web Developer & Tech Enthusiast" 
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
