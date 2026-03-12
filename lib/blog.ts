import readingTime from "reading-time"
import type { ContentSource, RawPost } from "./content-source"
import { markdownSource } from "./sources/markdown-source"

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

function rawToMeta(raw: RawPost): BlogPostMeta {
  const fm = raw.frontmatter
  const stats = readingTime(raw.content)
  return {
    slug: raw.slug,
    title: (fm.title as string) ?? raw.slug,
    date: (fm.date as string) ?? "",
    excerpt: (fm.excerpt as string) ?? "",
    category: (fm.category as string) ?? "Post",
    tags: (fm.tags as string[]) ?? [],
    readTime: stats.text,
    published: fm.published !== false,
  }
}

export function getAllPosts(source: ContentSource = markdownSource): BlogPostMeta[] {
  return source
    .getRawPosts()
    .map(rawToMeta)
    .filter((p) => p.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(
  slug: string,
  source: ContentSource = markdownSource
): BlogPost | null {
  const raw = source.getRawPost(slug)
  if (!raw) return null
  return { ...rawToMeta(raw), content: raw.content }
}

export function getAllTags(
  source: ContentSource = markdownSource
): { tag: string; slug: string; count: number }[] {
  const posts = getAllPosts(source)
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

export function getPostsByTag(
  tagSlug: string,
  source: ContentSource = markdownSource
): BlogPostMeta[] {
  return getAllPosts(source).filter((post) =>
    post.tags.some((t) => slugifyTag(t) === tagSlug)
  )
}
