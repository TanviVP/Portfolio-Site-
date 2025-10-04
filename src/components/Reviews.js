import React, { useState } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      name: "Prabhat Ranjan S.",
      role: "Python,Data Processing,Excel,Web Scraping,Software Architecture",
      rating: 5,
      review: "I had the pleasure of working with Tanvi on an Excel automation project using Python, and I was thoroughly impressed. She delivered the solution incredibly fast without compromising quality. Her clear communication, attention to detail, and professionalism made the process seamless. She quickly understood the requirements and delivered a clean, user-friendly output. I highly recommend her and look forward to working with her again!",
      image: "👩‍💼"
    }
    
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
  };

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-episode-header">
          <div className="episode-badge">Reviews</div>
          <div className="episode-info">
            <h2>Client Testimonials</h2>
            <p>What clients say about working with me</p>
          </div>
        </div>

        <div className="reviews-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24h</div>
            <div className="stat-label">Response Time</div>
          </div>
        </div>

        <div className="reviews-carousel">
          <div className="review-card">
            <div className="review-header">
              <div className="client-info">
                <div className="client-avatar">{reviews[currentReview].image}</div>
                <div className="client-details">
                  <h4 className="client-name">{reviews[currentReview].name}</h4>
                  <p className="client-role">{reviews[currentReview].role}</p>
                  <p className="client-company">{reviews[currentReview].company}</p>
                </div>
              </div>
              <div className="rating">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
            </div>
            <blockquote className="review-text">
              "{reviews[currentReview].review}"
            </blockquote>
          </div>

          <div className="carousel-controls">
            <button onClick={prevReview} className="carousel-btn prev-btn">
              ←
            </button>
            <div className="carousel-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`dot ${index === currentReview ? 'active' : ''}`}
                />
              ))}
            </div>
            <button onClick={nextReview} className="carousel-btn next-btn">
              →
            </button>
          </div>
        </div>

        <div className="reviews-cta">
          <h3>Want to Leave a Review?</h3>
          <p>If you've worked with me, I'd love to hear about your experience!</p>
          <a href="#contact" className="btn btn-primary">Share Your Experience</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;