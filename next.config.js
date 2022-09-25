/** @type {import('next').NextConfig} */
require('dotenv').config();
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
  env: {
    API_KEY: process.env.API_KEY,
  },
  optimizeFileTracing: false,
};

module.exports = nextConfig;
