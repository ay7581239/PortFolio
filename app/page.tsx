import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 md:px-0">
        <Hero />
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="experience" className="py-16">
          <Experience />
        </section>
        <section id="projects" className="py-16">
          <Projects />
        </section>
        <section id="skills" className="py-16">
          <Skills />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
    </div>
  )
}
