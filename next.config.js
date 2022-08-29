/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.pinimg.com', 'images.pexels.com'],
  },
}

module.exports = nextConfig
