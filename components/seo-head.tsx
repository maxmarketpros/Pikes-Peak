'use client'

import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  noIndex?: boolean
}

export function SEOHead({
  title = "Pikes Peak Community Co-op | Direct Mail Marketing",
  description = "Get seen by 10,000+ homes across Colorado Springs with our stunning 9x12 postcards. Your billboard in a mailbox.",
  keywords = [],
  canonicalUrl,
  ogImage = "/images/og-image.jpg",
  noIndex = false
}: SEOHeadProps) {
  const defaultKeywords = [
    "direct mail marketing",
    "Colorado Springs marketing", 
    "postcard marketing",
    "EDDM",
    "local advertising",
    "business marketing"
  ]
  
  const allKeywords = [...defaultKeywords, ...keywords].join(', ')

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Pikes Peak Community Co-op" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl || "https://pikespeakcoop.com"} />
      <meta property="og:site_name" content="Pikes Peak Community Co-op" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="US-CO" />
      <meta name="geo.placename" content="Colorado Springs" />
      <meta name="geo.position" content="38.8339;-104.8214" />
      <meta name="ICBM" content="38.8339, -104.8214" />
      
      {/* Business Info */}
      <meta name="contact" content="(719) 210-5182" />
      <meta name="coverage" content="Colorado Springs, CO" />
      <meta name="distribution" content="local" />
      <meta name="rating" content="general" />
    </Head>
  )
}