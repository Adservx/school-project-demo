import dynamic from "next/dynamic";
import { Navbar } from "@/components/navigation/navbar";
import { ReactNode } from "react";

// Lazy load Footer and BackButton as they're below the fold
const Footer = dynamic(() => import("@/components/home/footer").then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

const BackButton = dynamic(() => import("@/components/ui/back-button").then(mod => ({ default: mod.BackButton })), {
  ssr: false,
});

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-apex-midnight text-apex-platinum py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-apex-platinum/80 max-w-3xl">
                {description}
              </p>
            )}
          </div>
        </div>
        {/* Page Content */}
        <div className="container mx-auto px-4 py-12">
          {children}
        </div>
      </div>
      <Footer />
      <BackButton />
    </main>
  );
}
