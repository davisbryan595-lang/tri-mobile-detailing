"use client"

import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2Fe1f1d1f5587d48f6ab6869cb400c4cab?format=webp&width=800" alt="Tri Mobile Detail" width={40} height={40} className="rounded-full" />
              <span className="ml-3 text-xl font-serif font-bold text-foreground">Tri Mobile Detail</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Premium mobile car detailing services bringing luxury and convenience to your doorstep. Established 2024.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="text-accent font-semibold">Est. 2024</span>
              <span>•</span>
              <span>Licensed & Insured</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Exterior Detailing</li>
              <li>Interior Cleaning</li>
              <li>Ceramic Coating</li>
              <li>Paint Correction</li>
              <li>Odor Removal</li>
              <li>Headlight Restoration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+19854729439"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (985) 472-9439
              </a>
              <a
                href="mailto:info@trimobiledetail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@trimobiledetail.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Greater New Orleans Area
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Tri Mobile Detail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
