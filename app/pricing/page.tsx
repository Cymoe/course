"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="relative min-h-screen bg-black bg-grid-small-white/[0.2]">
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-neutral-400 mb-8">
            Choose the plan that's right for you
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-neutral-200' : 'text-neutral-400'}`}>Monthly</span>
            <button
              className="relative w-16 h-8 rounded-full bg-neutral-800 transition-colors"
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-neutral-200 transition-transform ${isYearly ? 'translate-x-8' : ''}`} />
            </button>
            <span className={`text-sm ${isYearly ? 'text-neutral-200' : 'text-neutral-400'}`}>Yearly</span>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
            {isYearly && (
              <div className="absolute -top-5 right-8">
                <span className="px-3 py-1 text-sm bg-neutral-800 text-neutral-200 rounded-full">
                  Save 20%
                </span>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-neutral-200 mb-2">
                {isYearly ? 'Yearly' : 'Monthly'}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-neutral-200">
                  {isYearly ? '$279' : '$29'}
                </span>
                <span className="text-neutral-400">
                  {isYearly ? '/year' : '/month'}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-neutral-300">
                <Check className="h-5 w-5 text-neutral-500" />
                Full access to all content
              </li>
              <li className="flex items-center gap-3 text-neutral-300">
                <Check className="h-5 w-5 text-neutral-500" />
                Regular updates
              </li>
              <li className="flex items-center gap-3 text-neutral-300">
                <Check className="h-5 w-5 text-neutral-500" />
                Community access
              </li>
              {isYearly && (
                <>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <Check className="h-5 w-5 text-neutral-500" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <Check className="h-5 w-5 text-neutral-500" />
                    Early access to new content
                  </li>
                </>
              )}
            </ul>

            <Button 
              size="lg" 
              className={`w-full border-0 ${
                isYearly 
                  ? 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900' 
                  : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
              }`}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 