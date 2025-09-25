"use client"

import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
            Premium mobile detailing
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text text-glow">
              meets exquisite care
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Transform your vehicle into a masterpiece with our professional mobile detailing services. We bring luxury
            to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+19854729439"
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:glow-effect transition-all duration-300 flex items-center gap-2"
            >
              Book Your Service
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="border border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Services
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm">5.0 Rating</span>
            </div>
            <div className="text-sm">
              <span className="text-accent font-semibold">Est. 2024</span>
            </div>
            <div className="text-sm">
              <span className="text-primary font-semibold">Mobile Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
