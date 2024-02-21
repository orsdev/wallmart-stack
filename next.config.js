/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT
  }
};

module.exports = nextConfig;
