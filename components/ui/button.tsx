import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

  const variants = {
    default: "bg-purple-600 hover:bg-purple-700 text-white shadow-lg",
    outline: "border border-gray-300 text-gray-200 hover:bg-gray-800",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], "px-4 py-2", className)}
      {...props}
    />
  );
}
