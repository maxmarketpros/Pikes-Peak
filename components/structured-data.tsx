import { siteConfig } from '@/lib/seo'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": "(719) 210-5182",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colorado Springs",
      "addressRegion": "CO",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.8339",
      "longitude": "-104.8214"
    },
    "areaServed": {
      "@type": "City",
      "name": "Colorado Springs"
    },
    "serviceType": "Direct Mail Marketing",
    "priceRange": "$100-$500",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      // Add your social media URLs here
      // "https://www.facebook.com/pikespeakcoop",
      // "https://www.twitter.com/pikespeakcoop"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Direct Mail Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "9x12 Postcard Marketing",
            "description": "Premium 9x12 postcards reaching 10,000+ homes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EDDM Services",
            "description": "Every Door Direct Mail services for local businesses"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}