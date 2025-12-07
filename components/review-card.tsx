import { Star } from "lucide-react"

interface ReviewCardProps {
  name: string
  location: string
  rating: number
  review: string
  date: string
  avatar: string
}

export default function ReviewCard({ name, location, rating, review, date, avatar }: ReviewCardProps) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
      {/* Google Style Header */}
      <div className="flex items-center gap-4 mb-4">
        <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-card-foreground">{name}</h4>
          <p className="text-muted-foreground text-sm">{location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
          ))}
        </div>
        <span className="text-muted-foreground text-sm">{date}</span>
      </div>

      {/* Review Text */}
      <p className="text-card-foreground leading-relaxed">{review}</p>
    </div>
  )
}
