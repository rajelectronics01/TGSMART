import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Shield, Sparkles, Zap, Wrench, ArrowRight, MapPin } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Us | TG SMART Home Appliances',
  description: 'Learn about TG SMART, an Indian consumer electronics brand dedicated to reliable, practical, and energy-efficient home appliances for modern Indian households.',
  alternates: {
    canonical: 'https://tgsmart.in/about-us',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Header Banner */}
      <div className="border-b border-[#E5E5E5] bg-[#F9F9F9]">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="py-8 sm:py-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              OUR BRAND PHILOSOPHY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mt-2">
              Everyday Living.<br />Made Smarter.
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
              TG SMART is committed to designing practical, dependable, and energy-conscious home appliances that address the real-world demands of Indian homes.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom pt-12 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Purposeful Appliances for Real Indian Households
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Indian households face unique everyday demands: intense summer heatwaves requiring robust airflow and dense cooling pads, fluctuating electrical conditions demanding inverter compatibility, and laundry cycles requiring tough stain removal combined with gentle fabric care.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              At TG SMART, we prioritize straightforward usability, durable materials, and essential features that truly matter, avoiding unnecessary complexity and inflated costs.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-neutral-100 border border-[#E5E5E5]">
              <Image
                src="/images/lifestyle/story-living-room.jpg"
                alt="TG SMART brand lifestyle interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="border-t border-[#E5E5E5] pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-[#111111]">
              Our Guiding Principles
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Every product in the TG SMART lineup is evaluated against these four core benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-[#E5E5E5] bg-neutral-50/50 space-y-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-neutral-900 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-neutral-900 text-base">Practical Simplicity</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Controls that anyone in the family can operate without having to decipher convoluted manuals.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-[#E5E5E5] bg-neutral-50/50 space-y-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-neutral-900 shadow-xs">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-neutral-900 text-base">Durable Build</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Corrosion-free ABS composites, high-density honeycomb cooling pads, and heavy-duty motor windings.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-[#E5E5E5] bg-neutral-50/50 space-y-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-neutral-900 shadow-xs">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-neutral-900 text-base">Energy Efficiency</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Calibrated power consumption designed for low electricity bills and seamless operation on home inverters.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-[#E5E5E5] bg-neutral-50/50 space-y-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-neutral-900 shadow-xs">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-neutral-900 text-base">Straightforward Care</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Accessible drainage plugs, rinse-friendly pads, and dedicated customer service assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Geographic Focus & Local Commitment */}
        <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <MapPin className="w-4 h-4 text-neutral-800" />
                <span>Regional Footprint</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Proudly Serving Indian Homes & Telangana
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                With customer support roots in Hyderabad and Secunderabad, Telangana, TG SMART products are distributed across India via official marketplace fulfillment on Amazon and Flipkart.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#333333] text-white text-xs font-semibold rounded transition-colors flex-shrink-0"
            >
              <span>Contact Regional Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
