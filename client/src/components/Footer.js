import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'Wedding Photography',
    'Engagement Sessions',
    'Pre-Wedding Shoots',
    'Family Portraits',
    'Event Coverage',
    'Drone Photography'
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      text: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <FaEnvelope />,
      text: 'info@wedlanzaa.com',
      link: 'mailto:info@wedlanzaa.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Mumbai, Maharashtra, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-brand">
                <FaCamera className="brand-icon" />
                <span className="brand-text">Wedlanzaa</span>
              </div>
              <p>
                Capturing love stories with passion and artistry. We transform your special moments 
                into timeless memories that you'll cherish forever.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3>Our Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-item"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <span className="contact-icon">{info.icon}</span>
                    <span>{info.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Wedlanzaa Wedding Photography. All rights reserved.</p>
            <p>Designed with ❤️ by Sahil Savaliya</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 