import { Building2, Users, Cog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: Building2,
      title: "Build Multiple Businesses",
      description: "Create and operate multiple income streams from anywhere in the world.",
    },
    {
      icon: Users,
      title: "Leverage Systems & People",
      description: "Focus on high-value tasks by implementing effective systems and teams.",
    },
    {
      icon: Cog,
      title: "Automate & Scale",
      description: "Build self-sustaining businesses that generate steady income independently.",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            The Modern Business Model
          </h2>
          <p className="text-lg text-neutral-400">
            Traditional business ties you to one location. Modern business gives you freedom. 
            Learn the three key principles that make location independence possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-neutral-800 bg-neutral-900/50 shadow-xl">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-neutral-200 mb-4" />
                <CardTitle className="text-neutral-200">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}