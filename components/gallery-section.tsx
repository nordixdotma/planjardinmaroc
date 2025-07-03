"use client"

import { useState, useEffect } from "react"
import SectionTitle from "./section-title"

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1560331470-4737e8408873?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Conception de Jardin Moderne",
    location: "Villa Rabat",
    description:
      "Aménagement paysager contemporain avec des plantes marocaines indigènes et des systèmes d'irrigation modernes.",
  },
  {
    src: "https://images.unsplash.com/photo-1475066903363-e46730503e66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Jardin Marocain Traditionnel",
    location: "Riad Casablanca",
    description: "Conception de jardin marocain authentique avec des carreaux traditionnels et des jeux d'eau.",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Aménagement Resort de Luxe",
    location: "Resort Marrakech",
    description: "Projet d'aménagement paysager étendu avec palmiers et plantes méditerranéennes.",
  },
  {
    src: "https://images.unsplash.com/photo-1561851107-b7ea95a35903?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rénovation Jardin Résidentiel",
    location: "Maison Fès",
    description: "Transformation complète du jardin avec éclairage extérieur et espaces de détente.",
  },
]

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const styleElement = document.createElement("style")

    styleElement.innerHTML = `
      /* Mobile styles */
      @media (max-width: 767px) {
        .gallery-container {
          display: flex !important;
          flex-direction: column !important;
          gap: 8px !important;
          height: auto !important;
        }
        
        .image-container {
          height: 120px !important;
          border-radius: 1.5rem !important;
          flex: none !important;
        }
        
        .image-container.active-mobile {
          height: 250px !important;
        }
        
        .image-title {
          font-size: 18px !important;
        }
        
        .image-location {
          font-size: 12px !important;
        }
        
        .image-description {
          font-size: 12px !important;
        }
        
        .description-box-mobile {
          background: rgba(255,255,255,0.1) !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 12px !important;
          padding: 12px !important;
          border: 1px solid rgba(255,255,255,0.2) !important;
        }
      }
      
      /* Medium screens (md) */
      @media (min-width: 768px) {
        .gallery-container {
          height: 400px !important;
          display: flex !important;
          flex-direction: row !important;
        }
        
        .image-container {
          border-radius: 1.5rem !important;
        }
      }
    `

    document.head.appendChild(styleElement)

    return () => {
      if (styleElement) {
        styleElement.remove()
      }
    }
  }, [])

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <SectionTitle
          title="Nos Réalisations"
          subtitle="Découvrez notre portfolio de magnifiques jardins marocains et projets d'aménagement paysager."
        />
      </div>

      <div style={styles.container}>
        <div style={styles.galleryContainer} className="gallery-container">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.imageContainer,
                flex: index === activeIndex ? 5 : 1,
              }}
              className={`image-container ${index === activeIndex ? "active-mobile" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleClick(index)}
            >
              <div style={styles.imageWrapper}>
                <img src={item.src || "/placeholder.svg"} alt={item.title} style={styles.image} />
                <div
                  style={{
                    ...styles.overlay,
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                  className={`overlay-content ${index === activeIndex ? "active-overlay" : ""}`}
                >
                  {/* Title and Location - Top Left */}
                  <div style={styles.topContent}>
                    <h3 style={styles.title} className="image-title">
                      {item.title}
                    </h3>
                    <div style={styles.location} className="image-location">
                      <svg style={styles.locationIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item.location}
                    </div>
                  </div>

                  {/* Description - Bottom Full Width */}
                  {index === activeIndex && (
                    <div style={styles.bottomContent}>
                      <div style={styles.descriptionBox} className="description-box-mobile">
                        <p style={styles.description} className="image-description">
                          <span style={styles.descriptionLabel}>Détails du Projet:</span> {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 16px",
  },
  galleryContainer: {
    display: "flex",
    width: "100%",
    height: "400px",
    overflow: "hidden",
    borderRadius: "1.5rem",
    gap: "12px",
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    minWidth: "100px",
    transition: "all 0.7s ease",
    borderRadius: "1.5rem",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "opacity 0.5s ease",
    borderRadius: "1.5rem",
    padding: "20px",
  },
  topContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  bottomContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    color: "white",
    margin: "0 0 8px 0",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "left",
    textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
    fontFamily: "Optima, sans-serif",
  },
  location: {
    color: "#2E7D32",
    margin: "0",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  locationIcon: {
    width: "14px",
    height: "14px",
  },
  descriptionBox: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    width: "100%",
  },
  description: {
    color: "rgba(255,255,255,0.9)",
    margin: "0",
    fontSize: "13px",
    lineHeight: "1.4",
    textAlign: "left",
  },
  descriptionLabel: {
    fontWeight: "bold",
    color: "#2E7D32",
  },
}
