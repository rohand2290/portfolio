"use client"

import { useRef } from "react"

const PROJECTS = [
  {
    title: "Schemaloom",
    description:
      "LLM-powered schema extraction tool that converts unstructured data into validated JSON using Langchain and Gemini. Ships as a RESTful API with a Docker image for seamless CI/CD integration.",
    tech: ["TypeScript", "Zod", "Docker", "Hono", "Langchain"],
    gradient: "from-blue-600/20 to-cyan-600/20",
    borderColor: "border-blue-500/30",
  },
  {
    title: "Bruin Bites",
    description:
      "LLM-powered cross-platform app that generates budget-conscious recipes using Langchain and RAG for nutritional and pricing extraction. Led a team using Agile methodologies.",
    tech: ["Express", "Langchain", "MongoDB", "React Native", "Expo"],
    gradient: "from-emerald-600/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
  },
  {
    title: "CytoFlow",
    description:
      "Automated Cytoscape network visualization pipeline built with FastAPI, cutting processing time by 80% and standardizing SVG outputs. Dockerized for scalability with Pydantic validation.",
    tech: ["FastAPI", "Java", "py4cytoscape", "Docker", "Git"],
    gradient: "from-amber-600/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
  },
  {
    title: "GlutaView",
    description:
      "Full-stack bioinformatics tool for exploring a 10,000+ protein dataset. Features a Next.js REST layer, React/Tailwind UI, and PostgreSQL with caching that boosted query performance by 40%.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Jupyter"],
    gradient: "from-rose-600/20 to-pink-600/20",
    borderColor: "border-rose-500/30",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-xl border ${project.borderColor} bg-gradient-to-br ${project.gradient} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5`}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-bold text-foreground">
          {project.title}
        </h3>
        <span className="text-xs text-muted-foreground">
          0{index + 1}
        </span>
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-card/60 px-2.5 py-1 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Hover reveal */}
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        View Details
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            What I{"'"}ve Built
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
