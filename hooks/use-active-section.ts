"use client"

import { useState, useEffect, useCallback } from "react"

const SECTION_IDS = [
  "hero",
  "projects",
  "experience",
  "publications",
  "photography",
  "contact",
]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return { activeSection, scrollProgress, scrollToSection }
}
