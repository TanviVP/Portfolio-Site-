import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "/images/data analytics logo.jpg",
      title: "Data Analysis & Visualization",
      description: "Transform your raw data into actionable insights with comprehensive analysis and interactive dashboards using Power BI, Tableau, and Python.",
      features: [
        "Data cleaning and preprocessing",
        "Statistical analysis and reporting",
        "Interactive dashboard creation",
        "Business intelligence solutions"
      ],
      price: "Depend on project's scope"
    },
    {
      icon: "/images/frontend developer logo.jpg",
      title: "Web Development",
      description: "Build modern, responsive websites and web applications using React, JavaScript, HTML5, and CSS3 with clean, professional designs.",
      features: [
        "Responsive web design",
        "React.js applications",
        "Frontend development",
        "UI/UX implementation"
      ],
      price: "Depend on project's scope"
    },
    {
      icon: "/images/Business consulting.jpg",
      title: "Business Intelligence Consulting",
      description: "Help businesses make data-driven decisions with custom BI solutions, KPI tracking, and performance analytics.",
      features: [
        "KPI dashboard development",
        "Business process analysis",
        "Data strategy consulting",
        "Performance metrics tracking"
      ],
      price: "Depend on project's scope"
    },
    {
      icon: "/images/python autmation.jpg",
      title: "Python Automation",
      description: "Automate repetitive tasks, data processing workflows, and create custom scripts to improve business efficiency.",
      features: [
        "Process automation scripts",
        "Data pipeline development",
        "Web scraping solutions",
        "Custom tool development"
      ],
      price: "Depend on project's scope"
    },
    {
      icon: "/images/exce;.jpg",
      title: "Excel & Spreadsheet Solutions",
      description: "Advanced Excel solutions including complex formulas, macros, data modeling, and automated reporting systems.",
      features: [
        "Advanced Excel formulas",
        "VBA macro development",
        "Data modeling and analysis",
        "Automated reporting systems"
      ],
      price: "Depend on project's scope"
    },
    {
      icon: "/images/data science.jpg",
      title: "Data Science Projects",
      description: "End-to-end data science solutions including predictive modeling, machine learning, and recommendation systems.",
      features: [
        "Predictive analytics",
        "Machine learning models",
        "Recommendation systems",
        "Data mining and insights"
      ],
      price: "Depend on project's scope"
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-episode-header">
          <div className="episode-badge">Services</div>
          <div className="episode-info">
            <h2>Freelance Services</h2>
            <p>Professional data analytics and web development services for your business needs</p>
          </div>
        </div>
        
        <div className="services-intro">
          <p className="services-description">
            I offer comprehensive freelance services in data analytics, web development, and business intelligence. 
            With expertise in modern tools and technologies, I help businesses transform their data into actionable insights 
            and build powerful digital solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="service-icon-image"
                  onError={(e) => {
                    console.log(`Failed to load service icon: ${service.icon}`);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="service-icon-fallback">
                  <span className="fallback-emoji">🔧</span>
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="service-price">{service.price}</div>
              <button className="btn btn-primary service-btn">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss your requirements and create a custom solution for your business.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">Start Project</a>
              <a href="mailto:tanvi.v.pakhale29@gmail.com" className="btn btn-secondary">Email Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;