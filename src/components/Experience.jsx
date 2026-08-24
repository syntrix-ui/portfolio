import { Briefcase, Building2, Code, Globe, ChevronRight, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { cn } from "../lib/utils"

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 — Present",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    description: [
      "Lead frontend architecture for a B2B SaaS platform serving 10k+ users",
      "Migrated legacy codebase to React 18 + TypeScript, reducing bundle size by 40%",
      "Implemented CI/CD pipelines with GitHub Actions, cutting deployment time by 60%",
      "Mentored 3 junior developers and established code review standards",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL"],
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 — 2022",
    location: "New York, NY",
    type: "Full-time",
    description: [
      "Built and maintained customer-facing web application from scratch",
      "Designed RESTful APIs and database schema for core business logic",
      "Integrated third-party services (Stripe, SendGrid, Auth0)",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
    technologies: ["React", "Next.js", "Python", "Django", "PostgreSQL", "Redis", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Digital Agency Co.",
    period: "2019 — 2020",
    location: "Boston, MA",
    type: "Internship",
    description: [
      "Developed responsive marketing websites and landing pages",
      "Created reusable component library using React and Storybook",
      "Optimized web performance, achieving 95+ Lighthouse scores",
      "Participated in daily standups and sprint planning ceremonies",
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "Sass", "Webpack", "Jest"],
  },
]

const education = [
  {
    degree: "B.S. Computer Science",
    school: "University of Technology",
    period: "2016 — 2020",
    details: "Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="text-primary">Experience</span> & Education
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey building scalable applications and leading technical initiatives.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <Card key={exp.role} className="overflow-hidden transition-all hover:shadow-lg animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Building2 className="h-4 w-4" />{exp.company}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span className="flex items-center gap-1"><Globe className="h-4 w-4" />{exp.location}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span className="flex items-center gap-1"><Code className="h-4 w-4" />{exp.period}</span>
                        </div>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <ChevronRight className="h-4 w-4 text-primary/50 mt-0.5 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <Card key={edu.degree} className="animate-in fade-in slide-in-from-right-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <p className="text-muted-foreground mt-1">{edu.school}</p>
                        <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                      </div>
                      <Badge variant="secondary">{edu.period}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}