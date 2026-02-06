"use client"

import { useState, useCallback } from "react"
import Image from "next/image"

const PHOTOS: { src: string; title: string; location: string; aspect: "tall" | "wide" }[] = []

function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
}: {
  photo: (typeof PHOTOS)[0]
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose()
        if (e.key === "ArrowLeft") onPrev()
        if (e.key === "ArrowRight") onNext()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${photo.title}`}
      tabIndex={0}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-secondary"
        aria-label="Close lightbox"
      >
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
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-secondary"
        aria-label="Previous photo"
      >
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
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-secondary"
        aria-label="Next photo"
      >
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
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        className="relative max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        role="presentation"
      >
        <Image
          src={photo.src || "/placeholder.svg"}
          alt={photo.title}
          width={1200}
          height={800}
          className="max-h-[80vh] w-auto rounded-lg object-contain"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-foreground">
            {photo.title}
          </h3>
          <p className="text-sm text-muted-foreground">{photo.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function PhotographySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + PHOTOS.length) % PHOTOS.length : null
    )
  }, [])

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % PHOTOS.length : null
    )
  }, [])

  return (
    <section id="photography" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-dna-gold">
            Beyond School
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Landscape Photography
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Sometimes I like to take a day trip on a less busy day and just take some pictures.
            Here are some of my current ones.
            I'm trying to get into photography more and make it more consistent; this and writing are the ways I try to have a creative outlet. 
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.title}
              className="group relative mb-4 cursor-pointer overflow-hidden rounded-lg break-inside-avoid"
              onClick={() => openLightbox(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter") openLightbox(i)
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${photo.title} - ${photo.location}`}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.title}
                width={600}
                height={photo.aspect === "tall" ? 800 : 400}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  photo.aspect === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-sm font-semibold text-foreground">
                  {photo.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photo={PHOTOS[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  )
}
