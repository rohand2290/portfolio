"use client"

import { useState } from "react"

const CATEGORIES = ["All", "Tutorial", "Deep Dive", "Opinion"]

const POSTS = [
  {
    title: "How I Slashed Deployment Time by 75% with Kubernetes",
    date: "Dec 10, 2025",
    category: "Deep Dive",
    excerpt:
      "At VetsEZ, our Spring Boot services took forever to ship. I containerized everything with Docker and orchestrated deployments via Kubernetes with auto-scaling. What used to take an afternoon now takes minutes. Here's the full breakdown of the migration, the gotchas with OData APIs, and why I'll never deploy without K8s again.",
    tags: ["Kubernetes", "Docker", "Spring Boot"],
    readTime: "10 min read",
    featured: true,
  },
  {
    title: "Building a Protein Sequence Explorer with Next.js and FastAPI",
    date: "Sep 20, 2025",
    category: "Tutorial",
    excerpt:
      "During my internship at Drexel, I built a full-stack app that lets researchers query and explore protein sequences. The frontend is Next.js with Tailwind, the backend is a Dockerized FastAPI ETL that generates association graphs in JSON. I walk through the architecture and the dataset analysis that informed the design.",
    tags: ["Next.js", "FastAPI", "Bioinformatics"],
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "Using Langchain and RAG to Build a Budget-Friendly Recipe App",
    date: "Jun 15, 2025",
    category: "Tutorial",
    excerpt:
      "For Bruin Bites, my team and I used Langchain with retrieval-augmented generation to parse recipes, estimate costs, and extract nutritional info. This post covers prompt design iteration, the cross-platform Expo/React Native setup, and how Agile kept us shipping week over week.",
    tags: ["Langchain", "RAG", "React Native"],
    readTime: "9 min read",
    featured: false,
  },
  {
    title: "Why Legacy Systems Deserve Better APIs",
    date: "Nov 3, 2025",
    category: "Opinion",
    excerpt:
      "VistA is a decades-old system that thousands of veterans depend on. Modernizing its access layer with Spring Boot and PostgreSQL instead of ripping it out taught me that good engineering is often about bridging the old and the new, not replacing it.",
    tags: ["APIs", "PostgreSQL", "Healthcare"],
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Schema Extraction with LLMs: Turning Messy Data into Clean JSON",
    date: "Apr 8, 2025",
    category: "Deep Dive",
    excerpt:
      "Schemaloom started as a side project to solve a real pain point: getting structured JSON out of unstructured text. I used Langchain with Gemini and Zod for runtime validation. Here's how the Docker image works, the testing pipeline I set up, and what I learned about LLM reliability.",
    tags: ["LLMs", "Zod", "TypeScript"],
    readTime: "11 min read",
    featured: false,
  },
  {
    title: "Automating Cytoscape Workflows Saved Me 80% of My Time",
    date: "Jul 22, 2024",
    category: "Tutorial",
    excerpt:
      "Manually running Cytoscape for network visualization was eating hours every week. I wrote a FastAPI wrapper around py4cytoscape, Dockerized it, and added Pydantic validation. Now what took an hour runs in minutes, with standardized SVG outputs every time.",
    tags: ["FastAPI", "Automation", "Docker"],
    readTime: "8 min read",
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

  const filtered = filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter)
  const featured = filtered.filter((p) => p.featured)
  const regular = filtered.filter((p) => !p.featured)

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
            Thoughts on systems engineering, shipping software, and what I learn building tools across healthcare, bioinformatics, and full-stack development.
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
        {featured.length > 0 && (
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
