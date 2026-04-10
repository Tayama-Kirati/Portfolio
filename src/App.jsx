import { ThemeProvider } from './context/Themecontext';  
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeButton from './components/Resume';

export const API_URL = import.meta.env.VITE_API_URL || 'https://tayama-hefh.onrender.com/api';

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', transition: 'background-color 0.3s, color 0.3s' }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <ResumeButton  />
    
        <footer
          className="py-6 text-center text-xs"
          style={{ backgroundColor: '#111', color: 'rgba(255,255,255,0.4)' }}
        >
          © {new Date().getFullYear()} Tayama Kirati. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}