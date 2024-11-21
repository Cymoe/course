"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ToastProvider } from "@/app/context/toast-context";
import { AuthProvider } from "./context/auth-context";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
}

const convex = new ConvexReactClient(convexUrl);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <ToastProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ToastProvider>
    </ConvexProvider>
  );
} 