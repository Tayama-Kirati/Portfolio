// Replace projectImage with actual image imports or URLs as needed
const projects = [
  {
    title: 'Food Delivery App',
    description: 'I designed a Food Delivery App with a clean, intuitive interface focused on seamless user experience. The design covers browsing restaurants, ordering food, and real-time tracking — all crafted in Figma.',
    link: '#',
    // image: '/food-delivery.png',  // ← Add your image here
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website to showcase projects, skills, and education. Built with React, Vite, and Tailwind CSS.',
    link: '#',
  },
];

function ProjectCard({ title, description, link, image }) {
  return (
    <div className="bg-[#F5D9A0]/60 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6 border border-[#B8860B]/10">
      <div className="flex-1">
        <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-3">{title}</h3>
        <p className="text-[#1a1a1a]/70 text-sm leading-relaxed mb-6">{description}</p>
        <a
          href={link}
          className="inline-block px-6 py-2.5 bg-[#B8860B] text-white rounded-lg font-semibold text-sm hover:bg-[#8B6508] transition-colors duration-200 shadow"
        >
          View My Work
        </a>
      </div>
      {/* Project image */}
      <div className="w-full md:w-64 lg:w-80 h-44 rounded-xl overflow-hidden bg-[#E8D5A8] flex-shrink-0 shadow">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#B8860B]/40 text-xs font-medium">
            Project Preview
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#F5EDD6] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">My Projects</h2>
        <div className="flex flex-col gap-7">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}