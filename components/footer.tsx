import type React from "react"
import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg font-optima">PJ</span>
                </div>
                <span className="ml-2 font-optima font-bold text-xl text-white">Plan Jardin Maroc</span>
              </div>
            </Link>
            <p className="mt-3 md:mt-4 text-gray-100 text-sm md:text-base">
              Spécialisé dans l'aménagement paysager, la conception de jardins, l'installation de systèmes d'irrigation
              et l'entretien d'espaces verts au Maroc.
            </p>
            <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-6">
              <SocialLink href="https://www.instagram.com/plan_jardin_maroc/" icon={<Instagram size={16} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4 font-optima">Liens Rapides</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <FooterLink href="/">Accueil</FooterLink>
              <FooterLink href="#about">À Propos</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#gallery">Galerie</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4 font-optima">Contactez-Nous</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5 text-gray-100 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Rabat, Maroc</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 text-gray-100" />
                <span className="text-sm md:text-base">+212 660-805555</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5 text-gray-100" />
                <span className="text-sm md:text-base">planjardin.pj@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row md:justify-between text-xs md:text-sm text-gray-100">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Plan Jardin Maroc. Tous droits réservés.
          </p>
          <p className="text-center md:text-left mt-2 md:mt-0">
            Développé et conçu par{" "}
            <Link href="https://www.instagram.com/nordix.ma" className="hover:underline" target="_blank">
              <span className="text-black font-bold">NORDIX</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

type SocialLinkProps = {
  href: string
  icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="bg-white/10 hover:bg-white/20 h-7 w-7 md:h-8 md:w-8 rounded-full flex items-center justify-center transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}

type FooterLinkProps = {
  href: string
  children: React.ReactNode
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:text-gray-300 transition-colors footer-link text-sm md:text-base">
        {children}
      </Link>
    </li>
  )
}
