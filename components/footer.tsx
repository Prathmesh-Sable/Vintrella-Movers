import Link from "next/link"
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
]

const services = [
  { href: "/services#house-shifting", label: "House Shifting" },
  { href: "/services#bike-transport", label: "Bike Transport" },
  { href: "/services#car-transport", label: "Car Transport" },
]

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "https://www.instagram.com/sharmaji_4346?igsh=ZzBtbHFjemx0eXBt", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/rahul-sharma-93765b284?utm_source=share_via&utm_content=profile&utm_medium=member_ios", icon: Linkedin, label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Vintrella Movers</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for safe, reliable, and efficient logistics solutions across India.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Silver park, Taloja Phase 1,
                  <br />
                   Sector 2, Taloja, Navi Mumbai, Maharashtra 410208
                </span>
              </li>
              <li>
                <a
                  href="tel:+919152314525"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  +91 91523 14525
                </a>
              </li>
              <li>
                <a
                  href="mailto:vintrellamovers@gmail.com "
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  vintrellamovers@gmail.com 
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Vintrella Movers. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
