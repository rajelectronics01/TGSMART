'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { HeroCarousel } from '@/components/HeroCarousel';
import { CategoryShowcase } from '@/components/CategoryShowcase';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS, BRAND_INFO } from '@/data/products';

type CategoryTab = 'all' | 'air-coolers' | 'washing-machines' | 'other-appliances';

const CATEGORY_TABS: { id: CategoryTab; label: string }[] = [
  { id: 'all', label: 'All products' },
  { id: 'air-coolers', label: 'Air coolers' },
  { id: 'washing-machines', label: 'Washing machines' },
  { id: 'other-appliances', label: 'Other appliances' }
];

const tabCount = (id: CategoryTab) =>
  id === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === id).length;

export default function HomePage() {
  const [activeCategoryTab, setActiveCategoryTab] = useState<CategoryTab>('all');

  const filteredProducts = activeCategoryTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategoryTab);


  return (
    <div className="flex flex-col min-h-screen bg-neutral-50/50">
      {/* 1. HERO — full-bleed editorial carousel */}
      <HeroCarousel />

      {/* 2. SHOP BY CATEGORY */}
      <CategoryShowcase />

      {/* 3. PRODUCT CATALOGUE */}
      <section className="bg-[#FBF7F2] py-14 sm:py-20" aria-labelledby="catalogue-heading">
        <div className="container-custom">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                The range
              </span>
              <h2
                id="catalogue-heading"
                className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1] text-neutral-900"
              >
                Appliances built for
                <br />
                everyday Indian homes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Every model below is listed on Amazon India and backed directly by TG SMART.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter products by category">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategoryTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategoryTab(tab.id)}
                    aria-pressed={isActive}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? 'bg-neutral-900 text-white'
                        : 'border border-neutral-300/80 bg-white text-neutral-700 hover:border-neutral-900'
                    }`}
                  >
                    {tab.label}{' '}
                    <span className={isActive ? 'text-white/60' : 'text-neutral-400'}>
                      {tabCount(tab.id)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE APPLIANCE COMPARISON TABLE */}
      <section className="py-14 sm:py-20 bg-white border-y border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              BUYING GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Compare TG SMART Air Coolers
            </h2>
            <p className="text-sm text-neutral-600">
              Find the perfect tank capacity, air throw, and dimensions tailored to your room size.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-xs">
            <table className="w-full text-left text-sm text-neutral-800">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-xs font-bold uppercase text-neutral-500 tracking-wider">
                <tr>
                  <th className="py-4 px-6">Specification</th>
                  <th className="py-4 px-6 text-neutral-900">TG SMART 85L Glass Top</th>
                  <th className="py-4 px-6">TG SMART 70L Light Grey</th>
                  <th className="py-4 px-6">TG SMART 40L Dark Grey</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-neutral-500">Tank Capacity</td>
                  <td className="py-3.5 px-6 font-bold text-neutral-900">85 Litres</td>
                  <td className="py-3.5 px-6">70 Litres</td>
                  <td className="py-3.5 px-6">40 Litres</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-neutral-500">Top Surface</td>
                  <td className="py-3.5 px-6 font-semibold text-neutral-900">Toughened Glass Finish</td>
                  <td className="py-3.5 px-6">ABS Plastic</td>
                  <td className="py-3.5 px-6">ABS Plastic</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-neutral-500">Recommended Room Size</td>
                  <td className="py-3.5 px-6 font-semibold text-neutral-900">Up to 550 sq. ft. (Large Halls)</td>
                  <td className="py-3.5 px-6">Up to 420 sq. ft. (Bedrooms)</td>
                  <td className="py-3.5 px-6">Up to 250 sq. ft. (Personal/Study)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-neutral-500">Cooling Media</td>
                  <td className="py-3.5 px-6">3-Sided Dense Honeycomb</td>
                  <td className="py-3.5 px-6">Dense Honeycomb</td>
                  <td className="py-3.5 px-6">Honeycomb Pad</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-neutral-500">Speed Controls</td>
                  <td className="py-3.5 px-6">3 Speed (Low, Med, High)</td>
                  <td className="py-3.5 px-6">3 Speed Ergonomic</td>
                  <td className="py-3.5 px-6">3 Speed Dial</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-neutral-500">M.R.P.</td>
                  <td className="py-3.5 px-6 text-base font-semibold text-neutral-900">₹20,990</td>
                  <td className="py-3.5 px-6 text-base font-semibold text-neutral-900">₹11,990</td>
                  <td className="py-3.5 px-6 text-base font-semibold text-neutral-900">₹10,490</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-neutral-500">Direct Purchase</td>
                  <td className="py-4 px-6">
                    <a
                      href="https://www.amazon.in/SMART-Air-Cooler-85L-Operations/dp/B0GZ4YY7HC/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-700"
                    >
                      <span>Buy 85L on Amazon</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="https://www.amazon.in/dp/B0F3DGZX5Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-md shadow-xs transition-colors"
                    >
                      <span>Buy 70L on Amazon</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="https://www.amazon.in/TG-SMART-Plastic-Body-Cooler/dp/B0F3DHZNRH/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-md shadow-xs transition-colors"
                    >
                      <span>Buy 40L on Amazon</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING & QUALITY SHOWCASE (Luxury Charcoal Section) */}
      <section className="py-16 sm:py-24 bg-[#0F0F12] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                PRECISION ENGINEERING
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Built to Outperform.<br />
                Designed to Endure.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Every TG SMART home appliance is designed to handle Indian voltage fluctuations, intense peak summer heatwaves, and daily family wear-and-tear without compromises.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 text-neutral-300 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">100% Pure Copper Windings</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Ensures superior thermal conductivity, higher energy efficiency, and extended motor life.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 text-neutral-300 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Anti-Corrosion ABS & Toughened Glass</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Impervious to rust, water damage, and scratches even after years of humid monsoon use.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 text-neutral-300 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Low-Noise Aerodynamic Reverse Blade Fan</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Moves large volumes of air without disturbing your sleep or workspace focus.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl p-6 flex items-center justify-center">
                <Image
                  src="/images/products/tg-smart-85l-air-cooler.png"
                  alt="TG SMART Flagship Engineering"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OFFICIAL AMAZON BRAND STORE SHOWCASE */}
      <section className="py-14 sm:py-20 bg-neutral-100/70 border-b border-neutral-200">
        <div className="container-custom">
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold tracking-tight text-neutral-900">amazon.in</span>
                <span className="rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-semibold text-neutral-700">
                  Verified storefront
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Official TG SMART Amazon Store
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Enjoy fast Amazon Prime delivery, secure payment methods (UPI, Cards, Net Banking, EMI), and straightforward return windows on all authorized TG SMART appliances.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto">
              <a
                href={BRAND_INFO.marketplaces.amazonStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-neutral-900 px-8 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-neutral-700 sm:w-auto"
              >
                Visit Amazon brand store
              </a>
              <a
                href={BRAND_INFO.marketplaces.flipkartSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl border border-neutral-300 bg-white px-6 py-4 text-center text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-900 sm:w-auto"
              >
                Find on Flipkart
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
