"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-4">
      {/* Single grid background with fade */}
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-20 container mx-auto px-4">
       
        <div className="relative max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://www.loom.com/embed/fe791656950a435f9ab4700db3c3c14b"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}   