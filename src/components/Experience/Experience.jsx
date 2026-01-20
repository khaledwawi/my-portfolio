import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      type: 'work',
      title: 'Mathematics & Computer Science Teacher',
      company: 'Miar Shefeya School',
      period: '2023 - Present',
      description: 'Teaching high school students math and computer science. Creating lesson plans to make difficult topics easier to understand. Helping students improve their understanding of programming and math concepts.',
      skills: ['Teaching', 'Computer Science', 'Mathematics', 'Curriculum Design'],
    },
    {
      type: 'work',
      title: 'Mathematics Instructor',
      company: 'Akari Institute',
      period: '2023 - Present',
      description: 'Teaching middle and high school students math. Developing personalized lessons to help students improve their performance. Using creative methods to encourage student participation and learning.',
      skills: ['Mathematics', 'Tutoring', 'Personalized Learning'],
    },
    {
      type: 'work',
      title: 'Coding Workshop Volunteer',
      company: 'Community Initiative',
      period: '2024',
      description: 'Volunteered to teach middle school students basic programming skills. Encouraged students to explore coding and technology.',
      skills: ['Programming', 'Mentoring', 'Youth Education'],
    },
    {
      type: 'work',
      title: 'Hackathon Participant',
      company: 'Various Events',
      period: '2023',
      description: 'Participated in hackathons to work with teams and solve coding challenges. Developed projects in limited time and improved coding skills.',
      skills: ['Teamwork', 'Problem Solving', 'Rapid Development'],
    },
  ];

  const education = [
    {
      type: 'education',
      title: 'B.Sc in Software Engineering',
      company: 'Kinneret Academic College',
      period: '2021 - 2025',
      description: 'Focused on software engineering fundamentals with hands-on project experience.',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Databases'],
    },
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-section">
            <motion.div
              className="timeline-header"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiBriefcase className="timeline-icon" />
              <h3>Work Experience</h3>
            </motion.div>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{exp.period}</span>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-skills">
                      {exp.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="timeline-section">
            <motion.div
              className="timeline-header"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiBookOpen className="timeline-icon" />
              <h3>Education</h3>
            </motion.div>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{edu.period}</span>
                    <h4 className="timeline-title">{edu.title}</h4>
                    <p className="timeline-company">{edu.company}</p>
                    <p className="timeline-description">{edu.description}</p>
                    <ul className="timeline-skills">
                      {edu.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
