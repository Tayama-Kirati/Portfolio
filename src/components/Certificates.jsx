import { useState, useEffect, useRef } from "react";
import { API_URL } from '../App';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch(`${API_URL}/certificates`);
        const data = await res.json();
        setCertificates(data.data || []);
      } catch (err) {
        setError('Could not load certificates.');
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  useEffect(() => {
    if (!certificates.length || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('[data-cert-card]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.certCard) * 120;
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [certificates]);

  return (
    <section id="certificates" className="bg-[#B8860B] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
          Certificates
        </h2>

        {loading && <p className="text-white/60 text-sm">Loading…</p>}
        {error   && <p className="text-white/80 text-sm">{error}</p>}

        {!loading && !error && certificates.length === 0 && (
          <p className="text-white/60 text-sm">No certificates added yet.</p>
        )}

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certificates.map((cert, index) => (
            <div
              key={cert._id}
              data-cert-card={index}
              className="bg-[#E8E0D0] rounded-2xl px-7 py-6 flex flex-col gap-1"
              style={{
                opacity: 0,
                transform: 'translateY(28px)',
                transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <p className="font-semibold text-lg text-[#1a1a1a]">{cert.title}</p>
              <p className="text-[#B8860B] font-medium text-sm">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-3">
                <p className="text-[#1a1a1a]/60 text-xs font-medium">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B8860B] text-xs font-semibold hover:text-[#8B6508] transition-colors"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
