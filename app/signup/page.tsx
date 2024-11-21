"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useToast } from "@/app/context/toast-context";
import { useAuth } from "@/app/context/auth-context";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { signUp } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showToast("Please fill in all fields", "error");
      return;
    }
    if (password.length < 6) {
      showToast("Password must be at least 6 characters", "error");
      return;
    }
    setIsLoading(true);
    try {
      await signUp(email, password, name);
    } catch (error) {
      // Error is handled in auth context
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-neutral-900/50 rounded-xl border border-neutral-800">
        <h2 className="text-2xl font-bold mb-6 text-neutral-200">Create Account</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-neutral-800 text-neutral-200 border border-neutral-700"
            disabled={isLoading}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-neutral-800 text-neutral-200 border border-neutral-700"
            disabled={isLoading}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-neutral-800 text-neutral-200 border border-neutral-700"
            disabled={isLoading}
            required
            minLength={6}
          />
          <button
            type="submit"
            className="w-full py-3 bg-neutral-200 text-neutral-900 rounded-lg font-medium hover:bg-neutral-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
          <p className="text-center text-neutral-400">
            Already have an account?{" "}
            <Link href="/login" className="text-neutral-200 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
} 