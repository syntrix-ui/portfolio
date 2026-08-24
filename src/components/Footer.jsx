import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Building scalable digital experiences with modern technologies. 
              Passionate about clean code, great UX, and continuous learning.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:dev@example.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "AWS", "Docker"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs bg-muted border border-border rounded-full text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DevPortfolio. Built with React, Tailwind CSS, and shadcn/ui.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Made with passion</span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a href="#home" className="flex items-center gap-1">
                Back to top
                <Code2 className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}