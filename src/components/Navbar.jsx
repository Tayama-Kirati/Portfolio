import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['About Me', 'Education', 'Skills', 'Projects', 'Contact', 'Resume'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
   const el = document.getElementById(id.toLowerCase().replace(/ /g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F5EDD6]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-xl text-[#1a1a1a]">Portfolio</span>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm font-medium text-[#1a1a1a]/70 hover:text-[#B8860B] transition-colors duration-200"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#F5EDD6] border-t border-[#B8860B]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-left text-[#1a1a1a]/70 hover:text-[#B8860B] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}