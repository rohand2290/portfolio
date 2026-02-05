"use client"

const EXPERIENCES = [
  {
    date: "Sep 2025 - Present",
    title: "Software Engineering Intern",
    company: "VetsEZ Inc. -- San Diego, CA",
    description: [
      "Modernized access for 1000+ users by engineering Spring Boot/OData APIs to integrate VistA systems",
      "Enhanced responsiveness, cutting latency by 30% by rebuilding legacy FileMan access with PostgreSQL layers",
      "Slashed deployment time by 75% by containerizing services with Docker and orchestrating via Kubernetes",
      "Reduced API downtime by 15% by configuring Kubernetes auto-scaling and Swagger documentation standards",
    ],
    badges: ["Spring Boot", "Kubernetes", "Docker"],
    side: "right" as const,
  },
  {
    date: "Jul 2025 - Sep 2025",
    title: "Software Engineering Intern",
    company: "Drexel University -- Philadelphia, PA",
    description: [
      "Shipped a Next.js/Tailwind application enabling sequence exploration with 100+ monthly queries",
      "Improved generation efficiency of association graphs in JSON by engineering a Dockerized ETL with FastAPI",
      "Accelerated downstream development by analyzing a 10,000+ protein dataset using Jupyter and pandas",
    ],
    badges: ["Next.js", "FastAPI", "Docker"],
    side: "left" as const,
  },
  {
    date: "May 2024 - Jun 2024",
    title: "Student Researcher",
    company: "Drexel University -- Philadelphia, PA",
    description: [
      "Surfaced glutathionylation patterns across 1000+ proteins with Python/pandas to guide follow-up analysis",
      "Delivered Express routes with validation at 120-250 ms latency and Postman collections",
      "Prototyped a TypeScript/React explorer with querying across 6,000+ sequences",
      "Authored detailed documentation and presented findings to academic advisors",
    ],
    badges: ["Python", "React", "Express"],
    side: "right" as const,
  },
  {
    date: "2024 - Present",
    title: "B.S. Mathematics / Computer Science",
    company: "University of California, Los Angeles",
    description: [
      "GPA: 3.73 -- Expected graduation June 2028",
      "Coursework in algorithms, data structures, linear algebra, and probability",
    ],
    badges: ["UCLA", "Math/CS"],
    side: "left" as const,
  },
]

function TimelineEntry({
  entry,
  index,
}: {
  entry: (typeof EXPERIENCES)[0]
  index: number
}) {
  const isLeft = entry.side === "left"

  return (
    <div className="relative grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
      {/* Left content */}
      <div
        className={`${isLeft ? "md:text-right" : "md:order-3"} ${
          !isLeft ? "md:text-left" : ""
        }`}
      >
        {isLeft ? (
          <TimelineCard entry={entry} />
        ) : (
          <div className="hidden items-center justify-end md:flex">
            <span className="text-sm font-medium text-primary">
              {entry.date}
            </span>
          </div>
        )}
      </div>

      {/* Center line with node */}
      <div className="relative flex flex-col items-center">
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-card">
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>
        {index < EXPERIENCES.length - 1 && (
          <div className="hidden w-px flex-1 bg-gradient-to-b from-primary/50 to-border md:block" />
        )}
      </div>

      {/* Right content */}
      <div
        className={`${!isLeft ? "" : "md:order-1"} ${
          isLeft ? "hidden md:block" : ""
        }`}
      >
        {!isLeft ? (
          <TimelineCard entry={entry} />
        ) : (
          <div className="hidden items-center md:flex">
            <span className="text-sm font-medium text-primary">
              {entry.date}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function TimelineCard({ entry }: { entry: (typeof EXPERIENCES)[0] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30">
      <span className="mb-2 inline-block text-sm font-medium text-primary md:hidden">
        {entry.date}
      </span>
      <h3 className="text-lg font-bold text-foreground">{entry.title}</h3>
      <p className="mb-3 text-sm text-muted-foreground">{entry.company}</p>
      <ul className="mb-4 space-y-1.5">
        {entry.description.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {entry.badges.map((badge) => (
          <span
            key={badge}
            className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Career Path
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((entry, i) => (
            <TimelineEntry
              key={entry.title}
              entry={entry}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
