const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// Get all gallery images
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    let filter = {};
    
    if (category) {
      filter.category = category;
    }
    
    if (featured === 'true') {
      filter.featured = true;
    }
    
    const images = await Gallery.find(filter).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get featured images
router.get('/featured', async (req, res) => {
  try {
    const featuredImages = await Gallery.find({ featured: true }).limit(6);
    res.json(featuredImages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get images by category
router.get('/category/:category', async (req, res) => {
  try {
    const images = await Gallery.find({ category: req.params.category });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new image to gallery
router.post('/', async (req, res) => {
  try {
    const image = new Gallery(req.body);
    const savedImage = await image.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update image
router.patch('/:id', async (req, res) => {
  try {
    const image = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete image
router.delete('/:id', async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 