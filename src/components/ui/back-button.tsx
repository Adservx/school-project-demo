"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={cn(
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40",
        "px-4 py-3 sm:px-5 sm:py-3.5 rounded-full",
        "bg-apex-gold text-apex-midnight",
        "shadow-lg hover:shadow-xl",
        "flex items-center gap-2",
        "transition-all duration-300",
        "hover:scale-105 hover:bg-apex-gold/90",
        "focus:outline-none focus:ring-2 focus:ring-apex-gold focus:ring-offset-2",
        "active:scale-95",
        "group",
        className
      )}
      aria-label="Go back"
      title="Go back"
    >
      <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-translate-x-0.5" />
      <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">Go back</span>
    </button>
  );
}
