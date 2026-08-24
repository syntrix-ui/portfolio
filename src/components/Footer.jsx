import { Github, Linkedin, Twitter, Mail, Heart, Code2, ArrowUp, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { useState, useEffect } from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const initialDark = saved ? JSON.parse(saved) : prefersDark
      setIsDark(initialDark)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-muted/30 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="md:col-span-2" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                className="p-2 bg-gradient-to-br from-primary to-[hsl(var(--gradient-secondary))] rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Code2 className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold gradient-text">DevPortfolio</span>
            </div>
            <motion.p
              className="text-muted-foreground max-w-sm mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Building scalable digital experiences with modern technologies.
              Passionate about clean code, great UX, and continuous learning.
            </motion.p>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-400" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
                { icon: Mail, href: "mailto:dev@example.com", label: "Email", color: "hover:text-red-400" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("text-muted-foreground transition-colors", social.color)}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "AWS", "Docker", "GraphQL", "Next.js", "Go"].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs bg-muted border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.05, y: -1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * ["React", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "AWS", "Docker", "GraphQL", "Next.js", "Go"].indexOf(tech) + 0.4 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              © {currentYear} DevPortfolio. Built with React, Tailwind CSS, and shadcn/ui.
            </motion.p>
            
            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                whileHover={{ scale: 1.3 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.span>
              <span>Made with passion</span>
            </motion.div>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}