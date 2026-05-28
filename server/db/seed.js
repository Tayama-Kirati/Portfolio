require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose  = require('mongoose');
const Project   = require('../models/Projects');
const Education = require('../models/Education');

const projects = [
  {
    title:       'MetMomo : Food Ordering System',
    description: 'I designed a Food Ordering System with a clean, intuitive interface focused on seamless user experience. The design covers browsing restaurants, ordering food, and real-time tracking — all crafted in Figma.',
    link:        'https://github.com/Tayama-Kirati/MetMoMo',
  },
  {
    title:       'Portfolio Website',
    description: 'Designed and developed a personal portfolio website to showcase projects, skills, and education. Built with React, Vite, and Tailwind CSS.',
    link:        'https://tayama.vercel.app',
  },
  {
    title:       'PeaNut : E-Commerce Platform',
    description: 'I designed an E-Commerce Platform with a clean, intuitive interface focused on seamless user experience. The design covers browsing products, adding to cart, and checkout — all crafted in Figma.',
    link:        'https://github.com/Tayama-Kirati/E-Commerce',
  },
  {
    title:       'MySpace: Ghibli-themed personal productivity and lifestyle website',
    description: 'My Space is a Ghibli-themed personal productivity and lifestyle website built with React, featuring five integrated modules — daily journal, focus timer (Pomodoro), book shelf, memory gallery, and movie log. Designed as a private all-in-one digital space to replace scattered productivity tools with a cosy, nature-inspired interface.',
    link:        'https://github.com/Tayama-Kirati/My-Space',
  },
  {
    title:       'Rock Paper Scissors Game',
    description: 'I designed a Rock Paper Scissors Game with a clean, intuitive interface focused on seamless user experience. The design covers gameplay, scoring, and animations — all crafted in Figma.',
    link:        'https://github.com/Tayama-Kirati/RockPaperScissors',
  },
  {
    title:       'Khim : Home Management System',
    description: 'I designed a Home Management System with a clean, intuitive interface focused on seamless user experience. The design covers task management, scheduling, and notifications — all crafted in Figma.',
    link:        'https://github.com/Tayama-Kirati/Home-Management-System',
  },
];

const education = [
  { school: 'St. Xaviers College, Maitighar',    degree: '+2 Science',                       period: 'June 2019 – December 2021', sortOrder: 1 },
  { school: 'IOE Purwanchal Campus, Dharan',     degree: 'Bachelors In Computer Engineering', period: 'April 2022 – April 2024',   sortOrder: 2 },
  { school: 'IOE Thapathali Campus, Thapathali', degree: 'Bachelors In Computer Engineering', period: 'April 2024 – Present',      sortOrder: 3 },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Project.deleteMany({});
    await Education.deleteMany({});
    console.log('Cleared existing data');

    await Project.insertMany(projects);
    await Education.insertMany(education);
    console.log('Seed data inserted successfully');

    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err.message);
    process.exit(1);
  }
};

seed();
