"use client";
import React from "react";

export function About() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* First Column - Left Aligned */}
          <div className="flex flex-col md:flex-row items-start gap-16 mb-32">
            <div className="w-full md:w-1/2 md:sticky md:top-24">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                What is the idea?
              </h2>
              <p className="text-neutral-400">
                Build, buy, and operate multiple businesses from a distance. Liberate yourself from the shackles of wage slavery, focusing instead on high-value tasks rather than the mundane busywork of day-to-day operations.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:ml-auto">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 space-y-4 min-h-[200px] flex flex-col justify-center">
                <div className="text-neutral-200 text-lg">🎯 This is NOT freelancing</div>
                <div className="text-neutral-200 text-lg">💼 This is NOT a remote job</div>
                <div className="text-neutral-200 text-lg">🌐 This is business ownership</div>
              </div>
            </div>
          </div>

          {/* Second Column - Right Aligned */}
          <div className="flex flex-col md:flex-row items-start gap-16 mb-32">
            <div className="w-full md:w-1/2 md:sticky md:top-24 md:order-2">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                How does it work?
              </h2>
              <p className="text-neutral-400">
                Use technology, people, and systems to work smarter, not harder, and build businesses that generate steady income on their own. Once a business becomes self-sustaining, move on to the next one, repeat the process and continue to expand your portfolio.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:mr-auto md:order-1">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 space-y-4 min-h-[200px] flex flex-col justify-center">
                <div className="text-neutral-200 text-lg">🔄 Build the system</div>
                <div className="text-neutral-200 text-lg">📈 Scale operations</div>
                <div className="text-neutral-200 text-lg">⚡ Automate processes</div>
                <div className="text-neutral-200 text-lg">🔁 Repeat & expand</div>
              </div>
            </div>
          </div>

          {/* Third Column - Left Aligned */}
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="w-full md:w-1/2 md:sticky md:top-24">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                What can you expect to learn?
              </h2>
              <p className="text-neutral-400">
                High leverage opportunity vehicles for consistent cash flow. Focus on controllable outcomes with outsized returns. Create real value and develop tangible skill sets. Build valuable assets that can be sold for lucrative exits.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:ml-auto">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 space-y-4 min-h-[200px] flex flex-col justify-center">
                <div className="text-neutral-200 text-lg">💡 High Leverage Opportunities</div>
                <div className="text-neutral-200 text-lg">🎯 Controllable Outcomes</div>
                <div className="text-neutral-200 text-lg">🛠️ Tangible Skills</div>
                <div className="text-neutral-200 text-lg">💰 Valuable Assets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}