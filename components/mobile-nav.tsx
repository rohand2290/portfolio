"use client"

const SECTIONS = [
  { id: "hero", label: "Home", color: "#38bdf8" },
  { id: "projects", label: "Projects", color: "#3b82f6" },
  { id: "experience", label: "Experience", color: "#ef4444" },
  { id: "publications", label: "Blog", color: "#22c55e" },
  { id: "photography", label: "Photography", color: "#eab308" },
  { id: "contact", label: "Contact", color: "#38bdf8" },
]

export default function MobileNav({
  activeSection,
  onSectionClick,
}: {
  activeSection: string
  onSectionClick: (id: string) => void
}) {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-card/90 px-3 py-2 backdrop-blur-md lg:hidden">
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSectionClick(section.id)}
            className="relative flex flex-col items-center gap-0.5 rounded-full px-2 py-1 transition-all"
            aria-label={`Navigate to ${section.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <div
              className="h-2 w-2 rounded-full transition-all"
              style={{
                backgroundColor: section.color,
                boxShadow: isActive
                  ? `0 0 8px ${section.color}, 0 0 16px ${section.color}80`
                  : "none",
                transform: isActive ? "scale(1.5)" : "scale(1)",
              }}
            />
            <span
              className="text-[9px] font-medium transition-opacity"
              style={{
                color: isActive ? section.color : "hsl(215 20% 55%)",
                opacity: isActive ? 1 : 0.7,
              }}
            >
              {section.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
