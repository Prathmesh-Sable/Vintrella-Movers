"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-primary"
                  : "bg-white/20 backdrop-blur-sm border border-white/30"
              }`}
            >
              <img
                src={isScrolled ? "/logo.png" : "/logo.png"}
                alt="Vintrella Logo"
                width={24}
                height={24}
                className="object-contain"
              />

              <span
                className={`text-lg font-bold tracking-tight ${
                  isScrolled ? "text-white" : "text-white drop-shadow-md"
                }`}
              >
                Vintrella Movers
              </span>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  isScrolled ? "text-foreground" : "text-white drop-shadow-sm"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+9191523 14525"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-sm"
              }`}
            >
              <Phone className="h-4 w-4" />
              +91 91523 14525
            </a>
            <Button
              asChild
              className={`${isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`}
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border rounded-b-xl shadow-lg">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <a href="tel:+919152314525" className="flex items-center gap-2 text-foreground">
                  <Phone className="h-4 w-4" />
                  +91 91523 14525
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
