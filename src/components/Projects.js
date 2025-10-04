import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Vodafone - Idea Analysis",
      description: "Conducted a comprehensive analysis of Vodafone-Idea using Python, Power BI, and Excel, focusing on financial performance, operational metrics, and subscriber trends. The project aimed to identify key loss drivers, analyze historical patterns, perform forecasting, and provide actionable insights for strategic decision-making.",
      tags: ["Excel", "Python", "PowerBI"],
      link: "https://github.com/TanviVP/Vodafone-idea-analysis",
      image: "/images/vodafone - project.jpg",
      imageAlt: "Vodafone Idea Analysis Dashboard"
    },
    {
      title: "Analysis of Crimes Against Women in India 2022",
      description: "Analyzed crimes against women in India in 2022 using Python and Tableau to identify trends, patterns, and state-wise variations, providing actionable insights for awareness and policy planning.",
      tags: ["PowerBI", "Python", "Data Analysis"],
      link: "https://vimeo.com/1124465496?share=copy",
      image: "/images/crime-analysis project.jpg",
      imageAlt: "Crime Analysis Dashboard"
    },
    {
      title: "Hashtag Genius",
      description: "Developed a hashtag recommendation system using Python and NLP techniques to suggest relevant hashtags for text content, improving content reach and engagement on social media platforms.",
      tags: ["Python", "NLP", "Machine Learning"],
      link: "https://hashtag-genuis.streamlit.app/#hash-tag-genius",
      image: "/images/hashtag-project.jpg",
      imageAlt: "Hashtag Recommendation System"
    },
    {
      title: "Vrindavan Society Website",
      description: "Developed a responsive website for Vrundavan Society featuring four core pages – Home, About Us, Events, and Contact Us – to provide an organized digital presence and improve community engagement.",
      tags: ["HTML", "CSS", "JS"],
      link: "https://tanvivp.github.io/Society-Website-/",
      image: "/images/2ndimg.jpg",
      imageAlt: "Vrundavan Society Website"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-episode-header">
          <div className="episode-badge">Episode 4</div>
          <div className="episode-info">
            <h2>Featured Projects</h2>
            <p>Showcase of creative solutions and technical achievements</p>
          </div>
        </div>
        <div className="projects-marquee-container">
          <div className="projects-marquee">
            <div className="projects-track">
              {projects.concat(projects).map((project, index) => (
                <div key={index} className="project-card-marquee">
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-image"
                      onError={(e) => {
                        console.log(`Failed to load image: ${project.image}`);
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="project-image-fallback">
                      <div className="fallback-icon">📊</div>
                      <p>Project Image</p>
                    </div>
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <h4>View Details</h4>
                        <p>Click to explore this project</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description-single">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a href={project.link} className="btn btn-primary project-btn">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;