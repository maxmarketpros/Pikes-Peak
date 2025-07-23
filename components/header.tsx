"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { Menu, Phone, Sparkles, Zap, Star, ArrowRight, Home, Mail, DollarSign, PhoneCall, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { 
      label: "Home", 
      href: "/",
      description: "Welcome to Pikes Peak Co-op",
      icon: Home,
      color: "from-emerald-500 to-teal-600"
    },
    { 
      label: "Postcards", 
      href: "/#postcards",
      description: "Explore our postcard designs",
      icon: Sparkles,
      color: "from-purple-500 to-pink-600",
      featured: true
    },
    { 
      label: "Blog", 
      href: "/blog",
      description: "Read our latest insights",
      icon: Star,
      color: "from-indigo-500 to-purple-600"
    },
    { 
      label: "Pricing", 
      href: "/#pricing",
      description: "Transparent, competitive rates",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-600"
    },
    { 
      label: "Contact", 
      href: "/#contact",
      description: "Get in touch with our team",
      icon: Mail,
      color: "from-orange-500 to-red-600"
    },
  ]

  return (
    <header className="relative z-50 w-full bg-gradient-to-r from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="container relative flex h-24 md:h-28 items-center justify-between">
        <div className="flex items-center gap-10 md:gap-16">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="/images/Newlogo.png" 
                alt="Pikes Peak Co-op" 
                className="h-16 md:h-20 w-auto transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map((item, i) => {
                const IconComponent = item.icon
                return (
                  <NavigationMenuItem key={i}>
                    <NavigationMenuLink asChild>
                      <Link 
                        href={item.href} 
                        className={cn(
                          "group relative inline-flex h-12 w-max items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20 overflow-hidden",
                          item.featured 
                            ? "bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-purple-700 shadow-lg shadow-purple-500/20" 
                            : "hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-lg hover:shadow-gray-200/50"
                        )}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" 
                             style={{background: `linear-gradient(to right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`}} />
                        
                        <span className="relative z-10 flex items-center gap-3">
                          <IconComponent className={cn(
                            "h-4 w-4 transition-all duration-300 group-hover:scale-110",
                            item.featured ? "text-purple-600" : "text-gray-600 group-hover:text-gray-800"
                          )} />
                          {item.label}
                          {item.featured && <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-0.5 animate-pulse">Hot</Badge>}
                        </span>
                        
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-all duration-500",
                          item.color
                        )} />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Simplified nav for medium screens */}
          <nav className="hidden md:flex lg:hidden gap-6">
            {navItems.map((item, i) => {
              const IconComponent = item.icon
              return (
                <Link 
                  key={i} 
                  href={item.href} 
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:scale-110 relative group px-3 py-2 rounded-xl"
                >
                  <IconComponent className="h-4 w-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                  {item.label}
                  <div className={cn("absolute -bottom-1 left-0 h-1 w-0 rounded-full group-hover:w-full transition-all duration-500 bg-gradient-to-r", item.color)} />
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Red Call Button */}
          <Button 
            asChild 
            className="hidden md:flex gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden px-6 py-3 h-12 rounded-2xl"
          >
            <Link href="tel:7192105182" className="flex items-center gap-3">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/50 to-red-600/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <PhoneCall className="h-5 w-5 group-hover:animate-bounce relative z-10" />
              <span className="font-bold relative z-10">(719) 210-5182</span>
              <Flame className="h-4 w-4 text-red-200 group-hover:text-yellow-300 transition-colors duration-300 relative z-10" />
            </Link>
          </Button>

          <Button 
            asChild 
            className="hidden md:flex bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group relative overflow-hidden px-8 py-3 h-12 rounded-2xl"
          >
            <Link href="/#contact" className="flex items-center gap-3">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <Zap className="h-5 w-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative z-10" />
              <span className="font-bold relative z-10">Get a Quote</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-all duration-300 relative z-10" />
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="md:hidden bg-white/80 backdrop-blur-xl border-gray-300 hover:bg-white hover:border-purple-400 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300 group h-12 w-12 rounded-2xl"
              >
                <Menu className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500 text-gray-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-96 bg-gradient-to-br from-white via-slate-50 to-white backdrop-blur-2xl border-l border-gray-200/50">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 pt-8">
                <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
                  <img 
                    src="/images/Newlogo.png" 
                    alt="Pikes Peak Co-op" 
                    className="h-16 w-auto group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                  />
                </Link>
                
                <nav className="flex flex-col gap-3">
                  {navItems.map((item, i) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={i}
                        href={item.href}
                        className="flex items-center justify-between p-5 rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-500 group border border-transparent hover:border-gray-200/50"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-3 rounded-xl bg-gradient-to-r transition-all duration-300 group-hover:scale-110",
                            item.color,
                            "shadow-lg"
                          )}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 font-bold text-gray-900">
                              {item.label}
                              {item.featured && <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs animate-pulse">Hot</Badge>}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all duration-300" />
                      </Link>
                    )
                  })}
                </nav>

                <div className="space-y-4 pt-6 border-t border-gray-200/50">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-500 group h-14 rounded-2xl"
                  >
                    <Link href="/#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3">
                      <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-bold text-lg">Get a Quote</span>
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    className="w-full gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group h-14 rounded-2xl"
                  >
                    <Link href="tel:7192105182" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3">
                      <PhoneCall className="h-5 w-5 group-hover:animate-bounce" />
                      <span className="font-bold text-lg">(719) 210-5182</span>
                      <Flame className="h-4 w-4 text-red-200 group-hover:text-yellow-300 transition-colors duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
