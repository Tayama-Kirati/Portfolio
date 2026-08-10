import { Download } from 'lucide-react';

const RESUME_PATH = '/Tayama_CV.pdf';

export default function Resume() {
  return (
    <section id="resume" className="bg-[var(--bg)] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--gold)] text-center mb-3">
          Resume </h2>

        <p className="text-center text-[var(--text)]/50 mb-10 text-sm">
          Download a copy of my resume.
        </p>

        <div className="flex justify-center">
          <a
            href={RESUME_PATH}
            download="Tayama_Kirati_Resume.pdf"
            className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
