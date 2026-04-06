export default function Projects() {
  const projects = [
    {
      title: 'Harmony Hive',
      description: 'A full-stack society management platform enabling streamlined communication and complaint resolution among Admins, Residents, and Guests with sentiment analysis for issue prioritization.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Sentiment Analysis'],
      link: 'https://github.com/ay7581239/Harmony-Hive',
      highlights: [
        'Multi-user role system (Admin, Resident, Guest)',
        'Real-time complaint resolution tracking',
        'Sentiment analysis for complaint prioritization',
        'Responsive UI with Bootstrap',
      ],
    },
    {
      title: 'URL Shortener',
      description: 'A web application that provides a quick and efficient way to shorten long URLs with easy-to-share links that redirect to the original URLs.',
      technologies: ['Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      link: 'https://github.com/ay7581239/Url_shortner',
      highlights: [
        'URL shortening with custom aliases',
        'Redirect tracking and analytics',
        'RESTful API design',
        'Efficient data management',
      ],
    },
    {
      title: 'Hotel Management System',
      description: 'A comprehensive software application designed to manage all aspects of hotel operations including bookings, customer information, room availability, and financial transactions.',
      technologies: ['Java', 'Database Management', 'System Design'],
      link: 'https://github.com/ay7581239/Hotel-Management-System',
      highlights: [
        'Streamlined booking process',
        'Room availability management',
        'Customer information management',
        'Financial transaction tracking',
      ],
    },
  ]

  return (
    <section className="py-4 px-4 space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold text-foreground">Featured Projects</h2>
        <p className="text-lg text-foreground/60">Showcase of my recent work and technical expertise</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-base leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold whitespace-nowrap h-fit"
                >
                  View Project →
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/80">
                        <span className="text-primary font-bold mt-0.5">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest mb-4">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
