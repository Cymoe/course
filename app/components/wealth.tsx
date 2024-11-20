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
    <section className="py-4 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          What is Wealth?
        </h2>
        <p className="text-lg text-neutral-400 text-center mb-12">
          True wealth encompasses all three dimensions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {wealthTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-neutral-800 bg-neutral-900/50 shadow-xl"
            >
              <span className="text-4xl mb-4">{type.emoji}</span>
              <h3 className="text-xl font-semibold mb-2 text-neutral-200">{type.title}</h3>
              <p className="text-neutral-400">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}