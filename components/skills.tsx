export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Vue.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Vuetify 2', 'Shadcn'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Server-Side Rendering'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL', 'SQL'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'Next.js'],
    },
    {
      category: 'Specializations',
      skills: ['Full Stack Development', 'Responsive Design', 'Data Structures', 'Algorithms', 'DBMS'],
    },
  ]

  return (
    <section className="py-4 px-4 space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold text-foreground">Skills & Expertise</h2>
        <p className="text-lg text-foreground/60">Technologies and tools I work with</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="group border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-primary"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-foreground font-semibold text-sm hover:bg-primary/20 hover:border-primary/60 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group border border-primary/20 rounded-2xl p-8 overflow-hidden bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">600+</h4>
            <p className="text-foreground/70 font-semibold">LeetCode Problems Solved</p>
          </div>
        </div>
        <div className="relative group border border-primary/20 rounded-2xl p-8 overflow-hidden bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">1484</h4>
            <p className="text-foreground/70 font-semibold">CodeChef Max Rating</p>
          </div>
        </div>
        <div className="relative group border border-primary/20 rounded-2xl p-8 overflow-hidden bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">15+</h4>
            <p className="text-foreground/70 font-semibold">Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}
