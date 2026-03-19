import { useState } from 'react';
import { Phone, Mail, FileText, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-[#F5EDD6] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#B8860B] text-center mb-3">
          Get In Touch
        </h2>
        <p className="text-center text-[#1a1a1a]/60 mb-12 text-sm">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

         
        <div className="grid grid-cols-3 gap-6 mb-10 text-center">
          <div>
            <a href="tel:+9779808501847" className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[#B8860B] flex items-center justify-center shadow hover:bg-[#8B6508] transition-colors">
                <Phone size={24} className="text-white" />
              </span>
              <span className="font-semibold text-sm">Phone</span>
              <span className="text-xs text-[#1a1a1a]/60">+977 9808501847</span>
            </a>
          </div>
          <div>
            <a href="mailto:tayamakirati@gmail.com" className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[#B8860B] flex items-center justify-center shadow hover:bg-[#8B6508] transition-colors">
                <Mail size={24} className="text-white" />
              </span>
              <span className="font-semibold text-sm">Email</span>
              <span className="text-xs text-[#B8860B] underline">tayamakirati@gmail.com</span>
            </a>
          </div>
          <div>
            <a href="/cv.pdf" download className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[#B8860B] flex items-center justify-center shadow hover:bg-[#8B6508] transition-colors">
                <FileText size={24} className="text-white" />
              </span>
              <span className="font-semibold text-sm">CV</span>
              <span className="text-xs text-[#1a1a1a]/60">Download CV</span>
            </a>
          </div>
        </div>

        
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/70 hover:text-[#B8860B] transition-colors"
          >
            <Github size={18} /> Github
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/70 hover:text-[#B8860B] transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

   
        <div className="bg-[#F5D9A0]/70 rounded-2xl p-8 border border-[#B8860B]/10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-[#B8860B] font-semibold text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-[#F5EDD6]/80 rounded-xl px-4 py-3 text-sm placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 transition"
              />
            </div>
            <div>
              <label className="block text-[#B8860B] font-semibold text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
                className="w-full bg-[#F5EDD6]/80 rounded-xl px-4 py-3 text-sm placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 transition"
              />
            </div>
            <div>
              <label className="block text-[#B8860B] font-semibold text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here....."
                rows={5}
                required
                className="w-full bg-[#F5EDD6]/80 rounded-xl px-4 py-3 text-sm placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#B8860B] text-white rounded-xl py-4 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#8B6508] transition-colors duration-200 shadow-md"
            >
              Send Message <Send size={16} />
            </button>

            {sent && (
              <p className="text-center text-[#B8860B] font-medium text-sm">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}