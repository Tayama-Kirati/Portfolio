require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const mongoose = require('mongoose');

 
const contactRoutes   = require('./routes/contact');
const projectRoutes   = require('./routes/projects');
const educationRoutes = require('./routes/education');

const app  = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log('MongoDB failed:', err.message));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

app.get('/downloads', (req, res) => {
  const file = path.join(__dirname, 'uploads', 'resume.pdf');  
  if (fs.existsSync(file)) {
    res.download(file);
  } else {
    res.status(404).json({ message: 'Resume not found' });
  }
});

 


app.use('/api/contact',   contactRoutes);
app.use('/api/projects',  projectRoutes);
app.use('/api/education', educationRoutes);

 
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

 
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found.` });
});

 
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal server error.' });
});

 
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});


module.exports = app;