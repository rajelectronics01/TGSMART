import React from 'react';

export function AmazonIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.92 15.65c-2.08 1.54-5.11 2.37-7.73 2.37-3.67 0-6.97-1.42-9.47-3.8-.2-.19-.04-.44.2-.3 2.7 1.57 6.02 2.51 9.47 2.51 2.33 0 4.88-.54 7.21-1.68.36-.18.66.24.32.9zm1.3-1.07c-.26-.34-1.74-.16-2.4-.08-.2.03-.23-.15-.05-.28 1.18-.84 3.12-.6 3.35-.31.23.29-.06 2.27-1.18 3.19-.18.15-.35.07-.27-.12.27-.63.81-2.06.55-2.4zM14.73 8.35v1.39c-.06.94-.48 1.4-1.35 1.4-.4 0-.82-.16-1.13-.42l-.24.31c.36.31.87.5 1.46.5 1.34 0 2.05-.75 2.05-2.15V5.5h-.79v2.85zm-4.71 1.72c-.89 0-1.57-.61-1.57-1.46 0-.87.69-1.47 1.6-1.47.85 0 1.52.57 1.57 1.36h-1.6zm2.4 1.41V8.6c0-1.39-1.05-2.2-2.43-2.2-1.39 0-2.38.83-2.38 2.15 0 1.36 1.05 2.22 2.45 2.22.84 0 1.53-.33 1.93-.89l.25.32c-.52.68-1.35 1.05-2.28 1.05-1.92 0-3.32-1.2-3.32-3.03 0-1.81 1.4-3.02 3.35-3.02 1.94 0 3.25 1.25 3.25 3.02v2.28h-.82z"/>
    </svg>
  );
}

export function FlipkartIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.7 3.5l-2.4 2.4H7.5L5.1 3.5h12.6zm-1.8 3.6L12 11 8.1 7.1h7.8zm2.4-5.1H5.7L2 5.7v14.8c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V5.7l-3.7-3.7zM12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
    </svg>
  );
}

interface MarketplaceButtonProps {
  platform: 'amazon' | 'flipkart';
  url?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export function MarketplaceButton({
  platform,
  url,
  size = 'md',
  fullWidth = false,
  className = ''
}: MarketplaceButtonProps) {
  if (!url) return null;

  const isAmazon = platform === 'amazon';
  const label = isAmazon ? 'View on Amazon' : 'View on Flipkart';
  
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-xs',
    md: 'py-2 px-3.5 text-xs font-medium',
    lg: 'py-2.5 px-5 text-sm font-medium'
  }[size];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded border transition-colors duration-150 ${
        isAmazon
          ? 'bg-white hover:bg-neutral-50 text-[#111111] border-[#E5E5E5] hover:border-[#111111]'
          : 'bg-white hover:bg-neutral-50 text-[#111111] border-[#E5E5E5] hover:border-neutral-900'
      } ${sizeClasses} ${fullWidth ? 'w-full' : ''} ${className}`}
      aria-label={`${label} (opens in new tab)`}
    >
      {isAmazon ? (
        <span className="flex items-center gap-1.5">
          <span className="font-bold tracking-tight text-neutral-900">amazon</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <span className="font-bold tracking-tight text-neutral-900">Flipkart</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900" />
        </span>
      )}
      <span className="text-neutral-600 font-normal">{isAmazon ? 'on Amazon' : 'on Flipkart'}</span>
    </a>
  );
}
