const express   = require('express');
const Education = require('../models/Education');

const router = express.Router();

 
router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ sortOrder: 1 });

    res.json({
      success: true,
      count:   education.length,
      data:    education,
    });

  } catch (err) {
    console.error('Error fetching education:', err.message);
    res.status(500).json({ success: false, error: 'Could not fetch education records.' });
  }
});

module.exports = router;