import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Terminal } from "lucide-react"
import { Button } from "./ui/button"
import { StaggerContainer } from "./ui/AnimatedSection"

export function Hero() {
  const scrollTo = (href) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[250px] lg:auto-rows-[minmax(180px,auto)]">
          
          {/* Main Hero Card */}
          <div className="lg:col-span-8 lg:row-span-2 glass-dark rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col justify-center relative overflow-hidden border border-border/50 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 w-max">
              <Code2 className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6">
              Building scalable
              <br />
              <span className="gradient-text italic">digital experiences</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
              I craft robust, user-centric applications with modern technologies. Passionate about clean code, great UX, and continuous learning.
            </p>

            <div className="flex flex-wrap gap-4 mt-auto">
              <Button size="xl" onClick={() => scrollTo("#projects")} className="group relative overflow-hidden text-base">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(var(--gradient-secondary))] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => scrollTo("#contact")} className="group text-base">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Code Snippet Card */}
          <div className="lg:col-span-4 lg:row-span-1 glass-dark rounded-3xl p-6 shadow-xl border border-border/50 flex flex-col justify-center hover:-translate-y-1 transition-transform duration-300">
             <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-sm font-mono text-foreground/80 overflow-x-auto">
                <code>{`const dev = {
  role: "Full Stack",
  stack: ["React", "Node", "TS"],
  focus: "Scalability",
};`}</code>
              </pre>
          </div>

          {/* Status Card */}
          <div className="lg:col-span-4 lg:row-span-1 glass rounded-3xl p-6 shadow-lg border border-primary/20 flex flex-col justify-between hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
             <div>
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Live Status</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Open to opportunities</h3>
             </div>
             <p className="text-sm text-muted-foreground mt-4">Currently exploring new projects and collaborations.</p>
          </div>

          {/* Social Links Card */}
          <div className="lg:col-span-4 lg:row-span-1 glass-dark rounded-3xl p-6 shadow-xl border border-border/50 flex flex-col justify-center items-center gap-6 group hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-medium text-muted-foreground">Connect with me</h3>
              <div className="flex items-center justify-center gap-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                  <Github className="h-8 w-8" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="mailto:dev@example.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                  <Mail className="h-8 w-8" />
                </a>
              </div>
          </div>

          {/* Extra visual card */}
          <div className="hidden lg:flex lg:col-span-8 lg:row-span-1 glass rounded-3xl p-8 shadow-xl border border-border/50 items-center justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
               <Sparkles className="h-6 w-6 text-primary/40" />
             </div>
             <div>
               <h3 className="text-2xl font-serif font-bold mb-2">Always Learning</h3>
               <p className="text-muted-foreground">Exploring Rust, System Design, and Web3 technologies.</p>
             </div>
             <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center opacity-80">
               <Terminal className="h-8 w-8 text-white" />
             </div>
          </div>

        </StaggerContainer>
      </div>
    </section>
  )
}