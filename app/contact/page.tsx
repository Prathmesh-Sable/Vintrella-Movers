import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Vintrella Movers | Get a Free Quote",
  description:
    "Contact Vintrella Movers for a free quote on house shifting, bike transport, and car transport services.",
}

const contactInfo = [
  { icon: Phone, title: "Phone", details: ["+91 91523 14525", "+91 91526 14525"], action: "tel:+91 9152614525" },
  {
    icon: Mail,
    title: "Email",
    details: ["vintrellamovers@gmail.com"],
    action: "mailto:vintrellamovers@gmail.com",
  },
  { icon: MapPin, title: "Office Address", details: ["Silver park, Taloja Phase 1, Sector 2, Taloja, Navi Mumbai, Maharashtra 410208"] },
  { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 6:00 PM"] },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with us for a free quote or any queries."
        backgroundImage="/contact-office-map.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">Get In Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions? Need a quote? We're here to help!
              </p>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {info.action ? (
                            <a href={info.action} className="hover:text-secondary transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 aspect-video rounded-xl overflow-hidden relative flex items-center justify-center">
                <img src="/QR.png" alt="Review" className="w-auto h-full object-cover object-center transition-transform duration-300 hover:scale-105 " />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-2 font-serif">Request a Free Quote</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
