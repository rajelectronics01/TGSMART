'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { BRAND_INFO, CATEGORIES } from '@/data/products';

/** Category links come from the catalogue data, so the nav follows the data. */
const CATEGORY_LINKS = CATEGORIES.map((cat) => ({
  href: `/products/${cat.slug}`,
  label: cat.name
}));

const PAGE_LINKS = [
  { href: '/support', label: 'Support' },
  { href: '/about-us', label: 'About' }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    `relative whitespace-nowrap rounded-sm py-1 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 ${
      isActive(href)
        ? 'font-semibold text-neutral-900 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-neutral-900'
        : 'text-neutral-600 hover:text-neutral-900'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#ECE9E4] bg-white/90 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between gap-6 sm:h-20">
            <Link
              href="/"
              className="flex-shrink-0 rounded-sm py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
              aria-label="TG SMART — home"
            >
              <div className="relative h-8 w-28 sm:h-9 sm:w-36">
                <Image
                  src="/images/brand/tg-smart-logo.png"
                  alt="TG SMART"
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Main">
              {CATEGORY_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/products" className={linkClass('/products')}>
                All products
              </Link>
              {PAGE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-sm p-2 text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                aria-label="Search products"
              >
                <Search className="h-[18px] w-[18px]" />
              </button>

              <a
                href={BRAND_INFO.marketplaces.amazonStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:inline-flex"
                aria-label="TG SMART store on Amazon India (opens in a new tab)"
              >
                <span>Amazon store</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-sm p-2 text-neutral-700 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 lg:hidden"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#ECE9E4] bg-white lg:hidden">
            <nav className="container-custom flex flex-col py-4" aria-label="Mobile">
              <span className="px-1 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Shop
              </span>
              {CATEGORY_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-[#F3F0EB] px-1 py-3 text-sm font-medium text-neutral-800 transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                className="border-b border-[#F3F0EB] px-1 py-3 text-sm font-medium text-neutral-800 transition-colors hover:text-black"
              >
                All products
              </Link>

              <span className="px-1 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                TG SMART
              </span>
              {[...PAGE_LINKS, { href: '/contact-us', label: 'Contact' }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-[#F3F0EB] px-1 py-3 text-sm font-medium text-neutral-800 transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={BRAND_INFO.marketplaces.amazonStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-neutral-700"
              >
                <span>Amazon store</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </nav>
          </div>
        )}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
