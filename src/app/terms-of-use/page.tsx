import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Terms of Use | TG SMART Home Appliances',
  description: 'Terms of Use for the TG SMART website. Details on intellectual property, product specifications, and marketplace referral terms.',
  alternates: {
    canonical: 'https://tgsmart.in/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="border-b border-[#E5E5E5] bg-[#F9F9F9]">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Terms of Use' }]} />
          <div className="py-8 sm:py-10 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#111111]">
              Terms of Use
            </h1>
            <p className="text-xs text-neutral-500 mt-2">
              Last updated: October 2026
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom pt-10">
        <div className="max-w-3xl text-sm text-neutral-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please refrain from using the site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">2. Brand & Product Catalogue Purpose</h2>
            <p>
              This website serves as an official digital brand presentation and product catalogue for TG SMART home appliances in India. It is not an e-commerce platform that processes payment transactions directly. Purchases are fulfilled through authorized third-party marketplaces such as Amazon India and Flipkart.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">3. Product Specifications & Pricing</h2>
            <p>
              We strive to ensure that all specifications, dimensions, capacities, and model numbers displayed on this website are accurate and up to date. However, product availability, real-time pricing, promotional offers, and delivery terms are subject to change on respective marketplace storefronts. Please verify details on the respective Amazon or Flipkart listing prior to finalizing your purchase.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">4. Intellectual Property</h2>
            <p>
              All trademarks, logos, brand assets, product imagery, and text content displayed on this website are the property of TG SMART or their respective trademark holders. Reproduction without express authorization is prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">5. Limitation of Liability</h2>
            <p>
              TG SMART shall not be held liable for any damages arising out of your access to, or inability to access, this website, or from your reliance upon any information provided herein.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
