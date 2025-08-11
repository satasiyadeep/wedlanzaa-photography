const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');
const nodemailer = require('nodemailer');

// Get all inquiries (admin only)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new inquiry
router.post('/', async (req, res) => {
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

// Update inquiry status
router.patch('/:id', async (req, res) => {
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

// Delete inquiry
router.delete('/:id', async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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

module.exports = router; 