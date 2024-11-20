import { Hero } from "@/app/components/hero";
import { Features } from "@/app/components/features";
import { About } from "@/app/components/about";
import { Wealth } from "@/app/components/wealth";
import { Value } from "@/app/components/value";
import { Mission } from "@/app/components/mission";
import { ArrowRight, Star } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <About />
      <Wealth />
      <Value />
      <Mission />
    </main>
  );
}