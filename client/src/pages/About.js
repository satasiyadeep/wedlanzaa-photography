import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaHeart, FaAward, FaUsers, FaStar, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    'Wedding Photography',
    'Engagement Sessions',
    'Portrait Photography',
    'Event Coverage',
    'Photo Editing',
    'Drone Photography'
  ];

  const achievements = [
    {
      icon: <FaAward />,
      title: 'Best Wedding Photographer 2023',
      description: 'Awarded by Wedding Photography Association'
    },
    {
      icon: <FaUsers />,
      title: '500+ Happy Couples',
      description: 'Successfully captured countless love stories'
    },
    {
      icon: <FaStar />,
      title: '5-Star Rating',
      description: 'Consistently rated 5 stars by our clients'
    }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion for Love',
      description: 'We believe every love story is unique and deserves to be told beautifully.'
    },
    {
      icon: <FaCamera />,
      title: 'Artistic Excellence',
      description: 'Combining technical skill with creative vision to create stunning images.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Commitment',
      description: 'Dedicated to delivering the highest quality photographs and service.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Wedlanzaa</h1>
            <p className="text-gold">The Story Behind the Lens</p>
            <p>
              Discover the passion, dedication, and artistry that drives our wedding photography 
              business. Learn about Sahil Savaliya and our commitment to capturing your special moments.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        {/* Photographer Story */}
        <section className="section">
          <motion.div 
            className="photographer-story"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-2">
              <div className="photographer-image">
                <div className="image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Sahil Savaliya - Wedding Photographer"
                  />
                </div>
              </div>
              <div className="photographer-content">
                <h2>Meet Sahil Savaliya</h2>
                <p className="text-gold">Lead Photographer & Founder</p>
                <p>
                  With over 5 years of experience in wedding photography, Sahil Savaliya has dedicated 
                  his life to capturing the most precious moments in people's lives. His journey began 
                  with a simple passion for photography and a deep appreciation for love stories.
                </p>
                <p>
                  Sahil believes that every wedding is unique, and every couple has a story worth telling. 
                  His approach combines traditional techniques with modern creativity, ensuring that each 
                  photograph not only captures the moment but also the emotion behind it.
                </p>
                <p>
                  Based in Mumbai, Sahil has had the privilege of photographing weddings across India, 
                  from intimate ceremonies to grand celebrations. His work has been featured in various 
                  wedding magazines and has earned him recognition in the photography community.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="section bg-light">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Expertise</h2>
            <p className="text-gold">Professional Skills & Services</p>
          </motion.div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaCamera className="skill-icon" />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="section">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Values</h2>
            <p className="text-gold">What Drives Us Forward</p>
          </motion.div>
          
          <div className="grid grid-3">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section bg-dark">
          <div className="container">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Recognition & Achievements</h2>
              <p className="text-gold">Celebrating Our Success</p>
            </motion.div>
            
            <div className="grid grid-3">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="achievement-item text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section">
          <motion.div 
            className="philosophy-content text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Photography Philosophy</h2>
            <p className="text-gold">More Than Just Pictures</p>
            <div className="philosophy-text">
              <p>
                At Wedlanzaa, we believe that wedding photography is not just about taking pictures; 
                it's about preserving memories, emotions, and the essence of one of the most important 
                days in your life. We approach each wedding with the understanding that we're not just 
                photographers – we're storytellers, memory keepers, and witnesses to love.
              </p>
              <p>
                Our philosophy centers around three core principles: authenticity, artistry, and attention 
                to detail. We strive to capture genuine moments as they unfold naturally, while also 
                creating artistic compositions that showcase the beauty of your special day. Every click 
                of our camera is intentional, every angle carefully considered, and every moment treated 
                with the reverence it deserves.
              </p>
              <p>
                We understand that your wedding day is unique, and we're committed to creating a 
                photography experience that reflects your personality, style, and vision. From the 
                initial consultation to the final delivery of your photographs, we're here to ensure 
                that your wedding photography journey is as special as the day itself.
              </p>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="section bg-light">
          <motion.div 
            className="cta-content text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Work Together?</h2>
            <p>
              Let's discuss your vision and create beautiful memories together. 
              Contact us today to start planning your perfect wedding photography experience.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="/gallery" className="btn btn-outline">
                View Our Work
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About; 