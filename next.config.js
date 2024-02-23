// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    BaseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

module.exports = nextConfig;
