"use client"

import { Car, Droplets, Shield, Sparkles, Wind, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Exterior Wash & Wax",
      description: "Complete exterior cleaning with premium wax protection for lasting shine.",
      image: "/luxury-car-exterior-detailing-wash-and-wax.jpg",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Interior Deep Clean",
      description: "Thorough interior cleaning including seats, carpets, and dashboard detailing.",
      image: "/luxury-car-interior-deep-cleaning-detailing.jpg",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ceramic Coating",
      description: "Advanced ceramic protection for ultimate paint preservation and gloss.",
      image: "/ceramic-coating-car-paint-protection.jpg",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Paint Correction",
      description: "Professional polishing to remove swirls and restore paint perfection.",
      image: "/car-paint-correction-polishing-detailing.jpg",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Odor Removal",
      description: "Complete odor elimination using professional-grade treatments.",
      image: "/car-interior-odor-removal-treatment.jpg",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Headlight Restoration",
      description: "Restore clarity and brightness to yellowed or foggy headlights.",
      image: "/headlight-restoration-car-detailing.jpg",
    },
  ]

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Our Premium Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our comprehensive mobile detailing services, designed to exceed your
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:glow-effect transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 text-primary-foreground">{service.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
