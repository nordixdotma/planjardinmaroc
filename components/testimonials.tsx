"use client"

import { useRef } from "react"
import Image from "next/image"
import SectionTitle from "./section-title"

// Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Benali",
    role: "Propriétaire de Villa",
    image: "https://www.decodariambl.ma/t2.png",
    quote:
      "Plan Jardin Maroc a transformé notre jardin avec un design magnifique et des plantes parfaitement adaptées au climat marocain. Le travail est impeccable et l'équipe très professionnelle.",
    rating: 5.0,
    bgColor: "bg-primary/5",
  },
  {
    id: 2,
    name: "Fatima El Amrani",
    role: "Propriétaire d'Appartement",
    image: "https://www.decodariambl.ma/t4.png",
    quote:
      "Installation parfaite d'un système d'irrigation automatique dans notre jardin. L'équipe de Plan Jardin Maroc est ponctuelle, soigneuse et le résultat dépasse nos attentes.",
    rating: 5.0,
    bgColor: "bg-primary/10",
  },
  {
    id: 3,
    name: "Youssef Tazi",
    role: "Architecte",
    image: "https://www.decodariambl.ma/t1.png",
    quote:
      "En tant qu'architecte, j'apprécie la qualité du travail de Plan Jardin Maroc. Leurs conceptions paysagères apportent une vraie valeur ajoutée à mes projets. Une équipe de confiance.",
    rating: 5.0,
    bgColor: "bg-primary/8",
  },
  {
    id: 4,
    name: "Amina Alaoui",
    role: "Propriétaire de Riad",
    image: "https://www.decodariambl.ma/t3.png",
    quote:
      "Pour notre riad, nous voulions un jardin traditionnel marocain avec une touche moderne. Plan Jardin Maroc a su répondre parfaitement à nos besoins avec un design authentique.",
    rating: 5.0,
    bgColor: "bg-primary/6",
  },
]

import type { Swiper as SwiperClass } from "swiper"

export default function Testimonials() {
  const swiperRef = useRef<SwiperClass | null>(null)

  return (
    <section id="testimonials" className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Témoignages"
          subtitle="Découvrez ce que nos clients disent de leur expérience avec Plan Jardin Maroc et nos services d'aménagement paysager."
        />

        <div className="mt-10 md:mt-12 mb-8">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="testimonial-swiper pb-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="pb-4">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  quote: string
  rating: number
  bgColor: string
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative h-full">
      <div
        className={`${testimonial.bgColor} rounded-2xl p-3 md:p-5 h-full flex flex-col shadow-lg border border-primary/20 relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden">
          <div className="w-full h-full relative" style={{ borderBottomLeftRadius: "1rem" }}>
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
              style={{ borderBottomLeftRadius: "1rem" }}
            />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xs">PJ</span>
          </div>
          <span className="font-bold text-lg text-gray-800">Plan Jardin Maroc</span>
        </div>

        <div className="mb-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-white"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
          </div>
        </div>

        <p className="text-gray-700 text-sm md:text-base mb-4 flex-grow leading-relaxed pr-4">{testimonial.quote}</p>

        <div className="flex justify-between items-end">
          <div>
            <h4 className="font-bold text-gray-900 text-base md:text-lg">{testimonial.name}</h4>
          </div>
          <div className="text-right">
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
