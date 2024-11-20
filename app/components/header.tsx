"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe2 } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Globe2 className="h-6 w-6 text-neutral-200" />
          <span className="font-bold text-neutral-200">Modern Human</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
        <Link href="/community" className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
            Community
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
            Pricing
          </Link>
         
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-neutral-200" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button 
            size="sm" 
            className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-0"
            asChild
          >
            <Link href="/pricing">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 