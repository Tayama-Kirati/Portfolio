export default function About() {
  return (
    <section id="about-me" className="bg-[#B8860B] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
          I'm a passionate and detail-oriented designer who enjoys turning ideas into meaningful digital
          experiences. With a strong interest in user-centered design, I focus on creating clean, intuitive,
          and visually engaging interfaces that solve real problems. I love exploring tools like Figma and
          continuously learning new design trends to improve my skills. Whether working independently or
          collaborating with a team, I aim to deliver thoughtful, functional, and impactful design solutions
          that enhance user satisfaction and bring ideas to life.
        </p>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="inline-block mt-10 px-8 py-3 bg-white text-[#B8860B] rounded-full font-semibold text-sm hover:bg-[#F5EDD6] transition-colors duration-200 shadow"
        >
          Contact Me
        </a>
        
      </div>
    </section>
  );
}