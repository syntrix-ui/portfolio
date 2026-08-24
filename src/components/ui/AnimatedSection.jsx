import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "../../lib/utils"

gsap.registerPlugin(ScrollTrigger)

export function AnimatedSection({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  triggerOnce = true,
  ...props
}) {
  const container = useRef(null)

  useGSAP(() => {
    let fromVars = { opacity: 0 }
    let toVars = { opacity: 1, duration, delay, ease: "power2.out" }

    switch (variant) {
      case "fadeUp":
        fromVars.y = 30
        toVars.y = 0
        break
      case "fadeDown":
        fromVars.y = -30
        toVars.y = 0
        break
      case "fadeLeft":
        fromVars.x = -30
        toVars.x = 0
        break
      case "fadeRight":
        fromVars.x = 30
        toVars.x = 0
        break
      case "zoomIn":
        fromVars.scale = 0.95
        toVars.scale = 1
        break
      case "slideUp":
        fromVars.y = 50
        toVars.y = 0
        break
    }

    gsap.fromTo(container.current, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        once: triggerOnce,
      }
    })
  }, { scope: container })

  return (
    <div ref={container} className={cn(className)} {...props}>
      {children}
    </div>
  )
}

export function StaggerContainer({ children, className, staggerDelay = 0.1, ...props }) {
  const container = useRef(null)

  useGSAP(() => {
    // Target all direct children that are elements
    gsap.fromTo(container.current.children, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: staggerDelay, 
        duration: 0.6, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true
        }
      }
    )
  }, { scope: container })

  return (
    <div ref={container} className={cn(className)} {...props}>
      {children}
    </div>
  )
}

export function StaggerItem({ children, className, variant = "fadeUp", ...props }) {
  // We just return a div; StaggerContainer handles the stagger animation.
  return (
    <div className={cn("gsap-stagger-item", className)} {...props}>
      {children}
    </div>
  )
}

export function ScrollReveal({ children, className, ...props }) {
  const container = useRef(null)
  
  useGSAP(() => {
    gsap.fromTo(container.current, 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true
        }
      }
    )
  }, { scope: container })

  return (
    <div ref={container} className={cn(className)} {...props}>
      {children}
    </div>
  )
}