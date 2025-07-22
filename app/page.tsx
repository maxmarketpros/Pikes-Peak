import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Share2,
  PenTool,
  BarChart3,
  DollarSign,
  Users,
  Calendar,
  Award,
} from "lucide-react"
import { PostcardGallery } from "@/components/postcard-gallery"
import { PricingTable } from "@/components/pricing-table"
import { FaqAccordion } from "@/components/faq-accordion"
import { ContactForm } from "@/components/contact-form"
import { CampaignPackages } from "@/components/campaign-packages"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-charcoal text-off-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-charcoal/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/postcard-pattern.png')] opacity-20 z-0"></div>
        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your <span className="text-accent-gold">Billboard</span> in a Mailbox
              </h1>
              <p className="text-xl md:text-2xl font-light">
                Get Seen by 10,000+ Homes Across Colorado Springs With Our Stunning 9x12 Postcards
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="#contact">Get a Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call (719) 210-5182
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/15x12cardwithads.jpg"
                  alt="15x12 Postcard Example"
                  className="rounded-md shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg transform rotate-6">
                <p className="font-bold text-lg">Dominates the Mailbox!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">Pikes Peak</span> Community Co-op
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "No Contracts",
                description: "Flexible marketing with no long-term commitments",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "No Competition in Your Category",
                description: "Exclusive placement for your business type",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                title: "Affordable Rates",
                description: "Reach 10,000+ Homes for a Nickel Each!",
              },
              {
                icon: <PenTool className="h-10 w-10 text-primary" />,
                title: "Hassle-Free Ad Design",
                description: "Professional design services included",
              },
              {
                icon: <Mail className="h-10 w-10 text-primary" />,
                title: "3,000 Bonus Flyers",
                description: "Included with select ad packages",
              },
              {
                icon: <MapPin className="h-10 w-10 text-primary" />,
                title: "Local Business Experts",
                description: "Colorado Springs focused marketing",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Postcard Options */}
      <section id="postcards" className="py-20 bg-charcoal text-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Postcard Options</h2>
            <p className="text-xl max-w-2xl mx-auto">Choose the perfect size to make your business stand out</p>
          </div>

          <Tabs defaultValue="9x12" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-8">
              <TabsTrigger
                value="9x12"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-md"
              >
                9x12-Inch
              </TabsTrigger>
              <TabsTrigger
                value="6x11"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-md"
              >
                6x11-Inch
              </TabsTrigger>
              <TabsTrigger
                value="15x12"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-md"
              >
                15x12-Inch
              </TabsTrigger>
              <TabsTrigger
                value="11x17"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-md"
              >
                11x17-Inch
              </TabsTrigger>
            </TabsList>

            <TabsContent value="9x12" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="9x12-Inch Postcard"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-primary px-4 py-2 rounded-md text-white font-bold mb-2">
                    FLAGSHIP PRODUCT
                  </div>
                  <h3 className="text-3xl font-bold">9x12-Inch Postcard</h3>
                  <p className="text-lg">
                    Our most popular size that dominates the mailbox. This eye-catching format ensures your message
                    won't be missed and provides ample space for compelling offers and stunning visuals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Maximum visibility in the mailbox</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Includes 3,000 bonus flyers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Premium glossy finish</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white mt-4">
                    <Link href="#contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="6x11" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="6x11-Inch Postcard"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">6x11-Inch Postcard</h3>
                  <p className="text-lg">
                    Compact but bold, this size offers excellent visibility while maintaining a sleek profile. Perfect
                    for focused messaging and special promotions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Efficient size with strong presence</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Cost-effective option</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>High-quality glossy finish</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white mt-4">
                    <Link href="#contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="15x12" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="15x12-Inch Tabloid"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-accent-gold px-4 py-2 rounded-md text-charcoal font-bold mb-2">
                    EXTRA IMPACT
                  </div>
                  <h3 className="text-3xl font-bold">15x12-Inch Tabloid</h3>
                  <p className="text-lg">
                    Make an oversized statement with our tabloid format. This premium size offers maximum visual impact
                    and space for detailed information, perfect for businesses wanting to showcase multiple services or
                    products.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Oversized for maximum impact</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Ample space for detailed content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Premium quality and finish</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="11x17" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="11x17-Inch Directory"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-charcoal/30 px-4 py-2 rounded-md text-white font-bold mb-2">
                    SEASONAL
                  </div>
                  <h3 className="text-3xl font-bold">11x17-Inch Directory</h3>
                  <p className="text-lg">
                    Our directory format is perfect for seasonal campaigns and special events. This versatile size
                    offers excellent visibility and impact for time-sensitive promotions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Ideal for seasonal promotions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Great for multi-page content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Professional finish and quality</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Overview */}
      <section id="pricing" className="py-20 bg-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Overview</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Affordable rates with no contracts. Pay only when you're ready to print.
            </p>
          </div>

          <PricingTable />

          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-6">
              All 9x12 ads include 3,000 flyers delivered directly to you for further outreach.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="#contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Payment & Campaign Info */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Pick the ad size that suits your style! Discounts are set with our current promotions—go for a single ad or jazz up a 3-card, 6-card, or 12-card campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Deposit Structure */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">No Contracts, Just Small Deposits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold">Large Ad (4" x 6")</span>
                    <span className="text-lg font-bold text-primary">$300 deposit</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold">Medium Ad (3" x 4")</span>
                    <span className="text-lg font-bold text-primary">$200 deposit</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold">Small Ad (3" x 2")</span>
                    <span className="text-lg font-bold text-primary">$100 deposit</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg">
                    <span className="font-semibold">Directory Ad (3/4" x 3")</span>
                    <span className="text-lg font-bold text-primary">Pay in full</span>
                  </div>
                </div>
                <p className="text-center mt-4 text-muted-foreground">
                  Balance due at printing for all ads except Directory
                </p>
              </CardContent>
            </Card>

            {/* Multi-Card Campaigns */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Multi-Card Campaigns</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/20 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">How Multi-Card Works:</h4>
                    <ol className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                        <span>Add a $100 deposit to secure your spot for the next card</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                        <span>When each postcard is ready to print, you'll get an invoice for the ad price minus the $100 retainer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                        <span>To continue the next card it's wash, rinse, repeat, easy peasy!</span>
                      </li>
                    </ol>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-primary">Choose from:</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">3-Card</span>
                      <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">6-Card</span>
                      <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">12-Card</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Refund Policy */}
          <Card className="shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Refund Policy is Nice and Easy!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 p-6 rounded-lg mb-4">
                    <h4 className="font-bold text-lg mb-2 text-green-800">If You Cancel</h4>
                    <p className="text-green-700">
                      You can request a refund before your postcard hits the printer. We'll refund <strong>75% of your deposit</strong> or purchase—keeping 25% to cover the design work done by the Pikes Peak Community Co-op.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-6 rounded-lg mb-4">
                    <h4 className="font-bold text-lg mb-2 text-blue-800">If We Cancel</h4>
                    <p className="text-blue-700">
                      But if we cancel for any reason, you'll get a cheerful <strong>100% refund!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Campaign Packages */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal/90 text-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campaign Packages</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Consistency builds visibility. Get long-term exposure with multi-card discounts.
            </p>
          </div>

          <CampaignPackages />
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/Shareandsave.jpg"
                alt="Referral Program"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Share2 className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Share and Save</h2>
              </div>
              <p className="text-xl">
                Refer a business and earn cash bonuses with NO LIMIT on referrals! Get paid for every business you bring to our co-op.
              </p>
              
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-2xl font-bold mb-4 text-center">REFERRAL BONUS!</h3>
                <div className="space-y-2 text-lg font-semibold">
                  <div className="flex justify-between items-center">
                    <span>Large Ad (4" x 6") purchased:</span>
                    <span className="text-yellow-300 text-xl">$75</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Medium Ad (3" x 4") purchased:</span>
                    <span className="text-yellow-300 text-xl">$50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Small Ad (3" x 2") purchased:</span>
                    <span className="text-yellow-300 text-xl">$20</span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-2xl font-bold text-yellow-300">NO LIMIT ON REFERRALS!</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">How It Works</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Refer a business that could benefit from our direct mail services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>When they sign up for their first campaign, you'll receive credit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Apply your credit to your next direct mail campaign</span>
                  </li>
                </ol>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="#contact">Start Referring Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Design Tips */}
      <section className="py-20 bg-charcoal text-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design for Impact</h2>
            <p className="text-xl max-w-2xl mx-auto">Tips to make your direct mail campaign more effective</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eye-Catching Offers",
                description:
                  "Use bold promotions like BOGO, $500 off, or Free Service Calls to grab attention immediately.",
                icon: <Award className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Add QR Codes",
                description:
                  "Include QR codes that link to menus, coupons, or your website for easy digital engagement.",
                icon: <BarChart3 className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Color Considerations",
                description:
                  "Avoid dark blue as it tends to print purple! Stick to our recommended color palette for best results.",
                icon: <PenTool className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Clear Call to Action",
                description: "Every postcard should have a clear, compelling call to action that drives response.",
                icon: <ArrowRight className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Contact Information",
                description: "Make your phone number and website prominent and easy to find on your postcard.",
                icon: <Phone className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Seasonal Timing",
                description: "Plan your campaigns to align with seasonal needs for your industry for maximum impact.",
                icon: <Calendar className="h-10 w-10 text-accent-gold" />,
              },
            ].map((tip, i) => (
              <Card
                key={i}
                className="bg-charcoal/50 border border-white/10 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-4">{tip.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{tip.title}</h3>
                    <p className="text-white/80">{tip.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* About Us */}
      <section className="py-20 bg-charcoal text-off-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-xl leading-relaxed">
              Pikes Peak Community Co-op is a Colorado Springs–based direct mail collective helping local businesses
              grow without competing for ad space. We believe in shared success, bold design, and maximum mailbox
              impact.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary/20 p-6 rounded-lg border border-primary/30">
                <h3 className="text-2xl font-bold mb-2">Reach 10,000+ Homes</h3>
                <p className="text-lg">for a Nickel Each!</p>
              </div>
              <div className="bg-primary/20 p-6 rounded-lg border border-primary/30">
                <h3 className="text-2xl font-bold mb-2">Dominates the Mailbox</h3>
                <p className="text-lg">Stand out from the competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl max-w-2xl mx-auto">Everything you need to know about our direct mail services</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-charcoal to-charcoal/90 text-off-white scroll-mt-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Get Your Business in 10,000+ Homes</h2>
              <p className="text-xl mb-8">
                Ready to dominate the mailbox? Contact us today to get started with your direct mail campaign.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Call or Text</p>
                    <p className="text-lg font-bold">(719) 210-5182</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email Us</p>
                    <p className="text-lg font-bold">Ad.PPCC9x12@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white text-charcoal">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">Get a Quote</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
