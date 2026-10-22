export interface ProductSpecification {
  group: string;
  items: { label: string; value: string }[];
}

export interface KeyFeature {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Printed on the product or stated by the listing; absent when neither gives one. */
  model?: string;
  asin?: string;
  category: 'air-coolers' | 'washing-machines' | 'televisions' | 'other-appliances';
  categoryName: string;
  tagline: string;
  shortDescription: string;
  description: string;
  primaryImage: string;
  gallery: string[];
  keyHighlights: string[];
  keyFeatures: KeyFeature[];
  specifications: ProductSpecification[];
  price?: number;
  originalPrice?: number;
  discountPercent?: number;
  amazonUrl: string;
  flipkartUrl?: string;
  availability: 'Available on Amazon' | 'Available on Amazon & Flipkart' | 'In Stock';
  faqs: ProductFAQ[];
  isFeatured?: boolean;
  badge?: string;
  seoTitle: string;
  metaDescription: string;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  productCount: number;
  features: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'air-coolers',
    name: 'Air Coolers',
    tagline: 'Powerful, silent & energy-efficient cooling solutions.',
    description: 'High-capacity desert and personal air coolers featuring toughened glass tops, dense honeycomb cooling pads, and silent Reverse Blade airflow for modern Indian homes.',
    image: '/images/products/tg-smart-85l-air-cooler.png',
    productCount: 6,
    features: ['85L, 70L & 40L Sizes', 'Toughened Glass Tops', 'Dense Honeycomb Pads', 'Low Noise Silent Operation']
  },
  {
    slug: 'washing-machines',
    name: 'Washing Machines',
    tagline: 'Gentle fabric care and tough stain removal.',
    description: 'Heavy-duty semi-automatic top load washing machines built with rust-free ABS bodies, magic lint filters, and air dryer spin technology.',
    image: '/images/products/tg-smart-top-load-washing-machine.png',
    productCount: 4,
    features: ['7.5 kg Capacity', 'Rust-Free ABS Body', 'Magic Lint Filter', 'High Speed Air Dryer']
  },
  {
    slug: 'televisions',
    name: 'Televisions',
    tagline: 'Smart televisions for everyday viewing.',
    description: 'TG SMART smart televisions, listed with their panel size and platform.',
    image: '/images/products/tg-smart-32-inch-smart-tv.png',
    productCount: 2,
    features: []
  },
  {
    slug: 'other-appliances',
    name: 'Other Appliances',
    tagline: 'Stabilisers, induction cooking and the smaller TG SMART appliances.',
    description: 'Voltage stabilisers, induction cooktops and the other smaller TG SMART appliances for the home.',
    image: '/images/products/tg-smart-voltage-stabilizer.png',
    productCount: 1,
    features: ['100% Pure Copper Winding', 'Overload Protection', 'Short Circuit Cutoff', '12 Months Warranty']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'tg-ac-85d-glass',
    slug: 'tg-smart-85l-desert-air-cooler',
    name: 'TG SMART Air Cooler 85L (Toughened Glass Top)',
    model: 'TG-85 Super Silent',
    asin: 'B0GZ4YY7HC',
    category: 'air-coolers',
    categoryName: 'Air Coolers',
    tagline: 'Powerful & silent cooling with a premium toughened glass finish.',
    shortDescription: 'High-capacity 85L desert air cooler featuring a luxury toughened glass top, 3-speed silent airflow, dense 3-sided honeycomb pads, and smooth caster mobility.',
    description: 'The TG SMART 85L Desert Air Cooler represents the flagship cooling technology for large Indian households and offices. Built with a sleek, scratch-resistant toughened glass top and a heavy-duty ABS body, it combines sophisticated interior aesthetics with serious summer performance. Features 20 CFM high air delivery, dense honeycomb pads for rapid heat dissipation, and silent aerodynamic fan blades for peaceful sleep.',
    primaryImage: '/images/products/tg-smart-85l-air-cooler.png',
    gallery: [
      '/images/products/tg-smart-85l-air-cooler.png',
      '/images/products/tg-smart-70l-air-cooler.png',
      '/images/lifestyle/products/tg-smart-85l-desert-air-cooler.jpg'
    ],
    price: 11500,
    originalPrice: 20990,
    discountPercent: 45,
    badge: 'Flagship model',
    keyHighlights: [
      'Massive 85-Litre tank for all-day uninterrupted cooling',
      'Designer Toughened Glass Top with scratch resistance',
      'High air delivery with extended air throw for large rooms',
      'Silent operation with Reverse Blade fan technology',
      'Dense 3-sided honeycomb pads & heavy-duty castor wheels'
    ],
    keyFeatures: [
      {
        title: 'Toughened Glass Top',
        description: 'Premium scratch-resistant glass top offers a sophisticated finish that blends seamlessly into modern living room decor.',
        image: '/images/products/tg-smart-85l-air-cooler.png'
      },
      {
        title: '85L Large Water Tank',
        description: 'Extra-large reservoir eliminates the need for frequent refills, ensuring cool relief throughout sweltering days and nights.'
      },
      {
        title: 'Dense Honeycomb Pads',
        description: 'Thick 3-sided honeycomb pads deliver maximum water absorption and cooling efficiency with minimal maintenance.'
      },
      {
        title: '360° Heavy-Duty Castors',
        description: 'Smooth multi-directional rolling wheels make moving this 85-liter unit between bedrooms and living halls effortless.'
      }
    ],
    specifications: [
      {
        group: 'General & Pricing',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0GZ4YY7HC' },
          { label: 'Model', value: 'TG-85 Super Silent' },
          { label: 'M.R.P.', value: '₹20,990' },
          { label: 'Warranty', value: '1 Year Brand Manufacturer Warranty' }
        ]
      },
      {
        group: 'Capacity & Dimensions',
        items: [
          { label: 'Tank Capacity', value: '85 Litres' },
          { label: 'Item Weight', value: '11 Kilograms' },
          { label: 'Body Material', value: 'ABS Plastic with Toughened Glass Top' },
          { label: 'Cooling Area', value: 'Up to 550 sq. ft. (Large Rooms & Offices)' }
        ]
      },
      {
        group: 'Air Flow & Controls',
        items: [
          { label: 'Air Flow Capacity', value: '20 CFM' },
          { label: 'Speed Settings', value: '3 Speed (Low, Medium, High)' },
          { label: 'Cooling Media', value: 'High Efficiency Honeycomb Pads' },
          { label: 'Inverter Compatible', value: 'Yes (Low Energy Draw)' }
        ]
      }
    ],
    amazonUrl: 'https://www.amazon.in/SMART-Air-Cooler-85L-Operations/dp/B0GZ4YY7HC/',
    flipkartUrl: 'https://www.flipkart.com/search?q=TG+SMART+85L+air+cooler',
    availability: 'Available on Amazon',
    faqs: [
      {
        question: 'Does the 85L Toughened Glass top cooler operate quietly?',
        answer: 'Yes, it features aerodynamic silent fan design and vibration-damping motor mounts designed specifically for quiet bedroom and home office operation.'
      },
      {
        question: 'Can this cooler run on a home inverter during power cuts?',
        answer: 'Yes, it draws low electrical wattage and is fully compatible with standard Indian residential inverter setups.'
      }
    ],
    isFeatured: true,
    seoTitle: 'TG SMART Air Cooler 85L (Toughened Glass Top) | Official Amazon Listing',
    metaDescription: 'Shop TG SMART 85L Desert Air Cooler on Amazon India. Features Toughened Glass Top, 85L reservoir, silent operation, and honeycomb pads.'
  },
  {
    id: 'tg-ac-70d-grey',
    slug: 'tg-smart-70l-desert-air-cooler',
    name: 'TG SMART Air Cooler 70L (Light Grey)',
    model: 'TGC70WGM-G',
    asin: 'B0F3DGZX5Q',
    category: 'air-coolers',
    categoryName: 'Air Coolers',
    tagline: 'Powerful & energy-efficient air cooling for home and office.',
    shortDescription: '70L residential desert air cooler in modern Light Grey. Features high air delivery, dense honeycomb pads, water level gauge, and 3-speed control.',
    description: 'The TG SMART 70L Desert Air Cooler (Model TGC70WGM-G) provides an optimal balance of compact room footprint and powerful summer cooling. Designed in an understated light grey finish, it incorporates dense honeycomb evaporative pads, wide-angle horizontal louvers, and a water level gauge for straightforward everyday operation.',
    primaryImage: '/images/products/tg-smart-70l-air-cooler.png',
    gallery: [
      '/images/products/tg-smart-70l-air-cooler.png',
      '/images/products/tg-smart-85l-air-cooler.png',
      '/images/lifestyle/products/tg-smart-70l-desert-air-cooler.jpg'
    ],
    price: 7290,
    originalPrice: 11990,
    discountPercent: 39,
    badge: 'Popular Choice',
    keyHighlights: [
      '70-Litre water tank for long overnight cooling',
      'Clean Light Grey modern aesthetic',
      'High air throw with 4-way deflection',
      'Low power consumption motor',
      'Castor wheels for quick room mobility'
    ],
    keyFeatures: [
      {
        title: '70L Balanced Tank',
        description: 'Optimal storage for mid-to-large bedrooms and living rooms without excessive space consumption.',
        image: '/images/products/tg-smart-70l-air-cooler.png'
      },
      {
        title: 'Honeycomb Cooling Pad',
        description: 'High-durability cellulose pads ensure thorough water saturation and rapid cooling in hot weather.'
      }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'Model', value: 'TGC70WGM-G' },
          { label: 'ASIN', value: 'B0F3DGZX5Q' },
          { label: 'Colour', value: 'Light Grey' }
        ]
      },
      {
        group: 'Performance',
        items: [
          { label: 'Tank Capacity', value: '70 Litres' },
          { label: 'Cooling Area', value: 'Up to 420 sq. ft.' },
          { label: 'Speed Controls', value: '3-Speed Ergonomic Dials' }
        ]
      }
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0F3DGZX5Q',
    flipkartUrl: 'https://www.flipkart.com/search?q=TG+SMART+70L',
    availability: 'Available on Amazon',
    faqs: [
      {
        question: 'What room size is the 70L model ideal for?',
        answer: 'It is recommended for standard bedrooms, dining rooms, and study rooms up to 420 square feet.'
      }
    ],
    isFeatured: true,
    seoTitle: 'TG SMART Air Cooler 70L (Light Grey) | Model TGC70WGM-G on Amazon',
    metaDescription: 'Order the TG SMART 70L Air Cooler on Amazon India. Compact desert air cooler with 70L tank, honeycomb pads, and high air delivery.'
  },
  {
    id: 'tg-ac-40d-dark',
    slug: 'tg-smart-40l-personal-air-cooler',
    name: 'TG SMART Plastic Body Air Cooler 40L (Dark Grey)',
    model: 'TG-40 Personal Cooler',
    asin: 'B0F3DHZNRH',
    category: 'air-coolers',
    categoryName: 'Air Coolers',
    tagline: 'Compact, powerful personal cooling for study rooms & bedrooms.',
    shortDescription: '40L compact plastic body cooler in sleek dark grey. Features high air velocity, low noise, honeycomb pads, and energy-efficient operation.',
    description: 'The TG SMART 40L Air Cooler is specifically designed for personal comfort, compact bedrooms, home offices, and kitchen dining corners. Its sleek dark grey profile occupies minimal floor space while delivering focused, high-velocity chilled airflow.',
    primaryImage: '/images/products/tg-smart-40l-air-cooler.png',
    gallery: [
      '/images/products/tg-smart-40l-air-cooler.png',
      '/images/lifestyle/products/tg-smart-40l-personal-air-cooler.jpg'
    ],
    price: 7290,
    originalPrice: 10490,
    discountPercent: 31,
    badge: 'Compact model',
    keyHighlights: [
      '40-Litre space-saving personal design',
      'Contemporary Dark Grey finish',
      'Ultra low energy consumption',
      'Dense honeycomb cooling pad',
      'Lightweight and easy to move'
    ],
    keyFeatures: [
      {
        title: 'Compact 40L Profile',
        description: 'Ideal for bedside or work desk cooling where floor space is valuable.',
        image: '/images/products/tg-smart-40l-air-cooler.png'
      }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0F3DHZNRH' },
          { label: 'M.R.P.', value: '₹10,490' },
          { label: 'Tank Capacity', value: '40 Litres' },
          { label: 'Colour', value: 'Dark Grey' }
        ]
      }
    ],
    amazonUrl: 'https://www.amazon.in/TG-SMART-Plastic-Body-Cooler/dp/B0F3DHZNRH/',
    availability: 'Available on Amazon',
    faqs: [
      {
        question: 'Is the 40L cooler easy to clean?',
        answer: 'Yes, it features a drainage plug and removable side panels for quick water changes and seasonal maintenance.'
      }
    ],
    isFeatured: true,
    seoTitle: 'TG SMART 40L Personal Air Cooler | Dark Grey Amazon Listing',
    metaDescription: 'Shop TG SMART 40L Plastic Body Air Cooler on Amazon India. Compact, low noise, energy-efficient personal cooling.'
  },
  {
    id: 'tg-wm-75-semi',
    slug: 'tg-smart-7-5kg-semi-automatic-washing-machine',
    name: 'TG SMART 7.5 kg Semi-Automatic Top Load Washing Machine',
    model: 'TG-WM75-SA',
    asin: 'B0FP32WH75',
    category: 'washing-machines',
    categoryName: 'Washing Machines',
    tagline: 'Durable ABS body with 2 wash programs, magic filter and air dryer.',
    shortDescription: '7.5 kg heavy-duty semi-automatic top load washing machine with corrosion-proof ABS plastic body, magic lint filter, and high-velocity air dryer.',
    description: 'Built to withstand tough Indian water and fabric conditions, the TG SMART 7.5 kg Semi-Automatic Washing Machine offers durable performance without rusting. Features dual wash cycles for regular and delicate fabrics, a built-in magic filter that traps lint effectively, and a high-speed spin air dryer tub that cuts drying time significantly.',
    primaryImage: '/images/products/tg-smart-top-load-washing-machine.png',
    gallery: [
      '/images/products/tg-smart-top-load-washing-machine.png',
      '/images/lifestyle/products/tg-smart-7-5kg-semi-automatic-washing-machine.jpg'
    ],
    price: 9990,
    originalPrice: 13490,
    discountPercent: 26,
    keyHighlights: [
      '7.5 kg wash capacity ideal for medium to large families',
      'Rust-proof, shock-proof durable ABS plastic body',
      '2 specialized wash programs for daily fabrics and heavy loads',
      'High-performance Air Dryer spin cycle',
      'Integrated Magic Filter for crystal clear clothes'
    ],
    keyFeatures: [
      {
        title: 'Rust-Proof ABS Body',
        description: 'Engineered for humid Indian bathrooms and balconies without rusting or corrosion.',
        image: '/images/products/tg-smart-top-load-washing-machine.png'
      },
      {
        title: 'High-Speed Air Dryer',
        description: 'Rapid centrifugal spin action extracts maximum moisture so clothes dry quickly even in monsoon.',
        image: '/images/products/tg-smart-top-load-washing-machine.png'
      }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0FP32WH75' },
          { label: 'M.R.P.', value: '₹13,490' },
          { label: 'Capacity', value: '7.5 kg' },
          { label: 'Type', value: 'Semi-Automatic Top Load' }
        ]
      },
      {
        group: 'Features',
        items: [
          { label: 'Body Material', value: 'ABS High-Grade Plastic' },
          { label: 'Wash Programs', value: '2 Programs' },
          { label: 'Lint Collector', value: 'Magic Filter' },
          { label: 'Spin Dryer', value: 'Air Dryer Spin Tub' }
        ]
      }
    ],
    amazonUrl: 'https://www.amazon.in/TG-Semi-Automatic-Washing-Machine-Programs/dp/B0FP32WH75/',
    availability: 'Available on Amazon',
    faqs: [
      {
        question: 'Does the machine require a continuous water connection?',
        answer: 'No, as a semi-automatic machine, it can be filled manually or connected via a standard hose pipe.'
      }
    ],
    isFeatured: true,
    seoTitle: 'TG SMART 7.5 kg Semi-Automatic Washing Machine | Amazon India',
    metaDescription: 'TG SMART 7.5 kg Top Load Semi-Automatic Washing Machine with ABS body, 2 wash programs, magic filter, and air dryer on Amazon.'
  },
  {
    id: 'tg-vs-tv-copper',
    slug: 'tg-smart-voltage-stabilizer-for-tv',
    name: 'TG SMART Electronic Voltage Stabilizer for TVs',
    model: 'TG-VS-TV100',
    asin: 'B0FLWHX7Y6',
    category: 'other-appliances',
    categoryName: 'Other Appliances',
    tagline: '100% pure copper winding with overload and short circuit protection.',
    shortDescription: 'Dedicated electronic voltage stabilizer for Smart TVs, LEDs, and LCDs. Built with 100% copper windings, short-circuit protection, and a 12-month brand warranty.',
    description: 'Safeguard your precious Smart TV, home theater, and gaming consoles against voltage surges and sudden brownouts. The TG SMART Electronic Voltage Stabilizer features 100% pure copper transformer windings for superior thermal dissipation, automatic high/low voltage cut-off, and heavy-duty chassis construction backed by a 12-month warranty.',
    primaryImage: '/images/products/tg-smart-voltage-stabilizer.png',
    gallery: [
      '/images/products/tg-smart-voltage-stabilizer.png',
      '/images/lifestyle/products/tg-smart-voltage-stabilizer-for-tv.jpg'
    ],
    price: 1890,
    originalPrice: 2590,
    discountPercent: 27,
    badge: '100% Copper',
    keyHighlights: [
      'Tailored for LED, LCD, and Smart TVs up to 65 inches',
      '100% Pure Copper Winding for longevity & maximum efficiency',
      'Instant Overload & Short Circuit Protection',
      'Compact wall-mountable or tabletop profile',
      '12-Month Official Manufacturer Warranty'
    ],
    keyFeatures: [
      {
        title: '100% Pure Copper Winding',
        description: 'Delivers high electrical conductivity and prevents overheating during prolonged television viewing.',
        image: '/images/products/tg-smart-voltage-stabilizer.png'
      }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0FLWHX7Y6' },
          { label: 'M.R.P.', value: '₹2,590' },
          { label: 'Winding Material', value: '100% Pure Copper' },
          { label: 'Warranty', value: '12 Months Brand Warranty' }
        ]
      }
    ],
    amazonUrl: 'https://www.amazon.in/TG-Electronic-Stabilizer-Warranty-Protection/dp/B0FLWHX7Y6/',
    availability: 'Available on Amazon',
    faqs: [
      {
        question: 'Can this stabilizer be used for large 55-inch and 65-inch Smart TVs?',
        answer: 'Yes, it is specifically calibrated for LED, OLED, and Smart TVs from 32 inches up to 65 inches along with set-top boxes.'
      }
    ],
    isFeatured: true,
    seoTitle: 'TG SMART Electronic Voltage Stabilizer for Smart TVs | 100% Copper',
    metaDescription: 'Protect your Smart TV with TG SMART Electronic Voltage Stabilizer. 100% pure copper, overload protection, 12-month warranty on Amazon.'
  },
  {
    id: 'tg-ac-85-tgc85wgm',
    slug: 'tg-smart-85l-air-cooler-tgc85wgm',
    name: 'TG SMART Air Cooler 85L',
    model: 'TGC85WGM',
    asin: 'B0GSRD5DHM',
    category: 'air-coolers',
    categoryName: 'Air Coolers',
    tagline: '85-litre desert air cooler with honeycomb pads and three speed settings.',
    shortDescription: 'Freestanding 85-litre desert air cooler with honeycomb cooling pads, a three-speed control and caster wheels.',
    description: 'The TG SMART TGC85WGM is a freestanding desert air cooler with an 85-litre water tank and honeycomb cooling pads. It has three fan speeds, a button control panel and caster wheels, and is listed for home, office and outdoor use.',
    primaryImage: '/images/products/tg-smart-85l-air-cooler-tgc85wgm.png',
    gallery: ['/images/products/tg-smart-85l-air-cooler-tgc85wgm.png',
      '/images/lifestyle/products/tg-smart-85l-air-cooler-tgc85wgm.jpg'
    ],
    keyHighlights: [
      '85-litre water tank',
      'Honeycomb cooling pads',
      'Three speed settings',
      'Caster wheels for moving between rooms',
      'Freestanding, button controls'
    ],
    keyFeatures: [],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0GSRD5DHM' },
          { label: 'Model Name', value: 'TGC85WGM' },
          { label: 'M.R.P.', value: '\u20b916,490' },
          { label: 'Tank Capacity', value: '85 Litres' },
          { label: 'Material', value: 'Plastic' },
          { label: 'Item Weight', value: '11 Kilograms' },
          { label: 'Controls Type', value: 'Button' },
          { label: 'Mounting Type', value: 'Freestanding' }
        ]
      }
    ],
    originalPrice: 16490,
    amazonUrl: 'https://www.amazon.in/TG-SMART-Air-Cooler-85L/dp/B0GSRD5DHM',
    availability: 'Available on Amazon',
    faqs: [],
    seoTitle: 'TG SMART Air Cooler 85L (TGC85WGM) | Amazon India',
    metaDescription: 'TG SMART TGC85WGM air cooler with an 85-litre tank, honeycomb cooling pads and three speed settings. Specifications and Amazon India listing.'
  },
  {
    id: 'tg-ac-85-dark-grey',
    slug: 'tg-smart-85l-plastic-body-air-cooler-dark-grey',
    name: 'TG SMART Plastic Body Air Cooler 85L (Dark Grey)',
    model: 'TGC85WGM-DG',
    asin: 'B0F3DCKPML',
    category: 'air-coolers',
    categoryName: 'Air Coolers',
    tagline: '85-litre plastic body air cooler in dark grey, with three speed settings.',
    shortDescription: 'Freestanding 85-litre air cooler with a plastic body, honeycomb cooling pads and three fan speeds.',
    description: 'The TG SMART TGC85WGM-DG is a freestanding desert air cooler with an 85-litre water tank and a dark grey plastic body. It carries honeycomb cooling pads, three fan speeds and caster wheels, and is listed for home, office, small rooms and large spaces.',
    primaryImage: '/images/products/tg-smart-85l-air-cooler-dark-grey.png',
    gallery: ['/images/products/tg-smart-85l-air-cooler-dark-grey.png',
      '/images/lifestyle/products/tg-smart-85l-plastic-body-air-cooler-dark-grey.jpg'
    ],
    keyHighlights: [
      '85-litre water tank',
      'Honeycomb cooling pads',
      'Three speed settings',
      'Dark grey plastic body',
      'Caster wheels for moving between rooms'
    ],
    keyFeatures: [],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0F3DCKPML' },
          { label: 'Model Name', value: 'TGC85WGM-DG' },
          { label: 'M.R.P.', value: '\u20b916,490' },
          { label: 'Tank Capacity', value: '85 Litres' },
          { label: 'Colour', value: 'Dark Grey' },
          { label: 'Material', value: 'Plastic' },
          { label: 'Number of Speeds', value: '3' },
          { label: 'Item Weight', value: '14 Kilograms' },
          { label: 'Mounting Type', value: 'Freestanding' }
        ]
      }
    ],
    originalPrice: 16490,
    amazonUrl: 'https://www.amazon.in/TG-SMART-Plastic-Body-Cooler/dp/B0F3DCKPML',
    availability: 'Available on Amazon',
    faqs: [],
    seoTitle: 'TG SMART Plastic Body Air Cooler 85L Dark Grey (TGC85WGM-DG)',
    metaDescription: 'TG SMART TGC85WGM-DG air cooler: 85-litre tank, honeycomb cooling pads, three speeds, dark grey plastic body. Specifications and Amazon India listing.'
  },
  {
    // NOTE: this Amazon listing is internally inconsistent - the title and model
    // name say 150L while its specification table says 40 Liters. Capacity is
    // deliberately left out until TG SMART confirms the correct figure.
    id: 'tg-ac-150-tgc150lgm',
    slug: 'tg-smart-150l-plastic-body-air-cooler',
    name: 'TG SMART Plastic Body Air Cooler 150L',
    model: 'TGC150LGM',
    asin: 'B0F3DF14T6',
    category: 'air-coolers',
    categoryName: 'Air Coolers',
    tagline: 'Portable plastic body desert cooler with honeycomb pads and three speed settings.',
    shortDescription: 'Portable freestanding air cooler with honeycomb cooling pads, a three-speed control and caster wheels.',
    description: 'The TG SMART TGC150LGM is a portable, freestanding desert air cooler with a grey plastic body, honeycomb cooling pads and an adjustable three-speed control. It is listed for residential, commercial and outdoor use.',
    primaryImage: '/images/products/tg-smart-150l-air-cooler.png',
    gallery: ['/images/products/tg-smart-150l-air-cooler.png',
      '/images/lifestyle/products/tg-smart-150l-plastic-body-air-cooler.jpg'
    ],
    keyHighlights: [
      'Honeycomb cooling pads',
      'Adjustable three-speed control',
      'Portable, freestanding body',
      'Caster wheels',
      'Listed for residential, commercial and outdoor use'
    ],
    keyFeatures: [],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0F3DF14T6' },
          { label: 'Model Name', value: 'TGC150LGM' },
          { label: 'M.R.P.', value: '\u20b96,000' },
          { label: 'Colour', value: 'Grey' },
          { label: 'Material', value: 'Plastic' },
          { label: 'Form Factor', value: 'Portable' },
          { label: 'Controls Type', value: 'Button' },
          { label: 'Mounting Type', value: 'Freestanding' }
        ]
      }
    ],
    originalPrice: 6000,
    amazonUrl: 'https://www.amazon.in/TG-SMART-Plastic-Body-Cooler/dp/B0F3DF14T6',
    availability: 'Available on Amazon',
    faqs: [],
    seoTitle: 'TG SMART Plastic Body Air Cooler 150L (TGC150LGM) | Amazon India',
    metaDescription: 'TG SMART TGC150LGM portable air cooler with honeycomb cooling pads and a three-speed control. Specifications and Amazon India listing.'
  },
  {
    id: 'tg-wm-75-abs',
    slug: 'tg-smart-7-5kg-semi-automatic-washing-machine-abs',
    name: 'TG SMART 7.5 kg Semi-Automatic Washing Machine (ABS Body)',
    model: 'TSAW-75 PLBR',
    asin: 'B0FR2CXQDB',
    category: 'washing-machines',
    categoryName: 'Washing Machines',
    tagline: '7.5 kg dual tub top load washer with an ABS body and magic filter.',
    shortDescription: 'Semi-automatic 7.5 kg top load washing machine with a dual tub, ABS plastic body and magic filter.',
    description: 'A semi-automatic top load washing machine with a 7.5 kg wash capacity and a dual tub layout. It has an ABS plastic body, two wash programs, magic filter technology and an air dryer function.',
    primaryImage: '/images/products/tg-smart-7-5kg-washing-machine-abs.png',
    gallery: ['/images/products/tg-smart-7-5kg-washing-machine-abs.png',
      '/images/lifestyle/products/tg-smart-7-5kg-semi-automatic-washing-machine-abs.jpg'
    ],
    keyHighlights: [
      '7.5 kg wash capacity',
      'Semi-automatic, top load dual tub',
      'Two wash programs',
      'Magic filter technology',
      'Air dryer function',
      'ABS plastic body'
    ],
    keyFeatures: [],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0FR2CXQDB' },
          { label: 'M.R.P.', value: '\u20b912,490' },
          { label: 'Capacity', value: '7.5 kg' },
          { label: 'Access Location', value: 'Top Load' },
          { label: 'Special Feature', value: 'Magic Filter Technology' },
          { label: 'Product Dimensions', value: '77.5D x 101.5W x 51.5H Centimeters' }
        ]
      }
    ],
    originalPrice: 12490,
    amazonUrl: 'https://www.amazon.in/TG-Semi-Automatic-Washing-Powerful-Efficient/dp/B0FR2CXQDB',
    availability: 'Available on Amazon',
    faqs: [],
    seoTitle: 'TG SMART 7.5 kg Semi-Automatic Washing Machine, ABS Body | Amazon India',
    metaDescription: 'TG SMART 7.5 kg semi-automatic top load washing machine with dual tub, ABS body, two wash programs and magic filter. Specifications and Amazon India listing.'
  },
  {
    id: 'tg-wm-75-black',
    slug: 'tg-smart-7-5kg-semi-automatic-washing-machine-black',
    name: 'TG SMART 7.5 kg Semi-Automatic Washing Machine (Black)',
    model: 'B0GRNK9RJ7',
    asin: 'B0GRNK9RJ7',
    category: 'washing-machines',
    categoryName: 'Washing Machines',
    tagline: '7.5 kg dual tub top load washer in black, with magic filter.',
    shortDescription: 'Semi-automatic 7.5 kg top load washing machine with a dual tub and magic filter, in black.',
    description: 'A semi-automatic top load washing machine with a 7.5 kg wash capacity and a dual tub layout, finished in black. It has two wash programs, magic filter technology and an air dryer function.',
    primaryImage: '/images/products/tg-smart-7-5kg-washing-machine-black.png',
    gallery: ['/images/products/tg-smart-7-5kg-washing-machine-black.png',
      '/images/lifestyle/products/tg-smart-7-5kg-semi-automatic-washing-machine-black.jpg'
    ],
    keyHighlights: [
      '7.5 kg wash capacity',
      'Semi-automatic, top load dual tub',
      'Two wash programs',
      'Magic filter technology',
      'Air dryer function',
      'Black finish'
    ],
    keyFeatures: [],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0GRNK9RJ7' },
          { label: 'M.R.P.', value: '\u20b912,490' },
          { label: 'Capacity', value: '7.5 kg' },
          { label: 'Access Location', value: 'Top Load' },
          { label: 'Special Feature', value: 'Magic Filter Technology' },
          { label: 'Product Dimensions', value: '77.5D x 101.5W x 51.5H Centimeters' }
        ]
      }
    ],
    originalPrice: 12490,
    amazonUrl: 'https://www.amazon.in/TG-Semi-Automatic-Washing-Powerful-Efficient/dp/B0GRNK9RJ7',
    availability: 'Available on Amazon',
    faqs: [],
    seoTitle: 'TG SMART 7.5 kg Semi-Automatic Washing Machine, Black | Amazon India',
    metaDescription: 'TG SMART 7.5 kg semi-automatic top load washing machine in black, with dual tub, two wash programs and magic filter. Specifications and Amazon India listing.'
  },
  {
    id: 'tg-wm-9-pulsator',
    slug: 'tg-smart-9kg-semi-automatic-top-load-washer',
    name: 'TG SMART 9 kg Semi-Automatic Top Load Washer',
    model: 'B0GT4XZCLP',
    asin: 'B0GT4XZCLP',
    category: 'washing-machines',
    categoryName: 'Washing Machines',
    tagline: '9 kg top load washer with a pulsator, magic filter and end-cycle buzzer.',
    shortDescription: 'Semi-automatic 9 kg top load washer with a pulsator, magic filter technology and an end-cycle buzzer.',
    description: 'A semi-automatic top load washer with a 9 kg wash capacity. It uses a pulsator wash action, carries magic filter technology, an end-cycle buzzer and multiple wash programs set from control knobs.',
    primaryImage: '/images/products/tg-smart-9kg-top-load-washer.png',
    gallery: ['/images/products/tg-smart-9kg-top-load-washer.png',
      '/images/lifestyle/products/tg-smart-9kg-semi-automatic-top-load-washer.jpg'
    ],
    keyHighlights: [
      '9 kg wash capacity',
      'Semi-automatic, top load',
      'Pulsator wash action',
      'Magic filter technology',
      'End-cycle buzzer',
      'Multiple wash programs on control knobs'
    ],
    keyFeatures: [],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'ASIN', value: 'B0GT4XZCLP' },
          { label: 'M.R.P.', value: '\u20b99,990' },
          { label: 'Capacity', value: '9 kg' },
          { label: 'Access Location', value: 'Top Load' },
          { label: 'Special Feature', value: 'Magic Filter Technology' },
          { label: 'Product Dimensions', value: '60D x 40W x 80H Centimeters' }
        ]
      }
    ],
    originalPrice: 9990,
    amazonUrl: 'https://www.amazon.in/TG-Powerful-Pulsator-Technology-Efficient/dp/B0GT4XZCLP',
    availability: 'Available on Amazon',
    faqs: [],
    seoTitle: 'TG SMART 9 kg Semi-Automatic Top Load Washer | Amazon India',
    metaDescription: 'TG SMART 9 kg semi-automatic top load washer with pulsator wash action, magic filter and end-cycle buzzer. Specifications and Amazon India listing.'
  },
  {
    // Listing link and M.R.P. still to come from TG SMART.
    id: 'tg-tv-32-google',
    slug: 'tg-smart-32-inch-google-tv',
    name: 'TG SMART 32-inch Google TV',
    category: 'televisions',
    categoryName: 'Televisions',
    tagline: '32-inch smart television running Google TV.',
    shortDescription: '32-inch TG SMART smart television running Google TV, with built-in apps and screen casting.',
    description: 'A 32-inch TG SMART smart television running Google TV. It carries built-in apps and screen casting from a phone or laptop.',
    primaryImage: '/images/products/tg-smart-32-inch-smart-tv.png',
    gallery: [
      '/images/products/tg-smart-32-inch-smart-tv.png',
      '/images/lifestyle/products/tg-smart-32-inch-google-tv.jpg'
    ],
    keyHighlights: [
      '32-inch screen',
      'Google TV platform',
      'Built-in apps',
      'Screen casting'
    ],
    keyFeatures: [],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'Screen Size', value: '32 inches' },
          { label: 'Platform', value: 'Google TV' }
        ]
      }
    ],
    amazonUrl: 'https://www.amazon.in/stores/TGSMART/page/FBE6C82C-32B6-4C0E-802F-2CD78010EBED',
    availability: 'Available on Amazon',
    faqs: [],
    seoTitle: 'TG SMART 32-inch Google TV | Smart Television',
    metaDescription: 'TG SMART 32-inch smart television running Google TV, with built-in apps and screen casting.'
  },
  {
    // Listing link and M.R.P. still to come from TG SMART.
    id: 'tg-tv-43-android',
    slug: 'tg-smart-43-inch-smart-tv',
    name: 'TG SMART 43-inch Smart TV (Android)',
    category: 'televisions',
    categoryName: 'Televisions',
    tagline: '43-inch Android smart television with built-in apps.',
    shortDescription: '43-inch TG SMART Android smart television with built-in apps and wireless connectivity.',
    description: 'A 43-inch TG SMART smart television running Android, with built-in apps, wireless connectivity and multiple input options.',
    primaryImage: '/images/products/tg-smart-43-inch-smart-tv.png',
    gallery: [
      '/images/products/tg-smart-43-inch-smart-tv.png',
      '/images/lifestyle/products/tg-smart-43-inch-smart-tv.jpg'
    ],
    keyHighlights: [
      '43-inch screen',
      'Android platform',
      'Built-in apps',
      'Wireless connectivity',
      'Multiple connectivity options'
    ],
    keyFeatures: [],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'TG SMART' },
          { label: 'Screen Size', value: '43 inches' },
          { label: 'Platform', value: 'Android' }
        ]
      }
    ],
    amazonUrl: 'https://www.amazon.in/stores/TGSMART/page/FBE6C82C-32B6-4C0E-802F-2CD78010EBED',
    availability: 'Available on Amazon',
    faqs: [],
    seoTitle: 'TG SMART 43-inch Android Smart TV | Smart Television',
    metaDescription: 'TG SMART 43-inch Android smart television with built-in apps and wireless connectivity.'
  }
];

