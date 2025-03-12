/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["vercel.com"],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    // Needed for Vercel serverless deployment
    serverComponentsExternalPackages: [],
  },
  // Fix issues with trailing slashes
  trailingSlash: false,
};

module.exports = nextConfig;
