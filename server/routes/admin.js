
const express        = require('express');
const Contact        = require('../models/Contact');
const Project        = require('../models/Projects');
const Education      = require('../models/Education');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Protect all admin routes
router.use(authMiddleware);

// GET /api/admin/messages  – all contact submissions
router.get('/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Could not fetch messages.' });
  }
});

// GET /api/admin/stats  – quick counts
router.get('/stats', async (req, res) => {
  try {
    const [contacts, projects, education] = await Promise.all([
      Contact.countDocuments(),
      Project.countDocuments(),
      Education.countDocuments(),
    ]);

    res.json({
      success: true,
      stats: {
        total_messages:  contacts,
        total_projects:  projects,
        total_education: education,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Could not fetch stats.' });
  }
});

module.exports = router;