import { Shield, Clock, Users, Award, MapPin, Headphones } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Professional Staff",
    description: "Trained and experienced team handling your belongings with care and expertise.",
  },
  {
    icon: Clock,
    title: "Quick Delivery",
    description: "Timely pickup and delivery with real-time tracking for complete peace of mind.",
  },
  {
    icon: Shield,
    title: "Safe Handling",
    description: "Premium packing materials and secure transportation for damage-free delivery.",
  },
  {
    icon: MapPin,
    title: "All-India Service",
    description: "Extensive network covering all major cities and towns across India.",
  },
  {
    icon: Award,
    title: "Competitive Pricing",
    description: "Transparent pricing with no hidden charges. Best value for quality service.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you at every step of your move.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/loading_truck.jpg"
                alt="Vintrella Movers professional team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 font-serif">
              Your Trusted Logistics Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 15 years of experience in the logistics industry, we have perfected the art of safe and
              efficient transportation. Our commitment to excellence has made us the preferred choice for thousands of
              customers.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
