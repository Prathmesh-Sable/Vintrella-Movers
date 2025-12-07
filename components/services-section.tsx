import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Bike, Car, ArrowRight } from "lucide-react"

const services = [
  {
    title: "House Shifting",
    description:
      "Complete household relocation with professional packing, loading, and safe delivery. We handle your belongings with utmost care.",
    icon: Home,
    image: "/professional-movers-packing-household-items-boxes.jpg",
    href: "/services#house-shifting",
  },
  {
    title: "Bike Transport",
    description:
      "Safe and secure two-wheeler transportation across India. Your bike reaches its destination without a scratch.",
    icon: Bike,
    image: "/motorcycle-bike-transport-carrier-truck.jpg",
    href: "/services#bike-transport",
  },
  {
    title: "Car Transport",
    description:
      "Door-to-door car carrier services with enclosed and open carrier options. Your vehicle is in safe hands.",
    icon: Car,
    image: "/car-transport-carrier-truck-automobile-shipping.jpg",
    href: "/services#car-transport",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-serif">Our Premium Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            From household goods to vehicles, we provide comprehensive logistics solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 p-3 bg-card rounded-lg shadow-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Button asChild variant="link" className="p-0 text-secondary hover:text-primary">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
