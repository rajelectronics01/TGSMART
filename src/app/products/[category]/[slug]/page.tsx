import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Check, ArrowRight, ExternalLink, HelpCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ProductGallery } from '@/components/ProductGallery';
import { ProductCard } from '@/components/ProductCard';
import { JsonLd } from '@/components/JsonLd';
import { PRODUCTS, CATEGORIES, getMrp, formatInr, getSpecValue } from '@/data/products';

export const instant = false;

interface ProductDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.seoTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://tgsmart.in/products/${product.category}/${product.slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.metaDescription,
      images: [
        {
          url: product.primaryImage,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug && p.category === category);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  // Construct Google Product JSON-LD schema without fake prices or fake reviews
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [`https://tgsmart.in${product.primaryImage}`],
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'TG SMART',
    },
    model: product.model,
    category: product.categoryName,
    url: `https://tgsmart.in/products/${product.category}/${product.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tgsmart.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: product.categoryName,
        item: `https://tgsmart.in/products/${product.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://tgsmart.in/products/${product.category}/${product.slug}`,
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      <JsonLd data={[productSchema, breadcrumbSchema]} />

      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#E5E5E5] bg-[#FAFAFA]">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Products', href: '/products' },
              { label: product.categoryName, href: `/products/${product.category}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Main Product Overview: Gallery + Core Info */}
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Product Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.gallery} productName={product.name} />
          </div>

          {/* Right Column: Key Details & Purchasing Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {product.categoryName}{product.model ? ` · ${product.model}` : ''}
                </span>
                {product.asin && (
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded">
                    ASIN: {product.asin}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                {product.name}
              </h1>
              <p className="text-sm text-neutral-600 mt-2 font-medium">
                {product.tagline}
              </p>

            </div>

            {/* M.R.P. — the site quotes M.R.P. only */}
            {getMrp(product) && (
              <div className="rounded-xl border border-[#ECE9E4] bg-[#FAFAF8] p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  M.R.P.
                </span>
                <p className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-3xl">
                  {formatInr(getMrp(product)!)}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Inclusive of all taxes. Marketplace price may differ.
                </p>
              </div>
            )}

            {/* Key Bullet Highlights */}
            <div className="py-4 border-y border-neutral-200 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Key Product Highlights
              </h4>
              {product.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <div className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-neutral-900">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Marketplace Purchasing Options */}
            <div className="space-y-3 bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  Order Online via Marketplace
                </span>
                <span className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-600">
                  {product.availability}
                </span>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Listed on Amazon India, with its delivery, payment and returns options:
              </p>

              <div className="flex flex-col gap-2.5 pt-1">
                {product.amazonUrl && (
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
                  >
                    <span>Buy Now on Amazon India</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {product.flipkartUrl && (
                  <a
                    href={product.flipkartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-xs font-semibold text-neutral-800 transition-colors hover:border-neutral-900"
                  >
                    <span>Check on Flipkart</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Authentic Brand Guarantee Notice */}
            <div className="flex items-center gap-3 text-xs text-neutral-500 pt-1">
              <ShieldCheck className="h-4 w-4 flex-shrink-0 text-neutral-500" />
              <span>
                Official TG SMART product
                {getSpecValue(product, 'Warranty') ? ` · ${getSpecValue(product, 'Warranty')}` : ''}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. KEY FEATURES SECTION (Matching Mockup with 4 Visual Cards) */}
      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <section className="py-12 sm:py-16 bg-[#FAFAFA] border-y border-[#E5E5E5]">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                Key Features
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Engineered with practical features for everyday ease and endurance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {product.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E5E5] rounded-md overflow-hidden flex flex-col hover:border-black transition-all"
                >
                  {feature.image && (
                    <div className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-neutral-900 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. OTHER CATEGORIES */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            More from TG SMART
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CATEGORIES.filter((c) => c.slug !== product.category).map((otherCat) => (
              <Link
                key={otherCat.slug}
                href={`/products/${otherCat.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-[#F4ECE3] px-6 py-6 transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(90,70,50,0.14)]"
              >
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-neutral-900">
                    {otherCat.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{otherCat.tagline}</p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-neutral-700 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FULL TECHNICAL SPECIFICATIONS TABLE */}
      <section className="py-12 sm:py-16 bg-[#FAFAFA] border-t border-[#E5E5E5]">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
              Technical Specifications
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Verified specifications{product.model ? ` for model ${product.model}` : ''}.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden divide-y divide-[#E5E5E5]">
            {product.specifications.map((group, gIdx) => (
              <div key={gIdx} className="p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">
                  {group.group}
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between py-1.5 border-b border-neutral-100 last:border-b-0">
                      <dt className="text-neutral-500 font-medium">{item.label}</dt>
                      <dd className="text-neutral-900 font-semibold text-right">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT FAQS */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-12 bg-white border-t border-[#E5E5E5]">
          <div className="container-custom max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Common questions about operation, maintenance, and power compatibility.
              </p>
            </div>

            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="border border-[#E5E5E5] rounded-md p-5 bg-[#FAFAFA]">
                  <h4 className="text-sm font-semibold text-neutral-900 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="py-12 sm:py-16 bg-[#FAFAFA] border-t border-[#E5E5E5]">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                  Related Products
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Explore other models in {product.categoryName}.
                </p>
              </div>
              <Link
                href={`/products/${product.category}`}
                className="text-xs font-semibold text-neutral-900 hover:text-black uppercase tracking-wider"
              >
                View Category →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
