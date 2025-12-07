import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

const blogPosts: Record<
  string,
  {
    title: string
    excerpt: string
    image: string
    date: string
    category: string
    author: string
    readTime: string
    content: string[]
  }
> = {
  "complete-house-shifting-guide": {
    title: "Complete Guide to Stress-Free House Shifting in India",
    excerpt: "Moving to a new home? Here's everything you need to know.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "November 25, 2024",
    category: "Moving Tips",
    author: "Vintrella Team",
    readTime: "8 min read",
    content: [
      "Moving to a new home is one of life's most exciting yet stressful experiences. In this guide, we'll walk you through everything.",
      "## Planning Your Move\n\nStart planning 4-6 weeks in advance. Create a checklist and assess what to take.",
      "## Choosing the Right Company\n\nLook for licensed, insured companies with positive reviews. Get 3-4 quotes.",
      "## Packing Like a Pro\n\nStart with items you use least. Use quality materials and label boxes clearly.",
      "## Moving Day Tips\n\nKeep important documents with you. Conduct a final walkthrough.",
      "## Settling In\n\nUnpack systematically. Update your address with banks and government offices.",
    ],
  },
  "bike-transport-tips": {
    title: "How to Safely Transport Your Bike Across States",
    excerpt: "Learn the best practices for transporting your two-wheeler safely.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "November 20, 2024",
    category: "Bike Transport",
    author: "Vintrella Team",
    readTime: "6 min read",
    content: [
      "Transporting your motorcycle requires careful planning.",
      "## Preparing Your Bike\n\nClean your bike, document its condition, drain fuel to 1/4, and disconnect the battery.",
      "## Choosing a Service\n\nLook for specialized services with enclosed carriers and insurance coverage.",
      "## Documentation\n\nKeep RC book, insurance papers, and PUC certificate ready.",
      "## What to Expect\n\nProfessional transporters will inspect and document your bike before loading.",
      "## Receiving Your Bike\n\nInspect thoroughly upon delivery before signing any documents.",
    ],
  },
  "packing-fragile-items": {
    title: "Expert Tips for Packing Fragile Items",
    excerpt: "Professional packing techniques for delicate possessions.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "November 15, 2024",
    category: "Packing Guide",
    author: "Vintrella Team",
    readTime: "7 min read",
    content: [
      "Fragile items require special attention during a move.",
      "## Essential Materials\n\nInvest in sturdy boxes, bubble wrap, packing paper, and foam peanuts.",
      "## Packing Glassware\n\nWrap each piece individually. Place heavier items at bottom.",
      "## Electronics\n\nUse original packaging if possible. Back up all data.",
      "## Artwork and Mirrors\n\nUse corner protectors and picture boxes. Never lay flat.",
      "## Final Tips\n\nDon't overpack boxes. Use 'THIS SIDE UP' labels.",
    ],
  },
  "car-transport-guide": {
    title: "Enclosed vs Open Car Transport",
    excerpt: "Pros and cons of enclosed and open carriers.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "November 10, 2024",
    category: "Car Transport",
    author: "Vintrella Team",
    readTime: "5 min read",
    content: [
      "You have two main options: open and enclosed carriers.",
      "## Open Transport\n\nMost common and affordable. Suitable for everyday vehicles.",
      "## Enclosed Transport\n\nComplete protection from weather. Ideal for luxury and classic cars.",
      "## Cost Comparison\n\nOpen is typically 30-40% less expensive.",
      "## When to Choose What\n\nChoose open for regular vehicles, enclosed for valuables.",
      "## Making Your Decision\n\nAssess value, budget, and weather conditions.",
    ],
  },
  "moving-with-pets": {
    title: "Moving with Pets: A Complete Guide",
    excerpt: "Make the transition smooth for your furry friends.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "November 5, 2024",
    category: "Moving Tips",
    author: "Vintrella Team",
    readTime: "6 min read",
    content: [
      "Moving can be stressful for pets.",
      "## Before the Move\n\nVisit your vet, get medical records, update microchip info.",
      "## Packing with Pets\n\nMaintain routine. Keep toys and bedding accessible.",
      "## Moving Day\n\nKeep pets in a quiet room. Transport in proper carriers.",
      "## Settling In\n\nSet up their space first. Keep them indoors initially.",
      "## Signs of Stress\n\nWatch for hiding, appetite changes. Be patient.",
    ],
  },
  "cost-saving-tips": {
    title: "10 Ways to Save Money on Your Move",
    excerpt: "Smart strategies to reduce moving costs.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "October 30, 2024",
    category: "Budget Tips",
    author: "Vintrella Team",
    readTime: "5 min read",
    content: [
      "Moving doesn't have to empty your wallet.",
      "## Declutter\n\nThe less you move, the less you pay. Sell or donate items.",
      "## Get Multiple Quotes\n\nCompare at least 3-4 companies.",
      "## Choose the Right Time\n\nAvoid peak seasons. Book in advance.",
      "## Pack Yourself\n\nDIY packing saves money. Collect free boxes.",
      "## More Tips\n\nMaximize space. Ship heavy items separately. Ask about discounts.",
    ],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return { title: "Post Not Found" }
  return { title: `${post.title} - Vintrella Movers Blog`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) notFound()

  return (
    <>
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/80" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <span className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 font-serif max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-12">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <article className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <div key={index} className="mb-6">
                  {paragraph.startsWith("##") ? (
                    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4 font-serif">
                      {paragraph.replace("## ", "")}
                    </h2>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
                  )}
                </div>
              ))}
            </article>
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="font-semibold text-foreground">Share this article:</span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-2 bg-muted rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-muted rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-muted rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4 font-serif">Ready to Move?</h3>
              <p className="text-primary-foreground/80 mb-6">Get a free quote from Vintrella Movers today!</p>
              <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
