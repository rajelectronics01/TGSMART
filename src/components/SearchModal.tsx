'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ChevronRight } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text.trim()) {
      setResults([]);
      return;
    }
    const q = text.toLowerCase();
    const matched = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.model ?? '').toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );
    setResults(matched);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search TG SMART products"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-neutral-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200">
          <Search className="w-5 h-5 text-neutral-400 mr-3" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search air coolers, washing machines, kitchen appliances..."
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => handleSearch('')}
              className="p-1 text-neutral-400 hover:text-neutral-600 mr-2"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-medium px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-neutral-100">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-sm text-neutral-500">
              <p className="font-medium text-neutral-700">Popular Searches</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['85L Desert Cooler', '70L Cooler', 'Top Load Washing Machine', 'Induction Cooktop', '32 inch TV'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleSearch(item)}
                    className="px-3 py-1 text-xs rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.category}/${product.slug}`}
                onClick={onClose}
                className="flex items-center justify-between py-3 px-2 rounded hover:bg-neutral-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-neutral-100 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={product.primaryImage}
                      alt={product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-black">
                      {product.name}
                    </h4>
                    <p className="text-xs text-neutral-500">{product.model ?? product.categoryName} · {product.categoryName}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))
          ) : (
            <div className="py-12 text-center text-neutral-500 text-sm">
              <p>No products found matching &ldquo;{query}&rdquo;.</p>
              <p className="mt-1 text-xs text-neutral-400">
                Browse our{' '}
                <Link
                  href="/products"
                  onClick={onClose}
                  className="underline text-neutral-800"
                >
                  full product catalogue
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
