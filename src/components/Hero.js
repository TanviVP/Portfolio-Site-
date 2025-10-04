import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Data Analyst',
    'Web Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Floating Elements */}
      <div className="hero-floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="hero-main-content">
        <div className="hero-text-section">
          <div className="hero-badge fade-in">
            <span className="badge-icon">✨</span>
            <span>Welcome to my Portfolio</span>
          </div>

          <div className="hero-name-container fade-in">
            <h1 className="hero-title">
              <span className="name-greeting">Hi, I'm</span>
              <span className="name-main">
                <span className="name-first">TANVI</span>
                <span className="name-last">PAKHALE</span>
              </span>
            </h1>
          </div>

          <div className="hero-subtitle slide-up">
            <span className="subtitle-prefix">I'm a passionate </span>
            <span className="text-gradient typing-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </div>

          <p className="hero-description slide-up">
            Final-year IT engineering student passionate about transforming data into insights
            and building innovative solutions. Specialized in Python, SQL, Power BI, and modern
            web technologies with a focus on creating impactful digital experiences.
          </p>



          <div className="hero-cta scale-in">
            <button onClick={scrollToProjects} className="btn btn-primary">
              <span className="btn-icon">🚀</span>
              Explore My Work
            </button>
            <button onClick={scrollToContact} className="btn btn-secondary">
              <span className="btn-icon">💬</span>
              Let's Connect
            </button>
          </div>


        </div>

        <div className="hero-right-section">
          <div className="hero-photo-section">
            <div className="photo-container">
              <div className="photo-glow"></div>
              <div className="photo-frame">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Tanvi Professional Photo.jpg`}
                  alt="Tanvi Pakhale - Data Analyst & Developer"
                  className="hero-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="photo-fallback">
                  <div className="photo-icon">👩‍💻</div>
                  <p>Professional Photo</p>
                  <span className="photo-subtitle">Coming Soon</span>
                </div>
              </div>
              <div className="photo-decorations">
                <div className="decoration-circle decoration-1"></div>
                <div className="decoration-circle decoration-2"></div>
                <div className="decoration-circle decoration-3"></div>
                <div className="decoration-circle decoration-4"></div>
              </div>
              <div className="photo-skills">
                <div className="skill-bubble skill-1">Python</div>
                <div className="skill-bubble skill-2">React</div>
                <div className="skill-bubble skill-3">SQL</div>
                <div className="skill-bubble skill-4">Power BI</div>
              </div>
            </div>
          </div>

          {/* Compact Journey Section */}
          <div className="hero-journey-compact">
            <div className="journey-header-compact">
              <div className="journey-badge-compact">
                <span className="journey-icon">🎬</span>
                <span>Explore My Journey</span>
              </div>
            </div>

            <div className="journey-marquee-container">
              <div className="journey-marquee">
                <div className="journey-track">
                  <a href="#about" className="episode-card-marquee episode-1">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">01</span>
                      <div className="episode-icon-marquee">👋</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">About Me</h4>
                      <p className="episode-description-marquee">My background & passion</p>
                    </div>
                  </a>

                  <a href="#projects" className="episode-card-marquee episode-2">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">02</span>
                      <div className="episode-icon-marquee">🚀</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">Projects</h4>
                      <p className="episode-description-marquee">Innovative solutions</p>
                    </div>
                  </a>

                  <a href="#services" className="episode-card-marquee episode-3">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">03</span>
                      <div className="episode-icon-marquee">⚡</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">Services</h4>
                      <p className="episode-description-marquee">What I can offer</p>
                    </div>
                  </a>

                  <a href="#reviews" className="episode-card-marquee episode-4">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">04</span>
                      <div className="episode-icon-marquee">⭐</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">Reviews</h4>
                      <p className="episode-description-marquee">Client testimonials</p>
                    </div>
                  </a>

                  <a href="#contact" className="episode-card-marquee episode-5">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">05</span>
                      <div className="episode-icon-marquee">📞</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">Contact</h4>
                      <p className="episode-description-marquee">Let's collaborate</p>
                    </div>
                  </a>

                  {/* Duplicate for seamless loop */}
                  <a href="#about" className="episode-card-marquee episode-1">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">01</span>
                      <div className="episode-icon-marquee">👋</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">About Me</h4>
                      <p className="episode-description-marquee">My background & passion</p>
                    </div>
                  </a>

                  <a href="#projects" className="episode-card-marquee episode-2">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">02</span>
                      <div className="episode-icon-marquee">🚀</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">Projects</h4>
                      <p className="episode-description-marquee">Innovative solutions</p>
                    </div>
                  </a>

                  <a href="#services" className="episode-card-marquee episode-3">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">03</span>
                      <div className="episode-icon-marquee">⚡</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">Services</h4>
                      <p className="episode-description-marquee">What I can offer</p>
                    </div>
                  </a>

                  <a href="#reviews" className="episode-card-marquee episode-4">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">04</span>
                      <div className="episode-icon-marquee">⭐</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">Reviews</h4>
                      <p className="episode-description-marquee">Client testimonials</p>
                    </div>
                  </a>

                  <a href="#contact" className="episode-card-marquee episode-5">
                    <div className="episode-header-marquee">
                      <span className="episode-number-marquee">05</span>
                      <div className="episode-icon-marquee">📞</div>
                    </div>
                    <div className="episode-content-marquee">
                      <h4 className="episode-title-marquee">Contact</h4>
                      <p className="episode-description-marquee">Let's collaborate</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;