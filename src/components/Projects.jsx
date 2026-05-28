import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { API_URL } from '../App';
import khimImg      from '../assets/khim.png';
import metmomoImg   from '../assets/metmomo.png';
import peanutImg    from '../assets/peanut.png';
import portfolioImg from '../assets/portfolio.png';
import myspace2Img   from '../assets/myspace.png';
import rockpaperscissorsImg   from '../assets/rockpaperscissors.png';


const LOCAL_IMAGES = {
  'Khim : Home Management System': khimImg,
  'MetMomo : Food Ordering System': metmomoImg,
  'PeaNut : E-Commerce Platform':   peanutImg,
  'Portfolio Website':              portfolioImg,
  'MySpace: Ghibli-themed personal productivity and lifestyle website': myspace2Img,
  'Rock Paper Scissors Game':        rockpaperscissorsImg,
};

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: '1rem', right: '1.25rem', color: 'white', fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}
        aria-label="Close"
      >
        &times;
      </button>
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '1rem', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', objectFit: 'contain' }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}

function ProjectCard({ title, description, link, image_url }) {
  const src = image_url || LOCAL_IMAGES[title];
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {lightboxOpen && <Lightbox src={src} alt={title} onClose={() => setLightboxOpen(false)} />}
      <div className="bg-[#F5D9A0]/60 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6 border border-[#B8860B]/10">
        <div className="flex-1">
          <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-3">{title}</h3>
          <p className="text-[#1a1a1a]/70 text-sm leading-relaxed mb-6">{description}</p>

          <a href={link || '#'}
            className="inline-block px-6 py-2.5 bg-[#B8860B] text-white rounded-lg font-semibold text-sm hover:bg-[#8B6508] transition-colors duration-200 shadow"
          >
            View My Work
          </a>
        </div>
        <div
          className="w-full md:w-64 lg:w-80 h-44 rounded-xl overflow-hidden bg-[#E8D5A8] flex-shrink-0 shadow relative group transition-transform duration-300 hover:scale-110"
          onClick={() => src && setLightboxOpen(true)}
          style={src ? { cursor: 'zoom-in' } : {}}
        >
          {src ? (
            <>
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl drop-shadow">
                  🔍
                </span>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#B8860B]/40 text-xs font-medium">
              Project Preview
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState('');
  const [search,   setSearch]   = useState('');

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
      } 
       catch (err) {
  if (err.name !== 'AbortError') {
    console.error(err);         
    setError(err.message);     
  }
}
 finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchProjects, search ? 400 : 0);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [search]);

  return (
    <section id="projects" className="bg-[#F5EDD6] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
          My Projects
        </h2>

        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search projects…"
          className="mb-10 w-full max-w-sm bg-[#F5D9A0]/60 rounded-xl px-4 py-3 text-sm border text-black border-[#B8860B]/20 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 transition"
        />

        {loading && <p className="text-[#B8860B]/60 text-sm">Loading projects…</p>}
        {error   && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex flex-col gap-7">
          {!loading && !error && projects.map((p) => (
            <ProjectCard key={p._id} {...p} />
          ))}
          {!loading && !error && projects.length === 0 && (
            <p className="text-[#1a1a1a]/50 text-sm">No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
}