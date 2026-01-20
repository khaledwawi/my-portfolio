import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaJava, 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaAngular,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiMongodb, 
  SiMysql,
  SiExpress,
  SiC
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Java', icon: <FaJava />, color: '#f89820', level: 90 },
    { name: 'Python', icon: <FaPython />, color: '#3776ab', level: 85 },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', level: 85 },
    { name: 'C', icon: <SiC />, color: '#a8b9cc', level: 75 },
    { name: 'React', icon: <FaReact />, color: '#61dafb', level: 85 },
    { name: 'Angular', icon: <FaAngular />, color: '#dd0031', level: 75 },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 80 },
    { name: 'Express', icon: <SiExpress />, color: '#ffffff', level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', level: 75 },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479a1', level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6', level: 85 },
    { name: 'Git', icon: <FaGitAlt />, color: '#f05032', level: 85 },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-bg">
        <div className="skills-gradient-1"></div>
        <div className="skills-gradient-2"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 20px 40px ${skill.color}30`,
                transition: { duration: 0.2 } 
              }}
            >
              <div 
                className="skill-icon" 
                style={{ 
                  color: skill.color,
                  boxShadow: `0 0 30px ${skill.color}40`
                }}
              >
                {skill.icon}
              </div>
              <h4 className="skill-name">{skill.name}</h4>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  style={{ background: skill.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
