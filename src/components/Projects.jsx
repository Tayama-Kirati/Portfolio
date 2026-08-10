import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { List, LayoutGrid } from 'lucide-react';
import { API_URL } from '../App';
import khimImg            from '../assets/khim.png';
import metmomoImg         from '../assets/metmomo.png';
import peanutImg          from '../assets/peanut.png';
import portfolioImg       from '../assets/portfolio.png';
import myspaceImg         from '../assets/myspace.png';


import rockscissorpaperImg from '../assets/rockscissorpaper.png';
import rpsBattleImg        from '../assets/rockpaperscissors-battle.png';
import rpsHowToPlayImg     from '../assets/rockpaperscissors-howtoplay.png';
import digitalNepalImg     from '../assets/digitalnepal.png';
import onlineFoodImg       from '../assets/onlinefooddelivery.png';

// Map project titles to arrays of images. Add more to any array for a carousel.
const LOCAL_IMAGES = {
  'Khim : Home Management System': [khimImg],
  'MetMomo : Food Ordering System': [metmomoImg],
  'PeaNut : E-Commerce Platform':   [peanutImg],
  'Portfolio Website':              [portfolioImg],
  'MySpace: Ghibli-themed personal productivity and lifestyle website': [myspaceImg],
  'Rock Paper Scissors Game':       [rockscissorpaperImg, rpsBattleImg, rpsHowToPlayImg],
  'Digital Nepal : School Management System': [digitalNepalImg],
  'Online Food Delivery : App Landing Page':  [onlineFoodImg],
};

