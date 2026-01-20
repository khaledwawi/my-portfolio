import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } from 'react-icons/fi';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  // Typing animation
  const roles = [
    'Full Stack Developer',
    'Math Instructor',
    'Software Engineer',
    'Problem Solver'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          // Pause at end, then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  // Custom smooth scroll function with easing
  const smoothScrollTo = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      smoothScrollTo(offsetPosition, 800);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatingIcons = [
    { icon: <FaCode />, delay: 0, x: '10%', y: '20%' },
    { icon: <FaLaptopCode />, delay: 0.5, x: '85%', y: '15%' },
    { icon: <FaServer />, delay: 1, x: '75%', y: '75%' },
  ];

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        <div className="hero-grid"></div>
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.15, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            delay: item.delay,
            duration: 0.5,
            y: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
          }}
        >
          {item.icon}
        </motion.div>
      ))}
      
      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-dot"></span>
          Available for opportunities
        </motion.div>

        <motion.span className="hero-greeting" variants={itemVariants}>
          Hello, I'm
        </motion.span>
        
        <motion.h1 className="hero-name" variants={itemVariants}>
          <span className="name-line">Khaled</span>
          <span className="name-line gradient-text">Abu Ahmad</span>
        </motion.h1>
        
        <motion.div className="hero-title" variants={itemVariants}>
          <span className="title-wrapper">
            <span className="title-static">I'm a </span>
            <span className="title-animated">{currentText}</span>
            <span className="typing-cursor">|</span>
          </span>
        </motion.div>
        
        <motion.p className="hero-description" variants={itemVariants}>
          Motivated Software Engineering Graduate with a passion for building reliable technology 
          and solving complex problems. I combine strong coding skills with a keen eye for 
          quality assurance, specializing in testing, debugging, and software validation.
        </motion.p>
        
        <motion.div className="hero-buttons" variants={itemVariants}>
          <a 
            href="#about" 
            className="btn btn-primary btn-glow"
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            <span>View My Work</span>
            <div className="btn-shine"></div>
          </a>
          <a 
            href="/Khaled_Abu_Ahmad_CV.pdf" 
            download="Khaled_Abu_Ahmad_CV.pdf"
            className="btn btn-secondary"
          >
            <FiDownload /> Download CV
          </a>
        </motion.div>
        
        <motion.div className="hero-socials" variants={itemVariants}>
          <span className="social-label">Find me on</span>
          <div className="social-links">
            <a href="https://github.com/khaledwawi" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiGithub size={22} />
              <span className="social-tooltip">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/khaled-abo-ahmad-33b830295/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiLinkedin size={22} />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a href="mailto:khaledaa155@gmail.com" className="social-link">
              <FiMail size={22} />
              <span className="social-tooltip">Email</span>
            </a>
          </div>
        </motion.div>

        <motion.a 
          href="#about"
          className="scroll-indicator"
          onClick={(e) => handleSmoothScroll(e, 'about')}
          variants={itemVariants}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow">
            <FiChevronDown />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
