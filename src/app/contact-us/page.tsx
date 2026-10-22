import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { BRAND_INFO } from '@/data/products';

export const metadata: Metadata = {
  title: 'Contact Us | TG SMART Home Appliances Hyderabad & Telangana',
  description: 'Get in touch with TG SMART. Contact our customer care desk in Hyderabad, Telangana for appliance enquiries, support, and marketplace guidance.',
  alternates: {
    canonical: 'https://tgsmart.in/contact-us',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TG SMART Home Appliances',
  image: 'https://tgsmart.in/images/brand/tg-smart-logo.png',
  url: 'https://tgsmart.in',
  telephone: BRAND_INFO.businessLocation.phone,
  email: BRAND_INFO.businessLocation.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad & Secunderabad',
    addressRegion: 'Telangana',
    addressCountry: 'India',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.385044,
    longitude: 78.486671,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-16">
      <JsonLd data={localBusinessSchema} />

      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#F9F9F9]">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <div className="py-8 sm:py-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              REACH OUR TEAM
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
              Contact TG SMART
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
              Have questions regarding our desert air coolers, washing machines, or order fulfillment? Submit an enquiry or reach our customer care desk.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-neutral-900">Send an Online Enquiry</h2>
              <p className="text-xs text-neutral-500 mt-1">
                Fill in the details below. Our team typically responds within one business day.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Right Column: Verified Details & Local Footprint */}
          <div className="lg:col-span-5 space-y-8" id="hyderabad">
            <div className="bg-neutral-50 border border-[#E5E5E5] rounded-lg p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-neutral-900">
                Customer Care Desk
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neutral-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-neutral-900">Email Address</span>
                    <a href={`mailto:${BRAND_INFO.businessLocation.email}`} className="text-neutral-600 hover:text-black underline">
                      {BRAND_INFO.businessLocation.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-neutral-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-neutral-900">Customer Helpline</span>
                    <span className="text-neutral-600">{BRAND_INFO.businessLocation.phone}</span>
                    <span className="block text-[11px] text-neutral-400 mt-0.5">Mon – Sat, 9:30 AM to 6:30 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-neutral-900">Regional Presence</span>
                    <span className="text-neutral-600">
                      Hyderabad & Secunderabad, Telangana, India
                    </span>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Serving the Telangana region with priority dispatch and PAN-India delivery via Amazon and Flipkart.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Online Shopping Links */}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block">
                  Official Shopping Channels
                </span>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href={BRAND_INFO.marketplaces.amazonStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs py-2 px-3 rounded bg-white border border-[#E5E5E5] hover:border-black transition-colors"
                  >
                    <span className="font-medium text-neutral-800">Visit Amazon Brand Store</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                  <a
                    href={BRAND_INFO.marketplaces.flipkartSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs py-2 px-3 rounded bg-white border border-[#E5E5E5] hover:border-neutral-900 transition-colors"
                  >
                    <span className="font-medium text-neutral-900">Find on Flipkart</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded border border-neutral-200 bg-white text-xs text-neutral-500 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-neutral-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Privacy Notice:</strong> Any contact details submitted via our enquiry form are strictly utilized to respond to your specific appliance enquiry. We do not sell or distribute customer information.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
