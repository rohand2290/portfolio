"use client"

import { useRef } from "react"

const PROJECTS = [
  {
    title: "GenomeScope",
    description:
      "End-to-end genomic variant calling pipeline using deep learning. Processes raw sequencing data through quality control, alignment, and variant detection with 99.2% accuracy.",
    tech: ["Python", "TensorFlow", "GATK", "Nextflow", "AWS"],
    gradient: "from-blue-600/20 to-cyan-600/20",
    borderColor: "border-blue-500/30",
    metrics: [
      { label: "Accuracy", value: "99.2%" },
      { label: "Samples/Day", value: "500+" },
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
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.772.13c-1.687.282-3.393.413-5.113.413s-3.426-.131-5.114-.413l-.771-.13c-1.717-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "PharmaPredict",
    description:
      "Machine learning platform for drug-gene interaction prediction. Leverages graph neural networks to identify potential adverse drug reactions before clinical trials.",
    tech: ["PyTorch", "R", "Neo4j", "Docker", "FastAPI"],
    gradient: "from-emerald-600/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
    metrics: [
      { label: "Interactions", value: "1.2M" },
      { label: "AUC Score", value: "0.94" },
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
  {
    title: "MicrobiomeAtlas",
    description:
      "Interactive visualization platform for human microbiome data. Maps microbial communities across body sites with taxonomic and functional profiling dashboards.",
    tech: ["React", "D3.js", "QIIME2", "PostgreSQL", "Go"],
    gradient: "from-amber-600/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
    metrics: [
      { label: "Species Mapped", value: "15K" },
      { label: "Active Users", value: "2.3K" },
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
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "ClinicalNLP",
    description:
      "Natural language processing engine for extracting structured data from clinical notes. Automates phenotype identification from electronic health records with HIPAA compliance.",
    tech: ["Python", "spaCy", "BERT", "Elasticsearch", "FHIR"],
    gradient: "from-rose-600/20 to-pink-600/20",
    borderColor: "border-rose-500/30",
    metrics: [
      { label: "F1 Score", value: "0.91" },
      { label: "Notes Processed", value: "2M+" },
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
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
            Research & Development
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
