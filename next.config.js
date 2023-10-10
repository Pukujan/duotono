/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.hyperce.io",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "gunjjo.hyperce.io",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "www.w3schools.com",
        pathname: "/w3images/*",
      },
    ],
    domains: ["admin.hyperce.io", "gunjjo.hyperce.io"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
