const education = [
  {
    school: 'St. Xaviers College, Maitighar',
    degree: '+2 Science',
    period: 'June 2019 – December 2021',
    gpa: '3.62 GPA',
  },
  {
    school: 'IOE Purwanchal Campus, Dharan',
    degree: 'Bachelors In Computer Engineering',
    period: 'April 2022 – April 2024',
    gpa: null,
  },
  {
    school: 'IOE Thapathali Campus, Thapathali',
    degree: 'Bachelors In Computer Engineering',
    period: 'April 2024 – Present',
    gpa: null,
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#B8860B] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">Education</h2>
        <div className="flex flex-col gap-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-[#E8E0D0] rounded-2xl px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            >
              <div>
                <p className="font-semibold text-lg text-[#1a1a1a]">{edu.school}</p>
                <p className="text-[#B8860B] font-medium text-sm mt-0.5">{edu.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-[#1a1a1a] font-medium text-sm">{edu.period}</p>
                {edu.gpa && <p className="text-[#B8860B] font-semibold text-sm mt-0.5">{edu.gpa}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}