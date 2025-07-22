"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Postcards", href: "#postcards" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-24 md:h-32 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/Logo.png" 
              alt="Pikes Peak Co-op" 
              className="h-20 md:h-28 w-auto"
            />
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item, i) => (
              <Link key={i} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="hidden md:flex gap-2">
            <Link href="tel:7192105182">
              <Phone className="h-4 w-4" />
              <span>(719) 210-5182</span>
            </Link>
          </Button>

          <Button asChild className="hidden md:flex">
            <Link href="#contact">Get a Quote</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <img 
                    src="/images/Logo.png" 
                    alt="Pikes Peak Co-op" 
                    className="h-12 w-auto"
                  />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="text-base font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="w-full">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full gap-2 bg-transparent">
                  <Link href="tel:7192105182" onClick={() => setIsOpen(false)}>
                    <Phone className="h-4 w-4" />
                    <span>(719) 210-5182</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
