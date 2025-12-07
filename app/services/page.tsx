import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Home, Bike, Car, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services - Vintrella Movers | House Shifting, Bike & Car Transport",
  description:
    "Explore our comprehensive logistics services including house shifting, bike transport, and car transport.",
}

const services = [
  {
    id: "house-shifting",
    icon: Home,
    title: "House Shifting",
    image: "/professional-movers-packing-household-furniture.jpg",
    description: "Complete household relocation services designed to make your move stress-free.",
    features: [
      "Professional packing with high-quality materials",
      "Careful handling of fragile items",
      "Systematic labeling and inventory",
      "Safe loading and unloading",
      "Unpacking at destination",
      "Temporary storage available",
      "Insurance coverage",
    ],
    process: [
      { step: "1", title: "Survey & Quote", desc: "Free home survey and transparent pricing" },
      { step: "2", title: "Packing", desc: "Professional packing" },
      { step: "3", title: "Transport", desc: "Safe transportation" },
      { step: "4", title: "Delivery", desc: "Careful unpacking" },
    ],
  },
  {
    id: "bike-transport",
    icon: Bike,
    title: "Bike Transport",
    image: "/motorcycle-transport-carrier-truck.jpg",
    description: "Specialized two-wheeler transportation ensuring your bike reaches safely.",
    features: [
      "Enclosed carrier protection",
      "Custom padding and securing",
      "Door-to-door pickup/delivery",
      "Real-time GPS tracking",
      "Insurance coverage",
      "All bike types handled",
      "Express delivery available",
    ],
    process: [
      { step: "1", title: "Booking", desc: "Easy online booking" },
      { step: "2", title: "Pickup", desc: "Doorstep pickup" },
      { step: "3", title: "Secure", desc: "Professional securing" },
      { step: "4", title: "Deliver", desc: "Safe delivery" },
    ],
  },
  {
    id: "car-transport",
    icon: Car,
    title: "Car Transport",
    image: "/car-transport-carrier-truck-enclosed.jpg",
    description: "Premium car carrier services with enclosed and open carrier options.",
    features: [
      "Enclosed and open options",
      "Zero-damage guarantee",
      "Pan-India coverage",
      "Professional drivers",
      "Comprehensive insurance",
      "Live tracking",
      "Flexible schedules",
    ],
    process: [
      { step: "1", title: "Quote", desc: "Instant quote" },
      { step: "2", title: "Secure", desc: "Professional Securing" },
      { step: "3", title: "Transport", desc: "Secure transport" },
      { step: "4", title: "Handover", desc: "Final inspection" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive logistics solutions tailored to your needs."
        backgroundImage="/logistics-fleet-highway.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                    <service.icon className="h-10 w-10" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">
                      Get Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-16 bg-muted rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-serif">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {service.process.map((step, stepIndex) => (
                    <div key={step.step} className="text-center relative">
                      <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                      {stepIndex < service.process.length - 1 && (
                        <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-border" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
