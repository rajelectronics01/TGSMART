'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0] || '/images/products/tg-smart-85l-air-cooler.png');

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      {/* Thumbnail List */}
      <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto scrollbar-none sm:w-20 flex-shrink-0">
        {images.map((img, idx) => {
          const isSelected = selectedImage === img;
          return (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border bg-[#F8F9FA] transition-all flex-shrink-0 ${
                isSelected ? 'border-neutral-900 ring-1 ring-neutral-900' : 'border-[#E5E5E5] hover:border-neutral-400'
              }`}
              aria-label={`View image ${idx + 1} of ${productName}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </button>
          );
        })}
      </div>

      {/* Main Image Display */}
      <div className="relative aspect-square sm:aspect-[4/3] flex-1 bg-[#F8F9FA] rounded-lg border border-[#E5E5E5] overflow-hidden p-6">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          priority
          className="object-contain p-4 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
