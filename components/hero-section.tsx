import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562886695-0f3c22a48bbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-optima">
              Transformons vos Jardins Marocains
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 font-light">
              Conception • Construction • Entretien
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold px-6 py-2 text-base"
                >
                  Nous Contacter
                </Button>
              </Link>
              <Link href="tel:+212660805555" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 font-semibold px-6 py-2 text-base"
                >
                  +212 660‑805555
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
