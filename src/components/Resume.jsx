import { Download, FileText } from 'lucide-react';

const RESUME_PATH = '/resume.pdf';

export default function Resume() {
  return (
    <section id="resume" className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#B8860B] text-center mb-3">
          Resume
        </h2>
        <p className="text-center text-white/50 mb-10 text-sm">
          View my resume below or download a copy.
        </p>

        <div className="flex justify-center mb-8">
          <a
            href={RESUME_PATH}
            download="Tayama_Kirati_Resume.pdf"
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#8B6508] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#B8860B]/30 shadow-2xl bg-[#111]">
          <div className="flex items-center gap-2 px-5 py-3 bg-[#111] border-b border-[#B8860B]/20">
            <FileText size={16} className="text-[#B8860B]" />
            <span className="text-white/60 text-xs">Tayama_Kirati_Resume.pdf</span>
          </div>
          <iframe
            src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Resume"
            className="w-full"
            style={{ height: '85vh', minHeight: '600px' }}
          />
        </div>

        <p className="text-center text-white/30 text-xs mt-4">
          If the preview doesn't load, please{' '}
          <a
            href={RESUME_PATH}
            download="Tayama_Kirati_Resume.pdf"
            className="text-[#B8860B] underline hover:text-[#D4A017]"
          >
            download the PDF
          </a>{' '}
          directly.
        </p>
      </div>
    </section>
  );
}
