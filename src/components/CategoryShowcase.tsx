import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type CategoryCard = {
  title: string;
  lines: [string, string];
  href: string;
  /** The room the product is shown in — the same set as the hero. */
  scene: string;
  scenePosition: string;
  product?: { src: string; alt: string; className: string };
  sceneAlt: string;
};

const CARDS: CategoryCard[] = [
  {
    title: 'Air Coolers',
    lines: ['Powerful cooling', 'for every season.'],
    href: '/products/air-coolers',
    scene: '/images/lifestyle/hero-room-cooler.jpg',
    scenePosition: 'object-[86%_center]',
    sceneAlt: 'TG SMART desert air cooler in a sunlit living room'
  },
  {
    title: 'Washing Machines',
    lines: ['Efficient cleaning', 'for modern homes.'],
    href: '/products/washing-machines',
    scene: '/images/lifestyle/hero-room-ambient.jpg',
    scenePosition: 'object-[60%_center]',
    sceneAlt: 'Sunlit room interior',
    product: {
      src: '/images/lifestyle/hero-washing-machine.png',
      alt: 'TG SMART semi-automatic top load washing machine',
      className: 'bottom-[9%] left-1/2 h-[74%] w-[62%] -translate-x-1/2'
    }
  },
  {
    title: 'Televisions',
    lines: ['Immersive entertainment', 'for your home.'],
    href: '/products',
    scene: '/images/lifestyle/hero-room-ambient.jpg',
    scenePosition: 'object-[60%_center]',
    sceneAlt: 'Sunlit room interior',
    product: {
      src: '/images/lifestyle/hero-television.png',
      alt: 'TG SMART 32-inch Google Smart TV',
      className: 'bottom-[14%] left-1/2 h-[58%] w-[86%] -translate-x-1/2'
    }
  }
];

export function CategoryShowcase() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14" aria-label="Shop by category">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative flex items-stretch overflow-hidden rounded-2xl bg-[#F4ECE3] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(90,70,50,0.14)]"
            >
              <div className="flex flex-1 flex-col justify-center gap-3 py-7 pl-6 pr-3 lg:py-8 lg:pl-7">
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold tracking-[-0.01em] text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-neutral-600">
                    {card.lines[0]}
                    <br />
                    {card.lines[1]}
                  </p>
                </div>

                <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-neutral-900">
                  <span className="relative">
                    Explore
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              <div className="relative w-[44%] flex-shrink-0 self-stretch">
                <Image
                  src={card.scene}
                  alt={card.product ? '' : card.sceneAlt}
                  fill
                  sizes="(max-width: 768px) 45vw, 20vw"
                  className={`object-cover ${card.scenePosition} transition-transform duration-500 group-hover:scale-[1.04]`}
                />
                {card.product && (
                  // next/image with `fill` writes its own inset/size inline, so the
                  // placement lives on a wrapper rather than on the image itself.
                  <div className={`absolute ${card.product.className}`}>
                    <Image
                      src={card.product.src}
                      alt={card.product.alt}
                      fill
                      sizes="(max-width: 768px) 40vw, 18vw"
                      className="object-contain object-bottom drop-shadow-[0_12px_18px_rgba(74,56,38,0.3)] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
