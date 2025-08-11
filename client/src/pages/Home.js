import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCamera, FaHeart, FaStar, FaUsers, FaAward } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaCamera />,
      title: 'Wedding Photography',
      description: 'Capture every precious moment of your special day with our professional photography services.'
    },
    {
      icon: <FaHeart />,
      title: 'Engagement Sessions',
      description: 'Beautiful pre-wedding shoots that tell your love story in the most romantic way.'
    },
    {
      icon: <FaUsers />,
      title: 'Family Portraits',
      description: 'Timeless family portraits that you\'ll cherish for generations to come.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Couples' },
    { number: '50+', label: 'Wedding Venues' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction' }
  ];

  const testimonials = [
    {
      name: 'Priya & Raj',
      text: 'Sahil captured our wedding perfectly! Every photo tells a story and brings back beautiful memories.',
      rating: 5
    },
    {
      name: 'Anjali & Amit',
      text: 'The engagement shoot was magical! Sahil has an eye for capturing the most beautiful moments.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">
              Capturing Love Stories
              <span className="text-gold"> Forever</span>
            </h1>
            <p className="hero-subtitle">
              Professional wedding photography that transforms your special moments into timeless memories
            </p>
            <div className="hero-buttons">
              <Link to="/gallery" className="btn btn-primary">
                View Gallery
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-2">
              <div className="about-text">
                <h2>Welcome to Wedlanzaa</h2>
                <p className="text-gold">Where Every Moment Becomes Art</p>
                <p>
                  At Wedlanzaa Wedding Photography, we believe that love is the most beautiful story ever told. 
                  Our mission is to capture the raw emotions, genuine smiles, and intimate moments that make your 
                  wedding day truly special.
                </p>
                <p>
                  Led by the talented photographer Sahil Savaliya, our team combines artistic vision with 
                  technical expertise to create stunning images that you'll treasure for a lifetime.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
              <div className="about-image">
                <div className="image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Wedding Photography"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p className="text-gold">Comprehensive Photography Solutions</p>
          </motion.div>
          
          <div className="grid grid-3">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>What Our Clients Say</h2>
            <p className="text-gold">Real Stories from Happy Couples</p>
          </motion.div>
          
          <div className="grid grid-2">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">- {testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="cta-content text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Capture Your Love Story?</h2>
            <p>
              Let's discuss your vision and create beautiful memories together. 
              Contact us today to start planning your perfect wedding photography experience.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/gallery" className="btn btn-outline">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 