"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuProps {
  title: string;
  sections: MegaMenuSection[];
  prefetch?: boolean;
}

export function MegaMenu({ title, sections, prefetch = true }: MegaMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-apex-platinum hover:text-apex-gold transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 z-50 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-100 p-6 min-w-[600px]">
            <div className="grid grid-cols-2 gap-8">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-display font-semibold text-apex-midnight mb-3 text-sm uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          href={item.href}
                          prefetch={prefetch}
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-apex-midnight/5 hover:text-apex-gold transition-colors"
                        >
                          <div className="font-medium">{item.title}</div>
                          {item.description && (
                            <div className="text-xs text-gray-500 mt-0.5">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
