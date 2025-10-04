import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            Portfolio
          </Link>
          
          <ul className="navbar-menu">
            <li>
              <button onClick={() => scrollToSection('home')} className="nav-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="nav-link">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('reviews')} className="nav-link">
                Reviews
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </button>
            </li>
          </ul>
          
          <button 
            className="navbar-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
        
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="mobile-nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('education')} className="mobile-nav-link">
            Education
          </button>
          <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">
            Experience
          </button>
          <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
            Services
          </button>
          <button onClick={() => scrollToSection('reviews')} className="mobile-nav-link">
            Reviews
          </button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;