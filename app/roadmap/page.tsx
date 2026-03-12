import Link from "next/link"
import { roadmapItems, COLUMNS } from "@/data/roadmap"
import type { Metadata } from "next"
import type { RoadmapCategory } from "@/data/roadmap"

export const metadata: Metadata = {
  title: "Roadmap | Rohan Deshpande",
  description: "Public feature roadmap for this site — what's planned, in progress, and shipped.",
}

const categoryColors: Record<RoadmapCategory, string> = {
  Blog: "bg-primary/10 text-primary border-primary/20",
  Design: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  Features: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Performance: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Content: "bg-chart-5/10 text-chart-5 border-chart-5/20",
}

const columnStyles: Record<string, { header: string; dot: string; count: string }> = {
  planned: {
    header: "text-muted-foreground",
    dot: "bg-muted-foreground",
    count: "bg-secondary text-muted-foreground",
  },
  "in-progress": {
    header: "text-chart-3",
    dot: "bg-chart-3",
    count: "bg-chart-3/10 text-chart-3",
  },
  done: {
    header: "text-chart-2",
    dot: "bg-chart-2",
    count: "bg-chart-2/10 text-chart-2",
  },
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
          <Link
            href="/"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Rohan Deshpande
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/roadmap"
              className="text-sm text-foreground"
            >
              Roadmap
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Portfolio
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Site Roadmap
          </p>
          <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            What&apos;s being built
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A public board tracking features I want to add to this site. Updated as things move.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {COLUMNS.map(({ status, label }) => {
            const items = roadmapItems.filter((i) => i.status === status)
            const styles = columnStyles[status]

            return (
              <div key={status} className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
                  <span className={`text-sm font-semibold uppercase tracking-wider ${styles.header}`}>
                    {label}
                  </span>
                  <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-medium ${styles.count}`}>
                    {items.length}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-border/80 hover:bg-card/80"
                    >
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-foreground leading-snug">
                          {item.title}
                        </h3>
                        <span
                          className={`shrink-0 rounded border px-1.5 py-0.5 text-xs font-medium ${categoryColors[item.category]}`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}

                  {items.length === 0 && (
                    <div className="rounded-lg border border-dashed border-border p-4 text-center">
                      <p className="text-xs text-muted-foreground">Nothing here yet</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
