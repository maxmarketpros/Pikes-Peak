import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"
import { defaultMetadata } from "@/lib/seo"
// import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/app/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/app/apple-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B00020" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pikes Peak Co-op" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#B00020" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
