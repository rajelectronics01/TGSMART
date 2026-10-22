import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ProductCard } from '@/components/ProductCard';
import { JsonLd } from '@/components/JsonLd';
import {
  CATEGORIES,
  PRODUCTS,
  BRAND_INFO,
  Product,
  getSpecValue,
  getHeadlineSpec
} from '@/data/products';

export const instant = false;

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const SITE = 'https://tgsmart.in';

/** Lifestyle scenes shared with the home page; categories without one fall back to the product shot. */
const CATEGORY_SCENES: Record<string, { src: string; fit: string; alt: string }> = {
  'air-coolers': {
    src: '/images/lifestyle/hero-room-cooler.jpg',
    fit: 'object-cover object-right',
    alt: 'TG SMART desert air cooler standing in a sunlit Indian living room'
  },
  'washing-machines': {
    src: '/images/lifestyle/hero-room-ambient.jpg',
    fit: 'object-cover object-[60%_center]',
    alt: 'Sunlit room interior where a TG SMART washing machine is shown'
  }
};

const CATEGORY_PRODUCT_OVERLAY: Record<string, { src: string; alt: string }> = {
  'washing-machines': {
    src: '/images/lifestyle/hero-washing-machine.png',
    alt: 'TG SMART 7.5 kg semi-automatic top load washing machine'
  }
};

/**
 * Catalogue facts drawn from the products themselves, so the page states only
 * what the product data supports.
 */