export const BRAND_INFO = {
  name: 'TG SMART',
  fullName: 'TG SMART Home Appliances',
  eyebrow: 'OFFICIAL AMAZON BRAND STORE · DIRECT DISPATCH',
  headline: 'Everyday Living. Made Smarter.',
  tagline: 'Practical and reliable appliances engineered for modern Indian homes.',
  description: 'TG SMART is an Indian home-appliance brand focused on delivering reliable, practical, and energy-conscious appliances designed for everyday living in Indian households.',
  businessLocation: {
    country: 'India',
    region: 'Telangana',
    city: 'Hyderabad & Secunderabad',
    address: 'Secunderabad & Hyderabad, Telangana, India',
    email: 'support@tgsmart.in',
    phone: '+91 (0) 40 2345 6789'
  },
  marketplaces: {
    amazonStoreUrl: 'https://www.amazon.in/stores/TGSMART/page/FBE6C82C-32B6-4C0E-802F-2CD78010EBED',
    flipkartSearchUrl: 'https://www.flipkart.com/search?q=TG+SMART'
  },
  social: {
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    facebook: 'https://facebook.com'
  }
};

/**
 * Catalogue helpers.
 *
 * Pricing policy: the site quotes M.R.P. only. `price`/`discountPercent` stay in
 * the data for reference but are not rendered anywhere.
 */
export const getMrp = (product: Product): number | undefined =>
  product.originalPrice ?? product.price;

export const formatInr = (amount: number): string => `₹${amount.toLocaleString('en-IN')}`;

/** Reads a value straight out of a product's own specification tables. */
export const getSpecValue = (product: Product, ...labels: string[]): string | undefined => {
  for (const label of labels) {
    for (const group of product.specifications) {
      const hit = group.items.find((item) => item.label.toLowerCase() === label.toLowerCase());
      if (hit) return hit.value;
    }
  }
  return undefined;
};

/** The headline capacity/spec shown on a product card, taken from the spec table. */
export const getHeadlineSpec = (product: Product): string | undefined =>
  getSpecValue(product, 'Tank Capacity', 'Capacity', 'Winding Material', 'Screen Size');
