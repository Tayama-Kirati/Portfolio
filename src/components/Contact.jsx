import { useState } from 'react';
import { Phone, Mail, FileText, Github, Linkedin, Send } from 'lucide-react';
import { API_URL } from '../App';
import resume from '../assets/resume.pdf';

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        const msg = data.errors ? data.errors.join('\n') : data.error;
        setError(msg || 'Something went wrong. Please try again.');
        return;
      }
      alert(`${data.message}`);
      setForm({ name: '', email: '', message: '' });

    } catch (err) {
      setError('Could not reach the server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg)] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--gold)] text-center mb-3">
          Get In Touch
        </h2>
        <p className="text-center text-[var(--text)]/60 mb-12 text-sm">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>


        <div className="grid grid-cols-3 gap-6 mb-10 text-center">
          <div>
            <a href="tel:+9779808501847" className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center shadow hover:bg-[var(--gold-dark)] transition-colors">
                <Phone size={24} className="text-white" />
              </span>
              <span className="font-semibold text-sm text-[var(--text)]">Phone</span>
              <span className="text-xs text-[var(--text)]/60">+977 9808501847</span>
            </a>
          </div>
          <div>
            <a href="mailto:tayamakirati@gmail.com" className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center shadow hover:bg-[var(--gold-dark)] transition-colors">
                <Mail size={24} className="text-white" />
              </span>
              <span className="font-semibold text-sm text-[var(--text)]">Email</span>
              <span className="text-xs text-[var(--gold)] underline">tayamakirati@gmail.com</span>
            </a>
          </div>
          <div>
            <a href={resume} download="Tayama_Kirati_CV.pdf" className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center shadow hover:bg-[var(--gold-dark)] transition-colors">
                <FileText size={24} className="text-white" />
              </span>
              <span className="font-semibold text-sm text-[var(--text)]">CV</span>
              <span className="text-xs text-[var(--text)]/60 hover:text-[var(--gold)] transition-colors">
                Download CV
              </span>
            </a>
          </div>
        </div>


        <div className="flex justify-center gap-8 mb-12">
          <a href="https://github.com/" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--text)]/70 hover:text-[var(--gold)] transition-colors">
            <Github size={18} /> Github
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--text)]/70 hover:text-[var(--gold)] transition-colors">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>


        <div className="bg-[var(--card)]/70 rounded-2xl p-8 border border-[var(--gold)]/10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div>
              <label className="block text-[var(--gold)] font-semibold text-sm mb-2">Name</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Your Name" required
                className="w-full bg-[var(--input-bg)] text-[var(--text)] rounded-xl px-4 py-3 text-sm placeholder:text-[var(--text)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 transition"
              />
            </div>

            <div>
              <label className="block text-[var(--gold)] font-semibold text-sm mb-2">Email</label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="example@gmail.com" required
                className="w-full bg-[var(--input-bg)] text-[var(--text)] rounded-xl px-4 py-3 text-sm placeholder:text-[var(--text)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 transition"
              />
            </div>

            <div>
              <label className="block text-[var(--gold)] font-semibold text-sm mb-2">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Your message here....." rows={5} required
                className="w-full bg-[var(--input-bg)] text-[var(--text)] rounded-xl px-4 py-3 text-sm placeholder:text-[var(--text)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 transition resize-none"
              />
            </div>


            {error && (
              <p className="text-red-600 text-sm font-medium bg-red-50 rounded-xl px-4 py-3 border border-red-200">
             {error}
              </p>
            )}

            <button
              type="submit" disabled={loading}
              className="w-full bg-[var(--gold)] text-white rounded-xl py-4 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[var(--gold-dark)] transition-colors duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending…' : <><Send size={16} /> Send Message</>}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
