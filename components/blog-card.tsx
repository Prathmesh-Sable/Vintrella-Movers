import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

export default function BlogCard({ slug, title, excerpt, image, date, category }: BlogCardProps) {
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
      {/* Image */}
      <Link href={`/blog/${slug}`} className="block relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
