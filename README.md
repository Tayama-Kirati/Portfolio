# Tayama Kirati — Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS. Showcases projects, skills, education, and contact info — with a Node.js/Express backend for dynamic project management.

## Tech Stack

**Frontend**
- React 19 + Vite
- Tailwind CSS
- React Router DOM
- Lucide React & React Icons
- React Hot Toast

**Backend**
- Node.js + Express 5
- MongoDB (primary database)
- PostgreSQL / MySQL (supported)
- JWT Authentication
- Multer (file uploads)

## Features

- Animated typewriter hero with rotating roles
- Dynamic projects section fetched from API with live search
- Skills grid with scroll-reveal animations
- Lightbox image previewer for project screenshots
- Resume download
- Contact form
- Dark/light theme context

 

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

### Installation

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:5000/api
```

### Run Locally

```bash
npm run dev
```

 

### Build for Production

```bash
npm run build
npm run preview
```

 