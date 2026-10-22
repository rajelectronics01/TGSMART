import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, CATEGORIES } from '@/data/products';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E5E5] text-neutral-600 text-sm">
      {/* Brand Trust & Assurance Strip */}
      <div className="border-b border-[#E5E5E5] bg-[#F9F9F9] py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-neutral-900 shadow-xs flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-neutral-900 text-xs sm:text-sm">Authentic Brand Products</h5>
                <p className="text-xs text-neutral-500 mt-0.5">Direct manufacturer design & QA</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-neutral-900 shadow-xs flex-shrink-0">
                <span className="text-xs font-semibold text-neutral-900">a</span>
              </div>
              <div>
                <h5 className="font-semibold text-neutral-900 text-xs sm:text-sm">Official Amazon Store</h5>
                <p className="text-xs text-neutral-500 mt-0.5">Safe delivery & Prime perks</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-neutral-900 shadow-xs flex-shrink-0">
                <span className="font-bold text-xs text-neutral-900">F</span>
              </div>
              <div>
                <h5 className="font-semibold text-neutral-900 text-xs sm:text-sm">Verified on Flipkart</h5>
                <p className="text-xs text-neutral-500 mt-0.5">Reliable nationwide fulfillment</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-neutral-900 shadow-xs flex-shrink-0">
                <MapPin className="w-5 h-5 text-neutral-900" />
              </div>
              <div>
                <h5 className="font-semibold text-neutral-900 text-xs sm:text-sm">Telangana Regional Base</h5>
                <p className="text-xs text-neutral-500 mt-0.5">Hyderabad & Secunderabad focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-column Footer */}
      <div className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Column 1: Brand Info (2 cols wide on desktop) */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block" aria-label="TG SMART Home">
                <div className="relative h-8 w-32 sm:w-36">
                  <Image
                    src="/images/brand/tg-smart-logo.png"
                    alt="TG SMART Logo"
                    fill
                    sizes="(max-width: 640px) 128px, 144px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
                Practical home appliances for a smarter everyday. Engineered for reliability, energy efficiency, and modern Indian homes.
              </p>

              <div className="pt-2 text-xs text-neutral-500 space-y-1.5">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Serving Hyderabad, Secunderabad & PAN India</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>support@tgsmart.in</span>
                </p>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={BRAND_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
                  aria-label="TG SMART Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
                  aria-label="TG SMART YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
                  aria-label="TG SMART Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-neutral-900 text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="hover:text-black transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-black transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/products/air-coolers" className="hover:text-black transition-colors">
                    Air Coolers
                  </Link>
                </li>
                <li>
                  <Link href="/products/washing-machines" className="hover:text-black transition-colors">
                    Washing Machines
                  </Link>
                </li>
                <li>
                  <Link href="/products/other-appliances" className="hover:text-black transition-colors">
                    Other Appliances
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-black transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Support */}
            <div>
              <h4 className="font-semibold text-neutral-900 text-sm mb-4">Support</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/support" className="hover:text-black transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/support#manuals" className="hover:text-black transition-colors">
                    Product Manuals
                  </Link>
                </li>
                <li>
                  <Link href="/support#warranty" className="hover:text-black transition-colors">
                    Warranty & Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-black transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us#hyderabad" className="hover:text-black transition-colors">
                    Telangana Regional Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Marketplaces */}
            <div>
              <h4 className="font-semibold text-neutral-900 text-sm mb-4">Shop on Marketplaces</h4>
              <div className="space-y-3">
                <a
                  href={BRAND_INFO.marketplaces.amazonStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-[#E5E5E5] hover:border-black bg-white hover:bg-neutral-50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-900">amazon</span>
                    <span className="text-xs text-neutral-500">Store</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                </a>

                <a
                  href={BRAND_INFO.marketplaces.flipkartSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-[#E5E5E5] hover:border-neutral-900 bg-white hover:bg-neutral-50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-900">Flipkart</span>
                    <span className="text-xs text-neutral-500">Store</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </a>
              </div>
              <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                Products are fulfilled securely by Amazon and Flipkart with official manufacturer warranty.
              </p>
            </div>
          </div>

          {/* Bottom Legal bar */}
          <div className="mt-12 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2026 TG SMART. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-black transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap.xml" className="hover:text-black transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
