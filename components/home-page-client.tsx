"use client"

import dynamic from "next/dynamic"
import { useActiveSection } from "@/hooks/use-active-section"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import PublicationsSection from "@/components/publications-section"
import PhotographySection from "@/components/photography-section"
import ContactSection from "@/components/contact-section"
import MobileNav from "@/components/mobile-nav"
import type { BlogPostMeta } from "@/lib/blog"

const DNAHelixNav = dynamic(() => import("@/components/dna-helix-nav"), {
  ssr: false,
})

export default function HomePageClient({
  latestPosts,
}: {
  latestPosts: BlogPostMeta[]
}) {
  const { activeSection, scrollProgress, scrollToSection } = useActiveSection()

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* DNA Helix Navigation - Desktop */}
      <DNAHelixNav
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        onSectionClick={scrollToSection}
      />

      {/* Mobile Navigation */}
      <MobileNav
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main Content */}
      <main className="lg:ml-[15%]">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <PublicationsSection posts={latestPosts} />
        <PhotographySection />
        <ContactSection />
      </main>
    </>
  )
}
