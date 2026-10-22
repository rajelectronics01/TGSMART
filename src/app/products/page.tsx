'use client';

import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES, getMrp } from '@/data/products';

type SortKey = 'featured' | 'price-low' | 'price-high' | 'name';

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured first' },
  { value: 'price-low', label: 'M.R.P.: low to high' },
  { value: 'price-high', label: 'M.R.P.: high to low' },
  { value: 'name', label: 'Name: A to Z' }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortKey>('featured');

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        (product.model ?? '').toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.keyHighlights.some((h) => h.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return (getMrp(a) ?? Infinity) - (getMrp(b) ?? Infinity);
        case 'price-high':
          return (getMrp(b) ?? -Infinity) - (getMrp(a) ?? -Infinity);
        default:
          return Number(b.isFeatured ?? false) - Number(a.isFeatured ?? false);
      }
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const isFiltered = selectedCategory !== 'all' || searchQuery.trim() !== '';

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Page header */}
      <div className="border-b border-neutral-900/10 bg-[#F4ECE3]">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Products' }]} />
          <div className="max-w-2xl py-10 sm:py-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              The catalogue
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.08] text-neutral-900">
              Every TG SMART appliance
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              {CATEGORIES.map((c) => c.name.toLowerCase()).join(', ')} — {PRODUCTS.length} models,
              each one listed and shipped through Amazon India.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* Filter bar */}
        <div className="flex flex-col gap-4 border-b border-neutral-200 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" role="group" aria-label="Filter by category">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              aria-pressed={selectedCategory === 'all'}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-neutral-900 text-white'
                  : 'border border-neutral-300/80 bg-white text-neutral-700 hover:border-neutral-900'
              }`}
            >
              All appliances{' '}
              <span className={selectedCategory === 'all' ? 'text-white/60' : 'text-neutral-400'}>
                {PRODUCTS.length}
              </span>
            </button>

            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  aria-pressed={isActive}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-white'
                      : 'border border-neutral-300/80 bg-white text-neutral-700 hover:border-neutral-900'
                  }`}
                >
                  {cat.name}{' '}
                  <span className={isActive ? 'text-white/60' : 'text-neutral-400'}>{count}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 lg:w-64">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models or features"
                aria-label="Search products"
                className="w-full rounded-full border border-neutral-300/80 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
              />
            </div>

            <label className="flex flex-shrink-0 items-center gap-2 text-xs text-neutral-500">
              <span className="sr-only sm:not-sr-only">Sort</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="cursor-pointer rounded-full border border-neutral-300/80 bg-white px-3.5 py-2.5 text-xs font-semibold text-neutral-800 focus:border-neutral-900 focus:outline-none"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* Result count */}
        <div className="flex items-center gap-3 py-5 text-xs text-neutral-500">
          <span>
            Showing <span className="font-semibold text-neutral-900">{filteredProducts.length}</span> of {PRODUCTS.length}
          </span>
          {isFiltered && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 rounded-full border border-neutral-300/80 px-2.5 py-1 font-semibold text-neutral-700 transition-colors hover:border-neutral-900"
            >
              <X className="h-3 w-3" />
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-neutral-300 py-20 text-center">
            <p className="text-base font-semibold text-neutral-900">Nothing matches that search</p>
            <p className="mt-1.5 text-sm text-neutral-600">
              Try a different model name, or clear the filters to see all {PRODUCTS.length} appliances.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-xl bg-neutral-900 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
