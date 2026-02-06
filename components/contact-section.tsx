"use client"

const LINKS = [
  {
    label: "Email",
    href: "mailto:rbdeshpande@ucla.edu",
    value: "rbdeshpande [at] ucla [dot] edu",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/rohand2290",
    value: "github.com/rohand2290",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohan-deshpande-423b36235/",
    value: "linkedin.com/in/rohan-deshpande",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/rohand2290",
    value: "x.com/rohand2290",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Reach Out
        </p>
        <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
          Connect
        </h2>
        <p className="mx-auto mb-12 max-w-md text-muted-foreground">
          Interested in distributed systems/healthtech, thought any of my articles were interesting, or would like to suggest me new photo spots? Let's connect. 
        </p>

        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                {link.icon}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  {link.label}
                </p>
                <p className="text-xs text-muted-foreground">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            Designed & built with React, Three.js, and Tailwind CSS
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rohan Deshpande. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
