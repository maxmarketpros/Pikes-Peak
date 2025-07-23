'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface InteractivePostcardProps {
  frontImage: string
  backImage: string
  title: string
  description: string
  className?: string
}

export function InteractivePostcard({
  frontImage,
  backImage,
  title,
  description,
  className = ''
}: InteractivePostcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Mouse position tracking for 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]))
  
  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    
    mouseX.set(x)
    mouseY.set(y)
  }
  
  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
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
      <motion.div
        ref={cardRef}
        className="relative w-full h-96 cursor-pointer preserve-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
            <motion.div
              className="absolute inset-0 bg-blue-500/20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-full">
                Click to flip
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl"
          style={{ rotateY: 180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
            <motion.div
              className="absolute top-4 right-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xs bg-black/50 px-2 py-1 rounded">
                Click to flip back
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}