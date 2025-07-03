"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const shouldShowScrolledHeader = false

  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(shouldShowScrolledHeader)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 || shouldShowScrolledHeader) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  useEffect(() => {
    if (shouldShowScrolledHeader) {
      setVisible(true)
    }
  }, [shouldShowScrolledHeader])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Galerie", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-40 w-full">
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "75%" : "100%",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "#FFFFFF" : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: "800px",
          borderRadius: visible ? "0.375rem" : "9999px",
        }}
        className={`relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex ${
          visible ? "bg-white/80" : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              visible ? "bg-primary" : "bg-white"
            }`}
          >
            <span
              className={`font-bold text-lg font-optima transition-colors ${visible ? "text-white" : "text-primary"}`}
            >
              PJ
            </span>
          </div>
          <span
            className={`ml-2 font-optima font-bold text-xl transition-colors ${
              visible ? "text-primary" : "text-white"
            }`}
          >
            Plan Jardin Maroc
          </span>
        </Link>

        <motion.div
          onMouseLeave={() => setHovered(null)}
          className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex"
        >
          {navItems.map((item, idx) => (
            <div key={`nav-item-${idx}`} className="relative">
              <Link
                onMouseEnter={() => setHovered(idx)}
                className={`relative px-4 py-2 ${
                  visible ? "text-neutral-600" : "text-white"
                } ${pathname && pathname === item.href ? "font-semibold" : ""} hover:text-primary transition-colors`}
                href={item.href}
              >
                {hovered === idx && (
                  <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full" />
                )}
                <span className="relative z-20 after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:-translate-x-1/2 hover:after:w-full">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </motion.div>

        <div className="hidden md:flex items-center justify-end relative z-30">
          <Link href="tel:+212660805555">
            <Button
              className={`transition-all duration-300 relative z-30 ${
                visible ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Obtenir un Devis
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          paddingRight: visible ? "12px" : "16px",
          paddingLeft: visible ? "12px" : "16px",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "#FFFFFF" : "transparent",
        }}
        style={{
          borderRadius: visible ? "0.375rem" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden ${
          visible ? "bg-white/80" : "bg-transparent"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Link href="/" className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                visible ? "bg-primary" : "bg-white"
              }`}
            >
              <span
                className={`font-bold text-sm font-optima transition-colors ${visible ? "text-white" : "text-primary"}`}
              >
                PJ
              </span>
            </div>
            <span
              className={`ml-2 font-optima font-bold text-lg transition-colors ${
                visible ? "text-primary" : "text-white"
              }`}
            >
              Plan Jardin
            </span>
          </Link>

          <button
            className={`p-2 rounded-full ${visible ? "text-black" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                ref={menuRef}
                className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-full space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center py-3 px-4 rounded-lg font-medium text-base transition-all ${
                          pathname && pathname === item.href
                            ? "bg-gray-100 text-primary"
                            : "text-gray-800 hover:bg-gray-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="w-full pt-4 border-t border-gray-100">
                  <div className="flex justify-center space-x-4 mb-4">
                    <Link
                      href="https://www.instagram.com/plan_jardin_maroc/"
                      target="_blank"
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-primary" />
                    </Link>
                  </div>
                </div>

                <div className="w-full mt-4 pt-4 border-t border-gray-100">
                  <Link href="tel:+212660805555" className="w-full">
                    <Button
                      className="w-full bg-primary text-white hover:bg-primary/90"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Obtenir un Devis
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
