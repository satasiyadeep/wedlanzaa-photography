import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaHeart, FaCamera } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = [
    'All',
    'Engagement',
    'Wedding Ceremony',
    'Reception',
    'Pre-Wedding',
    'Haldi',
    'Mehendi',
    'Sangeet',
    'Portrait'
  ];

  // Sample gallery images (in a real app, these would come from the API)
  const sampleImages = useMemo(() => [
    {
      _id: '1',
      title: 'Romantic Engagement',
      description: 'Beautiful engagement shoot at sunset',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Engagement',
      featured: true
    },
    {
      _id: '2',
      title: 'Wedding Ceremony',
      description: 'Traditional wedding ceremony moments',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Wedding Ceremony',
      featured: true
    },
    {
      _id: '3',
      title: 'Reception Celebration',
      description: 'Joyful reception celebration',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Reception',
      featured: true
    },
    {
      _id: '4',
      title: 'Pre-Wedding Romance',
      description: 'Intimate pre-wedding moments',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Pre-Wedding',
      featured: false
    },
    {
      _id: '5',
      title: 'Haldi Ceremony',
      description: 'Traditional haldi ceremony',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Haldi',
      featured: false
    },
    {
      _id: '6',
      title: 'Mehendi Art',
      description: 'Beautiful mehendi designs',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Mehendi',
      featured: false
    },
    {
      _id: '7',
      title: 'Sangeet Night',
      description: 'Energetic sangeet celebration',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Sangeet',
      featured: false
    },
    {
      _id: '8',
      title: 'Portrait Beauty',
      description: 'Elegant portrait photography',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Portrait',
      featured: false
    },
    {
      _id: '9',
      title: 'Wedding Rings',
      description: 'Symbolic wedding rings',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Wedding Ceremony',
      featured: false
    }
  ], []);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setImages(sampleImages);
      setFilteredImages(sampleImages);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory, images]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="gallery-loading">
        <div className="loading-spinner"></div>
        <p>Loading beautiful memories...</p>
      </div>
    );
  }

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <motion.div 
            className="gallery-hero-content text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Gallery</h1>
            <p className="text-gold">Capturing Love Stories Through the Lens</p>
            <p>
              Explore our collection of beautiful wedding moments, from intimate engagements 
              to grand celebrations. Each image tells a unique story of love and joy.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="gallery-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image._id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleImageClick(image)}
              >
                <div className="image-container">
                  <img src={image.imageUrl} alt={image.title} />
                  <div className="overlay">
                    <div className="overlay-content">
                      <FaSearch className="search-icon" />
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                      <span className="category-tag">{image.category}</span>
                    </div>
                  </div>
                  {image.featured && (
                    <div className="featured-badge">
                      <FaHeart />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div 
            className="empty-state text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCamera className="empty-icon" />
            <h3>No images found</h3>
            <p>Try selecting a different category or check back later for new additions.</p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-image">
                <img src={selectedImage.imageUrl} alt={selectedImage.title} />
              </div>
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <span className="category-tag">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 