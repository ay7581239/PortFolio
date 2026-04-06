export default function Hero() {
  return (
    <section className="py-20 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-sm font-medium text-primary">Full Stack Developer</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
            Abhishek<br />
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Kumar
            </span>
            Yadav
          </h1>
        </div>
        
        <p className="text-lg text-foreground/75 leading-relaxed max-w-lg font-light">
          I build seamless web experiences with React, Node.js, and modern technologies. Passionate about creating responsive, performant applications that solve real problems.
        </p>

        <div className="flex flex-col gap-3 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-4 rounded-full bg-primary/60"></div>
            <p className="text-foreground/80">B.Tech in Computer Science (2021-2025)</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-4 rounded-full bg-primary/60"></div>
            <p className="text-foreground/80">Full Stack Developer Intern at Site.Guru</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-4 rounded-full bg-primary/60"></div>
            <p className="text-foreground/80">Currently in Noida, India</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-8">
          <a
            href="https://github.com/ay7581239"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-yadav-5367b3225/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-primary/50 text-foreground hover:border-primary hover:bg-primary/10 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abhishekkyadav003@gmail.com"
            className="px-6 py-3 rounded-lg border border-foreground/20 text-foreground hover:border-foreground/50 hover:bg-foreground/5 transition-all"
          >
            Email
          </a>
        </div>
      </div>

      <div className="relative h-96 md:h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10 blur-xl"></div>
            <img
              src="abhishek_kumar.jpg"
              alt="Abhishek Kumar - Full Stack Developer"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl shadow-primary/30 border border-primary/30"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
