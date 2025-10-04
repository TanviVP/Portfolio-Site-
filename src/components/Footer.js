import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tanvi Pakhale</h3>
            <p>I am a final-year IT engineering student passionate about data analytics, visualization, and building impactful projects.
              Skilled in Python, SQL, Power BI, Tableau, and C++, I create data-driven solutions that turn insights into actionable outcomes.</p>
            <div className="social-links">
              <a href="https://github.com/TanviVP" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/tanvi-pakhale-454a6a259" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://mail.google.com/mail/u/0" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Technologies</h3>
            <ul className="footer-links">
              <li><a href="#">React</a></li>
              <li><a href="#">HTML</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">PowerBI</a></li>
              <li><a href="#">Tableau</a></li>
              <li><a href="#">Excel</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>Ready to work together?</p>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tanvi Pakhale. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;