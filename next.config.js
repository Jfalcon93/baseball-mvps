/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.baseball-reference.com"],
  },
};

module.exports = nextConfig;
