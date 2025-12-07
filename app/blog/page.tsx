import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Vintrella Movers | Moving Tips & Logistics Insights",
  description: "Get expert moving tips, packing guides, and logistics insights from Vintrella Movers.",
}

const blogPosts = [
  {
    slug: "complete-house-shifting-guide",
    title: "Complete Guide to Stress-Free House Shifting in India",
    excerpt:
      "Moving to a new home? Here's everything you need to know about planning and executing a smooth house shift.",
    image: "/family-moving-boxes-new-home.jpg",
    date: "November 25, 2024",
    category: "Moving Tips",
  },
  {
    slug: "bike-transport-tips",
    title: "How to Safely Transport Your Bike Across States",
    excerpt: "Learn the best practices for transporting your two-wheeler safely across long distances.",
    image: "/motorcycle-transport-safety-tips.jpg",
    date: "November 20, 2024",
    category: "Bike Transport",
  },
  {
    slug: "packing-fragile-items",
    title: "Expert Tips for Packing Fragile Items During a Move",
    excerpt: "Worried about your delicate possessions? Our experts share professional packing techniques.",
    image: "/packing-fragile-items.jpg",
    date: "November 15, 2024",
    category: "Packing Guide",
  },
  {
    slug: "car-transport-guide",
    title: "Enclosed vs Open Car Transport: Which One to Choose?",
    excerpt: "Confused about car transport options? We break down the pros and cons.",
    image: "/car-transport-options.jpg",
    date: "November 10, 2024",
    category: "Car Transport",
  },
  {
    slug: "moving-with-pets",
    title: "Moving with Pets: A Complete Relocation Guide",
    excerpt: "Relocating with furry friends? Here's how to make the transition smooth.",
    image: "/moving-with-pets.jpg",
    date: "November 5, 2024",
    category: "Moving Tips",
  },
  {
    slug: "cost-saving-tips",
    title: "10 Ways to Save Money on Your Next Move",
    excerpt: "Moving doesn't have to break the bank. Discover smart strategies to reduce costs.",
    image: "/cost-saving-moving-tips.jpg",
    date: "October 30, 2024",
    category: "Budget Tips",
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Our Blog"
        description="Expert tips, guides, and insights to make your moving experience smooth."
        backgroundImage="/blog-header-background.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
