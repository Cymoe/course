"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe2 } from "lucide-react";
import { useAuth } from "@/app/context/auth-context";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const { logout, isAuthenticated } = useAuth();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16" />
      </header>
    );
  }

  const isCoursesPage = pathname === "/courses";

  return (
    <header className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Globe2 className="h-6 w-6 text-neutral-200" />
          <span className="font-bold text-neutral-200">Modern Human</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {!isCoursesPage && (
            <>
              <Link href="/about" className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
                About
              </Link>
              <Link href="/features" className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
                Features
              </Link>
              <Link href="/community" className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
                Community
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {isCoursesPage || isAuthenticated ? (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-neutral-400 hover:text-neutral-200"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-neutral-400 hover:text-neutral-200"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button 
                size="sm" 
                className="bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
                asChild
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
} 