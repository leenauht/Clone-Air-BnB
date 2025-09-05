import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Cho phép tất cả domain (ít bảo mật hơn)
      },
    ],
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
