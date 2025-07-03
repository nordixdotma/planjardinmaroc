"use client"

import { useState, useEffect, useRef } from "react"

interface TypingEffectProps {
  strings: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenStrings?: number
  className?: string
}

export default function TypingEffect({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenStrings = 1000,
  className = "",
}: TypingEffectProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (strings.length === 0) return

    const currentString = strings[currentStringIndex]

    const timeout = setTimeout(
      () => {
        if (!isMounted.current) return

        if (!isDeleting) {
          if (currentText.length < currentString.length) {
            setCurrentText(currentString.substring(0, currentText.length + 1))
          } else {
            setIsPaused(true)
            setTimeout(() => {
              if (isMounted.current) {
                setIsPaused(false)
                setIsDeleting(true)
              }
            }, delayBetweenStrings)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentString.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length)
          }
        }
      },
      isPaused ? delayBetweenStrings : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, deletingSpeed, delayBetweenStrings, isPaused])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
