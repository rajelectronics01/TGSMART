import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { BRAND_INFO } from '@/data/products';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tgsmart.in'),
  title: {
    default: 'TG SMART | Practical Home Appliances for Modern Indian Homes',
    template: '%s | TG SMART'
  },
  description: 'Explore TG SMART desert air coolers, washing machines, kitchen appliances and smart TVs. Designed for everyday Indian living. Available on Amazon and Flipkart.',
  keywords: [
    'TG SMART',
    'TG SMART India',
    'TG SMART air cooler',
    'TG 85 Super Silent',
    'TG SMART 85L desert air cooler',
    'TG SMART 70L cooler',
    'TG SMART washing machine',
    'TG SMART kitchen appliances',
    'home appliances Hyderabad',
    'air cooler Telangana'
  ],
  authors: [{ name: 'TG SMART Home Appliances' }],
  creator: 'TG SMART',
  publisher: 'TG SMART',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    title: 'TG SMART',
    // Home-screen launch keeps Safari chrome; standalone would drop the back button.
    capable: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tgsmart.in',
    siteName: 'TG SMART',
    title: 'TG SMART | Practical Home Appliances for Modern Indian Homes',
    description: 'Explore TG SMART desert air coolers, washing machines, kitchen appliances and smart TVs. Available on Amazon & Flipkart.',
    images: [
      {
        url: '/images/lifestyle/hero-air-cooler.jpg',
        width: 1200,
        height: 630,
        alt: 'TG SMART Home Appliances - Everyday Living Made Smarter'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TG SMART | Home Appliances for Modern Indian Homes',
    description: 'Explore practical home appliances: Desert air coolers, washing machines, induction cooktops, and smart TVs.',
    images: ['/images/lifestyle/hero-air-cooler.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tgsmart.in',
  }
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_INFO.name,
  legalName: BRAND_INFO.fullName,
  url: 'https://tgsmart.in',
  logo: 'https://tgsmart.in/images/brand/tg-smart-logo.png',
  description: BRAND_INFO.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN'
  },
  sameAs: [
    BRAND_INFO.marketplaces.amazonStoreUrl,
    BRAND_INFO.social.instagram,
    BRAND_INFO.social.youtube,
    BRAND_INFO.social.facebook
  ]
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TG SMART',
  url: 'https://tgsmart.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://tgsmart.in/products?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <JsonLd data={[orgSchema, websiteSchema]} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
