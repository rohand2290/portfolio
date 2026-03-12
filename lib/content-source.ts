export interface RawPost {
  slug: string
  frontmatter: Record<string, unknown>
  content: string
}

export interface ContentSource {
  getRawPosts(): RawPost[]
  getRawPost(slug: string): RawPost | null
}
