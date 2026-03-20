
import Tayama from '../assets/Tayama.png';
import Navbar from './Navbar';

export default function Hero() {
  return (
     
    <section
      id="home"
      className="min-h-screen flex items-center pt-16"
      style={{ backgroundColor: 'var(--text)' }}
    > 
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-8">

        <div className="flex-shrink-0 w-40 md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={Tayama}
              alt="Tayama Kirati"
              className="w-full h-auto object-cover"
            />
        </div>

        
        <div className="flex flex-col gap-3 text-center  ">
         <p className="text-4xl font-bold text-black">
         Hello,
        </p>
         

          <h1
            className="font-outfit text-4xl font-extrabold leading-tight text-black"
          >
            I'm <span style={{ color: 'var(--gold-dark)' }}>Tayama Kirati</span>.
          </h1>

          <h2
            className="font-outfit text-4xl font-extrabold leading-snug text-black"
          >
            A UI/UX Designer,
            <br />
            Frontend Developer,
            <br />
            Product Developer and
            <br />
            Problem Solver
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
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