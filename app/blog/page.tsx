import Link from "next/link"
import { getAllPosts, getAllTags, slugifyTag } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog | Rohan Deshpande",
  description:
    "Essays on technology, economics, and life experiences.",
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Writing
        </p>
        <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          Essays
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          My current writings, consisting mainly of thoughts on technology,
          economics, and my life experiences.
        </p>
      </div>

      {tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <Link href="/blog">
            <Badge variant="default">All</Badge>
          </Link>
          {tags.map((t) => (
            <Link key={t.slug} href={`/blog/tags/${t.slug}`}>
              <Badge variant="outline">
                {t.tag} ({t.count})
              </Badge>
            </Link>
          ))}
        </div>
      )}

      {posts.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No posts yet. Stay tuned!</p>
      )}
    </div>
  )
}
