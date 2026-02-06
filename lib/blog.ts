import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  tags: string[]
  readTime: string
  published: boolean
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(raw)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "Post",
      tags: (data.tags as string[]) ?? [],
      readTime: stats.text,
      published: data.published !== false,
    } satisfies BlogPostMeta
  })

  return posts
    .filter((p) => p.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "Post",
    tags: (data.tags as string[]) ?? [],
    readTime: stats.text,
    published: data.published !== false,
    content,
  }
}

export function getAllTags(): { tag: string; slug: string; count: number }[] {
  const posts = getAllPosts()
  const tagMap = new Map<string, { tag: string; count: number }>()

  for (const post of posts) {
    for (const tag of post.tags) {
      const tagSlug = slugifyTag(tag)
      const existing = tagMap.get(tagSlug)
      if (existing) {
        existing.count++
      } else {
        tagMap.set(tagSlug, { tag, count: 1 })
      }
    }
  }

  return Array.from(tagMap.entries())
    .map(([slug, { tag, count }]) => ({ tag, slug, count }))
    .sort((a, b) => b.count - a.count)
}

export function getPostsByTag(tagSlug: string): BlogPostMeta[] {
  return getAllPosts().filter((post) =>
    post.tags.some((t) => slugifyTag(t) === tagSlug)
  )
}
