import { 
  Code2, Server, Database, Cloud, 
  GitBranch, Terminal, TestTube, 
  Layout, Smartphone, Globe 
} from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { cn } from "../lib/utils"

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
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
    title: "Other",
    icon: Code2,
    skills: [
      { name: "System Design", level: 82 },
      { name: "Microservices", level: 78 },
      { name: "WebSockets", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "WebAssembly", level: 60 },
      { name: "Electron/Tauri", level: 70 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with regularly. Always expanding my toolkit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <Card key={category.title} className="transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "90-100%", desc: "Expert - Can architect & teach" },
              { label: "75-89%", desc: "Advanced - Production ready" },
              { label: "60-74%", desc: "Intermediate - Comfortable" },
              { label: "< 60%", desc: "Learning - Actively improving" },
            ].map((item) => (
              <Card key={item.label} className="text-center">
                <CardContent className="py-4">
                  <div className="text-lg font-bold text-primary">{item.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}