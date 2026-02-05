"use client"

import { useState } from "react"

const CATEGORIES = ["All", "Tutorial", "Deep Dive", "Opinion"]

const POSTS = [
  {
    title: "Why I Stopped Trusting Variant Classifiers (And Built My Own)",
    date: "Mar 15, 2024",
    category: "Deep Dive",
    excerpt:
      "After months of inconsistent results from off-the-shelf variant classifiers, I dove into building a custom deep learning framework from scratch. Here's what I learned about the hidden assumptions baked into most genomic ML tools, and why rolling your own might be worth the effort.",
    tags: ["Machine Learning", "Genomics", "Python"],
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "A Practical Guide to Cloud-Native Bioinformatics Pipelines",
    date: "Nov 8, 2023",
    category: "Tutorial",
    excerpt:
      "Bioinformatics pipelines are notoriously fragile. I spent a year migrating our lab's analysis stack to a containerized, event-driven architecture on AWS. This post walks through the entire setup, from Nextflow configs to auto-scaling strategies that actually work with sequencing data.",
    tags: ["AWS", "Docker", "Nextflow"],
    readTime: "8 min read",
    featured: false,
  },
  {
    title: "The Case for Pharmacogenomics in Every Oncology Clinic",
    date: "Sep 22, 2023",
    category: "Opinion",
    excerpt:
      "We have the data. We have the tools. So why are most oncology clinics still prescribing without pharmacogenomic profiling? I argue that the bottleneck isn't science -- it's software, and here's how we fix it.",
    tags: ["Healthcare", "Precision Medicine"],
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Graph Neural Networks for Drug Discovery: A Hands-On Walkthrough",
    date: "Jun 4, 2022",
    category: "Tutorial",
    excerpt:
      "Drug-gene interaction prediction sounds intimidating, but the code doesn't have to be. In this tutorial I walk through building a graph neural network from scratch using PyTorch Geometric, training it on real interaction data, and interpreting what the model actually learns.",
    tags: ["GNN", "PyTorch", "Drug Discovery"],
    readTime: "15 min read",
    featured: true,
  },
  {
    title: "Lessons from Building HIPAA-Compliant NLP at Scale",
    date: "Feb 19, 2022",
    category: "Deep Dive",
    excerpt:
      "Clinical text is messy, sensitive, and full of abbreviations that would confuse any general-purpose NLP model. After shipping a HIPAA-compliant pipeline that processes 50k clinical notes a day, here are the hard lessons I wish someone had told me upfront.",
    tags: ["NLP", "HIPAA", "Clinical Data"],
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "Multi-Omics Integration is Harder Than You Think",
    date: "Oct 11, 2021",
    category: "Opinion",
    excerpt:
      "Everyone talks about multi-omics like it's just a JOIN query across datasets. Spoiler: it's not. I share the messy reality of combining genomic, transcriptomic, and metabolomic data, and why most integration frameworks oversimplify the problem.",
    tags: ["Multi-Omics", "Data Integration"],
    readTime: "7 min read",
    featured: false,
  },
]

function FeaturedPost({ post }: { post: (typeof POSTS)[0] }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-card p-8 transition-all hover:border-primary/40">
      <div className="absolute right-4 top-4 rounded-md bg-primary/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        Featured
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground">{post.date}</span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {post.readTime}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-2xl">
        {post.title}
      </h3>

      <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
          Read post
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
        </span>
      </div>
    </article>
  )
}

function BlogCard({ post }: { post: (typeof POSTS)[0] }) {
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground">{post.date}</span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {post.readTime}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {post.title}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
          Read post
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </article>
  )
}

export default function PublicationsSection() {
  const [filter, setFilter] = useState("All")

  const featured = POSTS.filter((p) => p.featured)
  const regular = filter === "All"
    ? POSTS.filter((p) => !p.featured)
    : POSTS.filter((p) => p.category === filter && !p.featured)

  return (
    <section id="publications" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Writing
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Blog & Essays
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Thoughts on bioinformatics, building tools for science, and the messy reality of working at the intersection of code and biology.
          </p>
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

        {/* Featured posts */}
        {filter === "All" && featured.length > 0 && (
          <div className="mb-6 grid gap-5">
            {featured.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </div>
        )}

        {/* Regular posts grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {regular.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
