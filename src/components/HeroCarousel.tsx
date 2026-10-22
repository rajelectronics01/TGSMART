'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, MapPin, Truck, Headphones, type LucideIcon } from 'lucide-react';
import { BRAND_INFO } from '@/data/products';

type BrandAssurance = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Brand-wide, not product-specific — the strip stays put as slides change. */
const BRAND_ASSURANCES: BrandAssurance[] = [
  {
    icon: BadgeCheck,
    title: 'Official brand store',
    description: 'Every model listed on Amazon India.'
  },
  {
    icon: MapPin,
    title: 'Made for Indian homes',
    description: `Designed in ${BRAND_INFO.businessLocation.region}, India.`
  },
  {
    icon: Truck,
    title: 'Delivered across India',
    description: 'Shipped and tracked through Amazon.'
  },
  {
    icon: Headphones,
    title: 'Brand-backed support',
    description: BRAND_INFO.businessLocation.email
  }
];

type HeroSlide = {
  id: string;
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  /** Full-bleed room the slide is set in. */
  backdrop: string;
  /** Cut-out product placed into the room; omitted when the backdrop already holds it. */
  product?: { src: string; alt: string };
  backdropAlt: string;
};

const SLIDES: HeroSlide[] = [
  {
    id: 'air-coolers',
    eyebrow: 'Home appliances for everyday life',
    titleTop: 'Stay Cool',
    titleBottom: 'Stay Comfortable',
    description: 'Practical and reliable appliances for modern Indian homes.',
    ctaLabel: 'Explore Air Coolers',
    ctaHref: '/products/air-coolers',
    backdrop: '/images/lifestyle/hero-room-cooler.jpg',
    backdropAlt: 'TG SMART 85L desert air cooler in a sunlit modern Indian living room'
  },
  {
    id: 'washing-machines',
    eyebrow: 'Semi-automatic top load washing',
    titleTop: 'Everyday Laundry',
    titleBottom: 'Made Effortless',
    description: 'A 7.5 kg top load washer with deep clean technology and a rust‑free body.',
    ctaLabel: 'Explore Washing Machines',
    ctaHref: '/products/washing-machines',
    backdrop: '/images/lifestyle/hero-room-ambient.jpg',
    backdropAlt: 'Warm, sunlit Indian living room',
    product: {
      src: '/images/lifestyle/hero-washing-machine.png',
      alt: 'TG SMART 7.5 kg semi-automatic top load washing machine'
    }
  },
  {
    id: 'televisions',
    eyebrow: 'Smart entertainment, made for India',
    titleTop: 'Bigger Screens.',
    titleBottom: 'Bolder Colours.',
    description: 'A 32‑inch Google TV with built‑in apps, screen cast and vivid colours.',
    ctaLabel: 'Explore Televisions',
    ctaHref: '/products/televisions',
    backdrop: '/images/lifestyle/hero-room-ambient.jpg',
    backdropAlt: 'Warm, sunlit Indian living room',
    product: {
      src: '/images/lifestyle/hero-television.png',
      alt: 'TG SMART 32-inch Google Smart TV'
    }
  }
];

