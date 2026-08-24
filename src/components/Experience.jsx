import { Briefcase, Building2, Code, Globe, ChevronRight, Award, GraduationCap, CheckCircle } from "lucide-react"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { cn } from "../lib/utils"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

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

const timelineItems = [
  ...experiences.map(e => ({ ...e, isEdu: false })),
  ...education.map(e => ({ ...e, isEdu: true }))
]

export function Experience() {
  const container = useRef(null)
  const lineRef = useRef(null)
  const itemsRef = useRef([])

  useGSAP(() => {
    // 1. Animate the central glowing spine based on scroll progress
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 0.5, // Smooth scrubbing
        }
      }
    )

    // 2. Animate each timeline card individually as they come into view
    itemsRef.current.forEach((el, index) => {
      if (!el) return;
      const isEven = index % 2 === 0;
      
      // Cards come from the left if they are on the right, and vice versa. 
      // On mobile, everything comes from the left or bottom.
      const isMobile = window.innerWidth < 768;
      const xOffset = isMobile ? 0 : (isEven ? -100 : 100);
      const yOffset = isMobile ? 50 : 0;

      gsap.fromTo(el,
        { opacity: 0, x: xOffset, y: yOffset, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true
          }
        }
      )
    });
  }, { scope: container })

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={container}>
        
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-4">
            <span className="gradient-text italic">Journey</span> & Milestones
          </h2>
          <p className="text-lg text-muted-foreground">
            A cinematic look at my professional experience and education over the years.
          </p>
        </div>

        <div className="relative">
          {/* Central Spine Line (Hidden on Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border/20 -translate-x-1/2 rounded-full hidden md:block" />
          
          {/* Animated Glowing Spine */}
          <div 
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-[hsl(var(--gradient-secondary))] to-[hsl(var(--gradient-accent))] -translate-x-1/2 rounded-full origin-top hidden md:block shadow-[0_0_20px_rgba(var(--primary),0.6)]" 
          />

          <div className="space-y-16 md:space-y-32 py-10 relative">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  ref={el => itemsRef.current[index] = el}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Timeline Node/Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_rgba(var(--primary),0.4)] md:-translate-x-1/2 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.8)]">
                     <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <div className={cn("w-full md:w-1/2", isEven ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16 pl-12 md:pl-0")}>
                    {item.isEdu ? (
                      <EducationCard edu={item} />
                    ) : (
                      <ExperienceCard exp={item} />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

function ExperienceCard({ exp }) {
  return (
    <Card className="overflow-hidden transition-all duration-500 glass-dark border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
      <CardHeader className="pb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        <div className="flex flex-col gap-4 relative z-10">
          <div>
            <CardTitle className="text-3xl font-serif mb-3">{exp.role}</CardTitle>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5 text-primary">
                <Building2 className="h-4 w-4" />
                {exp.company}
              </span>
              <Separator orientation="vertical" className="h-4" />
              <span className="flex items-center gap-1.5">
                <Globe className="h-4 w-4" />
                {exp.location}
              </span>
              <Separator orientation="vertical" className="h-4" />
              <span className="flex items-center gap-1.5">
                <Code className="h-4 w-4" />
                {exp.period}
              </span>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit px-3 py-1 bg-primary/10 text-primary border-primary/20">
            {exp.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {exp.description.map((desc, j) => (
            <li key={j} className="flex items-start gap-3 text-base text-muted-foreground group/item">
              <div className="mt-1 flex-shrink-0 transition-transform duration-300 group-hover/item:translate-x-1">
                <ChevronRight className="h-4 w-4 text-primary" />
              </div>
              <span className="leading-relaxed">{desc}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {exp.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs py-1 px-2.5 bg-background hover:bg-primary/10 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function EducationCard({ edu }) {
  return (
    <Card className="transition-all duration-500 glass hover:shadow-2xl border-border/50 hover:border-primary/30">
      <CardContent className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-inner">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <Badge variant="secondary" className="font-mono">{edu.period}</Badge>
        </div>
        
        <CardTitle className="text-2xl font-serif mb-2">{edu.degree}</CardTitle>
        <p className="text-lg font-medium text-foreground/80 mb-4">{edu.school}</p>
        
        <div className="p-4 rounded-xl bg-background/50 border border-border/50">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {edu.details}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}