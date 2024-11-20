"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const businessModels = [
  {
    title: "Digital Products",
    description:
      "Create and sell digital assets, courses, and software that generate passive income. Scale without physical inventory or shipping constraints.",
    link: "/models/digital-products",
  },
  {
    title: "Automated E-commerce",
    description:
      "Build systems that handle inventory, fulfillment, and customer service automatically. Free yourself from day-to-day operations while maintaining profitability.",
    link: "/models/automated-ecommerce",
  },
  {
    title: "SaaS Platforms",
    description:
      "Develop subscription-based software services that solve specific problems. Create recurring revenue with high margins and scalable infrastructure.",
    link: "/models/saas-platforms",
  },
  {
    title: "Content Networks",
    description:
      "Build and monetize content platforms that leverage AI and automation. Create value through curation, aggregation, and distribution.",
    link: "/models/content-networks",
  },
  {
    title: "Agency Automation",
    description:
      "Transform service businesses into automated systems. Build processes that deliver consistent results without your constant involvement.",
    link: "/models/agency-automation",
  },
  {
    title: "Investment Systems",
    description:
      "Create automated systems for identifying and managing investment opportunities. Build portfolios that generate returns while you focus on strategy.",
    link: "/models/investment-systems",
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-black pt-0">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Business Models
          </h2>
          <p className="text-lg text-neutral-400">
            Discover proven remote business models that can be automated and scaled. 
            Each model is designed for location independence and leverages modern technology for maximum efficiency.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <HoverEffect items={businessModels} />
        </div>
      </div>
    </section>
  );
} 