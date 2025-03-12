/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["vercel.com"],
    unoptimized: true,
  },
  experimental: {
    // Needed for Vercel serverless deployment
    serverComponentsExternalPackages: [],
  },
  // Fix issues with trailing slashes
  trailingSlash: false,
};

module.exports = nextConfig;