function Lightbox({ images, startIndex, alt, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const multi = images.length > 1;

  const prev = useCallback((e) => {
    e.stopPropagation();
    setIdx(i => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback((e) => {
    e.stopPropagation();
    setIdx(i => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  setIdx(i => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, images.length]);

  return createPortal(
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: '1rem', right: '1.25rem', color: 'white', fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}
        aria-label="Close"
      >
        &times;
      </button>

      {multi && (
        <button
          onClick={prev}
          style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'white', fontSize: '2.2rem', background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: '2.75rem', height: '2.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      <img
        src={images[idx]}
        alt={`${alt} ${idx + 1}`}
        style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: '1rem', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', objectFit: 'contain' }}
        onClick={(e) => e.stopPropagation()}
      />

      {multi && (
        <button
          onClick={next}
          style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'white', fontSize: '2.2rem', background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: '2.75rem', height: '2.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Next"
        >
          ›
        </button>
      )}

      {multi && (
        <div style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.4rem' }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              style={{ width: i === idx ? '1.5rem' : '0.5rem', height: '0.5rem', borderRadius: '999px', background: i === idx ? '#B8860B' : 'rgba(255,255,255,0.45)', border: 'none', cursor: 'pointer', transition: 'all 0.25s', padding: 0 }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );
}

function ImageCarousel({ images, alt, variant = 'row' }) {
  const [idx, setIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const multi = images.length > 1;

  const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); };

  return (
    <>
      {lightboxOpen && (
        <Lightbox images={images} startIndex={idx} alt={alt} onClose={() => setLightboxOpen(false)} />
      )}

      <div
        className={
          variant === 'grid'
            ? "w-full h-48 rounded-xl overflow-hidden bg-[var(--card)] shadow relative group"
            : "w-full md:w-64 lg:w-80 h-44 rounded-xl overflow-hidden bg-[var(--card)] flex-shrink-0 shadow relative group"
        }
        style={{ cursor: 'zoom-in' }}
        onClick={() => setLightboxOpen(true)}
      >
        <img
          src={images[idx]}
          alt={`${alt} ${idx + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl drop-shadow">
            🔍
          </span>
        </div>

        {multi && (
          <>
            <button
              onClick={prev}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg leading-none transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg leading-none transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  style={{ width: i === idx ? '1rem' : '0.375rem', height: '0.375rem', borderRadius: '999px', background: i === idx ? '#B8860B' : 'rgba(255,255,255,0.7)', border: 'none', cursor: 'pointer', transition: 'all 0.25s', padding: 0 }}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

function ExpandableText({ text, className = '', clampClass = 'line-clamp-3', wrapperClassName = '' }) {
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (el) setOverflowing(el.scrollHeight - el.clientHeight > 1);
  }, [text]);

  return (
    <div className={wrapperClassName}>
      <p ref={ref} className={`${className} ${expanded ? '' : clampClass}`}>
        {text}
      </p>
      {overflowing && (
        <button
          type="button"
          onClick={() => setExpanded(v => !v)}
          className="text-[var(--gold)] text-xs font-semibold hover:text-[var(--gold-dark)] transition-colors mt-1"
        >
          {expanded ? 'See less' : 'See more'}
        </button>
      )}
    </div>
  );
}

function ProjectCard({ title, description, link, image_url, image_urls }) {
  const localImgs = LOCAL_IMAGES[title] ?? [];
  const apiImgs = image_urls ?? (image_url ? [image_url] : []);
  const images = apiImgs.length ? apiImgs : localImgs;

  return (
    <div className="bg-[var(--card-alt)] rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6 border border-[var(--gold)]/10">
      <div className="flex-1">
        <h3 className="font-display text-2xl font-bold text-[var(--text)] mb-3">{title}</h3>
        <ExpandableText
          text={description}
          className="text-[var(--text)]/70 text-sm leading-relaxed"
          clampClass="line-clamp-4"
          wrapperClassName="mb-6"
        />
        <a
          href={link || '#'}
          className="inline-block px-6 py-2.5 bg-[var(--gold)] text-white rounded-lg font-semibold text-sm hover:bg-[var(--gold-dark)] transition-colors duration-200 shadow"
        >
          View My Work
        </a>
      </div>

      {images.length > 0 ? (
        <ImageCarousel images={images} alt={title} />
      ) : (
        <div className="w-full md:w-64 lg:w-80 h-44 rounded-xl bg-[var(--card)] flex-shrink-0 flex items-center justify-center text-[var(--gold)]/40 text-xs font-medium">
          Project Preview
        </div>
      )}
    </div>
  );
}

function ProjectCardGrid({ title, description, link, image_url, image_urls }) {
  const localImgs = LOCAL_IMAGES[title] ?? [];
  const apiImgs = image_urls ?? (image_url ? [image_url] : []);
  const images = apiImgs.length ? apiImgs : localImgs;

  return (
    <div className="bg-[var(--card-alt)] rounded-2xl p-5 flex flex-col gap-4 border border-[var(--gold)]/10">
      {images.length > 0 ? (
        <ImageCarousel images={images} alt={title} variant="grid" />
      ) : (
        <div className="w-full h-48 rounded-xl bg-[var(--card)] flex items-center justify-center text-[var(--gold)]/40 text-xs font-medium">
          Project Preview
        </div>
      )}

      <div>
        <h3 className="font-display text-lg font-bold text-[var(--text)] mb-2">{title}</h3>
        <ExpandableText
          text={description}
          className="text-[var(--text)]/70 text-sm leading-relaxed"
          clampClass="line-clamp-3"
          wrapperClassName="mb-4"
        />
        <a
          href={link || '#'}
          className="inline-block px-5 py-2 bg-[var(--gold)] text-white rounded-lg font-semibold text-sm hover:bg-[var(--gold-dark)] transition-colors duration-200 shadow"
        >
          View My Work
        </a>
      </div>
    </div>
  );
}

const CATEGORIES = ['All', 'Design', 'Full Stack', 'Frontend'];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState('');
  const [search,   setSearch]   = useState('');
  const [layout,   setLayout]   = useState('list');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      setLoading(true);
      setError('');
      try {
        const url = search
          ? `${API_URL}/projects?title=${encodeURIComponent(search)}`
          : `${API_URL}/projects`;

        const res  = await fetch(url, { signal: controller.signal });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Failed to load projects.');
        setProjects(data.data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchProjects, search ? 400 : 0);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [search]);

  const visibleProjects = category === 'All'
    ? projects
    : projects.filter(p => (p.category ?? 'Design') === category);

  return (
    <section id="projects" className="bg-[var(--bg)] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
          My Projects
        </h2>

        <div className="flex gap-6 border-b border-[var(--gold)]/15 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`relative pb-3 text-sm font-semibold transition-colors ${
                category === cat ? 'text-[var(--gold)]' : 'text-[var(--text)]/50 hover:text-[var(--text)]/80'
              }`}
            >
              {cat}
              {category === cat && (
                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-[var(--gold)] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search projects…"
            className="w-full max-w-sm bg-[var(--card)]/60 rounded-xl px-4 py-3 text-sm border text-[var(--text)] border-[var(--gold)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 transition"
          />

          <div className="flex items-center gap-1 bg-[var(--card)]/60 rounded-xl p-1 border border-[var(--gold)]/20">
            <button
              type="button"
              onClick={() => setLayout('list')}
              aria-label="List layout"
              aria-pressed={layout === 'list'}
              className={`p-2 rounded-lg transition-colors ${layout === 'list' ? 'bg-[var(--gold)] text-white' : 'text-[var(--text)]/60 hover:text-[var(--gold)]'}`}
            >
              <List size={18} />
            </button>
            <button
              type="button"
              onClick={() => setLayout('grid')}
              aria-label="Grid layout"
              aria-pressed={layout === 'grid'}
              className={`p-2 rounded-lg transition-colors ${layout === 'grid' ? 'bg-[var(--gold)] text-white' : 'text-[var(--text)]/60 hover:text-[var(--gold)]'}`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>

        {loading && <p className="text-[var(--gold)]/60 text-sm">Loading projects…</p>}
        {error   && <p className="text-red-500 text-sm">{error}</p>}

        <div className={layout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-7'}>
          {!loading && !error && visibleProjects.map((p) => (
            layout === 'grid'
              ? <ProjectCardGrid key={p._id} {...p} />
              : <ProjectCard key={p._id} {...p} />
          ))}
          {!loading && !error && visibleProjects.length === 0 && (
            <p className="text-[var(--text)]/50 text-sm">No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
