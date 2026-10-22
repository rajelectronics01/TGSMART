import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  HelpCircle,
  FileText,
  ShieldCheck,
  ShoppingBag,
  Headset,
  Mail,
  Phone,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BRAND_INFO } from '@/data/products';

export const metadata: Metadata = {
  title: 'Customer Support & FAQs | TG SMART',
  description: 'Official support center for TG SMART home appliances. Find product FAQs, warranty registration advice, user manual guidance, and marketplace order assistance.',
  alternates: {
    canonical: 'https://tgsmart.in/support',
  },
};

const GENERAL_FAQS = [
  {
    category: 'Air Coolers',
    items: [
      {
        q: 'How often should I clean the honeycomb cooling pads?',
        a: 'We recommend lightly rinsing the honeycomb pads once every 3 to 4 weeks during peak summer usage to prevent mineral scale buildup and ensure fresh, odorless airflow.'
      },
      {
        q: 'Can I add ice to the cooler for extra chill?',
        a: 'Yes, TG SMART 70L, 85L, and 150L desert coolers feature dedicated top-loading ice chambers. Adding ice cubes lowers the ambient water temperature for rapid room chilling.'
      },
      {
        q: 'Will my TG SMART air cooler work on home inverters?',
        a: 'Yes. With efficient motor engineering drawing between 165W and 190W, all standard residential models operate smoothly on typical home inverters without overloading the system.'
      }
    ]
  },
  {
    category: 'Washing Machines',
    items: [
      {
        q: 'What should I do if the washing machine vibrates excessively during the spin cycle?',
        a: 'Ensure all four leveling feet are resting firmly on flat ground. Additionally, ensure the laundry load inside the stainless steel tub is evenly distributed rather than bunched on one side.'
      },
      {
        q: 'How do I run the Tub Clean cycle?',
        a: 'Select the Tub Clean program on the digital panel with an empty drum and add a standard washing machine descaling powder or cup of white vinegar to dissolve detergent residue.'
      }
    ]
  },
  {
    category: 'Marketplace Orders & Warranty',
    items: [
      {
        q: 'Where do I register my TG SMART warranty?',
        a: 'Retain your original Amazon or Flipkart tax invoice. In India, your purchase invoice serves as official proof of purchase for manufacturer warranty claims.'
      },
      {
        q: 'How do I claim assistance for an order purchased on Amazon or Flipkart?',
        a: 'For delivery delays, damaged packaging, or initial return windows, please initiate a request via your Amazon or Flipkart account under "Your Orders". For operational support or warranty claims, contact our support desk directly.'
      }
    ]
  }
];

