import { useState, useEffect, useRef } from "react";
import { API_URL } from '../App';

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch(`${API_URL}/experience`);
        const data = await res.json();
        setExperience(data.data || []);
      } catch (err) {
        setError('Could not load experience records.');
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  useEffect(() => {
    if (!experience.length || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('[data-exp-card]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.expCard) * 180;
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
  }, [experience]);

  return (
    <section id="experience" className="bg-[#F5EDD6] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">
          Experience
        </h2>

        {loading && <p className="text-[#1a1a1a]/50 text-sm">Loading…</p>}
        {error   && <p className="text-red-500 text-sm">{error}</p>}

        {!loading && !error && experience.length === 0 && (
          <p className="text-[#1a1a1a]/50 text-sm">No experience added yet.</p>
        )}

        <div ref={containerRef} className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[#B8860B]/30" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, index) => (
              <div
                key={exp._id}
                data-exp-card={index}
                className="relative pl-10"
                style={{
                  opacity: 0,
                  transform: 'translateY(28px)',
                  transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#B8860B] border-[3px] border-[#F5EDD6] shadow-sm" />

                <div className="bg-[#F5D9A0]/60 rounded-2xl px-8 py-6 border border-[#B8860B]/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <p className="font-semibold text-lg text-[#1a1a1a]">{exp.role}</p>
                      <p className="text-[#B8860B] font-medium text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <p className="text-[#1a1a1a]/70 font-medium text-sm">{exp.period}</p>
                  </div>
                  {exp.description && (
                    <p className="text-[#1a1a1a]/70 text-sm leading-relaxed mt-4">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