const SLIDE_DURATION = 6500;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const timer = window.setTimeout(
      () => setActive((i) => (i + 1) % SLIDES.length),
      SLIDE_DURATION
    );
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  const goTo = useCallback((index: number) => {
    setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') goTo(active + 1);
    if (event.key === 'ArrowLeft') goTo(active - 1);
  };

  const slide = SLIDES[active];

  return (
    <section
      aria-label="TG SMART featured appliances"
      aria-roledescription="carousel"
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative isolate overflow-hidden bg-[#F1E9E0]"
    >
      <div className="relative">
      {/* The room: a band above the copy on small screens, a full-bleed scene from lg up */}
      <div className="relative h-[320px] sm:h-[420px] lg:absolute lg:inset-0 lg:h-auto">
        {SLIDES.map((item, index) => {
          const isActive = index === active;
          return (
            <div
              key={item.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={item.backdrop}
                alt={item.product ? '' : item.backdropAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-[68%_center] transition-transform duration-[9000ms] ease-out ${
                  isActive ? 'scale-100' : 'scale-[1.04]'
                }`}
              />

              {item.product && (
                <div className="absolute bottom-[9%] right-[7%] h-[64%] w-[50%] max-w-[280px] sm:max-w-[360px] lg:bottom-[8%] lg:right-[9%] lg:h-[66%] lg:w-[40%] lg:max-w-[560px]">
                  {/* contact shadow so the product is standing on the floor, not floating */}
                  <div className="absolute -bottom-[3%] left-1/2 h-5 w-[78%] -translate-x-1/2 rounded-[50%] bg-[#5b442c]/30 blur-xl lg:h-9" />
                  <Image
                    src={item.product.src}
                    alt={item.product.alt}
                    fill
                    sizes="(max-width: 1024px) 55vw, 44vw"
                    className={`object-contain object-bottom drop-shadow-[0_30px_46px_rgba(74,56,38,0.28)] transition-transform duration-[900ms] ease-out ${
                      isActive ? 'scale-100' : 'scale-[0.97]'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* Cream wash that carries the copy — bottom-up on mobile, left-to-right on desktop */}
        <div
          className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_top,#F1E9E0_0%,rgba(241,233,224,0.9)_16%,rgba(241,233,224,0)_52%)] lg:[background-image:linear-gradient(to_right,rgba(241,233,224,0.28)_0%,rgba(241,233,224,0.1)_20%,rgba(241,233,224,0)_38%)]"
        />
      </div>

      {/* Copy */}
      <div className="relative z-10 container-custom">
        <div className="flex min-h-0 items-center py-10 sm:py-14 lg:min-h-[556px] xl:min-h-[600px] lg:py-16">
          <div key={slide.id} className="w-full max-w-xl lg:max-w-[560px]">
            <p
              className="hero-rise text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500"
              style={{ animationDelay: '60ms' }}
            >
              {slide.eyebrow}
            </p>

            <h1
              className="hero-rise mt-5 text-[2.6rem] leading-[1.04] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-[-0.035em] text-neutral-900"
              style={{ animationDelay: '140ms' }}
            >
              {slide.titleTop}
              <br />
              {slide.titleBottom}
            </h1>

            <p
              className="hero-rise mt-5 max-w-[26rem] text-balance text-base sm:text-lg leading-relaxed text-neutral-700"
              style={{ animationDelay: '220ms' }}
            >
              {slide.description}
            </p>

            <div className="hero-rise mt-8" style={{ animationDelay: '300ms' }}>
              <Link
                href={slide.ctaHref}
                className="group inline-flex items-center gap-3 rounded-xl bg-neutral-900 px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(23,23,23,0.18)] transition-colors hover:bg-neutral-800"
              >
                <span>{slide.ctaLabel}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Slide indicators */}
            <div className="mt-10 lg:mt-12 flex items-center gap-7" role="tablist" aria-label="Choose a slide">
              {SLIDES.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Slide ${index + 1}: ${item.titleTop} ${item.titleBottom}`}
                    onClick={() => goTo(index)}
                    className="group flex flex-col items-start gap-2 pt-1"
                  >
                    <span
                      className={`text-sm font-semibold tabular-nums tracking-wide transition-colors ${
                        isActive ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-600'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`h-[2px] w-7 origin-left rounded-full transition-all duration-500 ${
                        isActive ? 'scale-x-100 bg-neutral-900' : 'scale-x-0 bg-neutral-900/40'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      </div>

      {/* Brand assurance strip */}
      <div className="relative z-10 border-t border-neutral-900/10 bg-[#FBF7F2]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-neutral-900/10 sm:divide-y-0 lg:divide-x lg:divide-neutral-900/10">
            {BRAND_ASSURANCES.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3.5 px-1 py-5 lg:px-7 lg:py-7 lg:first:pl-0 lg:last:pr-0"
              >
                <item.icon className="h-6 w-6 flex-shrink-0 text-neutral-900 lg:h-7 lg:w-7" strokeWidth={1.6} />
                <div className="min-w-0">
                  <h2 className="text-sm lg:text-[0.95rem] font-semibold text-neutral-900">{item.title}</h2>
                  <p className="mt-0.5 truncate text-xs lg:text-sm text-neutral-600 leading-snug">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
