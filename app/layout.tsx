import React from "react"
import type { Metadata, Viewport } from "next"
import { IBM_Plex_Sans, Playfair_Display, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "Rohan Deshpande | Software Engineer",
  description:
    "Portfolio of Rohan Deshpande — software engineer building at the intersection of systems, data, and full-stack development.",
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
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${playfairDisplay.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
