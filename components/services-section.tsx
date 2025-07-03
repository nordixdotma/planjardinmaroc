import SectionTitle from "./section-title"
import { Leaf, Wrench, Scissors } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Nos Services"
          subtitle="Nous fournissons des solutions d'aménagement paysager complètes adaptées au climat unique du Maroc et aux préférences esthétiques."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-optima">Conception Paysagère</h3>
            <p className="text-gray-600 leading-relaxed">
              Concepts de jardins 2D et 3D, sélection de plantes, planification d'aménagement adaptée au climat et à
              l'esthétique marocains.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-optima">Construction de Jardins</h3>
            <p className="text-gray-600 leading-relaxed">
              Plantation professionnelle, pavage, systèmes d'irrigation et installation d'éclairage avec des matériaux
              de qualité.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Scissors className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-optima">Entretien</h3>
            <p className="text-gray-600 leading-relaxed">
              Services d'entretien régulier incluant la taille, l'entretien des pelouses, le nettoyage saisonnier et la
              santé continue du jardin.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