function categoryFacts(products: Product[]) {
  const specs = new Map<string, string[]>();

  for (const product of products) {
    const capacity = getSpecValue(product, 'Tank Capacity', 'Capacity');
    if (capacity) specs.set('Capacity', [...(specs.get('Capacity') ?? []), capacity]);

    const warranty = getSpecValue(product, 'Warranty');
    if (warranty) specs.set('Warranty', [...(specs.get('Warranty') ?? []), warranty]);
  }

  const chips: string[] = [
    `${products.length} ${products.length === 1 ? 'model' : 'models'}`
  ];

  const capacities = specs.get('Capacity');
  if (capacities?.length) {
    // de-duplicate and order by the numeric part, so 40/70/85 reads cleanly
    const unique = [...new Set(capacities)].sort(
      (a, b) => (parseFloat(a) || 0) - (parseFloat(b) || 0)
    );
    chips.push(unique.join(' · '));
  }

  const warranties = specs.get('Warranty');
  // Only claim a warranty when every model in the category states one.
  if (warranties && warranties.length === products.length) {
    chips.push([...new Set(warranties)].join(' · '));
  }

  if (products.every((p) => p.availability.includes('Amazon'))) {
    chips.push('Available on Amazon India');
  }

  return chips;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return { title: 'Category Not Found' };

  const products = PRODUCTS.filter((p) => p.category === cat.slug);
  const description = `${cat.name} from TG SMART: ${products.length} ${
    products.length === 1 ? 'model' : 'models'
  } (${products.map((p) => p.model ?? p.name).join(', ')}), with full specifications and Amazon India listings.`;

  return {
    title: `${cat.name} | TG SMART Home Appliances India`,
    description,
    alternates: {
      canonical: `${SITE}/products/${cat.slug}`,
    },
    openGraph: {
      type: 'website',
      url: `${SITE}/products/${cat.slug}`,
      title: `${cat.name} | TG SMART India`,
      description,
      images: [cat.image],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.category === cat.slug);
  const scene = CATEGORY_SCENES[cat.slug];
  const overlay = CATEGORY_PRODUCT_OVERLAY[cat.slug];
  const facts = categoryFacts(categoryProducts);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: `${SITE}/products/${cat.slug}` }
    ]
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${cat.name} | TG SMART`,
    url: `${SITE}/products/${cat.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryProducts.length,
      itemListElement: categoryProducts.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE}/products/${product.category}/${product.slug}`,
        name: product.name
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[breadcrumbSchema, collectionSchema]} />

      {/* Header */}
      <div className="border-b border-[#ECE9E4]">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Products', href: '/products' },
              { label: cat.name },
            ]}
          />

          {/* Editorial hero */}
          <div className="grid grid-cols-1 items-center gap-10 pb-12 pt-4 sm:pb-14 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h1 className="text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-4xl">
                {cat.name}
              </h1>

              <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
                {categoryProducts.length === 1
                  ? 'One TG SMART model, listed on Amazon India with its full specification sheet.'
                  : `${categoryProducts.length} TG SMART models, each listed on Amazon India with its full specification sheet.`}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-full border border-[#ECE9E4] px-3 py-1.5 text-xs font-medium text-neutral-700"
                  >
                    {fact}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#models"
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <span>Explore models</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={BRAND_INFO.marketplaces.amazonStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <span>Brand store on Amazon</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F4ECE3]">
                <Image
                  src={scene ? scene.src : cat.image}
                  alt={scene ? scene.alt : `TG SMART ${cat.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={scene ? scene.fit : 'object-contain p-10'}
                />
                {overlay && (
                  <div className="absolute bottom-[8%] left-1/2 h-[72%] w-[42%] -translate-x-1/2">
                    <Image
                      src={overlay.src}
                      alt={overlay.alt}
                      fill
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catalogue */}
      <section id="models" className="scroll-mt-24 py-14 sm:py-16" aria-labelledby="models-heading">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#ECE9E4] pb-6">
            <div>
              <h2 id="models-heading" className="text-xl font-semibold tracking-[-0.02em] text-neutral-900">
                {cat.name} models
              </h2>
              <p className="mt-1.5 text-sm text-neutral-600">
                Showing all {categoryProducts.length} {categoryProducts.length === 1 ? 'model' : 'models'}.
                M.R.P. shown; marketplace price may differ.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <span>All appliances</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-[#ECE9E4] py-16 text-center">
              <p className="text-sm text-neutral-600">
                No models are listed in this category yet.
              </p>
            </div>
          )}

          {/* Specification summary — values come straight from each model's spec sheet */}
          {categoryProducts.length > 1 && (
            <div className="mt-12 overflow-x-auto rounded-xl border border-[#ECE9E4]">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{cat.name} specification comparison</caption>
                <thead className="border-b border-[#ECE9E4] bg-[#FAFAF8] text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Model</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Key specification</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">M.R.P.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ECE9E4]">
                  {categoryProducts.map((product) => (
                    <tr key={product.id}>
                      <th scope="row" className="px-5 py-4 font-medium text-neutral-900">
                        <Link
                          href={`/products/${product.category}/${product.slug}`}
                          className="rounded-sm transition-colors hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                        >
                          {product.model ?? product.name}
                        </Link>
                      </th>
                      <td className="px-5 py-4 text-neutral-700">{getHeadlineSpec(product) ?? '—'}</td>
                      <td className="px-5 py-4 text-neutral-700">
                        {product.originalPrice ? `₹${product.originalPrice.toLocaleString('en-IN')}` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Support */}
      <section className="border-t border-[#ECE9E4] bg-[#FAFAF8] py-12" aria-labelledby="support-heading">
        <div className="container-custom">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="support-heading" className="text-base font-semibold text-neutral-900">
                Questions about {cat.name.toLowerCase()}?
              </h2>
              <p className="mt-1.5 text-sm text-neutral-600">
                Our team in {BRAND_INFO.businessLocation.city} can help with specifications, orders and after-sales.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-lg border border-[#ECE9E4] bg-white px-5 py-3 text-xs font-semibold text-neutral-900 transition-colors hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <span>Support centre</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <a
                href={`mailto:${BRAND_INFO.businessLocation.email}`}
                className="inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{BRAND_INFO.businessLocation.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="py-12" aria-labelledby="other-categories">
        <div className="container-custom">
          <h2 id="other-categories" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Other categories
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CATEGORIES.filter((c) => c.slug !== cat.slug).map((otherCat) => {
              const count = PRODUCTS.filter((p) => p.category === otherCat.slug).length;
              return (
                <Link
                  key={otherCat.slug}
                  href={`/products/${otherCat.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-[#ECE9E4] px-6 py-5 transition-colors hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.01em] text-neutral-900">
                      {otherCat.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {count} {count === 1 ? 'model' : 'models'}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-neutral-500 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
