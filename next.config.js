/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "papareact.com",
      },
    ],
  },
};

module.exports = nextConfig;
