import { Github, ExternalLink, Star, Eye, Search, Tag } from "lucide-react"
import { useState, useMemo } from "react"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { cn } from "../lib/utils"
import { StaggerContainer, AnimatedSection } from "./ui/AnimatedSection"

const projects = [
  {
    title: "TaskFlow",
    description: "A collaborative project management tool with real-time updates, drag-and-drop boards, and team workspaces. Built with React, Node.js, and WebSockets.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Tailwind"],
    github: "#",
    demo: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "DevShop",
    description: "Full-stack e-commerce platform with cart, checkout, payment integration, admin dashboard, and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true,
    category: "E-Commerce",
  },
  {
    title: "CodeSync",
    description: "Real-time collaborative code editor with syntax highlighting, multiple cursors, and live preview. Perfect for pair programming.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tags: ["React", "Monaco Editor", "WebRTC", "Node.js", "Redis"],
    github: "#",
    demo: "#",
    featured: false,
    category: "Developer Tools",
  },
  {
    title: "WeatherNow",
    description: "Beautiful weather dashboard with forecasts, maps, and alerts. Features geolocation, dark mode, and PWA support.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js", "PWA"],
    github: "#",
    demo: "#",
    featured: false,
    category: "Web App",
  },
  {
    title: "BlogEngine",
    description: "Headless CMS-powered blog with MDX support, syntax highlighting, SEO optimization, and automatic sitemap generation.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    tags: ["Next.js", "MDX", "Tailwind", "Vercel", "Contentlayer"],
    github: "#",
    demo: "#",
    featured: false,
    category: "Web App",
  },
  {
    title: "API Gateway",
    description: "High-performance API gateway with rate limiting, authentication, logging, and analytics. Built for microservices architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Go", "Docker", "Kubernetes", "Redis", "Prometheus"],
    github: "#",
    demo: "#",
    featured: false,
    category: "Backend",
  },
]

const categories = ["All", ...new Set(projects.map(p => p.category))]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" variant="fadeUp">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-serif mb-4">
            Selected <span className="gradient-text italic">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of projects showcasing my skills across full-stack development,
            system design, and developer tooling.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-10" variant="fadeUp" delay={0.2}>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-background border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all shadow-sm"
              />
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer key={activeCategory + searchQuery} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(420px,auto)]">
          {filteredProjects.map((project) => (
            <div 
              key={project.title}
              className={cn("gsap-stagger-item group", project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1")}
            >
              <ProjectCard project={project} />
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20 bg-background/50 rounded-3xl border border-border/50 backdrop-blur-sm">
              <Tag className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search query</p>
            </div>
          )}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-16" variant="fadeUp" delay={0.4}>
          <Button variant="outline" size="xl" asChild className="rounded-full text-base">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects
              <Github className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col",
        project.featured ? "ring-1 ring-primary/20 gradient-border bg-gradient-to-br from-background to-muted/20" : "border-border/50 bg-background/50 backdrop-blur-sm"
      )}
    >
      <div className={cn("relative overflow-hidden", project.featured ? "h-64 sm:h-80 lg:h-96" : "h-48 sm:h-56")}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
        
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="text-sm px-3 py-1 gap-1.5 shadow-xl backdrop-blur-md bg-background/80">
              <Star className="h-3.5 w-3.5 text-primary" />
              Featured
            </Badge>
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-2">
            <button className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                Code
              </a>
            </button>
            <button className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-sm text-white/80 font-medium">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4" />
              <span>{Math.floor(Math.random() * 500) + 50}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              <span>{Math.floor(Math.random() * 2000) + 100}</span>
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className={cn("flex-grow flex flex-col pt-6", project.featured ? "px-6 sm:px-8" : "px-5")}>
        <h3 className={cn("font-serif font-bold mb-3", project.featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          {project.title}
        </h3>
        <p className="text-base text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs py-1 px-2.5 bg-background/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}