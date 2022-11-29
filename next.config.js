/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
