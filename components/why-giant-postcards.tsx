"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, X, TrendingUp, Eye, Target, Zap, BarChart3, Users } from "lucide-react"
import Link from "next/link"

export function WhyGiantPostcards() {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null)

  const benefits = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Rapid Response",
      description: "Instantly reach thousands of local buyers with nearly 100% exposure."
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Fully Exclusive",
      description: "No competitor ads in your space—only your message matters."
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Brilliant Color",
      description: "Premium full-color gloss cardstock that demands attention."
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "No Commitment",
      description: "No contract—just pay per mail run and go."
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Trackable ROI",
      description: "Easily measure your profit with redeemable offers."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Co-op Buying Power",
      description: "You pay a fraction of the cost, yet gain full exposure—everyone else helps foot the bill!"
    }
  ]

  const mediaComparison = [
    {
      media: "TV / Radio",
      weakness: "Timing matters—people may not be watching. ROI is difficult to track."
    },
    {
      media: "Outdoor Billboards",
      weakness: "Limited tracking and long build/placement cycles."
    },
    {
      media: "Coupon Packs",
      weakness: "Often discarded or handled by bargain-hunters—little real exposure."
    },
    {
      media: "Internet Marketing",
      weakness: "Misses passive customers who don't search—it lacks the \"in-your-face\" visibility."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-off-white via-gray-50 to-off-white text-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,199,44,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(176,0,32,0.08)_49%,rgba(176,0,32,0.08)_51%,transparent_52%)] bg-[length:30px_30px]"></div>
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            Giant Postcards: Your Best Bang for Marketing Buck
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Send your most important message directly to thousands—no guessing, no competing, no contracts.
          </p>
        </div>

        {/* Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Why Giant Postcards Outperform</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-gray-50 border border-gray-200 hover:border-accent-gold/50 hover:shadow-md transition-all duration-300 transform hover:translate-x-2 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex-shrink-0 p-2 rounded-full bg-gradient-to-r from-accent-gold to-yellow-500">
                    <div className="text-charcoal">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-charcoal mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Comparison Table */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Why Not Other Media?</h3>
            <div className="space-y-3">
              {mediaComparison.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-lg border border-red-200 overflow-hidden opacity-0 animate-fade-up hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <h4 className="font-bold text-red-700 text-lg">{item.media}</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed pl-8">{item.weakness}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Callout */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-accent-gold/10 to-yellow-400/10 border-accent-gold/40 shadow-xl">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Think of your most critical message—do you want to hope it's seen, or ensure it lands in front of every household?
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Giant postcards get your message in front of everyone—every single time. No fail.
              </p>
            </CardContent>
          </Card>
        </div>



        {/* Final Push CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-8">
            Don't let competitors steal your spotlight—reserve your spot in our giant postcard co-op today!
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-primary to-red-700 hover:from-red-700 hover:to-primary text-white font-bold py-6 px-12 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-glow-pulse text-xl"
          >
            <Link href="#contact">
              Join the Giant Postcard Co-op
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}