import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Target, Eye, Heart, Award, Users, Shield, Truck, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Vintrella Movers | Our Story & Mission",
  description: "Learn about Vintrella Movers - 15+ years of trusted logistics services across India.",
}

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize the safety of your belongings above everything else.",
  },
  { icon: Award, title: "Excellence", description: "We strive for excellence in every move, big or small." },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our ultimate goal and measure of success.",
  },
  { icon: Heart, title: "Integrity", description: "We operate with honesty and transparency in all our dealings." },
]

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "50,000+", label: "Successful Moves" },
  { number: "100+", label: "Cities Covered" },
  { number: "10,000+", label: "Happy Customers" },
]

const trustReasons = [
  "Fully licensed and insured logistics company",
  "Real-time tracking and updates",
  "Trained and background-verified staff",
  "Transparent pricing with no hidden charges",
  "24/7 customer support availability",
  "On-time delivery guarantee",
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Vintrella Movers"
        description="Your trusted partner in logistics for over 15 years."
        backgroundImage="/logistics-warehouse-trucks.jpg"
      />

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 font-serif">
                Moving Lives, Building Trust Since 2007
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                   Vintrella Movers is a premium relocation brand headquartered in Mumbai, committed to redefining the packing and moving experience for individuals and families. Though a new name in the market, Vintrella Movers is built on the strong foundation of <b>Bhardwaj Carrying Corporation</b>, a logistics leader with over 18 years of proven expertise. We take pride in being a reliable and premium brand, delivering top-quality services with a personal touch. Our trained professionals handle your belongings with the utmost care and precision, staying true to our promise
                </p>
                <p>
                  Over the years, we have helped more than 50,000 families and businesses relocate safely across the
                  country.
                </p>
                <p>
                  Today, Vintrella Movers operates across 100+ cities in India with a fleet of modern vehicles and
                  trained professionals.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/bike.jpg"
                  alt="Vintrella Movers team"
                  className="w-full h-full object-cover"
                  style={{ height: "400px" }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Truck className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-primary-foreground/80 text-sm">Fleet Vehicles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4 font-serif">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, reliable, and affordable logistics solutions that exceed customer expectations.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4 font-serif">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted logistics partner, known for innovation, excellence, and customer-centricity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-serif">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img src="/loading_car.jpg" alt="Happy customers" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Trust & Reliability</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 font-serif">
                Why Customers Trust Us
              </h2>
              <ul className="space-y-4">
                {trustReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
