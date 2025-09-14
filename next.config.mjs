// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// حدد المسار الصحيح لملف الطلبات داخل src/app/i18n
const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  serverExternalPackages: ['@prisma/client', 'bcryptjs'],

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' }
    ]
  },

  experimental: {
    serverActions: { allowedOrigins: ['localhost:3000'] }
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' }
        ]
      }
    ];
  }
};

export default withNextIntl(nextConfig);
