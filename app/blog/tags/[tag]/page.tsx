import Link from "next/link"
import { getAllTags, getPostsByTag } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ tag: string }>
}

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params
  const allTags = getAllTags()
  const tagInfo = allTags.find((t) => t.slug === tagSlug)
  const label = tagInfo?.tag ?? tagSlug

  return {
    title: `Posts tagged "${label}" | Rohan Deshpande`,
    description: `Blog posts about ${label}.`,
  }
}

export default async function TagPage({ params }: PageProps) {
  const { tag: tagSlug } = await params
  const posts = getPostsByTag(tagSlug)
  const allTags = getAllTags()
  const tagInfo = allTags.find((t) => t.slug === tagSlug)
  const label = tagInfo?.tag ?? tagSlug

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>#{label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Tag
        </p>
        <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          {label}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {posts.length} post{posts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <Link href="/blog">
          <Badge variant="outline">All</Badge>
        </Link>
        {allTags.map((t) => (
          <Link key={t.slug} href={`/blog/tags/${t.slug}`}>
            <Badge variant={t.slug === tagSlug ? "default" : "outline"}>
              {t.tag} ({t.count})
            </Badge>
          </Link>
        ))}
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No posts with this tag yet.</p>
      )}
    </div>
  )
}
