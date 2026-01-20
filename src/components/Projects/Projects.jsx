import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { 
  FaCalendarCheck, 
  FaPlane, 
  FaBrain, 
  FaHeartbeat, 
  FaNetworkWired, 
  FaChartLine, 
  FaComments 
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Daily Habits Tracker',
      description: 'A full-stack Progressive Web App designed to help users build better routines by tracking daily habits and events. Features interactive yearly and monthly calendar views for comprehensive habit monitoring.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      category: 'Full Stack',
      github: 'https://github.com/khaledwawi',
      icon: <FaCalendarCheck />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      featured: true,
    },
    {
      title: 'Travel Diary Platform',
      description: 'A social networking platform where travelers can document and share their adventures. Includes interactive map integration and photo galleries to create immersive travel stories.',
      tech: ['Angular', 'Express', 'SQL', 'Leaflet.js'],
      category: 'Full Stack',
      github: 'https://github.com/khaledwawi',
      icon: <FaPlane />,
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      featured: true,
    },
    {
      title: 'Income Classification Neural Network',
      description: 'A machine learning model built with PyTorch that predicts income levels from census data. Achieved 85% classification accuracy using advanced neural network architectures.',
      tech: ['Python', 'PyTorch', 'Pandas', 'Scikit-learn'],
      category: 'Machine Learning',
      github: 'https://github.com/khaledwawi',
      icon: <FaBrain />,
      gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
      featured: true,
    },
    {
      title: 'Healthcare IoT Simulation',
      description: 'An IoT simulation system for monitoring patient vital signs in real-time. Features anomaly detection algorithms, visual dashboards, and automated health alerts.',
      tech: ['Python', 'Matplotlib', 'IoT'],
      category: 'Python',
      github: 'https://github.com/khaledwawi',
      icon: <FaHeartbeat />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      featured: false,
    },
    {
      title: 'Network File Transfer System',
      description: 'A client-server application for transferring files using both TCP and UDP protocols. Includes performance benchmarking to compare protocol efficiency.',
      tech: ['Java', 'TCP', 'UDP', 'Networking'],
      category: 'Java',
      github: 'https://github.com/khaledwawi',
      icon: <FaNetworkWired />,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      featured: false,
    },
    {
      title: 'Machine Learning Lab Collection',
      description: 'A comprehensive repository of ML implementations covering supervised and unsupervised learning algorithms, from basic regression to clustering techniques.',
      tech: ['Python', 'Scikit-learn', 'NumPy', 'Jupyter'],
      category: 'Machine Learning',
      github: 'https://github.com/khaledwawi',
      icon: <FaChartLine />,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      featured: false,
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'An advanced Natural Language Processing project that performs text classification and sentiment analysis using state-of-the-art transformer models.',
      tech: ['Python', 'Transformers', 'PyTorch', 'NLP'],
      category: 'Machine Learning',
      github: 'https://github.com/khaledwawi',
      icon: <FaComments />,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      featured: false,
    },
  ];

  const filters = ['All', 'Full Stack', 'Machine Learning', 'Python', 'Java'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some things I've built</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {featuredProjects.length > 0 && (
              <div className="featured-projects">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="project-image" style={{ background: project.gradient }}>
                      <div className="project-image-content">
                        <div className="project-icon">{project.icon}</div>
                        <div className="project-image-overlay"></div>
                      </div>
                    </div>
                    <div className="project-info">
                      <span className="project-label">Featured Project</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <ul className="project-tech">
                        {project.tech.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FiGithub size={22} />
                        </a>
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink size={22} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {otherProjects.length > 0 && (
              <>
                <motion.h3
                  className="other-projects-title"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Other Noteworthy Projects
                </motion.h3>

                <div className="other-projects-grid">
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      className="other-project-card"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                      <div className="card-icon-wrapper" style={{ background: project.gradient }}>
                        {project.icon}
                      </div>
                      <h4 className="card-title">{project.title}</h4>
                      <p className="card-description">{project.description}</p>
                      <ul className="card-tech">
                        {project.tech.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                      <div className="card-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FiGithub size={20} />
                        </a>
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {filteredProjects.length === 0 && (
              <div className="no-projects">
                <p>No projects found for this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
