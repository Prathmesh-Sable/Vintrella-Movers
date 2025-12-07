import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import ReviewsSection from "@/components/reviews-section"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Vintrella Movers | Home",
  description:
    "Vintrella Movers offers professional house shifting, bike transport, and car transport services across India. Get a free quote today!",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <CTASection />
    </>
  )
}
