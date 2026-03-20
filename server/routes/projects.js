const express = require('express');
const Project = require('../models/Projects');

const router = express.Router();

 
router.get('/', async (req, res) => {
  const { title } = req.query;

  try {
    const filter = title
      ? { title: { $regex: title, $options: 'i' } } // case-insensitive search
      : {};

    const projects = await Project.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      count:   projects.length,
      data:    projects,
    });

  } catch (err) {
    console.error('Error fetching projects:', err.message);
    res.status(500).json({ success: false, error: 'Could not fetch projects.' });
  }
});

 
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    res.json({ success: true, data: project });

  } catch (err) {
     
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid project ID format.' });
    }
    console.error('Error fetching project:', err.message);
    res.status(500).json({ success: false, error: 'Could not fetch project.' });
  }
});

module.exports = router;