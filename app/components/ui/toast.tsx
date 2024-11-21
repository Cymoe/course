"use client";
import { useEffect } from "react";

export type ToastType = "error" | "success";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "error" ? "bg-red-500/90" : "bg-green-500/90";

  return (
    <div 
      className={`fixed bottom-4 right-4 p-4 rounded-lg ${bgColor} text-white z-50 backdrop-blur-sm`}
      role="alert"
    >
      {message}
    </div>
  );
} 