import { ArrowRight, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd')] bg-cover bg-center opacity-20" />
      <div className="relative z-20 container mx-auto px-4 py-32 text-center">
        <Globe2 className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Modern Human
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Build and scale remote businesses to unlock location independence
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          A second brain showing you frameworks for running modern-day companies from anywhere
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="group" asChild>
            <Link href="/courses">
              Get Access
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">Coming 2025</p>
        </div>
      </div>
    </div>
  );
}