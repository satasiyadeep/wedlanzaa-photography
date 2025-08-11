import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCamera, FaHeart } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    package: 'Basic',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      await axios.post('/api/inquiries', formData);
      setMessage({
        type: 'success',
        text: 'Thank you! Your inquiry has been submitted successfully. We will contact you within 24 hours.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        venue: '',
        package: 'Basic',
        message: ''
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'info@wedlanzaa.com',
      link: 'mailto:info@wedlanzaa.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Mumbai, Maharashtra, India',
      link: '#'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: 'Mon - Sun: 9:00 AM - 8:00 PM',
      link: '#'
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: '₹25,000',
      features: ['Full Day Coverage', '100+ Edited Photos', 'Online Gallery', 'USB Drive']
    },
    {
      name: 'Premium',
      price: '₹45,000',
      features: ['2 Days Coverage', '300+ Edited Photos', 'Online Gallery', 'USB Drive', 'Photo Book', 'Engagement Shoot']
    },
    {
      name: 'Luxury',
      price: '₹75,000',
      features: ['3 Days Coverage', '500+ Edited Photos', 'Online Gallery', 'USB Drive', 'Premium Photo Book', 'Engagement Shoot', 'Pre-Wedding Shoot', 'Drone Coverage']
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-hero-content text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get In Touch</h1>
            <p className="text-gold">Let's Discuss Your Dream Wedding Photography</p>
            <p>
              Ready to capture your special day? Fill out the form below and we'll get back to you 
              within 24 hours to discuss your vision and create a custom photography package.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h2>Send Us an Inquiry</h2>
              <p className="text-gold">Tell us about your special day</p>
              
              {message.text && (
                <div className={`message ${message.type}`}>
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Wedding Date *</label>
                    <input
                      type="date"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Wedding Venue *</label>
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g., Taj Palace, Mumbai"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Package Preference *</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="Basic">Basic Package</option>
                      <option value="Premium">Premium Package</option>
                      <option value="Luxury">Luxury Package</option>
                      <option value="Custom">Custom Package</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your vision, special requirements, or any questions you have..."
                    rows="4"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="text-gold">Get in touch with us</p>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link} 
                    className="contact-info-item"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="contact-info-icon">{info.icon}</div>
                    <div className="contact-info-content">
                      <h4>{info.title}</h4>
                      <p>{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-person">
                <div className="contact-person-avatar">
                  <FaCamera />
                </div>
                <div className="contact-person-info">
                  <h3>Sahil Savaliya</h3>
                  <p className="text-gold">Lead Photographer</p>
                  <p>Your trusted partner in capturing life's most precious moments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Packages Section */}
        <section className="section">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Photography Packages</h2>
            <p className="text-gold">Choose the perfect package for your special day</p>
          </motion.div>

          <div className="grid grid-3">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                className="package-card card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaHeart className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline">Get Quote</button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 