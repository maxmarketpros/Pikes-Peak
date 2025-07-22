import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle } from "lucide-react"

export function CampaignPackages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "1-Card Campaign",
          description: "Perfect for one-time promotions or seasonal offers",
          features: ["Single distribution", "Maximum impact", "No long-term commitment", "Ideal for special events"],
          icon: <Calendar className="h-10 w-10 text-primary" />,
        },
        {
          title: "3-Card Campaign",
          description: "Build awareness with a quarterly presence",
          features: ["3 distributions", "5% discount on total", "Consistent visibility", "Quarterly scheduling"],
          icon: <Calendar className="h-10 w-10 text-primary" />,
        },
        {
          title: "6-Card Campaign",
          description: "Maintain steady presence throughout half the year",
          features: ["6 distributions", "10% discount on total", "Bi-monthly scheduling", "Enhanced brand recognition"],
          icon: <Calendar className="h-10 w-10 text-primary" />,
          popular: true,
        },
        {
          title: "12-Card Campaign",
          description: "Maximum exposure with monthly distributions",
          features: ["12 distributions", "15% discount on total", "Monthly scheduling", "Maximum brand presence"],
          icon: <Calendar className="h-10 w-10 text-primary" />,
        },
      ].map((plan, i) => (
        <Card
          key={i}
          className={`bg-charcoal/50 border border-white/10 ${plan.popular ? "border-primary shadow-lg" : ""}`}
        >
          {plan.popular && (
            <div className="bg-primary text-white py-1.5 px-3 text-center text-sm font-medium">Most Popular</div>
          )}
          <CardContent className={`p-6 ${plan.popular ? "pt-4" : "pt-6"}`}>
            <div className="flex flex-col items-center text-center mb-6">
              {plan.icon}
              <h3 className="text-xl font-bold mt-4 mb-2 text-white">{plan.title}</h3>
              <p className="text-white/70">{plan.description}</p>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent-gold mt-0.5" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button
              asChild
              className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-white/10 hover:bg-white/20"}`}
            >
              <Link href="#contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
