const express     = require('express');
const Certificate = require('../models/Certificate');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ sortOrder: 1 });

    res.json({
      success: true,
      count:   certificates.length,
      data:    certificates,
    });

  } catch (err) {
    console.error('Error fetching certificates:', err.message);
    res.status(500).json({ success: false, error: 'Could not fetch certificate records.' });
  }
});

module.exports = router;
