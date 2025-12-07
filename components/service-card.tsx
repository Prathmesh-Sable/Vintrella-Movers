import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  image: string
  href: string
}

export default function ServiceCard({ title, description, icon: Icon, image, href }: ServiceCardProps) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        <div className="absolute bottom-4 left-4 p-3 bg-background rounded-lg shadow-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <Button asChild variant="link" className="p-0 text-secondary hover:text-primary">
          <Link href={href}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
