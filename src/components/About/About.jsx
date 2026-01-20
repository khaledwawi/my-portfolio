import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { FaGraduationCap, FaChalkboardTeacher, FaLanguage } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: <FaGraduationCap />, title: 'B.Sc Software Engineering', subtitle: 'Kinneret Academic College' },
    { icon: <FaChalkboardTeacher />, title: '4+ Years Teaching', subtitle: 'Math & Computer Science' },
    { icon: <FaLanguage />, title: '3 Languages', subtitle: 'English, Hebrew, Arabic' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img src="/Screenshot 2026-01-20 004744.png" alt="Khaled Abu Ahmad" className="about-image" />
              </div>
              <div className="about-image-border"></div>
              <div className="about-image-dots"></div>
            </div>
            
            <div className="about-contact-info">
              <a href="mailto:khaledaa155@gmail.com" className="contact-item">
                <FiMail /> khaledaa155@gmail.com
              </a>
              <a href="tel:+972543914794" className="contact-item">
                <FiPhone /> 054 3914794
              </a>
              <span className="contact-item">
                <FiMapPin /> Israel
              </span>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a motivated <strong>Software Engineering Graduate</strong> with a passion for building reliable 
              technology and solving complex problems. I combine strong coding skills with a keen 
              eye for quality assurance, specializing in testing, debugging, and software validation.
            </p>
            <p>
              With a background in <strong>teaching mathematics and computer science</strong>, I bring strong 
              communication skills and a collaborative mindset to technical teams. I enjoy making 
              complex topics easier to understand and helping others learn.
            </p>
            <p>
              I'm fluent in <strong>English, Hebrew, and Arabic</strong>, which allows me to work effectively 
              in diverse teams and communicate with a wide range of people.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-text">
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
