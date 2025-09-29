"use client"

import { Check, Star } from "lucide-react"

export default function Pricing() {
  const packages = [
    {
      name: "Essential",
      price: "$89",
      description: "Perfect for regular maintenance",
      features: ["Exterior wash & dry", "Interior vacuum", "Dashboard cleaning", "Window cleaning", "Tire shine"],
      popular: false,
    },
    {
      name: "Premium",
      price: "$149",
      description: "Our most popular package",
      features: [
        "Everything in Essential",
        "Clay bar treatment",
        "Premium wax application",
        "Interior deep clean",
        "Leather conditioning",
        "Engine bay cleaning",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$249",
      description: "The ultimate detailing experience",
      features: [
        "Everything in Premium",
        "Paint correction",
        "Ceramic coating application",
        "Headlight restoration",
        "Pet hair removal",
        "Odor elimination treatment",
      ],
      popular: false,
    },
    {
      name: "Paint Correction",
      price: "Starting at $600",
      description: "Restore your vehicle’s shine and remove imperfections. Final cost depends on vehicle size.",
      features: [
        "Full vehicle paint correction",
        "Swirl mark & scratch reduction",
        "Gloss restoration",
        "Customized treatment per vehicle size",
      ],
      popular: true,
    },
  ]

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your vehicle. All services include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 ${
                pkg.popular ? "ring-2 ring-primary glow-effect scale-105" : "hover:glow-effect"
              } transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+19854729439"
                className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:glow-effect"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Book {pkg.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
