const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Gallery Schema
const gallerySchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  category: String,
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Gallery = mongoose.model('Gallery', gallerySchema);

// Routes
app.get('/', async (req, res) => {
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

app.get('/featured', async (req, res) => {
  try {
    const featuredImages = await Gallery.find({ featured: true }).limit(6);
    res.json(featuredImages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/category/:category', async (req, res) => {
  try {
    const images = await Gallery.find({ category: req.params.category });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/', async (req, res) => {
  try {
    const image = new Gallery(req.body);
    const savedImage = await image.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.patch('/:id', async (req, res) => {
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

app.delete('/:id', async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app; 