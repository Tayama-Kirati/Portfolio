import { useRef, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiMysql, SiJavascript, SiPostman, SiCplusplus, SiBlender, SiTailwindcss, SiReact, SiPython, SiFigma, SiNextdotjs } from "react-icons/si";

const skillCategories = [
  {
    title: 'Libraries and Frameworks',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Javascript', icon: <SiJavascript /> },
      { name: 'C/C++', icon: <SiCplusplus /> },
      { name: 'SQL', icon: <SiPostman /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: null },
      { name: 'Github', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Blender', icon: <SiBlender /> },
      { name: 'Figma', icon: <SiFigma /> },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('[data-skill-card]');
    const badges = section.querySelectorAll('[data-skill-badge]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards with stagger
            cards.forEach((card) => {
              const delay = parseInt(card.dataset.skillCard) * 150;
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, delay);
            });

            // Animate badges with stagger after cards start appearing
            badges.forEach((badge) => {
              const delay = 200 + parseInt(badge.dataset.skillBadge) * 60;
              setTimeout(() => {
                badge.style.opacity = '1';
                badge.style.transform = 'scale(1) translateY(0)';
              }, delay);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  let badgeIndex = 0;

  return (
    <section ref={sectionRef} id="skills" className="bg-[#FFE9B1] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#B8860B] mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              data-skill-card={catIdx}
              className="bg-[#F5D9A0]/60 rounded-2xl p-7 border border-[#B8860B]/10"
              style={{
                opacity: 0,
                transform: 'translateY(28px)',
                transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <h3 className="text-center font-semibold text-[#1a1a1a] mb-6 text-base">{cat.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {cat.skills.map((sk) => {
                  const bi = badgeIndex++;
                  return (
                    <span
                      key={sk.name}
                      data-skill-badge={bi}
                      className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-[#8B6508] transition-colors duration-200 cursor-default"
                      style={{
                        opacity: 0,
                        transform: 'scale(0.8) translateY(8px)',
                        transition: 'opacity 0.4s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1)',
                      }}
                    >
                      {sk.icon && <span className="text-base leading-none">{sk.icon}</span>}
                      {sk.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
