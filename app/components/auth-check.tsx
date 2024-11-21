"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuthCheckProps = {
  children: React.ReactNode;
  requireAuth?: boolean;
};

export function AuthCheck({ children, requireAuth = false }: AuthCheckProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const user = localStorage.getItem('user');
    const isAuthenticated = !!user;
    
    if (requireAuth && !isAuthenticated) {
      router.replace("/login");
    } else if (!requireAuth && isAuthenticated) {
      router.replace("/courses");
    }
  }, [requireAuth, router]);

  // Don't render anything until mounted
  if (!mounted) {
    return null;
  }

  return <>{children}</>;
} 