"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./toast-context";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type AuthContextType = {
  isAuthenticated: boolean;
  logout: () => void;
  checkAuth: () => boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  logout: () => {},
  checkAuth: () => false,
  login: async () => {},
  signUp: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { showToast } = useToast();
  const loginMutation = useMutation(api.auth.login);
  const signupMutation = useMutation(api.auth.signup);

  useEffect(() => {
    setMounted(true);
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);

  const checkAuth = () => {
    if (!mounted) return false;
    const user = localStorage.getItem('user');
    return !!user;
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const result = await signupMutation({ email, password, name });
      if (mounted) {
        localStorage.setItem('user', JSON.stringify(result.user));
        setIsAuthenticated(true);
        showToast("Account created successfully!", "success");
        await new Promise(resolve => setTimeout(resolve, 500));
        router.push("/courses");
      }
    } catch (error: any) {
      if (mounted) {
        showToast(error.message || "Signup failed", "error");
        throw error;
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await loginMutation({ email, password });
      
      if (!result.success) {
        if (result.error === "no_account") {
          showToast("No account found. Redirecting to signup...", "error");
          await new Promise(resolve => setTimeout(resolve, 1500));
          router.push("/signup");
          return;
        }
        throw new Error(result.message);
      }

      localStorage.setItem('user', JSON.stringify(result.user));
      setIsAuthenticated(true);
      showToast("Successfully logged in!", "success");
      await new Promise(resolve => setTimeout(resolve, 500));
      router.push("/courses");
    } catch (error: any) {
      showToast(error.message || "Login failed", "error");
      throw error;
    }
  };

  const logout = async () => {
    if (mounted) {
      setIsAuthenticated(false);
      localStorage.removeItem('user');
      showToast("Logged out successfully", "success");
      await new Promise(resolve => setTimeout(resolve, 500));
      router.push("/");
    }
  };

  const value = {
    isAuthenticated,
    logout,
    checkAuth,
    login,
    signUp
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
} 