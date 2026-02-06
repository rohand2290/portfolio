"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const nodeCount = 40

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[j].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(56, 189, 248, 0.3)"
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <NetworkCanvas />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, hsl(187 100% 60% / 0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:gap-16 lg:px-12">
        {/* Text content */}
        <div className="animate-fade-in-up flex-1">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Software Engineer
          </p>
          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Rohan
            <br />
            <span className="text-glow text-primary">
              Deshpande
            </span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Math/CS student at UCLA building full-stack systems, containerized
            APIs, and data-driven tools. From modernizing veteran healthcare
            platforms to shipping bioinformatics applications, I write code
            that ships fast and scales well.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="glow-cyan group inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            >
              View Projects
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Headshot */}
        <div className="animate-fade-in-up relative flex-shrink-0">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-lg shadow-primary/10 md:h-80 md:w-80">
            <Image
              src="/images/rohan-headshot.jpg"
              alt="Rohan Deshpande"
              fill
              priority
              className="object-cover object-top"
              style={{ transform: "scale(1.15)" }}
              sizes="(max-width: 768px) 288px, 320px"
            />
          </div>
          {/* Decorative ring */}
          <div
            className="absolute -inset-3 -z-10 rounded-2xl border border-primary/10"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
