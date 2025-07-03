"use client"

import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const tooltipAnimation = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.5, y: 0 },
      animate: {
        opacity: 1,
        scale: [0.95, 1.05, 0.95, 1.05, 0.95],
        y: [0, -8, 0, -6, 0],
        rotate: [0, -4, 0, 4, 0],
      },
      exit: { opacity: 0, scale: 0.5, y: 10 },
      transition: {
        duration: 0.5,
        scale: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut",
        },
        y: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut",
        },
        rotate: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 1.8,
          ease: "easeInOut",
        },
      },
    }),
    [],
  )

  const buttonAnimation = useMemo(
    () => ({
      animate: {
        y: [0, -8, 0],
        scale: [1, 1.05, 1],
      },
      transition: {
        y: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.2,
          ease: "easeInOut",
          repeatDelay: 0.5,
        },
        scale: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.2,
          ease: "easeInOut",
          repeatDelay: 0.5,
        },
      },
    }),
    [],
  )

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-4 left-0 flex flex-col gap-3"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <Link
                href="https://maps.app.goo.gl/rabat-morocco"
                target="_blank"
                className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-blue-300/30 transition-all duration-300 hover:scale-110"
                aria-label="Notre adresse"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </Link>
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Notre adresse
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <Link
                href="https://wa.me/+212660805555"
                target="_blank"
                className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-green-300/30 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                WhatsApp
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <Link
                href="tel:+212660805555"
                className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white flex items-center justify-center shadow-lg hover:shadow-yellow-300/30 transition-all duration-300 hover:scale-110"
                aria-label="Appeler"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </Link>
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Appeler
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={tooltipAnimation.initial}
            animate={tooltipAnimation.animate}
            exit={tooltipAnimation.exit}
            transition={tooltipAnimation.transition}
            className="absolute bottom-full mb-3 left-0 bg-primary text-white text-xs py-1.5 px-3 rounded-full shadow-lg whitespace-nowrap will-change-transform"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative">
              Besoin d'aide? Contactez-nous!
              <svg
                className="absolute -bottom-2 left-6 text-primary"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="currentColor"
              >
                <path d="M5 6L0 0h10L5 6z" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 will-change-transform
          ${
            isOpen
              ? "bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700"
              : "bg-gradient-to-r from-primary to-green-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500"
          }`}
        aria-label={isOpen ? "Fermer le menu de contact" : "Ouvrir le menu de contact"}
        animate={buttonAnimation.animate}
        transition={buttonAnimation.transition}
        style={{ willChange: "transform" }}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </motion.button>
    </div>
  )
}
