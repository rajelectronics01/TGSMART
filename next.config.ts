import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        // the stabiliser category was folded into Other Appliances
        source: '/products/voltage-stabilizers',
        destination: '/products/other-appliances',
        permanent: true,
      },
      {
        source: '/products/voltage-stabilizers/:slug',
        destination: '/products/other-appliances/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
