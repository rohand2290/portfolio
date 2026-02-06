"use client"

import Link from "next/link"
import { BlogCard } from "@/components/blog-card"
import type { BlogPostMeta } from "@/lib/blog"

const PLACEHOLDER = {
  title: "Coming Soon",
  slug: "",
  date: "",
  category: "Essay",
  excerpt:
    "I'm setting up a proper blogging system. Stay tuned for essays on technology, economics, and life experiences.",
  tags: [] as string[],
  readTime: "",
  published: true,
}

export default function PublicationsSection({
  posts,
}: {
  posts?: BlogPostMeta[]
}) {
  const hasPosts = posts && posts.length > 0

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
            My current writings, consisting mainly of thoughts on technology,
            economics, and my life experiences. I hope people can find it useful!
            I've always loved reading random people's blogs on the Internet, so I
            wanted to make one of my own!
          </p>
        </div>

        {hasPosts ? (
          <>
            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                View all posts
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
              </Link>
            </div>
          </>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            <article className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {PLACEHOLDER.category}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                {PLACEHOLDER.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {PLACEHOLDER.excerpt}
              </p>
            </article>
          </div>
        )}
      </div>
    </section>
  )
}
