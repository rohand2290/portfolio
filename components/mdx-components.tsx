import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-primary/20 bg-primary/5 px-5 py-4">
      <div className="flex gap-3">
        <span className="mt-0.5 text-lg text-primary" aria-hidden="true">
          &#x1f4a1;
        </span>
        <div className="flex-1 text-sm leading-relaxed text-muted-foreground [&>p]:m-0">
          {children}
        </div>
      </div>
    </div>
  )
}

export const mdxComponents: MDXComponents = {
  Callout,

  h1: ({ children, id, ...props }) => (
    <h1
      id={id}
      className="mt-10 mb-4 scroll-mt-20 font-serif text-3xl font-bold text-foreground md:text-4xl"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, id, ...props }) => (
    <h2
      id={id}
      className="mt-10 mb-3 scroll-mt-20 font-serif text-2xl font-bold text-foreground"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, id, ...props }) => (
    <h3
      id={id}
      className="mt-8 mb-3 scroll-mt-20 font-serif text-xl font-semibold text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),

  h4: ({ children, id, ...props }) => (
    <h4
      id={id}
      className="mt-6 mb-2 scroll-mt-20 font-serif text-lg font-semibold text-foreground"
      {...props}
    >
      {children}
    </h4>
  ),

  p: ({ children, ...props }) => (
    <p className="mb-5 leading-relaxed text-muted-foreground" {...props}>
      {children}
    </p>
  ),

  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http")
    if (isExternal) {
      return (
        <a
          href={href}
          className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link
        href={href ?? "#"}
        className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
        {...props}
      >
        {children}
      </Link>
    )
  },

  ul: ({ children, ...props }) => (
    <ul className="mb-5 list-disc space-y-1.5 pl-6 text-muted-foreground" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol className="mb-5 list-decimal space-y-1.5 pl-6 text-muted-foreground" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-2 border-primary/40 pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),

  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }) => (
    <thead className="border-b border-border bg-secondary/50" {...props}>
      {children}
    </thead>
  ),

  th: ({ children, ...props }) => (
    <th className="px-4 py-2.5 text-left font-medium text-foreground" {...props}>
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td className="px-4 py-2.5 text-muted-foreground" {...props}>
      {children}
    </td>
  ),

  code: ({ children, className, ...props }) => {
    // Inline code (no className from rehype-pretty-code)
    if (!className) {
      return (
        <code
          className="rounded-md border border-border bg-secondary/50 px-1.5 py-0.5 font-mono text-sm text-foreground"
          {...props}
        >
          {children}
        </code>
      )
    }
    // Code blocks are handled by pre + rehype-pretty-code
    return (
      <code className={cn(className, "font-mono")} {...props}>
        {children}
      </code>
    )
  },

  pre: ({ children, ...props }) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-[#0d1117] p-4 text-sm leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),

  img: ({ src, alt, ...props }) => (
    <Image
      src={src ?? ""}
      alt={alt ?? ""}
      width={800}
      height={450}
      className="my-6 rounded-lg"
      unoptimized
      {...props}
    />
  ),

  hr: (props) => <hr className="my-8 border-border" {...props} />,

  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
}
