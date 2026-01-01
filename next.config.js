/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com', 
      'github.com', 
      'raw.githubusercontent.com',
      'site-assets.plasmic.app',
      'img.plasmic.app',
      'embed-ssl.wistia.com',
      'pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Disable ESLint during builds
  eslint: {
    // Warning: this will completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
