import { FaGithub } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiMysql, SiJavascript,SiPostman, SiCplusplus, SiBlender, SiTailwindcss, SiReact, SiPython, SiFigma} from "react-icons/si";


const skillCategories = [
  {
    title: 'Libraries and Frameworks',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
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
      { name: 'Figma', icon: <SiFigma/> },
    ],
  },
];

function SkillBadge({ name, icon }) {
  return (
    <span className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-[#8B6508] transition-colors duration-200 cursor-default">
      {icon && <span className="text-base leading-none">{icon}</span>}
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#FFE9B1] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#B8860B] mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-[#F5D9A0]/60 rounded-2xl p-7 border border-[#B8860B]/10">
              <h3 className="text-center font-semibold text-[#1a1a1a] mb-6 text-base">{cat.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {cat.skills.map((sk) => (
                  <SkillBadge key={sk.name} {...sk} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}