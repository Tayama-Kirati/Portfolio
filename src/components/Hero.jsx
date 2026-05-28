import { useState, useEffect } from 'react';
import Tayama from '../assets/Tayama.png';
import { useTypewriter } from '../hooks/useTypewriter';

const ROLES = [
  'A UI/UX Designer.',
  'A Frontend Developer.',
  'A Product Developer.',
  'A Problem Solver.',
  'A MERN Stack Developer.',
  "A NEXT.js Developer.",
];

export default function Hero() {
  const [hello, setHello] = useState('');
  const [helloTyped, setHelloTyped] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const role = useTypewriter(ROLES, 70, 35, 1500);

  useEffect(() => {
    const target = 'Hello,';
    let i = 0;
    const id = setInterval(() => {
      i++;
      setHello(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(id);
        setTimeout(() => setHelloTyped(true), 400);
        setTimeout(() => setShowName(true), 600);
        setTimeout(() => setShowButtons(true), 950);
      }
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="flex items-start bg-[#F5EDD6] pt-4 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-8">

        <div className="flex-shrink-0 w-40 md:w-1/2  rounded-2xl overflow-hidden shadow-lg">
          <img
            src={Tayama}
            alt="Tayama Kirati"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 text-center">
          <p className={`text-4xl font-bold text-black${helloTyped ? '' : ' typewriter-cursor'}`}>
            {hello || ' '}
          </p>

          <h1
            className={`font-outfit text-4xl font-extrabold leading-tight text-black transition-opacity duration-500 ${showName ? 'opacity-100' : 'opacity-0'}`}
          >
            I'm <span style={{ color: 'var(--gold-dark)' }}>Tayama Kirati</span>.
          </h1>

          <h2
            className={`font-outfit text-3xl font-extrabold leading-snug text-black min-h-[2.5rem] transition-opacity duration-500 ${showName ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="typewriter-cursor">{role}</span>
          </h2>

          <div className={`flex flex-wrap justify-center md:justify-start gap-4 mt-6 transition-opacity duration-700 ${showButtons ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 text-white rounded-full font-semibold text-sm shadow-md"
              style={{ backgroundColor: 'var(--gold)', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Contact Me
            </button>

            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 border-2 rounded-full font-semibold text-sm"
              style={{
                borderColor: 'var(--gold)',
                color: 'var(--gold)',
                backgroundColor: 'transparent',
                transition: 'background-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--gold)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--gold)';
              }}
            >
              Explore My Work
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
