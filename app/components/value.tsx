import { Check } from "lucide-react";

export function Value() {
  const benefits = [
    "High leverage opportunity vehicles for consistent cash flow",
    "Focus on controllable outcomes with outsized returns",
    "Create real value and develop tangible skill sets",
    "Build valuable assets that can be sold for lucrative exits",
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What can you expect to learn?
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}