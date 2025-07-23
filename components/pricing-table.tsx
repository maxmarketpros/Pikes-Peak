import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Large Ad",
          dimensions: "4\" x 6\"",
          price: "$900",
          originalPrice: "",
          deposit: "$300 deposit",
          multiCardDiscount: "$50 OFF with multi-card — $850",
          features: [
            "Premium placement",
            "Maximum visibility", 
            "Includes 3,000 flyers",
            "Professional design assistance",
          ],
          popular: true,
        },
        {
          title: "Medium Ad",
          dimensions: "3\" x 4\"",
          price: "$475",
          originalPrice: "",
          deposit: "$200 deposit",
          multiCardDiscount: "$25 OFF with multi-card — $450",
          features: ["Great visibility", "Effective size", "Professional design assistance", "Affordable option"],
          popular: false,
        },
        {
          title: "Small Ad",
          dimensions: "3\" x 2\"",
          price: "$250",
          originalPrice: "",
          deposit: "$100 deposit",
          multiCardDiscount: "$25 OFF with multi-card — $225",
          features: ["Budget-friendly", "Professional design assistance", "Targeted distribution", "Quick turnaround"],
          popular: false,
        },
        {
          title: "Directory Ad",
          dimensions: "3/4\" x 3\"",
          price: "$125",
          originalPrice: "",
          deposit: "Pay in full",
          multiCardDiscount: "$10 OFF with multi-card — $115",
          features: [
            "Seasonal availability",
            "Professional design assistance",
            "Great for special events",
            "Discount available",
          ],
          popular: false,
        },
      ].map((plan, i) => (
        <Card key={i} className={`overflow-hidden ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""}`}>
          {plan.popular && (
            <div className="bg-primary text-white py-1.5 px-3 text-center text-sm font-medium">Most Popular</div>
          )}
          <CardContent className={`p-6 ${plan.popular ? "pt-4" : "pt-6"}`}>
            <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
            <p className="text-lg font-medium text-primary mb-3">{plan.dimensions}</p>
            <div className="mb-4">
              <div className="text-3xl font-bold">{plan.price}</div>
              {plan.originalPrice && <p className="text-sm line-through text-muted-foreground">{plan.originalPrice}</p>}
              <p className="text-muted-foreground text-sm mt-1">{plan.deposit}</p>
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mt-2">
                {plan.multiCardDiscount}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
