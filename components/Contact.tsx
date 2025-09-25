"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today to schedule your premium mobile detailing service. We bring the luxury to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <a
                  href="tel:+19854729439"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Call Us</div>
                    <div className="text-muted-foreground">(985) 472-9439</div>
                  </div>
                </a>

                <a
                  href="mailto:info@trimobiledetail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email Us</div>
                    <div className="text-muted-foreground">info@trimobiledetail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Service Area</div>
                    <div className="text-muted-foreground">Greater New Orleans Area</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Hours</div>
                    <div className="text-muted-foreground">Mon-Sat: 8AM-6PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Book Your Service</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Package</label>
                <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                  <option>Essential - $89</option>
                  <option>Premium - $149</option>
                  <option>Luxury - $249</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  placeholder="Tell us about your vehicle and any specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-3 rounded-lg font-semibold hover:glow-effect transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
