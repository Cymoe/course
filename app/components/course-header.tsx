"use client";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast-provider";

export function CourseHeader() {
  const router = useRouter();
  const { showToast } = useToast();

  const handleLogout = () => {
    // Clear any stored user data
    localStorage.removeItem('user');
    showToast("Logged out successfully", "success");
    router.push("/login");
  };

  return (
    <header className="border-b border-neutral-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-neutral-200">Modern Human</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
} 