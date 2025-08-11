const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Inquiry Schema
const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  weddingDate: Date,
  venue: String,
  package: String,
  message: String,
  status: { type: String, default: 'New' },
  createdAt: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendConfirmationEmail(inquiryData) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: inquiryData.email,
      subject: 'Thank you for your inquiry - Wedlanzaa Wedding Photography',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37;">Thank you for choosing Wedlanzaa Wedding Photography!</h2>
          <p>Dear ${inquiryData.name},</p>
          <p>We have received your inquiry for wedding photography services. Here are the details:</p>
          <ul>
            <li><strong>Wedding Date:</strong> ${new Date(inquiryData.weddingDate).toLocaleDateString()}</li>
            <li><strong>Venue:</strong> ${inquiryData.venue}</li>
            <li><strong>Package:</strong> ${inquiryData.package}</li>
          </ul>
          <p>Our team will contact you within 24 hours to discuss your requirements and provide a detailed quote.</p>
          <p>Best regards,<br>Sahil Savaliya<br>Wedlanzaa Wedding Photography</p>
        </div>
      `
    };
    
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Email sending failed:', error);
  }
}

// Routes
app.post('/', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    const savedInquiry = await inquiry.save();
    
    // Send confirmation email
    await sendConfirmationEmail(req.body);
    
    res.status(201).json(savedInquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch('/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(inquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app; 