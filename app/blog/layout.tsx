import Link from "next/link"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-12">
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
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Portfolio
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
