import { ArrowRight, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function Hero() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-black bg-grid-small-white/[0.2] relative pt-40 pb-10">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-20 container mx-auto px-4 py-200 text-center">
        <div className="flex justify-center mb-6">
          <Link href="/pricing" className="text-sm px-3 py-1 border border-neutral-700 rounded-full text-neutral-400 flex items-center gap-2 animate-[fade_3s_ease-in-out_infinite] hover:text-neutral-300 hover:border-neutral-600 transition-colors">
            <span>✨</span>
            25% Off Launch Discount
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 max-w-4xl mx-auto">
        Unlock location independence with remote business 
        </h1>
       
        <p className="text-lg text-neutral-400 mb-8 max-w-[320px] sm:max-w-xl mx-auto font-medium">
          a guid for running modern day business from anywhere in the world
        </p>
        <div className="flex items-center justify-center mb-8">
          <Link href="/courses">
            <HoverBorderGradient className="group px-6 w-[175px]">
              Get Access
              <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  );
}