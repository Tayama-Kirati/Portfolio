require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose    = require('mongoose');
const Project     = require('../models/Projects');
const Education   = require('../models/Education');
const Experience  = require('../models/Experience');
const Certificate = require('../models/Certificate');

const projects = [
  {
    title:       'MetMomo : Food Ordering System',
    description: 'I designed a Food Ordering System with a clean, intuitive interface focused on seamless user experience. The design covers browsing restaurants, ordering food, and real-time tracking — all crafted in Figma.',
    link:        'https://github.com/Tayama-Kirati/MetMoMo',
    category:    'Full Stack',
  },
  {
    title:       'Portfolio Website',
    description: 'Designed and developed a personal portfolio website to showcase projects, skills, and education. Built with React, Vite, and Tailwind CSS.',
    link:        'https://tayama.vercel.app',
    category:    'Full Stack',
  },
  {
    title:       'PeaNut : E-Commerce Platform',
    description: 'I designed an E-Commerce Platform with a clean, intuitive interface focused on seamless user experience. The design covers browsing products, adding to cart, and checkout — all crafted in Figma.',
    link:        'https://github.com/Tayama-Kirati/E-Commerce',
    category:    'Frontend',
  },
  {
    title:       'MySpace: Ghibli-themed personal productivity and lifestyle website',
    description: 'My Space is a Ghibli-themed personal productivity and lifestyle website built with React, featuring five integrated modules — daily journal, focus timer (Pomodoro), book shelf, memory gallery, and movie log. Designed as a private all-in-one digital space to replace scattered productivity tools with a cosy, nature-inspired interface.',
    link:        'https://github.com/Tayama-Kirati/My-Space',
    category:    'Frontend',
  },
  {
    title:       'Rock Paper Scissors Game',
    description: 'I designed a Rock Paper Scissors Game with a clean, intuitive interface focused on seamless user experience. The design covers gameplay, scoring, and animations — all crafted in Figma.',
    link:        'https://github.com/Tayama-Kirati/RockPaperScissors',
    category:    'Design',
  },
  {
    title:       'Khim : Home Management System',
    description: 'I designed a Home Management System with a clean, intuitive interface focused on seamless user experience. The design covers task management, scheduling, and notifications — all crafted in Figma.',
    link:        'https://github.com/Tayama-Kirati/Home-Management-System',
    category:    'Frontend',
  },
  {
    title:       'SnapSigns : Text-to-Sign-Language Translator',
    description: 'SnapSigns converts written and spoken text into animated sign language, pairing an NLP gloss-generation pipeline (spaCy) with a React frontend that plays back the matching sign animations in real time. Built collaboratively as an accessibility-focused communication tool.',
    link:        'https://github.com/Tayama-Kirati/Snapsigns',
    category:    'Full Stack',
  },
  {
    title:       'Genealogy Visualizer',
    description: 'A full-stack family tree management system built with React, FastAPI, and PostgreSQL. It lets users manage families, individuals, events, and relationships, and explore them as interactive, visual genealogy trees.',
    link:        'https://github.com/kiyotone/DBMS-Genealogy',
    category:    'Full Stack',
  },
  {
    title:       'Geometric SLAM with Depth-Supervised NeRF',
    description: 'A research-oriented Monocular SLAM framework, built with Anil Banjade, that combines classical geometric tracking (epipolar geometry and PnP) with Depth-Supervised Neural Radiance Fields for robust camera tracking and high-fidelity 3D volumetric reconstruction from video.',
    link:        'https://github.com/Anil-Banjade/SLAM',
    category:    'Full Stack',
  },
  {
    title:       'Digital Nepal : School Management System',
    description: 'A UI/UX design for a comprehensive school administration platform — covering academics, attendance, admissions, exams, grading, and student records — with a clean, sidebar-driven dashboard layout crafted in Figma.',
    link:        'https://www.figma.com/design/zTjCM3DM37GTV38x3av4Fe/DIGITAL-NEPAL',
    category:    'Design',
  },
  {
    title:       'Online Food Delivery : App Landing Page',
    description: 'A UI/UX landing page design for a food delivery platform, featuring a hero banner, a trending menu items showcase, an about section, and a promotional offer strip — all crafted in Figma.',
    link:        'https://www.figma.com/design/V0nZFgSE2Z6nUClu163UDn/ONLINE-FOOD-DELIVERY',
    category:    'Design',
  },
];

const education = [
  { school: 'St. Xaviers College, Maitighar',    degree: '+2 Science',                       period: 'June 2019 – December 2021', sortOrder: 1 },
  { school: 'IOE Purwanchal Campus, Dharan',     degree: 'Bachelors In Computer Engineering', period: 'April 2022 – April 2024',   sortOrder: 2, note: 'I was a regular student at Purwanchal Campus before shifting back to Thapathali Campus.' },
  { school: 'IOE Thapathali Campus, Thapathali', degree: 'Bachelors In Computer Engineering', period: 'April 2024 – Present',      sortOrder: 3 },
];

const experience = [
  { company: 'E-Digital Nepal', role: 'UI/UX Designer', period: 'June 2025 – Present', sortOrder: 1 },
];

// TODO: fill in real entries, e.g.
// { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'March 2025', link: 'https://...', sortOrder: 1 },
const certificates = [];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Project.deleteMany({});
    await Education.deleteMany({});
    await Experience.deleteMany({});
    await Certificate.deleteMany({});
    console.log('Cleared existing data');

    await Project.insertMany(projects);
    await Education.insertMany(education);
    if (experience.length)   await Experience.insertMany(experience);
    if (certificates.length) await Certificate.insertMany(certificates);
    console.log('Seed data inserted successfully');

    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err.message);
    process.exit(1);
  }
};

seed();
