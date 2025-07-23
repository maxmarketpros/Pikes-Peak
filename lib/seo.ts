import type { Metadata } from 'next'

export const siteConfig = {
  name: "Pikes Peak Community Co-op",
  description: "Get seen by 10,000+ homes across Colorado Springs with our stunning 9x12 postcards. Your billboard in a mailbox. Direct mail marketing services with no contracts, affordable rates, and professional design.",
  url: "https://pikespeakcoop.com", // Update with your actual domain
  ogImage: "/images/og-image.jpg",
  keywords: [
    "direct mail marketing",
    "Colorado Springs marketing",
    "postcard marketing",
    "EDDM",
    "local advertising",
    "business marketing",
    "mail campaigns",
    "9x12 postcards",
    "marketing co-op",
    "small business advertising"
  ],
  author: "Pikes Peak Community Co-op",
  creator: "Pikes Peak Community Co-op",
  publisher: "Pikes Peak Community Co-op"
}

export const defaultMetadata: Metadata = {
  title: {
    default: "Direct Mail Marketing in Colorado Springs | Pikes Peak Co-op",
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@pikespeakcoop' // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code'
  }
}

// Utility function to generate page-specific metadata
export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false
}: {
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const pageDescription = description || siteConfig.description
  const pageUrl = `${siteConfig.url}${path}`
  const allKeywords = [...siteConfig.keywords, ...keywords]

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage]
    },
    robots: noIndex ? {
      index: false,
      follow: false
    } : {
      index: true,
      follow: true
    }
  }
}