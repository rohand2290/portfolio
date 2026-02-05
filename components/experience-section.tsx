"use client"

const EXPERIENCES = [
  {
    date: "2022 - Present",
    title: "Senior Bioinformatics Engineer",
    company: "Genomics Health Institute",
    description: [
      "Lead development of clinical genomic analysis pipelines processing 500+ samples daily",
      "Architected cloud-native variant calling infrastructure on AWS, reducing analysis time by 60%",
      "Collaborate with clinical geneticists to translate computational findings into actionable reports",
    ],
    badges: ["Leadership", "Cloud Architecture"],
    side: "right" as const,
  },
  {
    date: "2020 - 2022",
    title: "Bioinformatics Scientist",
    company: "PharmaTech Research Labs",
    description: [
      "Developed machine learning models for drug-target interaction prediction (AUC 0.94)",
      "Built automated NGS data processing workflows using Nextflow and Docker",
      "Published 4 peer-reviewed papers on computational pharmacogenomics",
    ],
    badges: ["Machine Learning", "Publications"],
    side: "left" as const,
  },
  {
    date: "2018 - 2020",
    title: "Research Associate",
    company: "Center for Precision Medicine",
    description: [
      "Performed whole-genome and RNA-seq analysis for rare disease cohort studies",
      "Created interactive visualization dashboards for multi-omics data integration",
      "Contributed to open-source bioinformatics tools (500+ GitHub stars)",
    ],
    badges: ["Open Source", "Multi-omics"],
    side: "right" as const,
  },
  {
    date: "2016 - 2018",
    title: "Graduate Research Assistant",
    company: "University of California - Computational Biology Lab",
    description: [
      "Thesis: Deep learning approaches for protein structure prediction",
      "Developed novel algorithms for sequence alignment optimization",
      "Teaching assistant for graduate-level bioinformatics courses",
    ],
    badges: ["PhD Research", "Teaching"],
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
