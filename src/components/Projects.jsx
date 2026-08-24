import { Github, ExternalLink, Star, Eye } from "lucide-react"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

const projects = [
  {
    title: "TaskFlow",
    description: "A collaborative project management tool with real-time updates, drag-and-drop boards, and team workspaces. Built with React, Node.js, and WebSockets.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Tailwind"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "DevShop",
    description: "Full-stack e-commerce platform with cart, checkout, payment integration, admin dashboard, and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "CodeSync",
    description: "Real-time collaborative code editor with syntax highlighting, multiple cursors, and live preview. Perfect for pair programming.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tags: ["React", "Monaco Editor", "WebRTC", "Node.js", "Redis"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "WeatherNow",
    description: "Beautiful weather dashboard with forecasts, maps, and alerts. Features geolocation, dark mode, and PWA support.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js", "PWA"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "BlogEngine",
    description: "Headless CMS-powered blog with MDX support, syntax highlighting, SEO optimization, and automatic sitemap generation.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    tags: ["Next.js", "MDX", "Tailwind", "Vercel", "Contentlayer"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "API Gateway",
    description: "High-performance API gateway with rate limiting, authentication, logging, and analytics. Built for microservices architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Go", "Docker", "Kubernetes", "Redis", "Prometheus"],
    github: "#",
    demo: "#",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of projects showcasing my skills across full-stack development, 
            system design, and developer tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card 
              key={project.title} 
              className={cn(
                "overflow-hidden transition-all hover:shadow-xl",
                project.featured && "ring-2 ring-primary/20"
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="success" className="text-xs">Featured</Badge>
                  </div>
                )}
              </div>
              <CardContent className="pt-4 pb-2">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4" />
                  <span>{Math.floor(Math.random() * 500) + 50}</span>
                  <Eye className="h-4 w-4 ml-4" />
                  <span>{Math.floor(Math.random() * 2000) + 100}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}