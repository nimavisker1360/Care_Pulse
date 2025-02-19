/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
    PROJECT_ID: process.env.PROJECT_ID,
    API_KEY: process.env.API_KEY,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
