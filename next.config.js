/** @type {import('next').NextConfig} */
require('dotenv').config();

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['dummyimage.com', 'adk-fe-onboarding-static.s3.amazonaws.com'],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
});

module.exports = nextConfig;
