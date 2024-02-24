/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true, // Enable Server Actions
  // },
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.papareact.com",
      },
      {
        protocol: "https",
        hostname: "**.dummyjson.com",
      },
    ],
  },
};

module.exports = nextConfig;
