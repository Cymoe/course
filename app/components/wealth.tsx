import { Coins, Clock, Plane } from "lucide-react";

export function Wealth() {
  const wealthTypes = [
    {
      icon: Coins,
      title: "Money Wealth",
      emoji: "💰",
      description: "Earn your way into an excess of capital",
    },
    {
      icon: Clock,
      title: "Time Wealth",
      emoji: "⏳",
      description: "Implement people and systems for freedom",
    },
    {
      icon: Plane,
      title: "Location Wealth",
      emoji: "✈️",
      description: "Work and live anywhere in the world",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">What is Wealth?</h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          True wealth encompasses all three dimensions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {wealthTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-lg"
            >
              <span className="text-4xl mb-4">{type.emoji}</span>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}