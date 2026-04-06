export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Site.Guru',
      location: 'Remote (Gurugram, Haryana)',
      period: 'July 2024 – September 2024',
      description: [
        'Built an E-Learning website using Vue.js and Vuetify 2 (frontend), Node.js (backend), and SQL',
        'Implemented key features including inquiry dialogs, automated value increments upon website load, preview/edit icons in data tables, and user authentication',
        'Collaborated with team members to deliver a robust and scalable platform',
      ],
      technologies: ['Vue.js', 'Vuetify 2', 'Node.js', 'SQL', 'JavaScript'],
    },
  ]

  return (
    <section className="py-20 space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold text-foreground">Experience</h2>
        <p className="text-lg text-foreground/60">Professional experience and work history</p>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative border border-primary/20 rounded-2xl p-8 overflow-hidden bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mt-2">{exp.company}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-foreground/60">📍</span>
                    <p className="text-sm text-foreground/60">{exp.location}</p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-lg bg-primary/20 h-fit">
                  <p className="text-sm font-semibold text-primary">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-4 text-foreground/80">
                    <span className="text-primary font-bold mt-1 flex-shrink-0">→</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
