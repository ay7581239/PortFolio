export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-4 py-5 md:px-0">
        <a href="#" className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200">
          Abhishek<span className="text-primary">.</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-10">
          {[
            { label: 'About', value: 'about' },
            { label: 'Experience', value: 'experience' },
            { label: 'Projects', value: 'projects' },
            { label: 'Skills', value: 'skills' },
          ].map((item) => (
            <li key={item.value}>
              <a
                href={`#${item.value}`}
                className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="px-6 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
