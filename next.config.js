/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['dummyimage.com', 'adk-fe-onboarding-static.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
