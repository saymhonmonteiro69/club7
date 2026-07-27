import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Club 7 & Club 7 Turbo | Tvlar Motos Yamaha",
  description:
    "Conquiste sua Yamaha 0km com o Club 7 e Club 7 Turbo da Tvlar Motos. Aprovação rápida, sem burocracia e condições especiais mesmo com nome negativado. Simule agora no WhatsApp.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#003399",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
