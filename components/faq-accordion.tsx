import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqAccordion() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer direct mail marketing services specializing in large format postcards. Our primary products include 9x12-inch, 6x11-inch, and 15x12-inch postcards, as well as 11x17-inch directories. We also provide ad design services, printing, and distribution to targeted areas in Colorado Springs.",
    },
    {
      question: "What sizes do you print?",
      answer:
        "We offer several postcard sizes to meet your marketing needs: 9x12-inch (our flagship product), 6x11-inch (compact but bold), 15x12-inch tabloid (extra impact), and 11x17-inch directory (seasonal). Each size is designed to maximize visibility and impact in the mailbox.",
    },
    {
      question: "What is EDDM?",
      answer:
        "EDDM stands for Every Door Direct Mail, a service offered by the USPS that allows businesses to target specific neighborhoods or postal routes without needing a mailing list. Our direct mail services utilize EDDM to ensure your postcards reach every home in your target area efficiently and cost-effectively.",
    },
    {
      question: "What's included with my ad?",
      answer:
        "Your ad includes professional design assistance, high-quality printing on premium stock, and distribution to your target area. Additionally, all 9x12-inch ads include 3,000 bonus flyers delivered directly to you for further marketing efforts. We also ensure your business category is exclusive, meaning no competitors will appear in the same mailing.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We require a deposit to secure your spot, with the balance due at print time. Since each mailing is custom-designed and printed specifically for your business, deposits are non-refundable once design work has begun. However, we're committed to your satisfaction and will work with you to ensure your ad meets your expectations before printing.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
