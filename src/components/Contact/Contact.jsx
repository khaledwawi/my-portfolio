import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiCheck, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration
      // To use EmailJS:
      // 1. Create a free account at https://www.emailjs.com/
      // 2. Create an email service (Gmail, Outlook, etc.)
      // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
      // 4. Replace the IDs below with your own:
      const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_xxxxxxx'
      const templateId = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xxxxxxx'
      const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'xxxxxxxxxxxxxxx'

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'khaledaa155@gmail.com', href: 'mailto:khaledaa155@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '054 3914794', href: 'tel:+972543914794' },
    { icon: <FiMapPin />, label: 'Location', value: 'Israel', href: '#' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/khaledwawi' },
    { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/khaled-abo-ahmad-33b830295/' },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Talk</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                {status.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
