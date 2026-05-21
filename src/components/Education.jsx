import { useState, useEffect, useRef } from "react";
import { API_URL } from '../App';

export default function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await fetch(`${API_URL}/education`);
        const data = await res.json();
        setEducation(data.data || []);
      } catch (err) {
        setError('Could not load education records.');
      } finally {
        setLoading(false);
      }
    };
    fetchEducation();
  }, []);

  useEffect(() => {
    if (!education.length || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('[data-edu-card]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.eduCard) * 180;
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
  }, [education]);

  return (
    <section id="education" className="bg-[#B8860B] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
          Education
        </h2>

        {loading && <p className="text-white/60 text-sm">Loading…</p>}
        {error   && <p className="text-white/80 text-sm">{error}</p>}

        <div ref={containerRef} className="flex flex-col gap-5">
          {education.map((edu, index) => (
            <div
              key={edu._id}
              data-edu-card={index}
              className="bg-[#E8E0D0] rounded-2xl px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              style={{
                opacity: 0,
                transform: 'translateY(28px)',
                transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <div>
                <p className="font-semibold text-lg text-[#1a1a1a]">{edu.school}</p>
                <p className="text-[#B8860B] font-medium text-sm mt-0.5">{edu.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-[#1a1a1a] font-medium text-sm">{edu.period}</p>
                {edu.gpa && (
                  <p className="text-[#B8860B] font-semibold text-sm mt-0.5">{edu.gpa}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
