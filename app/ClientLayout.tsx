"use client" // This makes the component a Client Component

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0)
  }, [pathname]) // Re-run effect whenever the pathname changes

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
