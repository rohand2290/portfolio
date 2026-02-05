"use client"

import { useState } from "react"

const CATEGORIES = ["All", "Research", "Technical", "Healthcare"]

const PUBLICATIONS = [
  {
    title:
      "Deep Learning Approaches for Genomic Variant Classification in Rare Disease Cohorts",
    date: "2024",
    category: "Research",
    abstract:
      "We present a novel deep learning framework for classifying genomic variants of uncertain significance (VUS) in rare disease patients, achieving state-of-the-art performance across multiple variant types.",
    journal: "Nature Methods",
    citations: 47,
    readTime: "12 min read",
  },
  {
    title:
      "Scalable Microbiome Analysis: A Cloud-Native Pipeline Architecture",
    date: "2023",
    category: "Technical",
    abstract:
      "An overview of our containerized, event-driven pipeline architecture for processing large-scale 16S rRNA and metagenomic sequencing data with auto-scaling capabilities.",
    journal: "Bioinformatics",
    citations: 31,
    readTime: "8 min read",
  },
  {
    title:
      "Pharmacogenomic Profiling for Personalized Oncology Treatment Selection",
    date: "2023",
    category: "Healthcare",
    abstract:
      "Clinical implementation of a pharmacogenomic profiling system that integrates germline and somatic variant data to guide precision oncology treatment decisions.",
    journal: "Journal of Precision Medicine",
    citations: 28,
    readTime: "15 min read",
  },
  {
    title:
      "Graph Neural Networks for Drug-Gene Interaction Prediction",
    date: "2022",
    category: "Research",
    abstract:
      "A graph-based deep learning approach leveraging heterogeneous biological networks to predict novel drug-gene interactions with applications in drug repurposing.",
    journal: "PLOS Computational Biology",
    citations: 63,
    readTime: "10 min read",
  },
  {
    title:
      "Building HIPAA-Compliant NLP Pipelines for Clinical Text Mining",
    date: "2022",
    category: "Technical",
    abstract:
      "Best practices and architectural patterns for deploying natural language processing pipelines that extract structured data from clinical notes while maintaining HIPAA compliance.",
    journal: "Journal of Biomedical Informatics",
    citations: 19,
    readTime: "7 min read",
  },
  {
    title:
      "Multi-Omics Integration for Early Detection of Metabolic Disorders",
    date: "2021",
    category: "Healthcare",
    abstract:
      "A multi-omics integration framework combining genomic, transcriptomic, and metabolomic data for early identification of metabolic disorder risk in pediatric populations.",
    journal: "Genome Medicine",
    citations: 52,
    readTime: "14 min read",
  },
]

function PublicationCard({
  pub,
}: {
  pub: (typeof PUBLICATIONS)[0]
}) {
  return (
    <article className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          {pub.category}
        </span>
        <span className="text-xs text-muted-foreground">{pub.date}</span>
        <span className="text-xs text-muted-foreground">
          {pub.readTime}
        </span>
      </div>

      <h3 className="mb-2 font-serif text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {pub.title}
      </h3>

      <p className="mb-4 text-sm italic text-muted-foreground">
        {pub.journal}
      </p>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {pub.abstract}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          Cited by {pub.citations}
        </div>
        <button
          type="button"
          className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
        >
          Read Paper
        </button>
      </div>
    </article>
  )
}

export default function PublicationsSection() {
  const [filter, setFilter] = useState("All")

  const filtered =
    filter === "All"
      ? PUBLICATIONS
      : PUBLICATIONS.filter((p) => p.category === filter)

  return (
    <section id="publications" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Academic Work
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Publications & Writing
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((pub) => (
            <PublicationCard key={pub.title} pub={pub} />
          ))}
        </div>
      </div>
    </section>
  )
}
