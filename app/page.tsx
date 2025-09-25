import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen pt-14 md:pt-16">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
