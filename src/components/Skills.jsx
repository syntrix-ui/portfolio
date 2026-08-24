import { 
  Code2, Server, Database, Cloud, 
  GitBranch, Terminal, TestTube, 
  Layout, Smartphone, Globe, Brain
} from "lucide-react"
import { useRef } from "react"
import { Card, CardContent } from "./ui/card"
import { cn } from "../lib/utils"
import { StaggerContainer, AnimatedSection } from "./ui/AnimatedSection"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "Svelte", level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Go", level: 75 },
      { name: "Express/Fastify", level: 88 },
      { name: "GraphQL", level: 82 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 85 },
      { name: "Prisma ORM", level: 90 },
      { name: "SQLite", level: 82 },
      { name: "DynamoDB", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 72 },
      { name: "GitHub Actions", level: 90 },
      { name: "Vercel/Netlify", level: 92 },
      { name: "Terraform", level: 65 },
    ],
  },
  {
    title: "Tools & Testing",
    icon: Terminal,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Git", level: 95 },
      { name: "Jest/Vitest", level: 85 },
      { name: "Playwright", level: 80 },
      { name: "ESLint/Prettier", level: 90 },
      { name: "Storybook", level: 78 },
      { name: "CI/CD", level: 88 },
    ],
  },
  {
    title: "Architecture",
    icon: Brain,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "System Design", level: 82 },
      { name: "Microservices", level: 78 },
      { name: "WebSockets", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "WebAssembly", level: 60 },
      { name: "Event Driven", level: 75 },
    ],
  },
]

function SkillBar({ skill }) {
  const barRef = useRef(null)
  const containerRef = useRef(null)
  
  useGSAP(() => {
    gsap.fromTo(barRef.current,
      { width: 0 },
      {
        width: `${skill.level}%`,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          once: true,
        }
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="group/skill">
      <div className="flex justify-between text-sm mb-1.5 transition-colors duration-300 group-hover/skill:text-primary">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]"
          style={{
            background: `linear-gradient(90deg, hsl(var(--gradient-primary)), hsl(var(--gradient-secondary)))`,
          }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ category }) {
  return (
    <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 glass-dark border-border/50 group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-6 sm:p-8 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className={cn("p-4 rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", `bg-gradient-to-br ${category.color}`)}>
            <category.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold font-serif group-hover:text-primary transition-colors duration-300">
            {category.title}
          </h3>
        </div>
        
        <div className="space-y-5">
          {category.skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-serif mb-6">
            Technical <span className="gradient-text italic">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technologies and tools I work with regularly to build high-performance, scalable digital products.
          </p>
        </AnimatedSection>

        <StaggerContainer 
          staggerDelay={0.15} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr"
        >
          {skillCategories.map((category) => (
            <div key={category.title} className="gsap-stagger-item h-full">
              <SkillCategory category={category} />
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}