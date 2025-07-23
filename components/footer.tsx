import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Share2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              <span className="text-primary">Pikes Peak</span> Community Co-op
            </h3>
            <p className="text-white/70">
              Your Billboard in a Mailbox. Direct mail marketing services in Colorado Springs.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 hover:bg-white/10 bg-transparent"
              >
                <Link href="mailto:Ad.PPCC9x12@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 hover:bg-white/10 bg-transparent"
              >
                <Link href="tel:7192105182">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">Phone</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 hover:bg-white/10 bg-transparent"
              >
                <Link href="#contact">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#postcards" className="text-white/70 hover:text-white transition-colors">
                  Postcards
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span>(719) 210-5182</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span>Ad.PPCC9x12@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Pikes Peak Community Co-op. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
