"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "What is the idea?",
    description:
      "Build, buy, and operate multiple businesses from a distance. Liberate yourself from the shackles of wage slavery, focusing instead on high-value tasks rather than the mundane busywork of day-to-day operations.",
    content: (
      <div className="h-full w-full bg-neutral-900/50 border border-neutral-800 rounded-xl flex items-center justify-center p-10">
        <p className="text-base font-semibold text-neutral-200">
          This is NOT freelancing or a remote job
        </p>
      </div>
    ),
  },
  {
    title: "How does it work?",
    description:
      "Use technology, people, and systems to work smarter, not harder, and build businesses that generate steady income on their own. Once a business becomes self-sustaining, move on to the next one, repeat the process and continue to expand your portfolio.",
    content: (
      <div className="h-full w-full bg-neutral-900/50 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-200">
        <p className="text-base">Build → Scale → Automate → Repeat</p>
      </div>
    ),
  },
  {
    title: "What can you expect to learn?",
    description:
      "High leverage opportunity vehicles for consistent cash flow. Focus on controllable outcomes with outsized returns. Create real value and develop tangible skill sets. Build valuable assets that can be sold for lucrative exits.",
    content: (
      <div className="h-full w-full bg-neutral-900/50 border border-neutral-800 rounded-xl flex flex-col items-center justify-center gap-3 p-10 text-neutral-200">
        <div className="text-sm">💡 High Leverage Opportunities</div>
        <div className="text-sm">🎯 Controllable Outcomes</div>
        <div className="text-sm">🛠️ Tangible Skills</div>
        <div className="text-sm">💰 Valuable Assets</div>
      </div>
    ),
  },
];

export function About() {
  return (
    <section className="bg-black  pt-40">
      <div className="container mx-auto">
        <StickyScroll 
          content={content} 
          contentClassName="text-sm"
        />
      </div>
    </section>
  );
}