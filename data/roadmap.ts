export type RoadmapStatus = "planned" | "in-progress" | "done"
export type RoadmapCategory = "Blog" | "Design" | "Features" | "Performance" | "Content"

export interface RoadmapItem {
  id: string
  title: string
  description: string
  status: RoadmapStatus
  category: RoadmapCategory
}

export const roadmapItems: RoadmapItem[] = [
  // Done
  {
    id: "blog-system",
    title: "Blog system",
    description: "MDX-based blog with tags, reading time, and syntax highlighting.",
    status: "done",
    category: "Blog",
  },
  {
    id: "dark-theme",
    title: "Dark theme",
    description: "Custom dark color scheme with CSS variables and consistent design tokens.",
    status: "done",
    category: "Design",
  },
  {
    id: "tag-pages",
    title: "Tag filtering",
    description: "Tag pages that aggregate posts by topic.",
    status: "done",
    category: "Blog",
  },

  // In Progress
  {
    id: "blog-abstraction",
    title: "Blog content abstraction",
    description: "Decouple the blog data layer from the markdown format so any content source can be swapped in.",
    status: "in-progress",
    category: "Blog",
  },
  {
    id: "public-roadmap",
    title: "Public roadmap",
    description: "This Kanban board — a public view of planned and in-progress site features.",
    status: "in-progress",
    category: "Features",
  },

  // Planned
  {
    id: "rss-feed",
    title: "RSS / Atom feed",
    description: "Auto-generated feed so readers can subscribe to new posts.",
    status: "planned",
    category: "Blog",
  },
  {
    id: "search",
    title: "Full-text search",
    description: "Client-side search across all blog posts.",
    status: "planned",
    category: "Blog",
  },
  {
    id: "og-images",
    title: "Dynamic OG images",
    description: "Auto-generated OpenGraph images for each blog post.",
    status: "planned",
    category: "Blog",
  },
  {
    id: "projects-section",
    title: "Projects section",
    description: "A dedicated page showcasing notable projects with descriptions and links.",
    status: "planned",
    category: "Content",
  },
  {
    id: "light-mode",
    title: "Light mode toggle",
    description: "Optional light theme for readers who prefer it.",
    status: "planned",
    category: "Design",
  },
  {
    id: "reading-progress",
    title: "Reading progress bar",
    description: "A progress indicator at the top of blog posts.",
    status: "planned",
    category: "Features",
  },
]

export const COLUMNS: { status: RoadmapStatus; label: string }[] = [
  { status: "planned", label: "Planned" },
  { status: "in-progress", label: "In Progress" },
  { status: "done", label: "Done" },
]
