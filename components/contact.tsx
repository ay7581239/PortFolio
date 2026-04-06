export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-foreground/10">
      <div className="max-w-2xl space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/70">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:abhishekkyadav003@gmail.com"
            className="flex items-center gap-3 group hover:text-foreground transition-colors"
          >
            <span className="text-xl">✉</span>
            <div className="flex-1">
              <p className="text-sm text-foreground/60">Email</p>
              <p className="text-foreground group-hover:text-foreground/80 transition-colors">
                abhishekkyadav003@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-kumar-yadav-5367b3225/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:text-foreground transition-colors"
          >
            <span className="text-xl">🔗</span>
            <div className="flex-1">
              <p className="text-sm text-foreground/60">LinkedIn</p>
              <p className="text-foreground group-hover:text-foreground/80 transition-colors">
                /in/abhishek-kumar-yadav-5367b3225
              </p>
            </div>
          </a>

          <a
            href="https://github.com/ay7581239"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:text-foreground transition-colors"
          >
            <span className="text-xl">🐙</span>
            <div className="flex-1">
              <p className="text-sm text-foreground/60">GitHub</p>
              <p className="text-foreground group-hover:text-foreground/80 transition-colors">
                github.com/ay7581239
              </p>
            </div>
          </a>

          <a
            href="tel:+916307254445"
            className="flex items-center gap-3 group hover:text-foreground transition-colors"
          >
            <span className="text-xl">📱</span>
            <div className="flex-1">
              <p className="text-sm text-foreground/60">Phone</p>
              <p className="text-foreground group-hover:text-foreground/80 transition-colors">
                +91 6307254445
              </p>
            </div>
          </a>
        </div>

        <div className="pt-8 border-t border-foreground/10">
          <p className="text-sm text-foreground/50 text-center">
            © 2025 Abhishek Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
