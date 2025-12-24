import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaaSFlow - AI-Powered Subscription & Billing Platform",
  description: "Intelligent subscription management platform with AI-driven insights, automated billing, and global payment processing.",
  keywords: ["SaaS", "subscription", "billing", "AI", "analytics", "payments"],
  authors: [{ name: "SaaSFlow Team" }],
  openGraph: {
    title: "SaaSFlow - AI-Powered Subscription Platform",
    description: "Transform your subscription business with AI-driven insights and automated billing.",
    url: "https://saasflow.com",
    siteName: "SaaSFlow",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SaaSFlow Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSFlow - AI-Powered Subscription Platform",
    description: "Transform your subscription business with AI-driven insights.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}