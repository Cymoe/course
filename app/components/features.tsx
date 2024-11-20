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
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}