export default function About() {
  return (
    <section className="py-20 space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold text-foreground">About Me</h2>
        <p className="text-lg text-foreground/60">My journey as a developer and builder</p>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-foreground/85 font-light">
            I&apos;m a passionate <span className="font-semibold text-primary">full-stack developer</span> currently pursuing my B.Tech in Computer Science at United College of Engineering and Research, Prayagraj with a <span className="font-semibold text-foreground">CGPA of 7.94</span>.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/85 font-light">
            During my internship at <span className="font-semibold text-primary">Site.Guru</span>, I built an E-Learning platform using Vue.js, Vuetify 2, Node.js, and SQL. I implemented key features including user authentication, dynamic data tables, and interactive UI components that enhanced the learning experience.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/85 font-light">
            I&apos;m driven by the challenge of creating <span className="font-semibold text-primary">seamless, intuitive web experiences</span> that blend thoughtful design with robust engineering. I enjoy working across the full stack, from beautiful frontend interfaces to reliable backend services.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-6 py-4 rounded-r-lg bg-primary/5">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-2xl">💻</span>
              Competitive Programming
            </h3>
            <p className="text-sm text-foreground/75 font-medium">600+ problems solved on LeetCode</p>
            <p className="text-sm text-foreground/75 font-medium">CodeChef Max Rating: 1484</p>
          </div>

          <div className="border-l-4 border-primary pl-6 py-4 rounded-r-lg bg-primary/5">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              Education
            </h3>
            <p className="text-sm text-foreground/75 font-medium">United College of Engineering and Research</p>
            <p className="text-sm text-foreground/75 font-medium">B.Tech CSE (2021-2025) • CGPA: 7.94</p>
          </div>

          <div className="border-l-4 border-primary pl-6 py-4 rounded-r-lg bg-primary/5">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Interests
            </h3>
            <p className="text-sm text-foreground/75 font-medium">Web Development • System Design • Open Source</p>
          </div>
        </div>
      </div>
    </section>
  )
}
