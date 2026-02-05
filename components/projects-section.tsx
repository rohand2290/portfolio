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
    metrics: [
      { label: "Deploy Errors", value: "-25%" },
      { label: "Format", value: "JSON" },
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Bruin Bites",
    description:
      "LLM-powered cross-platform app that generates budget-conscious recipes using Langchain and RAG for nutritional and pricing extraction. Led a team using Agile methodologies.",
    tech: ["Express", "Langchain", "MongoDB", "React Native", "Expo"],
    gradient: "from-emerald-600/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
    metrics: [
      { label: "Dev Efficiency", value: "+30%" },
      { label: "Platform", value: "iOS/Web" },
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z"
        />
      </svg>
    ),
  },
  {
    title: "CytoFlow",
    description:
      "Automated Cytoscape network visualization pipeline built with FastAPI, cutting processing time by 80% and standardizing SVG outputs. Dockerized for scalability with Pydantic validation.",
    tech: ["FastAPI", "Java", "py4cytoscape", "Docker", "Git"],
    gradient: "from-amber-600/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
    metrics: [
      { label: "Processing", value: "-80%" },
      { label: "Output", value: "SVG" },
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    title: "GlutaView",
    description:
      "Full-stack bioinformatics tool for exploring a 10,000+ protein dataset. Features a Next.js REST layer, React/Tailwind UI, and PostgreSQL with caching that boosted query performance by 40%.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Jupyter"],
    gradient: "from-rose-600/20 to-pink-600/20",
    borderColor: "border-rose-500/30",
    metrics: [
      { label: "Query Perf", value: "+40%" },
      { label: "Proteins", value: "10K+" },
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
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
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/60 text-primary">
            {project.icon}
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {project.title}
          </h3>
        </div>
        <span className="text-xs text-muted-foreground">
          0{index + 1}
        </span>
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="mb-5 flex gap-6">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-xl font-bold text-foreground">{metric.value}</p>
            <p className="text-xs text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

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
