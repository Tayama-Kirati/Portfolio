require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const mongoose = require('mongoose');

// Route files
const contactRoutes   = require('./routes/contact');
const projectRoutes   = require('./routes/projects');
const educationRoutes = require('./routes/education');

// Initialize Express
const app  = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log('MongoDB failed:', err.message));

// MIDDLEWARE
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/contact',   contactRoutes);
app.use('/api/projects',  projectRoutes);
app.use('/api/education', educationRoutes);

// Root
app.get('/', (req, res) => {
  res.json({
    status: 'Server is running',
    endpoints: {
      contact:   'POST /api/contact',
      projects:  'GET  /api/projects',
      education: 'GET  /api/education',
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found.` });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal server error.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});

module.exports = app;