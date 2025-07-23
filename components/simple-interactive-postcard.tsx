'use client'

import { useEffect, useRef, useState } from 'react'

interface SimpleInteractivePostcardProps {
  frontImage: string
  backImage: string
  title: string
  description: string
  className?: string
}

export function SimpleInteractivePostcard({
  frontImage,
  backImage,
  title,
  description,
  className = ''
}: SimpleInteractivePostcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    
    const rotateX = y * -10
    const rotateY = x * 10
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  }
  
  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
    setIsHovered(false)
  }
  
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`perspective-1000 ${className}`}>
      <div
        ref={cardRef}
        className="relative w-full h-96 cursor-pointer preserve-3d transition-transform duration-300 ease-out"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl transition-transform duration-600 ease-in-out ${
            isFlipped ? 'rotate-y-180' : 'rotate-y-0'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={frontImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm opacity-90">{description}</p>
            </div>
            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-blue-500/20 flex items-center justify-center transition-opacity duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-full">
                Click to flip
              </span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl transition-transform duration-600 ease-in-out rotate-y-180 ${
            isFlipped ? 'rotate-y-0' : 'rotate-y-180'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={backImage}
              alt={`${title} - Back`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-2">Back Design</h3>
              <p className="text-sm opacity-90">Professional layout with contact details</p>
            </div>
            {/* Click to flip back indicator */}
            <div className="absolute top-4 right-4 text-white">
              <span className="text-xs bg-black/50 px-2 py-1 rounded">
                Click to flip back
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}