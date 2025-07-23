'use client'

import { useEffect } from 'react'

export default function BlogPage() {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Elfsight Blog Widget */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div 
          className="elfsight-app-68c1d67f-2a92-4414-8ad6-e5345925a16a" 
          data-elfsight-app-lazy
        />
      </div>
    </div>
  )
}