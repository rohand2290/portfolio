"use client"

const POSTS = [
  {
    title: "Coming Soon",
    date: "",
    category: "Essay",
    excerpt:
      "I'm setting up a proper blogging system. Stay tuned for essays on technology, economics, and life experiences.",
    tags: [],
    readTime: "",
    featured: false,
  },
]

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
  return (
    <section id="publications" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Writing
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Essays
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            My current writings, consisting mainly of thoughts on technology, economics, and my life experiences.
            I hope people can find it useful!
            I've always loved reading random people's blogs on the Internet, so I wanted to make one of my own!
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {POSTS.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
