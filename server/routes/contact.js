 

const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

 
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message received! Tayama will get back to you soon.",
      data: {
        id:          contact._id,
        name:        contact.name,
        email:       contact.email,
        received_at: contact.createdAt,
      },
    });

  } catch (err) {
    
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ success: false, errors });
    }
    console.error('Error saving contact:', err.message);
    res.status(500).json({ success: false, error: 'Could not save your message.' });
  }
});

 
router.get('/', (req, res) => {
  res.json({ info: 'Send a POST request with { name, email, message } to submit a contact message.' });
});

module.exports = router;