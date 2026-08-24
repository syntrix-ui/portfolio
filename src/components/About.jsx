import { Users, Award, BookOpen, Heart } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { cn } from "../lib/utils"

const stats = [
  { value: "3+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Projects Completed", icon: BookOpen },
  { value: "20+", label: "Happy Clients", icon: Users },
  { value: "100%", label: "Commitment", icon: Heart },
]

const features = [
  {
    title: "Clean Code Advocate",
    description: "I write maintainable, well-tested code following best practices and design patterns. Code reviews and refactoring are part of my workflow.",
  },
  {
    title: "User-Centric Design",
    description: "Every feature starts with the user in mind. I collaborate closely with designers to create intuitive, accessible interfaces.",
  },
  {
    title: "Continuous Learner",
    description: "Tech evolves fast. I stay current with new frameworks, tools, and methodologies through courses, open source, and side projects.",
  },
  {
    title: "Team Player",
    description: "Strong communicator who thrives in collaborative environments. Experience with agile workflows, mentoring, and cross-functional teams.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Full stack developer with a passion for building scalable web applications. 
            I specialize in React, Node.js, and cloud-native architectures.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <Card key={stat.label} className="text-center transition-all hover:shadow-lg animate-in fade-in zoom-in-95 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <CardContent className="py-6">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <Card key={feature.title} className="transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card border border-border rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center">My Journey</h3>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
            <p>
              Started my journey as a self-taught developer building small websites for local businesses. 
              The joy of turning ideas into interactive experiences hooked me instantly.
            </p>
            <p>
              Over the years, I've worked with startups and established companies, 
              shipping products used by thousands of users. Each project taught me something new — 
              from optimizing database queries to designing resilient distributed systems.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source, 
              writing technical articles, or experimenting with new technologies. 
              I believe in giving back to the community that helped me grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}