import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { ContentSource, RawPost } from "../content-source"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export const markdownSource: ContentSource = {
  getRawPosts(): RawPost[] {
    if (!fs.existsSync(BLOG_DIR)) return []

    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
      .map((filename) => {
        const slug = filename.replace(/\.(mdx|md)$/, "")
        const filePath = path.join(BLOG_DIR, filename)
        const raw = fs.readFileSync(filePath, "utf-8")
        const { data, content } = matter(raw)
        return { slug, frontmatter: data, content }
      })
  },

  getRawPost(slug: string): RawPost | null {
    for (const ext of [".mdx", ".md"]) {
      const filePath = path.join(BLOG_DIR, `${slug}${ext}`)
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8")
        const { data, content } = matter(raw)
        return { slug, frontmatter: data, content }
      }
    }
    return null
  },
}