export default function SupportPage() {
  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Support Header */}
      <div className="border-b border-[#E5E5E5] bg-[#F9F9F9]">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Support & FAQs' }]} />
          <div className="py-8 sm:py-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              HELP & ASSISTANCE
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
              Customer Support Hub
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
              Find answers to product operation questions, access warranty guidance, and discover how to get in touch with our customer service team.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom pt-12 space-y-16">
        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="#faqs"
            className="p-6 rounded-lg border border-[#E5E5E5] hover:border-black bg-white hover:bg-neutral-50/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <HelpCircle className="w-6 h-6 text-neutral-900" />
              <h3 className="font-semibold text-neutral-900 text-sm">Product FAQs</h3>
              <p className="text-xs text-neutral-500">Quick answers to common questions on coolers & washing machines.</p>
            </div>
            <span className="text-xs font-semibold text-neutral-900 mt-4 inline-flex items-center gap-1">
              Browse FAQs ↓
            </span>
          </a>

          <a
            href="#warranty"
            className="p-6 rounded-lg border border-[#E5E5E5] hover:border-black bg-white hover:bg-neutral-50/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <ShieldCheck className="w-6 h-6 text-neutral-900" />
              <h3 className="font-semibold text-neutral-900 text-sm">Warranty & Service</h3>
              <p className="text-xs text-neutral-500">Learn about coverage guidelines, invoice verification, and claims.</p>
            </div>
            <span className="text-xs font-semibold text-neutral-900 mt-4 inline-flex items-center gap-1">
              Read Terms ↓
            </span>
          </a>

          <a
            href="#marketplace-help"
            className="p-6 rounded-lg border border-[#E5E5E5] hover:border-black bg-white hover:bg-neutral-50/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <ShoppingBag className="w-6 h-6 text-neutral-900" />
              <h3 className="font-semibold text-neutral-900 text-sm">Marketplace Orders</h3>
              <p className="text-xs text-neutral-500">Guidance for orders placed via Amazon.in or Flipkart.</p>
            </div>
            <span className="text-xs font-semibold text-neutral-900 mt-4 inline-flex items-center gap-1">
              Order Help ↓
            </span>
          </a>

          <Link
            href="/contact-us"
            className="p-6 rounded-lg border border-[#E5E5E5] hover:border-black bg-white hover:bg-neutral-50/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <Headset className="w-6 h-6 text-neutral-900" />
              <h3 className="font-semibold text-neutral-900 text-sm">Contact Support</h3>
              <p className="text-xs text-neutral-500">Submit an online enquiry or contact our Telangana customer desk.</p>
            </div>
            <span className="text-xs font-semibold text-neutral-900 mt-4 inline-flex items-center gap-1">
              Contact Form →
            </span>
          </Link>
        </div>

        {/* Section 1: Product FAQs */}
        <div id="faqs" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#E5E5E5] pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Select a category to view specific guidance.
            </p>
          </div>

          <div className="space-y-8">
            {GENERAL_FAQS.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="border border-[#E5E5E5] rounded-md p-5 bg-[#FAFAFA]">
                      <h4 className="text-sm font-semibold text-neutral-900">{item.q}</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Warranty & Service */}
        <div id="warranty" className="scroll-mt-24 border-t border-[#E5E5E5] pt-12 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
              Warranty & Service Policy
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Transparent, genuine warranty guidelines for all verified TG SMART home appliances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg border border-[#E5E5E5] bg-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Proof of Purchase</span>
              <h4 className="font-semibold text-neutral-900 text-sm">Invoice Requirement</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Retain your official invoice from Amazon.in or Flipkart. The invoice date marks the beginning of the manufacturer warranty coverage period.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-[#E5E5E5] bg-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Coverage</span>
              <h4 className="font-semibold text-neutral-900 text-sm">Manufacturing Defects</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Warranty covers defects in materials, motor performance, and internal electronic assemblies under standard home operating conditions.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-[#E5E5E5] bg-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Service Claim</span>
              <h4 className="font-semibold text-neutral-900 text-sm">How to File a Claim</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Email support@tgsmart.in with your order ID, tax invoice, product model number, and a brief description of the issue to initiate support.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Marketplace Order Guidance */}
        <div id="marketplace-help" className="scroll-mt-24 border-t border-[#E5E5E5] pt-12 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
              Marketplace Order Guidance
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Understanding fulfillment and delivery support via Amazon and Flipkart.
            </p>
          </div>

          <div className="bg-[#F8F9FA] border border-[#E5E5E5] rounded-lg p-6 sm:p-8 space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-neutral-700 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-neutral-700">
                <p className="font-semibold text-neutral-900">
                  Did you purchase through Amazon India or Flipkart?
                </p>
                <p className="leading-relaxed">
                  When you order TG SMART products via our Amazon Brand Store or Flipkart listings, payment processing, packaging dispatch, and tracking are managed through that platform’s fulfillment infrastructure.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-600 pt-1">
                  <li><strong>For damaged shipments or transit issues:</strong> Please report immediately in your Amazon or Flipkart app under “Return or Replace Items”.</li>
                  <li><strong>For product usage, assembly, or spare parts:</strong> Contact the TG SMART customer service desk directly for expert assistance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
