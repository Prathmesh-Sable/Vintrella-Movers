import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/logistics-trucks-highway-fleet-professional-moving.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/60 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
            <Award className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Trusted by 10,000+ Customers</span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)" }}
          >
            <span className="font-serif">"We Care Your Valuables"</span>
            <br />
            <span className="text-white text-2xl m-10">-Vintrella Movers</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-xl text-white leading-relaxed mb-8 max-w-2xl"
            style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.7)" }}
          >
            We move your world safely and efficiently. Experience hassle-free relocation with India's most trusted
            logistics partner.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 font-semibold shadow-xl"
            >
              <Link href="/contact">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 text-lg px-8 bg-primary/50 backdrop-blur-md shadow-lg"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3 bg-primary/50 backdrop-blur-md px-4 py-3 rounded-xl">
              <div className="p-2 bg-white/20 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">100% Secure</p>
                <p className="text-white/90 text-sm">Fully Insured</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary/50 backdrop-blur-md px-4 py-3 rounded-xl">
              <div className="p-2 bg-white/20 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">On-Time</p>
                <p className="text-white/90 text-sm">Delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary/50 backdrop-blur-md px-4 py-3 rounded-xl">
              <div className="p-2 bg-white/20 rounded-lg">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">15+ Years</p>
                <p className="text-white/90 text-sm">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  )
}
