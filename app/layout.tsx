import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Listopad Cloud - Облачная Инфраструктура",
  description: "Надёжная Облачная Платформа для Масштабируемого Бизнеса",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
