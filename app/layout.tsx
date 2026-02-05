import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: "Bioinformatics Portfolio | Bridging Biology & Computation",
  description:
    "Portfolio of a bioinformatics and healthcare professional working at the intersection of biology, data, and code.",
}

export const viewport: Viewport = {
  themeColor: "#0a1628",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
