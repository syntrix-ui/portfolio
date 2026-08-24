import { ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

export function Hero() {
  const scrollTo = (href) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 animate-in fade-in zoom-in-95 duration-500 delay-100">
              <Code2 className="h-4 w-4" />
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Building scalable
              <br />
              <span className="text-primary">digital experiences</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              I craft robust, user-centric applications with modern technologies. 
              Passionate about clean code, great UX, and continuous learning.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
              <Button size="xl" onClick={() => scrollTo("#projects")} className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => scrollTo("#contact")}>
                Get In Touch
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:dev@example.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in-95 duration-700 delay-300">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <pre className="text-left overflow-x-auto text-foreground/80"><code>{`const developer = {
  name: "Your Name",
  role: "Full Stack Developer",
  stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  focus: "Scalable Web Apps",
  currentlyLearning: "Rust & System Design"
};`}</code></pre>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 animate-bounce-slow">
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg min-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Live Status</span>
                </div>
                <p className="text-sm text-muted-foreground">Currently open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}