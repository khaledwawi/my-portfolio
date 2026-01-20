import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/khaledwawi', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/khaled-abu-ahmad', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:khaledaa155@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-text">K</span>
              <span className="logo-dot">.</span>
            </a>
            <p>Building digital experiences with passion and precision.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Khaled Abu Ahmad. Made with <FiHeart className="heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
