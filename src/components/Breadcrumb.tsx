import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-neutral-500">
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-neutral-900 font-medium truncate max-w-xs sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-black transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
