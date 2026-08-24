import { Users, Award, BookOpen, Heart, Zap, Shield, Globe, Code2 } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { cn } from "../lib/utils"
import { AnimatedSection, StaggerContainer } from "./ui/AnimatedSection"

const stats = [
  { value: "3+", label: "Years Experience", icon: Award, color: "from-yellow-500 to-orange-500" },
  { value: "50+", label: "Projects Completed", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
  { value: "20+", label: "Happy Clients", icon: Users, color: "from-green-500 to-emerald-500" },
  { value: "100%", label: "Commitment", icon: Heart, color: "from-red-500 to-pink-500" },
]

const features = [
  {
    title: "Clean Code Advocate",
    description: "I write maintainable, well-tested code following best practices and design patterns. Code reviews and refactoring are part of my workflow.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "User-Centric Design",
    description: "Every feature starts with the user in mind. I collaborate closely with designers to create intuitive, accessible interfaces.",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Continuous Learner",
    description: "Tech evolves fast. I stay current with new frameworks, tools, and methodologies through courses, open source, and side projects.",
    icon: Zap,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Team Player",
    description: "Strong communicator who thrives in collaborative environments. Experience with agile workflows, mentoring, and cross-functional teams.",
    icon: Shield,
    color: "from-orange-500 to-red-500",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <AnimatedSection variant="fadeRight">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-serif mb-6">
                About <span className="gradient-text italic">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Full stack developer with a passion for building scalable web applications.
                I specialize in React, Node.js, and cloud-native architectures.
              </p>
              
              <div className="hidden lg:block mt-12 w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </AnimatedSection>
          </div>

          {/* Right Column: Scrolling Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* The Journey */}
            <AnimatedSection variant="fadeUp" delay={0.2}>
               <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                 <Code2 className="h-6 w-6 text-primary" />
                 My Journey
               </h3>
               <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                 <p className="mb-4 text-lg leading-relaxed">
                  Started my journey as a self-taught developer building small websites for local businesses.
                  The joy of turning ideas into interactive experiences hooked me instantly.
                 </p>
                 <p className="mb-4 text-lg leading-relaxed">
                  Over the years, I've worked with startups and established companies,
                  shipping products used by thousands of users. Each project taught me something new —
                  from optimizing database queries to designing resilient distributed systems.
                 </p>
                 <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me contributing to open source,
                  writing technical articles, or experimenting with new technologies.
                  I believe in giving back to the community that helped me grow.
                 </p>
               </div>
            </AnimatedSection>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="gsap-stagger-item">
                  <StatCard stat={stat} />
                </div>
              ))}
            </StaggerContainer>

            {/* Features */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="gsap-stagger-item h-full">
                  <FeatureCard feature={feature} />
                </div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }) {
  return (
    <Card className="text-center p-6 sm:p-8 glass hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
           style={{ background: `linear-gradient(135deg, ${stat.color.replace("from-", "").replace("to-", "")}40, transparent)` }} />
      <CardContent className="relative py-0">
        <div className={cn("w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6", `bg-gradient-to-br ${stat.color}`)}>
          <stat.icon className="h-8 w-8 text-white" />
        </div>
        <div className="text-4xl sm:text-5xl font-bold mb-2 font-serif text-foreground">
          {stat.value}
        </div>
        <div className="text-sm sm:text-base font-medium text-muted-foreground">
          {stat.label}
        </div>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ feature }) {
  return (
    <Card className="p-8 glass hover:shadow-2xl transition-all duration-300 h-full group border-border/50 hover:border-primary/20">
      <div className={cn("w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2", `bg-gradient-to-br ${feature.color}`)}>
        <feature.icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </Card>
  )
}