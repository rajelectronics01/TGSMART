import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

/** Inline helpers to avoid turbopack client-module boundary issues */
function getMrp(product: Product): number | undefined {
  return product.originalPrice ?? product.price;
}

function formatInr(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function getHeadlineSpec(product: Product): string | undefined {
  const labels = ['Tank Capacity', 'Capacity', 'Winding Material', 'Screen Size'];
  for (const label of labels) {
    for (const group of product.specifications) {
      const hit = group.items.find((item) => item.label.toLowerCase() === label.toLowerCase());
      if (hit) return hit.value;
    }
  }
  return undefined;
}

export function ProductCard({ product }: ProductCardProps) {
  const detailHref = `/products/${product.category}/${product.slug}`;
  const mrp = getMrp(product);
  const headlineSpec = getHeadlineSpec(product);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#ECE9E4] bg-white transition-colors duration-300 hover:border-neutral-400">
      <Link
        href={detailHref}
        className="relative block aspect-[4/3] overflow-hidden bg-[#FAFAF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-900"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.primaryImage}
          alt={`${product.name} — ${product.categoryName}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-7 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
          <span>{product.categoryName}</span>
          {headlineSpec && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-600">{headlineSpec}</span>
            </>
          )}
        </div>

        <h3 className="mt-2.5 text-[0.95rem] font-semibold leading-snug tracking-[-0.01em] text-neutral-900">
          <Link
            href={detailHref}
            className="rounded-sm transition-colors hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            {product.name}
          </Link>
        </h3>

        {product.model && (
          <p className="mt-1.5 text-xs text-neutral-500">Model {product.model}</p>
        )}

        {mrp && (
          <p className="mt-3.5 text-sm text-neutral-900">
            <span className="text-neutral-500">M.R.P.</span>{' '}
            <span className="font-semibold tracking-[-0.01em]">{formatInr(mrp)}</span>
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <Link
            href={detailHref}
            className="inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-neutral-900 transition-colors hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <span>View details</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {product.amazonUrl && (
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              aria-label={`View ${product.name} on Amazon India (opens in a new tab)`}
            >
              <span>Amazon</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
