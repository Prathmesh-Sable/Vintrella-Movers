import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Vintrella Movers - Fast, Safe & Reliable Logistics",
  description:
    "Vintrella Movers provides professional house shifting, bike transport, and car transport services across India. Get a free quote today!",
  keywords: "logistics, movers, packers, house shifting, bike transport, car transport, relocation services, India",
  authors: [{ name: "Vintrella Movers" }],
  generator: "v0.app",
  openGraph: {
    title: "Vintrella Movers - Fast, Safe & Reliable Logistics",
    description: "We move your world safely and efficiently. Professional logistics services across India.",
    type: "website",
    locale: "en_IN",
    siteName: "Vintrella Movers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintrella Movers - Fast, Safe & Reliable Logistics",
    description: "We move your world safely and efficiently.",
  },
  robots: {
    index: true,
    follow: true,
  },
 icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#0A1A5F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "Vintrella Movers",
              description: "Professional logistics and moving services across India",
              url: "https://vintrellamovers.com",
              telephone: "+91-9876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Logistics Hub",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400001",
                addressCountry: "IN",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "20:00",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
