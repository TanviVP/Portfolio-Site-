import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '37c0ba57-5967-4c2b-87cd-5c0142c4bd72', // Replace with your actual access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-episode-header">
          <div className="episode-badge">Episode 6</div>
          <div className="episode-info">
            <h2>Get In Touch</h2>
            <p>The final episode - Let's connect and create something amazing</p>
          </div>
        </div>
        <div className="grid grid-2">
          <div className="episode-card">
            <div className="episode-card-number">Scene 1</div>
            <h3 className="card-title">Contact Information</h3>
            <div className="contact-info">
              <p><strong>Email:</strong> tanvi.v.pakhale29@gmail.com</p>
              <p><strong>Phone:</strong> +91 9764521040</p>
              <p><strong>Location:</strong> Pune, Maharashtra, India</p>
              <p><strong>LinkedIn:</strong> linkedin.com/in/tanvi-pakhale</p>
            </div>
          </div>
          <div className="episode-card">
            <div className="episode-card-number">Scene 2</div>
            <h3 className="card-title">Send a Message</h3>
            {submitStatus === 'success' && (
              <div className="form-message success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-message error">
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Web3Forms hidden fields */}
              <input type="hidden" name="access_key" value="37c0ba57-5967-4c2b-87cd-5c0142c4bd72" />
              <input type="hidden" name="subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />

              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows="5"
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner">⏳</span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">📧</span>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;