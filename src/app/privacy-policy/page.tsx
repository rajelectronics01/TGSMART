import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy | TG SMART Home Appliances',
  description: 'Privacy Policy for the TG SMART website. Learn how customer information is handled with confidentiality and care.',
  alternates: {
    canonical: 'https://tgsmart.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="border-b border-[#E5E5E5] bg-[#F9F9F9]">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <div className="py-8 sm:py-10 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#111111]">
              Privacy Policy
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
            <h2 className="text-base font-bold text-neutral-900">1. Information We Collect</h2>
            <p>
              TG SMART operates this website primarily as a brand showcase and product catalogue. We only collect personal details that you voluntarily submit through our contact and customer support forms (such as your name, email address, phone number, and query message).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">2. How We Use Your Information</h2>
            <p>
              Information gathered through our contact forms is used solely to respond to customer inquiries, coordinate warranty service questions, and provide operational guidance regarding our appliances. We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">3. Third-Party Marketplace Links</h2>
            <p>
              Our website provides links to external marketplaces, including Amazon India (amazon.in) and Flipkart (flipkart.com), where transactions and purchases are conducted. Please note that when you navigate to these platforms, their respective privacy policies and terms of purchase apply to any data you share with them.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">4. Cookies and Analytics</h2>
            <p>
              We may utilize standard, non-invasive cookies and basic analytical scripts to monitor site performance, page load speeds, and identify broken navigation links. These do not gather sensitive personal credentials.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to have your submitted contact information removed from our support inbox, please email our support desk at{' '}
              <a href="mailto:support@tgsmart.in" className="text-neutral-900 underline">
                support@tgsmart.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
