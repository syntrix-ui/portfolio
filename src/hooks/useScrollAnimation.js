import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.unobserve(element)
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return [elementRef, isVisible]
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setProgress(Math.min(Math.max(scrollPercent, 0), 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return progress
}

export function useActiveSection(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveId(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset])

  return activeId
}