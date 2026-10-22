import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-widest uppercase text-neutral-400">
            404 Error
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#111111]">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed pt-2">
            The page you are looking for may have been moved, removed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-[#111111] hover:bg-[#333333] text-white text-xs font-semibold rounded transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-white border border-[#E5E5E5] hover:border-black text-neutral-900 text-xs font-semibold rounded transition-colors"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="border-t border-neutral-100 pt-6 text-xs text-neutral-400">
          Need direct help? Visit our{' '}
          <Link href="/support" className="text-neutral-700 underline">
            Customer Support Hub
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
