import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/Themecontext';

const navLinks = ['About Me', 'Education', 'Skills', 'Projects', 'Contact', 'Resume'];

const THEME_META = {
  current: { icon: Palette, label: 'Signature theme', next: 'Switch to dark theme' },
  dark:    { icon: Moon,    label: 'Dark theme',      next: 'Switch to light theme' },
  light:   { icon: Sun,     label: 'Light theme',     next: 'Switch to signature theme' },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, cycleTheme } = useTheme();
  const { icon: ThemeIcon, label, next } = THEME_META[theme];

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--bg)] ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="font-bold text-[20px] text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors duration-200"
          style={{ fontFamily: 'Fredoka' }}
        >
          TAYAMA
        </button>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-[16px] font-medium text-[var(--text)]/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={cycleTheme}
            title={`${label} — ${next}`}
            aria-label={`${label}. ${next}`}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[var(--text)]/70 hover:text-[var(--gold)] border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-colors duration-200"
          >
            <ThemeIcon size={16} />
          </button>

          <button className="md:hidden text-[var(--text)]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--gold)]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-[16px] font-medium text-left text-[var(--text)]/70 hover:text-[var(--gold)] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
