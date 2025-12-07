"use client"

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const reviews = [
  {
    name: "Prathmesh Sable",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review:
      "Had a very good experience with Vintrella movers. The team, especially Rahul, was supportive and kept me updated throughout the process. My bike was delivered safely on the promised date. Overall great experience 👍",
    date: "2 weeks ago",
    avatar: "/Prathmesh_Sable.png",
  },
  {
    name: "Libin Mathew",
    location: "Jaipur, Rajasthan",
    rating: 5,
    review:
      "I had transferred my bike from Mumbai to Jaipur via them through truck. The bike was packed nicely from Mumbai and i recieved my bike with out any scratch. I would recommend that if you want to transfer your bike or furniture you'll can trust them. Special thanks to rahul for always keeping me in loop bout the tracking of my bike till the time it reaches jaipur.",
    date: "a week ago",
    avatar: "/Libin_Mathew.png",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review:
      "Transported my car from Ahmedabad to Pune. The enclosed carrier kept my car safe. Very professional service!",
    date: "3 weeks ago",
    avatar: "/indian-businessman-headshot.jpg",
  },
  {
    name: "Kunal Aggarwal",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review: "Rahul is very professional and order received in good time, he also gives real time update and he also make sure that the customer is well informed. Earlier I waa confused because I never send anything to other state, but the process went smooth. Thanks Rahul and team.",
    date: "1 week ago",
    avatar: "/Kunal_Aggrawal.png",
  },
  {
    name: "Aayush Shrivastava",
    location: "Jaipur, Rajasthan",
    rating: 5,
    review: "It has been a great experience in moving my vehicle from one location to another with them !",
    date: "5 days ago",
    avatar: "/Aayush_Shrivastava.png",
  },
  {
    name: "Suneeth Natarajan",
    location: "Banglore, Karnataka",
    rating: 5,
    review: "Vintrella moved my son's bike to Bangalore. Rahul Sharma coordinated the whole process without as surprises. The delivery was made in four days. Very impressed. Wishing them the very best.",
    date: "2 days ago",
    avatar: "/Suneeth_natarajan.png",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, reviews.length - slidesToShow)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don't just take our word for it. See what our satisfied customers have to say.
          </p>
        </div>

        {/* Google Rating Summary */}
        <div className="flex justify-center mb-12">
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border inline-flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">4.9</div>
              <div className="flex mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <p className="font-semibold text-foreground">Google Reviews</p>
              <p className="text-muted-foreground text-sm">Based on 100+ reviews</p>
            </div>
          </div>
        </div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card hover:bg-primary hover:text-white text-foreground p-3 rounded-full shadow-lg border border-border transition-all duration-300 hidden md:flex items-center justify-center"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card hover:bg-primary hover:text-white text-foreground p-3 rounded-full shadow-lg border border-border transition-all duration-300 hidden md:flex items-center justify-center"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Reviews Slider */}
          <div className="overflow-hidden mx-0 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / slidesToShow}%` }}>
                  <div className="bg-card p-6 rounded-xl shadow-lg border border-border h-full relative">
                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                        <p className="text-muted-foreground text-sm">{review.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-muted-foreground text-sm">{review.date}</span>
                    </div>
                    <p className="text-card-foreground leading-relaxed">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={prevSlide}
              className="bg-card hover:bg-primary hover:text-white text-foreground p-3 rounded-full shadow-lg border border-border transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-card hover:bg-primary hover:text-white text-foreground p-3 rounded-full shadow-lg border border-border transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
