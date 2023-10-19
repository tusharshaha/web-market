/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['htmldemo.net', "og-images-v2.himalayas.app"], // Add the domain of the image here
  },
};

module.exports = nextConfig;
