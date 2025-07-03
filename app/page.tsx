import Header from "@/components/header"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import FloatingContact from "@/components/floating-contact"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingContact />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <Testimonials />

      <Footer />
    </div>
  )
}
