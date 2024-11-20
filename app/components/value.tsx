import { Check } from "lucide-react";

export function Value() {
  const benefits = [
    "High leverage opportunity vehicles for consistent cash flow",
    "Focus on controllable outcomes with outsized returns",
    "Create real value and develop tangible skill sets",
    "Build valuable assets that can be sold for lucrative exits",
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          What can you expect to learn?
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-4">
                <div>
                  <Check className="h-5 w-5 text-neutral-400" />
                </div>
                <p className="text-lg text-neutral-300 text-center">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}