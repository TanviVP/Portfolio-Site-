import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      institution: "International Institute of Information Technology",
      location: "Pune, Maharashtra",
      duration: "2022 - 2026",
      gpa: "8.3/10",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Computer Networks",
        "Operating Sytems"
      ]
    },
    {
      degree: "High School",
      institution: "Jai Hind High School and Junior College",
      location: "Pune, Maharashtra",
      duration: "2020 - 2022",
      percentage: "69.17%"
    },
    {
      degree: "Primary and Secondary School",
      institution: "Baby's English High School",
      location: "Pune, Maharashtra",
      duration: "2013 - 2020",
      percentage: "91.20%"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-episode-header">
          <div className="episode-badge">Episode 2</div>
          <div className="episode-info">
            <h2>Education Journey</h2>
            <p>The academic chapters that shaped my knowledge</p>
          </div>
        </div>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="duration">{edu.duration}</span>
                </div>
                <div className="institution-info">
                  <h4 className="institution">{edu.institution}</h4>
                  <p className="location">{edu.location}</p>
                  {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
                  {edu.percentage && <p className="gpa">Percentage: {edu.percentage}</p>}
                </div>
                {edu.relevantCourses && (
                  <div className="courses">
                    <h5>Relevant Coursework:</h5>
                    <ul>
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <li key={courseIndex}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {edu.achievements && (
                  <div className="achievements">
                    <h5>Achievements:</h5>
                    <ul>
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;