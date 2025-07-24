import { generateMetadata } from '@/lib/seo'
import Script from 'next/script'

export const metadata = generateMetadata({
  title: "Business Marketing Blog",
  description: "Expert insights on direct mail marketing, business growth strategies, and local advertising tips for Colorado Springs businesses. Learn how to maximize your marketing ROI with proven tactics.",
  path: "/blog",
  keywords: [
    "marketing blog",
    "business tips",
    "direct mail strategies",
    "Colorado Springs business",
    "marketing insights",
    "small business growth",
    "advertising tips",
    "marketing ROI",
    "business development",
    "local marketing"
  ]
})

export default function BlogPage() {
  return (
    <>
      <Script 
        src="https://static.elfsight.com/platform/platform.js" 
        strategy="afterInteractive"
      />
      
      <div className="min-h-screen bg-white">
        {/* Elfsight Blog Widget */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div 
            className="elfsight-app-3f2035f4-4b0d-4a50-bd6e-8cc4aebe36a1" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </>
  )
}