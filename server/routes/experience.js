const express    = require('express');
const Experience = require('../models/Experience');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const experience = await Experience.find().sort({ sortOrder: 1 });

    res.json({
      success: true,
      count:   experience.length,
      data:    experience,
    });

  } catch (err) {
    console.error('Error fetching experience:', err.message);
    res.status(500).json({ success: false, error: 'Could not fetch experience records.' });
  }
});

module.exports = router;
