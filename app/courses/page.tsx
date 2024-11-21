"use client";
import { AuthCheck } from "@/app/components/auth-check";
import { Header } from "@/app/components/header";
import { useState, useEffect } from "react";

export default function CoursesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AuthCheck requireAuth={true}>
      <div className="min-h-screen bg-black bg-grid-small-white/[0.2]">
        <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-200 mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Available Courses
            </h2>
            {/* Course content */}
          </div>
        </main>
      </div>
    </AuthCheck>
  );
}